import aboutImg from "@/assets/images/whoweare.png";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import WhyEsim from "@/components/ui/sections/WhyEsim";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@workspace/ui/components/card";
import mission from "@/assets/svgs/ourMission.svg";
import support from "@/assets/svgs/ourSupport.svg";
import join from "@/assets/images/joinUs.png";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { aboutFeaturesKeys } from "@/constants/UIData";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { aboutUsPath, baseUrl, PageParams } from "@/constants/constants";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

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
  const t = await getTranslations(`AboutUsPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${aboutUsPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("AboutUsPage");
  return (
    <>
      <CountryRegionsHero
        heading={t("hero.title")}
        description={t("hero.description")}
        enableSearchList={false}
      />
      <section className="container mt-15">
        <h2 className="md:text-[50px] py-5 text-2xl font-bold md:font-700 text-foreground">
          {t("globalTravelSection.title")}
        </h2>
        <div className="w-full grid lg:grid-cols-[60%_40%] gap-12 items-center">
          <div className="space-y-6">
            <p>{t("globalTravelSection.description")}</p>
            <p className="font-600">
              {t("globalTravelSection.descriptionTwo")}
            </p>
            <div className="space-y-4 sm:space-y-6">
              {aboutFeaturesKeys.map((feature) => (
                <div
                  key={feature.key}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <div className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center">
                    {feature.key}
                  </div>
                  <p className="text-lg text-primary font-500 text-center sm:text-left">
                    {t(`globalTravelSection.features.${feature.key}.body`)}
                  </p>
                </div>
              ))}
            </div>
            <p>{t("globalTravelSection.descriptionThree")}</p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image src={aboutImg} alt="Who We Are" />
          </div>
        </div>
      </section>

      <section className="container mt-15">
        <div className=" grid gap-10 xl:grid-cols-2 mt-8">
          <Card className="bg-secondary-green/10 rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary ">
            <div className="flex items-center gap-2">
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Image
                  src={mission}
                  quality={75}
                  fill
                  sizes="auto"
                  alt="Our Mission"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-montserrat text-[1.5625rem] font-600 text-foreground-light">
                  {t("missionSection.title")}
                </p>
              </div>
            </div>
            <p className="leading-8">{t("missionSection.description")}</p>
          </Card>

          <Card className="bg-secondary-green/10  rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary ">
            <div className="flex items-center gap-2">
              <div className="relative h-[50px] w-[50px] shrink-0">
                <Image
                  src={support}
                  quality={75}
                  fill
                  sizes="auto"
                  alt="contact us"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-montserrat text-[1.5625rem] font-600 text-foreground-light">
                  {t("storySection.title")}
                </p>
              </div>
            </div>
            <p className="leading-8">{t("storySection.description")}</p>
          </Card>
        </div>
      </section>

      <section className="container mt-15">
        <div
          className="relative rounded-xl overflow-hidden 
  h-auto md:h-96 
  py-10 md:py-0 
  mb-16 flex items-center justify-center"
        >
          <Image
            src={join}
            alt="Join Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div
            className="relative z-10 text-center space-y-4
    bg-white/40 backdrop-blur-sm border border-white/40 rounded-xl p-6
    w-11/12 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto
    my-6 md:my-0"
          >
            <h2 className="font-bold text-balance ">
              {t("joinSection.title")}
            </h2>

            <p className="text-lg opacity-90 ">
              {t("joinSection.description")}
            </p>
          </div>
        </div>
      </section>

      <WhyEsim />
      <FAQSection namespace={FAQ_NAMESPACES.AboutUsPage} />
      <AppInstall />
    </>
  );
}

export default Page;
