import { useRouter } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  index: number;
  href: string;
  image_url: string | StaticImageData;
  countryName: string;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

function CountryItem({
  countryName,
  href,
  image_url,
  setShowDialog,
}: PropsType) {
  const router = useRouter();
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <div
      className="flex justify-between rounded-full p-2 transition hover:bg-secondary cursor-pointer"
      onClick={() => {
        router.push(href);
        setShowDialog(false);
      }}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-5 w-[30px]">
          <Image
            src={image_url}
            alt={`${countryName} Packages`}
            className="rounded object-cover shadow-lg"
            fill
          />
        </div>
        <p className="text-sm font-500 text-foreground-light">{countryName}</p>
      </div>

      <ChevronRight size={22} className={`${isArabic ? "rotate-180" : ""}`} />
    </div>
  );
}

export default CountryItem;
