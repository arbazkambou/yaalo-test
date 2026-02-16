"use client";

import stepOne from "@/assets/images/step1.png";
import stepOneDark from "@/assets/images/step1Dark.png";
import stepTwo from "@/assets/images/step2.png";
import stepTwoDark from "@/assets/images/step2Dark.png";
import stepThree from "@/assets/images/step3.png";
import stepThreeDark from "@/assets/images/step3Dark.png";
import { Card } from "@workspace/ui/components/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface EsimInstallationProps {
  title?: string;
  description?: string;
}



export default function EsimSteps({ title, description }: EsimInstallationProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeStep, setActiveStep] = useState(0);
  const t = useTranslations("SharedUI.esimSteps");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const steps = [
    {
      id: 1,
      heading: t("steps.step1.heading"),
      description: t("steps.step1.description"),
      image: stepOne,
      imageDark: stepOneDark,
    },
    {
      id: 2,
      heading: t("steps.step2.heading"),
      description: t("steps.step2.description"),
      image: stepTwo,
      imageDark: stepTwoDark,
    },
    {
      id: 3,
      heading: t("steps.step3.heading"),
      description: t("steps.step3.description"),
      image: stepThree,
      imageDark: stepThreeDark,
    },
  ];


  useEffect(() => {
    if (!api) return;

    const update = () => {
      setActiveStep(api.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("settle", update); // sometimes helpful

    return () => {
      api.off("select", update);
      api.off("settle", update);
    };
  }, [api]);



  const handleStepClick = (index: number) => {
    api?.scrollTo(index);
  };



  return (
    <section className="bg-background mt-16">
      <div className="container">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-[1.31rem]">
          <h2 className="text-h2">
            {
              t.rich("title", {
                br: () => <br />,
              })}
          </h2>
          <p className="text-center text-body-sm text-muted-foreground md:text-body-base xl:text-start md:font-500">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>

        {/* Mobile + Tablet */}
        <div className="relative xl:hidden">
          <Carousel
            setApi={setApi}
            dir={isArabic ? "rtl" : "ltr"}
            opts={{ direction: isArabic ? "rtl" : "ltr" }}
            className="relative"
          >
            <CarouselContent>
              {steps.map((step) => (
                <CarouselItem key={step.id} className="basis-full">
                  <div className="px-0 md:px-12">
                    <Card className="mx-[50px] rounded-3xl p-6 shadow-none">
                      <div className="flex flex-col gap-3">
                        <h3 className="flex items-center gap-4 text-xl xl:text-[24px] font-semibold">
                          <span className="text-[35px] text-muted-foreground">
                            {step.id}
                          </span>
                          <span className="text-foreground">{step.heading}</span>
                        </h3>
                        <p className="text-body-md text-muted-foreground">
                          {step.description}
                        </p>
                        <div className="flex justify-center">
                          <Image
                            src={step.image}
                            alt={step.description}
                            className="w-full h-auto block dark:hidden"
                            priority
                          />
                          <Image
                            src={step.imageDark}
                            alt={step.heading}
                            className="w-full h-auto hidden dark:block"
                            priority
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious
                iconType="chevron"
                className={`left-2 h-12 w-12 md:left-3 top-1/2 -translate-y-1/2 dark:text-background bg-primary border-none hover:bg-foreground hover:text-background ${isArabic ? "rotate-180" : ""}`}
              />
              <CarouselNext
                iconType="chevron"
                className={`right-2 h-12 w-12 md:right-3 top-1/2 -translate-y-1/2 dark:text-background bg-primary border-none hover:bg-foreground hover:text-background ${isArabic ? "rotate-180" : ""}`}
              />
            </div>

            <div className="mt-10 flex justify-center gap-4 md:hidden">
              {isArabic ? (
                <>
                  <CarouselNext className="static rotate-180" />
                  <CarouselPrevious className="static rotate-180" />
                </>
              ) : (
                <>
                  <CarouselPrevious
                    iconType="chevron"
                    className="static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background left-auto translate-y-0"
                  />
                  <CarouselNext
                    iconType="chevron"
                    className="static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background translate-y-0"
                  />
                </>
              )}
            </div>



          </Carousel>
        </div>

        {/* Progress Dots (for mobile + tablet) */}
        <div className="mt-6 hidden md:flex xl:hidden justify-center gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`rounded-full transition-all duration-300 ${activeStep === index
                ? "h-3 w-8 bg-primary"
                : "h-3 w-3 bg-foreground/20 hover:bg-foreground/40"
                }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>






        {/* Desktop (static grid) */}
        <div className="hidden xl:grid xl:grid-cols-3 xl:gap-6">
          {steps.map((step) => (
            <Card key={step.id} className="rounded-3xl  p-6 shadow-none  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary/40">
              <div className="flex h-full flex-col gap-3">
                <h3 className="flex text-body-lg font-500 items-center gap-4 text-xl xl:text-body-xl xl:font-600 font-semibold">
                  <span className="text-[35px] text-muted-foreground">
                    {step.id}
                  </span>
                  <span className="text-foreground">{step.heading}</span>
                </h3>
                <p className="text-body-sm md:text-body-base text-muted-foreground font-500">
                  {step.description}
                </p>
                <div className="flex justify-center mt-1">
                  <Image
                    src={step.image}
                    alt={step.heading}
                    className="w-full h-auto dark:hidden"
                    priority
                  />
                  <Image
                    src={step.imageDark}
                    alt={step.heading}
                    className="w-full h-auto hidden dark:block"
                    priority
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

