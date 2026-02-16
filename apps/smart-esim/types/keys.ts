import { JSX } from "react";

export type EsimFeatureKey = "fair" | "roaming" | "fast" | "setup";
export type ContactFeatureKey = "liveChat" | "emailSupport" ;
export type whyEsimCardKey = "1" | "2" | "3" | "4";
export type AboutFeatureKey = "1" | "2" | "3" | "4";


export type AdvantageCard = {
  icon: JSX.Element;
  key: whyEsimCardKey;
};

export const FAQ_NAMESPACES = {
  HomePage: "HomePage.faqsData",
  EsimPage: "EsimPage.faqsData",
  RegionalPage: "RegionalPage.faqsData",
  RegionalSlug: "RegionalSlugPage.faqsData",
  GlobalPage: "GlobalPage.faqsData",
  AboutUsPage: "AboutUsPage.faqsData",
  ContactUsPage: "ContactUsPage.faqsData",
  FAQsPage: "FAQsPage.faqsData",
  EsimCompatiblePage: "EsimCompatiblePage.faqsData",
} as const;

export type FAQNamespace = (typeof FAQ_NAMESPACES)[keyof typeof FAQ_NAMESPACES];
