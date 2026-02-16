import { zodResolver } from "@hookform/resolvers/zod";
import {
  getRegisterFormSchema,
  RegisterFormInputs,
  RegisterFormValidations,
} from "@workspace/core/lib/zod/RegisterFormSchema";
import { useForm } from "react-hook-form";

export function useRegisterFormSchema(
  isOTPSent: boolean,
  validations?: RegisterFormValidations
) {
  const form = useForm<RegisterFormInputs>({
    resolver: zodResolver(getRegisterFormSchema(isOTPSent, validations)),
    defaultValues: {
      name: "",
      email: "",
      confirmPassword: "",
      password: "",
      otp: "",
      // phoneNumber: "",
    },
  });

  return form;
}
