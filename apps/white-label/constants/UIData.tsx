import amazonExpressPay from "@/assets/svgs/americanExpressPay.svg";
import googlePay from "@/assets/svgs/applePay.svg";
import appStore from "@/assets/svgs/appStore.svg";
import client1 from "@/assets/svgs/client1.svg";
import client2 from "@/assets/svgs/client2.svg";
import client3 from "@/assets/svgs/client3.svg";
import client4 from "@/assets/svgs/client4.svg";
import client5 from "@/assets/svgs/client5.svg";
import client6 from "@/assets/svgs/client6.svg";
import clock from "@/assets/svgs/clock.svg";
import earth from "@/assets/svgs/earth.svg";
import applePay from "@/assets/svgs/googlePay.svg";
import masterPay from "@/assets/svgs/masterPay.svg";
import playStore from "@/assets/svgs/playStore.svg";
import sim from "@/assets/svgs/sim.svg";
import trophy from "@/assets/svgs/trophy.svg";
import visaPay from "@/assets/svgs/visaPay.svg";
import { PartnerReview } from "@/components/ui/sections/Reviews";
import {
  AboutFeatureKey,
  AboutusFeatures,
  AdvantageCard,
  EsimFeatureKey, SlugAdvantageCard,
} from "@/types/keys";
import {
  Clock,
  CloudLightning,
  DollarSign,
  Facebook,
  Factory,
  Gift,
  Globe,
  HandHeart,
  Handshake,
  Headphones,
  Headset,
  Instagram,
  LayoutGrid,
  Leaf,
  LineChartIcon,
  Linkedin,
  List,
  Lock,
  MapPin,
  Phone,
  PhoneIncoming,
  Plane,
  RadioTower,
  Rocket,
  ShieldCheckIcon,
  Signal,
  Smile,
  Tags,
  UserRound,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

type EsimFeature = {
  imgSrc: string;
  key: EsimFeatureKey;
};

export const eSimFeaturesData: EsimFeature[] = [
  {
    key: "Local",
    imgSrc: earth,
  },
  {
    key: "Plug",
    imgSrc: clock,
  },
  {
    key: "Buy",
    imgSrc: trophy,
  },
  {
    key: "Support",
    imgSrc: sim,
  },
];

type AboutFeature = {
  key: AboutFeatureKey;
};

export const aboutFeaturesKeys: AboutFeature[] = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
];

export const whyeSimCardsData: AdvantageCard[] = [
  {
    icon: <Handshake size={36} />,
    key: "1",
  },
  {
    icon: <Factory size={36} />,
    key: "2",
  },
  {
    icon: <RadioTower size={36} />,
    key: "3",
  },
  {
    icon: <UserRound size={36} />,
    key: "4",
  },
  {
    icon: <Smile size={36} />,
    key: "5",
  },
  {
    icon: <LayoutGrid size={36} />,
    key: "6",
  },
];

export const esimPageFeatureData: AdvantageCard[] = [
  {
    key: "1",
    icon: <Lock className="h-10 w-10" />,
  },
  {
    key: "2",
    icon: <Tags className="h-10 w-10" />,
  },
  {
    key: "3",
    icon: <HandHeart className="h-10 w-10" />,
  },
  {
    key: "4",
    icon: <Globe className="h-10 w-10" />,
  },
  {
    key: "5",
    icon: <Gift className="h-10 w-10" />,
  },
  {
    key: "6",
    icon: <Headphones className="h-10 w-10" />,
  },
];

export const regionalPageFeaturesData: AdvantageCard[] = [
  {
    icon: <Globe className="h-10 w-10" />,
    key: "1",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    key: "2",
  },
  {
    icon: <Signal className="h-10 w-10" />,
    key: "3",
  },
  {
    icon: <Plane className="h-10 w-10" />,
    key: "4",
  },
  {
    icon: <List className="h-10 w-10" />,
    key: "5",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    key: "6",
  },
];

export const globalFeatureData: AdvantageCard[] = [
  {
    icon: <Lock className="h-10 w-10" />,
    key: "1",
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    key: "2",
  },
  {
    icon: <CloudLightning className="h-10 w-10" />,
    key: "3",
  },
  {
    icon: <LineChartIcon className="h-10 w-10" />,
    key: "4",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    key: "5",
  },
  {
    icon: <ShieldCheckIcon className="h-10 w-10" />,
    key: "6",
  },
];

