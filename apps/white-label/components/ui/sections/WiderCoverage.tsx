import { Country } from "@workspace/core/types/services/packages/packages.types";
import WiderCoverageClient from "./WiderCoverageClient";
import { getCountriesWithStartingPrice } from "@workspace/core/services/packages/packages.services";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export default async function WiderCoverage({ locale }: { locale: Locale }) {
    const t = await getTranslations("SharedUI.widerCoverage");
  let countries: Country[] = [];


  try {
    const response = await getCountriesWithStartingPrice(locale);
    if (response && Array.isArray(response)) {
      countries = response;
    }
  } catch (err) {
    console.error(t("errorMessage"), err);
  }

  return (
    <div className="w-full">
      <h2 className="text-body-lg font-bold text-foreground">
        {t("title")}
      </h2>
      <p className="text-body-base text-muted-foreground mb-2">
       {t("description")}
      </p>

      <WiderCoverageClient countries={countries} />
    </div>
  );
}
