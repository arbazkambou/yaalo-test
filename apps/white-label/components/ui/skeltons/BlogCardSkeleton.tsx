import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

export function BlogCardSkeleton() {
  return (
      <Card className="flex flex-col justify-between gap-4 border-none py-0 shadow-lg transition-all">

      <Skeleton className="h-[240px] w-full rounded-2xl" />

      <div className="flex flex-col gap-[1rem] p-4">
    
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>

        <div className="flex justify-between gap-2">
          <Skeleton className="h-6 w-[85%]" />
          <Skeleton className="h-6 w-6 rounded-md" />
        </div>



 
        <Skeleton className="h-6 w-[90px] rounded-md" />
      </div>
    </Card>
  );
}
