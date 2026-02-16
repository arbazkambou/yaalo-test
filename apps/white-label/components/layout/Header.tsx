import Navbar from "@/components/layout/Navbar";
import NavLinksWrapper from "./NavLinksWrapper";
import GetSearchPackagesList from "../data-fetching/GetSearchPackagesList";
import { Locale } from "next-intl";

type HeaderProps = {
  locale: Locale;
};

function Header({ locale }: HeaderProps) {
  return (
    <header className={`absolute xl:fixed top-0 w-full z-50 `}>
      <Navbar
        searchComponent={
          <GetSearchPackagesList isIcon={true} locale={locale} />
        }
        locale={locale}
      />
    </header>
  );
}

export default Header;
