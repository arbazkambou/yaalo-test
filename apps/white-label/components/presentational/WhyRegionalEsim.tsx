"use client";

import { RegionalAdvantageCard } from "@/types/keys";
import { Gift, Scale, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

function WhyRegionalEsim() {
  const t = useTranslations("RegionalPage.whyChooseCardsData");
  const whyChooseCardsData : RegionalAdvantageCard[]  = [
    {
      icon: <Scale className="h-10 w-10" />,
      key:"1",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
     key:"2",
    },
    {
      icon: <Gift className="h-10 w-10" />,
      key:"3",
    },
  ];
  return (
    <section className="mt-16 rounded-none bg-secondary px-4 py-8 sm:p-12">
      <div className="container flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-h2">
            {t("title")}
           {" "}
          </h2>
          <p className="opacity-80">
            {t("description")}
          </p>
          <p className="font-700 opacity-80">{t("description2")}</p>
        </div>

        <div className="mt-[3.25rem] grid place-content-center gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-24">
          {whyChooseCardsData.map((item, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <span>{item.icon}</span>
              <h3 className="text-lg font-600">{t(`cards.${item.key}.title`)}</h3>
              <p className="text-lg opacity-80">{t(`cards.${item.key}.body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRegionalEsim;
