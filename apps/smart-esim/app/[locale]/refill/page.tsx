import RefillForm from "@/components/refill/RefillForm";
import UserCredit from "@/components/refill/UserCredit";
import OrderHistoryTable from "@/components/tables/OrderHistoryTable";
import { baseUrl, PageParams, refillPath } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
  const t = await getTranslations(`refillPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${refillPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("refillPage");
  return (
    <>
      <section className="container mt-16 flex flex-col justify-between gap-[1rem] xl:flex-row xl:items-start">
        <h1 className="font-montserrat text-h2-md font-600 xl:text-start xl:text-h2-xl">
          {t("title")}
        </h1>
        <Suspense fallback={<Skeleton className="h-12 w-full rounded-md" />}>
          <RefillForm />
        </Suspense>

        <div className="flex items-center xl:justify-end">
          <UserCredit />
        </div>
      </section>
      <Suspense fallback={<Skeleton className="mt-8 h-64 w-full rounded-md" />}>
        <OrderHistoryTable locale={locale} />
      </Suspense>
    </>
  );
}
export default Page;
