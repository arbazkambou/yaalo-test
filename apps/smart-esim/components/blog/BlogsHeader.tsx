import stars from "@/assets/images/5stars.png";
import BlogSearch from "@/components/blog/BlogSearch";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function BlogsHeader() {
  const t = await getTranslations("BlogPage");
  return (
    <section className="bg-primary-lightest">
      <div className="container grid place-items-center gap-y-[2.5rem] px-[1rem] py-[3.5rem]">
        <div className="flex w-full  flex-col items-center gap-[1.5rem] text-center">
          <div className="flex items-center justify-center gap-4 xl:justify-start">
            <div className="relative h-[21.5px] w-[147.8px]">
              <Image src={stars} alt="5 stars rating" fill sizes="auto" />
            </div>
            <p className="text-body-sm font-700 text-foreground">
              {t("hero.download")}
            </p>
          </div>
          <h1 className="text-center text-foreground font-montserrat text-h1-base font-600 tracking-wide md:text-h1-md xl:text-start xl:text-h1-xl">
            {t("hero.title")}
          </h1>
          <p className="text-sm text-foreground/80 xl:text-[1.25rem] max-w-[800px]">
            {t("hero.description")}
          </p>

          <div className="flex w-full items-center justify-center">
            <div className="w-full md:max-w-[600px] ">
              <BlogSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsHeader;
