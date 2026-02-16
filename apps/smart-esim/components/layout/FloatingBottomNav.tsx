"use client";

import {
  CpuBolt,
  HamburgerMenu,
  HomeSmile,
  SimCards,
  UserCircle,
} from "@solar-icons/react";
import { Icon } from "@solar-icons/react/lib/types";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { Link } from "@/i18n/navigation";

import { useState } from "react";
import MobileNav from "./MobileNav";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FloatingBottomNav() {
  const t = useTranslations("SharedUI.navLinks");
  const { isAuthenticated } = useAuth();
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(false);

  type Base = {
    id: string;
    label: string;
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
    { id: "Home", label: t("home"), icon: HomeSmile, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      label: t("buyEsim"),
      icon: SimCards,
      href: "/esim/",
      type: "link",
    },
    {
      id: "Login",

      label: t("login"),

      icon: UserCircle,

      href: "/login/",

      type: "link",
    },
    { id: "More", label: t("more"), icon: HamburgerMenu, type: "button" },
  ];

  const authLinks: Link[] = [
    { id: "Home", label: "Home", icon: HomeSmile, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      label: t("buyEsim"),
      icon: SimCards,
      href: "/esim/",
      type: "link",
    },
    {
      id: "eSIMs",
      label: t("myEsim"),
      icon: CpuBolt,
      href: "/my-esims/",
      type: "link",
    },
    { id: "More", label: t("more"), icon: HamburgerMenu, type: "button" },
  ];

  const navLinks = isAuthenticated ? authLinks : noAuthLinks;

  return (
    <>
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
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 ${isActive ? "text-secondary-green" : "text-foreground-light/80"}`}
                  >
                    <Icon
                      className={`mb-1 size-[30px] transition-all duration-300  hover:scale-110`}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300`}
                    >
                      {tab.label}
                    </span>
                  </button>
                ) : (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${isActive ? "text-secondary-green" : "text-foreground-light/80"}`}
                  >
                    <Icon
                      className={`mb-1 size-[30px] transition-all duration-300  hover:scale-110`}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300 }`}
                    >
                      {tab.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <MobileNav showNav={showNav} setShowNav={setShowNav} />
      </div>
    </>
  );
}
