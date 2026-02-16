import { Skeleton } from "@workspace/ui/components/skeleton";
import UserBalanceSkelton from "./UserBalanceSkelton";

export function CheckoutPageSkelton() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Order Summary */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-8 w-48" />
          </div>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-muted/30 rounded-2xl p-4 flex items-center gap-4"
              >
                <Skeleton className="h-16 w-16 rounded-full shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Skeleton className="h-5 w-5" />
                      <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg">
                        <Skeleton className="h-6 w-6 rounded-md" />
                        <Skeleton className="h-6 w-4" />
                        <Skeleton className="h-6 w-6 rounded-md" />
                      </div>
                    </div>
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-5 space-y-6">
          <Skeleton className="h-8 w-32" />

          <div className="space-y-6 border-t pt-4">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="flex items-center justify-between py-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-5" />
            </div>

            <div className="border-t pt-4 flex justify-between">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-12" />
            </div>

            <div className="flex justify-between">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-5 w-20" />
            </div>

            <Skeleton className="h-14 w-full rounded-full" />

            <div className="space-y-2 text-center">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
