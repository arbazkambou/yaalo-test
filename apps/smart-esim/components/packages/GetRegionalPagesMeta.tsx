import PagesMeta from "@/components/packages/PagesMeta";
import {
  getMetaDataOfRegion,
  getPackagesOfRegion,
} from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";

export default async function GetRegionalPagesMeta({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const metaDataOfRegion = await getMetaDataOfRegion(slug, locale);
  const { region } = await getPackagesOfRegion(slug, locale);
  const name = region.name;

  const { page_description, page_technical_specs, page_features } =
    metaDataOfRegion;

  const show = page_description && page_technical_specs && page_features;
  if (!show) return null;

  return (
    <PagesMeta
      countryName={name}
      description={page_description}
      features={page_features}
      technicalSpecs={page_technical_specs}
    />
  );
}
