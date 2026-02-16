// "use client";
// import { Button } from "@workspace/ui/components/button";
// import { usePathname } from "next/navigation";

// interface PropsType {
//   item: {
//     href: string;
//     label: string;
//     icon: React.ComponentType<{ size?: number }>;
//   };
// }
// function NavigationButton({ item }: PropsType) {
//   const pathName = usePathname();
//   return (
//     <Button
//       variant={"secondary"}
//       className={`rounded-lg border border-muted ${pathName === item.href ? "bg-primary-lightest" : ""} text-sm font-400 hover:bg-primary hover:text-background cursor-pointer`}
//     >
//      {item.icon && <item.icon size={20} />} {item.label}
//     </Button>
//   );
// }

// export default NavigationButton;

"use client";

import { usePathname } from "@/i18n/navigation";
import { Button } from "@workspace/ui/components/button";
import React from "react";

interface PropsType {
  item: {
    href: string;
    label: string;
  };
}
function NavigationButton({ item }: PropsType) {
  const pathName = usePathname();
  const isActive = pathName === item.href;

  return (
    <Button
      variant="secondary"
      className={`rounded-lg flex items-center gap-2 border-none shadow-none w-full
        ${isActive ? "bg-primary text-primary-foreground shadow-sm" : ""}
        text-sm font-500 hover:bg-primary hover:text-primary-foreground cursor-pointer`}
    >
      {item.label}
    </Button>
  );
}

export default NavigationButton;
