import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import {
  getMyEsims,
  getPendingEsims,
} from "@workspace/core/services/sims/sims.services";

export function usePendingEsims() {
  return useQuery({
    queryKey: [queryKeys.sims.pendingEsims],
    queryFn: async () => {
      const res = await getPendingEsims();

      if (!res.status) {
        throw new Error(res.message ?? "Failed to fetch my esims");
      }

      return res.data;
    },
    retry: 1,
  });
}
