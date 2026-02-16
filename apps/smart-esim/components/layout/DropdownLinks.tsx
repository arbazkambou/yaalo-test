"use client";

import { usePathname } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";


function DropdownLinks() {
  const t = useTranslations("SharedUI.navLinks");
  const dropdownLinks = [
    {
      label: t("more"),
      items: [
        {
          label: t("esimCompatible"),
          href: "/esim-compatible/",
        },
        {
          label: t("faqs"),
          href: "/faqs/",
        },
        {
          label: t("blog"),
          href: "/blog/",
        },
      ],
    },
  ];
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <NavigationMenu delayDuration={0}>
      <NavigationMenuList className="items-center gap-3 xl:flex 2xl:gap-4">
        {dropdownLinks.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
              onClick={(e) => e.preventDefault()}
              className={`flex items-center ${
                isHome ? "text-foreground" : "text-foreground"
              } rounded-pill border-none h-auto! sm:px-3.5! sm:py-2.5! px-3! py-2.5! font-sans text-sm font-500 transition-all duration-200 hover:bg-primary! hover:text-primary-foreground! data-[state=open]:bg-primary! data-[state=open]:text-background bg-transparent!`}
            >
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent
            //   forceMount={isMount}
            //   className={`${isMount ? "opacity-0" : "opacity-1"}`}
            >
              <ul className="flex w-[250px] flex-col p-3">
                {item.items.map((subItem, subIndex) => (
                  <NavigationMenuLink
                    className={`rounded-sm px-2 py-1.5 text-sm transition-all hover:bg-muted ${
                      subItem.href === pathname && "font-500 text-primary!"
                    }`}
                    asChild
                    key={subIndex}
                  >
                    <Link href={subItem.href} passHref>
                      {subItem.label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DropdownLinks;
