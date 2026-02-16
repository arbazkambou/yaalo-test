import GetBlogDetail from "@/components/blog/GetBlogDetail";
import { BlogDetailsSkeleton } from "@/components/ui/skeltons/BlogDetailsSkeleton";
import { routing } from "@/i18n/routing";
import { HOST } from "@workspace/core/constants/host.constants";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import { getBlogDetail } from "@workspace/core/services/blog/blogs.services";
import { hasLocale, Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PropsType {
  params: Promise<{ slug: string; category: string; locale: Promise<{ locale: Locale }> }>;
}

export async function generateMetadata({ params }: PropsType) {
  const { category, slug, locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  let blogData;
  try {
    blogData = await getBlogDetail({
      slug,
      categorySlug: category,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }

  const {
    name: head_title,
    sub_content: meta_description,
    keywords: meta_keywords,
    thumbnail: image_url,
    created_at,
    updated_at,
  } = blogData.blog;
  return generateDynamicSeo({
    meta_title: head_title,
    meta_description,
    meta_keywords,
    url: `${HOST}blog/${category}/${slug}/`,
    image: image_url || "https://yaalo.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at,
    modifiedTime: created_at || updated_at,
  });
}

async function Page({ params }: PropsType) {
  return (
    <section className="pt-40">
      <Suspense fallback={<BlogDetailsSkeleton />}>
        <GetBlogDetail params={params} />
      </Suspense>
    </section>
  );
}

export default Page;
