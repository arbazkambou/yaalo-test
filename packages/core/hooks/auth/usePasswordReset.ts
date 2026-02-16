// usePasswordReset.ts
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import {
  sendPasswordResetData,
  sendPasswordResetPin,
} from "@workspace/core/services/auth/auth.services";

export function usePasswordReset() {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPResending, setIsOTPResending] = useState(false);
  const router = useRouter();

  const { mutate: sendOTPApi, isPending: isSendingOTP } = useMutation({
    mutationFn: sendPasswordResetPin,
    onSuccess: (res) => {
      if (!res.status) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setIsOTPSent(true);
    },
    onError: (err) => toast.error(err.message),
    onSettled: () => {
      setIsOTPResending(false);
    },
  });

  const { mutate: resetPasswordApi, isPending: isResetting } = useMutation({
    mutationFn: sendPasswordResetData,
    onSuccess: (res) => {
      if (!res.status) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      router.push("/login");
    },
    onError: (err) => toast.error(err.message),
  });

  function resendOTP(email: string) {
    setIsOTPResending(true);
    if (!email) return;

    sendOTPApi(email);
  }

  const isLoading = isOTPResending || isSendingOTP || isResetting;

  return {
    resendOTP,
    isSendingOTP,
    isResetting,
    isOTPSent,
    isOTPResending,
    isLoading,
    sendOTPApi,
    resetPasswordApi,
    setIsOTPResending,
  };
}
