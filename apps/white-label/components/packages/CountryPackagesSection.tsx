"use client";

import IncDecButtons from "@/components/cart/IncDecButtons";
import { ProductCart } from "@/components/cart/ProductCart";
import CountryImageAndHeadings from "@/components/packages/CountryImageAndHeadings";
import PackagesFilters from "@/components/packages/PackagesFilters";
import PackagesGrid from "@/components/packages/PackagesGrid";
import CheckCompatibilityModal from "@/components/ui/dialogs/CheckCompatibilityDialog";
import InfoMessage from "@/components/ui/info/InfoMessage";
import { getUniqueDataOptions } from "@workspace/core/helpers/getUniqueDataOptions";
import { getUniqueValidityOptions } from "@workspace/core/helpers/getUniqueValidityOptions";
import { useBottomNav } from "@workspace/core/hooks/cart/useBottomNav";
import { usePackagesFilter } from "@workspace/core/hooks/packages/usePackagesFilter";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import { Button } from "@workspace/ui/components/button";
import { Plus, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useMyCartActions } from "@/hooks/useMyCartActions";

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
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { toggleBottomNave } = useBottomNav();
  const [showProductCart, setShowProductCart] = useState(true);
  const addToCartRef = useRef<HTMLDivElement>(null);

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
    isBothFilterApplied || dataFilter ? filteredPackages : packages,
  );
  const uniqueDataList = getUniqueDataOptions(
    isBothFilterApplied || validityFilter ? filteredPackages : packages,
  );

  function handleValueChange(packageId: string) {
    setSelectedPackageId(packageId);
  }

  useEffect(() => {
    if (!addToCartRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowProductCart(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    observer.observe(addToCartRef.current);

    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedPackageId) {
      const selectedPackage = packages.find(
        (pkg) => pkg.id === selectedPackageId,
      );
      setSelectedPackage(selectedPackage ?? null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPackageId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      toggleBottomNave(false);
    }

    return () => {
      toggleBottomNave(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="grid w-full gap-x-14 gap-y-10 xl:grid-cols-[minmax(0,500px)_1fr]">
        <CountryImageAndHeadings
          countryFlag={countryFlag}
          countryImage={countryImage}
          countryName={countryName}
        />

        <div className="flex flex-col gap-[20px]">
          <h2 className="text-center text-body-lg font-semibold  xl:text-start xl:flex ">
            {t("selectPlan")} {countryName}
          </h2>
          <div className="flex flex-col items-center ml-0 xl:ml-auto justify-between gap-5 sm:flex-row">
            {/* <Suspense>
            <TrustpilotWidget />
          </Suspense> */}
            <div className="flex w-full items-center justify-between gap-4 md:w-auto">
              <CheckCompatibilityModal>
                <Button
                  className="flex max-h-[36px] px-4! items-center gap-2 shadow-none border-0 bg-toggle text-body-md hover:text-foreground"
                  variant={"outline"}
                  //   onClick={() => setOpenCompatibilityModal(true)}
                >
                  <Smartphone className="shrink-0 text-foreground" size={20} />
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
            <div
              className="grid grid-cols-2 gap-4 md:grid-cols-[minmax(120px,200px)_1fr_1fr] xl:gap-6"
              ref={addToCartRef}
            >
              <IncDecButtons selectedPackageId={selectedPackageId} />

              <Button
                className={`group order-1 flex  w-full items-center gap-3 text-sm border-foreground shadow-none font-500 border hover:bg-muted dark:hover:text-foreground`}
                onClick={() =>
                  handleAddToCart({
                    packages,
                    flag: countryFlag,
                    selectedPackageId,
                  })
                }
                variant={"ghost"}
              >
                <Plus
                  className="shrink-0 transition group-hover:rotate-90 "
                  size={24}
                />
                {t("addToCart")}
              </Button>

              <Button
                variant={"animatedYaalo"}
                className={`group order-2 col-span-2 flex  w-full items-center gap-3 text-sm md:order-1 md:col-span-1`}
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

      {selectedPackage && (
        <ProductCart
          selectedPackage={selectedPackage}
          onCheckoutClick={() =>
            handleAddToCart({
              packages,
              flag: countryFlag,
              selectedPackageId,
              goToCheckout: true,
            })
          }
          countryFlag={countryFlag}
          showProductCart={showProductCart}
        />
      )}
    </>
  );
}

export default CountryPackagesSection;
