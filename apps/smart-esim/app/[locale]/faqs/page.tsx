import { Metadata } from "next";
import { seoData } from "@/lib/seo/seoConfig";

import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { baseUrl, faqsPath, PageParams } from "@/constants/constants";

type PageProps = {
  params: Promise<{ locale: Locale }>;
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
  const t = await getTranslations(`FAQsPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${faqsPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("FAQsPage.hero");
  return (
    <>
      <section className="xl:container-fluid">
        <CountryRegionsHero
          heading={t("title")}
          description={t("description")}
          enableSearchList={false}
        />
      </section>

      <FAQSection namespace={FAQ_NAMESPACES.FAQsPage} />
    </>
  );
}

export default Page;
