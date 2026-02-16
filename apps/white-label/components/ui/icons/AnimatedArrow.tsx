import { cn } from "@workspace/ui/lib/utils";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

function AnimatedArrow({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <ArrowUpRight
      className={cn(
        `group-hover:text-light transition-all group-hover:rotate-45 `,
        className,
      )}
      size={size}
    />
  );
}

export default AnimatedArrow;
