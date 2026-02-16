import SpinnerMini from "@/components/shared/SpinnerMini";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useMyPurchasePackages } from "@/hooks/useMyPurchasePackages";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

type PropsType = {
  amountDeductFromCard: number;
};

function CheckoutButton({ amountDeductFromCard }: PropsType) {
  const t = useTranslations("cartPage.checkoutBtn");
  const { mutate: purchasePackagesApi, isPending: isPurchasing } =
    useMyPurchasePackages();
  const { promoCodeData } = usePromoCodeActions();
  const { totalCartItems } = useMyCartActions();

  function handleClick() {
    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
    }

    purchasePackagesApi({
      cartItems: totalCartItems,
      redirect_url,
      promo_code: promoCodeData ? promoCodeData.promo_code : null,
      email: "",
      name: "",
    });
  }

  return (
    <Button
      className={`group flex py-[18px] mt-2 rounded-4xl w-full items-center gap-3 text-sm bg-primary text-primary-foreground hover:text-primary-foreground cursor-pointer`}
      disabled={isPurchasing}
      onClick={handleClick}
    >
      {isPurchasing ? (
        <SpinnerMini />
      ) : (
        <>
          <Lock size={20} />
          {amountDeductFromCard === 0 ? t("purchaseNow") : t("secureCheckout")}
          <ArrowUpRight
            className="transition group-hover:rotate-45"
            size={20}
          />
        </>
      )}
    </Button>
  );
}

export default CheckoutButton;
