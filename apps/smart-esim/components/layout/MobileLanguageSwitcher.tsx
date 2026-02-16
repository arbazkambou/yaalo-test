"use client";

import spainFlag from "@/assets/flags/spain.svg";
import usaFlag from "@/assets/flags/usa.svg";
import netherlandsFlag from "@/assets/flags/netherlands.svg";
import arabicFlag from "@/assets/flags/uae.svg";
import franceFlag from "@/assets/flags/france.svg";
import turkeyFlag from "@/assets/flags/turkey.svg";
import italyFlag from "@/assets/flags/italy.svg";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "next-intl";
import Image from "next/image";
import { useTransition } from "react";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";

interface PropsType {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  locale: Locale;
}

const LANGUAGES: Array<{
  code: Locale;
  label: string;
  iso: string;
  imgSrc: any;
}> = [
  { code: "en", label: "English", iso: "EN", imgSrc: usaFlag },
  { code: "es", label: "Español", iso: "ES", imgSrc: spainFlag },
  { code: "ar", label: "العربية", iso: "AR", imgSrc: arabicFlag },
  { code: "nl", label: "Nederlands", iso: "NL", imgSrc: netherlandsFlag },
  { code: "fr", label: "Français", iso: "FR", imgSrc: franceFlag },
  { code: "it", label: "Italiano", iso: "IT", imgSrc: italyFlag },
  { code: "tr", label: "Türkçe", iso: "TR", imgSrc: turkeyFlag },
];

export default function MobileLanguageSwitcher({
  locale,
  setShowNav,
}: PropsType) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const selected = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  function switchLocale(nextLocale: Locale) {
    setShowNav(false);
    startTransition(() => router.replace(pathname, { locale: nextLocale }));
    window.location.href = pathname;
  }

  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger
          disabled={isPending}
          className="group flex items-center gap-2 rounded-pill border-none px-3 py-1 font-sans text-sm font-500 bg-black/10 hover:bg-accent data-[state=open]:bg-primary-lightest"
        >
          <Image
            src={selected?.imgSrc}
            alt={`${selected?.label} flag`}
            width={18}
            height={18}
            className="rounded-sm object-cover"
          />
          <span>{selected?.iso}</span>

          <ChevronDown
            size={18}
            className="transition-all group-data-[state=open]:rotate-180"
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="CollapsibleContent mt-2 flex flex-col gap-2 ps-2 text-sm data-[state=open]:pt-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => switchLocale(l.code)}
              disabled={isPending}
              className={`flex w-full items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-accent ${
                locale === l.code ? "text-primary" : "text-foreground"
              }`}
            >
              <Image
                src={l.imgSrc}
                alt={`${l.label} flag`}
                width={18}
                height={18}
                className="rounded-sm object-cover"
              />
              <span className="text-start">{l.label}</span>
            </button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
