"use client";

import globalImg from "@/assets/svgs/globalMap.svg";
import { useCountryRegionSearch } from "@workspace/core/hooks/packages/useSearchPackagesList";
import {
  Country,
  SearchPackagesListReturn,
} from "@workspace/core/types/services/packages/packages.types";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { Search } from "lucide-react";
import CountryItem from "./CountryItem";
import { useTranslations, useLocale } from "next-intl";

type SearchPackagesListProps = {
  topDestinationsList: Country[];
  packagesList: SearchPackagesListReturn;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

function SearchPackagesList({
  packagesList,
  topDestinationsList,
  setShowDialog,
}: SearchPackagesListProps) {
  const t = useTranslations("SharedUI.searchPackagesList");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const {
    containerRef,
    filteredPackagesList,
    flags,
    handleSearchQuery,
    inputRef,
    searchQuery,
    setShowSuggestions,
    showSuggestions,
    topDestinations,
  } = useCountryRegionSearch({
    packagesList,
    topDestinations: topDestinationsList,
  });
  return (
    <div
      ref={containerRef}
      className="relative z-50 grid w-full grid-rows-[auto_1fr] gap-2"
    >
      {/* Search Input */}
      <div className="relative w-full">
        <Input
          placeholder={t("searchPlaceholder")}
          className={cn(
            "rounded-lg pe-4",
            isArabic ? "ps-4 pr-10" : "ps-10", // Arabic: space on RIGHT, others: space on LEFT
          )}
          onChange={handleSearchQuery}
          value={searchQuery}
          onFocus={() => {
            setShowSuggestions(true);
            setTimeout(() => {
              inputRef.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
              });
            }, 300);
          }}
          aria-expanded={showSuggestions}
          aria-haspopup="listbox"
          ref={inputRef}
          inputMode="text"
        />

        <Search
          className={cn(
            "absolute top-1/2 -translate-y-1/2 text-primary",
            isArabic ? "left-3" : "right-3",
          )}
        />
      </div>

      {/* Dropdown */}
      <div className="barMini max-h-[80dvh] min-h-[80dvh] overflow-y-auto rounded-md bg-background py-4 md:max-h-[350px] lg:min-h-[350px]">
        {/* --- LOADING MODE: no functionality except message --- */}
        {flags.isPackages ? (
          <div className="flex flex-col gap-4">
            {/* Data Only */}
            {flags.isDataOnlyPackages && (
              <div>
                <p className="mb-2 ps-2 font-montserrat text-body-base font-semibold leading-none text-primary">
                  {t("dataOnly")}
                </p>

                {flags.isDataOnlyLocal && (
                  <div>
                    {filteredPackagesList?.dataOnly.local.map((item, index) => (
                      <CountryItem
                        countryName={item.name}
                        image_url={item.image_url}
                        index={index}
                        href={`/esim/${item.slug}/`}
                        key={`do-local-${index}-${item.name}`}
                        setShowDialog={setShowDialog}
                      />
                    ))}
                  </div>
                )}

                {flags.isDataOnlyRegional && (
                  <div>
                    {filteredPackagesList?.dataOnly.regional.map(
                      (item, index) => (
                        <CountryItem
                          countryName={item.name}
                          image_url={item.image_url}
                          index={index}
                          href={`/regional/${item.slug}/`}
                          key={`do-reg-${index}-${item.name}`}
                          setShowDialog={setShowDialog}
                        />
                      ),
                    )}
                  </div>
                )}

                {flags.isDataOnlyGlobal && (
                  <div>
                    <CountryItem
                      countryName="Global"
                      image_url={globalImg}
                      index={1}
                      href="/global/"
                      setShowDialog={setShowDialog}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          // No matches => show Top Destinations
          <div>
            {searchQuery && <p className="mb-2 ps-2 text-sm">{t("noMatch")}</p>}

            <p className="mb-2 ps-2 font-montserrat text-body-md font-semibold leading-none text-primary">
              {t("topDestinations")}
            </p>
            {topDestinations.map((item, index) => (
              <CountryItem
                countryName={item.name}
                image_url={item.image_url}
                index={index}
                href={`/esim/${item.slug}/`}
                key={`top-${index}-${item.code}`}
                setShowDialog={setShowDialog}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPackagesList;
