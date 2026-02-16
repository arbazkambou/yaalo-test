import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import {
  getCheckoutSummary,
  getCheckoutSummaryAsGuest,
} from "@workspace/core/services/purchase/purchase.services";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";

export function useCheckoutSummary() {
  const { totalCartItems } = useCartActions();
  const { promoCodeData } = usePromoCodeActions();
  const { isAuthLoading, isAuthenticated } = useAuth();

  return useQuery({
    queryKey: [
      queryKeys.purchase.checkoutSummary,
      totalCartItems,
      promoCodeData?.promo_code,
    ],
    queryFn: async () => {
      const res = isAuthenticated
        ? await getCheckoutSummary({
            cartItems: totalCartItems,
            promo_code: promoCodeData ? promoCodeData.promo_code : null,
          })
        : await getCheckoutSummaryAsGuest({
            cartItems: totalCartItems,
            promo_code: promoCodeData ? promoCodeData.promo_code : null,
          });

      if (!res.status) {
        throw new Error(res.message ?? "Failed to fetch checkout summary");
      }

      return res.data;
    },

    enabled: !isAuthLoading,

    retry: 1,
  });
}
