"use client";

import Logo from "@/components/layout/Logo";
import Navbar from "@/components/layout/Navbar";
import { usePathname } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { useEffect, useState } from "react";

type HeaderProps = {
  locale: Locale;
};

function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const path = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  const blueBgRoutes = [
    "/esim",
    "/regional",
    "/global",
    "/about-us",
    "/contact-us",
    "/help-center",
    "/esim-compatible",
    "/faqs",
    "/refund-policy",
    "/privacy-policy",
    "/terms",
    "/blog",
  ];

  const isBlogBlue = path === "/blog" || /^\/blog\/[^/]+$/.test(path);

  const hasBlueBg = blueBgRoutes.includes(path) || isBlogBlue;

  const bgClass =
    pathname === "/"
      ? "bg-card"
      : hasBlueBg
        ? "bg-primary-lightest"
        : "bg-card";

  const scrollClass =
    "xl:inset-shadow-sm/5 xl:shadow-xl/10 xl:bg-muted/60 xl:border-t-0 xl:border-border/50 xl:backdrop-blur-lg xl:translate-y-1.5";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full ${bgClass} pt-4 sm:pt-6 flex items-center justify-center `}
    >
      <div className={`xl:h-[90px] w-full flex justify-center`}>
        <div
          className={`xl:fixed xl:top-6 xl:z-50 xl:transition-all duration-300 ease-out ${isScrolled ? scrollClass : ""} container flex items-center justify-between p-3 sm:p-5 border border-border bg-card rounded-pill mx-2 `}
        >
          <Logo />
          <Navbar locale={locale} />
        </div>
      </div>
    </header>
  );
}

export default Header;
