import { z } from "zod";

export type LoginFormValidations = {
  email: {
    invalid: string;
  };

  password: {
    min: string;
    max: string;
  };
};

export function getLoginFormSchema(validations?: LoginFormValidations) {
  return z.object({
    email: z.string().email({
      message:
        validations?.email.invalid ?? "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(1, validations?.password.min ?? "Password is required")
      .max(
        100,
        validations?.password.max ??
          "Password must be less than 100 characters."
      ),
    token: z.string().optional(),
  });
}

export type LoginFormInputs = z.infer<ReturnType<typeof getLoginFormSchema>>;
