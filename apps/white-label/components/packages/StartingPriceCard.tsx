import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { Country } from "@workspace/core/types/services/packages/packages.types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";


interface PropsType {
  country: Country;
}

function StartingPriceCard({ country }: PropsType) {
  const t = useTranslations("HomePage.startingPrice");

  const pathname = usePathname();
  const locale = useLocale();
  const isArabic = locale === "ar";
  // const isArabic =
  //   locale === "ar" &&
  //   (pathname.includes("/esim") || pathname.includes("/data-voice-sms"));
  return (
    <Link
      className="relative group flex justify-between rounded-lg border border-border px-[1.06rem] py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:shadow-2xl overflow-hidden bg-card"
      href={
        country.slug
          ? `/esim-${country.slug}/`
          : `/esim-${generateSlug(country.name)}/`
      }
    >
      <div className="flex flex-col gap-2">
        <div className="relative h-9 w-[54px]">
          <Image
            src={country.image_url}
            alt={`${country.name} flag`}
            sizes="54px"
            fill
            quality={100}
            className="shrink-0 object-cover rounded-[8px] shadow-sm"
          />
        </div>
        <h3 className="text-body-base font-500">{country.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-body-xs">{t("startsPrice")} ${country.starts_at}</p>
          </div>
          <div className={`absolute end-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 `}>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default StartingPriceCard;
