"use client";

import { cleanString } from "@workspace/core/helpers/cleanString";
import {
  Coverage,
  Package,
} from "@workspace/core/types/services/packages/packages.types";
import { useMemo, useState } from "react";

export type CoverageSearchInput =
  | { type: "package"; data: Package }
  | { type: "sim"; data: Coverage[] };

export function useCoverageSearch(input: CoverageSearchInput) {
  const [searchQuery, setSearchQuery] = useState("");

  const reshaped = useMemo(() => {
    if (input.type === "package") {
      const pkg = input.data;

      return pkg.countries.map((country) => ({
        country_name: country.name,
        country_coverage: pkg.coverages.filter(
          (c) => c.country_name === country.name
        ),
      }));
    }

    if (input.type === "sim") {
      return input.data.reduce<
        { country_name: string; country_coverage: Coverage[] }[]
      >((acc, cur) => {
        const existing = acc.find((x) => x.country_name === cur.country_name);
        if (existing) {
          existing.country_coverage.push(cur);
        } else {
          acc.push({
            country_name: cur.country_name,
            country_coverage: [cur],
          });
        }
        return acc;
      }, []);
    }

    return [];
  }, [input]);

  const filtered = useMemo(() => {
    if (!searchQuery) return reshaped;

    const q = cleanString(searchQuery);

    return reshaped.filter((item) =>
      item.country_coverage.some(
        (cov) =>
          cleanString(cov.country_name).includes(q) ||
          cleanString(cov.network_name).includes(q)
      )
    );
  }, [reshaped, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    reshaped,
    filtered,
  };
}
