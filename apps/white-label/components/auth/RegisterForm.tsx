"use client";

import OrLine from "@/components/auth/OrLine";
import TogglePasswordButton from "@/components/ui/buttons/TogglePasswordButton";
import GoogleRecaptcha from "@workspace/core/components/GoogleRecaptcha";
import { useRegister } from "@workspace/core/hooks/auth/useRegister";
import useRecaptcha from "@workspace/core/hooks/misc/useRecaptcha";
import { useRegisterFormSchema } from "@workspace/core/hooks/schemas/useRegisterFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { RegisterFormInputs } from "@workspace/core/lib/zod/RegisterFormSchema";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp";
import { toast } from "@workspace/ui/components/sonner";
import { Spinner } from "@workspace/ui/components/spinner";
import { ArrowUpFromDot } from "lucide-react";
import { useState } from "react";
import AffiliateRedirectDialog from "../pages/AffiliateRedirectDialog";
import SocialLogins from "./SocialLogins";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

function RegisterForm({ isAffiliate }: { isAffiliate?: boolean }) {
    const t = useTranslations("RegisterPage.form");
  const { showPassword, togglePasswordVisibility } = useTogglePassword();
  const [showAffiliateRedirect, setShowAffiliateRedirect] = useState(false);
  const [adminRole, setAdminRole] = useState<string | null>(null);
  const { handleRecaptchaChange, recaptchaToken, resetCaptcha, recaptchaRef } =
    useRecaptcha();

  const router = useRouter();
  const pathname = usePathname();
  const isAffiliatePage = pathname.includes("affiliate");

  const {
    isLoading,
    isOTPSent,
    isSendingOTP,
    isOTPResending,
    sendOTPApi,
    registerUserApi,
    setIsOTPResending,
  } = useRegister();
   const form = useRegisterFormSchema(isOTPSent, {
    name: {
      max: t("validationMessages.name.max"),
      min: t("validationMessages.name.min"),
    },
    email: {
      invalid: t("validationMessages.email.invalid"),
    },
    password: {
      min: t("validationMessages.password.min"),
      max: t("validationMessages.password.max"),
    },
    confirmPassword: {
      min: t("validationMessages.confirmPassword.min"),
      max: t("validationMessages.confirmPassword.max"),
    },
    otp: {
      max: t("validationMessages.otp.max"),
      min: t("validationMessages.otp.min"),
    },

    refine: {
      message: t("validationMessages.refine.message"),
    },
  });

  function onRegisterFormSubmit(values: RegisterFormInputs) {
    if (!isOTPSent && recaptchaToken) {
      sendOTPApi(
        { email: values.email, password: values.password, recaptchaToken },
        {
          onSuccess: (data) => {
            if (data.status) {
              toast.success(
                t(`otpSendSuccess`)
              );
            }
            form.resetField("otp");
            resetCaptcha();
          },
        },
      );
    } else {
      registerUserApi(
        {
          email: values.email,
          password: values.password,
          name: values.name,
          otp: values.otp!,
          ...(isAffiliate ? { is_affiliate: 1 } : {}),
        },
        {
          onSuccess: (data) => {
            if (!data.status) {
              toast.error(data.message);
            }

            if (data.status) {
              if (data.data?.user.role) {
                const role = data.data.user.role;
                form.reset();
                setAdminRole(role.redirect_url);
                setShowAffiliateRedirect(true);

                return;
              }
              toast.success(
               t(`registerSuccess`) );
              router.push("/login");
              return;
            }

            form.reset();
          },
        },
      );
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onRegisterFormSubmit)}
          className="flex flex-col gap-8"
        >
          {isAffiliatePage ? (
            <h3 className="text-[30px] leading-tight font-semibold text-center text-foreground">
              {t("affiliate")}
            </h3>
          ) : (
            <h1 className="text-h2 text-center text-foreground">{t("signUp")}</h1>
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("nameLabel")}</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-background! text-foreground"
                    placeholder={t("enterName")}
                    type="text"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("emailLabel")}</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-background! text-foreground"
                    placeholder={t("enterEmail")}
                    type="email"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("passwordLabel")}</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-background! text-foreground"
                    placeholder={t("enterPassword")}
                    autoComplete="new-password"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>{t("confirmPassword")}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        className="dark:bg-background! text-foreground"
                        placeholder={t("confirmYourPassword")}
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <TogglePasswordButton
                      showPassword={showPassword}
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  </div>

                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          {isOTPSent && (
            <div className="flex flex-col gap-1.5">
              <FormField
                control={form.control}
                name="otp"
                disabled={isLoading}
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="bg-transparent">
                      <div className="relative">
                        <label className="mb-2 block text-sm text-muted-foreground">
                          {t("otpLabel")}
                        </label>

                        <InputOTP maxLength={4} {...field} disabled={isLoading}>
                          <InputOTPGroup className=" space-x-2">
                            <InputOTPSlot
                              className="bg-background rounded-sm text-foreground"
                              index={0}
                            />
                            <InputOTPSlot
                              className="bg-background rounded-sm text-foreground"
                              index={1}
                            />
                            <InputOTPSlot
                              className="bg-background rounded-sm text-foreground"
                              index={2}
                            />
                            <InputOTPSlot
                              className=" bg-background rounded-sm text-foreground"
                              index={3}
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="sm"
                className="w-max bg-primary hover:text-background border-none mt-2 hover:bg-foreground"
                onClick={() => {
                  if (recaptchaToken) {
                    sendOTPApi({
                      email: form.getValues("email"),
                      password: form.getValues("password"),
                      recaptchaToken,
                    });
                    form.resetField("otp");
                    setIsOTPResending(true);
                    resetCaptcha();
                  }
                }}
                type="button"
                disabled={isLoading || !recaptchaToken}
              >
                {isSendingOTP ? <Spinner /> : t("resendOtp")}
              </Button>
            </div>
          )}

          <GoogleRecaptcha
            siteKey={RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
            recaptchaRef={recaptchaRef}
          />

          <Button
            variant={"animatedYaalo"}
            type="submit"
            disabled={isLoading || (!isOTPSent && !recaptchaToken)}
            className="bg-primary hover:bg-foreground group cursor-pointer text-foreground hover:border-foreground flex items-center justify-center"
          >
            {isLoading && !isOTPResending ? (
              <Spinner />
            ) : (
              <>
                {t("register")}
                <ArrowUpFromDot
                  size={20}
                  className="rotate-45 transition-all group-hover:rotate-90"
                />
              </>
            )}
          </Button>
        </form>
      </Form>
      {isAffiliate ? null : (
        <div className="mt-4 gap-4 flex-col flex">
          <OrLine />
          <SocialLogins />
        </div>
      )}
      <AffiliateRedirectDialog
        open={showAffiliateRedirect}
        adminRole={adminRole}
        onClose={() => {
          setShowAffiliateRedirect(false);
          setAdminRole(null);
        }}
      />
    </>
  );
}

export default RegisterForm;
