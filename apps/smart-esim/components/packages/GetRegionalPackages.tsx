import { Locale } from "next-intl";
import CountryPackagesSection from "./CountryPackagesSection";
import { getPackagesOfRegion } from "@workspace/core/services/packages/packages.services";

export default async function GetRegionalPackages({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const { region, data: packages } = await getPackagesOfRegion(slug, locale);

  const { name: regionName, banner: regionImage, flag: regionFlag } = region;

  return (
    <CountryPackagesSection
      packages={packages}
      countryFlag={regionFlag}
      countryImage={regionImage}
      countryName={regionName}
    />
  );
}
