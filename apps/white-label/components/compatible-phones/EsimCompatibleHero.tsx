
import React from "react";
import CheckCompatibilityModal from "../ui/dialogs/CheckCompatibilityDialog";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import Image from "next/image";
import bgHero from "@/assets/images/heroBackground.png";
import bgHeroDark from "@/assets/images/heroBackgroundDark.png";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function EsimCompatibleHero({locale}:{locale:Locale}) {
   const t = await getTranslations("EsimCompatiblePage.hero");
  const isArabic = locale === "ar";

  return (
    <section className="pb-[50px] relative overflow-hidden">
      <Image
        src={bgHero}
        alt="Hero background light"
        fill
        quality={100}
        priority
        className="object-cover object-center dark:hidden"
      />

      <Image
        src={bgHeroDark}
        alt="Hero background dark"
        fill
        quality={100}
        priority
        className="object-cover object-center hidden dark:flex"
      />
      <div className="container relative z-10 grid pt-40 place-items-center gap-y-[2.5rem] px-[1rem] py-[3.5rem]">
        <div className="flex w-full  flex-col items-center gap-[1.5rem] text-center">
          <h1 className="text-h1 mb-4">{t("heading")}</h1>

          {/* Search */}
          <CheckCompatibilityModal>
            <div className="relative w-full max-w-[478px]">
              <Input
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
                readOnly
              />
              <Search className={`absolute top-1/2 -translate-y-1/2 text-foreground ${locale==="ar" ? "left-3":"right-3"}`} />
            </div>
          </CheckCompatibilityModal>
        </div>
      </div>
    </section>
  );
}
