import { zodResolver } from "@hookform/resolvers/zod";
import {
  getPurchaseAsGuestFormSchema,
  PurchaseAsGuestInputs,
  PurchaseAsGuestValidations,
} from "@workspace/core/lib/zod/purchaseAsGuestFormSchema";
import { useForm } from "react-hook-form";

export function usePurchaseAsGuestFormSchema(
  isUserExist: boolean,
  validation?: PurchaseAsGuestValidations
) {
  return useForm<PurchaseAsGuestInputs>({
    resolver: zodResolver(
      getPurchaseAsGuestFormSchema(isUserExist, validation)
    ),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
}
