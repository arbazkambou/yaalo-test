import CompatibleTable from "@/components/tables/CompatibleTable";
import CheckCompatibilityModal from "@/components/ui/dialogs/CheckCompatibilityDialog";
import AppInstall from "@/components/ui/sections/AppInstall";
import FAQSection from "@/components/ui/sections/FAQsSection";
import {
  googlePixel,
  honorPhones,
  huaweiPhones,
  iPhones,
  motorolaPhones,
  motorolaPhones2,
  oppoPhones,
  oppoPhones2,
  otherPhones,
  otherPhones2,
  samsungPhones,
  sonyPhones,
  xiaomiPhones,
  xiaomiPhones2,
} from "@/constants/compatible-phones";
import { FAQ_NAMESPACES } from "@/types/keys";
import { Input } from "@workspace/ui/components/input";
import { Search, Smartphone } from "lucide-react";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, Locale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { baseUrl, esimCompatiblePath, PageParams } from "@/constants/constants";
import { generateDynamicSeo } from "@/lib/seo/generateDynamicSeo";

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
  const t = await getTranslations(`EsimCompatiblePage.metaData`);
  return generateDynamicSeo({
    meta_title: t(`title`),
    meta_description: t(`description`),
    meta_keywords: t(`keywords`),
    locale,
    url: `${baseUrl}${esimCompatiblePath}`,
  });
}

async function page({ params }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations("EsimCompatiblePage");
  return (
    <>
      {/* <ShowPromotionalBanner /> */}

      <section className="xl:container-fluid bg-primary-lightest">
        <div className=" gap-y-[2.5rem] px-[1rem] py-[3.5rem] container">
          {/* Left Content */}
          <div className="flex my-8 flex-col justify-center items-center gap-[1.5rem] xl:col-span-1">
            <h1 className="text-center font-montserrat text-h1-base font-600 tracking-wide leading-none md:text-h1-md xl:text-start xl:text-h1-xl">
              {t("hero.heading")}
            </h1>
            <p className="text-xs max-w-[360px] text-center md:text-sm md:max-w-[1000px]">
              {t("hero.description")}
            </p>
            <CheckCompatibilityModal>
              <div className="relative max-w-3xl w-full">
                <Input
                  placeholder={t("hero.searchPlaceholder")}
                  className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
                  readOnly
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />
              </div>
            </CheckCompatibilityModal>
          </div>
        </div>
      </section>

      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("iPhones.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("iPhones.description")}
            </p>
          </div>
          <div className="my-4 px-2">
            <ul className="grid grid-cols-2 gap-2 text-base sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
              {iPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* iPads section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("iPads.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("iPads.description")}
            </p>
          </div>

          <div className="my-3 px-2">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
              <ul className="">
                <p className="mb-8 mt-2 font-semibold">iPad Pro 11inch</p>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 1st generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 2nd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 4th generation{" "}
                </li>
              </ul>
              <ul className="">
                <p className="mb-8 font-semibold">iPad Air</p>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 4th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> iPad Air 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="mb-8 font-semibold">iPad Mini</p>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="mb-8 font-semibold">iPad Pro 12.9inch</p>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 4th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="font-semibold">iPad</p>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 7th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 8th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 9th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  <Smartphone /> 10th generation{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* samsung section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Samsung.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Samsung.description")}
            </p>
            <p className="font-semibold text-center text-sm md:text-lg">
              {t("Samsung.descriptionTwo")}
            </p>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
              {samsungPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* google pixel section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl font-semibold md:font-bold md:text-4xl">
              {t("GooglePixel.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("GooglePixel.description")}
            </p>
            <div className="inline-block rounded-sm bg-primary/20 px-3">
              <p className="text-primary">{t("GooglePixel.descriptionTwo")}</p>
            </div>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {googlePixel.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Huawei phones section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl font-semibold md:font-bold md:text-4xl">
              {t("Huawei.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Huawei.description")}
            </p>
            <div className=" rounded-sm bg-primary/20 px-3 ">
              <p className="text-primary">
                <a
                  className="underline hover:text-primary/50"
                  target="_blank"
                  href="https://consumer.huawei.com/en/community/details/Huawei-P40-and-P40-Pro%3A-eSIM-%E2%80%93-Virtual-SIM-Card/topicId_84159/"
                  rel="noopener noreferrer"
                >
                  Huawei P40 Pro+
                </a>{" "}
                {t("Huawei.noSupport")}
              </p>
            </div>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-3 text-base sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
              {huaweiPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Oppo mob section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Oppo.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Oppo.description")}{" "}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {oppoPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
              {oppoPhones2.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Sony Phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Sony.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Sony.description")}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {sonyPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Xiamoi phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Xiaomi.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Xiaomi.description")}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {xiaomiPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
              {xiaomiPhones2.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Motorolla phones section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Motorola.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Motorola.description")}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {motorolaPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
              {motorolaPhones2.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Honor Phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("Honor.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("Honor.description")}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {honorPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/*Other android section  */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-center py-4 gap-5">
            <h2 className="text-3xl text-center font-semibold md:font-bold md:text-4xl">
              {t("OtherAndroid.heading")}
            </h2>
            <p className="py-2 max-w-3xl text-center ">
              {t("OtherAndroid.description")}
            </p>
          </div>
          <div className="mt-6 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3 lg:grid-cols-4">
              {otherPhones.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
              {otherPhones2.map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Supported by Smartphones */}
      <section className="my-16 text-base">
        <div className="container">
          <h2 className="pb-3 text-h2-base font-semibold text-foreground/80">
            {t("supportedSection.heading")}
          </h2>
          <p className="py-2">{t("supportedSection.description")}</p>
          <p>{t("supportedSection.descriptionTwo")}</p>

          <CompatibleTable />
        </div>
      </section>

      <FAQSection namespace={FAQ_NAMESPACES.EsimCompatiblePage} />
      <AppInstall />
    </>
  );
}

export default page;
