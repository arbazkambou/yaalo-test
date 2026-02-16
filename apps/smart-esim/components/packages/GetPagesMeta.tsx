import PagesMeta from "@/components/packages/PagesMeta";
import {
  getMetaDataOfCountry,
  getPackagesOfCountry,
} from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";

export default async function GetPagesMeta({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const metaDataOfCountry = await getMetaDataOfCountry(slug, locale);
  const { country } = await getPackagesOfCountry(slug, locale);
  const name = country.name;

  const { page_description, page_technical_specs, page_features } =
    metaDataOfCountry;

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