export const aboutUsFeatures: AboutusFeatures[] = [
  {
    key: "1",
    icon: <Headphones className="h-10 w-10" />,
  },
  {
    key: "2",
    icon: <Leaf className="h-10 w-10" />,
  },
  {
    key: "3",
    icon: <Wifi className="h-10 w-10" />,
  },
];

export const getCardsData = (countryName: string): SlugAdvantageCard[] => [

  {
    icon: <Handshake className="h-10 w-10" />,
    key: "1",
    CountryName: countryName
  },
  {
    icon: <Plane className="h-10 w-10" />,
    key: "2",
    CountryName: countryName
  },
  {
    icon: <Clock className="h-10 w-10" />,
    key: "3",
    CountryName: countryName
  },
  {
    icon: <PhoneIncoming className="h-10 w-10" />,
    key: "4",
    CountryName: countryName
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    key: "5",
    CountryName: countryName
  },
  {
    icon: <Headset className="h-10 w-10" />,
    key: "6",
    CountryName: countryName
  },
];

export const homeReviews: PartnerReview[] = [
  {
    name: "Maya, UK",
    username: "maya_travels",
    date: "Aug 23, 2023",
    reviewKey: "reviews.1",
    store: appStore,
    imgSrc: client1,
    rating: 4,
  },
  {
    name: "Luca, Italy",
    username: "luca_explorer",
    date: "Sep 25, 2023",
    reviewKey: "reviews.2",
    imgSrc: client2,
    store: playStore,
    rating: 5,
  },
  {
    name: "Ravi, India",
    username: "ravi_wanders",
    date: "Sep 23, 2023",
    title: "Convenience",
    reviewKey: "reviews.3",
    imgSrc: client4,
    store: appStore,
    rating: 5,
  },
  {
    name: "Clara, Spain",
    username: "clara_journey",
    date: "Aug 23, 2023",
    reviewKey: "reviews.4",
    imgSrc: client6,
    store: appStore,
    rating: 5,
  },

  {
    name: "Frank, Argentina",
    username: "franky",
    date: "Jun 09, 2023",
    reviewKey: "reviews.5",
    imgSrc: client5,
    store: appStore,
    rating: 5,
  },
  {
    name: " Chad, USA",
    username: "chad_claer",
    date: "May 17, 2023",
    reviewKey: "reviews.6",
    imgSrc: client3,
    store: appStore,
    rating: 5,
  },
];

export const regionalReviews: PartnerReview[] = [
  {
    name: "Liam Thomas",
    username: "liam_northamerica",
    date: "Sep 25, 2023",
    title: "Recommended",
    reviewKey: "reviews.1",
    store: appStore,
    imgSrc: client1,
    rating: 5,
  },
  {
    name: "Marie Dubois",
    username: "marie_d_travel",
    date: "Sep 23, 2023",
    title: "Cooperative Support",
    reviewKey: "reviews.2",
    store: playStore,
    imgSrc: client2,
    rating: 5,
  },
  {
    name: "Ethan Kim",
    username: "ethan_k_global",
    date: "Aug 23, 2023",
    title: "Saved Plenty",
    reviewKey: "reviews.3",
    store: appStore,
    imgSrc: client3,
    rating: 5,
  },
  {
    name: "Sarah Jones",
    username: "sarah_downunder",
    date: "Jun 09, 2023",
    title: "Affordability",
    reviewKey: "reviews.4",
    store: playStore,
    imgSrc: client4,
    rating: 5,
  },
  {
    name: "Alex Chen",
    username: "alex_c_africa",
    date: "May 17, 2023",
    title: "Reliable eSIM Connection",
    reviewKey: "reviews.5",
    store: appStore,
    imgSrc: client5,
    rating: 5,
  },
  {
    name: "Ava Rodriguez",
    username: "ava_in_europe",
    date: "Aug 23, 2023",
    title: "Affordable eSIM Plans",
    reviewKey: "reviews.6",
    store: playStore,
    imgSrc: client6,
    rating: 5,
  },
];

