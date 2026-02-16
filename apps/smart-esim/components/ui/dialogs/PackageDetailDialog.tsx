import PackageDetail from "@/components/packages/PackageDetail";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import { Package } from "@workspace/core/types/services/packages/packages.types";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

interface PropsType {
  packageDetail: Package;
  children: React.ReactNode;
  countryFlag: string;
}

function PackageDetailModal({
  packageDetail,
  children,
  countryFlag,
}: PropsType) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <Sheet>
          <SheetTrigger
            className="group flex items-center gap-3 text-xs text-primary"
            asChild
          >
            {children}
          </SheetTrigger>
          <SheetContent
            className="flex  flex-col gap-3 overflow-auto scrollbar-thin sm:gap-5 max-w-2xl! w-full!"
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <PackageDetail
              packageDetail={packageDetail}
              countryFlag={countryFlag}
            />
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer repositionInputs={false}>
          <DrawerTrigger
            className="group flex items-center gap-3 text-xs text-primary"
            asChild
          >
            {children}
          </DrawerTrigger>

          <DrawerContent className="grid max-h-[94%] grid-rows-[auto_1fr]">
            <div className="flex flex-col gap-3 overflow-auto p-3 sm:gap-6">
              <PackageDetail
                packageDetail={packageDetail}
                countryFlag={countryFlag}
              />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default PackageDetailModal;
