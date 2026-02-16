import { useTranslations } from "next-intl";
import AdvantagesCard from "../cards/AdvantagesCard";
import { getCardsData } from "@/constants/UIData";

function EsimAdvantages({ countryName }: { countryName: string }) {
  const t = useTranslations("SlugPage");
  const cardsData = getCardsData(countryName);

  return (
    <section className="container mt-16">
      <h2 className="text-center text-h2 xl:text-start ">
          {t.rich("getCardsData.title", {
          br: () => <br className="hidden xl:block" />,
          countryName,
        })}
      </h2>

      <div className="mt-[3.69rem] grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
         {cardsData.map((item, index) => (
          <AdvantagesCard
            key={index}
            index={index}
            icon={item.icon}
            title={t.rich(`getCardsData.cards.${item.key}.title`, {
              countryName: countryName ?? "",
            })}
            body={t.rich(`getCardsData.cards.${item.key}.body`, {
              countryName: countryName ?? "",
            })}
          />
        ))}
      </div>
    </section>
  );
}

export default EsimAdvantages;
