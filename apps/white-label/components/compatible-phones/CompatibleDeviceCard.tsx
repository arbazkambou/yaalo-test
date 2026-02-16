import { DeviceItem } from "@/constants/compatible-phones"
import { cn } from "@workspace/ui/lib/utils"
import { Check } from "lucide-react"

export function CompatibleDeviceCard({ item }: { item: DeviceItem }) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 md:max-w-[220px] lg:max-w-full rounded-xl bg-card border-border border pt-4 pr-4 pl-6 pb-6 ",
        "dark:bg-card"
      )}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-secondary">
        <Check className="h-4 w-4 text-foreground" />
      </span>

      <div className="min-w-0">
        <p className="font-600 text-foreground mb-1">{item.name}</p>
        <p className="text-sm text-muted-foreground">{item.type}</p>
      </div>
    </div>
  )
}
