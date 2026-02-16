import React from "react";
import sp1 from "@/assets/images/sp1.png";
import sp2 from "@/assets/images/sp2.png";
import sp3 from "@/assets/images/sp3.png";
import sp4 from "@/assets/images/sp4.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";



async function AffiliateSpecialFeatures() {
  const t=await getTranslations("AffiliatePartnerPage.speacialFeatures")
  const specialCard = [
    {
      text: t("cards.text1"),
      image: sp1,
    },
    {
      text: t("cards.text2"),
      image: sp2,
    },
    {
      text: t("cards.text3"),
      image: sp3,
    },
    {
      text: t("cards.text4"),
      image: sp4,
    },
  ];
  return (
    <section className="bg-muted py-16 mb-14 md:mb-20">
      <div className="container flex flex-col gap-5">
        <div className="flex flex-col xl:flex-row gap-5">
          <h2 className="text-h2 text-center xl:text-start">
            {t("title")}{" "}
          </h2>
          <div className="bg-accent text-lg mx-auto xl:mx-0 text-foreground font-medium py-1.5 px-8 flex items-center rounded-4xl">
            <p>{t("recommend")}</p>
          </div>
        </div>
        <p className="xl:max-w-[1024px] text-center xl:text-start px-2 md:px-10 xl:px-0 text-foreground/60 text-base font-medium md:text-lg">
          {t("description")}
        </p>

        <div className="px-2 py-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            {specialCard.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group ${index % 2 === 0 ? "xl:col-span-2" : "xl:col-span-1"}`}
              >
                <div className="relative w-full h-[381px]">
                  <Image
                    src={item.image}
                    alt="Special Item"
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-t-2xl shadow-xl transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50"
                  />
                </div>
                <div className="absolute ml-4 bottom-0 bg-card-dark dark:text-foreground font-medium text-background text-start px-4 py-1 rounded-[50px] mb-4">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
            {specialCard.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group ${index === 1 ? "xl:col-span-2" : "xl:col-span-1"}`}
              >
                <div className="relative w-full h-[381px]">
                  <Image
                    src={item.image}
                    alt="Special Item"
                    layout="fill"
                    quality={100}
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-t-2xl shadow-xl transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/50"
                  />
                </div>
                <div className="absolute ml-4 bottom-0 bg-card-dark dark:text-foreground font-medium text-background text-start px-4 py-1 rounded-[50px] mb-4">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="xl:max-w-[1024px] text-center xl:text-start px-2 md:px-10 xl:px-0 text-foreground/60 text-base font-medium md:text-lg">
          {t("ending")}
        </p>
      </div>
    </section>
  );
}

export default AffiliateSpecialFeatures;
