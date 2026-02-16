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
      {/* <span className="flex items-center justify-center gap-2">
        <Plane size={22} />
        <span>{title} </span>
      </span> */}
      <span className="flex justify-center gap-3">
        <span className="relative inline-block h-[40px] w-[40px] shrink-0">
          <Image
            src={countryFlag}
            alt={`${countryName} flag`}
            fill
            sizes="auto"
            className="shrink-0 rounded-full object-cover shadow-md"
            priority
          />
        </span>

        <span>{description}</span>
      </span>
    </>
  );
}

export default CountryHeadingWithFlag;
