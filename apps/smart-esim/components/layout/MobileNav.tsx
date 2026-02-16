import FooterLink from "@/components/ui/links/FooterLink";
import NavSkelton from "@/components/ui/skeltons/NavSkelton";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@workspace/ui/components/sheet";
import { ChevronDown, Cpu, LogOut, User, Wallet } from "lucide-react";
import { Link } from "@/i18n/navigation";

import Logo from "./Logo";
import { usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";

interface PropsType {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({ showNav, setShowNav }: PropsType) {
  const t = useTranslations("SharedUI.navLinks");
  const locale = useLocale();
  const navLinks = [
    {
      label: t("buyEsim"),
      href: "/esim/",
    },
    {
      label: t("aboutUs"),
      href: "/about-us/",
    },
    {
      label: t("contactInfo"),
      href: "/contact-us/",
    },
  ];
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
  const nonAuthLinks = [
    {
      label: t("login"),
      href: "/login/",
    },
  ];

  const authLinks = [
    {
      label: t("wallet"),
      svg: <Wallet size={20} />,
      href: "/refill/",
    },
    {
      label: t("esim"),
      svg: <Cpu size={20} />,
      href: "/my-esims/",
    },

    {
      label: t("logout"),
      svg: <LogOut size={20} />,
      href: "#",
    },
  ];
  const { isAuthLoading, isAuthenticated, logOut } = useAuth();
  const pathName = usePathname();
  return (
    <Sheet open={showNav} onOpenChange={setShowNav}>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <Logo />
        </SheetHeader>

        <div className="mt-6 flex h-full flex-col items-start gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`rounded-pill px-1 py-1 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
              onClick={() => setShowNav(false)}
            >
              {item.label}
            </Link>
          ))}

          {dropdownLinks.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger
                className={`group flex items-center gap-1 rounded-pill border-none px-1 py-1 font-sans text-sm font-500 ${item.items.find((item) => item.href === pathName) && "bg-primary px-3 text-background"}`}
              >
                {item.label}{" "}
                <ChevronDown
                  size={18}
                  className="transition-all group-data-[state=open]:rotate-180"
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="CollapsibleContent flex flex-col gap-2 ps-6 text-sm data-[state=open]:pt-3">
                {item.items.map((item, index) => (
                  <FooterLink
                    key={index}
                    href={item.href}
                    onClick={() => setShowNav(false)}
                    className={`${pathName === item.href && "text-primary"}`}
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
          <MobileLanguageSwitcher locale={locale} setShowNav={setShowNav} />
          {isAuthLoading ? (
            <NavSkelton />
          ) : isAuthenticated ? (
            authLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out ${item.label === "Logout" ? "hover:bg-destructive" : "hover:bg-primary"} hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
                onClick={() => {
                  if (item.label === "Logout") {
                    logOut();
                    setShowNav(false);
                  } else {
                    setShowNav(false);
                  }
                }}
              >
                {item.svg}
                {item.label}
              </Link>
            ))
          ) : (
            nonAuthLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
                onClick={() => setShowNav(false)}
              >
                <User size={16} />
                {item.label}
              </Link>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
