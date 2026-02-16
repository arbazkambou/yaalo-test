import { useRouter } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
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
  return (
    <div
      className="relative group flex justify-between rounded-lg border-2 border-muted py-[10px] transition-all px-[12px] hover:border-primary hover:bg-background cursor-pointer overflow-hidden flex-col gap-2 dark:bg-card"
      onClick={() => {
        router.push(href);
        setShowDialog(false);
      }}
    >
      <div className="relative h-9 w-[54px]">
        <Image
          src={image_url}
          alt={`${countryName} flag`}
          sizes="54px"
          fill
          quality={100}
          className="shrink-0 object-cover rounded-[8px]"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-body-base font-500">{countryName}</h3>
        <div className="flex p-2 items-center justify-center rounded-full bg-primary/30">
          <ChevronRight className="size-[12px]" />
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
