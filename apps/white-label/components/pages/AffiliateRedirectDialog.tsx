"use client";

import { useRouter } from "@/i18n/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Spinner } from "@workspace/ui/components/spinner";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface AffiliateRedirectDialogProps {
  open: boolean;
  adminRole?: string | null;
  onClose: () => void;
}

function AffiliateRedirectDialog({
  open,
  adminRole,
  onClose,
}: AffiliateRedirectDialogProps) {
  const t = useTranslations("RegisterPage");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && open && adminRole) {
      router.push(adminRole);
    }
  }, [mounted, open, adminRole, router]);

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-background border-none shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/20 rounded-full p-3">
            <Spinner className="h-8 w-8 text-foreground animate-spin" />
          </div>
          <DialogTitle className="text-2xl py-8 text-center font-bold text-foreground">
            {t("AffiliateRedirectDialog")}
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AffiliateRedirectDialog;
