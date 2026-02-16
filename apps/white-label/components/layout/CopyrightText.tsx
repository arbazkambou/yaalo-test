"use client";

import FooterLink from "@/components/ui/links/FooterLink";
import { useTranslations } from "next-intl";

function CopyrightText() {
  const t = useTranslations("SharedUI.footerLinks");
  return (
    <p className="flex items-center justify-center text-sm xl:justify-start">
      © {new Date().getFullYear()}{" "}
      <FooterLink href="/" className="mx-1">
        Yaalo.
      </FooterLink>
      {t("allRights")}
    </p>
  );
}

export default CopyrightText;
