import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";


export default function NavLinks() {
  const t = useTranslations("SharedUI.navLinks");
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
  const pathname = usePathname();
  const baseLinkClasses = `rounded-pill sm:px-3.5 sm:py-2.5 px-3 py-2.5 font-sans text-sm font-500 transition-all`;
  const linkColorClasses =
    "text-foreground hover:bg-primary hover:text-background!";

  return (
    <>
      {navLinks.map((item: any, index: number) => (
        <Link
          href={item.href}
          key={index}
          className={`${baseLinkClasses} ${linkColorClasses} ${
            pathname === item.href && "bg-primary/10 text-foreground!"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
