import { Card } from "@workspace/ui/components/card";
import { RadioGroupItem } from "@workspace/ui/components/radio-group";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
// import PackageDetailModal from "./PackageDetailModal";

import { Package } from "@workspace/core/types/services/packages/packages.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useEffect, useState } from "react";
import PackageDetailModal from "../ui/dialogs/PackageDetailDialog";
import { useTranslations } from "next-intl";

interface PropsType {
  selectedPackageId: string;
  setSelectedPackageId: (value: string) => void;
  packageDetail: Package;
  countryName: string;
  countryFlag: string;
  packagesToSelect?: Package[];
}
function CountryPackageCard({
  selectedPackageId,
  setSelectedPackageId,
  packageDetail,
  countryName,
  countryFlag,
  packagesToSelect,
}: PropsType) {
    const t = useTranslations("SharedUI");
  const [selectedPackage, setSelectedPackage] = useState(packageDetail);

  const {
    data_unit,
    data_quantity,
    package_validity,
    package_validity_unit,
    price,
    data_package_type,
    countries,
    id,
  } = selectedPackage;

  const [packageIdSelectedFromList, setPackageIdSelectedFromList] =
    useState(id);

  function handlePackageSelection(id: string) {
    setPackageIdSelectedFromList(id);
    setSelectedPackageId(id);
  }

  useEffect(
    function () {
      if (packagesToSelect && packagesToSelect?.length > 0) {
        setPackageIdSelectedFromList(packagesToSelect[0]!.id);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [packageDetail?.id],
  );

  useEffect(
    function () {
      if (packageIdSelectedFromList && packagesToSelect) {
        const searchedPackage = packagesToSelect.find(
          (p) => p.id === packageIdSelectedFromList,
        );
        if (searchedPackage) {
          setSelectedPackage(searchedPackage);
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [packageIdSelectedFromList, packagesToSelect?.length],
  );

  useEffect(
    function () {
      if (!packagesToSelect && packageDetail) {
        setSelectedPackage(packageDetail);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [packageDetail.id],
  );

  return (
    <Card
      className={`group relative flex dark:bg-background flex-col gap-3 px-4 py-3 rounded-none border-t-0 border-l-0 border-r-0 border-b-2 border-border cursor-pointer transition-all hover:bg-primary-light ${
        selectedPackageId === packageDetail.id ? "bg-primary-light" : ""
      }`}
      onClick={() => setSelectedPackageId(packageDetail.id)}
    >
      {/*country name and detail button */}
      <div className="flex gap-3 items-center">
        <p className="text-sm font-500 text-foreground leading-snug md:text-body-md  ">
          <span>{countryName}</span>{" "}
          <span className="mx-1 font-extrabold">•</span>
          <span>
            {data_quantity === -1
              ? `${t("unlimited")} ${data_package_type && data_package_type !== "Standard" ? data_package_type : t("data")}`
              : `${data_quantity} ${data_unit}`}
          </span>
        </p>
        <PackageDetailModal
          packageDetail={selectedPackage}
          countryFlag={countryFlag}
        >
          <button
            type="button"
            className="flex items-center cursor-pointer text-foreground! gap-1 self-start rounded-full border border-foreground/50 px-2.5 py-1 text-xs font-medium sm:self-auto text-body-base!"
          >
            {t("details")}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </button>
        </PackageDetailModal>
      </div>

      <div className="flex justify-between">
        {/* days duration and flag */}
        <div className="items-center gap-2 flex w-fit">
          {packagesToSelect ? (
            <Select
              value={packageIdSelectedFromList}
              defaultValue={packageIdSelectedFromList}
              onValueChange={handlePackageSelection}
            >
              <SelectTrigger className="h-5 max-w-[180px] font-500 bg-accent dark:bg-accent border-0 dark:text-foreground">
                <SelectValue placeholder={t("selectDays")} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t("days")}</SelectLabel>
                  {packagesToSelect.map((p, index) => (
                    <SelectItem
                      className="text-foreground dark:hover:text-foreground"
                      value={String(p.id)}
                      key={index}
                    >
                      {p.package_validity} {p.package_validity_unit}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <div className="rounded-full text-muted-foreground px-2.5 py-1 text-xs font-medium sm:text-sm">
              {package_validity} {package_validity_unit}
            </div>
          )}

          <div className="flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            {countries.slice(0, 3).map((country, index) => (
              <div key={index} className="relative h-5 w-5">
                <Image
                  src={country.image_url}
                  fill
                  alt={`${country.name} flag`}
                  className="rounded-full object-cover border"
                />
              </div>
            ))}
            {countries.length > 3 && (
              <span className="ml-0.5 text-body-xs font-medium text-muted-foreground sm:text-xs">
                +{countries.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* price and radio item */}
        <div className="mt-1 flex w-fit items-center gap-3 sm:mt-0 sm:w-auto text-foreground">
          <p className="text-body-base font-semibold sm:text-lg">${price}</p>
          {packagesToSelect ? (
            <RadioGroupItem
              value={packageDetail.id}
              checked={packagesToSelect.some((p) => p.id === selectedPackageId)}
              className="border-primary"
            />
          ) : (
            <RadioGroupItem
              value={packageDetail.id}
              className="border-primary"
            />
          )}
        </div>
      </div>
    </Card>
  );
}

export default CountryPackageCard;
