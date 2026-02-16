"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl";

interface CarouselItemData {
  id: string | number;
  title: string;
  description: string;
  image: StaticImageData;
  icon?: React.ReactNode;
}

interface ImageCarouselProps {
  items: CarouselItemData[];
  title?: string;
  subtitle?: string;
}

function ImageCarouselCard({ item }: { item: CarouselItemData }) {
  return (
    <div className="relative w-[370px] h-[400px] rounded-lg overflow-hidden transition-all duration-500 ease-out hover:w-[580px] flex-shrink-0 group cursor-pointer">
      <Image
        src={item.image}
        alt="GIF Image"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        {item.icon && <div className="mb-4">{item.icon}</div>}

        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-sm text-muted/60 dark:text-foreground line-clamp-3 transition-opacity duration-500 delay-100">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ImageCarousel({
  items,
  title,
  subtitle,
}: ImageCarouselProps) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section className="py-16">
      {title && (
        <div className="flex container flex-col gap-4 items-center xl:items-start justify-center mb-12">
          <h2 className="text-center max-w-4xl xl:max-w-full text-h2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-center xl:text-start text-foreground/60 max-w-[710px]">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="mt-12 relative">
        <Carousel
          opts={{
            align: "start",
            direction: isArabic ? "rtl" : "ltr",
            loop: true,
          }}
          className="container"
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id} className="basis-auto">
                <ImageCarouselCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop arrows */}
          <div
            className={`hidden absolute -top-32 xl:flex xl:gap-4 ${isArabic ? "left-10 right-auto rotate-180" : "right-10 left-auto"}`}
          >
            <CarouselPrevious
              iconType="chevron"
              className={`static h-12 w-12 dark:text-background bg-primary border-none hover:bg-foreground hover:text-background ${isArabic ? "rotate-180" : ""}`}
            />
            <CarouselNext
              iconType="chevron"
              className={`static h-12 w-12 bg-primary dark:text-background border-none hover:bg-foreground hover:text-background ${isArabic ? "rotate-180" : ""}`}
            />
          </div>

          {/* Mobile arrows */}
          <div
            className={`mt-8 flex justify-center gap-3 xl:hidden ${isArabic ? "rotate-180" : ""}`}
          >
            <CarouselPrevious
              iconType="chevron"
              className={`static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background left-auto translate-y-0 ${isArabic ? "rotate-180" : ""}`}
            />
            <CarouselNext
              iconType="chevron"
              className={`static dark:text-background h-12 w-12 bg-primary border-none hover:bg-foreground hover:text-background translate-y-0 ${isArabic ? "rotate-180" : ""}`}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
