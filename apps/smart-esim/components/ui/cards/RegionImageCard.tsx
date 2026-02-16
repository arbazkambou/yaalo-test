"use client";
import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { ChevronRight, Tag } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Link, usePathname } from "@/i18n/navigation";

interface PropsType {
  slug: string;
  name: string;
  imgSrc: string;
  index?: number;
  starts_at: number;
}
function RegionImageCard({ name, slug, imgSrc, starts_at }: PropsType) {
  const t = useTranslations("RegionalPage");
  const pathname = usePathname();
  const locale = useLocale();
  const isArabic = locale === "ar" && pathname.includes("/regional");
  return (
    <Link
      className="relative group flex justify-between rounded-3xl border px-[1.06rem] py-[0.94rem] hover:border-primary hover:bg-background hover:shadow-xl overflow-hidden bg-muted"
      href={slug ? `/regional/${slug}` : `/${generateSlug(name)}`}
    >
      <div
        className="
            absolute inset-0
            bg-[url('/images/smart-bg.png')]
            bg-cover bg-center bg-no-repeat
          "
      />
      <div className="flex flex-col gap-3">
        <div className="relative w-11 h-11">
          <Image
            src={imgSrc}
            alt={`${name} flag`}
            sizes="auto"
            fill
            className="shrink-0 object-cover"
          />
        </div>
        <h3 className="text-body-base font-500">{name}</h3>
        <div className="flex items-center justify-between">
          {/* Tag + price inline */}
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <p className="text-sm">
              {t("startsAt")} ${starts_at}
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

export default RegionImageCard;
