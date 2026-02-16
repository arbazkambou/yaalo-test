"use client";

import { RefObject, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface GoogleRecaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
  className?: string;
  recaptchaRef?: RefObject<ReCAPTCHA | null>;
}

export default function GoogleRecaptcha({
  siteKey,
  onChange,
  className,
  recaptchaRef,
}: GoogleRecaptchaProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={className}>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        asyncScriptOnLoad={() => setIsLoaded(true)}
        ref={recaptchaRef}
      />
    </div>
  );
}
