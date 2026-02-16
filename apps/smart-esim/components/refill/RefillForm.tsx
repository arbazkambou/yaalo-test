"use client";

import SpinnerMini from "@/components/shared/SpinnerMini";
import { useWalletRefill } from "@workspace/core/hooks/refill/useWalletRefill";
import { useRefillFormSchema } from "@workspace/core/hooks/schemas/useRefillFormSchema";
import { RefillFormInputs } from "@workspace/core/lib/zod/refillFormSchema";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { HandCoins } from "lucide-react";
import { useTranslations } from "next-intl";

function RefillForm() {
  const t = useTranslations("refillPage.refillForm");
  const tt = useTranslations("refillPage.validationMessages");
  const { isRefilling, WalletRefillApi } = useWalletRefill({
    paymentFailed: tt("paymentFailed"),
    refreshedFailed: tt("refreshedFailed"),
    refreshedSuccess: tt("refreshedSuccess"),
    stripeMissing: tt("stripeMissing"),
    stripeRedirect: tt("stripeRedirect"),
  });
  const form = useRefillFormSchema({
    amount: {
      typeError: t("validationMessages.amount.typeError"),
      min: t("validationMessages.amount.min"),
      max: t("validationMessages.amount.max"),
    },
  });

  function handleRefillFormSubmit(values: RefillFormInputs) {
    WalletRefillApi({
      amount: String(values.amount),
      landing_redirect_url: `${window.location.origin}/refill`,
    });
  }

  return (
    <Form {...form}>
      <form
        className="relative flex items-start gap-2"
        onSubmit={form.handleSubmit(handleRefillFormSubmit)}
      >
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder={t("placeholder")}
                    type="number"
                    {...field}
                    disabled={isRefilling}
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="rounded-full bg-primary text-background !px-5 !py-3.5 font-600 shadow-none"
          size="md"
          type="submit"
          disabled={isRefilling}
        >
          {isRefilling ? (
            <SpinnerMini />
          ) : (
            <>
              {" "}
              <HandCoins size={24} className="shrink-0" /> {t("paybtn")}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default RefillForm;
