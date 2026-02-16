import authHero from "@/assets/images/authHero.png";
import chat from "@/assets/images/bubbleChat.png";
import whatsapp from "@/assets/images/whatsapp.png";
import ContactUsForm from "@/components/features/support/ContactUsForm";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FooterLink from "@/components/ui/links/FooterLink";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { baseUrl, homePath, PageParams } from "@/constants/constants";
import { routing } from "@/i18n/routing";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { ContactUsSchemaMarkup } from "@/constants/UIData";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";
import { Card } from "@workspace/ui/components/card";
import { BriefcaseBusiness } from "lucide-react";
import { Metadata } from "next";
import { hasLocale, Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("ContactUsPage.metadata");
  return generateDynamicSeo({
    meta_title: t("title"),
    meta_description: t("description"),
    meta_keywords: t("keywords"),
    locale,
    url: `${baseUrl}${homePath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("ContactUsPage");

  const faqRichValue = {
    refundPolicy: (chunks: React.ReactNode) => (
      <FooterLink
        href="/refund-policy/"
        className="ms-1 inline-block text-primary"
      >
        {chunks}
      </FooterLink>
    ),
    support: (chunks: React.ReactNode) => (
      <FooterLink
        href="mailto:support@yaalo.com"
        className="ms-1 inline-block text-primary"
      >
        {chunks}
      </FooterLink>
    ),
    sales: (chunks: React.ReactNode) => (
      <FooterLink
        href="mailto:support@yaalo.com"
        className="ms-1 inline-block text-primary"
      >
        {chunks}
      </FooterLink>
    ),
  };
  const { support } = await getAppSettings();
  const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ContactUsSchemaMarkup),
        }}
        type="application/ld+json"
      />
      <CountryRegionsHero
        heading={t("hero.title")}
        description={t("hero.description")}
      />
      <section className="container mt-16">
        <div className="mx-4 grid gap-10 xl:grid-cols-2">
          <Card className="rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary">
            <Link
              href={`https://wa.me/${Number(support.phone)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[3.25rem] sm:flex-row sm:items-center"
            >
              <div className="relative h-[92px] w-[92px] shrink-0">
                <Image
                  src={whatsapp}
                  quality={75}
                  fill
                  sizes="auto"
                  alt="contact us on whatsapp"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-body-base font-600 text-muted-foreground">
                  {t("contactCard.whatsapp.title")}
                </h2>
                <p className="font-montserrat text-body-xl font-600 text-foreground">
                  {support.phone}
                </p>
                <p className="text-body-md text-muted-foreground">
                  {t("contactCard.whatsapp.description")}
                </p>
              </div>
            </Link>
          </Card>

          <Card className="smitems-center flex flex-col gap-[3.25rem] rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary md:flex-row">
            <Link
              href={`https://tawk.to/chat/${tawkPropertyId}/${tawkWidgetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[3.25rem] sm:flex-row sm:items-center"
            >
              <div className="relative h-[92px] w-[92px] shrink-0">
                <Image
                  src={chat}
                  quality={75}
                  fill
                  sizes="auto"
                  alt="contact us on whatsapp"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-body-base font-600 text-muted-foreground">
                  {t("contactCard.livechat.title")}
                </h2>
                <p className="font-montserrat text-body-xl font-600 text-foreground">
                  {t("contactCard.livechat.body")}
                </p>
                <p className="text-body-md text-muted-foreground">
                  {t("contactCard.livechat.description")}
                </p>
              </div>
            </Link>
          </Card>
        </div>
      </section>

      <section className="container mt-16">
        <div className="rounded-[0.9375rem] bg-primary p-[1.62rem]">
          <Link
            className="flex items-center justify-center gap-2"
            href={"mailto:support@yaalo.com"}
            target="_blank"
          >
            <BriefcaseBusiness className="h-[19px] w-[19px] dark:text-background" />
            <p className="text-body-sm underline-offset-2 dark:text-background transition-all hover:underline md:text-lg">
              {t("business")}: sales@yaalo.com
            </p>
          </Link>
        </div>
      </section>
      <section className="container mt-16 flex gap-8">
        <div className=" -mt-2 hidden xl:block">
          <Image src={authHero} alt="contact us" quality={75} />
        </div>
        <div>
          <ContactUsForm />
          <p className="mt-4 text-body-md text-muted-foreground">
            {t("contactUsForm.description")}
          </p>
        </div>
      </section>

      <FAQSection
        namespace={FAQ_NAMESPACES.ContactUsPage}
        values={faqRichValue}
      />
    </>
  );
}

export default Page;
