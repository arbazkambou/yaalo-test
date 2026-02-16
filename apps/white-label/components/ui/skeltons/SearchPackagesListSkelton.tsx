import { Skeleton } from "@workspace/ui/components/skeleton";
import { cn } from "@workspace/ui/lib/utils";

type PropsType = {
  className?: string;
};

function SearchPackagesListSkelton({ className }: PropsType) {
  return (
    <Skeleton
      className={cn(
        `h-14 rounded-pill w-full bg-primary-foreground/10`,
        className
      )}
    />
  );
}

export default SearchPackagesListSkelton;
