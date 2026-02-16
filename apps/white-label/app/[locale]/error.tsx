"use client";

import Image from "next/image";
import { useEffect } from "react";
import errorImg from "@/assets/svgs/errorImg.png";
import { Metadata } from "next";
import FooterLink from "@/components/ui/links/FooterLink";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Something went wrong!",
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
   const t = useTranslations("ErrorPage");
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
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <section className="container pt-40 grid gap-32 xl:grid-cols-[1fr_auto]">
        <div className="mt-4 flex flex-col gap-[1.62rem]">
          <h1 className="font-montserrat text-h1"> {t("title")}</h1>

          <p className="text-body-sm text-primary md:text-body-base">
           {t("description")}
          </p>

          <p className="text-body-sm text-destructive md:text-body-base">
             {t("description2")}
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
          <Image src={errorImg} alt="something went wrong" fill sizes="auto" />
        </div>
      </section>
      <section className="container mt-8">
        {" "}
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-body-md font-600 md:text-body-lg">
           {t("leaveEmpty")}
          </p>
          <p className="text-body-base text-muted-foreground">
          {t("ComparingEsimText")}
          </p>

          <div className="grid gap-[1.62rem] sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-body-base font-500 text-primary">
              {t("instantActivation")}
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-body-base font-500 text-primary">
             {t("reliableGlobal")}
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-body-base font-500 text-primary">
             {t("affordAbleData")}
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-body-base font-500 text-primary">
              {t("fullSupport")}
            </div>
          </div>

          <p className="text-body-base text-muted-foreground">
           {t("stillCurious")}{" "}
            <FooterLink
              href={"/contact-us/"}
              className="inline text-primary underline underline-offset-4"
            >
             {t("contactSupport")}
            </FooterLink>{" "}
           {t("getBackQuickly")}
          </p>
        </div>
      </section>
    </>
  );
}
