import { Skeleton } from "@workspace/ui/components/skeleton";

function OrderHistoryTableSkelton() {
  return (
    <div className="mt-4 w-full">
      <div className="w-full overflow-hidden rounded-md border bg-card">
        <div className="flex items-center gap-4 border-b p-4">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
          <div className="ml-auto">
            <Skeleton className="h-5 w-24" />
          </div>
        </div>

        {/* rows */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-40" />
            <div className="ml-auto">
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistoryTableSkelton;
