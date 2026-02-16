import { Metadata } from "next";
import { SITE_NAME } from "@workspace/core/constants/host.constants";

export function generateDynamicSeo(seoData: {
  meta_title?: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  url: string;
  image: string;
  publishedTime: string | null;
  modifiedTime: string | null;
}): Metadata {
  const {
    meta_description,
    image,
    meta_keywords,
    modifiedTime,
    publishedTime,
    url,
    meta_title,
  } = seoData;

  return {
    title: meta_title,
    description: meta_description,
    keywords: meta_keywords,
    openGraph: {
      title: meta_title ? meta_title : undefined,
      description: meta_description ? meta_description : undefined,
      url: url,
      siteName: SITE_NAME,
      images: image,
      type: "article",
      publishedTime: publishedTime ? publishedTime : undefined,
      modifiedTime: modifiedTime ? modifiedTime : undefined,
    },
    twitter: {
      card: "summary",
      site: "@yaalo",
      title: meta_title ? meta_title : undefined,
      description: meta_description ? meta_description : undefined,
      images: image,
    },
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        en: url,
        "x-default": url,
      },
    },
  };
}
