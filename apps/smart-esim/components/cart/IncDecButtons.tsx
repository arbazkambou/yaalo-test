"use client";

import { useMyCartActions } from "@/hooks/useMyCartActions";
import { Card } from "@workspace/ui/components/card";
// import { getTotalCartItems } from "@/redux/slices/cartSlice";
// import { useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";

function IncDecButtons() {
  const {
    handleIncreaseTempItemQuantity,
    handleDecreaseTempItemQuantity,
    tempItemQuantity,
  } = useMyCartActions();
  return (
    <Card className="flex w-full items-center justify-center gap-3 rounded-sm px-2 text-[1.25rem] xl:gap-4 flex-row! h-max p-2">
      <button
        className="rounded-sm p-1 hover:bg-muted xl:p-2 cursor-pointer"
        onClick={handleDecreaseTempItemQuantity}
      >
        <Minus />
      </button>
      <div className="h-[50%] w-[0.1px] bg-muted-foreground opacity-60"></div>

      <p>{tempItemQuantity}</p>
      <div className="h-[50%] w-[0.1px] bg-muted-foreground opacity-60"></div>

      <button
        className="rounded-sm p-1 hover:bg-muted xl:p-2 cursor-pointer"
        onClick={handleIncreaseTempItemQuantity}
      >
        <Plus />
      </button>
    </Card>
  );
}

export default IncDecButtons;
