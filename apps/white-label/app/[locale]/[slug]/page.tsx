import CountryPackagesSection from "@/components/packages/CountryPackagesSection";
import PagesMeta from "@/components/packages/PagesMeta";
import EmailReceive from "@/components/presentational/EmailReceive";
import AppInstall from "@/components/ui/sections/AppInstall";
import EsimAdvantages from "@/components/ui/sections/EsimAdvantages";
import EsimSteps from "@/components/ui/sections/EsimSteps";
import FAQs from "@/components/ui/sections/FAQs";
import WiderCoverage from "@/components/ui/sections/WiderCoverage";
import { FAQ_NAMESPACES } from "@/types/keys";
import { HOST } from "@workspace/core/constants/host.constants";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import {
  getCountriesWithStartingPrice,
  getMetaDataOfCountry,
  getMetaDataOfRegion,
  getPackagesOfCountry,
  getPackagesOfRegion,
  getRegionsThatHavePackages,
} from "@workspace/core/services/packages/packages.services";
import {
  GetCountryPackagesResponse,
  MetaData,
} from "@workspace/core/types/services/packages/packages.types";
import { Locale } from "next-intl";
import { notFound } from "next/navigation";

type PropsType = {
  params: Promise<{ slug: string; locale: Locale }>;
};

// export async function generateStaticParams() {
//   const countries = await getCountriesWithStartingPrice();
//   const regions = await getRegionsThatHavePackages();
//   const allDestinations = [...countries, ...regions];

//   return allDestinations.map((item) => ({ slug: item.slug }));
// }

export async function generateMetadata({ params }: PropsType) {
  const { slug, locale } = await params;

  if (!slug.startsWith("esim-")) {
    notFound();
  }

  const cleanSlug = slug.replace("esim-", "");

  const countriesPromise = getCountriesWithStartingPrice(locale);
  const regionsPromise = getRegionsThatHavePackages(locale);

  const [countries, regions] = await Promise.all([
    countriesPromise,
    regionsPromise,
  ]);

  const isCountrySlug = countries.some((country) => country.slug === cleanSlug);
  const isRegionSlug = regions.some((region) => region.slug === cleanSlug);

  if (!isCountrySlug && !isRegionSlug) {
    notFound();
  }

  let metaDataOfPage: MetaData;

  if (isCountrySlug) {
    const metaDataOfCountry = await getMetaDataOfCountry(cleanSlug, locale);
    metaDataOfPage = metaDataOfCountry;
  } else {
    const metaDataOfRegion = await getMetaDataOfRegion(cleanSlug, locale);

    metaDataOfPage = metaDataOfRegion;
  }

  const {
    head_title,
    meta_description,
    meta_keywords,
    image_url,
    created_at,
    updated_at,
  } = metaDataOfPage;

  return generateDynamicSeo({
    meta_title: head_title,
    meta_description,
    meta_keywords,
    url: `${HOST}${slug}/`,
    image: image_url || "https://yaalo.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at,
    modifiedTime: created_at || updated_at,
  });
}

async function Page({ params }: PropsType) {
  const { slug, locale } = await params;

  if (!slug.startsWith("esim-")) {
    notFound();
  }

  const cleanSlug = slug.replace("esim-", "");

  const countriesPromise = getCountriesWithStartingPrice(locale);
  const regionsPromise = getRegionsThatHavePackages(locale);

  const [countries, regions] = await Promise.all([
    countriesPromise,
    regionsPromise,
  ]);

  const isCountrySlug = countries.some((country) => country.slug === cleanSlug);
  const isRegionSlug = regions.some((region) => region.slug === cleanSlug);

  if (!isCountrySlug && !isRegionSlug) {
    notFound();
  }

  let metaDataOfPage: MetaData;
  let packagesOfPage: GetCountryPackagesResponse;

  if (isCountrySlug) {
    const getPackagesOfCountryPromise = getPackagesOfCountry(cleanSlug, locale);
    const getMetaDataOfCountryPromise = getMetaDataOfCountry(cleanSlug, locale);

    const [packagesOfCountry, metaDataOfCountry] = await Promise.all([
      getPackagesOfCountryPromise,
      getMetaDataOfCountryPromise,
    ]);

    packagesOfPage = packagesOfCountry;
    metaDataOfPage = metaDataOfCountry;
  } else {
    const getPackagesOfRegionPromise = getPackagesOfRegion(cleanSlug, locale);
    const getMetaDataOfRegionPromise = getMetaDataOfRegion(cleanSlug, locale);

    const [packagesOfRegion, metaDataOfRegion] = await Promise.all([
      getPackagesOfRegionPromise,
      getMetaDataOfRegionPromise,
    ]);

    const { region: country, data, status } = packagesOfRegion;
    packagesOfPage = { country, data, status };
    metaDataOfPage = metaDataOfRegion;
  }

  const { country, data: packages } = packagesOfPage;

  const {
    name: countryName,
    banner: countryImage,
    flag: countryFlag,
  } = country;

  const { page_description, page_technical_specs, page_features } =
    metaDataOfPage;

  const showMetaDataOfPages =
    page_description && page_technical_specs && page_features;

  return (
    <>
      <section className="container pt-[150px]">
        <CountryPackagesSection
          packages={packages}
          countryFlag={countryFlag}
          countryImage={countryImage}
          countryName={countryName}
        />
      </section>

      <section className="container grid xl:grid-cols-[35fr_65fr] gap-6 sm:grid-cols-1 py-12">
        <div className="order-2 sm:order-1">
          <WiderCoverage locale={locale} />
        </div>
        <div className="order-1 sm:order-2">
          {/* <PaymentMethods /> */}
          {showMetaDataOfPages && (
            <section className="container">
              <PagesMeta
                countryName={countryName}
                description={page_description}
                features={page_features}
                technicalSpecs={page_technical_specs}
              />
            </section>
          )}
        </div>
      </section>

      <EsimSteps />

      <EsimAdvantages countryName={countryName} />

      <EmailReceive countryName={countryName} />

      <AppInstall />
      <FAQs
        values={{ country: countryName }}
        namespace={FAQ_NAMESPACES.SlugPage}
      />
    </>
  );
}

export default Page;
