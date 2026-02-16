import { Package } from "@workspace/core/types/services/packages/packages.types";
import { useState } from "react";

export function usePackagesFilter(activePackages: Package[]) {
  const [validityFilter, setValidityFilter] = useState<number | null>(null);
  const [dataFilter, setDataFilter] = useState<number | null>(null);
  const [openFilters, setOpenFilters] = useState(false);

  let filteredPackages = activePackages;

  if (validityFilter) {
    filteredPackages = filteredPackages.filter(
      (pkg) => pkg.package_validity === validityFilter,
    );
  }

  if (dataFilter) {
    filteredPackages = filteredPackages.filter(
      (pkg) => pkg.data_quantity === dataFilter,
    );
  }

  const haveFilteredPackages = filteredPackages.length > 0;
  const isAnyFilterApplied = !!dataFilter || !!validityFilter;
  const isBothFilterApplied = dataFilter && validityFilter;

  function handleFilterByValidity(filter: string) {
    setValidityFilter(filter ? Number(filter) : null);
  }

  function handleFilterByData(filter: string) {
    setDataFilter(filter ? Number(filter) : null);
  }

  function handleClearFilter() {
    setValidityFilter(null);
    setDataFilter(null);
  }

  return {
    validityFilter,
    setValidityFilter,
    dataFilter,
    setDataFilter,
    filteredPackages,
    haveFilteredPackages,
    isAnyFilterApplied,
    isBothFilterApplied,
    handleFilterByValidity,
    handleFilterByData,
    handleClearFilter,
    openFilters,
    setOpenFilters,
  };
}
