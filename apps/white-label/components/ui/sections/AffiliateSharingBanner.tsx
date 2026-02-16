import Image from "next/image";
import sharingbanner from "@/assets/images/sharingbanner.png";
import AffiliateButton from "@/components/pages/AffiliateButton";
import { getTranslations } from "next-intl/server";

async function AffiliateSharingBanner() {
  const t = await getTranslations("AffiliatePartnerPage.sharingBanner");
  return (
    <section className="mt-16 container sm:rounded-[48px] h-[844px] sm:h-[930px] xl:h-[517px] w-full md:w-[606px] xl:w-full flex flex-col xl:grid xl:grid-cols-2 gap-10 sm:gap-16 xl:gap-[49px] justify-center items-center text-center xl:text-start bg-accent py-[31px] sm:py-11 xl:py-[60px] px-[35px] sm:px-2 xl:px-[73px]">
      {/* text area */}
      <div className="flex flex-col gap-5 sm:gap-[25px] sm:w-full xl:w-full">
        {/* only text */}
        <div className="flex flex-col justify-center items-center gap-[31px]">
          <h2 className="text-h2 text-center xl:text-start">{t("title")}</h2>
          <p className="text-body-base font-normal leading-[1.6] tracking-normal text-center xl:text-start sm:text-body-md">
            {t("body1")}
            <br />
            <br />
            {t("body2")}
          </p>
        </div>
        {/* button and text */}
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center xl:justify-start">
          <AffiliateButton
            className="flex justify-center border-border dark:text-foreground bg-accent items-center w-[155px] h-12 rounded-3xl text-body-md font-medium"
            text={t("button")}
          />
          <p className="text-body-md font-medium leading-[1.6] tracking-normal">
            {t("ending")}
          </p>
        </div>
      </div>
      {/* image area */}
      <div className="h-[251px] sm:h-[358px] xl:h-[358px] w-[370px] sm:w-[527px] xl:w-[527px] rounded-3xl relative overflow-hidden xl:justify-self-end">
        <Image
          src={sharingbanner}
          alt="Business professionals shaking hands symbolizing partnership"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default AffiliateSharingBanner;
