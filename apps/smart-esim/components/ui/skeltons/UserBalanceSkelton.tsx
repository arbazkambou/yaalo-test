import { Skeleton } from "@workspace/ui/components/skeleton";
import { Wallet } from "lucide-react";

function UserBalanceSkelton() {
  return (
    <Skeleton
      className={`flex w-full rounded-2xl bg-secondary-green/10 px-[33px] py-[26px] leading-none text-foreground items-center gap-6`}
    >
      <div className="space-y-3.5">
        <p className={`text-body-base mt-2 font-400 `}>Current Balance</p>
        <Skeleton className="h-[35px] w-[60px] rounded-pill bg-primary/20" />
      </div>
      <div>
        <Wallet size={30} className="text-secondary-green" />
      </div>
    </Skeleton>
  );
}

export default UserBalanceSkelton;
