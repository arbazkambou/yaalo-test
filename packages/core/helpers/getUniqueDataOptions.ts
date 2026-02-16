import { Package } from "@workspace/core/types/services/packages/packages.types";

export function getUniqueDataOptions(
  packages: Package[] | undefined
): { data_quantity: number; data_unit: string }[] {
  return Array.from(
    new Map(
      (packages ?? []).map((pkg) => [
        // unique key combines both fields
        `${pkg.data_quantity}`,
        {
          data_quantity: pkg.data_quantity,
          data_unit: pkg.data_unit,
        },
      ])
    ).values()
  );
}
