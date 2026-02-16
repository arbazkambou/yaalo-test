import { Card } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

interface PropsType {
  title?: string;
  paras: string[];
}

function PageTextCard({
  cardData,
  className,
}: {
  cardData: PropsType;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 px-[2.62rem] py-[2.31rem] shadow-custom! border-0 text-foreground",
        className,
      )}
    >
      {cardData.title && <h2 className="text-h2">{cardData.title}</h2>}

      {cardData.paras.map((item, index) => (
        <p className="text-body-base font-500 xl:text-body-lg" key={index}>
          {item}
        </p>
      ))}
    </Card>
  );
}

export default PageTextCard;
