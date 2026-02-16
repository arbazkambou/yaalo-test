import { Metadata } from "next";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FAQsPage from "@/components/ui/sections/FAQsPage";
import { hasLocale, Locale } from "next-intl";
import { PageParams, baseUrl, faqsPath } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { FAQ_NAMESPACES } from "@/types/keys";

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
      <CountryRegionsHero
        heading={t("title")}
        description={t("description")}
      />
      <FAQsPage namespace={FAQ_NAMESPACES.FAQsPage} />
    </>
  );
}

export default Page;
