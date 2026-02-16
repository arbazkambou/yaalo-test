import { Package } from "@workspace/core/types/services/packages/packages.types";

export function getUniqueValidityOptions(
  packages: Package[] | undefined
): { package_validity: number; package_validity_unit: string }[] {
  const uniqueMap = new Map<
    string,
    { package_validity: number; package_validity_unit: string }
  >();

  (packages ?? []).forEach((pkg) => {
    const key = `${pkg.package_validity}-${pkg.package_validity_unit}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, {
        package_validity: pkg.package_validity,
        package_validity_unit: pkg.package_validity_unit,
      });
    }
  });

  return Array.from(uniqueMap.values()).sort((a, b) => {
    return a.package_validity - b.package_validity;
  });
}
