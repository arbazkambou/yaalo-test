import CountriesSection from "@/components/packages/StartingPriceSection";
import AppInstall from "@/components/ui/sections/AppInstall";
import EsimCompatible from "@/components/ui/sections/EsimCompatible";
import EsimFeatures from "@/components/ui/sections/EsimFeatures";
import EsimSteps from "@/components/ui/sections/EsimSteps";
import FAQSection from "@/components/ui/sections/FAQsSection";
import HomeHero from "@/components/ui/sections/HomeHero";
import Reviews from "@/components/ui/sections/Reviews";
import WhyEsim from "@/components/ui/sections/WhyEsim";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
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

  const { appLink } = await getAppSettings();
  return (
    <>
      <HomeHero locale={locale} appLink={appLink} />
      <EsimFeatures />
      <CountriesSection locale={locale} />
      <EsimSteps />
      <EsimCompatible />
      <WhyEsim />
      <Reviews />
      <FAQSection namespace={FAQ_NAMESPACES.HomePage} />
      <AppInstall />
    </>
  );
}
