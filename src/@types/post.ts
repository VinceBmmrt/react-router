export type Category = {
  id: number;
  slug: string;
  name: string;
};

export type Post = {
  id: number;
  categoryId: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
};
