"use client";
import chatSupport from "@/assets/svgs/chatSupportButton.svg";
import XIcon from "@/assets/svgs/crossIcon.svg";
import ChatBotIcon from "@/assets/svgs/liveChatIcon.svg";
import WhatsappIcon from "@/assets/svgs/whatsappIcon.svg";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

type PropsType = {
  whatsappNumber: string;
};

export function ChatSupportDialog({ whatsappNumber }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-[90px] right-5 z-50 xl:bottom-[80px]">
      {/* Main Floating Button - changes to X when open */}
      <button
        onClick={toggleOpen}
        className="flex h-[66px] w-[66px] items-center justify-center rounded-full  shadow-lg transition-all duration-300 hover:scale-105 dark:border-primary-foreground"
      >
        {isOpen ? (
          <Image src={XIcon} alt="Close" fill className="object-contain" />
        ) : (
          <div className="relative mt-1 h-[66px] w-[66px]">
            <Image
              src={chatSupport}
              alt="Chat Support"
              fill
              className="object-contain"
              quality={75}
            />
          </div>
        )}
      </button>

      {/* Popup Options - appear around the main button when open */}
      <div
        className={`absolute bottom-0 left-0 transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* WhatsApp Button */}
        <Link
          href={`https://wa.me/${Number(whatsappNumber)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)} // optional: close after clicking
          className={`absolute bottom-16 right-[1rem] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-500 hover:scale-110 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <Image
            src={WhatsappIcon}
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </Link>

        {/* Live Chat Button */}
        <Link
          href={`https://tawk.to/chat/${tawkPropertyId}/${tawkWidgetId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)} // optional: close after clicking
          className={`absolute bottom-[7rem] right-[-4rem] flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
          }`}
        >
          <Image
            src={ChatBotIcon}
            alt="Live Chat"
            fill
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
