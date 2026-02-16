"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@workspace/core/constants/queries.keys";
import {
  walletRefill,
  walletRefresh,
} from "@workspace/core/services/refill/refill.services";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

type ValidationMessages = {
  stripeMissing: string;
  stripeRedirect: string;
  refreshedFailed: string;
  paymentFailed: string;
  refreshedSuccess: string;
};

export function useWalletRefill(validationMessages?: ValidationMessages) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: WalletRefillApi, isPending: isRefilling } = useMutation({
    mutationFn: walletRefill,

    onSuccess: (response) => {
      if (!response.status) {
        return toast.error(response?.message);
      }

      const checkoutUrl = response?.data?.data?.stripe_checkout_url;
      if (!checkoutUrl)
        return toast.error(
          validationMessages?.stripeMissing ?? "Stripe checkout URL missing"
        );

      toast.success(
        validationMessages?.stripeRedirect ?? "Redirecting to Stripe..."
      );
      router.push(checkoutUrl);
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const { mutate: walletRefreshApi, isPending: isWalletRefreshing } =
    useMutation({
      mutationFn: walletRefresh,

      onSuccess: (data) => {
        if (!data.status) {
          toast.error(
            data.message ??
              validationMessages?.refreshedFailed ??
              "Wallet refresh failed"
          );
          return;
        }
        toast.success(
          validationMessages?.refreshedSuccess ?? "Wallet refill successful"
        );
        queryClient.invalidateQueries({
          queryKey: [queryKeys.purchase.orderHistory],
        });
        queryClient.invalidateQueries({ queryKey: [queryKeys.user.get] });
      },

      onError: () => {
        toast.error(
          validationMessages?.refreshedFailed ??
            "Could not refresh wallet balance"
        );
      },
    });

  useEffect(() => {
    const status = searchParams.get("status");
    const tid = searchParams.get("tid");

    if (!status) return;

    if (status === "success" || status === "true") {
      if (tid) {
        walletRefreshApi(tid);
      } else {
        toast.error("TID is missing.");
      }
    } else if (status === "false" || status === "failed") {
      toast.error(
        validationMessages?.paymentFailed ?? "Payment failed. Please try again."
      );
    }

    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    params.delete("tid");

    const cleanUrl = params.toString() ? `${pathname}?${params}` : pathname;
    router.replace(cleanUrl, { scroll: false });
  }, [searchParams, pathname, router]);

  return {
    isRefilling,
    WalletRefillApi,
    isWalletRefreshing,
  };
}
