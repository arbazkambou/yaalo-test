"use client";

import CompatibleDevices from "@/components/misc/CompatibleDevices";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { useTranslations } from "next-intl";
import { Suspense, useState } from "react";

interface CheckCompatibilityModalProps {
  children: React.ReactNode;
}

function CheckCompatibilityModal({ children }: CheckCompatibilityModalProps) {
    const t = useTranslations("EsimCompatiblePage.hero");
  const [showCompatibilityDialog, setShowCompatibilityDialog] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Sheet
        open={showCompatibilityDialog}
        onOpenChange={setShowCompatibilityDialog}
      >
        <SheetTrigger
          className="flex items-center gap-2 transition-colors hover:cursor-pointer hover:text-primary"
          asChild
        >
          {children}
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3 sm:gap-5 max-w-2xl! w-full!">
          <SheetTitle>
            <p className="text-body-lg font-500">
              {t("compatibleDevices")}
            </p>
          </SheetTitle>
          <Suspense>
            <CompatibleDevices
              setShowCompatibilityDialog={setShowCompatibilityDialog}
            />
          </Suspense>
        </SheetContent>
      </Sheet>
    );

  return (
    <Drawer
      open={showCompatibilityDialog}
      onOpenChange={setShowCompatibilityDialog}
      repositionInputs={false}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="flex flex-col gap-3 p-3 sm:gap-5">
        <DrawerTitle>
          <p className="text-body-lg font-500">{t("compatibleDevices")}</p>
        </DrawerTitle>
        <Suspense>
          <CompatibleDevices
            setShowCompatibilityDialog={setShowCompatibilityDialog}
          />
        </Suspense>
      </DrawerContent>
    </Drawer>
  );
}

export default CheckCompatibilityModal;
