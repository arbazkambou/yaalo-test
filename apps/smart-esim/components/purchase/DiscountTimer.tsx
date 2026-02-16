"use client";

import { useEffect, useState, useMemo } from "react";
import { Megaphone } from "lucide-react";
import { useAuth } from "@workspace/core/hooks/auth/useAuth";

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

export function DiscountTimer() {
  const { session, isAuthenticated, isAuthLoading } = useAuth();
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  const eligibility = useMemo(() => {
    if (!isAuthenticated || !session?.user)
      return { isEligible: false, expiryTime: 0 };

    const createdAt = session.user.created_at;
    if (!createdAt) return { isEligible: false, expiryTime: 0 };

    const createdDate = new Date(createdAt).getTime();
    const expiryTime = createdDate + 24 * 60 * 60 * 1000;
    const now = Date.now();

    return {
      isEligible: now < expiryTime,
      expiryTime,
    };
  }, [session, isAuthenticated]);

  useEffect(() => {
    if (!eligibility.isEligible) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = eligibility.expiryTime - now;

      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({
          hours,
          minutes,
          seconds,
          totalSeconds: Math.floor(diff / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eligibility]);

  if (isAuthLoading || !eligibility.isEligible || !timeLeft) return null;

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/10 max-w-md shadow-sm">
      {/* Left Section */}
      <div className="flex flex-col border-r border-[#d1dce5] pr-4">
        <h3 className="text-primary font-bold text-lg leading-tight">
          Limited Time
        </h3>
        <p className="text-foreground/60 max-w-[105px] text-sm my-2 font-medium">
          Don't Miss Big Discounts
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-1 items-center">
        {/* Banner Pill */}
        <div className="bg-primary/10 px-4 py-1.5 rounded-full flex items-center gap-2">
          <Megaphone className="w-5 h-5 " />
          <span className="text-foreground font-bold text-sm">
            Get 15% Cashback
          </span>
        </div>

        {/* Countdown Grid */}
        <div className="flex gap-6 justify-center">
          <TimeUnit value={timeLeft.hours} label="Hour" />
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-foreground tracking-tight leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-foreground/60 text-[11px] font-medium uppercase mt-1">
        {label}
      </span>
    </div>
  );
}
