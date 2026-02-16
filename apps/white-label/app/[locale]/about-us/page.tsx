import aeroplane from "@/assets/images/aeroplane.png";
import aeroplaneMob from "@/assets/images/aeroplaneMob.png";
import alexandar from "@/assets/images/alexandar.png";
import americaMen from "@/assets/images/americanMen.png";
import authImage from "@/assets/images/authHero.png";
import dubai from "@/assets/images/dubai.png";
import { default as worldLocations } from "@/assets/images/worldLocations.png";
import android from "@/assets/svgs/android.svg";
import globe from "@/assets/svgs/globe.svg";
import ios from "@/assets/svgs/ios.svg";
import iosDark from "@/assets/svgs/iosDark.svg";
import AdvantagesCard from "@/components/ui/cards/AdvantagesCard";
import PageTextCard from "@/components/ui/cards/PageTextCard";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { aboutUsFeatures, AboutUsSchemaMarkup } from "@/constants/UIData";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("AboutUsPage.metaData");
  return generateDynamicSeo({
    meta_title: t("title"),
    meta_description: t("description"),
    meta_keywords: t("keywords"),
    locale,
    url: `${baseUrl}${homePath}`,
  });
}

type pageprops = {
  params: Promise<{ locale: Locale }>;
};

async function Page({ params }: pageprops) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("AboutUsPage");
  const images = [
    {
      imgSrc: americaMen,
      text: t("imageSection.newyork"),
    },
    {
      imgSrc: alexandar,
      text: t("imageSection.brazil"),
    },
    {
      imgSrc: dubai,
      text: t("imageSection.dubai"),
    },
  ];

  const eSimLaunchedCards = [
    {
      imgSrc: android,
      date: "2021",
      text: t("timelineSection.years.2021"),
    },
    {
      imgSrc: ios,
      iosDarkSrc: iosDark,
      date: "2022",
      text: t("timelineSection.years.2022"),
    },
    {
      imgSrc: globe,
      date: "2026",
      text: t("timelineSection.years.2025"),
    },
  ];

  const pageTextCardData = {
    paras: [t("timelineSection.description")],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(AboutUsSchemaMarkup),
        }}
        type="application/ld+json"
      />
      <CountryRegionsHero
        heading={t("hero.title")}
        description={t("hero.description")}
      />

      {/* country images section  */}
      <section className="container mt-16">
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-h2">{t("ourStorySetion.title")} </h2>
          <p className="text-body-sm text-muted-foreground md:text-body-md">
            {t("ourStorySetion.description")}
          </p>

          <div className="relative hidden h-[387px] w-full transition-all hover:opacity-90 lg:block">
            <Image
              src={aeroplane}
              fill
              sizes="auto"
              className="rounded-[2.5rem]"
              alt="Yaalo Narrative"
              quality={100}
            />
          </div>
          <div className="mt-4 grid gap-[2rem] lg:grid-cols-3">
            {images.map((item, index) => (
              <div
                className="group relative h-[311px] w-full transition-all hover:scale-105 hover:opacity-90"
                key={index}
              >
                <Image
                  src={item.imgSrc}
                  fill
                  sizes="auto"
                  alt={`${item.text} image`}
                  className="rounded-[2.5rem]"
                  placeholder="blur"
                  quality={70}
                />
                <p className="absolute left-[1.9rem] top-[1rem] dark:text-foreground text-background z-40 text-body-lg font-700">
                  {item.text}
                </p>
                <div className="absolute inset-0 rounded-[2.5rem] bg-image-overlay-light"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eSIM Was Launched For Ease section  */}
      <section className="container mt-16">
        <div className="flex flex-col gap-[2rem]">
          <h2 className=" text-h2">{t("timelineSection.title")}</h2>
          <div className="grid xl:grid-cols-2 xl:items-center">
            <div className="hidden xl:block">
              <Image src={authImage} alt="about us" quality={75} />
            </div>
            <div className="grid gap-x-[2rem] gap-y-[3rem] xl:grid-cols-2 xl:place-items-center">
              {eSimLaunchedCards.map((item, index) => (
                <div className="flex flex-col items-start gap-2" key={index}>
                  <div className="flex shrink-0 items-center gap-2">
                    <Image
                      className={item.iosDarkSrc ? "dark:hidden" : ""}
                      src={item.imgSrc}
                      alt={`${item.text}`}
                      height={40}
                      width={40}
                      sizes="auto"
                    />
                    {item.iosDarkSrc && (
                      <Image
                        src={item.iosDarkSrc}
                        className="hidden dark:block"
                        alt={`${item.date} App (Dark)`}
                        height={40}
                        width={40}
                        sizes="auto"
                      />
                    )}
                    <h3 className="text-xl font-600 text-muted-foreground">
                      {item.date}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <PageTextCard
            cardData={pageTextCardData}
            className="text-muted-foreground"
          />
        </div>
      </section>

      {/* Our distinctive feature lies in section */}

      <section className="container mt-16 flex flex-col gap-[1rem]">
        <h2 className="text-h2">{t("featuresSection.title")} </h2>
        <p className="text-body-sm text-muted-foreground md:text-body-md">
          {t("featuresSection.description")}:
        </p>
        <div className="mt-10 grid gap-x-[4rem] gap-y-4 md:gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {aboutUsFeatures.map((item, index) => (
            <AdvantagesCard
              key={index}
              icon={item.icon}
              title={t(`featuresSection.cards.${item.key}.tittle`)}
              body={t(`featuresSection.cards.${item.key}.description`)}
            />
          ))}
        </div>
      </section>

      {/* world locations image section  */}
      <section className="md:container hidden lg:block relative mt-16">
        <Image
          src={worldLocations}
          alt="world locations"
          placeholder="blur"
          className="rounded-[2rem]"
          quality={70}
        />
      </section>
    </>
  );
}

export default Page;
