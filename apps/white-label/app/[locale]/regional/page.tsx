import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import RegionsWithDataOnly from "@/components/features/packages/RegionsWithDataOnly";
import EmailReceive from "@/components/presentational/EmailReceive";
import WhyRegionalEsim from "@/components/presentational/WhyRegionalEsim";
import Accordions from "@/components/ui/accordion/Accordions";
import AdvantagesCard from "@/components/ui/cards/AdvantagesCard";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FAQSection from "@/components/ui/sections/FAQsSection";
import Reviews from "@/components/ui/sections/Reviews";
import { regionalPageFeaturesData, regionalReviews } from "@/constants/UIData";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";
import { seoData } from "@/lib/seo/seoConfig";
import { regionalAccordionsData } from "@/constants/AccordionData";
import AppInstall from "@/components/ui/sections/AppInstall";
import { hasLocale, Locale } from "next-intl";
import { baseUrl, PageParams, regionalPath } from "@/constants/constants";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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
  const t = await getTranslations(`RegionalPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${regionalPath}`,
  });
}


async function Page({ params }: PageProps) {


  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("RegionalPage");
  const dataOnlyLinks: {
    label: string;
    href: string;
    iconKey: "local" | "regional" | "global";
    }[] = [
      {
        label: t("tabs.local"),
        href: "/destinations/",
        iconKey: "local",
      },
      {
        label: t("tabs.regional"),
        href: "/regional/",
        iconKey: "regional",
      },
      {
        label: t("tabs.global"),
        href: "/esim-global/",
        iconKey: "global",
      },
    ];

  return (
    <>
      <CountryRegionsHero
        heading={t("hero.heading")}
        description={t("hero.description")}
      />

      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} locale={locale} />

      {/* Regional data only packages  */}
      <section className="container mt-16">
        <div>
          <h2 className="text-center mb-16 xl:text-start text-h2">
            {t("discoverEsim")}
          </h2>
        </div>

        <Suspense
          fallback={
            <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 20 }).map((item, index) => (
                <Skeleton className="h-[200px] w-full" key={index} />
              ))}
            </section>
          }
        >
          {/* just a wrapper to fetch regions that have data only packages  */}
          <RegionsWithDataOnly locale={locale} />
        </Suspense>
      </section>

      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="text-center xl:text-start text-h2">
          {t("hero.descriptionTwo")}
        </h2>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {regionalPageFeaturesData.map((item, index) => (
            <AdvantagesCard key={index} index={index}
              icon={item.icon}
              title={t(`regionalPageFeaturesData.cards.${item.key}.title`)}
              body={t(`regionalPageFeaturesData.cards.${item.key}.body`)}
            />
          ))}
        </div>
      </section>

      {/* why choose section  */}
      <WhyRegionalEsim />

      <EmailReceive countryName={t("anyCountry")} />
      <Reviews reviews={regionalReviews} pageName="RegionalPage" />
      <AppInstall />
      <FAQSection namespace={FAQ_NAMESPACES.RegionalPage} />
    </>
  );
}

export default Page;
