"use client";

import ApplyCouponCode from "@/components/purchase/ApplyCouponCode";
import CartItemsList from "@/components/purchase/CartItemsList";
import CheckoutSummary from "@/components/purchase/CheckoutSummary";
import PaymentMethods from "@/components/purchase/PaymentMethods";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useCartActions } from "@workspace/core/hooks/cart/useCartActions";
import { useCheckoutSummary } from "@workspace/core/hooks/purchase/useCheckoutSummary";
import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";
import PayAsGuest from "./PayAsGuest";
import UserBalance from "./UserBalance";
import { useTranslations } from "next-intl";

function CheckoutDetail() {
  const t = useTranslations("cartPage.checkoutDetails");
  const { totalCartPrice, isCartDetailLoading } = useCartActions();
  const { data: checkouSummary, isLoading: isCheckoutSummaryLoading } =
    useCheckoutSummary();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="order-1 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <Card className="flex w-full bg-background border-none flex-col gap-5 rounded-[15px] shadow-none px-1 py-5 sm:p-5">
            {!isAuthenticated && (
              <h1 className="font-semibold text-foreground text-4xl md:text-5xl">{t("checkout")}</h1>
            )}
 {isAuthenticated && (
          <div className={`flex flex-col w-full gap-5 md:flex-row`}>
            <UserBalance />
            {/* <DiscountTimer /> */}
          </div>
        )}
            <CartItemsList />
          </Card>

          <Card className="flex w-full border-none flex-col gap-5 rounded-[15px] shadow-none px-1 py-5 sm:p-5">
            {/* Pricing */}
            <div
              className={`flex flex-col ${!isAuthenticated ? "lg:py-10" : "lg:py-6"} px-2`}
            >
              <p className="font-montserrat text-foreground text-body-lg font-500">
                {t("summary")}
              </p>

              <div className="flex text-body-base font-500 text-foreground/70 dark:text-foreground px-2 py-4 justify-between">
                <p>{t("subTotal")}</p>

                {isCartDetailLoading || isCheckoutSummaryLoading ? (
                  <Skeleton className="h-[16px] w-[60px] rounded-pill " />
                ) : (
                  <p>
                    $
                    {checkouSummary
                      ? checkouSummary.original_amount.toFixed(2)
                      : totalCartPrice}
                  </p>
                )}
              </div>
              <ApplyCouponCode
                couponContainerStyle="mb-0 !mx-2"
                titleStyle="text-body-base leading-none text-foreground hover:text-primary"
                inputStyle="dark:bg-background"
                buttonStyle="text-sm bg-primary text-primary-foreground dark:hover:bg-background dark:hover:text-foreground hover:bg-foreground hover:text-background hover:border-border"
                couponTextStyle="text-sm !mx-2"
                couponBadgeStyle="py-0 px-2"
                discountTextStyle="text-sm"
              />
              <div className="flex text-body-base font-500 text-foreground py-4 px-2 justify-between border-b border-grey/80 border-t mt-6">
                <p className="font-bold text-lg text-foreground">{t("total")}</p>

                {isCartDetailLoading || isCheckoutSummaryLoading ? (
                  <Skeleton className="h-[16px] w-[60px] rounded-pill" />
                ) : (
                  <p className="font-bold text-lg">
                    $
                    {checkouSummary
                      ? checkouSummary.total_amount
                      : totalCartPrice}
                  </p>
                )}
              </div>
              {!isAuthenticated && <PayAsGuest />}

              {isAuthenticated && <CheckoutSummary />}
              {isAuthenticated && (
                <Card className="flex w-full flex-col rounded-[15px] border px-1 py-5 sm:p-5 mt-10">
                  <PaymentMethods />
                </Card>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CheckoutDetail;
