"use client";

import CartDetail from "@/components/cart/CartDetail";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { useMediaQuery } from "@workspace/core/hooks/ui/useMediaQuery";
import { Drawer, DrawerContent } from "@workspace/ui/components/drawer";
import { Sheet, SheetContent } from "@workspace/ui/components/sheet";

function CartDetailSheet() {
  const { showCartDetail, setShowCartDetail } = useMyCartActions();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <Sheet open={showCartDetail} onOpenChange={setShowCartDetail}>
          <SheetContent className="grid !h-full !w-full grid-rows-[auto_1fr_auto] p-0 px-2 sm:!min-w-[500px]">
            <CartDetail />
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer
          repositionInputs={false}
          open={showCartDetail}
          onOpenChange={setShowCartDetail}
        >
          <DrawerContent className="grid !h-[94%] !w-full grid-rows-[auto_auto_1fr_auto] px-2">
            <CartDetail />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default CartDetailSheet;
