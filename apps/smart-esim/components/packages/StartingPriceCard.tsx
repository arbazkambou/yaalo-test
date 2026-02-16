import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { Country } from "@workspace/core/types/services/packages/packages.types";
import { ChevronRight, Tag } from "lucide-react";
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
  const isArabic =
    locale === "ar" &&
    (pathname.includes("/esim") || pathname.includes("/data-voice-sms"));
  return (
    <Link
      className="relative group flex justify-between rounded-3xl border px-[1.06rem] py-[0.94rem] hover:border-primary  hover:shadow-xl overflow-hidden bg-muted hover:bg-background"
      href={
        country.slug
          ? `/esim/${country.slug}`
          : `/${generateSlug(country.name)}`
      }
    >
      <div className="absolute inset-0 bg-[url('/images/smart-bg.png')] bg-cover bg-center bg-no-repeat" />

      <div className="flex flex-col gap-3">
        <div className="relative h-6 w-[34px]">
          <Image
            src={country.image_url}
            alt={`${country.name} flag`}
            sizes="auto"
            fill
            className="shrink-0 rounded-[4px] object-cover"
          />
        </div>
        <h3 className="text-body-base font-500">{country.name}</h3>
        <div className="flex items-center justify-between">
          {/* Tag + price inline */}
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <p className="text-sm">
              {t("startsAt")} ${country.starts_at}
            </p>
          </div>

          <ChevronRight
            className={`end-4 absolute ${isArabic ? "rotate-180" : ""}`}
          />
        </div>
      </div>
    </Link>
  );
}

export default StartingPriceCard;