export const footerLinksData = (whatsappNumber: string) => {
  return {
    supportLinks: [
      {
        href: "",
        children: (
          <>
            <Building2 className="h-6 w-6" />
            <p className="text-body-base">Yaalo LLC</p>
          </>
        ),
      },

      {
        href: `https://wa.me/${Number(whatsappNumber)}`,
        children: (
          <>
            <Phone className="h-6 w-6" />
            <p className="text-body-base">{whatsappNumber}</p>
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
              <p className="text-muted-foreground/40"> | General</p>
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
              <p className="text-muted-foreground/40"> | Support</p>
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
              <p className="text-muted-foreground/40"> | Business</p>
            </div>
          </>
        ),
      },
      {
        href: "",
        children: (
          <>
            <MapPin className="h-6 w-6 shrink-0" />
            <p className="text-body-base">
              250 S. Ronald Reagan Blvd., #106, Longwood, FL 32750
            </p>
          </>
        ),
      },
    ],

    socialLinks: [
      {
        href: "https://x.com/yaaloesim?t=HT59fkFyGuC9ohNlHuMbeg&s=09",
        children: <X className="h-6 w-6" />,
        label: "Twitter",
      },
      {
        href: "https://www.instagram.com/yaaloesim?igsh=OWJ0dnlhOWhqM3Jj",
        children: <Instagram className="h-6 w-6" />,
        label: "Instagram",
      },
      {
        href: "https://www.facebook.com/share/1HYQa8JHwk/",
        children: <Facebook className="h-6 w-6" />,
        label: "Facebook",
      },
      {
        href: "https://www.linkedin.com/company/yaaloesim/",
        children: <Linkedin className="h-6 w-6" />,
        label: "Linkedin",
      },
      {
        href: "https://www.pinterest.com/Yaaloesim",
        children: <Pinterest className="h-6 w-6" />,
        label: "Pinterest",
      },
    ],

    pageLinks: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Buy eSIM",
        href: "/destinations/",
      },
      {
        label: "Affiliate Partner",
        href: "/affiliate-partner/",
      },

      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "eSIM Compatible Phones",
        href: "/esim-compatible-devices/",
      },
    ],

    otherLinks: [
      {
        label: "Contact Us",
        href: "/contact-us/",
      },
      {
        label: "FAQs",
        href: "/faq/",
      },
      // {
      //   label: "Help Center",
      //   href: "/help-center/",
      // },

      // {
      //   label: "What is an eSIM",
      //   href: "/blog/info/what-is-esim/",
      // },
    ],

    paymentMethods: [
      {
        name: "Google Pay",
        imgSrc: googlePay,
      },
      {
        name: "Apple Pay",
        imgSrc: applePay,
      },
      {
        name: "Amazon Express Pay",
        imgSrc: amazonExpressPay,
      },
      {
        name: "Visa Card Pay",
        imgSrc: visaPay,
      },
      {
        name: "Master Card Pay",
        imgSrc: masterPay,
      },
    ],

    policyLinks: [
      {
        label: "Terms of Service ",
        href: "/terms-of-service/",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
      },
    ],
  };
};

export function Pinterest({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8.5 22c.6-2.3 1.2-4.5 1.6-6.2-.4-.8-.6-1.7-.6-2.7 0-2.5 1.5-4.4 3.7-4.4 1.7 0 2.7 1 2.7 2.5 0 1.7-1 4.3-1.5 6.6-.3 1.2.6 2.2 1.8 2.2 2.2 0 4.3-2.3 4.3-6 0-3.8-2.9-6.4-7-6.4-4.7 0-7.5 3.3-7.5 7 0 1.6.6 3.1 1.7 4 .2.2.3.5.2.8l-.6 2.5c-.1.5-.6.8-1.1.6-3.1-1.3-5.1-4.6-5.1-8.2C1 6.3 5.1 2 11.8 2c6 0 11.2 4.3 11.2 10.3 0 6.4-4.4 9.7-9.1 9.7-1.8 0-3.5-.8-4.4-2z" />
    </svg>
  );
}

export function X({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2H21.996L13.754 11.417L23.5 22H16.28L10.76 15.326L4.91 22H1.15L9.93 11.96L0.5 2H7.92L12.9 8.03L18.244 2ZM16.97 19.93H19.05L6.81 4.02H4.58L16.97 19.93Z" />
    </svg>
  );
}

export function HeartPlus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
      <path d="M15 15h6" />
      <path d="M18 12v6" />
    </svg>
  );
}
export function Building2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 12h4" />
      <path d="M10 8h4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  );
}

