import { Country } from "./../../../packages/core/types/services/packages/packages.types";
import { JSX } from "react";

export type EsimFeatureKey = "Local" | "Plug" | "Buy" | "Support";
export type ContactFeatureKey = "liveChat" | "emailSupport";
export type whyEsimCardKey = "1" | "2" | "3" | "4" | "5" | "6";
export type AboutFeatureKey = "1" | "2" | "3" | "4" | "5" | "6";
export type AboutusFeatureKey = "1" | "2" | "3";
export type whyRegionalEsimCardKey = "1" | "2" | "3";
export type HomeReviewKey =
  | "reviews.1"
  | "reviews.2"
  | "reviews.3"
  | "reviews.4"
  | "reviews.5"
  | "reviews.6";

export type AdvantageCard = {
  icon: JSX.Element;
  key: whyEsimCardKey;
};
export type SlugAdvantageCard = {
  icon: JSX.Element;
  key: whyEsimCardKey;
  CountryName: string;
};
export type RegionalAdvantageCard = {
  icon: JSX.Element;
  key: whyRegionalEsimCardKey;
};

export type AboutusFeatures = {
  icon: JSX.Element;
  key: AboutusFeatureKey;
};

export const FAQ_NAMESPACES = {
  HomePage: "HomePage.faqsData",
  EsimPage: "EsimPage.faqsData",
  RegionalPage: "RegionalPage.faqsData",
  GlobalPage: "GlobalPage.faqsData",
  ContactUsPage: "ContactUsPage.faqsData",
  SlugPage: "SlugPage.faqsData",
  // AboutUsPage: "AboutUsPage.faqsData",
  FAQsPage: "FAQsPage.faqsData",
  EsimCompatiblePage: "EsimCompatiblePage.faqsData",
  AffiliatePartnerPage:"AffiliatePartnerPage.faqsData"
} as const;

export type FAQNamespace = (typeof FAQ_NAMESPACES)[keyof typeof FAQ_NAMESPACES];

export type PageName = "HomePage" | "RegionalPage";

export const reviewsNamespaceMap: Record<
  PageName,
  "HomePage.Reviews" | "RegionalPage.Reviews"
> = {
  HomePage: "HomePage.Reviews",
  RegionalPage: "RegionalPage.Reviews",
};
export type ReviewsNamespace = (typeof reviewsNamespaceMap)[PageName];


export type NavLinkKey =  "buyEsim" | "contactInfo" | "affiliatePartner";

export type DropdownGroupKey = "more";

export type DropdownItemKey = 
  | "aboutUs"
  | "esimCompatible"
  | "faqs"
  | "blog";



  export type DropdownGroup = {
  labelKey: DropdownGroupKey;
  items: Array<{
    labelKey: DropdownItemKey;
    href: string;
  }>;
};


export type AuthLinkKey =
  | "login"
  | "wallet"
  | "myEsim"
  | "logout"
  | "esim";


  export type NonAuthLinkKey = "login";


  export type NonAuthLink = {
  labelKey: NonAuthLinkKey;
  href: string;
};


export type BottomNavKey =
  | "home"
  | "buyEsim"
  | "login"
  | "more"
  | "myesim";