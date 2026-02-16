"use client";

import MobileNav from "@/components/layout/MobileNav";
import { BottomNavKey } from "@/types/keys";
import {
  CpuBolt,
  HamburgerMenu,
  HomeSmile,
  SimCards,
  UserCircle,
} from "@solar-icons/react";
import { Icon } from "@solar-icons/react/lib/types";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { useBottomNav } from "@workspace/core/hooks/cart/useBottomNav";
import { useTranslations } from "next-intl";
import { Locale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";

export default function FloatingBottomNav({ locale }: { locale: Locale }) {
    const t= useTranslations("SharedUI.navLinks");
  const { isAuthenticated, isAuthLoading } = useAuth();
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(false);
  const { showBottomNav } = useBottomNav();
  type Base = {
    id: string;
    labelKey: BottomNavKey;
    icon: Icon;
  };

  type LinkType = Base & {
    type: "link";
    href: string;
  };

  type ButtonType = Base & {
    type: "button";
    href?: never;
  };

  type Link = LinkType | ButtonType;

  const noAuthLinks: Link[] = [
    { id: "Home", labelKey: "home", icon: HomeSmile, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      labelKey: "buyEsim",
      icon: SimCards,
      href: "/destinations/",
      type: "link",
    },
    {
      id: "Login",
      labelKey: "login",
      icon: UserCircle,
      href: "/login/",
      type: "link",
    },
    { id: "More", labelKey: "more", icon: HamburgerMenu, type: "button" },
  ];

  const authLinks: Link[] = [
    { id: "Home", labelKey: "home", icon: HomeSmile, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      labelKey: "buyEsim",
      icon: SimCards,
      href: "/destinations/",
      type: "link",
    },
    {
      id: "eSIMs",
      labelKey: "myesim",
      icon: CpuBolt,
      href: "/my-esims/",
      type: "link",
    },
    { id: "More", labelKey: "more", icon: HamburgerMenu, type: "button" },
  ];

  const navLinks = isAuthenticated ? authLinks : noAuthLinks;

  return (
    showBottomNav &&
    !isAuthLoading && (
      <div className="sm:container ">
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:left-4 sm:right-4 md:left-8 md:right-8 xl:hidden ">
          <nav className=" sm:rounded-2xl border  px-2 py-2  bg-card shadow-[0_-5px_35px_0_rgba(0,0,0,0.20)]">
            <div className="flex items-center justify-around">
              {navLinks.map((tab) => {
                const Icon = tab.icon;
                const isActive = pathName === tab.href;

                return tab.type === "button" ? (
                  <button
                    key={tab.id}
                    onClick={
                      tab.id === "More" ? () => setShowNav(true) : () => {}
                    }
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 ${isActive ? "text-primary" : "text-foreground-light/80"}`}
                  >
                    <Icon
                      className={`mb-1 size-[30px] transition-all duration-300  hover:scale-110`}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300`}
                    >
                      {t(tab.labelKey)}
                    </span>
                  </button>
                ) : (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${isActive ? "text-primary" : "text-foreground-light/80"}`}
                  >
                    <Icon
                      className={`mb-1 size-[30px] transition-all duration-300  hover:scale-110`}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300 }`}
                    >
                      {t(tab.labelKey)}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <MobileNav showNav={showNav} setShowNav={setShowNav} locale={locale} />
      </div>
    )
  );
}
