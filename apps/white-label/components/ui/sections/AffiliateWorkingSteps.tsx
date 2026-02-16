import React from "react";
import { FlowSteps } from "./FlowSteps";
import step1 from "@/assets/images/step01.png";
import step2 from "@/assets/images/step02.png";
import step3 from "@/assets/images/step03.png";
import step4 from "@/assets/images/step04.png";
import { FileIcon, LinkIcon, ShareIcon, TrendingUpIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function AffiliateWorkingSteps() {
  const t = await getTranslations("AffiliatePartnerPage.affiliateWorkingSteps")
  const flowSteps = [
    {
      number: "01",
      title: t("cards.1.title"),
      description:
        t("cards.1.description"),
      icon: <FileIcon className="w-6 h-6 dark:text-background" />,
      backgroundImage: step1,
    },
    {
      number: "02",
      title: t("cards.2.title"),
      description:
        t("cards.2.description"),
      icon: <LinkIcon className="w-6 h-6 dark:text-background" />,
      backgroundImage: step2,
    },
    {
      number: "03",
      title: t("cards.3.title"),
      description:
        t("cards.3.description"),
      icon: <TrendingUpIcon className="w-6 h-6 dark:text-background" />,
      backgroundImage: step3,
    },
    {
      number: "04",
      title: t("cards.4.title"),
      description:
        t("cards.4.description"),
      icon: <ShareIcon className="w-6 h-6 dark:text-background" />,
      backgroundImage: step4,
    },
  ];
  return (
    <section className="container py-16">
      <div className="flex flex-col gap-5 xl:justify-start xl:items-start items-center justify-center">
        <h2 className="text-center text-h2">
          {t("title")}
        </h2>
        <p className="text-center text-lg text-foreground/60">
          {t("description")}
        </p>
      </div>
      <FlowSteps steps={flowSteps} />
    </section>
  );
}

export default AffiliateWorkingSteps;
