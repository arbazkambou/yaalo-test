import GetSearchPackagesList from "@/components/data-fetching/GetSearchPackagesList";
import SearchPackagesListSkelton from "@/components/ui/skeltons/SearchPackagesListSkelton";
import { Suspense } from "react";
import NavigationButton from "./NavigationButton";
import { Link } from "@/i18n/navigation";
import { Locale } from "next-intl";

interface PropsType {
  tabsLinks: { href: string; label: string }[];
  locale: Locale;
}
function CountryRegionNavigation({ tabsLinks, locale }: PropsType) {
  return (
    <section className="mt-16 container">
      <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-[2.31rem] ">
        {/* search input  */}
        <div className={`w-full md:w-[80%] lg:w-[689px]`}>
          <Suspense
            fallback={<SearchPackagesListSkelton className="bg-accent" />}
          >
            <GetSearchPackagesList locale={locale} />
          </Suspense>
        </div>
        {/* pages links  */}
        <Suspense>
          <div className="border border-border rounded-xl p-0.5 gap-0.5 w-full md:w-[80%] lg:w-[420px] flex items-center justify-center">
            {tabsLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                scroll={false}
                className="flex-1"
              >
                <NavigationButton item={item} />
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default CountryRegionNavigation;
