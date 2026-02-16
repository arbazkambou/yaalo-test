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
import whatsapp from "@/assets/svgs/messageWrite.svg";
import playStore from "@/assets/svgs/playStore.svg";
import sim from "@/assets/svgs/sim.svg";
import chat from "@/assets/svgs/supportHeart.svg";
import trophy from "@/assets/svgs/trophy.svg";
import visaPay from "@/assets/svgs/visaPay.svg";
import {
  AboutFeatureKey,
  AdvantageCard,
  ContactFeatureKey,
  EsimFeatureKey,
} from "@/types/keys";
import { Badge } from "@workspace/ui/components/badge";
import {
  Antenna,
  BriefcaseBusiness,
  Building2,
  CloudLightning,
  DollarSign,
  Facebook,
  Gift,
  Globe,
  HandHeart,
  Headphones,
  Instagram,
  Leaf,
  LineChartIcon,
  List,
  Lock,
  MapPin,
  Phone,
  Plane,
  Rocket,
  Shield,
  ShieldCheck,
  ShieldCheckIcon,
  Signal,
  Tags,
  UserRound,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { StaticImageData } from "next/image";
import { Link } from "@/i18n/navigation";

import { JSX } from "react";

type EsimFeature = {
  imgSrc: JSX.Element;
  key: EsimFeatureKey;
};

export const eSimFeaturesData: EsimFeature[] = [
  {
    key: "fair",
    imgSrc: <ShieldCheck size={30} />,
  },
  {
    key: "roaming",
    imgSrc: <Antenna size={30} />,
  },
  {
    key: "fast",
    imgSrc: <Globe size={30} />,
  },
  {
    key: "setup",
    imgSrc: <Zap size={30} />,
  },
];

type ContactFeatures = {
  image: StaticImageData;
  key: ContactFeatureKey;
};
export const contactFeatures: ContactFeatures[] = [
  {
    key: "emailSupport",
    image: whatsapp,
  },
  {
    key: "liveChat",
    image: chat,
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
];

export const cardsData: AdvantageCard[] = [
  {
    icon: <Globe size={28} />,
    key: "1",
  },
  {
    icon: <Shield size={28} />,
    key: "2",
  },
  {
    icon: <Zap size={28} />,
    key: "3",
  },
  {
    icon: <UserRound size={28} />,
    key: "4",
  },
];

export const esimPageFeatureData = [
  {
    title: "Secure and Private",
    icon: <Lock className="h-10 w-10" />,
    body: "Our eSIM safeguards your data like an impenetrable fortress. We keep your personal info private while connected globally with our eSIM.",
  },
  {
    title: "Cost-Effective",
    icon: <Tags className="h-10 w-10" />,
    body: "Our rates stretch your data dollars further, maximizing every bit. With our eSIM, no roaming charges and no hidden charges.",
  },
  {
    title: "Convenience",
    icon: <HandHeart className="h-10 w-10" />,
    body: "Our eSIMs deliver ultimate speed, simplicity, and flexibility for global & local connectivity. With quick online purchase, instant delivery, and activation via digital QR code.",
  },
  {
    title: "Global Coverage",
    icon: <Globe className="h-10 w-10" />,
    body: "One eSIM, 200+ Countries. Enjoy endless data possibilities anywhere your heart desires. Our Global eSIM follows you across the globe.",
  },
  {
    title: "Exclusive Deals",
    icon: <Gift className="h-10 w-10" />,
    body: "We offer exclusive deals and gifts to our customers like complementary call minutes, text, and data. So buy now and enjoy free text and call gifts with every data bundle activation.",
  },
  {
    title: "Support and Service",
    icon: <Headphones className="h-10 w-10" />,
    body: "Our dedicated support team offers you 24/7 assistance. We also help across time zones for smooth worldwide coverage.",
  },
];

export const regionalPageFeaturesData = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Wide Availability",
    body: "Smart eSIM provides coverage in different regions, including Africa, Asia, Europe, North America, South America, and Oceania.",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Affordable Regional Data Plans",
    body: "The best regional eSIM offers the best regional data plans. Prices of prepaid regional eSIMs start from $3.17 with no extra roaming charges.",
  },
  {
    icon: <Signal className="h-10 w-10" />,
    title: "High Speed 5G Internet",
    body: "Get high-speed 5G internet with the world’s most affordable and flexible data plans. The internet speed will keep your equation of Money = Value balanced.",
  },
  {
    icon: <Plane className="h-10 w-10" />,
    title: "Travel the Whole Region with One eSIM",
    body: "There is no need to change eSIMs in every country, travel the whole region with one eSIM. No more headache of finding and activating eSIM in every country you visit. Especially when you need internet throughout the region.",
  },
  {
    icon: <List className="h-10 w-10" />,
    title: "Multiple Options in Plans",
    body: "Data ranges from 1GB to 20GB with a 7 Days to 30 Days validity. So, you can choose data plans according to your data needs, in the region of your need.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Instant Set-up and Activation",
    body: "Setting up and activating Regional eSIM is quite easy, You can instantly activate your data plan. It's perfect for travelers and busy business-related people. It ensures you’re connected when you need a connection.",
  },
];

