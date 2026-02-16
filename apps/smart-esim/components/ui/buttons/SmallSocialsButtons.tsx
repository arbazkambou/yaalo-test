import Image from "next/image";
import { Link } from "@/i18n/navigation";

import appleLink from "@/assets/svgs/apple-store.svg";
import playLink from "@/assets/svgs/play-store.svg";
import { AppLinkSettings } from "@workspace/core/types/services/support/support.types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";

type PropType = {
  appLink: AppLinkSettings;
};

function SmallSocialsButtons({ appLink }: PropType) {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger>
          {" "}
          <div
            // href={appLink.android}
            // target="_blank"
            // rel="noopener noreferrer"
            className="bg-muted h-[30px] cursor-pointer w-[50px] sm:h-[39px] sm:w-[65px] rounded-pill flex items-center justify-center"
          >
            <div className="relative size-3.5 sm:size-[18px] transition-all hover:opacity-80">
              <Image src={playLink} fill alt="Yaalo android app" sizes="auto" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming Soon </p>
        </TooltipContent>
      </Tooltip>

      <Link
        href={appLink.ios}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-muted h-[30px] cursor-pointer w-[50px] sm:h-[39px] sm:w-[65px] rounded-pill flex items-center justify-center"
      >
        <div className="relative size-3.5 sm:size-[18px]  transition-all hover:opacity-80 ">
          <Image src={appleLink} fill alt="Yaalo ios app" sizes="auto" />
        </div>
      </Link>
    </div>
  );
}

export default SmallSocialsButtons;
