"use client";

import SocialLogins from "@/components/auth/SocialLogins";
import TogglePasswordButton from "@/components/ui/buttons/TogglePasswordButton";
import { useRegister } from "@workspace/core/hooks/auth/useRegister";
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
import { useTranslations } from "next-intl";
import OrLine from "./OrLine";
import useRecaptcha from "@workspace/core/hooks/misc/useRecaptcha";
import GoogleRecaptcha from "@workspace/core/components/GoogleRecaptcha";
import { useRouter } from "@/i18n/navigation";
// import LoginRedirectionModal from "./LoginRedirectionModal";
// import SocialLogins from "./SocialLogins";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

function RegisterForm() {
  const t = useTranslations("RegisterPage.form");
  const { showPassword, togglePasswordVisibility } = useTogglePassword();
  const { handleRecaptchaChange, recaptchaToken, resetCaptcha, recaptchaRef } =
    useRecaptcha();
  const router = useRouter();
  const {
    isLoading,
    isOTPSent,
    resendOTP,
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
                "OTP has been sent to your email. Please Verify it.",
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
        },
        {
          onSuccess: (data) => {
            if (data.status) {
              toast.success(t(`registerSuccess`));
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
          <h1 className="text-h1-base font-500">{t("signUp")}</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("nameLabel")}</FormLabel>
                <FormControl>
                  <Input
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
                    <FormControl>
                      <div className="relative">
                        <label className="mb-2 block text-sm text-muted-foreground">
                          {t("otpLabel")}
                        </label>

                        <InputOTP maxLength={4} {...field} disabled={isLoading}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
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
                className="w-max"
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
            type="submit"
            disabled={isLoading || (!isOTPSent && !recaptchaToken)}
            className="bg-primary hover:bg-primary/80 cursor-pointer text-background flex items-center justify-center"
          >
            {isLoading && !isOTPResending ? <Spinner /> : t("register")}
          </Button>
          <OrLine />
        </form>
      </Form>
      <div className="mt-[2rem]">
        <SocialLogins />
      </div>
    </>
  );
}

export default RegisterForm;
