import { formatDateTime } from "@workspace/core/helpers/formatDateTime";
import { PendingEsim } from "@workspace/core/types/services/sims/sims.types";
import { Card } from "@workspace/ui/components/card";
import { Calendar, Loader, PackageCheck } from "lucide-react";

interface PropsType {
  pendingPackage: PendingEsim;
}

function PendingSimDetail({ pendingPackage }: PropsType) {
  return (
    <Card className="flex flex-col gap-[3rem] rounded-[1.4rem] border border-primary px-[2rem] py-[2rem] shadow-none transition-all hover:shadow-myCard">
      {/* Active bundle  */}
      <div className="flex items-center gap-2.5">
        <PackageCheck
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">Package</p>
          <p className="text-[1.21875rem] leading-none text-muted-foreground">
            {pendingPackage.package_name}
          </p>
        </div>
      </div>

      {/* Status  */}
      <div className="flex items-center gap-2.5">
        <Loader className="shrink-0 text-primary" size={39} strokeWidth={1.5} />
        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">Status</p>
          <p className="text-[1.21875rem] leading-none text-muted-foreground">
            {pendingPackage.status}
          </p>
        </div>
      </div>

      {/* purchase date  */}
      {pendingPackage.created_at && (
        <div className="flex items-center gap-2.5">
          <Calendar
            className="shrink-0 text-primary"
            size={39}
            strokeWidth={1.5}
          />

          <div className="flex flex-col gap-0.5">
            <p className="text-body-md font-500 leading-none">Created At</p>
            <p className="text-body-md font-500 leading-none text-muted-foreground">
              {formatDateTime(pendingPackage.created_at)}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}

export default PendingSimDetail;
