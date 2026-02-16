import GetThankYouPageInfo from "@/components/purchase/GetThankYouPageInfo";
import { ThankYouSkeleton } from "@/components/ui/skeltons/ThankYouSkeleton";
import { PageParams, baseUrl, loginPath } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PropsType = {
    params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ status: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations(`ThankYouPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${loginPath}`,
  });
}

async function Page({ searchParams, params }: PropsType) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <section className="pt-40">
      <Suspense fallback={<ThankYouSkeleton />}>
        <GetThankYouPageInfo searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

export default Page;
