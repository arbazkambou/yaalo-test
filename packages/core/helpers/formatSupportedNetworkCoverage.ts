import { Coverage } from "@workspace/core/types/services/packages/packages.types";

export function formatSupportedNetworkCoverage(coverage: Coverage) {
  return [
    coverage.t_2g && "2G",
    coverage.th_3g && "3G",
    coverage.lte && "4G",
    coverage.fiv_5g && "5G",
  ]
    .filter(Boolean)
    .join(", ");
}
