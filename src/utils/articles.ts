import type { Article, ArticleMeta } from '../types';

// 动态导入所有 Markdown 文件
const markdownModules = import.meta.glob('../content/**/*.md', {
  eager: true,
  as: 'raw'
});

// 解析 frontmatter（YAML 格式）
function parseFrontmatter(content: string): { data: any; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatter, markdown] = match;
  const data: any = {};

  // 解析 YAML frontmatter
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // 移除引号
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // 解析数组（tags）
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map(item => item.trim().replace(/^["']|["']$/g, ''));
    } else if (!isNaN(Number(value))) {
      // 解析数字
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  });

  return { data, content: markdown };
}

// 生成文章列表
function generateArticles(): Article[] {
  const articles: Article[] = [];
  let idCounter = 1;

  Object.entries(markdownModules).forEach(([path, content]) => {
    const { data, content: markdown } = parseFrontmatter(content as string);

    // 从路径生成 slug
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.md', '');
    const category = pathParts[pathParts.length - 2] || 'uncategorized';
    const slug = `${category}-${fileName}`;

    articles.push({
      id: String(idCounter++),
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: markdown.trim(),
      author: data.author || 'Anonymous',
      date: data.date || new Date().toISOString().split('T')[0],
      tags: data.tags || [],
      category: data.category || category,
      readTime: data.readTime || 5,
    });
  });

  // 按日期排序（最新的在前）
  return articles.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// 运行时生成文章列表（只在模块加载时执行一次）
export const articles: Article[] = generateArticles();

export const getArticles = (): ArticleMeta[] => {
  return articles.map(({ content, ...meta }) => meta);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): ArticleMeta[] => {
  return getArticles().filter(article => article.category === category);
};

export const getArticlesByTag = (tag: string): ArticleMeta[] => {
  return getArticles().filter(article => article.tags.includes(tag));
};

export const searchArticles = (query: string): ArticleMeta[] => {
  const lowercaseQuery = query.toLowerCase();
  return getArticles().filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    article.category.toLowerCase().includes(lowercaseQuery) ||
    article.author.toLowerCase().includes(lowercaseQuery)
  );
};

export const getAllCategories = (): string[] => {
  const categories = new Set(articles.map(article => article.category));
  return Array.from(categories).sort();
};

export const getAllTags = (): string[] => {
  const tags = new Set(articles.flatMap(article => article.tags));
  return Array.from(tags).sort();
};

export const getCategoryStats = () => {
  const stats: Record<string, number> = {};
  articles.forEach(article => {
    stats[article.category] = (stats[article.category] || 0) + 1;
  });
  return stats;
};

export const getRecentArticles = (limit: number = 5): ArticleMeta[] => {
  return getArticles()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
