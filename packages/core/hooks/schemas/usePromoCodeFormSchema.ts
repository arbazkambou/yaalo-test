import { zodResolver } from "@hookform/resolvers/zod";
import {
  getPromoCodeFormSchema,
  PromoCodeFormInputs,
  PromoCodeValidationMessages,
} from "@workspace/core/lib/zod/PromoCodeFormSchema";
import { useForm } from "react-hook-form";

export function usePromoCodeFormSchema(
  validations?: PromoCodeValidationMessages
) {
  const form = useForm<PromoCodeFormInputs>({
    resolver: zodResolver(getPromoCodeFormSchema(validations)),
    defaultValues: { promo_code: "" },
  });
  return form;
}
