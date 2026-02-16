"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Minus, Plus, X } from "lucide-react";
import { cn } from "../lib/utils";

function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  variant = "muted",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item> & {
  variant?: "bordered" | "muted";
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "relative overflow-hidden rounded-lg",
        variant === "bordered" &&
          "pl-1 before:absolute before:inset-y-0 before:left-0 before:w-2 before:bg-primary-lightest before:transition-colors data-[state=open]:before:bg-primary-lightest",
        className
      )}
      {...props}
    />
  );
}

type TriggerVariant = "bordered" | "muted";
type IconVariant = "default" | "plusMinus"; // default = old Plus/X, plusMinus = your rounded +/-

function AccordionTrigger({
  className,
  children,
  variant = "muted",
  iconVariant = "default",
  iconPosition = "right",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  variant?: TriggerVariant;
  iconVariant?: IconVariant;
  iconPosition?: "left" | "right";
}) {
  const isLeft = iconPosition === "left";

  const PlusMinusIcon = (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center mt-1 rounded-full bg-primary/10 transition",
        "group-hover:bg-primary/20"
      )}
    >
      <Plus className="h-4 w-4 text-foreground transition group-data-[state=open]:hidden" />
      <Minus className="hidden h-4 w-4 text-foreground transition group-data-[state=open]:block" />
    </div>
  );

  const DefaultIcon = (
    <>
      <Plus className="h-6 w-6 shrink-0 text-foreground transition-transform duration-200 group-hover:text-primary group-data-[state=open]:hidden" />
      <X className="hidden h-6 w-6 shrink-0 text-foreground transition-transform duration-200 group-hover:text-primary group-data-[state=open]:flex" />
    </>
  );

  const BorderedIcon = (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/30">
      <ChevronDown className="h-6 w-6 text-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </div>
  );

  const iconEl =
    variant === "bordered"
      ? BorderedIcon
      : iconVariant === "plusMinus"
        ? PlusMinusIcon
        : DefaultIcon;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-start gap-2 rounded-b-lg rounded-t-lg text-left text-sm font-medium transition-all data-[state=open]:rounded-b-none",
          variant === "bordered" ? "px-6 py-5" : "bg-muted px-6 py-5",
          isLeft ? "justify-start" : "justify-between",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "flex w-full items-start gap-3",
            "ltr:flex-row rtl:flex-row-reverse",
            !isLeft && "justify-between"
          )}
        >
          {isLeft && iconEl}

          <span className={cn("flex-1", isLeft ? "pt-1" : "")}>{children}</span>

          {!isLeft && iconEl}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="relative overflow-hidden rounded-lg text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("transform bg-muted px-6 pb-8", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
