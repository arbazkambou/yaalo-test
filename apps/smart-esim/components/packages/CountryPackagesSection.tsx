"use client";

import CountryImageAndHeadings from "@/components/packages/CountryImageAndHeadings";
import PackagesFilters from "@/components/packages/PackagesFilters";
import PackagesGrid from "@/components/packages/PackagesGrid";
import CheckCompatibilityModal from "@/components/ui/dialogs/CheckCompatibilityDialog";
import InfoMessage from "@/components/ui/info/InfoMessage";
import { getUniqueDataOptions } from "@workspace/core/helpers/getUniqueDataOptions";
import { getUniqueValidityOptions } from "@workspace/core/helpers/getUniqueValidityOptions";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { usePackagesFilter } from "@workspace/core/hooks/packages/usePackagesFilter";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight, Plus, Smartphone } from "lucide-react";
import { useState } from "react";
import IncDecButtons from "../cart/IncDecButtons";
import { useTranslations } from "next-intl";

type PropsType = {
  packages: Package[];
  countryFlag: string;
  countryImage: string;
  countryName: string;
};

function CountryPackagesSection({
  countryName,
  countryImage,
  countryFlag,
  packages,
}: PropsType) {
  const t = useTranslations("SharedUI");
  const [selectedPackageId, setSelectedPackageId] = useState("");

  const {
    dataFilter,
    validityFilter,
    filteredPackages,
    haveFilteredPackages,
    handleClearFilter,
    handleFilterByData,
    handleFilterByValidity,
    isAnyFilterApplied,
    isBothFilterApplied,
    openFilters,
    setOpenFilters,
  } = usePackagesFilter(packages);

  const { handleAddToCart } = useMyCartActions();

  const uniqueValidityList = getUniqueValidityOptions(
    isBothFilterApplied || dataFilter ? filteredPackages : packages
  );
  const uniqueDataList = getUniqueDataOptions(
    isBothFilterApplied || validityFilter ? filteredPackages : packages
  );

  function handleValueChange(packageId: string) {
    setSelectedPackageId(packageId);
  }
  return (
    <div className="grid w-full gap-x-10 gap-y-10 xl:grid-cols-[minmax(0,500px)_1fr]">
      <CountryImageAndHeadings
        countryFlag={countryFlag}
        countryImage={countryImage}
        countryName={countryName}
      />

      {/* Country packages  */}
      <div className="flex flex-col gap-[20px]">
        {/* packages type filter  */}
        <div className="flex flex-col items-center md:mr-4 md:ml-auto justify-between gap-5 sm:flex-row">
          {/* <Suspense>
            <TrustpilotWidget />
          </Suspense> */}
          <div className="flex w-full items-center justify-between gap-4 md:w-auto">
            <CheckCompatibilityModal>
              <Button
                className="flex max-h-[32px] w-auto items-center gap-2"
                variant={"outline"}
                //   onClick={() => setOpenCompatibilityModal(true)}
              >
                <Smartphone className="shrink-0 text-primary" size={20} />
                {t("checkEsim")}
              </Button>
            </CheckCompatibilityModal>
            <PackagesFilters
              dataFilter={dataFilter}
              dataFilterOptions={uniqueDataList}
              handleClearFilter={handleClearFilter}
              handleFilterByData={handleFilterByData}
              handleFilterByValidity={handleFilterByValidity}
              isAnyFilterApplied={isAnyFilterApplied}
              openFilters={openFilters}
              setOpenFilters={setOpenFilters}
              validityFilter={validityFilter}
              validityFilterOptions={uniqueValidityList}
            />
          </div>
        </div>

        {/* Country Packages*/}

        {haveFilteredPackages && (
          <>
            <PackagesGrid
              countryFlag={countryFlag}
              countryName={countryName}
              filteredPackages={filteredPackages}
              handleValueChange={handleValueChange}
              selectedPackageId={selectedPackageId}
              setSelectedPackageId={setSelectedPackageId}
              haveFilteredPackages={haveFilteredPackages}
            />
          </>
        )}

        {packages.length === 0 && <InfoMessage />}

        {/* Increament decreament and add to cart buttons  */}
        {haveFilteredPackages && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-[minmax(120px,200px)_1fr_1fr] xl:gap-6">
            <IncDecButtons />

            <Button
              className={`group order-1 flex bg-secondary-green hover:bg-secondary-green cursor-pointer text-background hover:text-background  w-full items-center gap-3 text-sm`}
              onClick={() =>
                handleAddToCart({
                  packages,
                  flag: countryFlag,
                  selectedPackageId,
                })
              }
              variant={"outline"}
            >
              <Plus
                className="shrink-0 transition group-hover:rotate-90 group-hover:text-background"
                size={20}
              />
              {t("addToCart")}
            </Button>

            <Button
              className={`group order-2 col-span-2 flex text-background cursor-pointer w-full items-center gap-3 text-sm md:order-1 md:col-span-1 bg-primary`}
              onClick={() =>
                handleAddToCart({
                  packages,
                  flag: countryFlag,
                  selectedPackageId,
                  goToCheckout: true,
                })
              }
            >
              {t("buyNow")}
              <ArrowUpRight
                className="transition group-hover:rotate-45 group-hover:text-primary-foreground"
                size={20}
              />
            </Button>
          </div>
        )}

        {/* <div className="w-full">
            <TrustpilotWidgetForReviews />
          </div>

          {isSelectedPackageFromVodafoneOrO2 && (
            <InfoMessage
              message="Usage outside the supported regions may result in the full consumption of your plan’s allowances. Calls are only permitted within the country you are traveling in."
              className="min-h-max text-sm"
            />
          )} */}
      </div>
    </div>
  );
}

export default CountryPackagesSection;
