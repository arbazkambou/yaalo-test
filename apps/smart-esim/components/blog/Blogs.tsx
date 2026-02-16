import { cleanString } from "@workspace/core/helpers/cleanString";
import { getBlogs } from "@workspace/core/services/blog/blogs.services";
import {
  BlogParams,
  BlogSearchParams,
} from "@workspace/core/types/services/blog/Blogs";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BlogCard from "./BlogCard";
import { BlogPagination } from "./BlogPagination";

interface PropsType {
  searchParams: BlogSearchParams;
  params?: BlogParams;
}

async function Blogs({ searchParams, params }: PropsType) {
  const blogsInputs = await searchParams;
  const t = await getTranslations("BlogPage");

  let categorySlug;

  if (params) {
    const { category } = await params;
    categorySlug = category;
  }

  let response;

  try {
    response = await getBlogs({
      ...blogsInputs,
      category_slug: categorySlug,
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

  return (
    <>
      <section className="container p-0 place-items-center mt-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-20">
        {response.blogs.length > 0 ? (
          response.blogs.map((item, index) => (
            <BlogCard blog={item} key={index} />
          ))
        ) : (
          <p className="col-span-full flex items-center justify-center rounded-md bg-muted p-5 font-semibold text-foreground-light">
            {t("hero.noBlogs")}
          </p>
        )}
      </section>
      <section className="container mt-16">
        <BlogPagination blogMeta={response.meta} />
      </section>
    </>
  );
}
export default Blogs;
