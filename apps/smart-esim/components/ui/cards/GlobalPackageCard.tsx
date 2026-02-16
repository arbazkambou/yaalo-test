import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import globalFlag from "@/public/images/globalFlag.svg";
import { useTranslations } from "next-intl";
import { ChevronRight, Tag } from "lucide-react";

export default function GlobalPackageCard() {
  const t = useTranslations("HomePage.startingPrice");

  return (
    <Link
      className="relative group lg:max-w-[450px] flex justify-between rounded-3xl border px-[1.06rem] py-[0.94rem] hover:border-primary  hover:shadow-xl overflow-hidden bg-muted hover:bg-background"
      href="/global"
    >
      <div className="absolute inset-0 bg-[url('/images/smart-bg.png')] bg-cover bg-center bg-no-repeat" />

      <div className="flex flex-col  gap-3">
        <div className="">
          <Image
            src={globalFlag}
            alt="global flag"
            className="object-cover rounded-full bg-background shadow-sm h-[73px] w-[73px]"
          />
        </div>
        <h3 className="text-body-base md:text-lg md:font-semibold font-500">
          {t("globalPackage")}
        </h3>
        <div className="flex items-center justify-between">
          {/* Tag + price inline */}
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <p className="text-sm">{t("noOfCountries")}</p>
          </div>

          <ChevronRight className={`end-4 absolute`} />
        </div>
      </div>
    </Link>
  );
}
