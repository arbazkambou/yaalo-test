// @ts-nocheck
import { getTranslations } from "next-intl/server";
import Accordions from "../accordion/Accordions";
import { FAQNamespace } from "@/types/keys";

type PropsType = {
  namespace: FAQNamespace;
  values?: Record<string, string>;
};

async function FAQSection({ namespace, values }: PropsType) {
  const t = await getTranslations(namespace);

  const faqs = (t as any).raw("faqs") as Record<
    string,
    { title: string; body: string }
  >;
  const accordions = Object.values(faqs).map((faq) => ({
    title: t.rich(
      `faqs.${Object.keys(faqs).find((k) => faqs[k] === faq)}.title`,
      values
    ),
    body: t.rich(
      `faqs.${Object.keys(faqs).find((k) => faqs[k] === faq)}.body`,
      values
    ),
  }));
  return (
    <section className="container mt-16  bg-background">
      <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
        <div className="w-full lg:mb-8">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-center mx-auto font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
              {t("title")}
            </h2>
          </div>

          <p className="mt-1 text-body-sm text-center text-muted-foreground md:text-body-md ">
            {t("description")}
          </p>
        </div>
      </div>
      <Accordions accordions={accordions} />
    </section>
  );
}

export default FAQSection;
