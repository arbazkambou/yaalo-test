import { Skeleton } from "@workspace/ui/components/skeleton";

export function ThankYouSkeleton() {
  return (
    <section className="container mt-14">
      <div className="rounded-md bg-primary/10 py-14">
        {/* Heading skeleton */}
        <div className="space-y-4">
          <Skeleton className="mx-auto h-8 w-48" />
          <Skeleton className="mx-auto h-8 w-64" />
        </div>

        {/* Countdown timer skeleton */}
        <div className="mt-10 text-center">
          <Skeleton className="mx-auto h-20 w-20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
