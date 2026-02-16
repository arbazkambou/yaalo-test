import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import { getEsimDetail } from "@workspace/core/services/sims/sims.services";

export function useMyEsims(simId: string) {
  return useQuery({
    queryKey: [queryKeys.sims.esimDetail],
    queryFn: async () => {
      const res = await getEsimDetail(simId);

      if (!res.status) {
        throw new Error(res.message ?? "Failed to fetch my esim detail");
      }

      return res.data;
    },
    retry: 1,
  });
}
