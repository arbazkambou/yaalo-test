import { Suspense } from "react";
import NavigationButton from "./NavigationButton";
import { Link } from "@/i18n/navigation";

interface PropsType {
  tabsLinks: { href: string; label: string }[];
}
function CountryRegionNavigation({ tabsLinks }: PropsType) {
  return (
    <section className="mb-6 mt-10 flex items-center justify-center">
      <Suspense>
        <div className="flex mx-auto rounded-full items-center bg-muted px-2 py-2 justify-center gap-[0.2rem] xs:gap-[0.5rem] md:gap-[1rem] ">
          {tabsLinks.map((item, index) => (
            <Link href={item.href} key={index} scroll={false}>
              <NavigationButton item={item} />
            </Link>
          ))}
        </div>
      </Suspense>
    </section>
  );
}

export default CountryRegionNavigation;
