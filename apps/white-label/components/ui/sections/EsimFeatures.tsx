import { eSimFeaturesData } from "@/constants/UIData";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function EsimFeatures() {
    const t = await getTranslations("HomePage.esimFeatures");
  return (
    <section className="container mt-16">
      <div className="grid gap-[1.81rem] md:grid-cols-2 xl:grid-cols-4">
        {eSimFeaturesData.map((item, index) => (
          <div
            key={item.key}
            className="text-foreground flex flex-col gap-6 border p-3 rounded-3xl border-border bg-card"
          >
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="bg-primary-light p-2 rounded">
                <Image
                  src={item.imgSrc}
                 alt={t(`features.${item.key}.title`)}
                  height={40}
                  width={40}
                  sizes="auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-center font-montserrat text-body-base font-500">
                  {t(`features.${item.key}.title`)}
                </h3>
                <p className="text-center text-body-xs md:text-body-sm text-muted-foreground max-w-[300px]">
                  {t(`features.${item.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EsimFeatures;
