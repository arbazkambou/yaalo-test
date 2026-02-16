import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FooterLink from "@/components/ui/links/FooterLink";
import { ContentType } from "@/constants/termsData";
import { seoData } from "@/lib/seo/seoConfig";
import { Card } from "@workspace/ui/components/card";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JSX } from "react";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { baseUrl, PageParams, refundPolicyPath } from "@/constants/constants";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations(`RefundPolicyPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${refundPolicyPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("RefundPolicyPage.refundPolicy");
  const RefundPolicyData = t.raw("data") as {
    title: string;
    content: ContentType[];
    subTitles?: {
      title: string;
      content: ContentType[];
    }[];
  }[];

  function renderContentItem(item: ContentType): JSX.Element {
    if (item.type === "text") {
      return <>{item.text}</>;
    }

    if (item.type === "bold") {
      const parts = item.text.split(":");
      return (
        <>
          {parts.map((part, index) => (
            <span key={index} className={index === 0 ? "font-semibold" : ""}>
              {index === 0 ? `${part}:` : part}
            </span>
          ))}
        </>
      );
    }

    if (item.type === "bolder") {
      return <span className="font-semibold">{item.text}</span>;
    }

    if (item.type === "link") {
      const [before, after] = item.text.split(item.linkText);
      return (
        <>
          {before}
          <FooterLink
            href={"https://smartesim.co/"}
            className="inline text-primary"
          >
            {item.linkText}
          </FooterLink>
          {after}
        </>
      );
    }

    return <></>;
  }
  return (
    <>
      {/* <PagesHero
        title="Refund Policy"
        showDownloadAndRating={false}
        className="py-[3rem] sm:py-[4.5rem]"
      /> */}
      <CountryRegionsHero
        heading={t("title")}
        description={t("description")}
        enableSearchList={false}
      />

      <section className="container mt-16">
        <Card className="flex flex-col gap-[28px] rounded-[15px] border-0 px-[29px] py-[34px] shadow-myCard">
          {RefundPolicyData.map((item, index) => (
            <div className="flex flex-col gap-[28px]" key={`main ${index}`}>
              <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl text-primary">
                {item.title}
              </h2>
              {/* <ul className="list-group"> */}
              {item.content.map((item, index) => (
                <li
                  key={`main-content ${index}`}
                  className="list-group-item font-poppins text-base"
                >
                  {renderContentItem(item)}
                </li>
              ))}
              {/* </ul> */}
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}

export default Page;
