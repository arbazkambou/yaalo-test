import placeholderImage from "@/assets/images/placeholderImage.svg";
import { Blog } from "@workspace/core/types/services/blog/Blogs";
import { Card } from "@workspace/ui/components/card";
import { formatDate } from "@workspace/core/helpers/formatDate";
import author from "@/assets/images/nina.png";
import { ArrowUpRight, CalendarClock, PencilLine } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

import { Badge } from "@workspace/ui/components/badge";

type PropsType = {
  blog: Blog;
  isRelatedBlog?: boolean;
};

function BlogCard({ blog, isRelatedBlog }: PropsType) {
  return (
    <Card className="m-0 gap-0 p-0 border border-grey/70 w-[360px] sm:w-[426px] h-[435px] overflow-hidden shadow-sm hover:cursor-pointer ">
      {/* blog img  */}

      <Link
        className="group relative flex h-60 w-full items-center justify-center"
        href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
      >
        <Image
          src={blog.image || placeholderImage}
          alt={"eSim Blog"}
          sizes="auto"
          fill
          quality={70}
          className="rounded-t-[0.375rem] transition-all group-hover:blur-[2px] object-top"
        />
        <Badge className="z-50 flex scale-0 items-center gap-2 p-3 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight size={30} />
        </Badge>
      </Link>

      <div className="flex flex-col justify-center gap-[0.7rem] p-2 bg-secondary h-[195px]">
        {/* blog author  */}
        <div className="blogs-center flex items-center gap-2.5">
          <div className="relative h-10 w-10">
            <Image
              src={blog.author_image || author}
              fill
              sizes="auto"
              alt={`${blog.author_name}'s blog`}
              className="rounded-full"
            />
          </div>
          <PencilLine className="h-3.5 w-3.5" />
          <p className="text-[17px] font-500">
            {blog.author_name || "Nina Alexendra"}
          </p>
        </div>

        {/* blog title  */}
        <Link
          href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
          className="group flex justify-between gap-2 font-montserrat transition-all hover:text-primary"
        >
          {isRelatedBlog ? (
            <p className="text-[1.13rem] font-600 md:text-[1.25rem] xl:text-[1.35rem]">
              {blog.name}
            </p>
          ) : (
            <h2 className="text-[1.13rem] font-600 md:text-[1.25rem] xl:text-[1.35rem]">
              {blog.name}
            </h2>
          )}

          <ArrowUpRight className="w-6 mt-1 h-6 shrink-0 transition-all group-hover:rotate-45" />
        </Link>

        <div className="blogs-center flex justify-between items-center">
          {/* blog category badge  */}
          <Link href={`/blog/${blog.category ? blog.category.slug : ""}`}>
            <Badge className="w-max shrink-0 bg-primary/10 px-2 text-sm font-500 text-primary hover:bg-primary hover:text-background">
              {blog.category ? blog.category.name : "Blog"}
            </Badge>
          </Link>

          {/* blog date and read time  */}
          <div className="blogs-center flex gap-4">
            <div className="blogs-center flex gap-2">
              <CalendarClock className="h-[15px] w-[15px]" />
              <p className="font-montserrat text-xs">
                {formatDate(blog.created_at)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BlogCard;
