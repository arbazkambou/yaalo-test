import ContactUsForm from "@/components/features/support/ContactUsForm";
import CountryRegionsHero from "@/components/ui/heros/CountryRegionsHero";
import FAQSection from "@/components/ui/sections/FAQsSection";
import { Card } from "@workspace/ui/components/card";
import { Metadata } from "next";
import Image from "next/image";
import AppInstall from "@/components/ui/sections/AppInstall";
import { FAQ_NAMESPACES } from "@/types/keys";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { contactFeatures } from "@/constants/UIData";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { baseUrl, contactUsPath, PageParams } from "@/constants/constants";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";
import { getAppSettings } from "@workspace/core/services/misc/appSettings.services";
import Link from "next/link";

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
  const t = await getTranslations(`ContactUsPage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${contactUsPath}`,
  });
}

async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations("ContactUsPage");
  const { support } = await getAppSettings();
  const { email, phone } = support;

  return (
    <>
      <CountryRegionsHero
        heading={t("hero.title")}
        description={t("hero.description")}
        enableSearchList={false}
      />
      <section className="container mt-16">
        <h2 className="md:text-[50px] text-2xl font-bold md:font-700 text-foreground md:leading-[81px]">
          {t("reachOut.title")}
        </h2>
        <p>{t("reachOut.description")}</p>
        <div className=" grid gap-10 md:max-w-[600px] lg:max-w-full mx-auto xl:grid-cols-2 mt-8">
          {contactFeatures.map((feature) => {
            const isWhatsApp = feature.key === "liveChat";
            const isEmail = feature.key === "emailSupport";
            const linkHref = isWhatsApp
              ? `https://wa.me/${Number(phone)}`
              : isEmail
                ? `mailto:${email}`
                : "#";

            return (
              <Link
                href={linkHref}
                key={feature.key}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="bg-secondary-green/10 rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary justify-center flex flex-col h-full">
                  <div className="relative h-[50px] w-[50px] shrink-0">
                    <Image
                      src={feature.image}
                      quality={75}
                      fill
                      sizes="auto"
                      alt="contact us"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1 grow">
                    <p className="font-montserrat text-[1.5625rem] font-600 text-foreground-light">
                      {t(`reachOut.features.${feature.key}.title`)}
                    </p>
                    <p className="text-sm md:text-[1.125rem] text-muted-foreground">
                      {t.rich(`reachOut.features.${feature.key}.description`, {
                        email: (chunks) => <strong>{chunks}</strong>,
                      })}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container mt-16 ">
        <Card className="bg-primary-lightest p-10 mx-auto md:max-w-[750px]">
          <ContactUsForm />
        </Card>
      </section>
      <FAQSection namespace={FAQ_NAMESPACES.ContactUsPage} />

      <AppInstall />
    </>
  );
}

export default Page;
