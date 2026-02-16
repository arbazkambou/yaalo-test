"use client";

import SpinnerMini from "@/components/shared/SpinnerMini";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useApplyPromoCode } from "@workspace/core/hooks/purchase/useApplyPromoCode";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";
import { usePromoCodeFormSchema } from "@workspace/core/hooks/schemas/usePromoCodeFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { PromoCodeFormInputs } from "@workspace/core/lib/zod/PromoCodeFormSchema";
import { Button } from "@workspace/ui/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown, Tags, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface PropsType {
  couponContainerStyle?: string;
  titleStyle?: string;
  inputStyle?: string;
  buttonStyle?: string;
  couponTextStyle?: string;
  couponBadgeStyle?: string;
  discountTextStyle?: string;
}

function ApplyCouponCode({
  titleStyle,
  inputStyle,
  buttonStyle,
  couponBadgeStyle,
  couponTextStyle,
  discountTextStyle,
  couponContainerStyle,
}: PropsType) {
  const {
    isPromoCodeApplying,
    showCouponCollapsible,
    setShowCouponCollapsible,
    applyPromoCodeApi,
  } = useApplyPromoCode();

  const { totalCartItems } = useMyCartActions();
  const t = useTranslations("cartPage.applyPromoCode");
  const td = useTranslations("cartPage.checkoutDetails");
  const {} = useTogglePassword();

  const form = usePromoCodeFormSchema({
    promo_code: {
      maxLength: t("validationMessages.promo_code.maxLength"),
      minLength: t("validationMessages.promo_code.minLength"),
      pattern: t("validationMessages.promo_code.pattern"),
      required: t("validationMessages.promo_code.required"),
    },
  });

  const { promoCodeData, handleClearPromoCodeData, handleSetPromoCodeData } =
    usePromoCodeActions();

  function onPromoCodeSubmit(values: PromoCodeFormInputs) {
    if (promoCodeData) {
      form.setError("promo_code", {
        message: t("validationMessages.promo_code.alreadyApplied"),
      });
      return;
    }

    applyPromoCodeApi(
      {
        cartItems: totalCartItems,
        promo_code: values.promo_code,
      },
      {
        onSuccess: (data) => {
          if (data.status && data.data.promo_applied) {
            const promoCode = form.getValues("promo_code");
            handleSetPromoCodeData({ promo_code: promoCode, ...data.data });
            form.setValue("promo_code", "");
          }
        },
        onSettled: () => {
          form.clearErrors();
        },
      }
    );
  }

  return (
    <>
      {/* Coupon Code Collapsible */}
      <Collapsible
        className={cn(`CollapsibleContent group mb-2`, couponContainerStyle)}
        open={showCouponCollapsible}
        onOpenChange={setShowCouponCollapsible}
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between transition-all hover:text-primary">
          <p
            className={cn(`font-montserrat text-lg font-semibold`, titleStyle)}
          >
            {td("discountCode")}
          </p>
          <ChevronDown
            size={20}
            className="transition-all group-data-[state=open]:rotate-180"
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <Form {...form}>
            <form
              className="grid grid-cols-[1fr_auto] gap-2"
              onSubmit={form.handleSubmit(onPromoCodeSubmit)}
            >
              <FormField
                control={form.control}
                name="promo_code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={cn(inputStyle, "w-full")}
                        placeholder={td("promoCode")}
                        type="text"
                        {...field}
                        disabled={isPromoCodeApplying}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className={cn(buttonStyle)}
                disabled={isPromoCodeApplying}
              >
                {isPromoCodeApplying ? <SpinnerMini /> : td("apply")}
              </Button>
            </form>
          </Form>
        </CollapsibleContent>
      </Collapsible>

      {/* Applied Coupon */}
      {promoCodeData && (
        <div className="mb-3 flex items-center justify-between">
          <p
            className={cn(
              `flex items-center gap-2 font-montserrat text-lg font-medium`,
              couponTextStyle
            )}
          >
            <Tags size={20} />
            Coupon
            <span
              className={cn(
                `rounded-md bg-primary-accent px-3 py-1 text-sm uppercase`,
                couponBadgeStyle
              )}
            >
              {promoCodeData.promo_code}
            </span>
            <button
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                handleClearPromoCodeData();
              }}
            >
              <X size={16} />
            </button>
          </p>

          {/* discount after coupon  */}
          <span
            className={cn(
              `flex items-center justify-center rounded-[6px] bg-primary/15 px-[12px] py-[4px] text-base font-medium text-primary`,
              discountTextStyle
            )}
          >
            {promoCodeData.discount}% Off
          </span>
        </div>
      )}
    </>
  );
}

export default ApplyCouponCode;
