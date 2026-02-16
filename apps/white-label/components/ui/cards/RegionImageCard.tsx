"use client";
import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";

interface PropsType {
  slug: string;
  name: string;
  imgSrc: string;
  index?: number;
  starts_at: number;
}
function RegionImageCard({ name, slug, imgSrc, starts_at }: PropsType) {
  const pathName = usePathname();
  const t = useTranslations("RegionalPage");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div className="w-full">
      <Link
        href={
          pathName === "/data-voice-sms/regional/"
            ? `/esim-${generateSlug(slug)}`
            : `/esim-${slug}/`
        }
        className="w-full relative group flex justify-between rounded-lg px-2 py-[0.94rem] transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl overflow-hidden border-2 border-border bg-card"
      >
        <div className="flex flex-col gap-2">
          <div className="relative h-9 w-[54px]">
            <Image
              src={imgSrc}
              alt={`${name} flag`}
              sizes="54px"
              fill
              quality={100}
              className="shrink-0 object-contain rounded-[8px]"
            />
          </div>
          <h3 className="text-body-base font-500 ml-2">{name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-body-xs ml-2">
                {t("startsAt")} ${starts_at}
              </p>
            </div>
            <div className="absolute end-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/30">
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RegionImageCard;
