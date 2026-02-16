import SpinnerMini from "@/components/shared/SpinnerMini";
import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";
import { Button } from "@workspace/ui/components/button";
import { Lock } from "lucide-react";
import { useMyPurchasePackages } from "../../hooks/useMyPurchasePackages";

type PropsType = {
  amountDeductFromCard: number;
};

function CheckoutButton({ amountDeductFromCard }: PropsType) {
  const { mutate: purchasePackagesApi, isPending: isPurchasing } =
    useMyPurchasePackages();
  const { promoCodeData } = usePromoCodeActions();
  const { totalCartItems } = useCartActions();

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
      variant={"animatedYaalo"}
      className={`group flex py-[18px] mt-2 rounded-4xl w-full items-center gap-3 text-sm`}
      disabled={isPurchasing}
      onClick={handleClick}
    >
      {isPurchasing ? (
        <SpinnerMini />
      ) : (
        <>
          <Lock size={20} />
          {amountDeductFromCard === 0
            ? "Purchase Now"
            : "Go to Secure Checkout"}
        </>
      )}
    </Button>
  );
}

export default CheckoutButton;
