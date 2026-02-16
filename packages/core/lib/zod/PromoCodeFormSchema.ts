import { z } from "zod";

export type PromoCodeValidationMessages = {
  promo_code: {
    required: string;
    minLength: string;
    maxLength: string;
    pattern: string;
  };
};

export function getPromoCodeFormSchema(
  validations?: PromoCodeValidationMessages
) {
  return z.object({
    promo_code: z
      .string()
      .min(1, validations?.promo_code.required ?? "Please enter a promo code")
      .min(
        3,
        validations?.promo_code.minLength ??
          "Promo code must be at least 3 characters"
      )
      .max(
        30,
        validations?.promo_code.maxLength ??
          "Promo code must be 30 characters or less"
      )
      .regex(
        /^[A-Z0-9_-]+$/i,
        validations?.promo_code.pattern ??
          "Promo code can only contain letters, numbers, hyphens, and underscores"
      )
      .transform((val) => val.toUpperCase().trim()),
  });
}

export type PromoCodeFormInputs = z.infer<
  ReturnType<typeof getPromoCodeFormSchema>
>;
