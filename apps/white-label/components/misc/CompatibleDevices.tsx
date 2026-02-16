import CompatibilitySuccessModal from "@/components/ui/dialogs/CompatibilitySuccessDialog";
import FooterLink from "@/components/ui/links/FooterLink";
import { usePathname } from "@/i18n/navigation";
import { useCompatibleDevices } from "@workspace/core/hooks/misc/useCompatibleDevices";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Spinner } from "@workspace/ui/components/spinner";
import { useTranslations } from "next-intl";
import { useState } from "react";

function CompatibleDevices({
  setShowCompatibilityDialog,
}: {
  setShowCompatibilityDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const t = useTranslations("EsimCompatiblePage.hero");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const {
    filteredBrands,
    setSelectedBrand,
    selectedBrand,
    filteredDevices,
    searchQuery,
    setSearchQuery,
    isLoading,
    selectedDevice,
    setSelectedDevice,
  } = useCompatibleDevices();
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/esim-compatible-devices/" && (
        <p className="flex flex-col gap-1 text-sm opacity-80 sm:flex-row">
          {t.rich(`compatibleDevicesDescription`, {
          FooterLink: (text) => (
            <FooterLink
              href="/esim-compatible/"
              className="text-primary underline underline-offset-4"
            >
              {text}
            </FooterLink>
          )
        })}
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          placeholder={t("searchDevice")}
          className="rounded-[0.6rem] border shadow-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedBrand}
          onValueChange={(value) => setSelectedBrand(value)}
        >
          <SelectTrigger className="h-full! rounded-[0.6rem] border shadow-none  flex items-center">
            <SelectValue placeholder={t("chooseBrand")} />
          </SelectTrigger>
          <SelectContent>
            {filteredBrands.map((brand, index) => (
              <SelectItem
                key={index}
                value={brand}
                className="dark:text-foreground"
              >
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="barMini max-h-[280px] min-h-[280px] sm:min-h-[600px] sm:max-h-[600px] overflow-auto rounded-[0.6rem] border px-2 py-4">
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <Spinner className="size-10 text-primary" />
            </div>
          ) : filteredDevices.length > 0 ? (
            filteredDevices.map((device, index) => (
              <p
                className="cursor-pointer rounded-[0.6rem] px-3 py-2 text-body-base transition-all hover:bg-muted"
                key={index}
                onClick={() => {
                  setSelectedDevice(device.model);
                  setShowSuccessModal(true);
                }}
              >
                {device.model}
              </p>
            ))
          ) : (
            <p className="cursor-pointer rounded-[0.6rem] px-3 py-2 text-body-base transition-all hover:bg-muted">
              {t("noMatch")}
            </p>
          )}
        </div>
      </div>
      <CompatibilitySuccessModal
        setShowSuccessModal={setShowSuccessModal}
        showSuccessModal={showSuccessModal}
        deviceName={selectedDevice}
        setShowCompatibilityDialog={setShowCompatibilityDialog}
      />
    </>
  );
}

export default CompatibleDevices;
