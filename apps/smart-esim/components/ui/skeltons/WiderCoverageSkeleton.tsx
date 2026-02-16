export default function WiderCoverageSkeleton() {
  return (
    <div className="w-full mt-4 animate-pulse">
      {/* Title */}
      <div className="h-6 w-48 bg-gray-200 rounded mb-2 mx-auto sm:mx-0" />

      {/* Description */}
      <div className="h-4 w-72 bg-gray-200 rounded mb-6 mx-auto sm:mx-0" />

      {/* Cards */}
      <div className="flex flex-col gap-y-8">
        <WiderCoverageCardSkeleton />
        <WiderCoverageCardSkeleton />
      </div>
    </div>
  );
}

function WiderCoverageCardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="flex gap-4">
        {/* Flag / image */}
        <div className="h-14 w-14 rounded bg-gray-200" />

        <div className="flex-1 space-y-3">
          {/* Country name */}
          <div className="h-4 w-40 bg-gray-200 rounded" />

          {/* Price */}
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
