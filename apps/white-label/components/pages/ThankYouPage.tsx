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
    }
  });

  return (
    <section className="container">
      <div className="rounded-md bg-accent py-14">
        {isPaymentSuccess ? (
          <>
            <h2 className="my-2 text-center text-h2">   {t("success.title")}!</h2>
            <p className="text-body-base text-center md:text-body-md lg:text-body-lg font-600">
           {t("success.text")}
            </p>
          </>
        ) : (
          <>
            <h2 className="my-2 text-center text-h2 text-muted-foreground">
            {t("failed.title")}
            </h2>
            <p className="text-body-base md:text-body-md lg:text-body-lg font-500">
                 {t("failed.text")}
            </p>
          </>
        )}

        <div className="mt-10 text-center">
          <p className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary font-sans text-4xl text-background">
            {countdown}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;
