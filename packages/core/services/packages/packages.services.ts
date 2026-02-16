import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { api } from "@workspace/core/lib/API";
import {
  GetContinentsResponse,
  GetCountriesWithStartingPriceResponse,
  GetCountryPackagesResponse,
  GetGlobalPackagesResponse,
  GetMeataDataResponse,
  GetPackagesOfRegionResponse,
  SearchPackagesListResponse,
  TopDestinationsResponse,
} from "@workspace/core/types/services/packages/packages.types";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export async function getSearchPackagesList(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.searchPackagesList);

  try {
    const data = await api<SearchPackagesListResponse>(
      `/packages/search`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );
    const {
      global: globalData,
      local: localData,
      regional: regionalData,
    } = data.data;

    const global = { href: "global", countries: globalData };
    const local = localData.map((country) => ({
      ...country,
      href: `/esim/${generateSlug(country.name)}/`,
    }));
    const regional = regionalData.map((region) => ({
      ...region,
      href: `/regional/${generateSlug(region.name)}/`,
    }));

    return { global, local, regional };
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getTopDestinations(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.topDestinations);
  try {
    const data = await api<TopDestinationsResponse>(
      "/search-top-destination",
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getCountriesWithStartingPrice(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.countriesStartingPrice);

  try {
    const data = await api<GetCountriesWithStartingPriceResponse>(
      "/packages/country",
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getRegionsThatHavePackages(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.regionsThatHavePackages);
  try {
    const data = await api<GetContinentsResponse>("/packages/region", null, {
      headers: {
        "Accept-Language": locale,
      },
    });

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getPackagesOfCountry(
  countrySlug: string,
  locale: string = "en",
) {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.packagesOfCountry);
  try {
    const data = await api<GetCountryPackagesResponse>(
      `/packages/country/${countrySlug}`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data;
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    }
    throw new Error(globalErrorHandler(error));
  }
}

export async function getMetaDataOfCountry(
  countrySlug: string,
  locale: string = "en",
) {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.metaDataOfCountry);

  try {
    const data = await api<GetMeataDataResponse>(
      `/packages/country/${countrySlug}/meta`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data.data;
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    }
    throw new Error(globalErrorHandler(error));
  }
}

export async function getPackagesOfRegion(
  regionSlug: string,
  locale: string = "en",
) {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.packagesOfRegion);

  try {
    const data = await api<GetPackagesOfRegionResponse>(
      `/packages/region/${regionSlug}`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data;
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    }
    throw new Error(globalErrorHandler(error));
  }
}

export async function getMetaDataOfRegion(
  regionSlug: string,
  locale: string = "en",
) {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.metaDataOfRegion);

  try {
    const data = await api<GetMeataDataResponse>(
      `/packages/region/${regionSlug}/meta`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data.data;
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    }
    throw new Error(globalErrorHandler(error));
  }
}

export async function getGlobalPackages(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.globalPackages);

  try {
    const data = await api<GetGlobalPackagesResponse>(
      `/packages/global`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getMetaDataOfGlobal(locale: string = "en") {
  "use cache";
  cacheLife("byDaily");
  cacheTag(queryKeys.packages.metaDataOfGlobal);

  try {
    const data = await api<GetMeataDataResponse>(
      `/packages/global/meta`,
      null,
      {
        headers: {
          "Accept-Language": locale,
        },
      },
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
