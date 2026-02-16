export type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

export interface TermsType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}
