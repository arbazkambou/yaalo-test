"use client";

import { Package } from "@workspace/core/types/services/packages/packages.types";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type PropsType = {
  selectedPackage: Package;
  onCheckoutClick: () => void;
  countryFlag: string;
  showProductCart: boolean;
};

export function ProductCart({
  onCheckoutClick,
  selectedPackage,
  countryFlag,
  showProductCart,
}: PropsType) {
  const t = useTranslations("SharedUI");
  const {
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    price,
    unlimited,
  } = selectedPackage;

  return (
    <div
      className={`fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 border-t border-border bg-background shadow-[0px_4px_32.5px_0px_rgba(0,0,0,0.14)] dark:shadow-[0px_4px_32.5px_0px_rgba(0,0,0,0.6)] transition-all duration-500 xl:bottom-4 xl:max-w-[630px] xl:rounded-[24px] ${
        showProductCart ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex justify-between gap-6 px-4 py-3 sm:items-center xl:px-[18px] xl:py-[10px]">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <div
            className={`relative mb-2 size-[40px] flex-shrink-0 rounded-full sm:mb-0 sm:size-[45px]`}
          >
            <Image
              src={countryFlag || "/placeholder.svg"}
              alt="Country flag"
              fill
              className="rounded-full border border-border object-cover shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-0.5 xs:gap-1 sm:gap-2">
            <p
              className={`text-body-base font-500 leading-none text-foreground`}
            >
              {unlimited ? (
                `${t("unlimited")} ${data_unit ? data_unit : t("data")}`
              ) : (
                <>
                  {data_quantity} {data_unit}
                </>
              )}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {package_validity} {package_validity_unit}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-0">
          <Button
            variant={"animatedYaalo"}
            className={`group flex items-center cursor-pointer gap-2 whitespace-nowrap rounded-md border bg-primary p-3 text-body-base font-500  transition-all hover:border-border hover:bg-background hover:text-background dark:text-primary-foreground dark:hover:text-foreground dark:hover:border-foreground xs:px-6 sm:px-8 sm:py-3.5`}
            onClick={onCheckoutClick}
          >
            <>
              <span className="text-body-sm font-400">{t("checkout")}</span> | ${price}{" "}
              <ArrowUpRight className="h-4 w-4 transition-all group-hover:rotate-45" />
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}
