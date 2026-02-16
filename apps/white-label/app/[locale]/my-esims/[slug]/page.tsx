import GetEsimDetail from "@/components/sims/GetEsimDetail";
import SimDetailSkeleton from "@/components/ui/skeltons/SimDetailSkeleton";
import { PageParams, baseUrl, loginPath } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  const t = await getTranslations(`simDetailPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${loginPath}`,
  });
}

async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div className="container pt-40">
      <h1 className="text-center  text-h1">eSIM Details</h1>
      <p className="mt-[1.5rem] text-center text-body-sm md:text-start md:text-body-md">
        Reach out to the world’s most reliable eSim services
      </p>
      <Suspense fallback={<SimDetailSkeleton />}>
        <GetEsimDetail params={params} />
      </Suspense>
    </div>
  );
}

export default Page;
