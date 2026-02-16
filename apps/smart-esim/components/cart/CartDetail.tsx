import CartItem from "@/components/cart/CartItem";
import ApplyCouponCode from "@/components/purchase/ApplyCouponCode";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import FooterLink from "@/components/ui/links/FooterLink";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useCheckoutSummary } from "@workspace/core/hooks/purchase/useCheckoutSummary";
import { Button } from "@workspace/ui/components/button";
import { SheetHeader, SheetTitle } from "@workspace/ui/components/sheet";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";


function CartDetail() {
  const t = useTranslations("cartPage");
  const { totalCartItems, totalCartPrice, setShowCartDetail } =
    useMyCartActions();
  const { data: checkoutSummary, isLoading: isCheckoutSummaryLoading } =
    useCheckoutSummary();

  return totalCartItems.length !== 0 ? (
    <>
      <SheetHeader className="!h-max border-b px-6 pb-4 pt-6">
        <SheetTitle className="flex items-center gap-2.5 font-montserrat">
          <ShoppingCart size={24} />
          {t("reviewCart")}
        </SheetTitle>
      </SheetHeader>

      {/* Cart Items */}
      <div className="flex flex-grow flex-col justify-start gap-4 overflow-auto py-4 scrollbar-thin">
        {totalCartItems.map((item, index) => (
          <CartItem cartItem={item} key={index} />
        ))}
      </div>

      {/* Coupon and Checkout */}
      <div className="border-t px-4 pb-3 pt-3 sm:px-6">
        <ApplyCouponCode />

        {/* Subtotal */}
        <div className="mb-2 flex items-center justify-between">
          <p className="font-montserrat text-lg font-semibold">
            {t("checkoutDetails.subTotal")}
          </p>
          <span className="flex items-center justify-center rounded-[6px] bg-primary/15 px-[12px] py-[4px] text-base font-medium text-primary">
            {isCheckoutSummaryLoading ? (
              <Skeleton className="h-[16px] w-[40px] rounded-pill bg-background/80" />
            ) : (
              <>
                $
                {checkoutSummary
                  ? checkoutSummary.original_amount
                  : totalCartPrice}
              </>
            )}
          </span>
        </div>

        {/* Checkout Button */}
        <div className="flex flex-col gap-1.5">
          <Link
            href={"/cart/"}
            className="w-full"
            onClick={() => setShowCartDetail(false)}
          >
            <Button
              className="bg-primary text-primary-foreground w-full"
              role="link"
            >
              {t("checkout")}{" "}
              {isCheckoutSummaryLoading ? (
                <Skeleton className="h-[16px] w-[40px] rounded-pill bg-background/80" />
              ) : (
                <>
                  ${" "}
                  {checkoutSummary
                    ? checkoutSummary.total_amount.toFixed(2)
                    : totalCartPrice}
                </>
              )}
            </Button>
          </Link>

          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-base hover:text-primary border-dashed!"
            onClick={() => {
              setShowCartDetail(false);
            }}
          >
            {t("continueShopping")}
          </Button>
        </div>
      </div>
    </>
  ) : (
    <div className="ms-6 mt-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold">{t("emptyCart")}</h2>
      <p className="mt-2 text-sm">{t("exploreText")}</p>

      <FooterLink
        href={"/esim"}
        className="text-primary underline underline-offset-4"
        onClick={() => setShowCartDetail(false)}
      >
        {t("browseText")}
      </FooterLink>
    </div>
  );
}

export default CartDetail;
