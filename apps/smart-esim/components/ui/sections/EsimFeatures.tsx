import { eSimFeaturesData } from "@/constants/UIData";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function EsimFeatures() {
  const t = await getTranslations("HomePage.esimFeatures");

  return (
    <section className="bg-muted">
      <div className="container grid gap-[3rem] py-12 justify-center md:grid-cols-2 xl:grid-cols-4">
        <h2 className="hidden">{t("title")}</h2>
        {eSimFeaturesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-primary items-center lg:items-start gap-5"
          >
            <div className="h-13 w-13 bg-primary/10 rounded-full items-center text-center justify-center flex">
              {item.imgSrc}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-center lg:text-start font-montserrat text-2xl font-600 text-foreground">
                {t(`features.${item.key}.title`)}
              </h3>
              <p className="lg:text-start text-center text-sm max-w-[270px] leading-[26px] text-foreground-light">
                {t(`features.${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EsimFeatures;
