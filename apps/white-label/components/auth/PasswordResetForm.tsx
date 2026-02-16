import TogglePasswordButton from "@/components/ui/buttons/TogglePasswordButton";
import { usePasswordReset } from "@workspace/core/hooks/auth/usePasswordReset";
import { usePasswordResetFormSchema } from "@workspace/core/hooks/schemas/usePasswordResetFormSchema";
import { useTogglePassword } from "@workspace/core/hooks/ui/useTogglePassword";
import { PasswordResetFormInputs } from "@workspace/core/lib/zod/PasswordResetFormSchema";
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
import { Spinner } from "@workspace/ui/components/spinner";
import { ArrowLeft, ArrowUpFromDot } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function PasswordResetForm() {
    const t = useTranslations("ResetPasswordPage");
  const { showPassword, togglePasswordVisibility } = useTogglePassword();

  const {
    isOTPSent,
    isOTPResending,
    isLoading,
    sendOTPApi,
    resetPasswordApi,
    setIsOTPResending,
  } = usePasswordReset();

   const form = usePasswordResetFormSchema(isOTPSent, {
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

  function onSubmit(values: PasswordResetFormInputs) {
    if (!isOTPSent)
      return sendOTPApi(values.email, {
        onSuccess: () => {
          form.resetField("otp");
        },
      });

    return resetPasswordApi(
      {
        email: values.email,
        password: values.password!,
        password_confirmation: values.confirmPassword!,
        token: values.otp!,
      },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  }

  return (
    <section className="container mx-auto flex flex-col gap-[1.3rem] xl:mt-5">
      <div className="flex items-center justify-center gap-3">
        <Link href={"/login"} className="transition-colors hover:text-primary">
          <ArrowLeft className="h-[24px] w-[24px] text-foreground" />
        </Link>
        <h1 className="font-montserrat text-center text-body-lg font-500 text-foreground">
         {t("resetPassword")}
        </h1>
      </div>

      <p className="text-body-sm text-center text-foreground">
        {t("emailReceive")}
      </p>

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

          {isOTPSent && (
            <>
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
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
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
                  <FormItem>
                    <FormLabel>{t("confirmPassword")}</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          className="dark:bg-background! text-foreground"
                          placeholder={t("enterconfirmPassword")}
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
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
                )}
              />

              {/* OTP FIELD */}
              <div className="flex flex-col gap-1.5">
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <label className="mb-[0.5rem] block text-sm text-muted-foreground">
                        {t("enterOtp")}
                      </label>

                      <FormControl>
                        <InputOTP maxLength={4} {...field} disabled={isLoading}>
                          <InputOTPGroup className="gap-2">
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
                              className="bg-background rounded-sm text-foreground"
                              index={3}
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  onClick={() => {
                    setIsOTPResending(true);
                    form.resetField("otp");
                    sendOTPApi(form.getValues("email"));
                  }}
                  disabled={isLoading}
                  className="w-max bg-primary mt-2 hover:bg-foreground hover:text-background border-none"
                  size={"sm"}
                >
                  {isOTPResending ? <Spinner /> : t("resendOtp")}
                </Button>
              </div>
            </>
          )}

          <Button variant={"animatedYaalo"} type="submit" disabled={isLoading}>
            {isLoading && !isOTPResending ? (
              <Spinner />
            ) : (
              <>
                {t("submit")}
                <ArrowUpFromDot
                  size={20}
                  className="rotate-45 group-hover:rotate-90 transition-all"
                />
              </>
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default PasswordResetForm;
