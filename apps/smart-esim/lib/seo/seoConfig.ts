import { HOST, SITE_NAME } from "@workspace/core/constants/host.constants";
import type { Metadata } from "next";

interface LocalizedSeo {
  home: Metadata;
  esim: Metadata;
  esimCompatible: Metadata;
  faqs: Metadata;
  helpCenter: Metadata;
  aboutUs: Metadata;
  blog: Metadata;
  contactUs: Metadata;
  careers: Metadata;
  terms: Metadata;
  privacyPolicy: Metadata;
  refundPolicy: Metadata;
  login: Metadata;
  register: Metadata;
  passwordReset: Metadata;
  refill: Metadata;
  mySims: Metadata;
  mySimDetail: Metadata;
  regionalEsim: Metadata;
  globalEsim: Metadata;
  cart: Metadata;
  redeem: Metadata;
  thankYou: Metadata;
}

export const seoData: Record<"en", LocalizedSeo> = {
  en: {
    home: {
      title:
        "Smart eSIM - Instant Travel eSIM for 200+ Countries | Fast 4G/5G Data",
      description:
        "Get fast, reliable 4G/5G data in 200+ countries with Smart eSIM. No roaming fees, quick activation, and secure global connectivity for every trip.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        url: HOST,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "article",
      },

      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: HOST,
        languages: {
          "en-US": HOST,
          en: HOST,
          "x-default": HOST,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    esim: {
      title: "Buy Smart eSIM for Travel | Instant Global Mobile Data",
      description:
        "Get your Smart eSIM for any country, region, or Global venture. Activate in minutes, skip roaming fees, and stay connected worldwide with fast, reliable travel data.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Local eSIM for 200+ Countries: Affordable, Prepaid Travel Data",
        description:
          "Get prepaid local eSIMs for 200+ countries at local rates. Enjoy seamless, affordable data connectivity for your travels with our reliable eSIM service",
        url: `${HOST}esim/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Local eSIM for 200+ Countries: Affordable, Prepaid Travel Data",
        description:
          "Get prepaid local eSIMs for 200+ countries at local rates. Enjoy seamless, affordable data connectivity for your travels with our reliable eSIM service",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}esim/`,
        languages: {
          "en-US": `${HOST}/esim/`,
          en: `${HOST}esim/`,
          "x-default": `${HOST}esim/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    esimCompatible: {
      title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
      description:
        "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim phone, esim compatible, iPhone, Samsung, Huawei, Motorola",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        url: `${HOST}esim-compatible/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}esim-compatible/`,
        languages: {
          "en-US": `${HOST}/esim-compatible/`,
          en: `${HOST}esim-compatible/`,
          "x-default": `${HOST}esim-compatible/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    faqs: {
      title: "Smart eSIM FAQs: Setup, Activation, Coverage, and Support",
      description:
        "Find answers about Smart eSIM setup, activation steps, supported phones, security, data usage, travel coverage, and troubleshooting to stay connected confidently worldwide.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - FAQs",
        description: "Get answers to all your questions",
        url: `${HOST}faqs/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - FAQs",
        description: "Get answers to all your questions",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}faqs/`,
        languages: {
          "en-US": `${HOST}/faqs/`,
          en: `${HOST}faqs/`,
          "x-default": `${HOST}faqs/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    helpCenter: {
      title: "eSIM Help Center: Comprehensive Support for eSIM Users",
      description:
        "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        url: `${HOST}help-center/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}help-center/`,
        languages: {
          "en-US": `${HOST}/help-center/`,
          en: `${HOST}help-center/`,
          "x-default": `${HOST}help-center/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    aboutUs: {
      title: "About Smart eSIM - Trusted Global Travel eSIM Provider",
      description:
        "Smart eSIM keeps travelers connected with fast, secure mobile data in 200+ countries. No roaming fees, no SIM cards. Just instant, affordable global connectivity.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim, Smart eSIM about",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - About Us",
        description: "Know About Smart eSIM",
        url: `${HOST}about-us/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - About Us",
        description: "Know About Smart eSIM",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}about-us/`,
        languages: {
          "en-US": `${HOST}/about-us/`,
          en: `${HOST}about-us/`,
          "x-default": `${HOST}about-us/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    blog: {
      title: "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
      description:
        "Stay informed with Smart eSIM blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with Smart eSIM blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        url: `${HOST}blog/`,
        siteName: SITE_NAME,
        images:
          "https://smartesim.com/storage/images/background/blog-banner.png",
        type: "article",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with Smart eSIM blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        images:
          "https://smartesim.com/storage/images/background/blog-banner.png",
      },
      alternates: {
        canonical: `${HOST}blog/`,
        languages: {
          "en-US": `${HOST}/blog/`,
          en: `${HOST}blog/`,
          "x-default": `${HOST}blog/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    contactUs: {
      title: "Smart eSIM Support | Contact Us for Travel eSIM Help",
      description:
        "Need help with activation, plans, or eSIM setup? Contact Smart eSIM for fast, friendly travel support. Live chat, email assistance, and quick responses worldwide.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim contact, esim info",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - Contact Us",
        description: "Contact us anytime, anywhere",
        url: `${HOST}contact-us/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Contact Us",
        description: "Contact us anytime, anywhere",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}contact-us/`,
        languages: {
          "en-US": `${HOST}/contact-us/`,
          en: `${HOST}contact-us/`,
          "x-default": `${HOST}contact-us/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    careers: {
      title: "Smart eSIM - Careers",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}careers/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}careers/`,
        languages: {
          "en-US": `${HOST}/careers/`,
          en: `${HOST}careers/`,
          "x-default": `${HOST}careers/`,
        },
      },

      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    terms: {
      title:
        "Smart eSIM Terms: Secure Global eSIM Services, Refund & Privacy Policies",
      description:
        "Read Smart eSIM's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title:
          "Smart eSIM Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read Smart eSIM's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        url: `${HOST}terms/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title:
          "Smart eSIM Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read Smart eSIM's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}terms/`,
        languages: {
          "en-US": `${HOST}/terms/`,
          en: `${HOST}terms/`,
          "x-default": `${HOST}terms/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    privacyPolicy: {
      title:
        "Smart eSIM Privacy Policy: Protecting Your Personal Data & Security",
      description:
        "Learn how Smart eSIM collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title:
          "Smart eSIM Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how Smart eSIM collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        url: `${HOST}privacy-policy/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title:
          "Smart eSIM Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how Smart eSIM collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}privacy-policy/`,
        languages: {
          "en-US": `${HOST}/privacy-policy/`,
          en: `${HOST}privacy-policy/`,
          "x-default": `${HOST}privacy-policy/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    refundPolicy: {
      title:
        "Smart eSIM Refund Policy: Clear Guidelines for Refunds & Eligibility",
      description:
        "Smart eSIM refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title:
          "smart Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "smart refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        url: `${HOST}refund-policy/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title:
          "smart eSIM Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "smart eSIM refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}refund-policy/`,
        languages: {
          "en-US": `${HOST}/refund-policy/`,
          en: `${HOST}refund-policy/`,
          "x-default": `${HOST}refund-policy/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    login: {
      title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with smart eSIM. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with smartesim. Get your desired eSIM now",
        url: `${HOST}login/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}login/`,
        languages: {
          "en-US": `${HOST}/login/`,
          en: `${HOST}login/`,
          "x-default": `${HOST}login/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    register: {
      title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        url: `${HOST}register/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@Smart eSIM",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}register/`,
        languages: {
          "en-US": `${HOST}register/`,
          en: `${HOST}register/`,
          "x-default": `${HOST}register/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    passwordReset: {
      title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        url: `${HOST}password/reset/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}password/reset/`,
        languages: {
          "en-US": `${HOST}/password/reset/`,
          en: `${HOST}password/reset/`,
          "x-default": `${HOST}password/reset/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    refill: {
      title: "Smart eSIM - Refill Wallet",
      description: "Refill your Smart eSIM Wallet with Card or Apple Pay",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, Smart eSIM, refill, buy bundle, buy package",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - Refill Wallet",
        description: "Refill your Smart eSIM Wallet with Card or Apple Pay",
        url: `${HOST}refill/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Refill Wallet",
        description: "Refill your Smart eSIM Wallet with Card or Apple Pay",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}refill/`,
        languages: {
          "en-US": `${HOST}/refill/`,
          en: `${HOST}refill/`,
          "x-default": `${HOST}refill/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    mySims: {
      title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        url: `${HOST}my-esims/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}my-esims/`,
        languages: {
          "en-US": `${HOST}/my-esims/`,
          en: `${HOST}my-esims/`,
          "x-default": `${HOST}my-esims/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    mySimDetail: {
      title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        url: `${HOST}client/my-esim/3f097524-9311-4f10-a466-fe3887fca9b2/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with Smart eSIM. Get your desired eSIM now",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}/my-esim/3f097524-9311-4f10-a466-fe3887fca9b2/`,
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    regionalEsim: {
      title: "Regional eSIMs: Affordable Data for 200+ Countries",
      description:
        "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        url: `${HOST}regional/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}regional/`,
        languages: {
          "en-US": `${HOST}/regional/`,
          en: `${HOST}regional/`,
          "x-default": `${HOST}regional/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    globalEsim: {
      title: "Get International eSIM for Traveler | Prepaid Data Plans",
      description:
        "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        url: `${HOST}global/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}global/`,
        languages: {
          "en-US": `${HOST}/global/`,
          en: `${HOST}global/`,
          "x-default": `${HOST}global/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    cart: {
      title: "Smart eSIM - Checkout",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - Checkout",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}cart/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Checkout",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}cart/`,
        languages: {
          "en-US": `${HOST}/cart/`,
          en: `${HOST}cart/`,
          "x-default": `${HOST}cart/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    redeem: {
      title: "Smart eSIM - Redeem Your Sim",
      description: "Redeem Your Sim and View Bundle Details",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity,Smart eSIM,refill,buy bundle,buy package,redeeem",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Smart eSIM - Redeem Your Sim",
        description: "Redeem Your Sim and View Bundle Details",
        url: `${HOST}redeem/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Redeem Your Sim",
        description: "Redeem Your Sim and View Bundle Details",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}redeem/`,
        languages: {
          "en-US": `${HOST}/redeem/`,
          en: `${HOST}redeem/`,
          "x-default": `${HOST}redeem/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    thankYou: {
      title: "Thank You",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "smartesim.com" }],
      openGraph: {
        title: "Thank You",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}sim-buy-thank-you/`,
        siteName: SITE_NAME,
        images: "https://smartesim.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@smartesim",
        title: "Smart eSIM - Thank You",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://smartesim.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: `${HOST}sim-buy-thank-you/`,
        languages: {
          "en-US": `${HOST}/sim-buy-thank-you/`,
          en: `${HOST}sim-buy-thank-you/`,
          "x-default": `${HOST}sim-buy-thank-you/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },
  },
  // fr: {
  //   home: {
  //     title:
  //       "Smart eSIM : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //     description:
  //       "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Smart eSIM. Obtenez votre eSIM dès maintenant",
  //     keywords:
  //       "eSIM, acheter eSIM, eSIM régional, eSIM local, acheter eSIM régional, acheter eSIM local, données eSIM, plan eSIM, boutique eSIM, marché eSIM, voyage, forfait data, eSIM pas cher, connectivité",
  //     authors: [{ name: "Smart eSIM.com" }],
  //     openGraph: {
  //       title:
  //         "Smart eSIM : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Smart eSIM. Obtenez votre eSIM dès maintenant",
  //       url: `${HOST}",
  //      siteName:HOST,
  //       images: "https://Smart eSIM.com/images/logo-1x1-new.png",
  //       type: "website",
  //     },
  //     twitter: {
  //       card: "summary",
  //       site: "@Smart eSIM",
  //       title:
  //         "Smart eSIM : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Smart eSIM. Obtenez votre eSIM dès maintenant",
  //       images: "https://Smart eSIM.com/images/logo-1x1-new.png",
  //     },
  //     alternates: {
  //        canonical: `${HOST}",
  //     },
  //   },
  // },
};
