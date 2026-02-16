import { z } from "zod";

export type RefillFormValidations = {
  amount: {
    typeError: string;
    min: string;
    max: string;
  };
};

export function getRefillFormSchema(validations?: RefillFormValidations) {
  return z.object({
    amount: z.coerce
      .number({
        invalid_type_error:
          validations?.amount.typeError ?? "Amount must be a number",
      })
      .min(1, validations?.amount.min ?? "Minimum amount is 1")
      .max(300, validations?.amount.max ?? "Maximum amount is 300"),
  });
}

export type RefillFormInputs = z.infer<ReturnType<typeof getRefillFormSchema>>;