export const globalFeatureData = [
  {
    title: "Secure Connections",
    icon: <Lock className="h-10 w-10" />,
    body: "With global travel eSIMs, your online activities are safe. These SIMs use advanced security measures to protect your data, so you can browse, stream, and communicate without worrying about your privacy.",
  },
  {
    title: "Easy Setup",
    icon: <Wrench className="h-10 w-10" />,
    body: "Setting up an international eSIM is a breeze. You don't need to swap out physical SIM cards or visit a store. With just a few taps on your device, you're ready to go, making it perfect for travelers and busy people.",
  },
  {
    title: "High-Speed Connectivity",
    icon: <CloudLightning className="h-10 w-10" />,
    body: "Enjoy fast internet speeds wherever you are. Travel eSIMs connect you to the best available networks, ensuring you can quickly access websites, upload photos, and stream videos without interruption.",
  },
  {
    title: "Flexible Plans",
    icon: <LineChartIcon className="h-10 w-10" />,
    body: "Choose a plan that fits your needs. Whether you're a light user who just needs emails and maps or a heavy user who streams and games, you have a flexible plan. Plus, you can change or cancel anytime without hassle.",
  },
  {
    title: "Instant Activation",
    icon: <Rocket className="h-10 w-10" />,
    body: "Say goodbye to waiting. With the best eSIM for International travel, you can instantly activate your data plan, ensuring you're connected when needed. Perfect for last-minute trips or sudden changes in plans.",
  },
  {
    title: "Privacy Protection",
    icon: <ShieldCheckIcon className="h-10 w-10" />,
    body: "Your personal information stays private. Global eSIMs don't require you to share sensitive details with local SIM providers, offering an extra layer of privacy protection while you travel.",
  },
];

export const aboutUsFeatures = [
  {
    title: "We help you wherever you are",
    body: "We believe that providing exceptional customer service is as important as offering quality products. Our support team is available 24/7 so you can enjoy your trip without stress.",
    icon: <Headphones className="h-10 w-10" />,
  },
  {
    title: "We care about your planet",
    body: "We are committed to reducing our carbon footprint and implementing sustainable practices in all areas of our business. The future must be preserved for future generations.",
    icon: <Leaf className="h-10 w-10" />,
  },
  {
    title: "We help you wherever you are",
    body: "Activation in just a few clicks, the best network in each country, unlimited data, management of your eSIM from the app… We do everything we can to make your internet connection easy and without surprises.",
    icon: <Wifi className="h-10 w-10" />,
  },
];

export const homeReviews = [
  {
    name: "Fajri H",
    username: "fajri_h23",
    date: "Aug 23, 2023",
    title: "Ease of Internet Access",
    review:
      "I have recently traveled to Spain and used this esim service. This esim service was my lifesaver. It makes it easy to access the internet during my trip. If you're gonna travel abroad, I recommend this service.",
    store: appStore,
    imgSrc: client1,
  },
  {
    name: "Sakura",
    username: "sakura_travels",
    date: "Sep 25, 2023",
    title: "Big Savings",
    review:
      "This is the first pay-as-you-go eSIM I have ever used. After I got a stint of $60 for roaming in Turkey, I decided to discover some affordable alternatives. On my next trip to Uzbekistan, I used Smart eSIM and found it very reasonable and had a good connection. I Recommend this eSIM for international travel.",
    imgSrc: client2,
    store: playStore,
  },
  {
    name: "Fergus E",
    username: "fergus_explorer",
    date: "Sep 23, 2023",
    title: "Convenience",
    review:
      "I used to travel with local eSIM for every country. Then, I discovered their Global and Regional eSIM, with which I can travel to multiple countries with one package. Super Useful and genuinely exceptional. It's definitely a thing to keep and use again.",
    imgSrc: client4,
    store: appStore,
  },
  {
    name: "Amelia J",
    username: "amelia_journey",
    date: "Aug 23, 2023",
    title: "Excellent Customer Service",
    review:
      "At first, I felt frustrated when I had some issues with activation. But when I contacted their support team, I found out that the problem was on my side. Thanks to the clear instructions from the support team, my issue got resolved in minutes. After that, I experienced high-quality internet. Satisfied!",
    imgSrc: client6,
    store: appStore,
  },
  {
    name: "David Andrew",
    username: "david_andrew_90",
    date: "Jun 09, 2023",
    title: "Affordability",
    review:
      "Right after landing in Barcelona, Spain, I activated my Smart eSIM connection. It was a smooth experience, and immediate access to texts, WhatsApp, and more. I became a fan of unthrottled connectivity and affordable packages. I highly recommend Smart eSIM for travelers.",
    imgSrc: client5,
    store: appStore,
  },
  {
    name: "John William",
    username: "john_w_traveler",
    date: "May 17, 2023",
    title: "Multiple Plans",
    review:
      "I enjoyed Smart eSIM’s service during my visit to Europe. I traveled Europe with a single Regional eSIM plan. No High roaming charges and no change of plan during the entire tour. I am completely satisfied and will use it again.",
    imgSrc: client3,
    store: appStore,
  },
];

