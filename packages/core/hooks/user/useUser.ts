import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import { getUser } from "@workspace/core/services/auth/auth.services";

export function useUser() {
  return useQuery({
    queryKey: [queryKeys.user.get],
    queryFn: async () => {
      const res = await getUser();

      if (!res.status) {
        throw new Error(
          res.message ?? "Something went wrong while fetching user!"
        );
      }

      return res.data;
    },
  });
}
