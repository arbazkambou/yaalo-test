import { Link } from "@/i18n/navigation";
import { cleanString } from "@workspace/core/helpers/cleanString";
import { getBlogsCategories } from "@workspace/core/services/blog/blogs.services";
import { BlogParams } from "@workspace/core/types/services/blog/Blogs";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { getTranslations } from "next-intl/server";
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
    <Tabs defaultValue="all" className="px-2 mt-16 max-w-full overflow-auto">
      <div className="flex md:justify-center">
        <TabsList className="flex items-center gap-2 justify-center">
          <Link href={`/blog/`} scroll={false}>
            <TabsTrigger
              value={`/`}
              className={`cursor-pointer ${activeCategory ? "" : "bg-primary font-500 text-background"}`}
            >
              {t("hero.allBlogs")}
            </TabsTrigger>
          </Link>
          {blogCategories.map((item, index) => (
            <Link href={`/blog/${item.slug}`} key={index} scroll={false}>
              <TabsTrigger
                value={item.slug}
                className={`w-full cursor-pointer ${item.slug === activeCategory && "bg-primary font-500 text-background"}`}
              >
                {item.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </div>
    </Tabs>
  );
}

export default BlogCategoriesTabs;
