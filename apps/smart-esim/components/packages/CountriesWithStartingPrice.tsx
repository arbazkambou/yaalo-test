"use client";

import { Country } from "@workspace/core/types/services/packages/packages.types";
import StartingPriceCard from "./StartingPriceCard";
import { usePathname } from "@/i18n/navigation";

interface PropsType {
  countries: Country[];
}

function CountriesWithStartingPrice({ countries }: PropsType) {
  const pathName = usePathname();
  const isAllSims = ["/esim/", "/data-voice-sms/"].includes(pathName);
  const displayedCountries = isAllSims ? countries : countries.slice(0, 20);

  return (
    <div className="grid gap-x-[1.2rem] gap-y-[1.3rem] px-4 sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-5">
      {displayedCountries.map((country, index) => {
        return (
          <div key={index}>
            <StartingPriceCard country={country} />
          </div>
        );
      })}
    </div>
  );
}

export default CountriesWithStartingPrice;
