import { formatSupportedNetworkCoverage } from "@workspace/core/helpers/formatSupportedNetworkCoverage";
import { useCoverageSearch } from "@workspace/core/hooks/packages/useCoverageSearch";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import { Coverage } from "@workspace/core/types/services/packages/packages.types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import { Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

function SimCoverageModal({ coverage }: { coverage: Coverage[] }) {
  const t = useTranslations("simDetailPage.coverageModal");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const { filtered, reshaped, searchQuery, setSearchQuery } = useCoverageSearch(
    { data: coverage, type: "sim" },
  );

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger>
          <p className="text-base underline underline-offset-2">
            {t("coverage")}
          </p>
        </DialogTrigger>
        <DialogContent
          className="flex max-h-[92vh] flex-col gap-3 overflow-auto scrollbar-thin sm:gap-7"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <div className="flex flex-col gap-6">
            <div className={`grid h-full shrink-0 gap-4`}>
              <p className="text-xl font-500">{t("supportedCountries")}</p>

              <div className={`relative h-full w-full shrink-0`}>
                <Input
                  placeholder={t("searchCountryNetwork")}
                  className="h-[50px] w-full shrink-0 xl:h-full"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
                <Search
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-primary",
                    isArabic ? "left-3" : "right-3",
                  )}
                />
              </div>
            </div>
            <div className="barMini max-h-[300px] min-h-[300px] overflow-auto rounded-[0.6rem] border bg-secondary p-4">
              <div className="flex flex-col gap-6">
                {filtered.map((item, index) => (
                  <div className="flex flex-wrap gap-1" key={index}>
                    <p className="me-6 text-body-md font-500">
                      {item.country_name}
                    </p>
                    {item.country_coverage.map((countryCoverage, index) => (
                      <div
                        className="flex items-center gap-[0.62rem] rounded-[0.6rem] border bg-background p-1 text-sm"
                        key={index}
                      >
                        <p>{countryCoverage.network_name}</p>
                        <p className="rounded-[0.6rem] bg-primary text-background px-1">
                          {formatSupportedNetworkCoverage(countryCoverage)}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer repositionInputs={false}>
      <DrawerTrigger>
        <p className="text-base underline underline-offset-2">
          {t("coverage")}
        </p>
      </DrawerTrigger>
      <DrawerContent
        className="flex flex-col gap-3 p-3 sm:gap-7"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <div className="flex flex-col gap-6">
          <div
            className={`grid gap-4 ${reshaped.length > 2 && "xl:grid-cols-2"} h-full shrink-0`}
          >
            <p className="text-xl font-500">{t("supportedCountries")}</p>
            {filtered.length > 2 && (
              <div className={`relative h-full w-full shrink-0`}>
                <Input
                  placeholder={t("searchCountryNetwork")}
                  className="h-[50px] w-full shrink-0 xl:h-full"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
                <Search
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 text-primary",
                    isArabic ? "left-3" : "right-3",
                  )}
                />
              </div>
            )}
          </div>
          <div className="barMini max-h-[200px] min-h-[200px] overflow-auto rounded-[0.6rem] border bg-secondary p-4">
            <div className="flex flex-col gap-6">
              {filtered.map((item, index) => (
                <div className="flex flex-wrap gap-1" key={index}>
                  <p className="me-6 text-body-md font-500">
                    {item.country_name}
                  </p>
                  {item.country_coverage.map((countryCoverage, index) => (
                    <div
                      className="flex items-center gap-[0.62rem] rounded-[0.6rem] border bg-background p-1 text-sm"
                      key={index}
                    >
                      <p>{countryCoverage.network_name}</p>
                      <p className="rounded-[0.6rem] bg-primary-accent px-1">
                        {formatSupportedNetworkCoverage(countryCoverage)}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SimCoverageModal;
