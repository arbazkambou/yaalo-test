import { Suspense } from "react";
import SearchPackagesListSkelton from "../skeltons/SearchPackagesListSkelton";
import GetSearchPackagesList from "@/components/data-fetching/GetSearchPackagesList";
import { Locale } from "next-intl";

type CountryRegionProps = {
  heading?: string;
  description?: string;
  enableSearchList?: boolean;
  locale?: Locale;
};

function CountryRegionsHero({
  heading,
  description,
  enableSearchList = true,
  locale,
}: CountryRegionProps) {
  return (
    <section className="xl:container-fluid bg-primary-lightest pt-12 pb-20">
      <div className="flex flex-col items-center justify-center container">
        <div className="flex flex-col justify-center items-center gap-[1rem] xl:col-span-1">
          <h1 className="md:text-[50px] text-2xl font-bold text-center md:font-700 text-foreground md:leading-[81px]">
            {heading ? heading : "Choose Your Destination"}
          </h1>
          <div className="flex flex-col max-w-3xl items-center justify-center gap-6">
            {description && (
              <p className="text-center mx-auto">{description}</p>
            )}
            {enableSearchList && (
              <div className={`w-[98%] xs:w-[90%] md:w-[80%] xl:w-full`}>
                <Suspense
                  fallback={<SearchPackagesListSkelton className="bg-accent" />}
                >
                  <GetSearchPackagesList locale={locale} />
                </Suspense>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryRegionsHero;