export const regionalReviews = [
  {
    name: "Liam Thomas",
    username: "liam_northamerica",
    date: "Sep 25, 2023",
    title: "Recommended",
    review:
      "I consider myself the most difficult person to make happy. But Smart eSIM has done a great job. My job makes me travel across North America, now at least my connection headache is taken care of. Recommended.",
    store: appStore,
    imgSrc: client1,
  },
  {
    name: "Marie Dubois",
    username: "marie_d_travel",
    date: "Sep 23, 2023",
    title: "Cooperative Support",
    review:
      "I have been using Smart eSIM for the last few months, but I love their customer support, which made me write this review. I got stuck while adding a new data plan to my eSIM, their support team was really cooperative and resolved it.",
    store: playStore,
    imgSrc: client2,
  },
  {
    name: "Ethan Kim",
    username: "ethan_k_global",
    date: "Aug 23, 2023",
    title: "Saved Plenty",
    review:
      "Changing my residence between Australia and Fiji. Connectivity always has been an issue for me. Changing SIM cards and data plans takes some time and money. Smart eSIM has saved plenty of that. Would keep using it.",
    store: appStore,
    imgSrc: client3,
  },
  {
    name: "Sarah Jones",
    username: "sarah_downunder",
    date: "Jun 09, 2023",
    title: "Affordability",
    review:
      "I travelled the whole African Region with Smart eSIM’s Regional eSIM for Africa and it didn’t drop the signals for a second. And for around $34, it lasted the whole month enough for my routine office work. If you’re looking for a good connection with affordable rates, I recommend Smart eSIM.",
    store: playStore,
    imgSrc: client4,
  },
  {
    name: "Alex Chen",
    username: "alex_c_africa",
    date: "May 17, 2023",
    title: "Reliable eSIM Connection",
    review:
      "In Asia, I used to struggle to get a reliable eSIM connection, but that didn’t bother me half of the way. I tried Smart eSIM during my visit to Japan, It made my experience worry-free. I usually don’t write reviews but Smart eSIM was worth it. Thanks for the services.",
    store: appStore,
    imgSrc: client5,
  },
  {
    name: "Ava Rodriguez",
    username: "ava_in_europe",
    date: "Aug 23, 2023",
    title: "Affordable eSIM Plans",
    review:
      "Living in Europe means a constant struggle to get affordable eSIM plans. Getting 20GB of data in just 21£ for a month was a gift for me. On top, their app is user-friendly and has an easy-to-use interface. Loved it.",
    store: playStore,
    imgSrc: client6,
  },
];

