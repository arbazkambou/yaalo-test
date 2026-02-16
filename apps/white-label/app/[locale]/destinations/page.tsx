import GetCountriesWithStartingPrice from "@/components/data-fetching/GetCountriesWithStartingPrice";
import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import EmailReceive from "@/components/presentational/EmailReceive";
import AdvantagesCard from "@/components/ui/cards/AdvantagesCard";
import PageTextCard from "@/components/ui/cards/PageTextCard";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import StartingPriceSkelton from "@/components/ui/skeltons/StartingPriceSkelton";
import { baseUrl, esimPage, PageParams } from "@/constants/constants";
import { esimPageFeatureData } from "@/constants/UIData";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { FAQ_NAMESPACES } from "@/types/keys";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  const cardsData = [
    {
      title: t("whyYaalo.cards.1.title"),
      paras: [
        t("whyYaalo.cards.1.paras.1"),
        t("whyYaalo.cards.1.paras.2"),
        t("whyYaalo.cards.1.paras.3"),
      ],
    },
    {
      title: t("whyYaalo.cards.2.title"),
      paras: [t("whyYaalo.cards.2.paras.1"), t("whyYaalo.cards.2.paras.2")],
    },
    {
      title: t("whyYaalo.cards.3.title"),
      paras: [t("whyYaalo.cards.3.paras.1")],
    },
  ];
  const dataOnlyLinks: {
    label: string;
    href: string;
    iconKey: "local" | "regional" | "global";
  }[] = [
    {
      label: t("tabs.local"),
      href: "/destinations/",
      iconKey: "local",
    },
    {
      label: t("tabs.regional"),
      href: "/regional/",
      iconKey: "regional",
    },
    {
      label: t("tabs.global"),
      href: "/esim-global/",
      iconKey: "global",
    },
  ];

  return (
    <>
      {/* script to add sceham org from api  */}
      {/* hero section */}
      <CountryRegionsHero
        heading={
          <>
            {t.rich("hero.heading", {
              br: () => (
                <span className="mt-2 inline xl:block">
                  <br />
                </span>
              ),
            })}
          </>
        }
        description={t("hero.description")}
      />
      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} locale={locale} />
      {/* countries packages section with starting price */}
      <section className="container mt-16">
        <h2 className="text-h2 mb-16">{t("exploreEsims")}</h2>
        <Suspense fallback={<StartingPriceSkelton />}>
          <GetCountriesWithStartingPrice locale={locale} />
        </Suspense>
      </section>
          <EmailReceive countryName={t("anyCountry")} />
      {/* Page text  */}
      <section className="container mt-16 flex flex-col gap-10">
        {cardsData.map((item, index) => (
          <PageTextCard cardData={item} key={index} />
        ))}
      </section>
      {/* Advantages text  */}
      <section className="container mt-10">
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {esimPageFeatureData.map((item, index) => (
            <AdvantagesCard
              key={index}
              index={index}
              icon={item.icon}
              title={t(`esimPageFeatureData.cards.${item.key}.title`)}
              body={t(`esimPageFeatureData.cards.${item.key}.body`)}
            />
          ))}
        </div>
      </section>
  
      <AppInstall />
      <FAQSection namespace={FAQ_NAMESPACES.EsimPage} />
    </>
  );
}

export default Page;
