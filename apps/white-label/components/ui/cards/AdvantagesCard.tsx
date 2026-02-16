"use client";

import { Card } from "@workspace/ui/components/card";
import { useLocale } from "next-intl";
import Image from "next/image";
import React, { type FC, ReactNode, type SVGProps, isValidElement } from "react";

interface PropsType {
  icon: React.ReactNode;
  title: string | ReactNode;
  body: string | ReactNode;
  index?: number;
}

function AdvantagesCard({ title, icon, body, index }: PropsType) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <Card className="border-border border-2 h-full shadow-none ">
      <div
        className={`flex h-full flex-col items-center text-center ${isArabic ? "md:text-right" : "md:text-left"} md:items-start gap-4 rounded-md  px-6 py-3`}
      >
        <span className="text-primary shrink-0 bg-accent p-2.5 rounded-pill">
          {icon}
        </span>
        <div>
          <h3 className="text-body-md md:text-lg  text-foreground font-500">
            {title}
          </h3>
          <p className="leading-normal text-muted-foreground mt-3 font-medium text-body-sm md:text-body-base">
            {typeof body === "string"
              ? body.split("\n").map((item, index) => (
                <span key={index} className="block">
                  {item}
                </span>
              ))
              : body}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default AdvantagesCard;
