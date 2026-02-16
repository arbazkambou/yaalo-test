import CopyButton from "@/components/ui/buttons/CopyButton";
import { formatDateTime } from "@workspace/core/helpers/formatDateTime";
import { Esim } from "@workspace/core/types/services/sims/sims.types";
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import {
  Loader,
  Microchip,
  PackageCheck,
  ReceiptText,
  Settings,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

import QrCodeGenerator from "./QrCodeGenerator";
import { useTranslations } from "next-intl";

interface PropsType {
  sim: Esim;
  isDataVoice?: boolean;
}

function SimDetail({ sim }: PropsType) {
  const t = useTranslations("simDetailPage.simDetail");
  const isICCIDNull =
    sim.iccid === null || sim.iccid === "" || sim.iccid === " ";

  return (
    <Card className="flex flex-col gap-[3rem] rounded-[1.4rem] border border-primary px-[2rem] py-[2rem] shadow-none transition-all hover:shadow-myCard">
      {/* iccid  */}
      <div className="flex items-center gap-2.5">
        <Microchip
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />
        <div className="flex items-end gap-[1.2rem]">
          <div className="flex flex-col gap-0.5">
            <p className="text-body-md font-500 leading-none">
              {" "}
              {isICCIDNull ? "SIM ID" : "ICCID"}
            </p>
            <p className="text-body-md font-500 leading-none text-muted-foreground">
              {isICCIDNull ? `${sim.id.slice(0, 20)}...` : sim.iccid}
            </p>
          </div>
          <CopyButton text={isICCIDNull ? sim.id : sim.iccid} />
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <Loader className="shrink-0 text-primary" size={39} strokeWidth={1.5} />

        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">{t("status")}</p>
          <p className="text-body-md font-500 leading-none text-muted-foreground">
            {sim?.status}
          </p>
        </div>
      </div>

      {/* purchase date  */}
      <div className="flex items-center gap-2.5">
        <ReceiptText
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />

        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">
            {t("purchaseDateEt")}
          </p>
          <p className="text-body-md font-500 leading-none text-muted-foreground">
            {formatDateTime(sim.created_at)}
          </p>
        </div>
      </div>

      {/* Active bundle  */}
      <div className="flex items-center gap-2.5">
        <PackageCheck
          className="shrink-0 text-primary"
          size={39}
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-body-md font-500 leading-none">
            {t("activatedBundle")}
          </p>
          <p className="text-[1.21875rem] leading-none text-muted-foreground">
            {sim.last_bundle_name}
          </p>
        </div>
      </div>

      {/* see detail nd qr code  */}
      <div className="flex items-end justify-between font-600 text-primary">
        <Link href={`/my-esims/${sim.id}`}>
          <Button
            variant={"outline"}
            className="flex items-center gap-2 rounded-full border border-primary !py-3 transition-all hover:bg-primary hover:text-background"
            size={"md"}
          >
            <Settings className="h-[20px] w-[20px] shrink-0" />
            {t("seeDetails")}
          </Button>
        </Link>

        {sim.qr_code_generation && (
          <QrCodeGenerator qrCodeValue={sim.qr_code_generation} />
        )}
      </div>

      {!sim.qr_code_generation && (
        <p className="-mt-6 rounded-md bg-primary/10 p-2 text-sm text-foreground">
          {t("activationInProcess")}
        </p>
      )}
    </Card>
  );
}

export default SimDetail;
