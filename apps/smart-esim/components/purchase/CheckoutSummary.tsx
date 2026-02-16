"use client";

import CheckoutSummarySkelton from "@/components/ui/skeltons/CheckoutSummarySkelton";
import { useCheckoutSummary } from "@workspace/core/hooks/purchase/useCheckoutSummary";
import CheckoutButton from "./CheckoutButton";
import CheckoutTermsConditionMessage from "./CheckoutTermsConditionMessage";
import { useTranslations } from "next-intl";

function CheckoutSummary() {
  const t = useTranslations("cartPage.checkoutDetails");
  const { data: summary, error, isLoading } = useCheckoutSummary();

  if (isLoading) return <CheckoutSummarySkelton />;

  if (error) throw new Error(error.message);

  const { amount_deducted_from_wallet, amount_deducted_from_card } = summary!;

  return (
    <>
      <>
        <div className="flex text-base font-500 text-foreground/70 py-4 px-2 justify-between border-b border-grey/80">
          <p className="font-bold text-lg">{t("payFromWallet")}</p>
          <p>${amount_deducted_from_wallet?.toFixed(2)}</p>
        </div>

        <div className="flex text-base font-500 text-foreground/70 py-4 px-2 justify-between border-b border-grey/80 mb-4 ">
          <p className="font-bold text-lg">{t("toPayOnCheckout")}</p>
          <p>${amount_deducted_from_card?.toFixed(2)}</p>
        </div>
      </>
      <CheckoutButton amountDeductFromCard={amount_deducted_from_card} />
      <CheckoutTermsConditionMessage
        amountDeductFromCard={amount_deducted_from_card}
      />
    </>
  );
}

export default CheckoutSummary;
