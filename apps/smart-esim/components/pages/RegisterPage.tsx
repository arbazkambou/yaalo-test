"use client";
import { Card } from "@workspace/ui/components/card";
import AuthImage from "../auth/AuthImage";
import AuthTabs from "../auth/AuthTabs";
import TrustpilotWidget from "../shared/TrustpilotWidget";

function RegisterPage() {
  return (
    <section className="container mt-4 flex w-full justify-center rounded-[2.4rem] bg-muted p-5 sm:p-10 xl:px-5 xl:py-16">
      <div className="grid w-full max-w-[1300px] xl:grid-cols-2">
        <AuthImage />
        <Card className="rounded-[2.4rem] px-6 pb-6 pt-4 shadow-lg sm:px-[1.38rem] sm:py-10 xl:rounded-bl-none xl:rounded-tl-none xl:px-[3.44rem] xl:py-[3.94rem] xl:pb-[3.94rem] xl:pt-6">
          {/* <TrustpilotWidget className="mb-3 sm:mb-6" /> */}
          <AuthTabs />
        </Card>
      </div>
    </section>
  );
}

export default RegisterPage;
