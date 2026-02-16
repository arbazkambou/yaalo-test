import GetThankYouPageInfo from "@/components/purchase/GetThankYouPageInfo";
import { ThankYouSkeleton } from "@/components/ui/skeltons/ThankYouSkeleton";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import { Suspense } from "react";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type PropsType = {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ status: string }>;
};

export function generateMetadata(): Metadata {
  const localizedSeo = seoData["en"]!;
  return localizedSeo.thankYou;
}

async function Page({ searchParams, params }: PropsType) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <Suspense fallback={<ThankYouSkeleton />}>
      <GetThankYouPageInfo searchParams={searchParams} />
    </Suspense>
  );
}

export default Page;
