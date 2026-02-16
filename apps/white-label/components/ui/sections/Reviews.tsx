"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { cn } from "@workspace/ui/lib/utils";
import { useEffect, useState } from "react";
import checkVerified from "@/assets/svgs/checkVerified.svg";
import SocialsButtons from "../buttons/SocialsButtons";
import Image from "next/image";
import greenStar from "@/assets/svgs/greenStar.svg";
import { useLocale, useTranslations } from "next-intl";
import { HomeReviewKey, PageName, reviewsNamespaceMap } from "@/types/keys";

export interface PartnerReview {
  name: string;
  date?: string;
  reviewKey: HomeReviewKey;
  rating: number;
  username?: string;
  store?: any;
  imgSrc?: any;
  title?: string;
}

interface PropsType {
  reviews: PartnerReview[];
  showTrustpilot?: boolean;
  pageName: PageName;
}

function Reviews({
  reviews,
  showTrustpilot = true,
  pageName
}: PropsType) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations(reviewsNamespaceMap[pageName]);
    const locale = useLocale();
    const isArabic = locale === "ar";

  const reviewsData = reviews || [];
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));

    const startAutoScroll = () => {
      return setInterval(() => {
        if (!isHovered) {
          api.scrollNext();
        }
      }, 2000);
    };

    const interval = startAutoScroll();

    return () => clearInterval(interval);
  }, [api, isHovered]);

  const avatarColors = [
    { bg: "#DAFFE0", text: "#FFFFFF" },
    { bg: "#FFF7C4", text: "#FFFFFF" },
    { bg: "#FFE1BA", text: "#FFFFFF" },
    { bg: "#78909C", text: "#FFFFFF" },
    { bg: "#B8E986", text: "#FFFFFF" },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const StarRating = ({ rating }: { rating: number }) => {
    const getStarBoxColor = (starIndex: number, rating: number) => {
      if (rating === 5) {
        return "#219653";
      } else if (rating === 4) {
        if (starIndex < 4) {
          return "#73CF11";
        } else {
          return "#D9D9D9";
        }
      } else if (rating === 3) {
        if (starIndex < 3) {
          return "#F2C94C";
        } else {
          return "#D9D9D9";
        }
      } else if (rating === 1) {
        if (starIndex < 1) {
          return "#EB5757";
        } else {
          return "#D9D9D9";
        }
      }
      return "#D9D9D9";
    };

    return (
      <div className="flex items-start gap-[2.25px]">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex h-[14px] w-[14px] items-center justify-center"
            style={{ backgroundColor: getStarBoxColor(index, rating) }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.21875 6.97308L5.92969 6.51494L6.64453 8.84277L4.21875 6.97308ZM8.15625 3.96424H5.14453L4.21875 0.967773L3.29297 3.96424H0.28125L2.71875 5.82155L1.79297 8.81801L4.23047 6.9607L5.73047 5.82155L8.15625 3.96424Z"
                fill="white"
              />
            </svg>
          </div>
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="relative py-14 mt-16 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <h2 className="text-h2">{t("title")}</h2>
          <div className="flex justify-center md:justify-end">
            {" "}
            <SocialsButtons />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-4">
        {/* <p className="flex items-center mx-auto justify-center gap-4 text-xs text-dark">
          <span className="font-700">Excellent</span>
          <span>
            <span className="font-700">4.8</span> out of 5
          </span>
          <span className="flex items-center gap-1 font-700 shrink-0">
            <Image
              src={greenStar}
              alt="Trustpilot Rating"
              height={14}
              width={13}
              sizes="auto"
              className="shrink-0 object-cover"
            />
            Trustpilot
          </span>
        </p> */}
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mx-auto w-full max-w-full px-4 md:px-8 mt-8"
      >
        <Carousel
          setApi={setApi}
          className="w-full container"
          opts={{
            align: "start",
            loop: true,
            direction: isArabic ? "rtl" : "ltr"
          }}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <CarouselContent className=" gap-5 md:gap-5">
            {reviewsData.length === 0 ? (
              <div className="py-12 text-center text-sm text-muted-foreground">
                {t("noReviews")}
              </div>
            ) : (
              reviewsData.map((item, index) => {
                const colorSet = avatarColors[index % avatarColors.length];
                const initials = getInitials(item.name);

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full  md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="flex flex-col items-start justify-between gap-5 bg-background rounded-[20px] border border-border p-6 h-full">
                      <div className="flex items-start gap-3 w-full">
                        <div
                          className="flex items-center justify-center rounded-full flex-shrink-0"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: colorSet?.bg,
                            color: colorSet?.text,
                          }}
                        >
                          <span className="text-sm text-foreground font-semibold dark:text-primary-foreground">
                            {initials}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-semibold text-foreground">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>

                      <div>
                        <StarRating rating={item.rating} />
                      </div>
                      <p className="text-body-xs font-300 leading-relaxed text-foreground flex-1">
                        "{t(item.reviewKey)}"
                      </p>
                    </div>
                  </CarouselItem>
                );
              })
            )}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index + 1
                  ? "w-6 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
