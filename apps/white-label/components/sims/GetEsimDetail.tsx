import ActivevatedPackages from "@/components/sims/ActivevatedPackages";
import CompletedPackages from "@/components/sims/CompletedPackages";
import DataOnlyUsageChart from "@/components/sims/DataOnlyUsageChart";
import SimDetailFull from "@/components/sims/SimDetailFull";
import { getEsimDetail } from "@workspace/core/services/sims/sims.services";
import AssignedPackages from "./AssignedPackages";
import RevokedPackages from "./RevokedPackages";
import SimInstallationGuide from "./SimInstallationGuide";

async function GetEsimDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getEsimDetail(slug);

  if (!data.status) throw new Error(data.message);

  const {
    sim,
    assigned_packages,
    completed_packages,
    coverage,
    in_use_packages,
    overall_usage,
    revoked_packages,
  } = data.data;

  const isActivatedPackages = in_use_packages.length > 0;
  const isCompletedPackages = completed_packages.length > 0;
  const isAssignedPackages = assigned_packages.length > 0;
  const isRevokedPackages = revoked_packages.length > 0;

  return (
    <>
      <section className={`mt-4 grid gap-10 xl:grid-cols-2`}>
        <SimDetailFull simDetail={sim} coverage={coverage} />
        <DataOnlyUsageChart overallUsage={overall_usage} />
      </section>

      {/* activated packages  */}
      {isActivatedPackages && (
        <ActivevatedPackages activatedPackages={in_use_packages} />
      )}

      {/* completed packages  */}
      {isCompletedPackages && (
        <CompletedPackages completedPackages={completed_packages} />
      )}

      {/* assigned packages  */}
      {isAssignedPackages && (
        <AssignedPackages assignedPackages={assigned_packages} />
      )}

      {/* revoked packages  */}
      {isRevokedPackages && (
        <RevokedPackages revokedPackages={revoked_packages} />
      )}

      <section className="mt-16">
        <h2 className="font-montserrat text-body-lg font-500">
          eSIM installation
        </h2>

        <SimInstallationGuide sim={sim} />
      </section>
    </>
  );
}

export default GetEsimDetail;
