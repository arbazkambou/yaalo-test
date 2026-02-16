import { Skeleton } from "@workspace/ui/components/skeleton";

function NavSkelton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-30 rounded-pill" />
    </div>
  );
}

export default NavSkelton;
