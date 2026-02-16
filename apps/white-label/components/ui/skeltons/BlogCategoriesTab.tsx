import { Skeleton } from "@workspace/ui/components/skeleton";

export function BlogCategoriesTabSkeleton() {
  return (
    <div className="mt-16 w-full max-w-fit xl:mx-auto rounded-md border-2 border-muted bg-muted/40">
      <div className="flex md:justify-center">
        <div className="flex w-full gap-2 overflow-x-auto px-2 py-2 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-10 w-[110px] shrink-0 animate-pulse rounded-md bg-muted"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
