import GetCountriesWithStartingPrice from "@/components/data-fetching/GetCountriesWithStartingPrice";
import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import StartingPriceSkelton from "@/components/ui/skeltons/StartingPriceSkelton";
import { schemaMarkup } from "@/constants/UIData";
import { seoData } from "@/lib/seo/seoConfig";
import { FAQ_NAMESPACES } from "@/types/keys";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { baseUrl, esimPage, homePath, PageParams } from "@/constants/constants";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";

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
  const t = await getTranslations(`EsimPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${esimPage}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations("EsimPage");
  const dataOnlyLinks = [
    {
      label: t("tabs.local"),
      href: "/esim/",
    },
    {
      label: t("tabs.regional"),
      href: "/regional/",
    },
    {
      label: t("tabs.global"),
      href: "/global/",
    },
  ];

  return (
    <>
      {/* script to add sceham org from api  */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        type="application/ld+json"
      />
      <CountryRegionsHero
        heading={t("hero.heading")}
        description={t("hero.description")}
        locale={locale}
      />
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />
      <section className="container mt-16">
        <h2 className="mb-16 text-center font-montserrat text-h2-base font-600 leading-normal md:text-h2-base xl:text-start  xl:text-h2-xl">
          {t("exploreEsims")}
        </h2>
        <Suspense fallback={<StartingPriceSkelton />}>
          <GetCountriesWithStartingPrice locale={locale} />
        </Suspense>
      </section>
      <FAQSection namespace={FAQ_NAMESPACES.EsimPage} />
      <AppInstall />
    </>
  );
}

export default Page;
