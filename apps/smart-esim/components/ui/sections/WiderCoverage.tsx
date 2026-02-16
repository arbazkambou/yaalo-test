import { Country } from "@workspace/core/types/services/packages/packages.types";
import { getCountriesWithStartingPrice } from "@workspace/core/services/packages/packages.services";
import WiderCoverageClient from "./WiderCoverageClient";
import { getTranslations } from "next-intl/server";

export default async function WiderCoverage({ locale }: { locale?: string }) {
  const t = await getTranslations("SharedUI.widerCoverage");
  let countries: Country[] = [];

  try {
    const response = await getCountriesWithStartingPrice(locale);
    if (response && Array.isArray(response)) {
      countries = response;
    }
  } catch (err) {
    console.error("Failed to load countries:", err);
  }

  return (
    <div className="w-full mt-4">
      <h3 className="text-[1.25rem] text-center sm:text-start font-bold mb-2 text-foreground">
        {t("title")}
      </h3>
      <p className="text-body-base text-muted-foreground text-center sm:text-start mb-6">
        {t("description")}
      </p>

      <WiderCoverageClient countries={countries} />
    </div>
  );
}
