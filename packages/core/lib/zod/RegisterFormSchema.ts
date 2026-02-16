import { z } from "zod";

export type RegisterFormValidations = {
  name: {
    min: string;
    max: string;
  };
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

export function getRegisterFormSchema(
  isOTPSent: boolean,
  validations?: RegisterFormValidations
) {
  const registerFormSchema = z
    .object({
      name: z
        .string()
        .min(
          4,
          validations?.name.min ?? "Name must be at least 4 characters long."
        )
        .max(
          100,
          validations?.name.max ?? "Name must be less than 100 characters."
        ),
      email: z.string().email({
        message:
          validations?.email.invalid ?? "Please enter a valid email address.",
      }),
      password: z
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
        ),
      confirmPassword: z
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
        }),
      // phoneNumber: z.preprocess(
      //   (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
      //   z
      //     .string()
      //     .max(15, "Too long for a phone number")
      //     .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
      //     .optional(),
      // ),

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

  return registerFormSchema;
}

export type RegisterFormInputs = z.infer<
  ReturnType<typeof getRegisterFormSchema>
>;
