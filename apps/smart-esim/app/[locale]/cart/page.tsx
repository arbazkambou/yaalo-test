import CheckoutPage from "@/components/pages/CheckoutPage";
import { seoData } from "@/lib/seo/seoConfig";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  const localizedSeo = seoData["en"]!;
  return localizedSeo.cart;
}

async function Page() {
  return <CheckoutPage />;
}

export default Page;
