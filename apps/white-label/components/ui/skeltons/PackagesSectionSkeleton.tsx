import { Card } from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

export default function PackagesSectionSkeleton() {
  return (
    <section className="container pt-[156px]">
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-32 rounded" />
        </div>

        {/* Title block */}
        <div className="flex flex-col items-center text-center gap-4 mb-6">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-8 w-56 rounded" />
          <div className="space-y-2 w-full max-w-sm">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-11/12 rounded" />
            <Skeleton className="h-4 w-10/12 rounded" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Skeleton className="h-10 flex-1 rounded-full" />
          <Skeleton className="h-10 w-24 rounded-full" />
        </div>

        {/* List area */}
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="max-h-[520px] overflow-y-auto">
            <PackageRowSkeletonMobile />
            <PackageRowSkeletonMobile />
            <PackageRowSkeletonMobile />
            <PackageRowSkeletonMobile />
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid gap-8 lg:grid-cols-[500px_1fr]">
        {/* LEFT HERO CARD */}
        <div className="relative overflow-hidden rounded-[48px]">
          <Skeleton className="h-[720px] w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 px-6">
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="mt-6 h-10 w-56 rounded" />
            <div className="mt-6 space-y-3 w-full max-w-sm">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-11/12 rounded" />
              <Skeleton className="h-4 w-10/12 rounded" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center justify-end gap-3">
            <Skeleton className="h-10 w-44 rounded-full" />
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>

          <div className="flex-1 overflow-hidden rounded-2xl border border-border/60">
            <div className="max-h-[620px] overflow-y-auto">
              <PackageRowSkeletonDesktop />
              <PackageRowSkeletonDesktop />
              <PackageRowSkeletonDesktop />
              {/* <PackageRowSkeletonDesktop /> */}
            </div>

            <div className="border-t border-border/60 bg-background p-4">
              <div className="grid gap-4 md:grid-cols-[200px_1fr_1fr]">
                <Skeleton className="h-14 rounded-xl" />
                <Skeleton className="h-14 rounded-xl" />
                <Skeleton className="h-14 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageRowSkeletonMobile() {
  return (
    <Card className={"border-b border-border/60 p-4 rounded-none"}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <Skeleton className="h-5 w-44 rounded" />
          <Skeleton className="mt-3 h-8 w-24 rounded-full" />
          <Skeleton className="mt-3 h-3 w-16 rounded" />
        </div>

        <div className="flex flex-col items-end gap-3">
          <Skeleton className="h-6 w-16 rounded" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>
    </Card>
  );
}

function PackageRowSkeletonDesktop() {
  return (
    <Card
      className={
        "border-b  p-5 shadow-none border border-border/60 rounded-none dark:bg-background"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Skeleton className="h-5 w-56 rounded" />
          <Skeleton className="mt-3 h-8 w-24 rounded-full" />
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-16 rounded" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      </div>

      <Skeleton className="mt-4 h-8 w-24 rounded" />
    </Card>
  );
}
