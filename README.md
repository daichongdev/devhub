# DevHub - 开放技术分享平台

一个基于 React + TypeScript + Vite 构建的开放式技术博客平台。开发者可以在不同技术分区创建和分享内容。

## ✨ 平台特性

### 🏗️ 多技术分区架构
- **Golang** - Go 语言开发、并发编程、微服务
- **React** - React 生态、前端框架、组件开发
- **TypeScript** - 类型系统、最佳实践
- **Python** - Python 开发、数据科学、机器学习
- **DevOps** - CI/CD、容器化、云原生
- **Database** - 数据库设计、SQL、NoSQL

### 📝 基于 Markdown 的内容管理
- 只需在对应技术分区文件夹添加 `.md` 文件即可发布
- 支持 Frontmatter 元数据（标题、作者、标签等）
- 自动解析和渲染 Markdown 内容
- 代码语法高亮支持

### 🎨 专业平台设计
- 现代欧美极简风格
- 响应式布局，完美适配移动端
- 作者头像展示
- 分类浏览和搜索功能
- 侧边栏展示最新文章

### 🔍 强大的搜索和过滤
- 全文搜索（标题、摘要、标签、作者）
- 按技术分区浏览
- 按标签筛选

## 📂 项目结构

```
src/
├── content/                    # Markdown 文章存储
│   ├── golang/                # Go 语言分区
│   ├── react/                 # React 分区
│   ├── typescript/            # TypeScript 分区
│   ├── python/                # Python 分区
│   ├── devops/                # DevOps 分区
│   └── database/              # 数据库分区
├── components/                # React 组件
│   ├── Header.tsx            # 导航栏
│   ├── ArticleCard.tsx       # 文章卡片（支持头像）
│   ├── CategoryGrid.tsx      # 分类网格
│   ├── Sidebar.tsx           # 侧边栏
│   └── SearchBar.tsx         # 搜索栏
├── pages/                    # 页面组件
│   ├── Home.tsx             # 首页 - 展示所有分区和文章
│   ├── Category.tsx         # 分类页 - 特定技术分区
│   ├── Article.tsx          # 文章详情页
│   └── About.tsx            # 关于页面
├── utils/                   # 工具函数
│   ├── articles.ts          # 文章加载和管理
│   └── categories.ts        # 分类定义
└── types/                   # TypeScript 类型
    └── index.ts
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
访问: http://localhost:5173/

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📝 如何贡献内容

### 1. 选择技术分区

在 `src/content/` 下选择或创建对应的技术分区文件夹：
- `golang/` - Go 相关文章
- `react/` - React 相关文章  
- `typescript/` - TypeScript 相关文章
- `python/` - Python 相关文章
- `devops/` - DevOps 相关文章
- `database/` - 数据库相关文章

### 2. 创建 Markdown 文件

在对应文件夹下创建 `.md` 文件，文件名建议使用 `kebab-case` 格式：

```markdown
---
title: "文章标题"
author: "作者名"
date: "2026-06-11"
category: "React"
tags: ["React", "性能优化", "前端"]
excerpt: "文章摘要，简短描述文章内容"
readTime: 8
avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yourname"
---

# 文章正文

在这里编写你的文章内容...

## 使用 Markdown 语法

- 列表项
- 代码块
- 图片
- 链接

\`\`\`javascript
// 代码示例
const example = "Hello World";
\`\`\`
```

### 3. Frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| title | ✅ | 文章标题 |
| author | ✅ | 作者名称 |
| date | ✅ | 发布日期 (YYYY-MM-DD) |
| category | ✅ | 技术分类（必须匹配已定义的分类） |
| tags | ✅ | 标签数组 |
| excerpt | ✅ | 文章摘要（显示在卡片上） |
| readTime | ✅ | 预计阅读时间（分钟） |
| avatar | ❌ | 作者头像 URL（推荐使用） |

## 🎨 设计风格

### 配色方案
- 主色调：黑白灰 (#1a1a1a, #ffffff, #fafafa)
- 强调色：红色 (#ff6b6b)
- 文字颜色：层次化灰度
- 边框：极细 1px 线条

### 排版特点
- 超大标题字体（4rem+）
- 充足的留白空间
- 精致的字母间距
- 现代无衬线字体

### 交互设计
- 微妙的悬停效果
- 下划线式链接
- 极简边框设计
- 流畅的动画过渡

## 🛠️ 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理
- **React Markdown** - Markdown 渲染
- **gray-matter** - Frontmatter 解析
- **Highlight.js** - 代码高亮
- **date-fns** - 日期格式化

## 📄 页面说明

### 首页 (/)
- Hero 区域介绍平台
- 技术分区网格展示
- 最新文章列表
- 侧边栏显示最新动态

### 分类页 (/category/:category)
- 分类介绍和统计
- 该分类下所有文章
- 侧边栏推荐

### 文章详情页 (/article/:slug)
- 完整文章内容
- 作者信息和头像
- 代码语法高亮
- 响应式排版

### 关于页 (/about)
- 平台介绍
- 贡献指南
- 联系方式

## 🌟 特色功能

### 1. 自动化内容管理
只需添加 Markdown 文件，系统自动：
- 解析 Frontmatter 元数据
- 渲染文章内容
- 生成文章列表
- 更新分类统计

### 2. 灵活的分类系统
在 `src/utils/categories.ts` 中定义新的技术分区：

```typescript
{
  name: 'NewTech',
  slug: 'newtech',
  description: '新技术领域描述',
  icon: '🚀',
  count: 0,
}
```

### 3. 作者头像支持
使用免费头像生成服务：
- [DiceBear Avatars](https://dicebear.com/)
- [UI Avatars](https://ui-avatars.com/)
- 或自定义图片 URL

### 4. 智能搜索
搜索功能覆盖：
- 文章标题
- 文章摘要
- 标签
- 分类名称
- 作者名称

## 📊 内容统计

当前平台内容：
- ✅ 4 篇技术文章
- ✅ 3 个活跃技术分区
- ✅ 多位贡献者

## 🤝 贡献指南

1. **Fork 项目**
2. **创建分支** (`git checkout -b feature/amazing-article`)
3. **添加文章** 在对应技术分区文件夹
4. **提交更改** (`git commit -m 'Add: 精彩的技术文章'`)
5. **推送分支** (`git push origin feature/amazing-article`)
6. **创建 Pull Request**

## 📝 内容规范

### 文章质量要求
- ✅ 原创或获得授权的内容
- ✅ 技术准确性
- ✅ 清晰的代码示例
- ✅ 良好的排版格式
- ✅ 适当的文章长度（建议 800-3000 字）

### 禁止内容
- ❌ 抄袭或未授权转载
- ❌ 广告或营销内容
- ❌ 与技术无关的内容
- ❌ 不当言论

## 🔮 未来规划

- [ ] Markdown 文件自动扫描和加载
- [ ] 评论系统
- [ ] 文章点赞和收藏
- [ ] RSS 订阅
- [ ] 深色模式
- [ ] 多语言支持
- [ ] 作者个人主页
- [ ] 文章系列支持

## 📄 许可证

MIT License - 自由使用和修改

## 🙏 致谢

感谢所有为平台贡献内容的开发者！

---

**DevHub** - 让技术分享更简单 💻✨
