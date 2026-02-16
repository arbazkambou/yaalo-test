"use client";

import { useCopyToClipboard } from "@workspace/core/hooks/misc/useCopyToClipboard";
import { CheckIcon, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const { copy, isCopied } = useCopyToClipboard();
  return (
    <button
      onClick={() => copy(text)}
      className="text-muted-foreground cursor-pointer"
    >
      {isCopied ? (
        <CheckIcon className="h-[16px] w-[16px] text-primary" />
      ) : (
        <Copy className="h-[16px] w-[16px]" />
      )}
    </button>
  );
};

export default CopyButton;
