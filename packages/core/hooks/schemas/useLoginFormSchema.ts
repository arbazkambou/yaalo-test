import { zodResolver } from "@hookform/resolvers/zod";
import {
  getLoginFormSchema,
  LoginFormInputs,
  LoginFormValidations,
} from "@workspace/core/lib/zod/LoginFormSchema";
import { useForm } from "react-hook-form";

export function useLoginFormSchema(validations?: LoginFormValidations) {
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(getLoginFormSchema(validations)),
    defaultValues: { email: "", password: "" },
  });
  return form;
}
