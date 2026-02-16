import BlogsPage from "@/components/blog/BlogsPage";
import { PageParams, baseUrl, blogsPath } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { seoData } from "@/lib/seo/seoConfig";
import { BlogSearchParams } from "@workspace/core/types/services/blog/Blogs";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
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
  const t = await getTranslations(`BlogPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${blogsPath}`,
  });
}

interface PropsType {
  params: Promise<{ locale: Locale }>;
  searchParams: BlogSearchParams;
}

async function Page({ searchParams, params }: PropsType) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <Suspense>
      <BlogsPage searchParams={searchParams} />
    </Suspense>
  );
}

export default Page;
