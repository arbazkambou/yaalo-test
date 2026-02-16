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
      className="relative cursor-pointer rounded-pill border-2 border-primary/10 sm:px-3.5 sm:py-2.5 px-3 py-2.5 font-sans text-sm font-500 shadow-none transition-all duration-200 
  hover:bg-primary hover:text-background bg-transparent"
      size="sm"
      variant="outline"
      onClick={() => setShowCartDetail(true)}
    >
      {isCartDetailLoading ? (
        <Skeleton className="h-6 w-6 rounded-full" />
      ) : (
        <>
          <ShoppingCart size={20} className="shrink-0 stroke-current" />

          <Badge
            className="absolute -top-1 right-[5px] flex h-4 w-4 items-center justify-center 
        rounded-[50%] text-[10px]"
          >
            {totalCartQuantity}
          </Badge>
        </>
      )}
    </Button>
  );
}
