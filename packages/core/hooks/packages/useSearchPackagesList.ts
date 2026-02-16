"use client";

import { cleanString } from "@workspace/core/helpers/cleanString";
import {
  Country,
  SearchPackagesListReturn,
} from "@workspace/core/types/services/packages/packages.types";
import { useEffect, useRef, useState } from "react";
import { isSearchQueryMatch } from "@workspace/core/helpers/isSearchQueryMatch";

interface UseCountryRegionSearchProps {
  packagesList: SearchPackagesListReturn;
  topDestinations: Country[];
  isDataVoicePage?: boolean;
}

export function useCountryRegionSearch({
  packagesList,
  topDestinations,
}: UseCountryRegionSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // autofocus after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ block: "center" });
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = cleanString(e.target.value);
    setSearchQuery(query);
    if (query) setShowSuggestions(true);
  };

  // Derived data (no useMemo needed — React Compiler handles optimization)
  let filteredPackagesList = null;
  if (searchQuery && packagesList && topDestinations) {
    const { local, regional, global } = packagesList;

    filteredPackagesList = {
      dataOnly: {
        local: local.filter((country) =>
          isSearchQueryMatch({ country, searchQuery })
        ),
        regional: regional.filter((region) =>
          isSearchQueryMatch({ region, searchQuery })
        ),
        global: {
          href: "/",
          countries: global.countries.filter((country) =>
            isSearchQueryMatch({ country, searchQuery, isGlobal: true })
          ),
        },
      },
    };
  }

  // Compute flags (also no memoization — compiler handles it)
  const flags = (() => {
    if (!filteredPackagesList) {
      return {
        isPackages: false,
        isDataOnlyPackages: false,
        isDataVoicePackages: false,
        isDataOnlyLocal: false,
        isDataOnlyRegional: false,
        isDataOnlyGlobal: false,
        isDataVoiceLocal: false,
        isDataVoiceRegional: false,
        isDataVoiceGlobal: false,
      };
    }

    const { dataOnly } = filteredPackagesList;
    const { global, regional, local } = dataOnly;

    const isDataOnlyPackages =
      local.length > 0 || regional.length > 0 || global.countries.length > 0;

    const isPackages = isDataOnlyPackages;

    return {
      isPackages,
      isDataOnlyPackages,
      isDataOnlyLocal: isDataOnlyPackages && local.length > 0,
      isDataOnlyRegional: isDataOnlyPackages && regional.length > 0,
      isDataOnlyGlobal: isDataOnlyPackages && global.countries.length > 0,
    };
  })();

  return {
    searchQuery,
    setSearchQuery,
    showSuggestions,
    setShowSuggestions,
    handleSearchQuery,
    filteredPackagesList,
    flags,
    topDestinations,
    containerRef,
    inputRef,
  };
}
