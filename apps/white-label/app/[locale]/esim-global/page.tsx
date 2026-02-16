import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import CountryPackagesSection from "@/components/packages/CountryPackagesSection";
import PagesMeta from "@/components/packages/PagesMeta";
import AdvantagesCard from "@/components/ui/cards/AdvantagesCard";
import GlobalPageHero from "@/components/ui/heros/GlobalPageHero";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import WiderCoverage from "@/components/ui/sections/WiderCoverage";
import { globalFeatureData } from "@/constants/UIData";
import { FAQ_NAMESPACES } from "@/types/keys";
import { HOST } from "@workspace/core/constants/host.constants";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import {
  getGlobalPackages,
  getMetaDataOfGlobal,
} from "@workspace/core/services/packages/packages.services";
import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const data = await getMetaDataOfGlobal(locale);

  const {
    head_title,
    meta_description,
    meta_keywords,
    image_url,
    created_at,
    updated_at,
  } = data;

  return generateDynamicSeo({
    meta_title: head_title,
    meta_description,
    meta_keywords,
    url: `${HOST}esim-global/`,
    image: image_url || "https://yaalo.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at,
    modifiedTime: created_at || updated_at,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t= await getTranslations("GlobalPage")
  const getPackagesOfGlobalPromise = getGlobalPackages();
  const getMetaDataOfGlobalPromise = getMetaDataOfGlobal();

  const [packagesOfGlobal, metaDataOfGlobal] = await Promise.all([
    getPackagesOfGlobalPromise,
    getMetaDataOfGlobalPromise,
  ]);

  const { data: packages } = packagesOfGlobal;

  const global = {
    name: t("global"),
    banner: "/images/globalBanner.webp",
    image_url: "/images/globalFlag.svg",
  };

  const {
    name: globalName,
    banner: globalImage,
    image_url: globalFlag,
  } = global;

  const { page_description, page_technical_specs, page_features } =
    metaDataOfGlobal;

  const showMetaDataOfPages =
    page_description && page_technical_specs && page_features;

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
      <GlobalPageHero
        heading={t("hero.heading")}
        description={t("hero.description")}
      />

      <CountryRegionNavigation tabsLinks={dataOnlyLinks} locale={locale} />

      <section className="container mt-16">
        <CountryPackagesSection
          packages={packages}
          countryFlag={globalFlag}
          countryImage={globalImage}
          countryName={globalName}
        />
      </section>

      {/* {showMetaDataOfPages && (
        <section className="container mt-16">
          <PagesMeta
            countryName={globalName}
            description={page_description}
            features={page_features}
            technicalSpecs={page_technical_specs}
          />
        </section>
      )} */}
      <section className="container grid xl:grid-cols-[35fr_65fr] gap-6 sm:grid-cols-1 py-12">
        <div className="order-2 sm:order-1">
          <WiderCoverage locale={locale} />
        </div>
        <div className="order-1 sm:order-2">
          {/* <PaymentMethods /> */}
          {showMetaDataOfPages && (
            <section className="container">
              <PagesMeta
                countryName={globalName}
                description={page_description}
                features={page_features}
                technicalSpecs={page_technical_specs}
              />
            </section>
          )}
        </div>
      </section>

      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="text-center text-h2 xl:text-start">
          {t("globalFeatureData.title")}
        </h2>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {globalFeatureData.map((item, index) => (
            <AdvantagesCard
              key={index}
              index={index}
              icon={item.icon}
              title={t(`globalFeatureData.cards.${item.key}.title`)}
              body={t(`globalFeatureData.cards.${item.key}.body`)}
            />
          ))}
        </div>
      </section>

      <AppInstall />

      <FAQSection namespace={FAQ_NAMESPACES.GlobalPage} />
    </>
  );
}

export default Page;
