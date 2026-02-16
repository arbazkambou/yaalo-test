"use client";

import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu";
import { Cpu, LogOut, UserIcon, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";


function AccountMenu() {
  const t = useTranslations("SharedUI.navLinks");
  const pathname = usePathname();
  const { logOut } = useAuth();

  const authLinks = [
    {
      key: "wallet",
      label: t("wallet"),
      svg: <Wallet size={100} className="shrink-0" />,
      href: "/refill/",
    },
    {
      key: "esim",
      label: t("esim"),
      svg: <Cpu size={100} className="shrink-0 " />,
      href: "/my-esims/",
    },
    {
      key: "logout",
      label: t("logout"),
      svg: <LogOut size={24} className="shrink-0" />,
      href: "",
    }, // stay on same page
  ];

  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={(e) => e.preventDefault()}
            className="flex items-center rounded-pill h-auto! px-4! py-2.5! border-2 border-primary/10 font-sans text-sm font-500 transition-all duration-200 hover:bg-primary! hover:text-primary-foreground! data-[state=open]:bg-primary! data-[state=open]:text-background bg-transparent! gap-2"
          >
            <UserIcon /> {t("account")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex h-full w-[180px] flex-col p-1.5">
              {authLinks.map((item, subIndex) => (
                <NavigationMenuLink
                  className={`flex-1 text-foreground rounded-sm px-2 py-1.5 text-sm transition-all hover:bg-muted ${
                    item.href === pathname && "font-500 text-primary!"
                  }`}
                  asChild
                  key={subIndex}
                  onClick={(e) => {
                    if (item.key !== "logout") return;
                    e.preventDefault();
                    logOut();
                  }}
                >
                  <Link
                    href={item.href}
                    passHref
                    className="flex flex-row items-center gap-2 w-full [&_svg]:h-6 [&_svg]:w-6"
                  >
                    {item.svg}
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default AccountMenu;
