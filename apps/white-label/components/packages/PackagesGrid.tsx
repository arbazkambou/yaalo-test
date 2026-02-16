import CountryPackageCard from "@/components/packages/CountryPackageCard";
import { categorizedDataOnlyPackages } from "@workspace/core/helpers/categorizedDataOnlyPackages";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import { RadioGroup } from "@workspace/ui/components/radio-group";
import { useEffect } from "react";

function PackagesGrid({
  selectedPackageId,
  handleValueChange,
  filteredPackages,
  setSelectedPackageId,
  countryFlag,
  countryName,
  haveFilteredPackages,
}: {
  selectedPackageId: string;
  handleValueChange(packageId: string): void;
  filteredPackages: Package[];
  countryFlag: string;
  setSelectedPackageId: React.Dispatch<React.SetStateAction<string>>;
  countryName: string;
  haveFilteredPackages: boolean;
}) {
  const {
    limitedPackages,
    unlimitedDataPackages,
    unlimitedPlusPackages,
    unlimitedPremiumPackages,
  } = categorizedDataOnlyPackages(filteredPackages);

  //1. if user select unlimited packages then it will select first item in unlimited packages array
  //2. if user select limited packages then it will select first item in limited packages array
  // useEffect(() => {
  //   if (unlimitedDataPackages?.length > 0) {
  //     setSelectedPackageId(unlimitedDataPackages[0]!.id);
  //   } else if (unlimitedPlusPackages?.length > 0) {
  //     setSelectedPackageId(unlimitedPlusPackages[0]!.id);
  //   } else if (unlimitedPremiumPackages?.length > 0) {
  //     setSelectedPackageId(unlimitedPremiumPackages[0]!.id);
  //   } else if (haveFilteredPackages) {
  //     setSelectedPackageId(filteredPackages[0]!.id);
  //   } else {
  //     setSelectedPackageId("");
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filteredPackages?.[0]?.id]);

  return (
    <div className="min-h-[490px] max-h-[550px] overflow-auto barMini">
      {/* Data Only Packages  */}
      <RadioGroup
        value={selectedPackageId}
        onValueChange={handleValueChange}
        className={`border  border-border xl:rounded-md grid-cols-1 gap-0 overflow-auto p-0`}
      >
        {unlimitedDataPackages.slice(0, 1).map((packageDetail, index) => (
          <div key={index} className="h-full">
            <CountryPackageCard
              key={index}
              packageDetail={packageDetail}
              setSelectedPackageId={setSelectedPackageId}
              selectedPackageId={selectedPackageId}
              countryFlag={countryFlag}
              countryName={countryName}
              packagesToSelect={unlimitedDataPackages}
            />
          </div>
        ))}
        {unlimitedPlusPackages.slice(0, 1).map((packageDetail, index) => (
          <div key={index} className="h-full">
            <CountryPackageCard
              key={index}
              packageDetail={packageDetail}
              setSelectedPackageId={setSelectedPackageId}
              selectedPackageId={selectedPackageId}
              countryFlag={countryFlag}
              countryName={countryName}
              packagesToSelect={unlimitedPlusPackages}
            />
          </div>
        ))}
        {unlimitedPremiumPackages.slice(0, 1).map((packageDetail, index) => (
          <div key={index} className="h-full">
            <CountryPackageCard
              key={index}
              packageDetail={packageDetail}
              setSelectedPackageId={setSelectedPackageId}
              selectedPackageId={selectedPackageId}
              countryFlag={countryFlag}
              countryName={countryName}
              packagesToSelect={unlimitedPremiumPackages}
            />
          </div>
        ))}

        {limitedPackages.map((packageDetail, index) => (
          <div key={index} className="h-full">
            <CountryPackageCard
              key={index}
              packageDetail={packageDetail}
              setSelectedPackageId={setSelectedPackageId}
              selectedPackageId={selectedPackageId}
              countryFlag={countryFlag}
              countryName={countryName}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default PackagesGrid;
