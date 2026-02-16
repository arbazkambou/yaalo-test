// usePasswordResetFormSchema.ts
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getPasswordResetFormSchema,
  PasswordResetFormValidations,
} from "@workspace/core/lib/zod/PasswordResetFormSchema";
import { useForm } from "react-hook-form";

export function usePasswordResetFormSchema(
  isOTPSent: boolean,
  validations?: PasswordResetFormValidations
) {
  const form = useForm({
    resolver: zodResolver(getPasswordResetFormSchema(isOTPSent, validations)),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    },
  });

  return form;
}
