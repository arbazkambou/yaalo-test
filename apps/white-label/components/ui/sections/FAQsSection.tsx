import { FAQNamespace } from "@/types/keys";
import Accordions from "../accordion/Accordions";
import { getTranslations } from "next-intl/server";

type PropsType = {
  namespace: FAQNamespace;
  values?: Record<string, (chunks:React.ReactNode)=>React.ReactNode>;
};

async function FAQSection({ namespace, values }: PropsType) {
  const t = await getTranslations(namespace);
  
    const faqs = (t as any).raw("faqs") as Record<
      string,
      { title: string; body: string }
    >;
    const accordions = Object.entries(faqs).map(([key, faq]) => ({
      title: t.rich(`faqs.${key}.title` as any, values as any),
      body: t.rich(`faqs.${key}.body` as any, values as any),
    }));
  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
        <div className="w-full">
          <div className=" items-center justify-between w-full">
            <h2 className="text-center text-h2">
             {t("title")}
            </h2>
          </div>

          <p className="mt-[1.2rem] text-center text-body-sm text-muted-foreground md:text-body-md ">
            {t("description")}
          </p>
        </div>
      </div>

        <Accordions accordions={accordions} />
    </section>
  );
}

export default FAQSection;
