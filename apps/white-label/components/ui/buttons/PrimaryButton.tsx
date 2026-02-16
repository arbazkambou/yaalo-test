import AnimatedArrow from "@/components/ui/icons/AnimatedArrow";
import { NextLinkType } from "@workspace/core/types/components/components.types";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ShadcnButtonType } from "@workspace/ui/types/components/components.types";
import Link from "next/link";


type LinkButtonProps = {
  variant: "link";
} & NextLinkType;

type SimpleButtonProps = {
  variant?: "button";
} & ShadcnButtonType;

type PrimaryButtonProps = LinkButtonProps | SimpleButtonProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  if (props.variant === "link") {
    const { href, className, ...rest } = props;
    return (
      <Link href={href} {...rest}>
        <Button
          className={cn(
            `group gap-3 text-sm items-center bg-primary relative text-center no-underline cursor-pointer transition-all duration-500 rounded-lg shadow-[inset_0_0_0_0_currentColor] hover:bg-foreground hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90 text-foreground hover:text-background dark:text-background dark:hover:text-foreground`,
            className,
          )}
          variant={"outline"}
        >
          {props.children}
          <AnimatedArrow />
        </Button>
      </Link>
    );
  }

  const { className, children, ...rest } = props;

  return (
    <Button
      className={cn(
        `group gap-3 text-sm items-center bg-primary relative text-center no-underline cursor-pointer transition-all duration-500 rounded-lg shadow-[inset_0_0_0_0_currentColor] hover:bg-foreground hover:shadow-[inset_0_-100px_0_0_#000000] active:scale-90 text-foreground hover:text-background dark:text-background dark:hover:text-foreground`,
        className,
      )}
      {...rest}
      variant={"outline"}
    >
      {children}
      <AnimatedArrow />
    </Button>
  );
}
