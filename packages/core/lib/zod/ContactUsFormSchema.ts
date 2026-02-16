"use client";

import { z } from "zod";

export type ContactUsFormValidations = {
  name: {
    required: string;
    minLength: string;
    maxLength: string;
  };
  email: {
    required: string;
    invalid: string;
  };
  subject: {
    required: string;
    maxLength: string;
  };
  phone: {
    required: string;
    maxLength: string;
  };
  description: {
    required: string;
    maxLength: string;
  };
};

export function getContactUsFormSchema(validations?: ContactUsFormValidations) {
  return z.object({
    name: z
      .string()
      .min(2, {
        message:
          validations?.name.minLength ??
          "Full Name must be at least 2 characters long",
      })
      .max(50, {
        message:
          validations?.name.maxLength ??
          "Full Name must not exceed 50 characters",
      })
      .nonempty({
        message: validations?.name.required ?? "Full Name is required",
      }),

    email: z
      .string()
      .email({
        message:
          validations?.email.invalid ?? "Please enter a valid email address",
      })
      .nonempty({
        message: validations?.email.required ?? "Email is required",
      }),

    subject: z
      .string()
      .max(200, {
        message:
          validations?.subject.maxLength ??
          "Subject should be under 200 characters",
      })
      .nonempty({
        message:
          validations?.subject.required ??
          "Please provide a subject for your message",
      }),

    phone: z
      .string()
      .max(100, {
        message: validations?.phone.maxLength ?? "Phone number is too long",
      })
      .nonempty({
        message: validations?.phone.required ?? "Phone number is required",
      }),

    description: z
      .string()
      .max(600, {
        message:
          validations?.description.maxLength ??
          "Message should not exceed 600 characters",
      })
      .nonempty({
        message:
          validations?.description.required ?? "Message field cannot be empty",
      }),
  });
}

export type ContactUsFormInputs = z.infer<
  ReturnType<typeof getContactUsFormSchema>
>;
