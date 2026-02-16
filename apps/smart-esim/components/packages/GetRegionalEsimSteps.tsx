import { getPackagesOfRegion } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";
import EsimSteps from "../ui/sections/EsimSteps";

export default async function GetRegionalEsimSteps({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const { region } = await getPackagesOfRegion(slug, locale);

  return <EsimSteps countryName={region.name} />;
}
