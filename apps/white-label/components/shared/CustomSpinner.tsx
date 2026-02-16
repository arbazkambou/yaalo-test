import { cn } from "@workspace/ui/lib/utils";
import { Loader2, LoaderCircle } from "lucide-react";

export default function CustomSpinner({ className }: { className?: string }) {
  return (
    <div className="flex justify-center items-center h-full bg-background">
      <LoaderCircle className={cn("animate-spin", className)} />
    </div>
  );
}
