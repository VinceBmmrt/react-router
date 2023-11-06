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

// Omit est un type utilitaire (https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)
// Il permet de créer un nouveau type en retirant des propriétés d'un autre type
export type PostWithoutCategory = Omit<Post, 'category'>;
