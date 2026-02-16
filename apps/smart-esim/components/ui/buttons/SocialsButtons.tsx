import Image from "next/image";
import { Link } from "@/i18n/navigation";

import appleLink from "@/assets/svgs/appleLink.svg";
import playLink from "@/assets/svgs/playLink.svg";
import { AppLinkSettings } from "@workspace/core/types/services/support/support.types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";

function SocialsButtons({ appLink }: { appLink: AppLinkSettings }) {
  appLink.android = appLink.android === "null" ? "/" : appLink.android;

  return (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger>
          <div
          // href={appLink.android}
          // target="_blank"
          // rel="noopener noreferrer"
          >
            <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
              <Image src={playLink} fill alt="Yaalo android app" sizes="auto" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming Soon</p>
        </TooltipContent>
      </Tooltip>

      <Link href={appLink.ios} target="_blank" rel="noopener noreferrer">
        <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
          <Image src={appleLink} fill alt="Yaalo ios app" sizes="auto" />
        </div>
      </Link>
    </div>
  );
}

export default SocialsButtons;
