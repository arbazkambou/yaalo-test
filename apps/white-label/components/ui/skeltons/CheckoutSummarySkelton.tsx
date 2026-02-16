import FooterLink from "@/components/ui/links/FooterLink";
import { Button } from "@workspace/ui/components/button";
import { Skeleton } from "@workspace/ui/components/skeleton";

function CheckoutSummarySkelton() {
  return (
    <>
      <div className="flex text-body-base font-500 text-foreground/70 py-4 px-2 justify-between border-b border-grey/80">
        <p className="font-bold text-lg">Pay From Wallet</p>
        <Skeleton className="h-[16px] w-[60px] rounded-pill " />
      </div>

      <div className="flex text-body-base font-500 text-foreground/70 py-4 px-2 justify-between border-b border-grey/80 mb-4 ">
        <p className="font-bold text-lg">To Pay on Checkout</p>
        <Skeleton className="h-[16px] w-[60px] rounded-pill " />
      </div>

      <Button
        className={`group flex py-[18px] mt-2 rounded-4xl w-full items-center gap-3 text-sm bg-foreground text-primary-foreground hover:text-primary-foreground cursor-pointer`}
      >
        <Skeleton className="h-[20px] w-[60px] rounded-pill bg-primary-foreground/20" />
      </Button>

      <p className="mx-2 mt-8 text-body-base">
        By clicking ' Go to Secure Checkout you agree to our{" "}
        <FooterLink
          href={"/terms-of-service"}
          className="inline text-primary underline underline-offset-2"
        >
          Terms of Use
        </FooterLink>{" "}
        and{" "}
        <FooterLink
          href={"/privacy-policy"}
          className="inline text-primary underline underline-offset-2"
        >
          Privacy Policy
        </FooterLink>{" "}
        and will be redirected to Stripe for secure payment
      </p>
    </>
  );
}

export default CheckoutSummarySkelton;
