import { Country, Region } from "../types/services/packages/packages.types";
import { cleanString } from "./cleanString";

interface MatchParams {
  country?: Country;
  region?: Region;
  searchQuery: string;
  isGlobal?: boolean;
}

export function isSearchQueryMatch({
  country,
  region,
  searchQuery,
  isGlobal = false,
}: MatchParams): boolean {
  if (!searchQuery.trim()) return false;
  const query = cleanString(searchQuery);

  // Country-based match
  if (country) {
    // Match for global countries
    if (isGlobal) {
      const globalTerms = ["global", "international"];
      if (globalTerms.some((term) => cleanString(term).includes(query))) {
        return true;
      }
    }

    // Match by name or codes
    return (
      cleanString(country.name).includes(query) ||
      cleanString(country.code).includes(query) ||
      (country.local_state_code
        ? cleanString(country.local_state_code).includes(query)
        : false) ||
      cleanString(country.code_alpha3).includes(query)
    );
  }

  // Region-based match
  if (region) {
    const regionTerms = ["region", "regional"];
    if (regionTerms.some((term) => cleanString(term).includes(query))) {
      return true;
    }

    return (
      cleanString(region.name).includes(query) ||
      region.countries.some((c) =>
        isSearchQueryMatch({ country: c, searchQuery })
      )
    );
  }

  return false;
}
