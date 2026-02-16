"use client";

import { useThankYouPageLogic } from "@workspace/core/hooks/purchase/useThankYouPageLogic";
import { useTranslations } from "next-intl";

interface Propstype {
  paymentStatus: string;
  isAuthenticated: boolean;
}

function ThankYouPage({ paymentStatus, isAuthenticated }: Propstype) {
  const t = useTranslations("ThankYouPage");
  const { countdown, isPaymentSuccess } = useThankYouPageLogic({
    isAuthenticated,
    paymentStatus,
    validationMessages: {
      paymentFailed: t("failed.paymentFailed"),
    },
  });

  return (
    <section className="container mt-14">
      <div className="rounded-md bg-primary/10 py-14">
        {isPaymentSuccess ? (
          <>
            <h2 className="fw-500 my-2 text-center font-sans text-h2-md text-grey">
              {t("success.title")}
            </h2>
            <p className="fw-600 text-center font-sans text-h2-md font-semibold">
              {t("success.text")}
            </p>
          </>
        ) : (
          <>
            <h2 className="fw-500 my-2 text-center font-sans text-h2-md text-grey">
              {t("failed.title")}
            </h2>
            <p className="fw-600 text-center font-sans text-h2-md font-semibold">
              {t("failed.text")}
            </p>
          </>
        )}

        <div className="mt-10 text-center">
          <p className="fw-500 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary font-sans text-4xl text-background">
            {countdown}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;
