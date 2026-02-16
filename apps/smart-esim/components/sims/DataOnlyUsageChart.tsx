import { formatToTwoDecimals } from "@workspace/core/helpers/formatToTwoDecimals";
import { OverallUsage } from "@workspace/core/types/services/sims/sims.types";
import { Card } from "@workspace/ui/components/card";
import { Database } from "lucide-react";
import { CircularProgressBar } from "./CircularProgressbar";
import { getTranslations } from "next-intl/server";

export default async function DataOnlyUsageChart({
  overallUsage,
}: {
  overallUsage: OverallUsage;
}) {
  const {
    initial_data_quantity,
    rem_data_quantity,
    initial_data_unit,
    rem_data_unit,
  } = overallUsage;
  const t = await getTranslations("simDetailPage");

  const isUnlimitedData =
    initial_data_quantity < 0 || initial_data_quantity === -1;

  const remainingPercentageOfData = isUnlimitedData
    ? 100
    : (rem_data_quantity / initial_data_quantity) * 100;

  return (
    <Card className="rounded-[29px] px-[25px] py-[33px] shadow-md">
      <h2 className="text-center font-montserrat text-[26px] font-medium">
        {t("dataUsage")}
      </h2>
      <div className="flex h-full items-center justify-center">
        <div className="relative flex items-center justify-center">
          <CircularProgressBar percentage={remainingPercentageOfData} />
          <div className="absolute mt-4 flex flex-col items-center">
            <div className="mb-2 flex items-center gap-2">
              <Database className="text-primary" size={20} />
              <span className="text-base font-500 text-muted-foreground">
                {isUnlimitedData ? t("unlimitedData") : t("remainingData")}
              </span>
            </div>
            {!isUnlimitedData && (
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-primary p-1 text-xs text-background xs:px-2 xs:py-1 xs:text-base">
                  {formatToTwoDecimals(rem_data_quantity)} {rem_data_unit}
                </div>
                <span className="text-base text-muted-foreground">
                  {t("outOf")}
                </span>
                <div className="rounded-md bg-primary p-1 text-xs text-background xs:px-2 xs:py-1 xs:text-base">
                  {formatToTwoDecimals(initial_data_quantity)}{" "}
                  {initial_data_unit}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
