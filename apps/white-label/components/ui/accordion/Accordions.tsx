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
    title: string| React.ReactNode;
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
    <div className="container mt-10 flex items-center justify-center">
      <Accordion
        type="single"
        collapsible
        className={cn(
          `grid gap-x-10 gap-y-6 w-full xl:justify-center`,
          className,
        )}
      >
        {accordions.map((item, index) => (
          <div key={index} className="xl:min-w-[750px] xl:max-w-[750px]">
            <AccordionItem
              value={`${index}`}
              key={index}
              className="group h-full transition-all  bg-background! border rounded-[24px]"
            >
              <AccordionTrigger
                className="text-body-base font-500 md:text-body-md xl:text-body-lg "
                variant="bordered"
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent
                className="text-body-sm text-muted-foreground xl:text-body-md bg-background!"
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
