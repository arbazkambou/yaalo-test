import { useQuery } from "@tanstack/react-query";
import { getOrderHistory } from "@workspace/core/services/refill/refill.services";

export default function useOrderHistory(locale?: string) {
  return useQuery({
    queryKey: ["order-history", locale],

    queryFn: async () => {
      const res = await getOrderHistory(locale);

      if (!res.status) {
        throw new Error(res.message ?? "Failed to fetch my esim detail");
      }

      return res.data;
    },
  });
}
