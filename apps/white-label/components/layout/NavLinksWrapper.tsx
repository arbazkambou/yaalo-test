import { Locale } from "next-intl";
import CartQuantityButton from "../cart/CartQuantityButton";
import GetSearchPackagesList from "../data-fetching/GetSearchPackagesList";
import { AuthLinks } from "./AuthLinks";
import DarkModeToggle from "./DarkModeToggle";

export default function NavLinksWrapper({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-0">
      <span className="hidden xl:block">
        <AuthLinks />
      </span>
      <GetSearchPackagesList isIcon={true} locale={locale} />
      <DarkModeToggle />
      <CartQuantityButton />
    </div>
  );
}
