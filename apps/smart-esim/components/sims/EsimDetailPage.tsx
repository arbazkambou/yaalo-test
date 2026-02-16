import GetEsimDetail from "@/components/sims/GetEsimDetail";
import SimDetailSkeleton from "@/components/ui/skeltons/SimDetailSkeleton";
import { routing } from "@/i18n/routing";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

async function EsimDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: Locale }>;
}) {
  const { slug, locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("simDetailPage");
  return (
    <div className="container mt-16">
      <h1 className="text-center font-montserrat text-h1-base font-600 md:text-start md:text-h1-md xl:text-h1-xl">
        {t("title")}
      </h1>
      <p className="mt-[1.25rem] text-center text-body-sm md:text-start md:text-body-md">
        {t("description")}
      </p>
      <Suspense fallback={<SimDetailSkeleton />}>
        <GetEsimDetail slug={slug} locale={locale} />
      </Suspense>
    </div>
  );
}

export default EsimDetailPage;
