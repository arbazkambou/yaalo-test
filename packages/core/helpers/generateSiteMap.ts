import { Country } from "../types/services/packages/packages.types";

export interface OrganizedCountry {
  letter: string;
  countries: Country[];
}

export function organizeCountries(
  countriesData: Country[]
): OrganizedCountry[] {
  const countryMap: Record<string, Country[]> = {};

  countriesData.forEach((country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();

    if (!countryMap[firstLetter]) {
      countryMap[firstLetter] = [];
    }

    countryMap[firstLetter].push(country);
  });

  return Object.keys(countryMap)
    .map((letter) => ({
      letter,
      countries: countryMap[letter],
    }))
    .sort((a, b) => a.letter.localeCompare(b.letter));
}
