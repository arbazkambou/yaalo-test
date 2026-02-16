"use client";

import { QRCode } from "@workspace/core/components/QrCode";
import { useQrCodeActions } from "@workspace/core/hooks/misc/useQrCodeActions";
import { Download, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface QrCodeGeneratorProps {
  qrCodeValue: string | null;
  isShareable?: boolean;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({
  qrCodeValue,
  isShareable,
}) => {
 const t = useTranslations("simDetailPage.qrCodeMessages");
  const { downloadQrCode, shareQrCode, shareWithFallback, svgRef } =
    useQrCodeActions({
      validationMessages: {
        failedCanvas: t("failedCanvas"),
        failedLoad: t("FailedLoad"),
        fallbackDownload: t("fallbackDownload"),
        notFound: t("notFound"),
        notSupported: t("notSupported"),
        shareText: t("shareText"),
        shareTitle: t("shareTitle"),
      },
    });

  return (
    <div>
      {qrCodeValue ? (
        <div className="flex flex-col gap-3">
          <div ref={svgRef}>
            <QRCode value={qrCodeValue} size={70} className="qr-code-svg" />
          </div>
          {isShareable && (
            <div className="flex items-center gap-2 text-primary">
              <Download onClick={downloadQrCode} className="cursor-pointer" />
              <Share2
                onClick={() => shareQrCode().catch(shareWithFallback)}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      ) : (
        <p className="rounded bg-info/10 p-2 text-xs text-info">
          {t("activationInProcess")}
        </p>
      )}
    </div>
  );
};

export default QrCodeGenerator;
