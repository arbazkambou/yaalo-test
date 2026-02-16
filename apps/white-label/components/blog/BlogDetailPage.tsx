"use client";

import placeHolderImage from "@/assets/images/placeholderImage.svg";
import placeholderUser from "@/assets/images/nina.png";
import { formatDate } from "@workspace/core/helpers/formatDate";
import { BlogDetailData } from "@workspace/core/types/services/blog/BlogDetails";
import { Card } from "@workspace/ui/components/card";
import { ArrowUpRight, CalendarClock, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import BlogCard from "./BlogCard";
import { addLazyToIframes } from "@workspace/core/helpers/addLazyToIframe";
import ShareableButton from "./ShareableButton";
import ratingStar from "@/assets/images/rating-star.svg";
import usersImage from "@/assets/images/users.png";
import globeImage from "@/assets/images/globe.svg";
import { useTranslations } from "next-intl";

interface PageProps {
  blogData: BlogDetailData;
}

function BlogDetailPage({ blogData }: PageProps) {
  const t=  useTranslations('BlogPage.blogDetail');
  const {
    blog: {
      image,
      name,
      category,
      content,
      slug,
      created_at,
      author_image,
      author_name,
      destination_1,
      destination_2,
    },
    related_blogs,
    scriptData,
  } = blogData;

  const isDestinationPlans = destination_1 && destination_2;

  return (
    <>
      {scriptData && (
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(scriptData),
          }}
          type="application/ld+json"
        />
      )}

      <section className="container relative mx-auto hidden md:block">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={1127}
            height={428}
            quality={70}
            className="rounded-[2.5rem] mx-auto object-cover"
          />
        ) : (
          <Image
            src={placeHolderImage}
            alt={name}
            className="rouded-[2.5rem]"
          />
        )}
      </section>

      <Card className="container mx-auto mt-16 flex max-w-[1000px] flex-col gap-10 rounded-[0.9375] border-none px-[1.81rem] py-[2rem] !font-poppins leading-[1.5rem] !text-muted-foreground !shadow-custom">
        {/* Breadcrumb  and share button*/}
        <div className="flex items-center justify-between">
          <div className="flex w-max items-center justify-start gap-2 rounded-[0.3125rem] bg-muted px-[1rem] py-[0.62rem] xl:gap-[1.31rem]">
            <Link
              href={`/blog/`}
              className="text-body-sm font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              {t("blog")}
            </Link>
            <ChevronRight className="text-primary" size={20} />
            <Link
              href={category ? `/blog/${category.slug}` : "/blog"}
              className="text-body-sm font-500 text-foreground-light/85 transition-all hover:text-primary"
            >
              {category?.name}
            </Link>
          </div>
          <ShareableButton
            url={category ? `/blog/${category.slug}/${slug}` : `/blog/${slug}`}
          >
            {t("share")}
          </ShareableButton>
        </div>

        {/* author and date time  */}
        <Card className="rounded-[0.625rem] px-[0.69rem] py-[0.75rem] shadow-sm xl:px-[1rem]">
          <div className="flex items-center justify-between">
            {/* author  */}
            <div className="blogs-center flex items-center gap-[10px]">
              {author_image ? (
                <div className="relative h-[26px] w-[26px] md:h-[43px] md:w-[43px]">
                  <Image
                    src={author_image}
                    fill
                    sizes="auto"
                    alt={`${author_name}'s blog`}
                    className="rounded-full"
                  />
                </div>
              ) : (
                <div className="relative h-[26px] w-[26px] md:h-[43px] md:w-[43px]">
                  <Image
                    src={placeholderUser}
                    fill
                    sizes="auto"
                    alt={`${author_name}'s blog`}
                    className="rounded-full"
                  />
                </div>
              )}

              <p className="text-body-sm font-600 md:text-body-lg">
                {author_name}
              </p>
            </div>

            {/* date time  */}
            <div className="blogs-center flex items-center gap-2 text-foreground">
              <CalendarClock className="h-[15px] w-[15px] xl:h-[20px] xl:w-[25px]" />
              <p className=" text-xs xl:text-sm">{formatDate(created_at)}</p>
            </div>
          </div>
        </Card>

        {/* blog detail */}
        <section
          dangerouslySetInnerHTML={{ __html: addLazyToIframes(content) }}
          className="blogDetail"
        ></section>
      </Card>

      {/* related plan card  */}
      {isDestinationPlans && (
        <Card className="container mx-auto mt-16 max-w-[1000px] rounded-[0.9375] border-none px-[1.81rem] py-[2rem] !shadow-custom">
          <h2 className="font-poppins text-h2">
            {t("interestedInPlans")}
          </h2>
          <div className="mt-10 grid gap-x-[5rem] gap-y-[4rem] xl:grid-cols-2">
            {destination_1 && (
              <Link
                className="group flex justify-between rounded-lg border border-transparent bg-muted px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl"
                href={destination_1.url}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[42px] w-[42px]">
                    <Image
                      src={destination_1.image_url}
                      alt={`${destination_1.name} flag`}
                      sizes="auto"
                      fill
                      className="shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-body-base font-500">
                      {destination_1.name}
                    </p>
                    <p className="text-sm">
                      {t("startsAt")} ${destination_1.starts_at}
                    </p>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </Link>
            )}
            {destination_1 && (
              <Link
                className="group flex justify-between rounded-lg border border-transparent bg-muted px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl"
                href={destination_2.url}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[42px] w-[42px]">
                    <Image
                      src={destination_2.image_url}
                      alt={`${destination_2.name} flag`}
                      sizes="auto"
                      fill
                      className="shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-body-base font-500">
                      {destination_2.name}
                    </p>
                    <p className="text-sm">
                      {t("startsAt")} ${destination_2.starts_at}
                    </p>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </Link>
            )}
          </div>
        </Card>
      )}

      {/* Related blogs  */}
      <section className="container mt-16">
        <h2 className="text-h2 text-center">{t("relatedBlogs")}</h2>
        <div className="mt-16 grid gap-x-[2rem] gap-y-[2rem] lg:grid-cols-2 xl:grid-cols-3">
          {related_blogs.slice(0, 3).map((blog, index) => (
            <BlogCard blog={blog} key={index} isRelatedBlog />
          ))}
        </div>
      </section>

      {/* <ShowPromotionalBanner /> */}
    </>
  );
}

export default BlogDetailPage;
