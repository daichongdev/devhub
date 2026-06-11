export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  readTime: number;
  coverImage?: string;
  avatar?: string;
}

export interface ArticleMeta {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  readTime: number;
  coverImage?: string;
  avatar?: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
  description: string;
  icon: string;
}
