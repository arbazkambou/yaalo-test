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
  affiliatePartner: Metadata;
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
      title: "Buy Best Prepaid Yaalo eSIM for International Travel",
      description:
        "Get the best Yaalo eSIM for international travel for iPhone, iPad, and Android. Affordable Plans, Instant activation, Buy eSIM, activate, and connect instantly.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: HOST,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "article",
      },

      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
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
      title: "Buy Local eSIM for 200+ Countries | 5G Unlimited Data",
      description:
        "Get Yaalo eSIM for 5G global coverage in 200+ destinations. Roam freely without fees – fast, flexible, and affordable worldwide connectivity!",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM - Explore Plans for 200+ Destinations",
        description:
          "Stay connected anywhere with Yaalo eSIM. Buy prepaid travel eSIMs for 200+ destinations with instant setup, local rates, and no roaming fees.",
        url: `${HOST}destinations/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM - Explore Plans for 200+ Destinations",
        description:
          "Stay connected anywhere with Yaalo eSIM. Buy prepaid travel eSIMs for 200+ destinations with instant setup, local rates, and no roaming fees.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}destinations/`,
        languages: {
          "en-US": `${HOST}destinations/`,
          en: `${HOST}destinations/`,
          "x-default": `${HOST}destinations/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    esimCompatible: {
      title: "List of eSIM Compatible Devices (2026) |  Android & Iphones",
      description:
        "Explore the Complete list of eSIM Compatible devices that supports eSIMs, weather its Android and Iphone. From Latest to older Models",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim phone, esim compatible, iPhone, Samsung, Huawei, Motorola",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        url: `${HOST}esim-compatible-devices//`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}esim-compatible-devices//`,
        languages: {
          "en-US": `${HOST}esim-compatible/`,
          en: `${HOST}esim-compatible-devices//`,
          "x-default": `${HOST}esim-compatible-devices//`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    faqs: {
      title: "Yaalo eSIM FAQs - Your Tavel eSIM Questions Answered",
      description:
        "Yaalo eSIM's help guide. Find the answers to your commen eSIM questions at Yaalo eSIM. Get guidance on activation, compatibility, coverage, and troubleshooting.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - FAQs",
        description: "Get answers to all your questions",
        url: `${HOST}faq/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - FAQs",
        description: "Get answers to all your questions",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}faq/`,
        languages: {
          "en-US": `${HOST}faq/`,
          en: `${HOST}faq/`,
          "x-default": `${HOST}faq/`,
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
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        url: `${HOST}help-center/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}help-center/`,
        languages: {
          "en-US": `${HOST}help-center/`,
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
      title: "About Yaalo eSIM - Your Trusted eSIM Provider Worldwide",
      description:
        "Yaalo eSIM Provides reliable, low-cost eSIMs for international travel. Affordable eSIM plans in 200+ countries. Fast and reliable global coverage.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim, yaalo about",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "About Yaalo eSIM | Global Travel, Local Freedom",
        description:
          "Discover Yaalo! A travel eSIM redefining global connectivity. Activate in minutes, no roaming fee, and 24/7 support in 200+ destinations worldwide.",
        url: `${HOST}about-us/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "About Yaalo eSIM | Global Travel, Local Freedom",
        description:
          "Discover Yaalo! A travel eSIM redefining global connectivity. Activate in minutes, no roaming fee, and 24/7 support in 200+ destinations worldwide.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}about-us/`,
        languages: {
          "en-US": `${HOST}about-us/`,
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
      title: "Yaalo eSIM Blog: eSIM Tips, Compatibilty, Iphone and android",
      description:
        "Learn what is eSIM and how it works. How to Buy eSIM for International Travel. Tips & troubleshooting for esim iphone, esim android, compatibility.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with Yaalo blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        url: `${HOST}blog/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/storage/images/background/blog-banner.png",
        type: "article",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with Yaalo blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        images: "https://yaalo.com/storage/images/background/blog-banner.png",
      },
      alternates: {
        canonical: `${HOST}blog/`,
        languages: {
          "en-US": `${HOST}blog/`,
          en: `${HOST}blog/`,
          "x-default": `${HOST}blog/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },
    affiliatePartner: {
      title: "Join the Yaalo eSIM Affiliate Program | Earn Up to 20%",
      description:
        "Join the Yaalo eSIM affiliate program and earn up to 20% commission by promoting travel eSIM data plans. Real-time tracking, monthly payouts, and easy setup.",
      keywords:
        " earn profit, affiliate partner, partner eSIM, become a partner, affiliate",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Join the Yaalo eSIM Affiliate Program | Earn Up to 20%",
        description:
          "Join the Yaalo eSIM affiliate program and earn up to 20% commission by promoting travel eSIM data plans. Real-time tracking, monthly payouts, and easy setup.",
        url: `${HOST}affiliate-partner/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/sharingbanner.png",
        type: "article",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Join Yaalo eSIM Affiliate Program | Earn 20% Commission",
        description:
          "Partner with Yaalo to promote the best international eSIM plans. High conversion rates, dedicated support, and monthly payouts for travel creators.",
        images: "https://yaalo.com/images/sharingbanner.png",
      },
      alternates: {
        canonical: `${HOST}affiliate-partner/`,
        languages: {
          "en-US": `${HOST}affiliate-partner/`,
          en: `${HOST}affiliate-partner/`,
          "x-default": `${HOST}affiliate-partner/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    contactUs: {
      title: "Contact Yaalo eSIM Support - We're Here to Help You Anytime",
      description:
        "Have questions about your eSIM? Reach out to Yaalo eSIM for support and queries for quick assistance with activation and travel plans 24/7. Contact us today!",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim contact, esim info",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - Contact Us",
        description: "Contact us anytime, anywhere",
        url: `${HOST}contact-us/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Contact Us",
        description: "Contact us anytime, anywhere",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}contact-us/`,
        languages: {
          "en-US": `${HOST}contact-us/`,
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
      title: "Yaalo - Careers",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}careers/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}careers/`,
        languages: {
          "en-US": `${HOST}careers/`,
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
        "Yaalo Terms: Secure Global eSIM Services, Refund & Privacy Policies",
      description:
        "Read Yaalo's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title:
          "Yaalo Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read Yaalo's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        url: `${HOST}terms-of-service/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title:
          "Yaalo Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read Yaalo's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}terms-of-service/`,
        languages: {
          "en-US": `${HOST}terms-of-service/`,
          en: `${HOST}terms-of-service/`,
          "x-default": `${HOST}terms-of-service/`,
        },
      },
      other: {
        "p:domain_verify": "55184d7662744963d2c3e924b4cf0db7",
        "facebook-domain-verification": "0tw05xr8exbbz8a4mwa77jrl644hbn",
      },
    },

    privacyPolicy: {
      title: "Yaalo Privacy Policy: Protecting Your Personal Data & Security",
      description:
        "Learn how Yaalo collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how Yaalo collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        url: `${HOST}privacy-policy/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how Yaalo collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}privacy-policy/`,
        languages: {
          "en-US": `${HOST}privacy-policy/`,
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
      title: "Yaalo Refund Policy: Clear Guidelines for Refunds & Eligibility",
      description:
        "Yaalo refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title:
          "Yaalo Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "Yaalo refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        url: `${HOST}refund-policy/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title:
          "Yaalo Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "Yaalo refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}refund-policy/`,
        languages: {
          "en-US": `${HOST}refund-policy/`,
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
      title: "Login to Account - Access Account & eSIM Profile | Yaalo",
      description:
        "Securely sign in to your Yaalo account. Manage your personal dashboard, track current orders, view purchase history, and update your preferences.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: `${HOST}login/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}login/`,
        languages: {
          "en-US": `${HOST}login/`,
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
      title: "Create New Account - Register for Benefits | Yaalo",
      description:
        "Join the Yaalo community. Create a free account to enjoy faster checkout, real-time order tracking, and exclusive member-only offers.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: `${HOST}register/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
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
      title: "Reset Password - Recover Account Access | Yaalo",
      description:
        "Forgot your credentials? Initiate a secure password reset for your Yaalo account. Verify your identity and restore access to your profile immediately.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: `${HOST}password/reset/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}password/reset/`,
        languages: {
          "en-US": `${HOST}password/reset/`,
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
      title: "Yaalo - Refill Wallet",
      description: "Refill your Yaalo Wallet with Card or Apple Pay",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, yaalo, refill, buy bundle, buy package",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - Refill Wallet",
        description: "Refill your Yaalo Wallet with Card or Apple Pay",
        url: `${HOST}refill/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Refill Wallet",
        description: "Refill your Yaalo Wallet with Card or Apple Pay",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}refill/`,
        languages: {
          "en-US": `${HOST}refill/`,
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
      title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
      description:
        "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: `${HOST}my-esims/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}my-esims/`,
        languages: {
          "en-US": `${HOST}my-esims/`,
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
      title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
      description:
        "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        url: `${HOST}client/my-esim/3f097524-9311-4f10-a466-fe3887fca9b2/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Purchase Yaalo eSIM Services Online - For 200+ Destinations",
        description:
          "Buying a Yaalo esim online is so easy. 4G/5G data in 200+ destinations worldwide. Goodbye to Roaming forever. Available for iPhone & Android travellers. Get an App!",
        images: "https://yaalo.com/images/logo.png",
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
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        url: `${HOST}regional/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}regional/`,
        languages: {
          "en-US": `${HOST}regional/`,
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
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        url: `${HOST}global/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}global/`,
        languages: {
          "en-US": `${HOST}global/`,
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
      title: "Your Shopping Cart - Review Items & Secure Checkout | Yaalo",
      description:
        "Review selected items in your Yaalo shopping cart. Finalize your purchase with our secure checkout process, manage quantities, and view shipping options.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - Checkout",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}cart/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Checkout",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}cart/`,
        languages: {
          "en-US": `${HOST}cart/`,
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
      title: "Yaalo - Redeem Your Sim",
      description: "Redeem Your Sim and View Bundle Details",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity,Yaalo,refill,buy bundle,buy package,redeeem",
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Yaalo - Redeem Your Sim",
        description: "Redeem Your Sim and View Bundle Details",
        url: `${HOST}redeem/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Redeem Your Sim",
        description: "Redeem Your Sim and View Bundle Details",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}redeem/`,
        languages: {
          "en-US": `${HOST}redeem/`,
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
      authors: [{ name: "yaalo.com" }],
      openGraph: {
        title: "Thank You",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: `${HOST}sim-buy-thank-you/`,
        siteName: SITE_NAME,
        images: "https://yaalo.com/images/logo.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@yaalo",
        title: "Yaalo - Thank You",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://yaalo.com/images/logo.png",
      },
      alternates: {
        canonical: `${HOST}sim-buy-thank-you/`,
        languages: {
          "en-US": `${HOST}sim-buy-thank-you/`,
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
  //       "Yaalo : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //     description:
  //       "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Yaalo. Obtenez votre eSIM dès maintenant",
  //     keywords:
  //       "eSIM, acheter eSIM, eSIM régional, eSIM local, acheter eSIM régional, acheter eSIM local, données eSIM, plan eSIM, boutique eSIM, marché eSIM, voyage, forfait data, eSIM pas cher, connectivité",
  //     authors: [{ name: "yaalo.com" }],
  //     openGraph: {
  //       title:
  //         "Yaalo : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Yaalo. Obtenez votre eSIM dès maintenant",
  //       url: `${HOST}",
  //      siteName:HOST,
  //       images: "https://yaalo.com/images/logo.png",
  //       type: "website",
  //     },
  //     twitter: {
  //       card: "summary",
  //       site: "@yaalo",
  //       title:
  //         "Yaalo : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec Yaalo. Obtenez votre eSIM dès maintenant",
  //       images: "https://yaalo.com/images/logo.png",
  //     },
  //     alternates: {
  //        canonical: `${HOST}",
  //     },
  //   },
  // },
};
