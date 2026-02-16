import bgHero from "@/assets/images/heroBackground.png";
import bgHeroDark from "@/assets/images/heroBackgroundDark.png";
import BlogSearch from "@/components/blog/BlogSearch";
import Image from "next/image";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

async function BlogsHeader() {
    const t = await getTranslations("BlogPage");
  
  return (
    <section className="pb-[50px] relative overflow-hidden">
      <Image
        src={bgHero}
        alt="Hero background light"
        fill
        quality={100}
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={bgHeroDark}
        alt="Hero background dark"
        fill
        quality={100}
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <div className="container relative z-10 grid pt-40 place-items-center gap-y-[2.5rem] px-[1rem] py-[3.5rem]">
        <div className="flex w-full  flex-col items-center gap-[1.5rem] text-center">
          {/* Heading */}
          <h1 className="text-h1">{t("hero.title")}</h1>

          {/* Search */}
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