export const accordionsData = {
  homePage: [
    {
      title: "How does an eSIM work?",
      body: "An eSIM works like a digital version of a physical SIM card. Instead of inserting anything, you download a mobile plan directly onto your phone. Once activated, your device connects to local networks just like a regular SIM, but without the hassle of swapping cards when you travel.",
    },
    {
      title: "Can I use Smart eSIM in any country I travel to?",
      body: "Yes! Smart eSIM covers 200+ destinations. You can land anywhere in Europe, Asia, the Middle East, or the Americas and stay connected instantly. Just pick a plan for your destination, install it, and you’re online as soon as you turn on mobile data.",
    },
    {
      title: "How do I install or activate Smart eSIM?",
      body: "Activation is quick. After you buy a plan, you’ll receive a QR code or an in-app install link. Open your phone’s Mobile/Cellular settings, tap “Add eSIM”, scan the code, and switch it on. Your data starts working within minutes without any document verification or waiting in lines.",
    },
    {
      title: "Which phones support eSIM?",
      body: (
        <span>
          Most modern smartphones support eSIM, including recent iPhones (XS and
          newer), Samsung Galaxy models, Google Pixel devices, and several newer
          Android phones. If you’re unsure,{" "}
          <Link
            href="/esim-compatible"
            className="text-primary underline cursor-pointer"
          >
            check our device list
          </Link>
          . It only takes a few seconds to confirm.
        </span>
      ),
    },
    {
      title: "Is using an eSIM safe and secure?",
      body: "Yes. eSIM technology uses encrypted profiles that protect your connection from SIM-swap attempts and unauthorized access. Your data stays safe as long as your phone is secured with a screen lock and two-factor authentication for sensitive apps.",
    },
    {
      title:
        "Can I use Smart eSIM while switching between multiple countries on the same trip?",
      body: "Yes. If your plan supports multi-country coverage, your Smart eSIM will automatically connect to local partner networks as you cross borders. There’s no need to reinstall anything. Your phone simply picks up the next available network.",
    },
    {
      title: "Does my eSIM expire if I don’t use it right away?",
      body: "Most Smart eSIM plans include an activation window, usually between 30 and 90 days. You can buy now, install when you're ready, and your validity only starts when the eSIM connects to the network for the first time. It’s perfect for planning.",
    },
  ],
  esimPage: [
    {
      title: "Can I buy a Smart eSIM before my trip?",
      body: "Yes. You can purchase your Smart eSIM anytime before you travel. The plan only starts once the eSIM connects to a local network at your destination. Buying early is a smart way to avoid airport stress.",
    },
    {
      title: "Can I buy and activate a Smart eSIM while I’m already abroad?",
      body: "Yes, you can. As long as you have Wi-Fi, you can purchase a plan, scan the QR code, and activate your eSIM within minutes. It’s perfect for last-minute travel or when your roaming becomes too expensive.",
    },
    {
      title:
        "Where is the best place to buy a Smart eSIM for international travel?",
      body: "You can buy it directly from the Smart eSIM website or download the App. The app is available for both iOS and Android stores. Choose your country or region, select a data plan, and install it instantly. ",
    },
    {
      title: "Can I buy a Smart eSIM for someone else?",
      body: "Yes. After you complete the purchase, you can share the activation QR code with a friend or family member. They simply scan it on their device and connect. It’s great for gifting or group travel.",
    },
    {
      title: "How do I check if my phone supports eSIM?",
      body: "Most recent iPhones, Samsung, Google Pixel, and other flagship Android models support eSIM. We provide a complete compatibility list on our website, so you can confirm your device before buying.",
    },
    {
      title: "Is it cheaper to buy a Smart eSIM before or after I travel?",
      body: "Buying before you leave is usually more affordable. It helps you avoid airport SIM booths, last-minute roaming charges, and inflated tourist prices. Also, you land with internet ready to go.",
    },
    {
      title: "Will my Smart eSIM work across multiple countries?",
      body: "If you choose a regional or Global eSIM plan, yes. Your Smart eSIM will automatically connect to the strongest local network as you travel, with no reinstalling or switching required.",
    },
  ],
  regionalPage: [
    {
      title: "What is a Regional eSIM?",
      body: "A Regional eSIM is one eSIM that covers multiple countries in a single data plan and one eSIM profile. For example, you can visit all the countries in the European region with a single eSIM profile.",
    },
    {
      title: "Can you use eSIM in different countries?",
      body: "Yes, you can use one eSIM in different countries, but it depends on which eSIM plan you are using. Local eSIMs work in one country, Regional eSIMs cover up to 34 countries, and Global eSIMs can be used in around 64 countries.",
    },
    {
      title: "In which regions does Smart eSIM offer services?",
      body: "Smart eSIM offers services in various regions, including Africa, Asia, Europe, North America, South America, and Oceania.",
    },
    {
      title: "Which is the best Regional eSIM Europe plan?",
      body: "Smart eSIM offers different regional eSIM plans for Europe, with validity ranging from 7 to 30 days and data from 1GB to 20GB per month. The best plan is 10GB for a 30-day period, costing only $13.03.",
    },
    {
      title: "Which is the best Asia Regional eSIM plan?",
      body: "Smart eSIM offers various Asia Regional eSIM plans, with validity ranging from 7 to 30 days and data from 1GB to 20GB per month. The best plan is 10GB for a 30-day period, priced at $34.70.",
    },
    {
      title: "Are these Regional eSIMs prepaid or postpaid?",
      body: "Regional eSIMs from Smart eSIM are prepaid. This means you pay upfront for the data you want to use.",
    },
  ],
  globalPage: [
    {
      title: "Which is the best eSIM for International travel?",
      body: "The best eSIM for international travel depends on your needs—destination, data usage, and budget. Look for providers with wide coverage and flexible, affordable plans. We recommend Smart eSIM for top international options.",
    },
    {
      title: "Where can I buy International eSIM plans?",
      body: "You can buy international eSIM plans online through eSIM providers' websites or apps. With Smart eSIM, you can purchase and download eSIM profiles directly to your device—quick and hassle-free.",
    },
    {
      title: "How much does an international eSIM cost?",
      body: "International eSIM costs vary by data, coverage, and duration. Prices range from just a few dollars for short-term use to higher for broader coverage. Smart eSIM plans start at just $2.40/month.",
    },
    {
      title: "Does eSIM work on international roaming?",
      body: "Yes! eSIMs support international roaming by connecting to local networks abroad. This allows you to use data and make calls without the high fees of traditional roaming.",
    },
    {
      title: "Which eSIM is best for worldwide roaming?",
      body: "The best eSIM for worldwide roaming offers wide global coverage, letting you travel across multiple countries without switching SIMs. Look for global eSIM plans like those from Smart eSIM.",
    },
    {
      title: "How does a global eSIM work?",
      body: "A global eSIM lets you download a digital SIM profile and connects to local networks across supported countries. No need for a physical SIM—just activate and you're connected.",
    },
    {
      title: "What is the difference between global eSIM and local eSIM?",
      body: "Global eSIMs offer coverage in multiple countries, perfect for multi-destination trips. Local eSIMs work in one specific country or region, ideal for long stays and often more cost-effective.",
    },
  ],
  aboutUs: [
    {
      title: "What is an eSIM, and how does Smart eSIM work?",
      body: "An eSIM is a digital SIM built into your phone, letting you connect to mobile networks without swapping a physical card. Smart eSIM makes this process simple: choose your destination, buy a plan, scan the QR code, and your device activates instantly. Fast, secure travel data the moment you land.",
    },
    {
      title:
        "What are the downsides of eSIM, and how does Smart eSIM address them?",
      body: "Some travelers worry about compatibility or losing service while switching networks. Smart eSIM solves this by offering clear device-compatibility guidance, step-by-step activation, and access to top-tier networks in 200+ countries. We also provide quick support if you ever need help. The goal is simple: make eSIM use seamless, even for first-timers.",
    },
    {
      title: "Is an eSIM better than a physical SIM for international travel?",
      body: "For most travelers, yes. A Smart eSIM gives you instant activation, no roaming fees, and the freedom to connect anywhere. You keep your primary physical SIM for calls and use Smart eSIM for reliable high-speed data abroad. It’s faster, safer, and far more convenient than traditional SIM cards.",
    },
    {
      title: "Does Smart eSIM give me a local or international phone number?",
      body: "Smart eSIM travel plans are designed for data connectivity, so most plans do not include a local phone number. You can still use WhatsApp, FaceTime, Messenger, and VoIP apps normally. If you need calling features, we also offer plans that include voice options depending on the country or region.",
    },
    {
      title: "Is getting a Smart eSIM worth it for travel?",
      body: "Absolutely. A Smart eSIM helps you avoid roaming charges, skip airport SIM queues, and stay online right when you land. It’s especially useful for frequent travelers, digital nomads, students, and families who need stable and affordable internet in multiple countries. One purchase, one scan, and your trip stays connected from start to finish.",
    },
    {
      title: "What are the risks of using an eSIM, and is Smart eSIM safe?",
      body: "Smart eSIM is built with secure, encrypted connectivity that protects your data from SIM-swap attacks and unauthorized access. Unlike physical SIMs, an eSIM can’t be removed or cloned. Your information stays protected, and you stay connected to trusted network partners worldwide. For travelers, it’s one of the safest ways to stay online.",
    },
  ],
  contactUs: [
    {
      title: "How do I contact Smart eSIM customer support?",
      body: "You can reach our team through live chat or email anytime. Live chat gives the fastest reply, and email inquiries are answered within one business day.",
    },
    {
      title: "How do I fix eSIM network or connection issues?",
      body: "Most issues are resolved by enabling data roaming, restarting the phone, or selecting a different available network. If the problem continues, message our support team, and we’ll troubleshoot it with you.",
    },
    {
      title: "How do I activate my Smart eSIM?",
      body: "After purchasing your plan, scan the QR code or use the in-app setup option. Go to your device settings → Add eSIM → Follow the prompts. Activation typically takes under two minutes.",
    },
    {
      title: "Why isn’t my eSIM activating on my iPhone?",
      body: "Make sure your phone is carrier unlocked, connected to Wi-Fi, and supports eSIM. If the QR code doesn’t install, restart your device and try again. Our team can help you troubleshoot if it still won’t activate.",
    },
    {
      title: "Can Smart eSIM give me a phone number?",
      body: "Some Smart eSIM plans are data-only, while others include a phone number or virtual number. Check your plan details before purchase or ask our team to confirm what’s included.",
    },
    {
      title: "How do I stop my eSIM from renewing automatically?",
      body: "You can cancel auto-renewal from your Smart eSIM account or contact our support team to assist you. Once turned off, your plan won’t renew again.",
    },
  ],
  faqs: [
    {
      title: "What is an eSIM, and how does it work?",
      body: "An eSIM is a built-in digital SIM that lets you activate mobile service without a physical card. It downloads a mobile plan directly to your phone and connects you to local networks instantly. For travelers, it removes the need to swap SIMs at airports or shops.",
    },
    {
      title: "What are the downsides of eSIM?",
      body: "The main downside of an eSIM is the need for a compatible device and a stable installation process. You cannot physically remove it like a normal SIM, and switching phones needs a transfer step. For most travelers, these limits are minor compared to the flexibility it offers.",
    },
    {
      title: "Do eSIMs use your phone number?",
      body: "Yes, an eSIM can use your phone number if your carrier supports number transfer. Travel eSIMs usually provide data only, so your WhatsApp, iMessage, and social apps still use your existing number. You can keep your primary SIM active for calls while using eSIM data.",
    },
    {
      title: "Is getting an eSIM a good idea?",
      body: "Yes, an eSIM is a smart choice because it offers fast setup, better security, and easy travel use. It helps you avoid roaming fees, airport SIM lines, and the risk of losing physical cards. Most travelers find eSIMs more convenient and cost-effective than traditional SIMs.",
    },
    {
      title: "How do I contact an eSIM provider?",
      body: "You can contact an eSIM provider through their app, help center, or 24/7 chat support. Most brands also offer email support and step-by-step troubleshooting inside the dashboard. Support is usually faster than physical carriers because everything is handled online.",
    },
    {
      title: "How do I activate my eSIM?",
      body: "You activate an eSIM by scanning a QR code or tapping an in-app install button. Your phone adds the eSIM profile inside Mobile/Cellular Settings and connects in minutes. It works the same whether you activate before travel or at your destination.",
    },
    {
      title: "Does an eSIM give you a phone number?",
      body: "A standard eSIM from your carrier can carry your phone number, just like a physical SIM. Travel eSIMs usually come as data-only, so they do not assign a new number for calls. All calling apps like WhatsApp, FaceTime, Messenger, still use your regular number.",
    },
    {
      title: "Is an eSIM worth it?",
      body: "Yes, an eSIM is worth it if you want cheaper data, safer connectivity, and no roaming surprises. You install it once, switch countries smoothly, and avoid handling tiny SIM trays. Frequent travelers save the most because plans are flexible and low-cost.",
    },
    {
      title: "What are the risks of eSIM?",
      body: "The main risk is installation errors if the QR code is scanned incorrectly or deleted early. Another is losing access if your phone is damaged, since the eSIM cannot be removed physically. Using a trusted provider reduces almost all eSIM-related issues.",
    },
    {
      title: "Does eSIM drain battery?",
      body: "No, an eSIM does not drain battery more than a physical SIM. Battery usage depends on network strength, background apps, and location services, not the eSIM itself. Most travelers see the same or better battery life when using eSIM data.",
    },
    {
      title: "Do Smart eSIM cards allow you to text?",
      body: "Yes, you can text through apps like WhatsApp, iMessage, and Telegram using an eSIM data plan. But Smart eSIM is still looking to get you the offer. Only carrier-issued eSIMs support regular SMS texting with your phone number. For travel, messaging apps replace SMS for most people.",
    },
    {
      title: "Can I convert my SIM to eSIM?",
      body: "Yes, many carriers let you convert a physical SIM to an eSIM through their app or account portal. You receive a QR code or activation link that moves your number to the eSIM profile. The process usually takes less than two minutes.",
    },
    {
      title: "Is it better to have an eSIM or a physical SIM?",
      body: "An eSIM is better for travel, flexibility, security, and switching networks without swapping cards. A physical SIM is useful only if your device is older or your carrier lacks eSIM support. Most new phones work best with eSIM as the main line.",
    },
    {
      title: "Can eSIM cause problems?",
      body: "eSIM issues are rare and usually come from incorrect installation or unsupported devices. Most problems are solved by reinstalling the profile or updating your phone settings. Trusted providers like Smart eSIM offer instant re-issues if something goes wrong.",
    },
    {
      title: "Do eSIMs give you a local number?",
      body: "Only carrier plans offer a local phone number for calls and SMS. Travel eSIMs provide data only, so you use your existing number through apps. If you need a real local number, you must buy a local voice plan.",
    },
    {
      title: "Can I get a US number with eSIM?",
      body: "Yes, if you purchase a US carrier eSIM or a virtual number service. Travel eSIMs for the US offer data but do not assign a US mobile number. VoIP apps like Google Voice can provide a US number if needed. Smart eSIM is data-only for now, but soon it will offer virtual numbers too.",
    },
    {
      title: "Why shouldn’t I use an eSIM?",
      body: "You may avoid eSIM only if your device is incompatible or if you need physical SIM swapping. Some users who frequently switch phones prefer physical cards. For most travelers, eSIM is the better, easier option.",
    },
    {
      title: "How do I fix eSIM network issues?",
      body: "You can fix eSIM issues by toggling Airplane Mode, restarting your phone, or resetting network settings. Sometimes selecting the correct network manually solves roaming or signal problems. The Smart eSIM app also includes a built-in troubleshooting guide.",
    },
    {
      title: "Does deleting an eSIM cancel your service?",
      body: "Deleting an eSIM removes the profile from your phone. Some eSIM providers follow the one-time removal policy. It means if you delete the eSIM profile, then you need to buy a new one to reuse. If you delete your Smart eSIM profile, you will need to buy it again because the service will be cancelled.",
    },
  ],
  esimCompatible: [
    {
      title: "Can I make my device eSIM compatible?",
      body: (
        <span>
          Unfortunately, you can't just wave a magic wand to make your phone
          eSIM compatible. <br />
          It’s a bit like asking if you can turn a toaster into a coffee maker –
          they’re just built differently. <br />
          eSIM compatibility is determined by your device’s hardware and
          software, so if it wasn’t designed with an eSIM in mind, it’s a no go.
        </span>
      ),
    },
    {
      title: "How do I know if my phone is eSIM compatible?",
      body: (
        <span>
          Checking if your phone is eSIM compatible? Just take a peek at the
          settings or specifications of your device. <br />
          For iPhones, go to Settings &gt; General &gt; About and look for eSIM
          details. <br />
          Or simply search online with your phone model to check if it supports
          eSIM — quick and easy!
        </span>
      ),
    },
    {
      title: "Does iPhone 12 support eSIM?",
      body: (
        <span>
          Yes, the iPhone 12 series supports both physical nanoSIMs and eSIMs.{" "}
          <br />
          So, you can use one for business and another for personal calls, or
          for traveling abroad.
        </span>
      ),
    },
    {
      title: "Is eSIM better than physical SIM?",
      body: (
        <span>
          "Better" is a strong word; let's say eSIMs are more sleek, without the
          need for a physical card, making it faster to switch carriers or
          plans. <br />
          Plus, they're a traveler’s best friend, letting you hop onto local
          data plans without swapping SIM cards. <br />
          But remember, just like physical SIMs, eSIMs need your device’s
          support to work.
          <span>
            {" "}
            <a
              className="text-primary underline hover:text-primary/50"
              target="_blank"
              href="/blog/travel-tips/is-esim-better-than-physical-sim/"
            >
              See more
            </a>
          </span>
        </span>
      ),
    },
  ],
};

