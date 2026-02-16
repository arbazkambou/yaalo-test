import { auth } from "@workspace/core/lib/NextAuth";
import createMiddleware from "next-intl/middleware";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

const protectedRoutes = [
  "/etc/:path*",
  "/refill",
  "/my-esims/:path*",
  "/sim-buy-thank-you",
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const intlResponse = handleI18nRouting(request);

  if (pathname === "/sim-buy-thank-you" || pathname === "/sim-buy-thank-you/") {
    const cookieStore = await cookies();
    const isPurchase = cookieStore.get("isPurchase")?.value;
    if (isPurchase !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (
    protectedRoutes.some((route) =>
      pathname.startsWith(route.replace(":path*", ""))
    )
  ) {
    const session = await auth();
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return intlResponse;
}

// export const config = {
//   matcher: [
//     "/etc/:path*",
//     "/checkout",
//     "/refill",
//     "/my-esims/:path*",
//     "/sim-buy-thank-you",
//   ],
// };

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
