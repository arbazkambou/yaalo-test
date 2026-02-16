import notFoundImg from "@/assets/images/404.png";
import GetSearchPackagesList from "@/components/data-fetching/GetSearchPackagesList";
import FooterLink from "@/components/ui/links/FooterLink";
import SearchPackagesListSkelton from "@/components/ui/skeltons/SearchPackagesListSkelton";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
};
export default async function NotFound() {
   const t = await getTranslations("NotFoundPage");
  const links = [
    {
     text: t("links.esims"),
      link: "/destinations/",
    },
    {
     text: t("links.blog"),
      link: "/blog/",
    },
    {
    text: t("links.contact"),
      link: "/contact-us/",
    },
    // {
    //   text: "Help Center",
    //   link: "/help-center/",
    // },

    {
       text: t("links.faqs"),
      link: "/faq/",
    },
    {
    text: t("links.home"),
      link: "/",
    },
  ];
  return (
    <>
      <section className="container pt-40 grid gap-32 xl:grid-cols-[1fr_auto]">
        <div className="mt-4 flex flex-col gap-[1.62rem]">
          <h1 className="font-montserrat text-h1 "> {t("title")}</h1>
          <div className="max-w-[550px]">
            <Suspense fallback={<SearchPackagesListSkelton />}>
              <GetSearchPackagesList />
            </Suspense>
          </div>
          <p className="text-body-sm text-primary md:text-body-base">
             {t("description")}
          </p>

          <p className="font-montserrat text-body-lg font-600 md:text-body-lg">
             {t("popularLinks")}
          </p>

          <div className="flex flex-col gap-[0.8rem]">
            {links.map((item, index) => (
              <FooterLink
                href={item.link}
                key={index}
                className="text-sm text-primary"
              >
                {item.text}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[415px] w-[491px] rounded-[30px] bg-muted xl:block">
          <Image src={notFoundImg} alt="page not found" fill sizes="auto" />
        </div>
      </section>
    </>
  );
}
