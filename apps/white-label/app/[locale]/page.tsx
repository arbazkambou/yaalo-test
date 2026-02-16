import StartingPriceSection from "@/components/packages/StartingPriceSection";
import Accordions from "@/components/ui/accordion/Accordions";
import AppInstall from "@/components/ui/sections/AppInstall";
import EsimCompatible from "@/components/ui/sections/EsimCompatible";
import EsimFeatures from "@/components/ui/sections/EsimFeatures";
import EsimSteps from "@/components/ui/sections/EsimSteps";
import FAQSection from "@/components/ui/sections/FAQsSection";
import HomeHero from "@/components/ui/sections/HomeHero";
import Reviews from "@/components/ui/sections/Reviews";
import WhyEsim from "@/components/ui/sections/WhyEsim";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { homeReviews } from "@/constants/UIData";
import { routing } from "@/i18n/routing";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { FAQ_NAMESPACES } from "@/types/keys";

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
  const t = await getTranslations(`HomePage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${homePath}`,
  });
}


type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <>
      <HomeHero locale={locale} />
      <EsimFeatures />
      <StartingPriceSection locale={locale} />
      <EsimSteps />
      <EsimCompatible />
      <WhyEsim />
      <Reviews
        reviews={homeReviews}
        pageName="HomePage"
      />

      <AppInstall />
      <FAQSection namespace={FAQ_NAMESPACES.HomePage}/>
      
    </>
  );
}
