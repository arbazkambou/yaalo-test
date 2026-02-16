import { Locale } from "next-intl";

export interface PageParams {
  locale: Promise<Locale>;
}

export const baseUrl = "https://smartesim.co";
export const apiUrl = process.env.NEXT_PUBLIC_BASE_API;

export const homePath = "/";
export const esimPage = "/esim/";
export const esimCompatiblePath = "/esim-compatible/";
export const faqsPath = "/faqs/";
export const aboutUsPath = "/about-us/";
export const blogsPath = "/blog/";
export const contactUsPath = "/contact-us/";
export const termsOfServicePath = "/terms/";
export const privacyPolicyPath = "/privacy-policy/";
export const refundPolicyPath = "/refund-policy/";
export const loginPath = "/login/";
export const registerPath = "/register/";
export const passwordResetPath = "/password/reset/";
export const refillPath = "/refill/";
export const myEsimsPath = "/my-esims/";
export const regionalPath = "/regional/";
export const globalPath = "/global/";
export const checkoutPath = "/cart/";
export const thankYouPath = "/sim-buy-thank-you/";
