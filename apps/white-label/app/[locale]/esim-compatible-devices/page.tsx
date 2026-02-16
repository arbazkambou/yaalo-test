import CompatibleTable from "@/components/tables/CompatibleTable";
import Accordions from "@/components/ui/accordion/Accordions";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { getDeviceSections } from "@/constants/compatible-phones";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import { esimCompatible } from "@/constants/AccordionData";
import { DeviceSupportSection } from "@/components/compatible-phones/CompatibleDeviceSupport";
import ManualAndAutomaticSteps from "@/components/compatible-phones/ManualAndAutomaticSteps";
import EsimCompatibleHero from "@/components/compatible-phones/EsimCompatibleHero";
import { Locale } from "next-intl";
import { baseUrl, esimCompatiblePath, PageParams } from "@/constants/constants";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { FAQ_NAMESPACES } from "@/types/keys";

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
  const t = await getTranslations(`EsimCompatiblePage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${esimCompatiblePath}`,
  });
}

async function page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("EsimCompatiblePage");
    const deviceSections = getDeviceSections(t);
  return (
    <>
      <EsimCompatibleHero locale={locale}/>
      <section className="my-16 container text-body-base">
        <h2 className="text-h2 my-6 text-foreground text-center xl:text-start">
         {t("hero.compatibleDevices")}
        </h2>
        <p className="text-body-base md:px-8 xl:px-0 text-muted-foreground text-center xl:text-start xl:max-w-[1245px]">

          {t("hero.description")}
        </p>
        <h3 className="text-xl my-4 text-foreground font-semibold text-center xl:text-start">
          {t("hero.descriptionTwo")}
        </h3>
        <p className="text-center xl:text-start text-muted-foreground text-body-base">
          {t("hero.descriptionThree")}
        </p>
        {deviceSections.map((section) => (
          <DeviceSupportSection key={section.id} section={section} />
        ))}
      </section>

      <section className="my-16 text-body-base">
        <div className="container">
          <h2 className="text-2xl font-bold md:text-h2 text-center xl:text-start xl:max-w-[1300px]">
            {t("numberOfeSimSupportedSmartPhones")}
          </h2>


          <CompatibleTable />
        </div>
      </section>
      <ManualAndAutomaticSteps />

      <FAQSection namespace={FAQ_NAMESPACES.EsimCompatiblePage} />

    </>
  );
}

export default page;
