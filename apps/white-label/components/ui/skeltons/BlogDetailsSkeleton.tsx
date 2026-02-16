import { Skeleton } from "@workspace/ui/components/skeleton";

export function BlogDetailsSkeleton() {
  return (
    <>
      {/* Hero Image Section - Hidden on mobile */}
      <section className="container relative mx-auto mt-10 hidden h-[428px] max-w-[1127px] xl:block">
        <Skeleton className="h-full w-full rounded-[2.5rem]" />
      </section>

      {/* Main Card Container */}
      <div className="container mx-auto mt-16 flex max-w-[1000px] flex-col gap-10 rounded-[0.9375] border-none px-[1.81rem] py-[2rem] bg-card shadow-custom">
        {/* Breadcrumb and Share Button */}
        <div className="flex flex-col items-start justify-between gap-4 xl:flex-row">
          <div className="flex w-full items-center justify-start gap-2 rounded-[0.3125rem] bg-muted px-[1rem] py-[0.62rem] xl:w-max xl:gap-[1.31rem]">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-9 w-24" />
        </div>

        {/* Author and Date Section */}
        <div className="rounded-[0.625rem] border border-border bg-card p-[0.75rem] shadow-sm xl:px-[1rem]">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            {/* Author */}
            <div className="flex items-center gap-[10px]">
              <Skeleton className="h-[26px] w-[26px] rounded-full md:h-[43px] md:w-[43px]" />
              <Skeleton className="h-6 w-32" />
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-[15px] w-[15px] xl:h-[20px] xl:w-[25px]" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </div>

        {/* Blog Content Section */}
        <section className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-6 w-4/6" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-24 w-full" />
        </section>

        {/* Stats Section */}
        <div className="grid gap-x-[3rem] gap-y-[1.5rem] rounded-[0.70494rem] border border-border bg-card px-[1.59rem] py-[2rem] xl:grid-cols-3 xl:gap-y-[2rem]">
          {/* Stat Item 1 */}
          <div className="flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-7 w-32 rounded-[0.3995rem]" />
            <Skeleton className="h-4 w-48" />
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-7 w-32 rounded-[0.3995rem]" />
            <Skeleton className="h-4 w-48" />
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col items-center justify-between gap-3 xl:col-span-1 xl:items-start">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-7 w-32 rounded-[0.3995rem]" />
            <Skeleton className="h-4 w-48" />
          </div>

          {/* CTA Section */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-3 xl:flex-row xl:justify-between">
            <Skeleton className="h-6 w-full xl:w-64" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      {/* Related Plans Section */}
      <div className="container mx-auto mt-16 max-w-[1000px] rounded-[0.9375] border-none bg-card px-[1.81rem] py-[2rem] shadow-custom">
        <Skeleton className="h-8 w-48" />
        <div className="mt-10 grid gap-x-[5rem] gap-y-[4rem] xl:grid-cols-2">
          {/* Plan Card 1 */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted p-[1.06rem]">
            <div className="flex items-center gap-3">
              <Skeleton className="h-[42px] w-[42px] rounded-full" />
              <div className="flex flex-col justify-center gap-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
            <Skeleton className="h-5 w-5" />
          </div>

          {/* Plan Card 2 */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted p-[1.06rem]">
            <div className="flex items-center gap-3">
              <Skeleton className="h-[42px] w-[42px] rounded-full" />
              <div className="flex flex-col justify-center gap-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
            <Skeleton className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <section className="container mt-16">
        <Skeleton className="mx-auto h-8 w-48" />
        <div className="mt-16 grid gap-x-[5rem] gap-y-[4rem] xl:grid-cols-2">
          {/* Blog Card 1 */}
          <div className="space-y-4 rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex items-center gap-2 pt-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="space-y-4 rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex items-center gap-2 pt-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
