import EsimDetailPage from "@/components/sims/EsimDetailPage";
import { baseUrl, myEsimsPath, PageParams } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  const t = await getTranslations(`mySimPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${myEsimsPath}`,
  });
}

async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  return (
    <Suspense>
      <EsimDetailPage params={params} />;
    </Suspense>
  );
}

export default Page;
