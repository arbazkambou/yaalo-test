import { cleanString } from "@workspace/core/helpers/cleanString";
import { getPackagesOfCountry } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";
import { notFound } from "next/navigation";
import CountryPackagesSection from "./CountryPackagesSection";

export default async function GetCountryPackages({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  let data;

  try {
    data = await getPackagesOfCountry(slug, locale);
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

  const { country, data: packages } = data;

  return (
    <CountryPackagesSection
      packages={packages}
      countryFlag={country.image_url}
      countryImage={country.banner}
      countryName={country.name}
    />
  );
}
