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
import { useTranslations } from "next-intl";

interface PartnerReview {
  name: string;
  time: string;
  review: string;
  rating: number;
}

interface PropsType {
  reviews?: PartnerReview[];
  subheading?: string;
  showTrustpilot?: boolean;
}

function Reviews({ reviews }: PropsType) {
  const t = useTranslations("HomePage.customerReviews");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const defaultReviews: PartnerReview[] = [
    {
      name: "David Harper",
      time: "Oct 30, 2025",
      review: t("reviews.1"),
      rating: 5,
    },
    {
      name: "Jason Turner",
      time: "18 Jan 2025",
      review: t("reviews.2"),
      rating: 5,
    },
    {
      name: "Sarah Jensen",
      time: "25 May 2024",
      review: t("reviews.3"),
      rating: 5,
    },
    {
      name: "SmartRoam Solutions",
      time: "2 hours ago",
      review: t("reviews.4"),
      rating: 5,
    },
    {
      name: "Emma Collins",
      time: "12 Sep 2025",
      review: t("reviews.5"),
      rating: 4,
    },
  ];

  const reviewsData = reviews || defaultReviews;

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

  useEffect(() => {
    if (!api) {
      return;
    }
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
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
    <section className="relative py-14 mt-16 bg-background">
      <div className="container">
        <div className=" gap-6">
          <h2 className="text-center font-montserrat md:py-6 text-h2-base font-600 text-foreground/80 md:text-4xl">
            {t("title")}
          </h2>
        </div>
      </div>

      <div className="mx-auto w-full max-w-full px-4 md:px-8 m-8">
        <div dir="ltr" className="relative">
          <Carousel
            setApi={setApi}
            className="w-full container"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="gap-5 md:gap-5">
              {reviewsData.map((item, index) => {
                const colorSet = avatarColors[index % avatarColors.length];
                const initials = getInitials(item.name);

                return (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="flex justify-center">
                      <div className="flex flex-col items-start gap-5 rounded-[20px] border border-[#DFDFDF] bg-white p-4 sm:p-6 w-full max-w-[360px] min-h-[260px]">
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
                            <span className="text-sm text-foreground font-semibold">
                              {initials}
                            </span>
                          </div>

                          <div className="flex flex-col gap-1 min-w-0">
                            <h3 className="text-sm font-semibold text-foreground truncate">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {item.time}
                            </p>
                          </div>
                        </div>

                        <div>
                          <StarRating rating={item.rating} />
                        </div>

                        <p className="text-sm font-300 leading-relaxed text-foreground flex-1 break-words">
                          "{item.review}"
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index + 1
                  ? "w-6 bg-[#1F9B6E]"
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
