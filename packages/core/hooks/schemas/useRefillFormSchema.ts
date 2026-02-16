import { zodResolver } from "@hookform/resolvers/zod";
import {
  getRefillFormSchema,
  RefillFormInputs,
  RefillFormValidations,
} from "@workspace/core/lib/zod/refillFormSchema";
import { useForm } from "react-hook-form";

export function useRefillFormSchema(validations?: RefillFormValidations) {
  return useForm<RefillFormInputs>({
    resolver: zodResolver(getRefillFormSchema(validations)),
    defaultValues: {
      amount: undefined,
    },
  });
}
