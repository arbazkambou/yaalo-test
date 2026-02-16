"use client";

import { useRef } from "react";
import { toast } from "sonner";

interface UseQrCodeActionsOptions {
  scaleFactor?: number;
  padding?: number;
  validationMessages?: {
    notFound: string;
    failedCanvas: string;
    failedLoad: string;
    notSupported: string;
    shareTitle: string;
    shareText: string;
    fallbackDownload: string;
  };
}

export function useQrCodeActions(options?: UseQrCodeActionsOptions) {
  const svgRef = useRef<HTMLDivElement>(null);

  const scaleFactor = options?.scaleFactor ?? 6;
  const padding = options?.padding ?? 10;
  const validationMessages = options?.validationMessages;

  const getSvgElement = () => {
    if (!svgRef.current) {
      toast.error(
        validationMessages?.notFound ?? "QR Code could not be found."
      );
      return null;
    }
    const svg = svgRef.current.querySelector("svg.qr-code-svg");
    if (!svg) {
      toast.error(
        validationMessages?.notFound ?? "QR Code could not be found."
      );
      return null;
    }
    return svg;
  };

  const convertSvgToPng = async (): Promise<Blob | null> => {
    const svg = getSvgElement();
    if (!svg) return null;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = (img.width + 2 * padding) * scaleFactor;
        canvas.height = (img.height + 2 * padding) * scaleFactor;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          toast.error(
            validationMessages?.failedCanvas ?? "Failed to get canvas context."
          );
          URL.revokeObjectURL(url);
          return resolve(null);
        }

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.scale(scaleFactor, scaleFactor);
        ctx.drawImage(img, padding, padding);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(url);
            resolve(blob);
          },
          "image/png",
          1
        );
      };

      img.onerror = () => {
        toast.error(
          validationMessages?.failedLoad ?? "Failed to load QR code."
        );
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.src = url;
    });
  };

  const downloadQrCode = async () => {
    const blob = await convertSvgToPng();
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "qrcode.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const shareQrCode = async () => {
    if (!navigator.share) {
      throw new Error(validationMessages?.notSupported ?? "Not supported");
    }

    const blob = await convertSvgToPng();
    if (!blob) return;

    const file = new File([blob], "qrcode.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: validationMessages?.shareTitle ?? "QR Code",
        text: validationMessages?.shareText ?? "Here is the QR code.",
        files: [file],
      });
    } else {
      throw new Error(
        validationMessages?.notSupported ?? "File share not supported"
      );
    }
  };

  const shareWithFallback = async () => {
    try {
      await shareQrCode();
    } catch {
      await downloadQrCode();
      toast.error(
        validationMessages?.fallbackDownload ??
          "Sharing not supported. QR Code downloaded instead."
      );
    }
  };

  return {
    svgRef,
    downloadQrCode,
    shareQrCode,
    shareWithFallback,
  };
}
