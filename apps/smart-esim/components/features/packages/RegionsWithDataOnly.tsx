import RegionImageCard from "@/components/ui/cards/RegionImageCard";
import { getRegionsThatHavePackages } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";

async function RegionsWithDataOnly({ locale }: { locale: Locale }) {
  const regions = await getRegionsThatHavePackages(locale);

  return (
    <section className="grid gap-x-[1.2rem] px-4 gap-y-[1.3rem] sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-5">
      {regions.map((item, index) => (
        <div key={index}>
          <RegionImageCard
            name={item.name}
            slug={item.slug}
            imgSrc={item.flag}
            index={index}
            starts_at={item.starts_at}
          />
        </div>
      ))}
    </section>
  );
}

export default RegionsWithDataOnly;
