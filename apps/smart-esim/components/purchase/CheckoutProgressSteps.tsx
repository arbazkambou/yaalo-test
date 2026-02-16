"use client"
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

function CheckoutProgressSteps() {
  const t= useTranslations("cartPage.checkoutProcessBar");
  return (
    <>
      {/* MOBILE VERSION – keep your original code */}
      <div className="block lg:hidden">
        <div className="relative flex items-center justify-between">
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Check className="h-6 w-6 text-background" />
            </div>
            <span className="text-sm font-medium">{t("shoppingCart")}</span>
          </div>

          <div className="absolute left-[calc(16.67%+12px)] right-[calc(50%+12px)] top-6 h-0.5 bg-primary"></div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="font-medium text-background">{t("two")}</span>
            </div>
            <span className="text-sm font-medium">{t("checkout")}</span>
          </div>

          <div className="absolute left-[calc(50%+12px)] right-[calc(16.67%+12px)] top-6 h-0.5 bg-grey"></div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <span className="font-medium text-muted-foreground/80">{t("three")}</span>
            </div>
            <span className="text-sm text-muted-foreground/80">
              {t("orderComplete")}
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION – your new design */}
      <div className="hidden lg:block">
        <div className="relative flex items-center gap-[20rem]">
          {/* Step 1 */}
          <div className="relative z-10 flex items-center gap-5">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Check className="h-6 w-6 text-background" />
            </div>
            <span className="text-sm font-medium">{t("shoppingCart")}</span>
            <div className="absolute top-[65px] w-[27rem] h-0.5 bg-primary"></div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex items-center gap-5">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="font-medium text-background">{t("two")}</span>
            </div>
            <span className="text-sm font-medium">{t("checkout")}</span>
            <div className="absolute top-[65px] left-[121%] w-[27rem] -translate-x-1/2 h-0.5 bg-primary"></div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex items-center gap-5">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <span className="font-medium text-muted-foreground/80">{t("three")}</span>
            </div>
            <span className="text-sm text-muted-foreground/80">
              {t("orderComplete")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProgressSteps;
