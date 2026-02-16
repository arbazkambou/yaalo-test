import { queryKeys } from "@workspace/core/constants/queries.keys";
import { globalErrorHandler } from "@workspace/core/helpers/apiHandlers";
import { api } from "@workspace/core/lib/API";
import { BlogCategories } from "@workspace/core/types/services/blog/BlogCategories";
import { BlogDetailResponse } from "@workspace/core/types/services/blog/BlogDetails";
import {
  BlogsInputs,
  GetBlogsResponse,
} from "@workspace/core/types/services/blog/Blogs";

export async function getBlogs(searchParams: BlogsInputs) {
  const { category_slug, page, search } = searchParams;

  try {
    const queryParams = new URLSearchParams();
    if (category_slug) queryParams.append("category_slug", category_slug);
    if (search) queryParams.append("search", search);
    if (page) queryParams.append("page", page.toString());

    const data = await api<GetBlogsResponse>(
      `/blogs?${queryParams}`,
      null,
      { next: { tags: [queryKeys.blogs.getBlogs] } }
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogsCategories() {
  try {
    const data = await api<BlogCategories>(
      "/blog/categories",
      null,
      { next: { tags: [queryKeys.blogs.categories] } }
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getBlogDetail({
  slug,
  categorySlug,
}: {
  slug: string;
  categorySlug?: string;
}) {
  const params = new URLSearchParams();
  if (categorySlug) {
    params.set("category_slug", categorySlug);
  }

  try {
    const data = await api<BlogDetailResponse>(
      `/blog/detail/${slug}?${params.toString()}`,
      null,
      { next: { tags: [queryKeys.blogs.detail] } }
    );

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
