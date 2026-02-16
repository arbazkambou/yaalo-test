import stars from "@/assets/svgs/5Star.svg";
import { cn } from "@workspace/ui/lib/utils";

import Image from "next/image";

interface PropsType {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  title2?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  showDownloadAndRating?: boolean;
  btnLink?: React.ReactNode;
  className?: string;
}
function PagesHero({
  title,
  description,
  btnLink,
  title2,
  description2,
  showDownloadAndRating = true,
  className,
}: PropsType) {
  return (
    <section className="mb-16 mt-16 xl:container">
      <div
        className={cn(
          `flex flex-col items-center gap-[1.6rem] bg-primary px-[0.5rem] py-[1.94rem] text-background sm:px-[3.12rem] xl:col-span-1 xl:rounded-[2.5rem]`,
          className,
        )}
      >
        {showDownloadAndRating && (
          <>
            {/* <p className="flex items-center justify-center gap-4 text-xs text-background xl:justify-start">
              <span className="font-700">Excellent</span>
              <span>
                <span className="font-700">4.8</span> out of 5
              </span>
              <span className="flex items-center gap-1 font-700">
                <Image
                  src={whiteStar}
                  alt="Trustpilot Rating"
                  height={14}
                  width={13}
                  sizes="auto"
                />
                Trustpilot
              </span>
            </p> */}
            <div className="flex items-center justify-center gap-4">
              <div className="relative h-[21.5px] w-[120px]">
                <Image src={stars} alt="5 stars rating" fill sizes="auto" />
              </div>
              <p className="text-body-sm font-700 text-background">
                500,000+ Downloads
              </p>
            </div>
          </>
        )}

        <h1 className="text-center text-h1  leading-normal text-primary-foreground">
          {title}
        </h1>

        {description && (
          <p className="text-center text-xs leading-normal  md:text-body-lg">
            {description}
          </p>
        )}

        {title2 && (
          <h2 className="text-body-base md:text-body-md lg:text-body-lg font-500 font-manrope">
            {title2}
          </h2>
        )}

        {description2 && (
          <p className="text-center text-xs leading-normal opacity-80 md:text-body-lg">
            {description2}
          </p>
        )}

        {btnLink && btnLink}
      </div>
    </section>
  );
}

export default PagesHero;
