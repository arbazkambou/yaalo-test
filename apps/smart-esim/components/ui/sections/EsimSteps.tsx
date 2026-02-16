"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@workspace/ui/components/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import stepOne from "@/assets/images/stepOne.png";
import stepTwo from "@/assets/images/stepTwo.png";
import stepThree from "@/assets/images/stepThree.png";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@workspace/ui/lib/utils";

interface EsimInstallationProps {
  countryName?: string;
}

export const defaultHeadings = [
  "Pick a Plan",
  "Scan & Install",
  "Connect and Travel",
];

export const defaultDescriptions = [
  "Choose your destination and select a data pack that fits your trip length and usage.",
  "Your QR code arrives instantly. One scan and your eSIM profile loads into your phone.",
  "Enjoy stable, high-speed mobile data for navigation, rides, check-ins, work calls, and streaming.",
];

const stepsImages = [stepOne, stepTwo, stepThree];

export default function EsimSteps({ countryName }: EsimInstallationProps) {
  const [activeStep, setActiveStep] = useState(0);

  const t = useTranslations("SharedUI.esimSteps");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const title = countryName
    ? t("titleWithCountry", { country: countryName })
    : t("title");

  const description = t("description");

  const steps = [
    {
      id: 1,
      image: stepOne,
      heading: t("steps.step1.heading"),
      description: t("steps.step1.description"),
    },
    {
      id: 2,
      image: stepTwo,
      heading: t("steps.step2.heading"),
      description: t("steps.step2.description"),
    },
    {
      id: 3,
      image: stepThree,
      heading: t("steps.step3.heading"),
      description: t("steps.step3.description"),
    },
  ];

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleProgressBarClick = (index: number) => {
    setActiveStep(index);
  };

  const currentStep = steps[activeStep];

  return (
    <section className="bg-primary/10">
      <div className="container mt-14 w-full px-4 py-8 md:py-16 lg:py-20">
        {/* Title & Description */}
        <div className="flex flex-col gap-[1.31rem] mb-8">
          <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md lg:text-start">
            {title ?? "How to Activate your Smart eSIM in Under One Minute?"}
          </h2>
          <p className="text-center text-body-sm md:text-body-md md:max-w-[650px] md:text-start lg:max-w-[900px] text-muted-foreground lg:text-start">
            {description ?? (
              <>
                A simple 3-step setup that gets you to activate your data-only
                eSIM before takeoff or at the airport before your luggage
                arrives.
              </>
            )}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-4 lg:gap-8 max-w-[1200px]">
          {/* Text Card Section */}
          <div className="order-2 flex w-full flex-col lg:col-span-3">
            <Card className="flex h-full flex-col justify-between rounded-[20px] bg-background p-8 shadow-lg">
              <div className="mb-6 flex gap-2">
                {steps.map((_, index) => {
                  const isDone = activeStep > index;
                  const isActive = activeStep === index;

                  return (
                    <button
                      key={index}
                      onClick={() => handleProgressBarClick(index)}
                      className="group relative h-1 flex-1 rounded-full bg-foreground/20 overflow-hidden cursor-pointer hover:opacity-90"
                      aria-label={`Go to step ${index + 1}`}
                    >
                      {/* Fill */}
                      <span
                        className={cn(
                          "absolute inset-y-0 start-0 rounded-full bg-primary transition-[width] duration-500 ease-out",
                          isDone || isActive ? "w-full" : "w-0",
                          isActive && "loader-shimmer"
                        )}
                      />
                    </button>
                  );
                })}
              </div>

              <div>
                {/* Step Number */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div
                      className={cn(
                        "flex h-15 w-15 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-700 ease-out",
                        "bg-muted text-foreground/50 font-poppins font-medium text-3xl shadow-lg"
                      )}
                    >
                      0{currentStep?.id}
                    </div>
                  </div>
                </div>
                <div>
                  <h3
                    key={`heading-${activeStep}`}
                    className="mb-3 mt-14 font-poppins text-2xl md:text-3xl font-medium text-foreground animate-stepIn"
                  >
                    {currentStep?.heading}
                  </h3>

                  {/* Description + Buttons Row */}
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <p
                      key={`desc-${activeStep}`}
                      className="text-base md:max-w-[510px] text-muted-foreground animate-stepIn delay-[60ms]"
                    >
                      {currentStep?.description}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePrevStep}
                        disabled={activeStep === 0}
                        aria-label="Previous Step"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-grey bg-muted shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/20"
                      >
                        <ChevronLeft
                          className={`h-6 w-6 text-foreground ${isArabic ? "rotate-180" : ""}`}
                        />
                      </button>

                      <button
                        onClick={handleNextStep}
                        disabled={activeStep === steps.length - 1}
                        aria-label="Next Step"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-grey bg-muted shadow-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground/20"
                      >
                        <ChevronRight
                          className={`h-6 w-6 text-foreground ${isArabic ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Image Card Section */}
          <div className="order-1 flex flex-col items-center justify-center lg:order-2 2xl:min-w-[400px]">
            <div className="flex h-full w-full items-center justify-center rounded-[20px] bg-background p-8 pb-0 shadow-lg">
              <div className="relative h-[275px] w-full max-w-[260px] overflow-hidden sm:max-w-sm">
                <div key={`img-${activeStep}`} className="animate-stepIn">
                  <Image
                    src={currentStep?.image || "/placeholder.svg"}
                    alt="step images"
                    width={271}
                    height={550}
                    className="h-[400px] w-full object-contain object-top"
                    priority={activeStep === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
