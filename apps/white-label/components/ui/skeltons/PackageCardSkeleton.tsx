import { Skeleton } from "@workspace/ui/components/skeleton";

export function PackageCardSkelton() {
  return (
    <div className="relative group flex justify-between rounded-lg border px-[1.06rem] py-[0.94rem] transition-all overflow-hidden">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-[54px]">
          <Skeleton className="h-9 w-[54px] rounded object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <Skeleton className="h-4 w-40 mb-2" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-14 flex items-center justify-center">
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  );
};