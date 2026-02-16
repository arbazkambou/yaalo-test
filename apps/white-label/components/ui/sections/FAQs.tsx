import { getTranslations } from "next-intl/server";
import Accordions from "../accordion/Accordions";
import PrimaryButton from "../buttons/PrimaryButton";
import { FAQNamespace } from "@/types/keys";

export interface Accordion {
  title: string;
  body: string | React.ReactNode;
}
async function FAQs({
  heading,
  namespace,
  values


}: {
  heading?: string;
  namespace: FAQNamespace;
  values?: Record<string, string>;
}) {
  const t = await getTranslations(namespace);

  const faqs = (t as any).raw("faqs") as Record<
    string,
    { title: string; body: string }
  >;
  const accordions: Accordion[] = Object.entries(faqs).map(([key, faq]) => ({
    title: faq.title.replace("{countryName}", values?.country ?? ""),
    body: faq.body.replace("{countryName}", values?.country ?? ""),
  }));



  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-h2">
          {t.rich("title", {
            countryName: values?.country ?? "",
          })}

        </h2>
        <p className="mt-[1.2rem] text-center text-body-sm text-muted-foreground md:text-body-md">
          {t("description")}
        </p>
      </div>

      <Accordions accordions={accordions} />
    </section>
  );
}

export default FAQs;
