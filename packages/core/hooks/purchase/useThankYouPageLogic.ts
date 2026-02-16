import { REFERRAL_KEY } from "@workspace/core/constants/host.constants";
import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface UseThankYouPageProps {
  paymentStatus: string;
  isAuthenticated: boolean;
  validationMessages?: {
    paymentFailed: string;
  };
}

export function useThankYouPageLogic({
  paymentStatus,
  validationMessages,
}: UseThankYouPageProps) {
  const [countdown, setCountdown] = useState(5);
  const { handleClearCart } = useCartActions();
  const router = useRouter();
  const isPaymentSuccess =
    paymentStatus === "success" || paymentStatus === "true";

  useEffect(() => {
    if (isPaymentSuccess) {
      handleClearCart();
      Cookies.remove("isPurchase");
      Cookies.remove(REFERRAL_KEY);
    } else {
      toast.error(
        validationMessages?.paymentFailed ?? "Payment process failed."
      );
      Cookies.remove("isPurchase");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  // Redirect after countdown
  useEffect(() => {
    if (countdown > 0) return;

    if (isPaymentSuccess) {
      Cookies.remove("isPurchase");
      router.push("/my-esims/");
    } else {
      Cookies.remove("isPurchase");
      router.push("/cart/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, isPaymentSuccess, router]);

  return {
    countdown,
    isPaymentSuccess,
  };
}