export const HomeSchemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yaalo.com/#organization",
      name: "Yaalo",
      url: "https://yaalo.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg",
        width: 112,
        height: 112,
        caption: "Yaalo eSIM Logo",
      },
      description:
        "Yaalo provides instant eSIM digital data packs for over 200+ destinations worldwide with zero roaming fees.",
      slogan: "Roam the World, Not the Fees",
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo",
        "https://apps.apple.com/us/app/yaalo-esim-buy-travel-data/id6753675047",
        "https://x.com/yaaloesim",
        "https://www.instagram.com/yaaloesim",
        "https://www.facebook.com/profile.php?id=61573886923642",
        "https://www.linkedin.com/company/yaaloesim/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        ratingCount: "1250",
        reviewCount: "1250",
        description: "Based on Trustpilot Reviews",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://yaalo.com/contact-us/",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://yaalo.com/#website",
      url: "https://yaalo.com/",
      name: "Yaalo eSIM",
      description:
        "Buy eSIM online for global travel. Instant connectivity in 200+ countries.",
      publisher: {
        "@id": "https://yaalo.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Product",
      "@id": "https://yaalo.com/#main-product",
      name: "Yaalo Global eSIM Connectivity",
      description:
        "Instant prepaid eSIM data plans for 200+ countries including Thailand, USA, Turkey, and Japan. Zero roaming fees.",
      image: "https://yaalo.com/assets/images/esim-card-render.png",
      brand: {
        "@id": "https://yaalo.com/#organization",
      },
      offers: {
        "@type": "AggregateOffer",
        url: "https://yaalo.com/",
        priceCurrency: "USD",
        lowPrice: "1.34",
        highPrice: "50.00",
        offerCount: "200",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
      },
    },
    {
      "@type": ["WebPage", "FAQPage"],
      "@id": "https://yaalo.com/#webpage",
      url: "https://yaalo.com/",
      name: "Yaalo eSIM - Digital Freedom With 3-Step Activation",
      isPartOf: {
        "@id": "https://yaalo.com/#website",
      },
      about: {
        "@id": "https://yaalo.com/#organization",
      },
      primaryImageOfPage: {
        "@id": "https://yaalo.com/#primaryimage",
      },
      image: {
        "@id": "https://yaalo.com/#primaryimage",
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "Is eSIM good for travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, eSIMs are excellent for travel as they allow you to switch to local carriers digitally without swapping physical SIM cards, saving you from expensive roaming fees.",
          },
        },
        {
          "@type": "Question",
          name: "Which eSIM is best for Travelling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yaalo offers one of the best eSIM solutions for traveling by providing instant activation, coverage in 200+ destinations, and competitive local rates.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install eSIM before Travelling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is recommended to install your Yaalo eSIM before your flight so that you can instantly connect to the network upon landing.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use eSIM in any country?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yaalo eSIMs work in over 200 destinations. You can choose from local, regional, or global plans depending on your itinerary.",
          },
        },
        {
          "@type": "Question",
          name: "Which devices are eSIM Compatible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most modern smartphones from Apple, Samsung, and Google are eSIM compatible. You can check compatibility directly on the Yaalo website or app.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my eSIM is active?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can check the status of your eSIM directly in your phone settings under Cellular/Mobile Data or via the Yaalo App dashboard.",
          },
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://yaalo.com/#android-app",
      name: "Yaalo - eSIM Data",
      operatingSystem: "Android",
      applicationCategory: "TravelApplication",
      installUrl:
        "https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://yaalo.com/#organization",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "5000",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://yaalo.com/#ios-app",
      name: "Yaalo eSIM: Buy Travel Data",
      operatingSystem: "iOS",
      applicationCategory: "TravelApplication",
      installUrl:
        "https://apps.apple.com/us/app/yaalo-esim-buy-travel-data/id6753675047",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://yaalo.com/#organization",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "5000",
      },
    },
  ],
};

