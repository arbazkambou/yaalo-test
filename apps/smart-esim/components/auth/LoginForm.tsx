"use client";

import TogglePasswordButton from "@/components/ui/buttons/TogglePasswordButton";
import FooterLink from "@/components/ui/links/FooterLink";
import { useLogin } from "@workspace/core/hooks/auth/useLogin";
import { useLoginFormSchema } from "@workspace/core/hooks/schemas/useLoginFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { LoginFormInputs } from "@workspace/core/lib/zod/LoginFormSchema";
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
import { Spinner } from "@workspace/ui/components/spinner";
import OrLine from "@/components/auth/OrLine";
import SocialLogins from "@/components/auth/SocialLogins";
import { useTranslations } from "next-intl";

function LoginForm() {
  const t = useTranslations("LoginPage.form");
  const { showPassword, togglePasswordVisibility } = useTogglePassword();
  const form = useLoginFormSchema({
    email: { invalid: t("validationMessages.email.invalid") },
    password: {
      max: t("validationMessages.password.max"),
      min: t("validationMessages.password.min"),
    },
  });
  const { isEmailAndPasswordLoggingIn, loginWithEmailAndPasswordApi } =
    useLogin();

  function onSubmit(values: LoginFormInputs) {
    loginWithEmailAndPasswordApi(
      { ...values },
      {
        onSuccess: () => {
          toast.success(t("loginSuccess"));
          window.location.href = "/";
        },
      }
    );
  }

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-h1-base font-500">{t("signIn")}</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8"
        >
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
                    disabled={isEmailAndPasswordLoggingIn}
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
              <>
                <FormItem>
                  <FormLabel>{t("passwordLabel")}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder={t("enterPassword")}
                        type={showPassword ? "text" : "password"}
                        {...field}
                        disabled={isEmailAndPasswordLoggingIn}
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
          <FooterLink
            href={"/password/reset"}
            className="-mt-4 ms-2 text-sm text-primary"
          >
            {t("forgotPassword")}
          </FooterLink>

          <Button
            type="submit"
            disabled={isEmailAndPasswordLoggingIn}
            className="bg-primary hover:bg-primary/80 cursor-pointer text-background flex items-center justify-center"
          >
            {isEmailAndPasswordLoggingIn ? (
              <Spinner className="size-6" />
            ) : (
              t("login")
            )}
          </Button>
          <OrLine />
        </form>
      </Form>
      <SocialLogins />
    </section>
  );
}

export default LoginForm;
