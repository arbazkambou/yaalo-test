import {
  getSearchPackagesList,
  getTopDestinations,
} from "@workspace/core/services/packages/packages.services";
import SearchPackagesListDialog from "../packages/SearchPackagesListDialog";
import { Locale } from "next-intl";

async function GetSearchPackagesList({ locale, isIcon }: { locale?: Locale ; isIcon?: boolean }) {
  const searchPackagesListPromise = getSearchPackagesList(locale);
  const topDesitnationsPromise = getTopDestinations(locale);
  const [searchPackagesList, topDesitnations] = await Promise.all([
    searchPackagesListPromise,
    topDesitnationsPromise,
  ]);
  return (
    <SearchPackagesListDialog
      packagesList={searchPackagesList}
      topDestinationsList={topDesitnations}
      isIcon={isIcon}
    />
  );
}

export default GetSearchPackagesList;
