import { getBlogsCategories } from "@workspace/core/services/blog/blogs.services";
import { BlogParams } from "@workspace/core/types/services/blog/Blogs";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { notFound } from "next/navigation";

async function BlogCategoriesTabs({ params }: { params?: BlogParams }) {
  let activeCategory = "";
  const t = await getTranslations("BlogPage");
  if (params) {
    const { category } = await params;
    activeCategory = category;
  }

  let blogCategories;

  try {
    blogCategories = await getBlogsCategories();
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
    <div className="px-4">
      <div className="mt-16 xl:mx-auto w-full max-w-fit bg-muted/40 border-2 border-muted rounded-md">
        <Tabs defaultValue="all">
          <div className="flex md:justify-center">
            <TabsList className=" flex w-full justify-start gap-2 px-2 overflow-x-auto whitespace-nowrap">
              <Link href={`/blog/`} scroll={false}>
                <TabsTrigger
                  value={`/`}
                  className={`cursor-pointer bg-transparent text-body-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:rounded ${activeCategory ? "" : "bg-background! font-500 text-foreground shadow-md rounded"}`}
                >
                  {t("hero.allBlogs")}
                </TabsTrigger>
              </Link>
              {blogCategories.map((item, index) => (
                <Link href={`/blog/${item.slug}`} key={index} scroll={false}>
                  <TabsTrigger
                    value={item.slug}
                    className={`w-full cursor-pointer bg-transparent text-body-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:rounded  ${item.slug === activeCategory && "bg-background! font-500 text-foreground shadow-md rounded "}`}
                  >
                    {item.name}
                  </TabsTrigger>
                </Link>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default BlogCategoriesTabs;
