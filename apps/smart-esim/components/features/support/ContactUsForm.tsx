"use client";

import SpinnerMini from "@/components/shared/SpinnerMini";
import GoogleRecaptcha from "@workspace/core/components/GoogleRecaptcha";
import { useContactUs } from "@workspace/core/hooks/forms/useContactUs";
import { useContactUsFormSchema } from "@workspace/core/hooks/schemas/useContactUsFormSchema";
import { ContactUsFormInputs } from "@workspace/core/lib/zod/ContactUsFormSchema";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { toast } from "@workspace/ui/components/sonner";
import { Textarea } from "@workspace/ui/components/textarea";
import { useTranslations } from "next-intl";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

function ContactUsForm() {
  const t = useTranslations("ContactUsPage.contactForm");

  const form = useContactUsFormSchema({
    name: {
      maxLength: t("validationMessages.name.maxLength"),
      minLength: t("validationMessages.name.minLength"),
      required: t("validationMessages.name.required"),
    },
    email: {
      invalid: t("validationMessages.email.invalid"),
      required: t("validationMessages.email.required"),
    },
    description: {
      maxLength: t("validationMessages.description.maxLength"),
      required: t("validationMessages.description.required"),
    },
    phone: {
      maxLength: t("validationMessages.phone.maxLength"),
      required: t("validationMessages.phone.required"),
    },
    subject: {
      maxLength: t("validationMessages.subject.maxLength"),
      required: t("validationMessages.subject.required"),
    },
  });

  const {
    isPostingData,
    isCaptchaVerified,
    handleRecaptchaChange,
    recaptchaToken,
    postContactUsDataApi,
  } = useContactUs();

  function onSubmit(values: ContactUsFormInputs) {
    if (!recaptchaToken) {
      toast.error(t("validationMessages.recaptchaError"));
      return;
    }

    postContactUsDataApi(
      { ...values, "g-recaptcha-response": recaptchaToken },
      {
        onSuccess: () => {
          form.reset();
        },
      }
    );
  }

  return (
    <>
      <p className="text-center text-2xl md:font-bold md:text-4xl font-semibold text-foreground">
        {t("title")}
      </p>
      <p className="text-center text-sm md:text-lg text-muted-foreground">
        {t("description")}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:grid gap-4 md:grid-cols-2 xl:gap-8 max-w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input {...field} placeholder={t("nameLabel")} />
                    </FormControl>
                    {/* <FormLabel>Full Name</FormLabel> */}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("emailLabel")}
                        disabled={isPostingData}
                      />
                    </FormControl>
                    {/* <FormLabel>Email</FormLabel> */}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("subjectLabel")}
                        disabled={isPostingData}
                      />
                    </FormControl>
                    {/* <FormLabel>Subject</FormLabel> */}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("phoneLabel")}
                        disabled={isPostingData}
                      />
                    </FormControl>
                    {/* <FormLabel>Phone Number</FormLabel> */}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <div className="relative mt-2">
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t("messageLabel")}
                        rows={6}
                        disabled={isPostingData}
                      />
                    </FormControl>
                    {/* <FormLabel className="text-sm font-400">Message</FormLabel> */}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* reCAPTCHA */}
          <div className="mt-4">
            <GoogleRecaptcha
              siteKey={RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              className="mt-4"
            />
          </div>

          <Button
            type="submit"
            className="mt-4 w-full"
            disabled={!isCaptchaVerified || isPostingData}
          >
            {isPostingData ? <SpinnerMini /> : t("submitButton")}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default ContactUsForm;
