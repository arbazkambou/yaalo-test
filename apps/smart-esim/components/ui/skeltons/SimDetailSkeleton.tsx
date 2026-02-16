import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

function SimDetailSkeleton() {
  return (
    <div className="container mt-[4rem] grid gap-[2rem] md:grid-cols-2 md:gap-x-[4rem] md:gap-y-[2rem] xl:grid-cols-3 xl:gap-x-[7rem] xl:gap-y-[3rem]">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          className="flex flex-col gap-[3rem] rounded-[1.4rem] border px-[2rem] py-[2rem] shadow-none transition-all"
          key={index}
        >
          {/* iccid skeleton */}
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-[39px] w-[39px] rounded-full" />
            <div className="flex flex-col gap-0.5">
              <Skeleton className="h-5 w-[60px]" />
              <Skeleton className="h-5 w-[180px]" />
            </div>
          </div>

          {/* purchase date skeleton */}
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-[39px] w-[39px] rounded-full" />
            <div className="flex flex-col gap-0.5">
              <Skeleton className="h-5 w-[140px]" />
              <Skeleton className="h-5 w-[200px]" />
            </div>
          </div>

          {/* Active bundle skeleton */}
          <div className="flex items-center gap-2.5">
            <Skeleton className="h-[39px] w-[39px] rounded-full" />
            <div className="flex flex-col gap-0.5">
              <Skeleton className="h-5 w-[120px]" />
              <Skeleton className="h-6 w-[160px]" />
            </div>
          </div>

          {/* see detail and qr code skeleton */}
          <div className="flex items-end justify-between">
            <Skeleton className="h-10 w-[130px] rounded-full" />
            <Skeleton className="h-[77px] w-[77px] rounded-md" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default SimDetailSkeleton;
