import FooterLink from "@/components/ui/links/FooterLink";
import NavSkelton from "@/components/ui/skeltons/NavSkelton";
import {
  authLinks,
  dropdownLinks,
  navLinks,
  nonAuthLinks,
} from "@/constants/Links";
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
import { ChevronDown, User } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { Locale, useTranslations } from "next-intl";



interface PropsType {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  locale: Locale
}

function MobileNav({ showNav, setShowNav, locale }: PropsType) {
   const t= useTranslations("SharedUI.navLinks")
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
              className={`rounded-pill px-3 py-1 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-primary-foreground ${pathName === item.href && "bg-primary text-primary-foreground"}`}
              onClick={() => setShowNav(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          {dropdownLinks.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger
                className={`group flex items-center gap-1 rounded-pill border-none px-3 py-1 font-sans text-sm font-500 ${item.items.find((item) => item.href === pathName) && "bg-primary text-primary-foreground"}`}
              >
                {t(item.labelKey)}{" "}
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
                    className={`${pathName === item.href && "text-primary"}  dark:hover:text-primary`}
                  >
                    {t(item.labelKey)}
                  </FooterLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
          <LanguageSwitcher locale={locale}/>

          {isAuthLoading ? (
            <NavSkelton />
          ) : isAuthenticated ? (
            authLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out ${item.labelKey === "logout" ? "hover:bg-destructive" : "hover:bg-primary"} hover:text-background ${pathName === item.href && "bg-primary text-primary-foreground"}`}
                onClick={() => {
                  if (item.labelKey === "logout") {
                    logOut();
                    setShowNav(false);
                  } else {
                    setShowNav(false);
                  }
                }}
              >
                {item.svg}
             {t(item.labelKey)}
              </Link>
            ))
          ) : (
            nonAuthLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-primary-foreground"}`}
                onClick={() => setShowNav(false)}
              >
                <User size={16} />
              {t(item.labelKey)}
              </Link>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