export const footerLinksData = {
  supportLinks: [
    {
      href: "https://api.whatsapp.com/send/?phone=13605814579&text&type=phone_number&app_absent=0",
      children: (
        <>
          <p className="text-body-base">+1(360)581-4579</p>
        </>
      ),
    },
    {
      href: "mailto:support@smartesim.co",
      children: (
        <>
          <div className="flex items-center gap-1 text-body-base">
            <p>support@smartesim.co</p>
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
  ],

  socialLinks: [
    {
      href: "https://www.instagram.com/esimsmart/",
      children: <Instagram className="h-6 w-6" />,
    },
    {
      href: "https://www.facebook.com/smartesimapp",
      children: <Facebook className="h-6 w-6" />,
    },
    {
      href: "https://www.tiktok.com/@smartesim",
      children: <TikTok className="h-6 w-6" />,
    },
  ],

  popularDestinationsLinks: [
    {
      href: "/esim/united-states",
      label: "United States",
    },
    {
      href: "/esim/canada",
      label: "Canada",
    },
    {
      href: "/esim/united-kingdom",
      label: "United Kingdom",
    },
    {
      href: "/esim/japan",
      label: "Japan",
    },
    {
      href: "/esim/indonesia",
      label: "Indonesia",
    },
    {
      href: "/esim/italy",
      label: "Italy",
    },
    {
      href: "/esim/turkey",
      label: "Turkey",
    },
    {
      href: "/esim/france",
      label: "France",
    },
    {
      href: "/esim/spain",
      label: "Spain",
    },
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
};

function Pinterest({ className }: { className?: string }) {
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

export function TikTok({ className }: { className?: string }) {
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
      <path d="M12 3v12.5a3.5 3.5 0 1 1-3-3.5" />

      <path d="M12 3c1.5 2.5 3.8 4 6 4v3c-2.4 0-4.6-1.1-6-2.7" />
    </svg>
  );
}

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://Smart eSIM.com/esim/",
      url: "https://Smart eSIM.com/esim/",
      name: "Buy eSIM for Travel | Global, Regional, Data & Voice Plans",
      description:
        "Explore international eSIMs for 200+ countries and regions. Instant activation, secure connections, affordable travel eSIM plans from Smart eSIM.",
      isPartOf: { "@id": "https://Smart eSIM.com/#website" },
      about: { "@id": "https://Smart eSIM.com/#organization" },
      breadcrumb: { "@id": "https://Smart eSIM.com/esim/#breadcrumb" },
      mainEntity: { "@id": "https://Smart eSIM.com/esim/#catalog" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://Smart eSIM.com/esim/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://Smart eSIM.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "eSIM Plans",
          item: "https://Smart eSIM.com/esim/",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://Smart eSIM.com/#website",
      url: "https://Smart eSIM.com/",
      name: "Smart eSIM",
      description:
        "Smart eSIM | Local, Regional, and Global eSIM Plans for International Travel.",
      publisher: { "@id": "https://Smart eSIM.com/#organization" },
      alternateName: "Smart eSIM LLC",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://Smart eSIM.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://Smart eSIM.com/#organization",
      name: "Smart eSIM",
      legalName: "Smart eSIM LLC",
      url: "https://Smart eSIM.com/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://Smart eSIM.com/#/schema/logo/image/",
        url: "https://Smart eSIM.com/images/logo-1x1-new.png",
        contentUrl: "https://Smart eSIM.com/images/logo-1x1-new.png",
        caption: "Smart eSIM Logo - Stay connected everywhere.",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "support@smartesim.co",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        postalCode: "32750",
        streetAddress: "250 S. Ronald Reagan Blvd., #106, Longwood, FL",
      },
      foundingDate: "2021",
      founders: [
        { "@type": "Person", name: "Muhammad Hammad" },
        { "@type": "Person", name: "Faseih Saad" },
      ],
      sameAs: [
        "https://www.youtube.com/@Smart eSIMofficial",
        "https://twitter.com/Smart eSIMApp",
        "https://www.linkedin.com/company/Smart eSIM",
        "https://www.instagram.com/Smart eSIM.official",
        "https://www.facebook.com/Smart eSIMcom",
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://Smart eSIM.com/esim/#catalog",
      name: "eSIM Categories",
      url: "https://Smart eSIM.com/esim/",
      numberOfItems: 5,
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Global eSIM Plans",
          itemListElement: [
            {
              "@type": "Product",
              "@id": "https://Smart eSIM.com/esim/global/#product",
              name: "Global eSIM",
              image:
                "https://Smart eSIM.com/landing/countries_images/global.jpg",
              url: "https://Smart eSIM.com/esim/global/",
              description:
                "Global eSIM covering 100+ countries with seamless 4G/5G connectivity.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "5.23",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Regional eSIM Plans",
          itemListElement: [
            {
              "@type": "Product",
              "@id": "https://Smart eSIM.com/esim/europe/#product",
              name: "Europe eSIM",
              image: "https://Smart eSIM.com/landing/continents_images/eu.jpg",
              url: "https://Smart eSIM.com/esim/europe/",
              description:
                "One eSIM for 30+ European countries with high-speed internet access.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "2.54",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Country-Specific eSIM Plans",
          itemListElement: [
            {
              "@type": "Product",
              "@id": "https://Smart eSIM.com/esim/united-states/#product",
              name: "United States eSIM",
              image: "https://Smart eSIM.com/landing/countries_images/us.jpg",
              url: "https://Smart eSIM.com/esim/united-states/",
              description:
                "Stay connected across the USA with high-speed LTE eSIM data plans.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "2.71",
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "Product",
              "@id": "https://Smart eSIM.com/esim/united-kingdom/#product",
              name: "United Kingdom eSIM",
              image: "https://Smart eSIM.com/landing/countries_images/gb.jpg",
              url: "https://Smart eSIM.com/esim/united-kingdom/",
              description:
                "Reliable eSIM plan for visitors traveling to the United Kingdom.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "2.12",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        },

        {
          "@type": "OfferCatalog",
          name: "Voice + Data eSIM Plans",
          itemListElement: [
            {
              "@type": "Product",
              "@id": "https://Smart eSIM.com/esim/global-voice-data/#product",
              name: "Global Voice + Data eSIM",
              image:
                "https://Smart eSIM.com/landing/countries_images/global.jpg",
              url: "https://Smart eSIM.com/esim/global-voice-data/",
              description:
                "Complete voice and data eSIM coverage for travelers visiting multiple countries worldwide.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "34.29",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        },
      ],
    },
  ],
};
