import React from "react";
import { Card } from "@workspace/ui/components/card";
import { BriefcaseBusiness, Cpu, Plane, YoutubeIcon } from "lucide-react";
import AffiliateButton from "@/components/pages/AffiliateButton";
import { getTranslations } from "next-intl/server";

async function AffiliateFeatures() {
  const t = await getTranslations("AffiliatePartnerPage.features");
  const cardData = [
    {
      title: t("cards.1.title"),
      description: t("cards.1.description"),
      icon: <Plane className="text-primary" />,
      bgColor: "bg-yellow-100 dark:bg-yellow-500/10",
    },
    {
      title: t("cards.2.title"),
      description: t("cards.2.description"),
      icon: <YoutubeIcon className="text-destructive dark:text-red-800" />,
      bgColor: "bg-red-100 dark:bg-red-500/10",
    },
    {
      title: t("cards.3.title"),
      description: t("cards.3.description"),
      icon: <Cpu className="text-blue-500 dark:text-blue-800" />,
      bgColor: "bg-blue-100 dark:bg-blue-500/10",
    },
    {
      title: t("cards.4.title"),
      description: t("cards.4.description"),
      icon: (
        <BriefcaseBusiness className="text-green-500 dark:text-green-600" />
      ),
      bgColor: "bg-green-100 dark:bg-green-500/10",
    },
  ];
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-5 xl:items-start">
          <h2 className="text-h2 text-center  ">{t("title")}</h2>
          <p className="text-lg text-center font-medium text-foreground/60">
            {t("description")}
          </p>
        </div>
        <div className="grid py-9 grid-cols-1 xl:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="w-full lg:px-20 xl:px-0 px-2">
              <Card className="p-6 rounded-lg shadow-md">
                <div
                  className={`flex flex-col items-center p-4 rounded-md xl:flex-row xl:items-start xl:space-x-4`}
                >
                  <div
                    className={`w-12 h-12 flex items-center ${card.bgColor} justify-center rounded-full text-center mb-4 xl:mb-0`}
                  >
                    {card.icon}
                  </div>

                  <div className="text-center xl:text-left">
                    <h3 className="font-semibold text-lg text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm my-1 md:max-w-[400px] text-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg mb-8 xl:text-[20px] text-foreground/60 px-2 text-center xl:text-start">
          {t("ending")}
        </p>
        <div className="flex items-center justify-center xl:items-start xl:justify-start">
          <AffiliateButton text={t("button")} />
        </div>
      </div>
    </section>
  );
}

export default AffiliateFeatures;
