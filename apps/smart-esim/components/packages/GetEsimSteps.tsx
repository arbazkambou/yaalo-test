import { getPackagesOfCountry } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";
import EsimSteps from "../ui/sections/EsimSteps";

export default async function GetEsimSteps({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const { country } = await getPackagesOfCountry(slug, locale);

  return <EsimSteps countryName={country.name} />;
}
