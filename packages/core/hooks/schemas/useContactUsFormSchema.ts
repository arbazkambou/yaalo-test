import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactUsFormInputs,
  ContactUsFormValidations,
  getContactUsFormSchema,
} from "@workspace/core/lib/zod/ContactUsFormSchema";
import { useForm } from "react-hook-form";

export function useContactUsFormSchema(validations?: ContactUsFormValidations) {
  const form = useForm<ContactUsFormInputs>({
    resolver: zodResolver(getContactUsFormSchema(validations)),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      description: "",
    },
  });
  return form;
}
