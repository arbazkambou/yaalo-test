import { useCallback, useState } from "react";

export function useCopyToClipboard(resetDuration = 2000) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        // Auto-reset after X milliseconds
        setTimeout(() => setIsCopied(false), resetDuration);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    },
    [resetDuration]
  );

  return { isCopied, copy };
}
