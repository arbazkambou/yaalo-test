"use client";

import SocialLogins from "@/components/auth/SocialLogins";
import SpinnerMini from "@/components/shared/SpinnerMini";
import FooterLink from "@/components/ui/links/FooterLink";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useMyPurchasePackages } from "@/hooks/useMyPurchasePackages";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useLogin } from "@workspace/core/hooks/auth/useLogin";
import { usePromoCodeActions } from "@workspace/core/hooks/purchase/usePromoCodeActions";
import { usePurchaseAsGuestFormSchema } from "@workspace/core/hooks/schemas/usePurchaseAsGuestFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { PurchaseAsGuestInputs } from "@workspace/core/lib/zod/purchaseAsGuestFormSchema";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
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
import { ArrowUpLeft, Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
import PaymentMethods from "./PaymentMethods";
import TogglePasswordButton from "../ui/buttons/TogglePasswordButton";

function PayAsGuest() {
  const t = useTranslations("cartPage.payAsGuest");
  const ts = useTranslations("SharedUI");
  const { isAuthLoading, isAuthenticated } = useAuth();
  const { loginWithEmailAndPasswordApi, isEmailAndPasswordLoggingIn } =
    useLogin();
  const { promoCodeData } = usePromoCodeActions();
  const { totalCartItems } = useMyCartActions();
  const { showPassword, togglePasswordVisibility } = useTogglePassword();
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
            <p className="text-[36px] text-center font-500 mb-4">
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
                  className={`group cursor-pointer hover:border-primary flex items-center gap-3 text-sm bg-primary text-primary-foreground hover:bg-background hover:text-foreground`}
                  type="submit"
                  disabled={isPurchasingAsGuest || isEmailAndPasswordLoggingIn}
                >
                  {isPurchasingAsGuest || isEmailAndPasswordLoggingIn ? (
                    <SpinnerMini />
                  ) : (
                    <>
                      <ArrowUpLeft
                        className="transition group-hover:rotate-90 group-hover:text-foreground "
                        size={20}
                      />
                      {isUserExist ? t("login") : t("continueAsGuest")}
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
              <p className="text-[16px] leading-normal font-400">
                {t("clickToContinueAsGuest")}{" "}
                <FooterLink
                  href={"/terms"}
                  className="inline text-primary underline underline-offset-2"
                >
                  {t("termsOfUse")}
                </FooterLink>{" "}
                {t("and")}{" "}
                <FooterLink
                  href={"/privacy-policy"}
                  className="inline text-primary underline underline-offset-2"
                >
                  {t("privacyPolicy")}
                </FooterLink>{" "}
                {t("stripeText")}.
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
