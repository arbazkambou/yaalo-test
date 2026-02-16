"use client";

import netherlandsFlag from "@/assets/flags/netherlands.svg";
import spainFlag from "@/assets/flags/spain.svg";
import arabicFlag from "@/assets/flags/uae.svg";
import franceFlag from "@/assets/flags/france.svg";
import turkeyFlag from "@/assets/flags/turkey.svg";
import italyFlag from "@/assets/flags/italy.svg";
import usaFlag from "@/assets/flags/usa.svg";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@workspace/ui/components/select";
import type { Locale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";

type PropsType = {
  locale: Locale;
};
function LanguageSwitcher({ locale }: PropsType) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const countryFlags = [
    {
      label: "English",
      imgSrc: usaFlag,
      code: "en",
      iso: "EN",
    },
    {
      label: "Español",
      imgSrc: spainFlag,
      code: "es",
      iso: "ES",
    },
    {
      label: "العربية",
      imgSrc: arabicFlag,
      code: "ar",
      iso: "AR",
    },
    {
      label: "Netherlands",
      imgSrc: netherlandsFlag,
      code: "nl",
      iso: "NL",
    },
    {
      label: "Français",
      imgSrc: franceFlag,
      code: "fr",
      iso: "FR",
    },
    {
      label: "Italiano",
      imgSrc: italyFlag,
      code: "it",
      iso: "IT",
    },
    { label: "Türkçe", imgSrc: turkeyFlag, code: "tr", iso: "TR" },
  ];

  const selectedCountry = countryFlags.find((item) => item.code === locale);

  function handleValueChange(value: Locale) {
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: value });
    });
    window.location.href = pathname;
  }
  return (
    <Select
      value={locale}
      onValueChange={handleValueChange}
      disabled={isPending}
    >
      <SelectTrigger className="group ring-0! cursor-pointer border-primary/10 border-2 flex w-max items-center gap-2.5 rounded-pill  transition-all duration-200 hover:bg-accent hover:shadow-md  data-[state=open]:bg-primary-lightest h-auto! sm:px-3.5! sm:py-2.5! px-3! py-2.5!">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Image
              src={
                selectedCountry
                  ? selectedCountry.imgSrc
                  : "/images/flags/usa.svg"
              }
              height={24}
              width={24}
              alt={
                selectedCountry ? `${selectedCountry.label} flag` : "USA flag"
              }
              className="rounded-sm object-cover"
            />
          </div>
          <span className="text-sm font-medium text-foreground">
            {selectedCountry?.iso || "EN"}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent className="min-w-[200px] rounded-lg border border-border bg-popover p-1.5 shadow-xl">
        {countryFlags.map((item, index) => (
          <SelectItem
            key={index}
            value={item.code}
            className="cursor-pointer rounded-md px-3 py-2.5 transition-colors hover:bg-accent focus:bg-accent data-[state=checked]:bg-accent/50"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={item.imgSrc || "/placeholder.svg"}
                  height={20}
                  width={20}
                  alt={item.label}
                  className="rounded-sm object-cover ring-1 ring-border/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {item.iso}
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSwitcher;
