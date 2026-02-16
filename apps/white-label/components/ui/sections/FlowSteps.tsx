"use client";

import { Card } from "@workspace/ui/components/card";
import React from "react";
import rightSvg from "@/assets/svgs/rightSvg.svg";
import leftSvg from "@/assets/svgs/leftSvg.svg";
import Image, { StaticImageData } from "next/image";
import AffiliateButton from "@/components/pages/AffiliateButton";
import { useLocale, useTranslations } from "next-intl";

interface FlowStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: StaticImageData;
}

interface FlowStepsProps {
  steps: FlowStep[];
}

export function FlowSteps({ steps }: FlowStepsProps) {
    const t = useTranslations("AffiliatePartnerPage.hero");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="w-full mt-10">
      <div className="flex relative justify-center xl:justify-start items-center gap-4">
        {steps[0] && <StepCard step={steps[0]} />}
        <Image
          src={rightSvg}
          alt="svg"
          className={`absolute  2xl:right-120 mt-30 xl:block hidden ${isArabic ? "rotate-y-180 xl:right-120" : "xl:right-70"}`}
        />
      </div>
      <div
        className={`flex relative justify-center mt-10 xl:justify-end xl:mr-10 2xl:mr-60 items-center gap-4 ${isArabic ? "2xl:ml-[265px]" : ""}`}
      >
        {steps[1] && (
          <Image
            src={leftSvg}
            alt="svg"
            className={`absolute mt-40 hidden xl:block ${isArabic ? "rotate-y-180 2xl:left-[500px] xl:left-120" : "2xl:left-90 xl:left-80"}`}
          />
        )}
        {steps[1] && <StepCard step={steps[1]} />}
      </div>
      <div
        className={`flex relative justify-center xl:justify-normal mt-10 xl:mt-20 items-center gap-4 ${isArabic ? "xl:mr-20 2xl:mr-40 xl:ml-55 " : "xl:ml-30"}`}
      >
        {steps[2] && <StepCard step={steps[2]} />}
        <Image
          src={rightSvg}
          alt="svg"
          className={`absolute mt-40 xl:block hidden ${isArabic ? "rotate-y-180 xl:left-0 2xl:left-30" : "left-120"}`}
        />
      </div>
      <div
        className={`flex relative xl:right-0 justify-center xl:justify-end mt-10 items-center gap-4 ${isArabic ? "2xl:right-0" : "2xl:right-30 "}`}
      >
        {steps[3] && <StepCard step={steps[3]} />}
      </div>
      <div className="flex justify-center mt-16 items-center">
        <AffiliateButton text={t("button")} />
      </div>
    </div>
  );
}

function StepCard({ step }: { step: FlowStep }) {
  return (
    <Card
      className="w-full bg-accent rounded-3xl max-w-[370px] md:max-w-[470px] bg-cover"
      style={{
        backgroundImage: `url(${step.backgroundImage.src})`,
      }}
    >
      <div className="flex px-5">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-3">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent dark:bg-primary/50 flex items-center justify-center">
              {step.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground pt-1">
              {step.title}
            </h3>
          </div>

          <p className="text-sm md:text-base ml-6 max-w-[330px] text-foreground">
            {step.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
