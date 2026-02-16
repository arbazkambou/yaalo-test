import BlogsPage from "@/components/blog/BlogsPage";
import { BlogDetailsSkeleton } from "@/components/ui/skeltons/BlogDetailsSkeleton";
import { HOST } from "@workspace/core/constants/host.constants";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { generateDynamicSeo } from "@workspace/core/helpers/generateDynamicSeo";
import { getBlogs } from "@workspace/core/services/blog/blogs.services";
import {
  BlogParams,
  BlogSearchParams,
} from "@workspace/core/types/services/blog/Blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export interface BlogCategoryPageParams {
  category: string;
}

// Props for page and generateMetadata
export interface PropsType {
  params: BlogParams;
  searchParams: BlogSearchParams;
}

export async function generateMetadata({
  params,
  searchParams,
}: PropsType): Promise<Metadata> {
  const { category } = await params;
  const blogSearchParams = await searchParams;
  // //it it is not a blog slug then it should render a normal blogs seo
  let blogData;

  try {
    blogData = await getBlogs({
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

  const { meta_title, meta_description } = blogData;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords: null,
    url: `${HOST}blog/${category}/`,
    image: "https://yaalo.com/images/logo-1x1-new.png",
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
