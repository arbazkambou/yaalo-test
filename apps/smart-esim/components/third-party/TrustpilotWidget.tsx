"use client";

import { useEffect, useRef } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface PropsType {
  className?: string;
}

const TrustpilotWidget = ({ className }: PropsType) => {
  const ref = useRef<HTMLDivElement>(null);
  // const pathname = usePathname();
  // const isHomePage = pathname === "/";

  useEffect(() => {
    // If window.Trustpilot exists, attempt to load the widget
    if (
      window.Trustpilot &&
      typeof window.Trustpilot.loadFromElement === "function"
    ) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn(`trustpilot-widget`, className)}
      data-locale="en-US"
      data-template-id="5419b732fbfb950b10de65e5"
      data-businessunit-id="64db6af868169ad313f5b67a"
      data-style-height="24px"
      data-style-width="100%"
    >
      <a
        href="https://www.trustpilot.com/review/smartesim.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Trustpilot */}
      </a>
    </div>
  );
};

export default TrustpilotWidget;
