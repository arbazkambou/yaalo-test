import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { HOST } from "@workspace/core/constants/host.constants";
import { FAQ_NAMESPACES } from "@/types/keys";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import { getMetaDataOfRegion } from "@workspace/core/services/packages/packages.services";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import PackagesSectionSkeleton from "@/components/ui/skeltons/PackagesSectionSkeleton";
import GetRegionalPackages from "@/components/packages/GetRegionalPackages";
import { Suspense } from "react";
import PagesMetaSkeleton from "@/components/ui/skeltons/PagesMetaSkeleton";
import GetRegionalPagesMeta from "@/components/packages/GetRegionalPagesMeta";
import GetRegionalEsimSteps from "@/components/packages/GetRegionalEsimSteps";
import { cleanString } from "@workspace/core/helpers/cleanString";

type PropsType = {
  params: Promise<{ slug: string; locale: Locale }>;
};

// export async function generateStaticParams() {
//   const response = await getRegionsThatHavePackages();

//   return response.map((item) => ({ slug: item.slug }));
// }

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const { slug, locale } = await params;

  let data;
  try {
    data = await getMetaDataOfRegion(slug, locale);
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
    url: `${HOST}region/${slug}/`,
    image: image_url || `${HOST}images/logo-1x1-new.png`,
    publishedTime: created_at || updated_at,
    modifiedTime: created_at || updated_at,
  });
}

const REGIONS = {
  europe: {
    name: "Europe",
  },
  asia: {
    name: "Asia",
  },
  africa: {
    name: "Africa",
  },
  "gcc-middle-east": {
    name: "Middle East",
  },
  "middle-east": {
    name: "Middle East",
  },
  "north-america": {
    name: "North America",
  },
  "south-america": {
    name: "South America",
  },
  oceania: {
    name: "Oceania",
  },
  caribbean: {
    name: "Caribbean",
  },
} as const;

type RegionSlug = keyof typeof REGIONS;

async function Page({ params }: PropsType) {
  const { slug } = await params;
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const regionConfig = REGIONS[slug as RegionSlug];

  if (!regionConfig) {
    notFound();
  }

  const regionName = regionConfig.name;

  // const getPackagesOfRegionPromise = getPackagesOfRegion(slug, locale);
  // const getMetaDataOfRegionPromise = getMetaDataOfRegion(slug);

  // const [packagesOfRegion, metaDataOfRegion] = await Promise.all([
  //   getPackagesOfRegionPromise,
  //   getMetaDataOfRegionPromise,
  // ]);

  // const { region, data: packages } = packagesOfRegion;

  // const {
  //   name: regionName,
  //   banner: regionImage,
  //   image_url: regionFlag,
  // } = region;

  // const { page_description, page_technical_specs, page_features } =
  //   metaDataOfRegion;

  // const showMetaDataOfPages =
  //   page_description && page_technical_specs && page_features;

  return (
    <>
      <section className="container mt-16">
        <Suspense fallback={<PackagesSectionSkeleton />}>
          <GetRegionalPackages slug={slug} locale={locale} />
        </Suspense>
      </section>

      <section className="container mt-16">
        <Suspense fallback={<PagesMetaSkeleton />}>
          <GetRegionalPagesMeta slug={slug} locale={locale} />
        </Suspense>
      </section>

      <Suspense>
        <GetRegionalEsimSteps slug={slug} locale={locale} />
      </Suspense>

      <FAQSection
        namespace={FAQ_NAMESPACES.RegionalSlug}
        values={{ region: regionName }}
      />

      <AppInstall />
    </>
  );
}

export default Page;
