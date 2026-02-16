"use client";

import arabicFlag from "@/assets/flags/uae.svg";
import usaFlag from "@/assets/flags/usa.svg";
import spanishFlag from "@/assets/flags/spain.svg";
import netherlandFlag from "@/assets/flags/netherlands.svg";
import turkeyFlag from "@/assets/flags/turkey.svg";
import frenchFlag from "@/assets/flags/france.svg";
import italyFlag from "@/assets/flags/italy.svg";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "next-intl";
import Image from "next/image";
import * as React from "react";
import { useState, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@workspace/ui/components/select";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown, Languages } from "lucide-react";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";

/**
 * Desktop-only animation (same flip/glow style as navbar items)
 */
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any },
      scale: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function DesktopAnimatedTrigger({
  children,
  gradient,
  iconColor,
}: {
  children: React.ReactNode;
  gradient: string;
  iconColor: string;
}) {
  return (
    <motion.div
      className="block rounded-xl overflow-visible group relative"
      style={{ perspective: "600px" }}
      whileHover="hover"
      initial="initial"
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
        variants={glowVariants}
        style={{ background: gradient, opacity: 0 }}
      />

      {/* Front */}
      <motion.div
        className="relative z-10"
        variants={itemVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
        }}
      >
        {children}
      </motion.div>

      {/* Back */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        variants={backVariants}
        transition={sharedTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          rotateX: 90,
        }}
      >
        <div
          className={`${iconColor} flex items-center justify-center w-full h-full`}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

type PropsType = {
  locale: Locale;
};

function LanguageSwitcher({ locale }: PropsType) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);

  const countryFlags = [
    { label: "English", imgSrc: usaFlag, code: "en" as const, iso: "EN" },
    { label: "Español", imgSrc: spanishFlag, code: "es" as const, iso: "ES" },
    { label: "العربية", imgSrc: arabicFlag, code: "ar" as const, iso: "AR" },
    {
      label: "Netherlands",
      imgSrc: netherlandFlag,
      code: "nl" as const,
      iso: "NL",
    },
    { label: "Türkçe", imgSrc: turkeyFlag, code: "tr" as const, iso: "TR" },
    { label: "Français", imgSrc: frenchFlag, code: "fr" as const, iso: "FR" },
    {
      label: "Italiano",
      imgSrc: italyFlag,
      code: "it" as const,
      iso: "IT",
    },
  ];

  const selectedCountry = countryFlags.find((item) => item.code === locale);

  function handleValueChange(value: Locale) {
    startTransition(() => {
      // @ts-expect-error -- validated by next-intl routing config
      router.replace({ pathname, params }, { locale: value });
    });

    // Keeping your existing behavior:
    window.location.href = pathname;
  }

  // Matches your navbar “special” purple-ish glow
  const animConfig = React.useMemo(
    () => ({
      gradient:
        "radial-gradient(circle, rgba(250,204,21,0.18) 0%, rgba(234,179,8,0.08) 50%, rgba(202,138,4,0) 100%)",
      iconColor: "text-yellow-500",
    }),
    [],
  );

  return (
    <>
      {/* Desktop (animated) */}
      <div className="hidden xl:block">
        <Select
          value={locale}
          onValueChange={handleValueChange}
          disabled={isPending}
        >
          <SelectTrigger className="border-0 shadow-none focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer w-max h-auto! p-0 bg-transparent! [&>svg]:hidden">
            <DesktopAnimatedTrigger
              gradient={animConfig.gradient}
              iconColor={animConfig.iconColor}
            >
              {/* IMPORTANT: stable sizing to avoid hover jump */}
              <div className="flex items-center gap-2 px-2 py-2 rounded-xl">
                <Languages size={22} className="shrink-0" />
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {selectedCountry?.iso || "EN"}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 opacity-70"
                />
              </div>
            </DesktopAnimatedTrigger>
          </SelectTrigger>

          <SelectContent className="min-w-[200px] rounded-lg border border-border bg-popover p-1.5 shadow-xl">
            {countryFlags.map((item, index) => (
              <SelectItem
                key={index}
                value={item.code}
                className="cursor-pointer rounded-md px-3 py-2.5 transition-colors hover:bg-muted focus:bg-muted data-[state=checked]:bg-muted"
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
      </div>

      {/* Mobile (NOT animated) */}
      <div className="block xl:hidden">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger
            className={cn(
              "group flex items-center gap-1.5 rounded-full border-none px-3 py-1.5",
              "font-sans text-sm font-medium transition-colors",
            )}
            disabled={isPending}
          >
            <Languages size={18} />
            <span>{selectedCountry?.iso || "EN"}</span>
            <ChevronDown
              size={18}
              className="transition-all group-data-[state=open]:rotate-180"
            />
          </CollapsibleTrigger>

          <CollapsibleContent className="CollapsibleContent flex flex-col gap-1.5 ps-6 text-sm data-[state=open]:pt-3">
            {countryFlags.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => handleValueChange(item.code)}
                disabled={isPending}
                className={cn(
                  "flex items-center gap-2 py-1.5 text-left transition-colors",
                  "hover:text-primary focus:text-primary focus:outline-none",
                  locale === item.code && "text-primary font-medium",
                )}
              >
                {item.label}
                <span className="text-xs font-normal text-muted-foreground">
                  {item.iso}
                </span>
              </button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
}

export default LanguageSwitcher;
