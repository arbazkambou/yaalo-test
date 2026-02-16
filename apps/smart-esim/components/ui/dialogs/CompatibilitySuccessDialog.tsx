import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";


interface PropsType {
  showSuccessModal: boolean;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  deviceName: string;
  setShowCompatibilityDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
function CompatibilitySuccessModal({
  setShowSuccessModal,
  showSuccessModal,
  deviceName,
  setShowCompatibilityDialog,
}: PropsType) {
  const t= useTranslations("EsimCompatiblePage.hero");
  return (
    <Dialog
      open={showSuccessModal}
      onOpenChange={(value) => {
        setShowCompatibilityDialog(value);
        setShowSuccessModal(value);
      }}
    >
      <DialogContent>
        <DialogTitle className="flex items-center justify-center">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full bg-primary sm:h-28 sm:w-28 md:h-32 md:w-32"
            style={{
              clipPath:
                "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted sm:h-20 sm:w-20 md:h-24 md:w-24">
              <Check className="h-8 w-8 text-primary sm:h-9 sm:w-9 md:h-10 md:w-10" />
            </div>
          </div>
        </DialogTitle>
        <div className="flex flex-col items-center justify-center bg-background p-4 sm:p-6 md:p-8">
          <div className="flex w-full max-w-[320px] flex-col items-center space-y-6 text-center sm:max-w-md sm:space-y-8 md:max-w-lg md:space-y-10">
            {/* Success Message */}
            <div className="mt-2 flex flex-col gap-4 font-montserrat sm:mt-3">
              <p className="text-dark text-2xl font-bold sm:text-2xl md:text-3xl">
                {t("congratsText")}
              </p>
              <p className="text-gray text-base sm:text-lg">
                {t("wantToBuy")} {deviceName}?
              </p>
            </div>

            {/* Action Button */}
            <Link
              href="/esim"
              className="text-base font-500"
              onClick={() => {
                setShowCompatibilityDialog(false);
                setShowSuccessModal(false);
              }}
            >
              <Button>{t("yesBuy")}</Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CompatibilitySuccessModal;
