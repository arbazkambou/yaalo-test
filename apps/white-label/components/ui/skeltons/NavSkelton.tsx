import { Skeleton } from "@workspace/ui/components/skeleton";

function NavSkelton() {
  return (
    <div className="flex items-center mr-3">
      <Skeleton className="h-10 bg-foreground/20 w-20 rounded-pill" />
    </div>
  );
}

export default NavSkelton;
