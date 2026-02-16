import { auth } from "@workspace/core/lib/NextAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ThankYouPage from "../pages/ThankYouPage";

type PropsType = {
  searchParams: Promise<{ status: string }>;
};

async function GetThankYouPageInfo({ searchParams }: PropsType) {
  const session = await auth();
  const cookieStore = await cookies();
  const isPurchase = cookieStore.get("isPurchase")?.value;
  if (!isPurchase) {
    redirect("/");
  }
  const isAuthenticated = !!session;
  const { status } = await searchParams;
  return (
    <ThankYouPage isAuthenticated={isAuthenticated} paymentStatus={status} />
  );
}

export default GetThankYouPageInfo;
