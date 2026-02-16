import NavSkelton from "@/components/ui/skeltons/NavSkelton";
import { Link, usePathname } from "@/i18n/navigation";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";
import { cn } from "@workspace/ui/lib/utils";
import { useTranslations } from "next-intl";
import AccountMenu from "./AccountMenu";

function AuthLinks() {
  const t = useTranslations("SharedUI.navLinks");
  const { isAuthLoading, isAuthenticated, logOut } = useAuth();
  const pathname = usePathname();

  const nonAuthLinks = [{ key: "login", label: t("login"), href: "/login/" }];

  const baseClasses =
    "flex items-center gap-2 rounded-pill border-[2px] border-primary/10 sm:px-3.5 sm:py-2.5 px-3 py-2.5 font-sans text-sm font-500 transition-all duration-200 hover:bg-primary hover:text-background";

  if (isAuthLoading) return <NavSkelton />;

  if (isAuthenticated) return <AccountMenu />;

  return nonAuthLinks.map((item, index) => (
    <Link
      key={index}
      href={item.href}
      className={cn(
        baseClasses,
        `${item.href === pathname ? "bg-primary/10 text-foreground border-transparent" : ""}`
      )}
    >
      {/* <User size={16} /> */}
      {item.label}
    </Link>
  ));
}

export default AuthLinks;
