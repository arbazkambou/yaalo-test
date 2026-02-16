import AffiliateHero from "@/components/pages/AffiliateHero";
import AffiliateFeatures from "@/components/ui/sections/AffiliateFeatures";
import AffiliateFormSection from "@/components/ui/sections/AffiliateFormSection";
import AffiliateSharingBanner from "@/components/ui/sections/AffiliateSharingBanner";
import AffiliateWorkingSteps from "@/components/ui/sections/AffiliateWorkingSteps";
import ImageCarousel from "@/components/ui/sections/PartnerImageCarousel";
import competitive from "@/assets/images/competitive.gif";
import realTime from "@/assets/images/realTime.gif";
import payment from "@/assets/images/payment.gif";
import dedicated from "@/assets/images/dedicatedSupport.gif";
import promotional from "@/assets/images/easyPromotion.gif";
import { Metadata } from "next";
import FAQSection from "@/components/ui/sections/FAQsSection";
import AffiliateSpecialFeatures from "@/components/ui/sections/AffiliateSpecialFeatures";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { hasLocale, Locale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { FAQ_NAMESPACES } from "@/types/keys";
import { AffiliateSchemaMarkup } from "@/constants/UIData";

type PageProps = {
  params: Promise<{ locale: Locale }>
}

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
  const t = await getTranslations("AffiliatePartnerPage.metaData");
  return generateDynamicSeo({
    meta_title: t("title"),
    meta_description: t("description"),
    meta_keywords: t("keywords"),
    locale,
    url: `${baseUrl}${homePath}`,
  });
}

async function page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("AffiliatePartnerPage.imageCarousel");

  const CAROUSEL_ITEMS = [
    {
      id: 1,
      title: t("1.title"),
      description: t("1.description"),
      image: competitive,
    },
    {
      id: 2,
      title: t("2.title"),
      description: t("2.description"),
      image: realTime,
    },
    {
      id: 3,
      title: t("3.title"),
      description: t("3.description"),
      image: payment,
    },
    {
      id: 4,
      title: t("4.title"),
      description: t("4.description"),
      image: dedicated,
    },
    {
      id: 5,
      title: t("5.title"),
      description: t("5.description"),
      image: promotional,
    },
  ];
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(AffiliateSchemaMarkup),
        }}
        type="application/ld+json"
      />
      <section>
        <AffiliateHero />
        <ImageCarousel
          items={CAROUSEL_ITEMS}
          title={t("title")}
          subtitle={t("descripton")}
        />
        <AffiliateFeatures />
        <AffiliateWorkingSteps />
        <AffiliateSpecialFeatures />
        <AffiliateFormSection />
        <FAQSection namespace={FAQ_NAMESPACES.AffiliatePartnerPage} />
        <AffiliateSharingBanner />
      </section>
    </>
  );
}

export default page;
