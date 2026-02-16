"use client";
import { cardsData } from "@/constants/UIData";
import PrimaryButton from "../buttons/PrimaryButton";
import AdvantagesCard from "../cards/AdvantagesCard";
import { useTranslations } from "next-intl";

function WhyEsim() {
  const t = useTranslations("HomePage.whyEsim");
  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-[1.31rem] xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start ">
            {t("title")}
          </h2>
          <p className="mt-[1.31rem] text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
            {t("description")}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton
            href="/esim/"
            variant="link"
            className="cursor-pointer rounded-full text-background bg-primary hover:scale-105 transition-all"
          >
            {t("showPlansBtn")}
          </PrimaryButton>
        </div>
      </div>
      <div className="mt-[3.69rem] grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {cardsData.map((item, index) => (
          <AdvantagesCard
            icon={item.icon}
            title={t(`cards.${item.key}.title`)}
            body={t(`cards.${item.key}.body`)}
            key={index}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyEsim;
