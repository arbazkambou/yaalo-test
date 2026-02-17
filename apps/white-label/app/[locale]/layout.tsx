import CartDetailSheet from "@/components/cart/CartDetailSheet";
import FloatingBottomNav from "@/components/layout/FloatingBottomNav";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ChatSupportDialog } from "@/components/third-party/ChatSupportDialog";
import { routing } from "@/i18n/routing";
import AuthProvider from "@workspace/core/providers/AuthProvider";
import ReactQueryProvider from "@workspace/core/providers/ReactQueryProvider";
import ReduxProvider from "@workspace/core/providers/ReduxProvider";
import SessionProvider from "@workspace/core/providers/SessionProvider";
import { ThemeProvider } from "@workspace/core/providers/ThemeProvider";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";
import { Toaster } from "@workspace/ui/components/sonner";
import "@workspace/ui/white-label.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Manrope, Poppins, Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export function generateStaticParams() {
  return routing.locales.slice(0, 2).map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const direction = locale === "ar" ? "rtl" : "ltr";
  const { support } = await getAppSettings();
  return (
    <html lang="en" suppressHydrationWarning dir={direction}>
      <head>
        <Script
          strategy="lazyOnload"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        />
      </head>
      {/* <Suspense> */}
      <body
        className={`${sans.variable} ${manrope.variable} ${poppins.variable}  relative bg-background font-sans text-body-base font-400 text-foreground`}
      >
        <NextIntlClientProvider>
          <NextTopLoader
            showSpinner={false}
            color="var(--primary)"
            zIndex={110}
            initialPosition={0.08}
            height={3}
            easing="ease"
            speed={400}
            shadow="0 0 10px var(--primary), 0 0 5px var(--primary)"
          />
          <SessionProvider>
            <Suspense>
              <AuthProvider>
                <ReduxProvider>
                  <ThemeProvider>
                    <ReactQueryProvider>
                      <Toaster richColors closeButton position="top-center" />
                      <Suspense>
                        <Header locale={locale} />
                      </Suspense>
                      {children}
                      <CartDetailSheet />
                      <Footer />
                    </ReactQueryProvider>
                    <Suspense>
                      <FloatingBottomNav locale={locale} />
                    </Suspense>
                  </ThemeProvider>
                </ReduxProvider>
              </AuthProvider>
            </Suspense>
          </SessionProvider>
          <ChatSupportDialog whatsappNumber={support.phone} />
          {/* <TawkScript /> */}
        </NextIntlClientProvider>
      </body>
      {/* </Suspense> */}
    </html>
  );
}
