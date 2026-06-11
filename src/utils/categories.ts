import type { Category } from '../types';

export const categories: Category[] = [
  {
    name: 'Golang',
    slug: 'golang',
    description: 'Go 语言开发、并发编程、微服务架构',
    icon: '🔷',
    count: 0,
  },
  {
    name: 'React',
    slug: 'react',
    description: 'React 生态、前端框架、组件开发',
    icon: '⚛️',
    count: 0,
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    description: 'TypeScript 类型系统、最佳实践',
    icon: '🔷',
    count: 0,
  },
  {
    name: 'Python',
    slug: 'python',
    description: 'Python 开发、数据科学、机器学习',
    icon: '🐍',
    count: 0,
  },
  {
    name: 'DevOps',
    slug: 'devops',
    description: 'CI/CD、容器化、云原生',
    icon: '🚀',
    count: 0,
  },
  {
    name: 'Database',
    slug: 'database',
    description: '数据库设计、SQL、NoSQL',
    icon: '💾',
    count: 0,
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug.toLowerCase() === slug.toLowerCase());
};

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(cat => cat.name.toLowerCase() === name.toLowerCase());
};
