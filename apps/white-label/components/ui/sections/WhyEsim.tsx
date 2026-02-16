"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { useEffect, useState } from "react";

import { whyeSimCardsData } from "@/constants/UIData";
import AdvantagesCard from "../cards/AdvantagesCard";
import PrimaryButton from "../buttons/PrimaryButton";
import { useLocale, useTranslations } from "next-intl";

function WhyEsim() {
  const t = useTranslations("HomePage.whyEsim");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
    const locale = useLocale();
    const isArabic = locale === "ar";

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section className="container mt-16">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
        <div>
          <h2 className="text-h2 text-center xl:text-start">
            {t("title")}
          </h2>
          <p className="mt-2 text-muted-foreground text-center xl:text-start">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mt-12 relative"
      >
        <Carousel setApi={setApi} opts={{  loop: true, direction: isArabic ? "rtl" : "ltr" }}            
         dir={isArabic ? "rtl" : "ltr"}
>
          <CarouselContent className="gap-6">
            {whyeSimCardsData.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 xl:basis-1/3"
              >
                <AdvantagesCard
                  icon={item.icon}
                  title={t(`cards.${item.key}.title`)}
                  body={t(`cards.${item.key}.body`)}
                  key={index}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop arrows */}
          {isArabic ? <>
          <CarouselNext className="hidden xl:flex absolute -top-16 left-0 right-auto rotate-180" />
          <CarouselPrevious className="hidden xl:flex absolute -top-16 left-10 right-auto! rotate-180" />
          
          </>:
          <>
          <CarouselPrevious
            iconType="chevron"
            className="hidden h-12 w-12 dark:text-background bg-primary border-none hover:bg-foreground hover:text-background xl:flex absolute mr-4 -top-20 right-10 left-auto"
          />
          <CarouselNext
            iconType="chevron"
            className="hidden  h-12 w-12 bg-primary dark:text-background border-none hover:bg-foreground hover:text-background xl:flex absolute -top-20 right-0"
          />
          </>}
          

          {/* Mobile arrows — FLOW LAYOUT */}
          <div className="mt-8 flex justify-center gap-3 xl:hidden">
            <CarouselPrevious
              iconType="chevron"
              className="static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background left-auto translate-y-0"
            />
            <CarouselNext
              iconType="chevron"
              className="static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background translate-y-0"
            />
          </div>
        </Carousel>
      </div>

      {/* CTA */}
      <div className="w-fit mt-12 mx-auto xl:mx-0">
        <PrimaryButton
          href="/destinations/"
          variant="link"
          className=""
        >
          {t("showPlansBtn")}
        </PrimaryButton></div>

    </section>
  );
}

export default WhyEsim;
