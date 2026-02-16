import BlogsPage from "@/components/blog/BlogsPage";
import { BlogDetailsSkeleton } from "@/components/ui/skeltons/BlogDetailsSkeleton";
import { routing } from "@/i18n/routing";
import { HOST } from "@workspace/core/constants/host.constants";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import { getBlogs } from "@workspace/core/services/blog/blogs.services";
import {
  BlogParams,
  BlogSearchParams,
} from "@workspace/core/types/services/blog/Blogs";
import { hasLocale, Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export interface BlogCategoryPageParams {
  category: string;
}

// Props for page and generateMetadata
export interface PropsType {
  params: BlogParams & Promise<{ locale: Locale }>;
  searchParams: BlogSearchParams;
}

export async function generateMetadata({ params, searchParams }: PropsType) {
  const { category } = await params;
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const blogSearchParams = await searchParams;

  //it it is not a blog slug then it should render a normal blogs seo
  let data;
  try {
    data = await getBlogs({
      category_slug: category,
      ...blogSearchParams,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      throw notFound();
    } else {
      throw error;
    }
  }

  const { meta_title, meta_description } = data;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords: null,
    url: `${HOST}blog/${category}/`,
    image: `${HOST}/images/logo-1x1-new.png`,
    publishedTime: null,
    modifiedTime: null,
  });
}

async function Page({ params, searchParams }: PropsType) {
  return (
    <Suspense fallback={<BlogDetailsSkeleton />}>
      <BlogsPage searchParams={searchParams} params={params} />
    </Suspense>
  );
}

export default Page;
