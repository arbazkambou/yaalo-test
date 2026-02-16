import { useRef, useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function useRecaptcha() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const resetCaptcha = useCallback(() => {
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
  }, []);

  return {
    recaptchaRef,
    recaptchaToken,
    isCaptchaVerified: Boolean(recaptchaToken),
    handleRecaptchaChange,
    resetCaptcha,
  };
}

export default useRecaptcha;
