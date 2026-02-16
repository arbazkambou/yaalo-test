import { Skeleton } from "@workspace/ui/components/skeleton";

export function BlogCategoriesTabSkeleton() {
  return (
    <div className="mt-16 max-w-full overflow-auto">
      <div className="flex md:justify-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-[6.1875rem] px-0 py-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-12 w-24 rounded-[1.1875rem] sm:w-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
