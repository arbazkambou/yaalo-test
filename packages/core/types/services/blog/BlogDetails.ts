import { Blog, Category } from "./Blogs";

export interface Destination {
  id: number;
  name: string;
  image_url: string;
  url: string;
  starts_at?: string;
}

export interface BlogDetail extends Blog {
  content: string;
  destination_1: Destination;
  destination_2: Destination;
}

export interface BlogDetailData {
  blog: BlogDetail;
  categories: Category[];
  related_blogs: Blog[];
  scriptData: ScriptData;
}

export interface BlogDetailResponse {
  status: boolean;
  data: BlogDetailData;
  message: string;
}

export interface ScriptData {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  sku: string;
  mpn: string;
  brand: Brand;
  review: Review;
  aggregateRating: AggregateRating;
  offers: Offers;
}

interface Brand {
  "@type": string;
  name: string;
}

interface Review {
  "@type": string;
  reviewRating: ReviewRating;
  author: Author;
}

interface ReviewRating {
  "@type": string;
  ratingValue: string;
  bestRating: string;
}

interface Author {
  "@type": string;
  name: string;
}

interface AggregateRating {
  "@type": string;
  ratingValue: string;
  reviewCount: string;
}

interface Offers {
  "@type": string;
  url: string;
  priceCurrency: string;
  itemCondition: string;
  availability: string;
  lowPrice: string;
  highPrice: string;
  offerCount: string;
  seller: Seller;
}

interface Seller {
  "@type": string;
  name: string;
  url: string;
  logo: string;
  slogan: string;
}
