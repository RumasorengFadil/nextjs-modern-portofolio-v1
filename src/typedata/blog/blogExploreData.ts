import { Blog } from "./blog";
import { Category } from "./category";
import { Tag } from "./tag";

export type BlogExploreData =  {
  posts: Blog[];
  mostPopularPosts: Blog[];
  nextPageUrl: string;
  categories: Category[];
  slug?: string;
  catSlug?: string;
  tagSlug?: string;
  searchKey?: string;
  tags : Tag[],
};
