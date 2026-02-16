import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import {
  getCheckoutSummary,
  getCheckoutSummaryAsGuest,
} from "@workspace/core/services/purchase/purchase.services";
import { useState } from "react";
import { toast } from "sonner";

export function useApplyPromoCode() {
  const [showCouponCollapsible, setShowCouponCollapsible] = useState(false);
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth();

  const { mutate: applyPromoCodeApi, isPending: isPromoCodeApplying } =
    useMutation({
      mutationKey: [queryKeys.purchase.applyPromoCode],
      mutationFn: isAuthenticated
        ? getCheckoutSummary
        : getCheckoutSummaryAsGuest,

      onSuccess: (data) => {
        if (!data.status) {
          toast.error(
            data.message ?? "Something went wrong while applying promo code."
          );
          return;
        }

        if (data.data.promo_applied) {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.purchase.checkoutSummary],
          });
          toast.success(
            data.data.promo_applied_message ?? "Promo code has been applied."
          );
          setShowCouponCollapsible(false);
        } else {
          toast.error(data.data.validation_message ?? "Invalid Promo Code.");
        }
      },
    });

  return {
    showCouponCollapsible,
    setShowCouponCollapsible,
    isPromoCodeApplying,
    applyPromoCodeApi,
  };
}
