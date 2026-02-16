import logo from "@/assets/logos/yaalo-logo-dark.svg";
import logoDark from "@/assets/logos/yaalo-light-logo.svg";
import { Building2, footerLinksData, HeartPlus } from "@/constants/UIData";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import SocialsButtons from "../ui/buttons/SocialsButtons";
import FooterLink from "../ui/links/FooterLink";
import CopyrightText from "./CopyrightText";
import { Suspense } from "react";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";
import { getTranslations } from "next-intl/server";
import { Headset, MapPin, Phone, Tags } from "lucide-react";

async function Footer() {
  const { support } = await getAppSettings();
  const t = await getTranslations("SharedUI.footerLinks");
  const policyLinks = [
    {
      label: t("terms"),
      href: "/terms-of-service",
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
      href: "/destinations",
    },
    {
      label: t("affiliatePartner"),
      href: "/affiliate-partner/",
    },

    {
      label: t("blog"),
      href: "/blog",
    },
  ];

  const otherLinks = [
    {
      label: t("esimCompatible"),
      href: "/esim-compatible-devices/",
    },
    {
      label: t("faqs"),
      href: "/faq/",
    },
    // {
    //   label: "Help Center",
    //   href: "/help-center/",
    // },
    // {
    //   label: "Redeem eSIM",
    //   href: "/redeem/",
    // },

    // {
    //   label: "What is an eSIM",
    //   href: "/blog/info/what-is-esim/",
    // },
  ];
  const popularDestinationsLinks = [
    {
      href: "/esim-united-states",
      label: t("popularDestinationsLinks.us"),
    },
    {
      href: "/esim-canada",
      label: t("popularDestinationsLinks.canada"),
    },
    {
      href: "/esim-united-kingdom",
      label: t("popularDestinationsLinks.uk"),
    },
    {
      href: "/esim-japan",
      label: t("popularDestinationsLinks.japan"),
    },
    {
      href: "/esim-indonesia",
      label: t("popularDestinationsLinks.indonesia"),
    },
    {
      href: "/esim-italy",
      label: t("popularDestinationsLinks.italy"),
    },
    {
      href: "/esim-turkey",
      label: t("popularDestinationsLinks.turkey"),
    },
    {
      href: "/esim-france",
      label: t("popularDestinationsLinks.france"),
    },
    {
      href: "/esim-spain",
      label: t("popularDestinationsLinks.spain"),
    },
  ];

  const supportLinks = [
    {
      href: "",
      children: (
        <>
          <Building2 className="h-6 w-6" />
          <p className="text-base">Yaalo LLC</p>
        </>
      ),
    },

    {
      href: `https://wa.me/${Number(support.phone)}`,
      children: (
        <>
          <Phone className="h-6 w-6" />
          <p className="text-body-base">{support.phone}</p>
        </>
      ),
    },
    {
      href: "mailto:support@yaalo.com",
      children: (
        <>
          <HeartPlus className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>support@yaalo.com</p>
            <p className="text-muted-foreground/40">
              {" "}
              | {t("supportLinks.general")}
            </p>
          </div>
        </>
      ),
    },
    {
      href: "mailto:tickets@yaalo.com",
      children: (
        <>
          <Headset className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>tickets@yaalo.com</p>
            <p className="text-muted-foreground/40">
              {" "}
              | {t("supportLinks.support")}
            </p>
          </div>
        </>
      ),
    },
    {
      href: "mailto:sales@yaalo.com",
      children: (
        <>
          <Tags className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>sales@yaalo.com</p>
            <p className="text-muted-foreground/40">
              {" "}
              | {t("supportLinks.business")}
            </p>
          </div>
        </>
      ),
    },
    {
      href: "",
      children: (
        <>
          <MapPin className="h-6 w-6 shrink-0" />
          <p className="text-body-base">{t("supportLinks.yaaloAddress")}</p>
        </>
      ),
    },
  ];

  const { paymentMethods, socialLinks } = footerLinksData(support.phone);
  return (
    <footer className="container-fluid mt-16">
      <div className="container bg-muted rounded-none sm:rounded-4xl p-10 mb-[7rem] xl:mb-2!">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 xl:grid-cols-12">
          <div className="col-span-3 md:col-span-2 xl:col-span-3">
            <div className="group flex flex-col xl:gap-5 md:gap-0">
              <Link className="relative h-[57px] w-[167px]" href={"/"}>
                <Image
                  src={logo}
                  alt="Yaalo Logo"
                  fill
                  sizes="auto"
                  className="object-cover dark:hidden"
                />
                <Image
                  src={logoDark}
                  alt="Yaalo Logo"
                  fill
                  sizes="auto"
                  className="object-cover dark:flex hidden"
                />
              </Link>
              <div className="xl:block">
                <p className="text-body-lg text-muted-foreground my-3 font-600">
                  {t("followus")}
                </p>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((item, index) => (
                    <div key={index}>
                      <FooterLink
                        href={item.href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:text-muted-foreground"
                      >
                        <span className="bg-primary/20 rounded-4xl p-1">
                          {item.children}
                        </span>{" "}
                        {item.label}
                      </FooterLink>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex xl:hidden">
                <div className="col-span-3 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0">
                  <p className="text-body-xl text-muted-foreground font-600">
                    {t("popularDestinations")}
                  </p>
                  <div className="mt-5 flex-col flex gap-2">
                    {popularDestinationsLinks.map((item, index) => (
                      <FooterLink
                        href={item.href}
                        key={index}
                        className="text-muted-foreground"
                      >
                        {item.label}
                      </FooterLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* {supportLinks.map((item, index) => (
                <FooterLink
                  key={index}
                  href={item.href}
                  rel="noopener noreferrer"
                  className="items-start"
                  target="_blank"
                >
                  {item.children}
                </FooterLink>
              ))} */}
            </div>
          </div>
          <div className="hidden xl:block xl:col-span-2 -ml-[35px] ">
            <div className="col-span-3 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0 ">
              <p className="text-body-md text-muted-foreground font-bold">
                {t("popularDestinations")}
              </p>
              <div className="mt-5 flex-col flex gap-2">
                {popularDestinationsLinks.map((item, index) => (
                  <FooterLink
                    href={item.href}
                    key={index}
                    className="text-muted-foreground"
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-6 mt-8 md:mt-[88px] md:col-span-2 xl:col-span-3 xl:mt-0">
            <div className="">
              <p className="text-body-md text-muted-foreground font-bold ">
                {t("links")}
              </p>
              <div className="mt-5 flex-col flex gap-2">
                {pageLinks.map((item, index) => (
                  <FooterLink
                    href={item.href}
                    key={index}
                    className="text-muted-foreground"
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="mt-5 hidden xl:block">
              {/* <div className="col-span-6 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0"> */}
              <p className="text-body-md text-muted-foreground font-bold ">
                {t("support")}
              </p>
              <div className="mt-3 flex-col flex gap-2">
                {otherLinks.map((item, index) => (
                  <FooterLink
                    href={item.href}
                    key={index}
                    className="text-muted-foreground"
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex xl:hidden">
            <div className="col-span-6 mt-8 md:mt-[88px] md:col-span-3 xl:col-span-2 xl:mt-0">
              <p className="text-body-md text-muted-foreground font-bold ">
                {t("support")}
              </p>
              <div className="mt-3 flex-col flex gap-2">
                {otherLinks.map((item, index) => (
                  <FooterLink
                    href={item.href}
                    key={index}
                    className="text-muted-foreground"
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 col-span-6 md:col-span-4 xl:col-span-4">
            <p className="mb-2 text-body-md text-muted-foreground font-bold ">
              {t("contactInfo")}
            </p>

            {supportLinks.map((item, index) => (
              <FooterLink
                key={index}
                href={item.href}
                rel="noopener noreferrer"
                className="items-start text-muted-foreground"
              >
                {item.children}
              </FooterLink>
            ))}

            <div>
              <SocialsButtons />
            </div>
          </div>
        </div>
        <div className="flex xl:hidden">
          <div className="container">
            <div className="mt-5 flex flex-col gap-y-10 xl:grid xl:grid-cols-3">
              <Suspense>
                <CopyrightText />
              </Suspense>
              <div className="flex items-center justify-between gap-6">
                {policyLinks.map((item, index) => (
                  <FooterLink key={index} href={item.href} className="text-sm">
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-muted rounded-pill py-[5px] md:py-3 px-5 mb-10 hidden xl:block xl:px-10">
        <div className="mb-24 mt-5 flex flex-col gap-y-10 md:mb-5 md:mt-5 xl:grid xl:grid-cols-3">
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
      </div>
    </footer>
  );
}

export default Footer;
