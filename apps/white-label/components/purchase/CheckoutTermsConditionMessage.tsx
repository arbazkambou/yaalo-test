import FooterLink from "@/components/ui/links/FooterLink";

interface PropsType {
  amountDeductFromCard: number;
}

function CheckoutTermsConditionMessage({ amountDeductFromCard }: PropsType) {
  return (
    <p className="mx-2 mt-8 text-body-base text-foreground">
      By clicking '
      {amountDeductFromCard === 0 ? "Purchase Now" : "Go to Secure Checkout"}'
      you agree to our{" "}
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
      {amountDeductFromCard !== 0 &&
        "and will be redirected to Stripe for secure payment."}
    </p>
  );
}

export default CheckoutTermsConditionMessage;
