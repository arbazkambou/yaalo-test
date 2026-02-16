import CountriesWithStartingPrice from "@/components/packages/CountriesWithStartingPrice";
import { getCountriesWithStartingPrice } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";

async function GetCountriesWithStartingPrice({ locale }: { locale: Locale }) {
  const counrtiesWithStaringPrice = await getCountriesWithStartingPrice(locale);
  return <CountriesWithStartingPrice countries={counrtiesWithStaringPrice} />;
}

export default GetCountriesWithStartingPrice;
