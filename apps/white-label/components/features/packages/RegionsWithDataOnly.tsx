import africa from "@/assets/images/afrigaImg.svg";
import asia from "@/assets/images/asiaImg.svg";
import europe from "@/assets/images/europeImg.svg";
import gcc from "@/assets/images/gccImg.svg";
import gccDark from "@/assets/svgs/southEastAsiaMapDark.svg";
import middleEast from "@/assets/images/middleEastImg.svg";
import oceania from "@/assets/images/OceaniaImg.svg";
import oceaniaDark from "@/assets/svgs/oceaniaMapDark.svg";
import africaDark from "@/assets/svgs/africaMapDark.svg";
import asiaDark from "@/assets/svgs/asiaMapDark.svg";
import caribbean from "@/assets/images/caribbeanImg.svg";
import caribbeanDark from "@/assets/svgs/caribbeanMapDark.svg";
import europeDark from "@/assets/svgs/europeDarkImg.svg";
import middleEastDark from "@/assets/svgs/middleEastMapDark.svg";
import northAmerica from "@/assets/images/northAmericaImg.svg";
import northAmericaDark from "@/assets/svgs/northAmericaMapDark.svg";
import southAmerica from "@/assets/images/southAmericaImg.svg";
import southAmericaDark from "@/assets/svgs/southAmericaMapDark.svg";
import RegionImageCard from "@/components/ui/cards/RegionImageCard";
import { getRegionsThatHavePackages } from "@workspace/core/services/packages/packages.services";
import { Locale } from "next-intl";

async function RegionsWithDataOnly({ locale }: { locale: Locale }) {
  const regions = await getRegionsThatHavePackages(locale);

  return (
    <section className="grid gap-x-8 gap-y-[1.3rem] sm:grid-cols-2 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:px-0">
      {regions.map((item, index) => (
        <div key={index} className="flex w-full items-center justify-center">
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
