import { Package } from "@workspace/core/types/services/packages/packages.types";

export function categorizedDataOnlyPackages(packages: Package[] | undefined) {
  const dataOnlyPackages = (packages ?? []).filter(
    (p) => p.package_type === "DATA-ONLY"
  );

  const unlimitedPackages = dataOnlyPackages.filter(
    (p) => p.data_quantity <= -1
  );

  const limitedPackages = dataOnlyPackages.filter((p) => p.data_quantity > 0);

  return {
    limitedPackages,
    unlimitedPlusPackages: unlimitedPackages.filter(
      (p) => p.data_package_type === "Plus"
    ),
    unlimitedPremiumPackages: unlimitedPackages.filter(
      (p) => p.data_package_type === "Premium"
    ),
    unlimitedDataPackages: unlimitedPackages.filter(
      (p) => p.data_package_type !== "Plus" && p.data_unit !== "Premium"
    ),
  };
}
