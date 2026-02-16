"use client";
import { usePathname } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";

interface PropsType {
  item: {
    href: string;
    label: string;
  };
}
function NavigationButton({ item }: PropsType) {
  const pathName = usePathname();
  return (
    <Button
      variant={"secondary"}
      className={`rounded-lg px-8! border bg-background border-muted ${pathName === item.href && "bg-primary text-background"} text-xs md:text-sm font-400 rounded-full md:font-medium hover:bg-primary hover:text-background cursor-pointer`}
    >
      {item.label}
    </Button>
  );
}

export default NavigationButton;
