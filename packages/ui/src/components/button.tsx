import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// Merged buttonVariants: Button 2 structure but classes from Button 1 take priority
export const buttonVariants = cva(
  // Base classes: merged, giving Button 1 priority where conflicts exist
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-background text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary border",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-muted shadow-sm hover:bg-primary-midlight rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        simple:
          "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
        animatedYaalo:
          "group gap-3 text-sm items-center hover:bg-foreground hover:text-background bg-primary relative text-center no-underline cursor-pointer transition-all duration-500 rounded-lg shadow-[inset_0_0_0_0_currentColor] hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90 text-foreground dark:text-background dark:hover:text-foreground dark:border-border dark:border",
      },
      size: {
        default: "py-3 px-5 md:py-4 md:px-6",
        sm: "rounded-md px-3 text-xs py-2",
        md: "px-[1.5rem] py-[1rem] text-xs",
        md2: "px-[2.5rem] py-[0.7rem] text-xs",
        lg: "rounded-md px-8",
        icon: "h-20 w-20",
        link: "px-3 py-3 md:py-4 md:px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
