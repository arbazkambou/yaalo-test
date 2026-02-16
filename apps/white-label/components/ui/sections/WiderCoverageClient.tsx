"use client";

import React, { useEffect, useState } from "react";
import { Country } from "@workspace/core/types/services/packages/packages.types";
import StartingPriceCard from "@/components/packages/StartingPriceCard";
import { PackageCardSkelton } from "../skeltons/PackageCardSkeleton";

interface Props {
  countries: Country[];
}

export default function WiderCoverageClient({ countries }: Props) {
  const [selected, setSelected] = useState<Country[] | null>(null);

  useEffect(() => {
    if (!countries || countries.length === 0) {
      setSelected([]);
      return;
    }

    // pick two random countries client-side
    const shuffled = [...countries].sort(() => Math.random() - 0.5);
    setSelected(shuffled.slice(0, 2));
  }, [countries]);

  if (selected === null) {
    return (
      <div className="flex flex-col gap-y-2">
        <PackageCardSkelton />
        <PackageCardSkelton />
      </div>
    );
  }

  if (!selected.length) {
    return (
      <div className="text-center text-body-sm text-muted-foreground">
        Coming Soon...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2">
      {selected.map((country, idx) => (
        <StartingPriceCard key={idx} country={country} />
      ))}
    </div>
  );
}
