"use client";

import SearchPackagesList from "@/components/packages/SearchPackagesList";
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
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type PropsType = {
  topDestinationsList: Country[];
  packagesList: SearchPackagesListReturn;
  dialogTrigger?: React.ReactNode;
  isIcon?: boolean;
};

function SearchPackagesListDialog({
  packagesList,
  topDestinationsList,
  dialogTrigger,
  isIcon,
}: PropsType) {
    const t = useTranslations("SharedUI.searchPackagesList");

  const [showDialog, setShowDialog] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsClient(true);
    }
  }, []);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isClient) return null;

  return isDesktop ? (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        {isIcon ? (
          <div
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-500 text-inherit transition-all"
            role="button"
          >
            <Search size={18} className="shrink-0" />
            <span className="text-foreground">{t("search")}</span>
          </div>
        ) : dialogTrigger ? (
          dialogTrigger
        ) : (
          <div className="relative z-40 w-full">
            <Input
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-full shadow-none border-border bg-background"
              readOnly
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"  style={
                isArabic
                  ? { left: "0.75rem", right: "auto" }
                  : { right: "0.75rem", left: "auto" }
              } />
          </div>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-[908px]! xl:px-[31px] xl:py-[28px] rounded-[24px]">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-lg font-semibold">
            {t("popularDestinations")}
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
        {isIcon ? (
          <div
            className="flex items-center justify-center text-sm font-500 text-inherit cursor-pointer transition-all"
            role="button"
          >
            <Search size={22} className="shrink-0" />
          </div>
        ) : dialogTrigger ? (
          dialogTrigger
        ) : (
          <div className="relative z-20 w-full">
            <Input
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-full shadow-none border border-border bg-background"
              readOnly
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary"  style={
                isArabic
                  ? { left: "0.75rem", right: "auto" }
                  : { right: "0.75rem", left: "auto" }
              } />
          </div>
        )}
      </DrawerTrigger>
      <DrawerContent className="p-3">
        <DrawerHeader className="p-0">
          <DrawerTitle className="mb-2 text-start font-montserrat text-lg font-semibold">
            {t("popularDestinations")}
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
