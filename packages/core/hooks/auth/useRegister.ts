import { useMutation } from "@tanstack/react-query";
import {
  registerUser,
  sendOTP,
} from "@workspace/core/services/auth/auth.services";
import { useState } from "react";
import { toast } from "sonner";

export function useRegister() {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isOTPResending, setIsOTPResending] = useState(false);

  const { mutate: sendOTPApi, isPending: isSendingOTP } = useMutation({
    mutationFn: sendOTP,
    onSuccess: (data) => {
      if (data.status) {
        setIsOTPSent(true);
        return;
      }

      toast.error(data.message);
    },

    onError: (err) => toast.error(err.message),

    onSettled: () => {
      setIsOTPResending(false);
    },
  });

  const { mutate: registerUserApi, isPending: isUserRegistering } = useMutation(
    {
      mutationFn: registerUser,
      onSuccess: (data) => {
        if (!data.status) {
          toast.error(data.message);
        }
      },
    },
  );

  function resendOTP(email: string, password: string, recaptchaToken: string) {
    if (email && password) {
      setIsOTPResending(true);
      sendOTPApi({ email, password, recaptchaToken });
    }
  }

  const isLoading = isSendingOTP || isOTPResending || isUserRegistering;

  return {
    isLoading,
    isOTPSent,
    resendOTP,
    isSendingOTP,
    isOTPResending,
    sendOTPApi,
    registerUserApi,
    setIsOTPResending,
  };
}
