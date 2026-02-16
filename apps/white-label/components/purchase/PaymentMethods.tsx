"use client";

import stripe from "@/assets/images/stripeImg.png";
import amazonExpressPay from "@/assets/svgs/americanExpressPay.svg";
import googlePay from "@/assets/svgs/applePay.svg";
import discoverPay from "@/assets/svgs/discoverPay.svg";
import applePay from "@/assets/svgs/googlePay.svg";
import masterPay from "@/assets/svgs/masterPay.svg";
import visaPay from "@/assets/svgs/visaPay.svg";
import { LockKeyhole } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function PaymentMethods() {
    const t= useTranslations("cartPage.checkoutDetails");
  const paymentMethods = [
    {
      name: "Google Pay",
      imgSrc: googlePay,
    },
    {
      name: "Apple Pay",
      imgSrc: applePay,
    },
    {
      name: "Amazon Express Pay",
      imgSrc: amazonExpressPay,
    },
    {
      name: "Visa Card Pay",
      imgSrc: visaPay,
    },
    {
      name: "Master Card Pay",
      imgSrc: masterPay,
    },
    {
      name: "Discover Pay",
      imgSrc: discoverPay,
    },
  ];

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <div className="flex items-center gap-[19px]">
        <span>
          <LockKeyhole className="text-foreground" size={24} />
        </span>
        <p className="text-xs text-foreground sm:text-sm">{t("gurantedText")}</p>
        <div className="relative h-[21px] w-[42px]">
          <Image src={stripe} alt="stripe payment" sizes="auto" fill />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {paymentMethods.map((item, index) => (
          <Image
            src={item.imgSrc}
            height={30}
            width={35}
            alt={item.name}
            key={index}
            sizes="auto"
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
