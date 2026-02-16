import { formatDateTime } from "@workspace/core/helpers/formatDateTime";
import { LastBundle } from "@workspace/core/types/services/sims/sims.types";
import { Card } from "@workspace/ui/components/card";
import { Hourglass, Package } from "lucide-react";
import { getTranslations } from "next-intl/server";

async function RevokedPackages({
  revokedPackages,
}: {
  revokedPackages: LastBundle[];
}) {
  const t = await getTranslations("simDetailPage.revokedPackages");
  return (
    <section className="mt-16">
      <h2 className="font-montserrat text-h2-base font-500 md:text-[1.625rem]">
        {t("revoked")}
      </h2>
      <div className="mt-8 grid gap-10 xl:grid-cols-2 xl:gap-20">
        {revokedPackages.map((item, index) => (
          <Card
            className="flex flex-col gap-[1.12rem] rounded-[1.8125rem] px-[1.5rem] py-[1.88rem]"
            key={index}
          >
            {/* Package Name  */}
            <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
              <div className="flex items-center gap-[0.81rem]">
                <Package size={24} className="text-primary" />
                <p className="text-base font-500">{t("package")}</p>
              </div>
              <div className="flex items-center gap-[0.88rem]">
                <p className="text-base">{item.package_type.name}</p>
              </div>
            </div>

            {/* revoked at */}
            <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
              <div className="flex items-center gap-[0.81rem]">
                <Hourglass size={24} className="text-primary" />
                <p className="text-base font-500">{t("revokedAt")}</p>
              </div>
              <div className="flex items-center gap-[0.88rem]">
                <p className="text-base">{formatDateTime(item.revoked_at)}</p>
              </div>
            </div>

            {/* {usage.data.sim.can_renew && (
                  <Button className="rounded-full">Buy Again</Button>
                )} */}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default RevokedPackages;
