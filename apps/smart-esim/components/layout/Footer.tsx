import { footerLinksData, TikTok } from "@/constants/UIData";
import Image from "next/image";
import FooterLink from "../ui/links/FooterLink";
import CopyrightText from "./CopyrightText";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import FooterLogo from "./FooterLogo";
import SmallSocialsButtons from "../ui/buttons/SmallSocialsButtons";
import {
  AppLinkSettings,
  SupportSettings,
} from "@workspace/core/types/services/support/support.types";

type PropType = {
  support: SupportSettings;
  appLink: AppLinkSettings;
};

async function Footer({ support, appLink }: PropType) {
  const t = await getTranslations("SharedUI.footerLinks");
  const policyLinks = [
    {
      label: t("terms"),
      href: "/terms",
    },
    {
      label: t("privacyPolicy"),
      href: "/privacy-policy",
    },
    {
      label: t("refundPolicy"),
      href: "/refund-policy",
    },
  ];
  const pageLinks = [
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("aboutUs"),
      href: "/about-us",
    },
    {
      label: t("buyEsim"),
      href: "/esim",
    },

    {
      label: t("blog"),
      href: "/blog",
    },
  ];

  const otherLinks = [
    {
      label: t("esimCompatible"),
      href: "/esim-compatible/",
    },
    {
      label: t("faqs"),
      href: "/faqs/",
    },
  ];

  const supportLinks = [
    {
      href: `https://wa.me/${Number(support.phone)}`,
      children: (
        <>
          <p className="text-body-base">{support.phone}</p>
        </>
      ),
    },
    {
      href: `mailto:${support.email}`,
      children: (
        <>
          <div className="flex items-center gap-1 text-body-base">
            <p>{support.email}</p>
            <span className="text-sm ml-2"> | General</span>
          </div>
        </>
      ),
    },
    {
      href: "",
      children: (
        <>
          <p className="text-body-base">
            501 Silverside Rd, Ste 105-2042, Wilmington, DE 19809 USA
          </p>
        </>
      ),
    },
  ];
  const { paymentMethods, popularDestinationsLinks, socialLinks } =
    footerLinksData;
  return (
    <footer className="container mt-16 border-t-2 bg-background px-8 pt-8">
      <div className="grid grid-cols-6 gap-6 md:grid-cols-6 md:gap-0 xl:grid-cols-9">
        <div className="md:col-span-2  col-span-3 ">
          <div className="group flex flex-col gap-9">
            <FooterLogo />
          </div>
          <div className="mt-5">
            <SmallSocialsButtons appLink={appLink} />
          </div>
          <p className="hidden md:block text-base mt-5 text-muted-foreground">
            {t("links")}
          </p>
          <div className="hidden md:block mt-5 flex-col gap-4">
            {pageLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <p className="text-base mt-5 block text-muted-foreground md:hidden">
            {t("popularDestinations")}
          </p>
          <div className="mt-5 block flex-col gap-4 md:hidden">
            {popularDestinationsLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="col-span-3 mt-30 md:mt-8 ml-6 md:ml-0 md:col-span-2 xl:col-span-2 xl:mt-0">
          <p className="text-base hidden md:block text-muted-foreground">
            {t("popularDestinations")}
          </p>
          <div className="hidden md:block mt-5 flex-col gap-4">
            {popularDestinationsLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
          <p className="md:hidden block text-base mt-5 text-muted-foreground">
            {t("links")}
          </p>
          <div className="md:hidden block mt-5 flex-col gap-4">
            {pageLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="col-span-3 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0">
          <p className="text-base text-muted-foreground">{t("support")}</p>
          <div className="mt-5 flex-col gap-4">
            {otherLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        <div className="col-span-6 mt-8 md:col-span-2 xl:col-span-3 xl:mt-0">
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-body-sm text-muted-foreground">
              {t("contactInfo")}
            </p>

            {supportLinks.map((item, index) => (
              <FooterLink
                key={index}
                href={item.href}
                rel="noopener noreferrer"
                className="items-start"
              >
                {item.children}
              </FooterLink>
            ))}
          </div>
          <div className="flex items-center mt-5 gap-10">
            {socialLinks.map((item, index) => (
              <FooterLink
                href={item.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.children}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-24 mt-5 flex flex-col gap-y-10 md:mb-10 md:mt-10 xl:grid xl:grid-cols-3">
        <Suspense>
          <CopyrightText />
        </Suspense>

        <div className="hidden items-center gap-6 xl:flex">
          {paymentMethods.map((item, index) => (
            <Image
              src={item.imgSrc}
              height={30}
              width={35}
              alt={item.name}
              key={index}
              sizes="auto"
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-6">
          {policyLinks.map((item, index) => (
            <FooterLink key={index} href={item.href} className="text-sm">
              {item.label}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