export const AffiliateSchemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://yaalo.com/affiliate-partner/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yaalo.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Affiliate Partner",
          item: "https://yaalo.com/affiliate-partner/",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://yaalo.com/affiliate-partner/#webpage",
      url: "https://yaalo.com/affiliate-partner/",
      name: "Join the Yaalo eSIM Affiliate Program | Earn Up to 20%",
      description:
        "Join the Yaalo eSIM affiliate program and earn up to 20% commission by promoting travel eSIM data plans. Real-time tracking, monthly payouts, and easy setup.",
      isPartOf: {
        "@id": "https://yaalo.com/#website",
      },
      about: {
        "@id": "https://yaalo.com/affiliate-partner/#service",
      },
    },
    {
      "@type": "Service",
      "@id": "https://yaalo.com/affiliate-partner/#service",
      name: "Yaalo eSIM Affiliate Program",
      provider: {
        "@id": "https://yaalo.com/#organization",
      },
      serviceType: "Affiliate Marketing Program",
      areaServed: "World",
      description:
        "A high-paying affiliate program for travel creators. Earn up to 20% recurring commission, get real-time tracking, and monthly payouts.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: [
          "Travel Bloggers",
          "YouTubers",
          "Digital Nomads",
          "Tech Reviewers",
        ],
      },
      offers: {
        "@type": "Offer",
        name: "Affiliate Commission",
        description: "Up to 20% commission on sales",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://yaalo.com/affiliate-partner/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I join the Yaalo eSIM affiliate program?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Apply using the affiliate form with your website or social profile. Once approved, you’ll receive your affiliate link and dashboard access.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Yaalo eSIM affiliate program free to join?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Joining the Yaalo Affiliate Program is completely free. There are no signup or maintenance fees.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I earn as a Yaalo affiliate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affiliates earn up to 20% commission per sale, with no earning limits.",
          },
        },
        {
          "@type": "Question",
          name: "When are affiliate commissions paid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Affiliate payouts are processed monthly via your selected payout method.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a website to become an affiliate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You can promote Yaalo eSIM using social media, YouTube, email newsletters, or any platform where your audience trusts your recommendations.",
          },
        },
      ],
    },
  ],
};

export const AboutUsSchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://yaalo.com/about-us/#webpage",
  url: "https://yaalo.com/about-us/",
  name: "About Yaalo eSIM - Your Trusted eSIM Provider Worldwide",
  description:
    "Yaalo eSIM Provides reliable, low-cost eSIMs for international travel. Affordable eSIM plans in 200+ countries. Fast and reliable global coverage.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://yaalo.com/#organization",
    name: "Yaalo",
    url: "https://yaalo.com/",
    logo: "https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg",
    foundingDate: "2023",
    knowsAbout: [
      "eSIM",
      "Telecommunications",
      "Travel Technology",
      "Mobile Data",
      "International Roaming",
    ],
    sameAs: [
      "https://www.linkedin.com/company/yaaloesim/",
      "https://x.com/yaaloesim",
      "https://www.instagram.com/yaaloesim",
      "https://www.facebook.com/profile.php?id=61573886923642&rdid=176aCMwW6H73R3xF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HYQa8JHwk%2F#",
      "https://www.pinterest.com/Yaaloesim/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@yaalo.com",
    },
  },
};

export const ContactUsSchemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://yaalo.com/contact-us/#webpage",
      url: "https://yaalo.com/contact-us/",
      name: "Contact Yaalo eSIM Support - We're Here to Help You Anytime",
      description:
        "Have questions about your eSIM? Reach out to Yaalo eSIM for support and queries for quick assistance with activation and travel plans 24/7. Contact us today!",
      mainEntity: {
        "@type": "Organization",
        "@id": "https://yaalo.com/#organization",
        name: "Yaalo",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+17817392256",
            contactType: "customer support",
            contactOption: "TollFree",
            areaServed: "World",
            availableLanguage: ["English"],
            description: "24/7 WhatsApp Online Support",
          },
          {
            "@type": "ContactPoint",
            email: "sales@yaalo.com",
            contactType: "sales",
            contactOption: "TollFree",
            areaServed: "World",
            availableLanguage: ["English"],
            description: "Business and Partnership Inquiries",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://yaalo.com/contact-us/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you offer refunds or money-back guarantees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We surely do. If our eSIM doesn't delight you, we make returns easy. Check out our simplerefund policyand buy with confidence. 100% satisfaction guaranteed.",
          },
        },
        {
          "@type": "Question",
          name: "How can I reach your customer support team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reach us anytime via live chat or email at support@yaalo.com.",
          },
        },
        {
          "@type": "Question",
          name: "What About Considering Customers Suggestions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! We highly value our customers' perspectives. Send us your ideas via email, and our leadership team will carefully review each suggestion to constantly improve.",
          },
        },
        {
          "@type": "Question",
          name: "How to contact Yaalo for business purposes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact our enterprise team at sales@yaalo.com. to discuss how eSIM can transform connectivity for your organization.",
          },
        },
      ],
    },
  ],
};
