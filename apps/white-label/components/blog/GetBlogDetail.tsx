import { cleanString } from "@workspace/core/helpers/cleanString";
import { getBlogDetail } from "@workspace/core/services/blog/blogs.services";
import { notFound } from "next/navigation";
import BlogDetailPage from "./BlogDetailPage";

interface PropsType {
  params: Promise<{ slug: string; category: string }>;
}

async function GetBlogDetail({ params }: PropsType) {
  const { category, slug } = await params;

  let blogData;
  try {
    blogData = await getBlogDetail({
      slug,
      categorySlug: category,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }
  return <BlogDetailPage blogData={blogData} />;
}

export default GetBlogDetail;
