import CountryHeadingWithFlag from "@/components/packages/CountryHeadingWithFlag";
import { useTranslations } from "next-intl";
import Image from "next/image";

function CountryImageAndHeadings({
  countryImage,
  countryName,
  countryFlag,
}: {
  countryImage: string;
  countryName: string;
  countryFlag: string;
}) {
  const isDataVoice = false;
  const t = useTranslations("SharedUI.countryHeadings");
  return (
    <div className="relative w-full rounded-[2.5rem] xl:flex xl:h-[700px]">
      <Image
        src={countryImage}
        fill
        sizes="auto"
        alt={`${countryName} image`}
        priority
        quality={70}
        className="hidden rounded-[2.5rem] object-cover xl:block"
      />

      <div className="absolute inset-0 hidden rounded-[2.5rem] bg-gradient-to-b from-foreground/80 via-foreground/40 to-transparent xl:block"></div>
      <div className="z-20 flex flex-col items-center justify-center gap-4 md:gap-6 xl:absolute xl:top-2 xl:text-background xl:opacity-95">
        <div className="flex flex-col gap-4 rounded-[2.5rem] p-4 xl:rounded-b-none xl:rounded-t-[2.5rem]">
          <h1 className="flex flex-col items-center justify-center gap-6">
            {isDataVoice ? (
              <>
                <CountryHeadingWithFlag
                  title={t("title.dataVoice")}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  description={t("headingDescription.dataVoice", {
                    country: countryName,
                  })}
                />
              </>
            ) : (
              <>
                <CountryHeadingWithFlag
                  title={t("title.dataOnly")}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  description={t("headingDescription.dataOnly", {
                    country: countryName,
                  })}
                />
              </>
            )}
          </h1>

          <p className="text-center text-body-sm md:text-body-base">
            {isDataVoice
              ? t("paragraph.dataVoice", { country: countryName })
              : t("paragraph.dataOnly", { country: countryName })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryImageAndHeadings;
