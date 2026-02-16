"use client";

import React from "react";

interface PropsType {
  icon: React.ReactNode;
  title: string;
  body: string;
  index?: number;
}

function AdvantagesCard({ title, icon, body, index }: PropsType) {
  return (
    <div>
      <div className="flex bg-primary-light h-full flex-col items-center text-center md:flex-row md:text-left md:items-start gap-[0.81rem] rounded-md border border-transparent px-6 pb-[1.88rem] pt-[2.38rem]">
        <span className="text-primary shrink-0 bg-primary/10 p-2.5 rounded-pill">
          {icon}
        </span>
        <div>
          <h3 className=" text-xl md:text-start font-semibold text-foreground ">
            {title}
          </h3>
          <p className="text-body-base py-2 md:max-w-[545px] leading-normal text-foreground">
            {body.split("\n").map((item, index) => (
              <span key={index} className="block">
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesCard;
