"use client";
import { useMyCartActions } from "@/hooks/useMyCartActions";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { ShoppingCart } from "lucide-react";

export default function CartQuantityButton() {
  const { totalCartQuantity, isCartDetailLoading, setShowCartDetail } =
    useMyCartActions();

  return (
    <Button
      className={`text-inherit relative border-0! bg-transparent! px-0 md:px-2 py-2 font-sans text-sm font-500 shadow-none transition-all duration-200 hover:text-inherit! hover:bg-transparent!`}
      size="sm"
      variant="outline"
      onClick={() => setShowCartDetail(true)}
    >
      {isCartDetailLoading ? (
        <Skeleton className="h-6 bg-foreground/20 w-6 rounded-full" />
      ) : (
        <>
          <ShoppingCart size={20} className="shrink-0" />
          <Badge className="text-foreground dark:text-background absolute -top-2 right-[5px] flex h-4 w-4 items-center justify-center rounded-[50%] text-body-xs">
            {totalCartQuantity}
          </Badge>
        </>
      )}
    </Button>
  );
}
