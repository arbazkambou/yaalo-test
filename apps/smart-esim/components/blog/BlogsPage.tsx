import BlogCategoriesTabs from "@/components/blog/BlogCategoriesTabs";
import Blogs from "@/components/blog/Blogs";
import BlogsHeader from "@/components/blog/BlogsHeader";
import { BlogCardSkeleton } from "@/components/ui/skeltons/BlogCardSkeleton";
import {
  BlogParams,
  BlogSearchParams,
} from "@workspace/core/types/services/blog/Blogs";
import { Suspense } from "react";
import { BlogCategoriesTabSkeleton } from "../ui/skeltons/BlogCategoriesTab";

interface PropsType {
  searchParams: BlogSearchParams;
  params?: BlogParams;
}

function BlogsPage({ searchParams, params }: PropsType) {
  return (
    <>
      <Suspense>
        <BlogsHeader />
      </Suspense>

      {/* categories tabs  */}
      <Suspense fallback={<BlogCategoriesTabSkeleton />}>
        <BlogCategoriesTabs params={params} />
      </Suspense>

      {/* Showing fallback/ skeltons if user search for a specific blog  */}
      <Suspense
        fallback={
          <section className="container mt-16 grid gap-x-[6.5rem] gap-y-[5rem] xl:grid-cols-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </section>
        }
      >
        <Blogs searchParams={searchParams} params={params} />
      </Suspense>
    </>
  );
}

export default BlogsPage;
