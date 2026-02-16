import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { Locale } from "next-intl";

export function generateDynamicSeo(seoData: {
  meta_title?: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  url: string;
  locale: Locale;
}): Metadata {
  const { meta_title, meta_description, meta_keywords, url, locale } = seoData;
  const pathname = new URL(url).pathname;

  const baseUrl = "https://smartesim.co";
  let localizedUrl = `${baseUrl}${pathname}`;

  const locales = routing.locales.filter((locale) => locale !== "en");
  const otherLanguages = Object.fromEntries(
    locales.map((locale) => [locale, `${baseUrl}/${locale}${pathname}`])
  );

  if (locale !== "en") {
    localizedUrl = `${baseUrl}/${locale}${pathname}`;
  }
  return {
    title: meta_title,
    description: meta_description,
    keywords: meta_keywords,
    alternates: {
      canonical: localizedUrl,
      languages: {
        "en-US": localizedUrl,
        en: localizedUrl,
        "x-default": localizedUrl,
        ...otherLanguages,
      },
    },
  };
}
