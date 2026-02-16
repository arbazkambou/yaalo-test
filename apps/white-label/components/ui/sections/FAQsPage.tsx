import React from "react";
import FAQSection from "./FAQsSection";
import Accordions from "../accordion/Accordions";
import { FAQNamespace } from "@/types/keys";
import { getTranslations } from "next-intl/server";

type PropsType = {
  namespace: FAQNamespace;
};

export default async function FAQsPage({namespace}: PropsType) {
  const t = await getTranslations(namespace);

 const sections = t.raw("sections") as Record<
    string,
    {
      heading: string;
      faqs: Record<string, { title: string; body: string }>;
    }
  >;
  return (
    <div className="container mt-10">
      {Object.entries(sections).map(([sectionKey, section]) => (
        <section key={sectionKey} className="mb-16 mt-10 flex flex-col">
          <h2 className="text-center text-h2">
            {section.heading}
          </h2>

          <Accordions
            accordions={Object.entries(section.faqs).map(
              ([faqKey, faq]) => ({
                title: t.rich(
                  `sections.${sectionKey}.faqs.${faqKey}.title` as any
                ),
                body: t.rich(
                  `sections.${sectionKey}.faqs.${faqKey}.body` as any
                ),
              })
            )}
          />
        </section>
      ))}
    </div>
  );
}
