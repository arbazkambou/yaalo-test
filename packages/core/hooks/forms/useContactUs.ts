import { useMutation } from "@tanstack/react-query";
import { postContactUsData } from "@workspace/core/services/support/support.services";
import { useState } from "react";
import { toast } from "sonner";

export function useContactUs() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const isCaptchaVerified = !!recaptchaToken;

  const { mutate: postContactUsDataApi, isPending: isPostingData } =
    useMutation({
      mutationFn: postContactUsData,
      onSuccess: (message) => {
        const msg = typeof message === "string" ? message : message.message;
        setRecaptchaToken(null);
        toast.success(msg);
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return {
    isPostingData,
    recaptchaToken,
    isCaptchaVerified,
    handleRecaptchaChange,
    postContactUsDataApi,
  };
}
