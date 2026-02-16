import GetCountryPackages from "@/components/packages/GetCountryPackages";
import GetEsimSteps from "@/components/packages/GetEsimSteps";
import GetPagesMeta from "@/components/packages/GetPagesMeta";
import EmailReceive from "@/components/presentational/EmailReceive";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import WhyEsim from "@/components/ui/sections/WhyEsim";
import WiderCoverage from "@/components/ui/sections/WiderCoverage";
import PackagesSectionSkeleton from "@/components/ui/skeltons/PackagesSectionSkeleton";
import PagesMetaSkeleton from "@/components/ui/skeltons/PagesMetaSkeleton";
import WiderCoverageSkeleton from "@/components/ui/skeltons/WiderCoverageSkeleton";
import { routing } from "@/i18n/routing";
import { FAQ_NAMESPACES } from "@/types/keys";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import { getMetaDataOfCountry } from "@workspace/core/services/packages/packages.services";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PropsType = {
  params: Promise<{ slug: string; locale: Locale }>;
};

// export async function generateStaticParams() {
//   const response = await getCountriesWithStartingPrice();

//   return response.map((item) => ({ slug: item.slug }));
// }

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const { slug, locale } = await params;

  let data;
  try {
    data = await getMetaDataOfCountry(slug, locale);
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      throw notFound();
    } else {
      throw error;
    }
  }

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
    url: `https://smartesim.com/esim/${slug}/`,
    image: image_url || "https://smartesim.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at,
    modifiedTime: created_at || updated_at,
  });
}

async function Page({ params }: PropsType) {
  const { slug, locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // const getPackagesOfCountryPromise = getPackagesOfCountry(slug, locale);
  // const getMetaDataOfCountryPromise = getMetaDataOfCountry(slug);

  // const [packagesOfCountry, metaDataOfCountry] = await Promise.all([
  //   getPackagesOfCountryPromise,
  //   getMetaDataOfCountryPromise,
  // ]);

  // const { country, data: packages } = packagesOfCountry;

  // const {
  //   name: countryName,
  //   banner: countryImage,
  //   image_url: countryFlag,
  // } = country;

  // const { page_description, page_technical_specs, page_features } =
  //   metaDataOfCountry;

  // const showMetaDataOfPages =
  //   page_description && page_technical_specs && page_features;

  return (
    <>
      <section className="container mt-16">
        <Suspense fallback={<PackagesSectionSkeleton />}>
          <GetCountryPackages slug={slug} locale={locale} />
        </Suspense>
      </section>

      <section className="container grid xl:grid-cols-[35fr_65fr] gap-6 sm:grid-cols-1 py-12">
        <div className="order-2 sm:order-1">
          <Suspense fallback={<WiderCoverageSkeleton />}>
            <WiderCoverage locale={locale} />
          </Suspense>
        </div>
        <div className="order-1 sm:order-2">
          <Suspense fallback={<PagesMetaSkeleton />}>
            <GetPagesMeta slug={slug} locale={locale} />
          </Suspense>
        </div>
      </section>

      <Suspense>
        <GetEsimSteps slug={slug} locale={locale} />
      </Suspense>

      <WhyEsim />

      <EmailReceive />
      <FAQSection namespace={FAQ_NAMESPACES.EsimPage} />
      <AppInstall />
    </>
  );
}

export default Page;
