"use client";
import { useLogin } from "@workspace/core/hooks/auth/useLogin";
import { Button } from "@workspace/ui/components/button";
import CustomSpinner from "@/components/shared/CustomSpinner";
import { useTranslations } from "next-intl";

function SocialLogins({ callBackUrl }: { callBackUrl?: string }) {
  const t= useTranslations("SharedUI");
  const { googleLoginApi, isGoogleLoggingIn, appleLoginApi, isAppleLoggingIn } =
    useLogin(callBackUrl);
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-500 text-foreground-light xs:gap-4">
      <Button
        variant={"outline"}
        onClick={() => googleLoginApi()}
        disabled={isGoogleLoggingIn}
        className="w-12 h-12 rounded-full"
      >
        {isGoogleLoggingIn ? (
          <CustomSpinner className="text-foreground/50" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Google />
          </span>
        )}
      </Button>

      <Button
        variant={"outline"}
        disabled={isAppleLoggingIn}
        className="w-12 h-12 rounded-full"
        onClick={() => appleLoginApi()}
      >
        {isAppleLoggingIn ? (
          <CustomSpinner className="text-foreground/50" />
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Apple />
          </span>
        )}
      </Button>
    </div>
  );
}

export default SocialLogins;

function Apple() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1605_14820)">
        <path
          d="M15.4909 6.87568C15.3769 6.96404 13.3641 8.09706 13.3641 10.6164C13.3641 13.5304 15.9253 14.5613 16.002 14.5869C15.9902 14.6497 15.5951 15.9987 14.6516 17.3733C13.8103 18.5829 12.9317 19.7905 11.5951 19.7905C10.2585 19.7905 9.9145 19.0149 8.3715 19.0149C6.86781 19.0149 6.33317 19.816 5.11057 19.816C3.88796 19.816 3.03489 18.6968 2.05405 17.3222C0.917936 15.7081 0 13.2006 0 10.8206C0 7.00331 2.48452 4.9788 4.92973 4.9788C6.22899 4.9788 7.31204 5.83102 8.12776 5.83102C8.90418 5.83102 10.115 4.92775 11.5931 4.92775C12.1533 4.92775 14.1661 4.9788 15.4909 6.87568ZM10.8914 3.31168C11.5027 2.5871 11.9351 1.58171 11.9351 0.576332C11.9351 0.436913 11.9233 0.295532 11.8978 0.181641C10.9032 0.21895 9.7199 0.843386 9.00639 1.67008C8.44619 2.3063 7.92334 3.31168 7.92334 4.3308C7.92334 4.48397 7.94889 4.63713 7.96069 4.68622C8.02359 4.698 8.1258 4.71175 8.22801 4.71175C9.12039 4.71175 10.2428 4.1148 10.8914 3.31168Z"
          fill="black"
          className="dark:hidden"
        />
        <path
          d="M7.02762 3.906C7.78477 3.906 8.73387 3.3895 9.29906 2.70084C9.81094 2.07674 10.1842 1.20516 10.1842 0.33357C10.1842 0.215207 10.1735 0.096843 10.1522 0C9.30973 0.032281 8.29664 0.570298 7.68879 1.29124C7.20891 1.84002 6.77168 2.70084 6.77168 3.58319C6.77168 3.71231 6.79301 3.84144 6.80367 3.88448C6.85699 3.89524 6.94231 3.906 7.02762 3.906ZM4.3616 16.926C5.39601 16.926 5.85457 16.2266 7.14492 16.2266C8.4566 16.2266 8.74453 16.9045 9.89625 16.9045C11.0266 16.9045 11.7838 15.85 12.4983 14.817C13.2981 13.6333 13.6287 12.4712 13.65 12.4174C13.5754 12.3959 11.4105 11.5028 11.4105 8.99564C11.4105 6.82205 13.1168 5.84286 13.2128 5.76754C12.0824 4.13197 10.3655 4.08893 9.89625 4.08893C8.62723 4.08893 7.59281 4.86367 6.9423 4.86367C6.23848 4.86367 5.3107 4.13197 4.2123 4.13197C2.12215 4.13197 0 5.87514 0 9.1678C0 11.2123 0.78914 13.3751 1.75957 14.7739C2.59137 15.9576 3.31652 16.926 4.3616 16.926Z"
          fill="white"
          className="dark:block hidden"
        />
      </g>
      <defs>
        <clipPath id="clip0_1605_14820">
          <rect
            width="16"
            height="19.6364"
            fill="white"
            transform="translate(0 0.181641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function Google() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_1605_14821)">
        <path
          d="M15.9582 8.15884C15.9582 7.61672 15.9133 7.07166 15.8176 6.53833H8.14062V9.60939H12.5369C12.3545 10.5999 11.7683 11.4761 10.91 12.0328V14.0255H13.5328C15.073 12.6365 15.9582 10.5852 15.9582 8.15884Z"
          fill="#4285F4"
        />
        <path
          d="M8.14046 15.9508C10.3356 15.9508 12.1868 15.2446 13.5356 14.0255L10.9128 12.0328C10.1831 12.5193 9.24102 12.7947 8.14345 12.7947C6.02008 12.7947 4.21971 11.3911 3.57373 9.50391H0.867188V11.5581C2.24887 14.2512 5.06308 15.9508 8.14046 15.9508Z"
          fill="#34A853"
        />
        <path
          d="M3.56935 9.50381C3.22841 8.51333 3.22841 7.44081 3.56935 6.45033V4.39612H0.865794C-0.288598 6.6496 -0.288598 9.30454 0.865794 11.558L3.56935 9.50381Z"
          fill="#FBBC04"
        />
        <path
          d="M8.14046 3.15658C9.30083 3.139 10.4223 3.56684 11.2627 4.35219L13.5864 2.07526C12.115 0.721417 10.1621 -0.0229058 8.14046 0.000537432C5.06308 0.000537432 2.24887 1.70017 0.867188 4.39614L3.57074 6.45035C4.21373 4.56024 6.01709 3.15658 8.14046 3.15658Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_1605_14821">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
