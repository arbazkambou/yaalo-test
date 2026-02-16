import { Locale } from "next-intl";
import CartQuantityButton from "../cart/CartQuantityButton";
import AuthLinks from "./AuthLinks";
import DropdownLinks from "./DropdownLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLinks from "./NavLinks";

type NavbarProps = {
  locale: Locale;
};
export default function Navbar({ locale }: NavbarProps) {
  return (
    <>
      <div className="xl:hidden">
        <CartQuantityButton />
      </div>

      <div className="hidden items-center gap-1.5 xl:flex 2xl:gap-4">
        <NavLinks />
        <DropdownLinks />
      </div>
      <div className="hidden items-center gap-2 xl:flex 2xl:gap-4">
        <AuthLinks />
        <CartQuantityButton />
        <LanguageSwitcher locale={locale} />
      </div>
    </>
  );
}
