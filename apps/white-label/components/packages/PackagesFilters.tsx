"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { ListFilter, X } from "lucide-react";
import { useTranslations } from "next-intl";

function PackagesFilters({
  openFilters,
  setOpenFilters,
  handleClearFilter,
  handleFilterByData,
  handleFilterByValidity,
  isAnyFilterApplied,
  dataFilter,
  validityFilter,
  dataFilterOptions,
  validityFilterOptions,
}: {
  openFilters: boolean;
  setOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilterByData: (filter: string) => void;
  handleFilterByValidity: (filter: string) => void;
  handleClearFilter: () => void;
  isAnyFilterApplied: boolean;
  dataFilter: number | null;
  validityFilter: number | null;
  validityFilterOptions: {
    package_validity: number;
    package_validity_unit: string;
  }[];
  dataFilterOptions: {
    data_quantity: number;
    data_unit: string;
  }[];
}) {
  const t = useTranslations("SharedUI");
  return (
    <DropdownMenu open={openFilters} onOpenChange={setOpenFilters}>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex max-h-[36px] max-w-[88px] items-center gap-2 shadow-none bg-toggle hover:text-foreground"
          variant={"ghost"}
        >
          <ListFilter size={20} className="shrink-0" />
          {t("filter")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex min-w-[232px] flex-col gap-4 px-4 py-3 ">
        <div className="flex items-center justify-between">
          <p className="text-body-base font-500 text-foreground">{t("filter")}</p>
          <X
            size={20}
            onClick={() => setOpenFilters(false)}
            className="transition-colors hover:text-primary dark:text-foreground dark:hover:text-primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <Select
            onValueChange={handleFilterByData}
            value={dataFilter ? String(dataFilter) : ""}
          >
            <SelectTrigger className="w-[90px] dark:text-foreground">
              <SelectValue placeholder={t("data")} />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("selectData")}</SelectLabel>
                {dataFilterOptions.map((data, index) => {
                  const { data_quantity, data_unit } = data;
                  return (
                    <SelectItem
                      value={`${data.data_quantity}`}
                      key={index}
                      className="dark:text-foreground"
                    >
                      {data_quantity <= 0
                        ? "Unlimited"
                        : `${data_quantity} ${data_unit}`}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={validityFilter ? String(validityFilter) : ""}
            onValueChange={handleFilterByValidity}
          >
            <SelectTrigger className="w-[90px] dark:text-foreground">
              <SelectValue placeholder={t("day")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("selectDays")}</SelectLabel>
                {validityFilterOptions.map((validity, index) => {
                  const { package_validity, package_validity_unit } = validity;
                  return (
                    <SelectItem
                      value={`${package_validity}`}
                      key={index}
                      className="dark:text-foreground"
                    >
                      {package_validity} {package_validity_unit}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          {isAnyFilterApplied && (
            <Button
              className="max-h-[35px] dark:text-foreground dark:hover:text-primary-foreground"
              onClick={handleClearFilter}
            >
              {t("resetFilter")}
            </Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PackagesFilters;
