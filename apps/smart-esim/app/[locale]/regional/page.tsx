import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import RegionsWithDataOnly from "@/components/features/packages/RegionsWithDataOnly";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Suspense } from "react";
import { Metadata } from "next";
import { seoData } from "@/lib/seo/seoConfig";
import AppInstall from "@/components/ui/sections/AppInstall";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getTranslations } from "next-intl/server";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { baseUrl, PageParams, regionalPath } from "@/constants/constants";
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
  const dataOnlyLinks = [
    {
      label: t("tabs.local"),
      href: "/esim/",
    },
    {
      label: t("tabs.regional"),
      href: "/regional/",
    },
    {
      label: t("tabs.global"),
      href: "/global/",
    },
  ];

  return (
    <>
      <CountryRegionsHero
        heading={t("hero.heading")}
        description={t("hero.description")}
        locale={locale}
      />

      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

      {/* Regional data only packages  */}
      <section className="container mt-16">
        <div>
          <h2 className="text-center font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-start xl:text-h2-xl">
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
          <section className="mt-16">
            <RegionsWithDataOnly locale={locale} />
          </section>
        </Suspense>
      </section>

      {/* advantages card  */}

      <FAQSection namespace={FAQ_NAMESPACES.RegionalPage} />
      <AppInstall />
    </>
  );
}

export default Page;
