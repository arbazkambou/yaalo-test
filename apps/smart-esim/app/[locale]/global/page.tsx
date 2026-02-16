import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import CountryPackagesSection from "@/components/packages/CountryPackagesSection";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { FAQ_NAMESPACES } from "@/types/keys";
import {
  getGlobalPackages,
  getMetaDataOfGlobal,
} from "@workspace/core/services/packages/packages.services";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { baseUrl, globalPath, PageParams } from "@/constants/constants";
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
  const t = await getTranslations(`GlobalPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${globalPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("GlobalPage");
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const getPackagesOfGlobalPromise = getGlobalPackages(locale);
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
      <CountryRegionsHero
        heading={t("hero.heading")}
        description={t("hero.description")}
        locale={locale}
      />

      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

      <section className="container mt-16">
        <CountryPackagesSection
          packages={packages}
          countryFlag={globalFlag}
          countryImage={globalImage}
          countryName={globalName}
        />
      </section>

      <FAQSection namespace={FAQ_NAMESPACES.GlobalPage} />
      <AppInstall />
    </>
  );
}

export default Page;
