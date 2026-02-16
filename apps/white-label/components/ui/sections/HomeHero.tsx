import GetSearchPackagesList from "@/components/data-fetching/GetSearchPackagesList";
import SmallSocialsButtons from "@/components/ui/buttons/SmallSocialsButtons";
import { Suspense } from "react";
import SearchPackagesListSkelton from "../skeltons/SearchPackagesListSkelton";
import heroBg from "@/assets/images/heroBackground.png";
import heroBgDark from "@/assets/images/heroBackgroundDark.png";
import Image from "next/image";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

async function HomeHero({ locale }: { locale: Locale }) {
  const t = await getTranslations("HomePage");

  return (
    <section id="home-hero" className="relative pb-[90px] md:pb-[146px]  overflow-hidden">
      <Image
        src={heroBg}
        alt="Hero background light"
        fill
        quality={100}
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={heroBgDark}
        alt="Hero background dark"
        fill
        quality={100}
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <div className="container z-10 relative flex justify-center pt-[56px]">
        <div className="w-full max-w-[850px] text-center">
          <div className="space-y-6 md:space-y-8 mt-20 md:mt-28">
            <div className="px-[17px] bg-[#DEE7ED80] dark:bg-[#444547] dark:border-muted rounded-full border border-border max-w-[336px] mx-auto py-[9px] flex items-center justify-center">
              <p className="font-medium text-xs">
               {t("hero.tagTitle")}
              </p>
            </div>
            <h1 className="mx-auto md:max-w-[600px] text-center text-foreground text-h1">
              {t.rich("hero.title", {
                brand: (chunks) => (
                  <span className="text-primary  font-bold">
                    {chunks}
                  </span>
                ),
                product: (chunks) => (
                  <span className="font-semibold">{chunks} </span>
                ),
              })}
            </h1>

            {/* Search */}
            <div className="flex justify-center pt-2">
              <div className="w-full max-w-[700px] px-2">
                <Suspense fallback={<SearchPackagesListSkelton />}>
                  <GetSearchPackagesList locale={locale} />
                </Suspense>
              </div>
            </div>
            <p className="text-body-base md:text-body-lg xl:text-body-base xl:font-500 px-4  md:max-w-[750px] mx-auto ">
            {t.rich("hero.subtitle")}
            </p>

            <div className="flex flex-col items-center gap-3 pt-4">
              <p className="text-foreground text-lg font-semibold">
                {t("hero.downloadApp")}
              </p>
              <SmallSocialsButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
