"use client";

import { useMyCartActions } from "@/hooks/useMyCartActions";
import { Card } from "@workspace/ui/components/card";
// import { getTotalCartItems } from "@/redux/slices/cartSlice";
// import { useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";

function IncDecButtons({ selectedPackageId }: { selectedPackageId?: string }) {
  const {
    handleIncreaseTempItemQuantity,
    handleDecreaseTempItemQuantity,
    tempItemQuantity,
  } = useMyCartActions();
  return (
    <Card className="flex w-full items-center justify-center gap-3 rounded-sm px-2 text-body-lg xl:gap-4 flex-row! h-max p-2  shadow-none border-foreground border dark:bg-background dark:border-foreground">
      <button
        className="rounded-sm p-1 hover:bg-muted xl:p-2 cursor-pointer"
        onClick={handleDecreaseTempItemQuantity}
      >
        <Minus />
      </button>
      <div className="h-[24px] w-px bg-foreground opacity-60"></div>

      {selectedPackageId ? <p>{tempItemQuantity}</p> : <p>0</p>}
      <div className="h-[24px] w-px bg-foreground opacity-60"></div>

      <button
        disabled={!selectedPackageId}
        className="rounded-sm p-1 hover:bg-muted xl:p-2 cursor-pointer"
        onClick={handleIncreaseTempItemQuantity}
      >
        <Plus />
      </button>
    </Card>
  );
}

export default IncDecButtons;
