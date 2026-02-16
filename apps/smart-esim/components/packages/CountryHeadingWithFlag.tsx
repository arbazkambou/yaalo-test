import { Plane } from "lucide-react";
import Image from "next/image";

type PropsType = {
  title: string;
  countryFlag: string;
  countryName: string;
  description: string;
};

function CountryHeadingWithFlag({
  countryFlag,
  countryName,
  title,
  description,
}: PropsType) {
  return (
    <>
      <span className="flex items-center justify-center gap-2 text-body-base font-500">
        <Plane size={22} />
        <span>{title} </span>
      </span>
      <span className="flex justify-center gap-3">
        <span className="relative inline-block h-[40px] w-[40px] shrink-0">
          <Image
            src={countryFlag}
            alt={`${countryName} flag`}
            fill
            sizes="auto"
            className="shrink-0 rounded-sm object-cover shadow-md"
            priority
          />
        </span>

        <span className="font-montserrat text-h1-base font-700 md:text-[30px]">
          {description}
        </span>
      </span>
    </>
  );
}

export default CountryHeadingWithFlag;
