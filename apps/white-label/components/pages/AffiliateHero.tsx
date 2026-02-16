import React from "react";
import affiliateBg from "@/assets/images/affiliateBg.png";
import affiliateBgDark from "@/assets/images/affiliateDark.png";
import { Trophy } from "lucide-react";
import Image from "next/image";
import AffiliateButton from "./AffiliateButton";
import { getTranslations } from "next-intl/server";

async function AffiliateHero() {
  const t = await getTranslations("AffiliatePartnerPage.hero");
  return (
    <section className="pb-16 md:pb-20 relative overflow-hidden">
      <Image
        src={affiliateBg}
        alt="Hero background light"
        fill
        priority
        quality={100}
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={affiliateBgDark}
        alt="Hero background dark"
        fill
        priority
        quality={100}
        className="object-cover object-center hidden dark:flex"
      />
      <div className="flex relative z-10 flex-col pt-40 items-center gap-5 justify-center">
        <h1 className="text-h1 text-center px-4  md:max-w-[604px] xl:max-w-[779px]">
          {t("title")}
        </h1>
        <div className="flex px-4 justify-center items-center gap-2 ">
          <Trophy />
          <p className="text-xs text-center font-medium md:text-lg ">
            {t("trophy")}
          </p>
        </div>
        <p className="text-center px-4 leading-[25px] text-base md:max-w-[604px] lg:max-w-[843px]">
          {t("description")}
        </p>
        <AffiliateButton text={t("button")} />
      </div>
    </section>
  );
}

export default AffiliateHero;
