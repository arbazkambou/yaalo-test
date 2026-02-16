export default function PagesMetaSkeleton() {
  return (
    <div className="container max-w-[849px] mt-10 animate-pulse">
      <div className="grid gap-y-6 lg:grid-cols-1">
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
        <AccordionItemSkeleton />
      </div>
    </div>
  );
}

function AccordionItemSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 bg-muted">
      {/* Trigger row */}
      <div className="flex items-center gap-4 px-6 py-6 md:py-8">
        {/* plus/minus icon */}
        <div className="h-6 w-6 rounded bg-gray-200" />

        {/* title */}
        <div className="h-5 w-56 rounded bg-gray-200" />

        {/* spacer to mimic trigger alignment */}
        <div className="ml-auto h-5 w-5 rounded bg-gray-200" />
      </div>
    </div>
  );
}
