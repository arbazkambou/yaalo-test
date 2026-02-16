import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

export function BlogCardSkeleton() {
  return (
    <Card className="flex flex-col justify-between gap-[1rem] border shadow-lg">
      {/* Skeleton for blog img */}
      <Skeleton className="h-[240px] w-full rounded-[0.375rem]" />

      <div className="flex flex-col justify-end gap-[1rem] p-4">
        <div className="flex items-center justify-between">
          {/* Skeleton for blog category badge */}
          <Skeleton className="h-6 w-20" />
          {/* Skeleton for blog author */}
          <div className="flex items-center gap-[10px]">
            <Skeleton className="h-[35px] w-[35px] rounded-full" />
            <Skeleton className="h-6 w-32" />
          </div>

        </div>

        {/* Skeleton for blog title */}
        <div className="flex justify-between gap-[0.5rem]">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>

        {/* Skeleton for blog date and read time */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </Card>
  );
}
