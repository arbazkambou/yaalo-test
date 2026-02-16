import placeholderImage from "@/assets/images/placeholderImage.svg";
import { Blog } from "@workspace/core/types/services/blog/Blogs";
import { Card } from "@workspace/ui/components/card";
import { formatDate } from "@workspace/core/helpers/formatDate";
import author from "@/assets/images/nina.png";

import { ArrowUpRight, CalendarClock, Dot, PencilLine } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Badge } from "@workspace/ui/components/badge";

type PropsType = {
  blog: Blog;
  isRelatedBlog?: boolean;
};

function BlogCard({ blog, isRelatedBlog }: PropsType) {
  return (
  <div className="flex border-border flex-col justify-between gap-4 hover:cursor-pointer py-4 px-4 hover:shadow-md rounded-2xl border transition-all">
  <div className="transition-transform duration-300 hover:scale-105">
      {/* blog img  */}
      {blog.image ? (
        <Link
          className="group relative flex h-[240px] w-full items-center justify-center"
          href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
        >
          <Image
            src={blog.image}
            alt={"eSim Blog"}
            sizes="auto"
            fill
            quality={70}
            className="rounded-2xl transition-all"
          />
        </Link>
      ) : (
        <Link
          className="group relative flex h-[240px] w-full items-center justify-center"
          href={`/blog/${blog.category ? blog.category.slug : "blog"}/${blog.slug}`}
        >
          <Image
            src={placeholderImage}
            alt={"eSim Blog"}
            sizes="auto"
            fill
            quality={70}
            className="rounded-[0.375rem] object-cover transition-all group-hover:blur-[3px]"
          />
          <Badge className="z-50 flex items-center gap-2 p-3 opacity-0 transition-all group-hover:opacity-100">
            <ArrowUpRight size={30} />
          </Badge>
        </Link>
      )}

      <div className="flex flex-col justify-end gap-[1rem] p-4">
        <div className=" flex items-center">
          {/* blog category badge  */}
          <div className=" flex items-center gap-1">
            <p className="text-body-sm font-500">
              {blog.author_name || "Nina Alexandra"} ●
            </p>

            <p className="text-body-sm font-500">
              {formatDate(blog.created_at)}
            </p>
          </div>
        </div>

        <Link
          href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
          className="group flex justify-between gap-[0.5rem] font-montserrat transition-all"
        >
          {isRelatedBlog ? (
            <p className="text-body-md font-600">{blog.name}</p>
          ) : (
            <h2 className="text-body-md font-600 ">{blog.name}</h2>
          )}

          <ArrowUpRight className="w-[24px mt-1 h-[24px] shrink-0 transition-all group-hover:rotate-45" />
        </Link>

        {/* blog description  */}
        {!isRelatedBlog && (
          <Link
            href={`/blog${blog.category ? `/${blog.category.slug}` : ""}/${blog.slug}`}
          >
            <p className="cursor-pointer text-body-base leading-[1.5rem] text-muted-foreground transition-all">
              {blog.sub_content}
            </p>
          </Link>
        )}

        {/* blog author  */}

        <Link href={`/blog/${blog.category ? blog.category.slug : ""}`}>
          <Badge className="w-max shrink-0 bg-muted px-2 text-sm font-500 text-muted-foreground hover:bg-primary hover:text-background">
            {blog.category ? blog.category.name : "Blog"}
          </Badge>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default BlogCard;
