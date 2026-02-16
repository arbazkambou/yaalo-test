"use client";

import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useLogin } from "@workspace/core/hooks/auth/useLogin";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";
import { usePurchaseAsGuestFormSchema } from "@workspace/core/hooks/schemas/usePurchaseAsGuestFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { PurchaseAsGuestInputs } from "@workspace/core/lib/zod/purchaseAsGuestFormSchema";
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
import { toast } from "@workspace/ui/components/sonner";
import { ArrowUpRight } from "lucide-react";
import SpinnerMini from "@/components/shared/SpinnerMini";
import FooterLink from "@/components/ui/links/FooterLink";
import SocialLogins from "@/components/auth/SocialLogins";
import { Card } from "@workspace/ui/components/card";
import PaymentMethods from "./PaymentMethods";
import TogglePasswordButton from "../ui/buttons/TogglePasswordButton";
import { useTranslations } from "next-intl";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useMyPurchasePackages } from "../../hooks/useMyPurchasePackages";

function PayAsGuest() {
  const t = useTranslations("cartPage.payAsGuest");
  const ts = useTranslations("SharedUI");
  const { isAuthLoading, isAuthenticated } = useAuth();
  const { loginWithEmailAndPasswordApi, isEmailAndPasswordLoggingIn } =
    useLogin();
  const { promoCodeData } = usePromoCodeActions();
  const { totalCartItems } = useMyCartActions();
  const {
    isUserExist,
    isPending: isPurchasingAsGuest,
    mutate: purchaseAsGuestApi,
  } = useMyPurchasePackages();
  const form = usePurchaseAsGuestFormSchema(isUserExist, {
    email: { invalid: t("validationMessages.email.invalid") },
    name: { minLength: t("validationMessages.name.minLength") },
    password: {
      maxLength: t("validationMessages.password.maxLength"),
      required: t("validationMessages.password.required"),
    },
  });
  const { showPassword, togglePasswordVisibility } = useTogglePassword();

  const isNotAuthenticated = !isAuthLoading && !isAuthenticated;

  function onSubmit(value: PurchaseAsGuestInputs) {
    if (isUserExist) {
      loginWithEmailAndPasswordApi(
        {
          email: value.email,
          password: value.password!,
        },
        {
          onSuccess: () => {
            toast.success(t("loginSuccess"));
            window.location.href = "/cart";
          },
        },
      );

      return;
    }

    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
    }
    purchaseAsGuestApi({
      promo_code: promoCodeData ? promoCodeData.promo_code : null,
      cartItems: totalCartItems,
      redirect_url,
      email: value.email,
      name: value.name ?? "",
    });
  }
  return (
    <>
      <div
        className={`flex w-full  items-center justify-center xl:justify-end ${isNotAuthenticated && "!order-2"} xl:!order-1`}
      >
        <div className="flex w-full flex-col gap-[25px] xl:max-w-[700px]">
          <div className="bg-muted p-8 rounded-lg mt-[21px]">
            <p className="text-[36px] text-center text-foreground font-500 mb-4">
              {isUserExist ? t("loginAsUser") : t("loginAsGuest")}
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex  w-full flex-col gap-[25px] "
              >
                {/* name input  */}
                {!isUserExist && (
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("fullName")}</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-background text-foreground"
                            placeholder=""
                            {...field}
                            disabled={
                              isPurchasingAsGuest || isEmailAndPasswordLoggingIn
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {/* email input  */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-background text-foreground"
                          placeholder=""
                          {...field}
                          disabled={
                            isPurchasingAsGuest || isEmailAndPasswordLoggingIn
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* password input  */}
                {isUserExist && (
                  <>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>{t("password")}</FormLabel>
                            <div className="relative">
                              <FormControl>
                                <Input
                                  className="bg-background text-foreground"
                                  placeholder=""
                                  type={showPassword ? "text" : "password"}
                                  {...field}
                                  disabled={
                                    isPurchasingAsGuest ||
                                    isEmailAndPasswordLoggingIn
                                  }
                                />
                              </FormControl>
                              <TogglePasswordButton
                                showPassword={showPassword}
                                togglePasswordVisibility={
                                  togglePasswordVisibility
                                }
                              />
                            </div>

                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />

                    <FooterLink
                      href={"/password/reset"}
                      className="-mt-4 ms-2 text-sm text-primary"
                    >
                      {t("forgetPassword")}
                    </FooterLink>
                  </>
                )}

                <Button
                  variant={"animatedYaalo"}
                  className={`group flex items-center gap-3 text-sm`}
                  type="submit"
                  disabled={isPurchasingAsGuest || isEmailAndPasswordLoggingIn}
                >
                  {isPurchasingAsGuest || isEmailAndPasswordLoggingIn ? (
                    <SpinnerMini />
                  ) : (
                    <>
                      {isUserExist ? t("login") : t("continueAsGuest")}
                      <ArrowUpRight
                        className="transition-all group-hover:rotate-45 "
                        size={20}
                      />
                    </>
                  )}
                </Button>
              </form>
            </Form>
            <div className="relative text-center py-4 text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-muted px-2 text-muted-foreground">
                {ts("orLine")}
              </span>
            </div>
            <SocialLogins
              // isGuestPurchase={true}
              callBackUrl="/cart"
            />
          </div>

          {!isUserExist && (
            <>
              {/* terms and conditions  */}
              <p className="text-body-base text-foreground leading-normal font-400">
                {t("clickToContinueAsGuest")}{" "}
                <FooterLink
                  href={"/terms-of-service"}
                  className="inline text-primary underline underline-offset-2"
                >
                  {" "}
                  {t("termsOfUse")}
                </FooterLink>{" "}
                {t("and")}{" "}
                <FooterLink
                  href={"/privacy-policy"}
                  className="inline text-primary underline underline-offset-2"
                >
                  {t("privacyPolicy")}
                </FooterLink>{" "}
                {t("stripeText")}.{" "}
              </p>
            </>
          )}
          <Card className="flex w-full flex-col rounded-[15px] border px-1 py-5 sm:p-5">
            <PaymentMethods />
          </Card>
        </div>
      </div>
      {/* Redirection options  */}
    </>
  );
}

export default PayAsGuest;
