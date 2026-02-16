import AnimatedArrow from "@/components/ui/icons/AnimatedArrow";
import { NextLinkType } from "@workspace/core/types/components/components.types";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { ShadcnButtonType } from "@workspace/ui/types/components/components.types";
import { Link } from "@/i18n/navigation";

type LinkButtonProps = {
  variant: "link";
} & NextLinkType;

type SimpleButtonProps = {
  variant?: "button";
} & ShadcnButtonType;

type PrimaryButtonProps = LinkButtonProps | SimpleButtonProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  if (props.variant === "link") {
    const { href, locale, className, ...rest } = props;
    return (
      <Link href={href} {...rest}>
        <Button
          className={cn(
            `group flex items-center bg-primary gap-3 text-sm hover:text-primary-foreground hover:bg-primary/90 cursor-pointer`,
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
      className={cn(`group flex items-center gap-3 text-sm`, className)}
      {...rest}
    >
      <AnimatedArrow />
      {children}
    </Button>
  );
}
