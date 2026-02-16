import { Category } from "./Blogs";

// export interface BlogCategories {
//   id: string;
//   name: string;
//   parent: number;
//   slug: string;
//   created_at: string | null;
//   updated_at: string | null;
// }
export interface BlogCategories {
  status: boolean;
  data: Category[];
}
