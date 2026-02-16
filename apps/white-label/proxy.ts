

import { REFERRAL_KEY } from "@workspace/core/constants/host.constants";
import { auth } from "@workspace/core/lib/NextAuth";
import createMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing"; 
import { sendLog } from "@workspace/core/lib/elastic-search/elasticLogHelpers";

const intlMiddleware = createMiddleware(routing);

const protectedMatchers = [
  "/etc/:path*",
  "/refill",
  "/my-esims/:path*",
  "/sim-buy-thank-you",
];

export async function proxy(request: NextRequest) {
  // 1. Let next-intl handle locale detection / redirect / rewrite first
  const intlResponse = intlMiddleware(request);

   if (process.env.NEXT_PUBLIC_ENV === "production") {
    void sendLog(request, intlResponse);
  }


  // If next-intl wants to redirect (e.g. / → /en, unsupported locale → 404-like, etc.)
  // → return it immediately and skip everything else
  if (intlResponse.status >= 300 && intlResponse.status < 400) {
    return intlResponse;
  }

  // Otherwise we have a "pass-through" response (usually NextResponse.next())
  // We'll now build on top of it
  const response = intlResponse;

  // 2. GLOBAL REFERRAL TRACKING (every URL)
  const referralFromUrl = request.nextUrl.searchParams.get(REFERRAL_KEY);

  if (referralFromUrl) {
    response.cookies.set({
      name: REFERRAL_KEY,
      value: referralFromUrl,
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });
  }

  // 3. PURCHASE CHECK (only thank-you page)
  // Note: pathname already has /en or /ar prefix here
  if (request.nextUrl.pathname.endsWith("/sim-buy-thank-you")) {
    const cookieStore = await cookies();
    const isPurchase = cookieStore.get("isPurchase")?.value;
    if (isPurchase !== "true") {
      // Redirect to home — but include current locale!
      const locale =
        request.nextUrl.pathname.split("/")[1] || routing.defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  // 4. AUTH CHECK (only matched routes)
  // Use .match() with adjusted pattern (since pathname now includes locale)
  const pathnameWithoutLocale =
    request.nextUrl.pathname.replace(/^\/(en|ar)/, "") || "/";

  const isProtectedRoute = protectedMatchers.some((pattern) => {
    const regexPattern = pattern
      .replace(/\/:path\*/, "(/.*)?")
      .replace(/^\//, "^/");
    return new RegExp(regexPattern).test(pathnameWithoutLocale);
  });

  if (isProtectedRoute) {
    const session = await auth();
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|api/log|.*\\..*).*)",
    "/",
  ],
};
