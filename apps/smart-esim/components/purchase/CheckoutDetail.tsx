"use client";

import ApplyCouponCode from "@/components/purchase/ApplyCouponCode";
import CartItemsList from "@/components/purchase/CartItemsList";
import CheckoutSummary from "@/components/purchase/CheckoutSummary";
import PaymentMethods from "@/components/purchase/PaymentMethods";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useCheckoutSummary } from "@workspace/core/hooks/purchase/useCheckoutSummary";
import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";
import PayAsGuest from "./PayAsGuest";
import { useTranslations } from "next-intl";
import UserBalance from "./UserBalance";

function CheckoutDetail() {
  const t = useTranslations("cartPage.checkoutDetails");
  const { totalCartPrice, isCartDetailLoading } = useMyCartActions();
  const { data: checkouSummary, isLoading: isCheckoutSummaryLoading } =
    useCheckoutSummary();
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="order-1 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <Card className="flex w-full border-none flex-col gap-5 rounded-[15px] shadow-none px-1 py-5 sm:p-5">
            {!isAuthenticated && (
              <h1 className="font-semibold text-4xl md:text-5xl">
                {t("checkout")}
              </h1>
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
              className={`flex flex-col ${!isAuthenticated ? "lg:py-22" : "lg:py-6"} px-2`}
            >
              <p className="font-montserrat text-[22px] font-500">
                {t("summary")}
              </p>

              <div className="flex text-base font-500 text-foreground/70 px-2 py-4 justify-between">
                <p>{t("subTotal")}</p>

                {isCartDetailLoading || isCheckoutSummaryLoading ? (
                  <Skeleton className="h-[16px] w-[60px] rounded-pill bg-primary/20" />
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
                titleStyle="text-[16px] leading-none"
                // inputStyle="!py-1.5"
                buttonStyle="text-sm bg-primary text-primary-foreground hover:bg-background hover:text-foreground hover:border-border"
                couponTextStyle="text-sm !mx-2"
                couponBadgeStyle="py-0 px-2"
                discountTextStyle="text-sm"
              />
              <div className="flex text-base font-500 text-foreground/70 py-4 px-2 justify-between border-b border-grey/80 border-t mt-6">
                <p className="font-bold text-lg">{t("total")}</p>

                {isCartDetailLoading || isCheckoutSummaryLoading ? (
                  <Skeleton className="h-[16px] w-[60px] rounded-pill bg-primary/20" />
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
