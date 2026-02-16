import { useMutation } from "@tanstack/react-query";
import {
  purchasePackages,
  purchasePackagesAsGuest,
} from "@workspace/core/services/purchase/purchase.services";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../auth/useAuth";

type ValidationMessages = {
  redirectingToStripe: string;
  orderProcessed: string;
  alreadyRegistered: string;
};

export function usePurchasePackages(validationMessages?: ValidationMessages) {
  const [isUserExist, setIsUserExist] = useState(false);
  const { isAuthenticated, loginWithNonceToken } = useAuth();

  const router = useRouter();

  const purchaseAsGuest = useMutation({
    mutationFn: purchasePackagesAsGuest,
    onSuccess: async (data) => {
      if (!data.status) {
        toast.error(data.message);
        return;
      }

      const { account } = data?.data?.data;

      if (account) {
        setIsUserExist(true);
        toast.error(
          validationMessages?.alreadyRegistered ??
            "Your email address is already registered. Please login.",
        );
        return;
      }

      const { nonce_token, open_checkout, stripe_checkout_url } =
        data?.data?.data;

      if (nonce_token) {
        await loginWithNonceToken(nonce_token);
      }

      if (open_checkout) {
        toast.success(
          validationMessages?.redirectingToStripe ?? "Redirecting to stripe...",
        );
        router.push(stripe_checkout_url);
        return;
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const purchaseAsLoggedIn = useMutation({
    mutationFn: purchasePackages,
    onSuccess: async (data) => {
      if (!data.status) {
        toast.error(data.message);
        return;
      }
      Cookies.set("isPurchase", "true");

      if (data.data.open_checkout) {
        toast.success(
          validationMessages?.redirectingToStripe ?? "Redirecting to stripe...",
        );
        router.push(data.data.stripe_checkout_url);
        return;
      }

      toast.success(
        validationMessages?.orderProcessed ?? "Your order has been processed!",
      );
      router.push("/sim-buy-thank-you/?status=true");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const purchasePackagesMutation = isAuthenticated
    ? purchaseAsLoggedIn
    : purchaseAsGuest;

  return {
    isUserExist,
    ...purchasePackagesMutation,
  };
}
