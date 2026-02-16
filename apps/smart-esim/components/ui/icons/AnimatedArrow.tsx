import { cn } from "@workspace/ui/lib/utils";
import { CircleArrowRight } from "lucide-react";

function AnimatedArrow({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <CircleArrowRight
      className={cn(
        `group-hover:text-light transition group-hover:rotate-0 -rotate-45`,
        className,
      )}
      size={size}
    />
  );
}

export default AnimatedArrow;
