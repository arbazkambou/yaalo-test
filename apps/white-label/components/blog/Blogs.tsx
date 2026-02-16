import { getBlogs } from "@workspace/core/services/blog/blogs.services";
import {
  BlogParams,
  BlogSearchParams,
} from "@workspace/core/types/services/blog/Blogs";
import BlogCard from "./BlogCard";
import { BlogPagination } from "./BlogPagination";
import { getTranslations } from "next-intl/server";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { notFound } from "next/navigation";

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
      {response.blogs.length > 0 ? (
        <section className="container mt-16 grid gap-x-[2.5rem] gap-y-[5rem] xl:grid-cols-3">
          {response.blogs.map((item, index) => (
            <BlogCard blog={item} key={index} />
          ))}
        </section>
      ) : (
        <section className="container mt-16">
          <p className="flex items-center justify-center rounded-md bg-muted p-5 font-semibold text-foreground-light">
            {t("hero.noBlogs")}
          </p>
        </section>
      )}

      <section className="container mt-16">
        <hr />
        <BlogPagination blogMeta={response.meta} />
      </section>
    </>
  );
}
export default Blogs;
