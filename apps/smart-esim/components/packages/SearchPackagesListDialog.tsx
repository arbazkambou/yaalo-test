"use client";

import SearchPackagesList from "@/components/packages/SearchPackagesList";
import { usePathname } from "@/i18n/navigation";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import {
  Country,
  SearchPackagesListReturn,
} from "@workspace/core/types/services/packages/packages.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";

type PropsType = {
  topDestinationsList: Country[];
  packagesList: SearchPackagesListReturn;
  dialogTrigger?: React.ReactNode;
};

function SearchPackagesListDialog({
  packagesList,
  topDestinationsList,
  dialogTrigger,
}: PropsType) {
  const t = useTranslations("SharedUI.searchPackagesList");
  const [showDialog, setShowDialog] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const locale = useLocale();
  const isArabic = locale === "ar";

  return isDesktop ? (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        {dialogTrigger ? (
          dialogTrigger
        ) : (
          <div className="relative z-20 w-full">
            <Input
              placeholder={t("placeholder")}
              className={`w-full rounded-full border-0 ${isHome ? "bg-muted" : "bg-background border"} ${isArabic ? "pr-4 pl-12" : "pl-4 pr-12"} py-4! sm:py-5!`}
              readOnly
            />

            <Search
              className="absolute top-1/2 -translate-y-1/2 transform text-muted-foreground"
              style={
                isArabic
                  ? { left: "0.75rem", right: "auto" }
                  : { right: "0.75rem", left: "auto" }
              }
            />
          </div>
        )}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-montserrat text-lg font-semibold">
            {t("searchDestination")}
          </DialogTitle>
        </DialogHeader>
        <SearchPackagesList
          packagesList={packagesList!}
          topDestinationsList={topDestinationsList}
          setShowDialog={setShowDialog}
        />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer
      repositionInputs={true}
      open={showDialog}
      onOpenChange={setShowDialog}
    >
      <DrawerTrigger asChild>
        {dialogTrigger ? (
          dialogTrigger
        ) : (
          <div className="relative z-20 w-full">
            <Input
              placeholder={t("placeholder")}
              className={`w-full rounded-full border-0 bg-muted ${isArabic ? "pr-4 pl-12" : "pl-4 pr-12"} sm:py-5!`}
              readOnly
            />
            <Search
              className="absolute top-1/2 -translate-y-1/2 transform text-muted-foreground"
              style={
                isArabic
                  ? { left: "0.75rem", right: "auto" }
                  : { right: "0.75rem", left: "auto" }
              }
            />
          </div>
        )}
      </DrawerTrigger>
      <DrawerContent className="p-3">
        <DrawerHeader className="p-0">
          <DrawerTitle className="mb-2 text-start font-montserrat text-lg font-semibold">
            {t("searchDestination")}
          </DrawerTitle>
        </DrawerHeader>
        <SearchPackagesList
          packagesList={packagesList!}
          topDestinationsList={topDestinationsList}
          setShowDialog={setShowDialog}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default SearchPackagesListDialog;
