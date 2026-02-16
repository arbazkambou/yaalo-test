import esimSS from "@/assets/images/esimSS.png";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import { getTranslations } from "next-intl/server";

async function EsimCompatible() {
  const t = await getTranslations("HomePage.esimCompatible");

  return (
    <section className="mt-16 bg-card-dark">
      <div className="container text-background dark:text-foreground flex flex-col xl:flex-row items-center justify-between gap-[2.31rem]  py-12 md:gap-[2.88rem] md:py-[5.38rem] ">
        {/* text section  */}
        <div className="flex flex-col gap-[1.31rem] xl:mt-4 xl:gap-[3.06rem]">
          <h2 className="text-center text-h2 xl:text-start">{t("title")}</h2>
          <p className="text-center text-body-sm md:text-body-md xl:text-start w-full md:w-2xl">
            {t("description")}
          </p>
          <div className="hidden xl:block">
            <p className="mb-5"> {t("checkCompatibility")}</p>
            <div className="w-fit">
              <PrimaryButton
                className="bg-primary border-none!"
                variant="link"
                href={"/esim-compatible-devices/"}
              >
                {t("compatibleBtn")}
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* hero image  */}
        <div>
          <Image
            src={esimSS}
            alt="Distribution Partner with Yaalo eSIM"
            width={610}
            height={536}
            sizes="auto"
            className="object-cover"
            quality={70}
          />
        </div>

        <div className="flex flex-col xl:hidden">
          <p className="mb-5"> {t("checkCompatibility")}</p>
          <PrimaryButton
            className="bg-primary cursor-pointer hover:scale-105 transition-all"
            variant="link"
            href={"/esim-compatible-devices/"}
          >
            {t("compatibleBtn")}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default EsimCompatible;
