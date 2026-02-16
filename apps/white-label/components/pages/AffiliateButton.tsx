"use client";

import React from "react";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { cn } from "@workspace/ui/lib/utils";

type Props = {
  text?: string;
  className?: string;
};

export default function AffiliateButton({ text, className }: Props) {
  const scrollToForm = () => {
    document
      .getElementById("affiliate-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PrimaryButton
      variant="link"
      href="#affiliate-form"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        scrollToForm();
      }}
      className={cn(
        "bg-primary text-lg text-foreground/80 font-medium hover:bg-foreground hover:border-foreground",
        className,
      )}
    >
      {text || "Join Now"}
    </PrimaryButton>
  );
}
