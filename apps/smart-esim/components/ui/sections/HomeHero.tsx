import heroImg from "@/assets/images/hero-img.png";
import GetSearchPackagesList from "@/components/data-fetching/GetSearchPackagesList";
import SmallSocialsButtons from "@/components/ui/buttons/SmallSocialsButtons";
import Image from "next/image";
import { Suspense } from "react";
import SearchPackagesListSkelton from "../skeltons/SearchPackagesListSkelton";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import { AppLinkSettings } from "@workspace/core/types/services/support/support.types";

type PropType = {
  locale: Locale;
  appLink: AppLinkSettings;
};

async function HomeHero({ locale, appLink }: PropType) {
  const t = await getTranslations("HomePage");
  return (
    <section className=" my-10">
      <div className=" grid xl:grid-cols-[1fr_auto] container items-center gap-5">
        <div className="space-y-5 sm:space-y-[30px] md:space-y-8 text-center xl:text-left">
          <div className="flex flex-col gap-[30px] items-center xl:items-start">
            <h1 className="text-foreground  leading-tight text-[30px] font-600 sm:font-700 sm:text-[46px] xl:max-w-[790px] xl:text-h1-xl xl:text-start">
              {t.rich("hero.title", {
                highlight: (text) => <span>{text}</span>,
              })}
            </h1>

            <p className="text-base sm:text-xl max-w-[356px] text-foreground md:max-w-[500px] xl:max-w-[600px]">
              {t.rich("hero.subtitle", {
                strong: (text) => <span>{text}</span>,
              })}
            </p>
          </div>

          <div className="relative top-2 flex flex-col items-center xl:items-start">
            <div className="flex flex-col gap-4 xl:flex-row xl:-ml-3 xl:items-center w-full max-w-[370px] md:max-w-[600px] mx-auto xl:mx-0">
              <Suspense fallback={<SearchPackagesListSkelton />}>
                <GetSearchPackagesList locale={locale} />
              </Suspense>
            </div>

            <div className="mt-5 flex sm:flex-col gap-3 items-center xl:items-start">
              {t("hero.downloadApp")}
              <SmallSocialsButtons appLink={appLink} />
            </div>
          </div>
        </div>

        <div className=" justify-center xl:justify-end hidden sm:flex ">
          <div className="relative h-[483px] min-w-[499px] max-w-[500px]">
            <Image src={heroImg} alt={t("hero.imageAlt")} fill quality={70} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
