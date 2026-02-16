import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FooterLink from "@/components/ui/links/FooterLink";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { ContentType} from "@/constants/termsData";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { Card } from "@workspace/ui/components/card";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { JSX } from "react";

type PageProps={
  params:Promise<{locale:Locale}>
}

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
  const t = await getTranslations("RefundPolicyPage.metaData");
  return generateDynamicSeo({
    meta_title: t("title"),
    meta_description: t("description"),
    meta_keywords: t("keywords"),
    locale,
    url: `${baseUrl}${homePath}`,
  });
}

async function Page({params}:PageProps) {
  const {locale}=await params;
  if (!hasLocale(routing.locales,locale)){
    notFound();
  }
  setRequestLocale(locale);
  const t =await getTranslations("RefundPolicyPage.refundPolicy");

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
            href={"https://yaalo.com/"}
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
      <CountryRegionsHero heading={t("title")} trustpilot={false} />

      <section className="container mt-16">
        <Card className="flex flex-col gap-[28px] rounded-[15px] border-0 px-[29px] py-[34px] shadow-myCard text-muted-foreground">
          <p>
           {t("description")}
          </p>
          {RefundPolicyData.map((item, index) => (
            <div className="flex flex-col gap-[28px]" key={`main ${index}`}>
              <h2 className="text-h2 text-foreground">{item.title}</h2>
              {/* <ul className="list-group"> */}
              {item.content.map((item, index) => (
                <li
                  key={`main-content ${index}`}
                  className="list-group-item font-poppins text-muted-foreground text-body-base"
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
