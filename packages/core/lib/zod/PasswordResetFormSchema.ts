import { z } from "zod";

export type PasswordResetFormValidations = {
  email: {
    invalid: string;
  };
  password: {
    min: string;
    max: string;
  };
  confirmPassword: {
    min: string;
    max: string;
  };
  otp: {
    min: string;
    max: string;
  };
  refine: {
    message: string;
  };
};

export function getPasswordResetFormSchema(
  isOTPSent: boolean,
  validations?: PasswordResetFormValidations
) {
  const passwordResetFormSchema = z
    .object({
      email: z.string().email({
        message:
          validations?.email.invalid ?? "Please enter a valid email address.",
      }),
      password: isOTPSent
        ? z
            .string()
            .min(
              8,
              validations?.password.min ??
                "Password must be at least 8 characters long."
            )
            .max(
              100,
              validations?.password.max ??
                "Password must be less than 100 characters."
            )
        : z.string().optional(),
      confirmPassword: isOTPSent
        ? z
            .string()
            .min(8, {
              message:
                validations?.confirmPassword.min ??
                "Confirm Password must be at least 8 characters long.",
            })
            .max(100, {
              message:
                validations?.confirmPassword.max ??
                "Confirm Password must be less than 100 characters.",
            })
        : z.string().optional(),
      otp: isOTPSent
        ? z
            .string()
            .min(4, {
              message:
                validations?.otp.min ??
                "OTP must be at least 4 characters long.",
            })
            .max(4, {
              message:
                validations?.otp.max ??
                "OTP must be at most 4 characters long.",
            })
        : z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: validations?.refine.message ?? "Password do not match.",
      path: ["confirmPassword"],
    });

  return passwordResetFormSchema;
}

export type PasswordResetFormInputs = z.infer<
  ReturnType<typeof getPasswordResetFormSchema>
>;
