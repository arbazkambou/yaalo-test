import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import { getMyEsims } from "@workspace/core/services/sims/sims.services";

export function useMyEsims(locale?: string) {
  return useQuery({
    queryKey: [queryKeys.sims.myEsims, locale],
    queryFn: async () => {
      const res = await getMyEsims(locale);

      if (!res.status) {
        throw new Error(res.message ?? "Failed to fetch my esims");
      }

      return res.data;
    },
    retry: 1,
  });
}
