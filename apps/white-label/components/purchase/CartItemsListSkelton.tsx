import { Skeleton } from "@workspace/ui/components/skeleton";

export function CartItemsListSkelton() {
  return (
    <section>
      <div className="bg-background hover:bg-background">
        {/* flag + name */}
        <div className="bg-background p-1 pb-4 sm:p-2">
          <div className="flex shrink-0 items-center gap-[7px]">
            {/* flag */}
            <Skeleton className="h-[30px] w-[25px] rounded-full bg-primary/20" />

            {/* name text */}
            <Skeleton className="h-[14px] w-[140px] sm:w-[200px] rounded-md bg-primary/20" />
          </div>
        </div>

        {/* inc/dec buttons */}
        <div className="bg-background p-1 sm:p-2">
          <div className="flex w-full justify-center">
            <div className="flex w-[54px] sm:w-[80px] items-center justify-between gap-1">
              <Skeleton className="h-[15px] w-[15px] rounded-md  bg-primary/20" />
              <Skeleton className="h-[12px] w-[18px] rounded-md bg-primary/20" />
              <Skeleton className="h-[15px] w-[15px] rounded-md bg-primary/20" />
            </div>
          </div>
        </div>

        {/* price */}
        <div className="bg-background">
          <div className="flex min-w-[60px] items-center justify-end">
            <Skeleton className="h-[20px] w-[40px] rounded-md bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
