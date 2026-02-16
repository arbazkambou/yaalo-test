import { z } from "zod";

export type PurchaseAsGuestValidations = {
  name?: {
    minLength: string;
  };
  email: {
    invalid: string;
  };
  password?: {
    required: string;
    maxLength: string;
  };
};

export function getPurchaseAsGuestFormSchema(
  isUserExist: boolean,
  validation?: PurchaseAsGuestValidations
) {
  return z.object({
    name: !isUserExist
      ? z.string().min(2, {
          message:
            validation?.name?.minLength ??
            "Name must be at least 2 characters.",
        })
      : z.string().optional(),
    email: z.string().email({
      message:
        validation?.email.invalid ?? "Please enter a valid email address.",
    }),

    password: isUserExist
      ? z
          .string()
          .min(1, validation?.password?.required ?? "Password is required.")
          .max(
            100,
            validation?.password?.maxLength ??
              "Password must be less than 100 characters."
          )
      : z.string().optional(),
  });
}

export type PurchaseAsGuestInputs = z.infer<
  ReturnType<typeof getPurchaseAsGuestFormSchema>
>;
