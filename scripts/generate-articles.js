import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');
const outputFile = path.join(__dirname, '../src/utils/articles.ts');

// 扫描所有 Markdown 文件
function scanMarkdownFiles(dir) {
  const articles = [];
  let idCounter = 1;

  function scanDir(currentDir, category) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // 递归扫描子目录
        scanDir(fullPath, item);
      } else if (item.endsWith('.md')) {
        // 读取并解析 Markdown 文件
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { data, content: markdown } = matter(content);

        // 从路径生成 slug
        const relativePath = path.relative(contentDir, fullPath);
        const slug = relativePath.replace(/\.md$/, '').replace(/\//g, '-');

        articles.push({
          id: String(idCounter++),
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          content: markdown,
          author: data.author || 'Anonymous',
          date: data.date || new Date().toISOString().split('T')[0],
          tags: data.tags || [],
          category: data.category || category || 'Uncategorized',
          readTime: data.readTime || 5,
          avatar: data.avatar,
        });
      }
    }
  }

  scanDir(contentDir);
  return articles;
}

// 生成 TypeScript 文件内容
function generateArticlesTS(articles) {
  const articlesJSON = JSON.stringify(articles, null, 2);

  return `import type { Article, ArticleMeta } from '../types';

// 自动生成的文章列表
// 运行 \`npm run generate-articles\` 来更新此文件
export const articles: Article[] = ${articlesJSON};

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
`;
}

// 主函数
function main() {
  console.log('🔍 扫描 Markdown 文件...');
  const articles = scanMarkdownFiles(contentDir);
  console.log(`✅ 找到 ${articles.length} 篇文章`);

  console.log('📝 生成 articles.ts...');
  const tsContent = generateArticlesTS(articles);
  fs.writeFileSync(outputFile, tsContent, 'utf-8');
  console.log(`✅ 已生成 ${outputFile}`);

  console.log('\n📋 文章列表:');
  articles.forEach(article => {
    console.log(`  - ${article.title} (${article.category})`);
  });
}

main();
