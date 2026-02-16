"use client";

import globalImg from "@/assets/svgs/globalMap.svg";
import { generateSlug } from "@workspace/core/helpers/generateSlug";
import { useCountryRegionSearch } from "@workspace/core/hooks/packages/useSearchPackagesList";
import {
  Country,
  SearchPackagesListReturn,
} from "@workspace/core/types/services/packages/packages.types";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { Search } from "lucide-react";
import CountryItem from "./CountryItem";
import Image from "next/image";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

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
    const locale = useLocale();
    const isArabic = locale === "ar";
  const t = useTranslations("SharedUI.searchPackagesList");

  const router = useRouter();
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
      className="relative z-50 grid w-full grid-rows-[auto_1fr] gap-3"
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-1 flex-nowrap scrollbar-mini">
        {topDestinationsList.map((item, index) => (
          <div
            className="flex items-center gap-2 bg-muted rounded-pill p-2 shrink-0 hover:cursor-pointer hover:border-primary border border-muted"
            onClick={() => {
              router.push(`/esim-${item.slug}/`);
              setShowDialog(false);
            }}
            key={index}
          >
            <div className="relative w-[16px] h-[16px]">
              <Image
                src={item.image_url}
                alt="country image"
                className="rounded-full object-cover"
                fill
              />
            </div>
            <span className="shrink-0 text-body-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <p className="font-montserrat text-lg font-semibold xl:mt-1.5">
        {t("allDestinations")}
      </p>
      <div className="relative w-full xl:max-w-[310px]">
        <Input
          placeholder={t("searchPlaceholder")}
          className={cn("rounded-full bg-muted border-0 ")}
          onChange={handleSearchQuery}
          value={searchQuery}
          onFocus={() => {
            setShowSuggestions(true);
            // ensure input stays visible
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
          // autoFocus
          inputMode="text"
        />

        <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"  style={
                  isArabic
                    ? { left: "0.75rem", right: "auto" }
                    : { right: "0.75rem", left: "auto" }
                }/>
      </div>

      {/* Dropdown */}
      <div className="barMini max-h-[80dvh] min-h-[80dvh] overflow-y-auto rounded-md bg-background py-4 md:max-h-[350px] lg:min-h-[350px] pr-2">
        {flags.isPackages ? (
          <div className="flex flex-col gap-4 ">
            {/* Data Only */}
            {flags.isDataOnlyPackages && (
              <div className="flex flex-col gap-2">
                {/* <p className=" font-montserrat text-body-base font-semibold leading-none text-primary">
                  Data Only
                </p> */}

                {flags.isDataOnlyLocal && (
                  <div className="grid sm:grid-cols-2 gap-3 xl:grid-cols-3">
                    {filteredPackagesList?.dataOnly.local.map((item, index) => (
                      <CountryItem
                        countryName={item.name}
                        image_url={item.image_url}
                        index={index}
                        href={`/esim-${item.slug}/`}
                        key={`do-local-${index}-${item.name}`}
                        setShowDialog={setShowDialog}
                      />
                    ))}
                  </div>
                )}

                {flags.isDataOnlyRegional && (
                  <div className="grid sm:grid-cols-2 gap-3 xl:grid-cols-3">
                    {filteredPackagesList?.dataOnly.regional.map(
                      (item, index) => (
                        <CountryItem
                          countryName={item.name}
                          image_url={item.image_url}
                          index={index}
                          href={`/esim-${item.slug}/`}
                          key={`do-reg-${index}-${item.name}`}
                          setShowDialog={setShowDialog}
                        />
                      ),
                    )}
                  </div>
                )}

                {flags.isDataOnlyGlobal && (
                  <div className="grid sm:grid-cols-2 gap-3 xl:grid-cols-3">
                    <CountryItem
                      countryName="Global"
                      image_url={globalImg}
                      index={1}
                      href="/esim-global/"
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

            {/* <p className="mb-2 ps-2 font-montserrat text-body-md font-semibold leading-none text-primary">
              Top Destinations
            </p> */}
            <div className="grid sm:grid-cols-2 gap-3 xl:grid-cols-3">
              {topDestinations.map((item, index) => (
                <CountryItem
                  countryName={item.name}
                  image_url={item.image_url}
                  index={index}
                  href={`/esim-${item.slug}/`}
                  key={`top-${index}-${item.code}`}
                  setShowDialog={setShowDialog}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPackagesList;
