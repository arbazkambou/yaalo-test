import { Link, usePathname } from "@/i18n/navigation";
import DropdownLinks from "./DropdownLinks";
import { useTranslations } from "next-intl";

export default function NavLinks() {
  const pathname = usePathname();
  const t = useTranslations("SharedUI.navLinks");

  const navLinks = [
    {
      label: t("buyEsim"),
      href: "/destinations/",
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

  return (
    <nav
      className={`flex items-center gap-10 px-4 py-1.5 rounded-sm backdrop-blur-[2px]`}
    >
      {navLinks.map((item: any, index: number) => (
        <Link
          href={item.href}
          key={index}
          className={`text-sm font-500 hover:text-foreground/50 ${pathname === item.href ? "text-primary" : "text-foreground"}`}
        >
          {item.label}
        </Link>
      ))}
      <DropdownLinks />
    </nav>
  );
}
