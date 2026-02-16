"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { cn } from "@workspace/ui/lib/utils";
import { useEffect, useState } from "react";

interface PropsType {
  accordions: {
    title: string;
    body: string | React.ReactNode;
  }[];
  className?: string;
}
function Accordions({ accordions, className }: PropsType) {
  const [isMount, setIsMount] = useState<true | undefined>(true);

  useEffect(function () {
    setIsMount(undefined);
  }, []);

  return (
    <div className="container max-w-[849px] mt-10">
      <Accordion
        type="single"
        collapsible
        className={cn(`grid gap-x-10 gap-y-6 lg:grid-cols-1`, className)}
      >
        {accordions.map((item, index) => (
          <div key={index}>
            <AccordionItem
              variant="muted"
              value={`${index}`}
              key={index}
              className="group h-full rounded-lg transition-all data-[state=open]:border-primary data-[state=open]:bg-muted"
            >
              <AccordionTrigger
                variant="muted"
                iconVariant="plusMinus"
                iconPosition="left"
                className="text-body-md font-500 md:py-8 text-lg cursor-pointer transition-all xl:text-body-lg bg-muted"
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent
                className="text-body-sm text-muted-foreground  pl-16 xl:text-body-md"
                forceMount={isMount}
              >
                {item.body}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordions;
