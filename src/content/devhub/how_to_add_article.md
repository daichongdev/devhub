---
title: "如何添加新文章"
author: "戴崇"
date: "2026-06-10"
category: "DevHub"
tags: ["使用方法"]
excerpt: "如何在该平台中发布文章"
readTime: 8
---

# 如何添加新文章 - 完整指南

## 🎉 现在已经支持自动扫描 Markdown 文件！

你现在可以直接在 `src/content/{技术分区}/` 文件夹下添加 `.md` 文件，系统会自动加载！

## 📝 添加文章的步骤

### 第 1 步：选择技术分区

在 `src/content/` 下选择对应的技术分区文件夹：
- `golang/` - Go 语言相关
- `react/` - React 相关
- `typescript/` - TypeScript 相关
- `python/` - Python 相关
- `devops/` - DevOps 相关
- `database/` - 数据库相关

### 第 2 步：创建 Markdown 文件

在对应文件夹下创建 `.md` 文件，文件名建议使用 `kebab-case` 格式，例如：
- `my-awesome-article.md`
- `react-hooks-guide.md`
- `golang-best-practices.md`

### 第 3 步：编写文章内容

文件格式如下：

```markdown
---
title: "文章标题"
author: "作者名"
date: "2026-06-11"
category: "Golang"
tags: ["Go", "标签1", "标签2"]
excerpt: "文章摘要，会显示在卡片上"
readTime: 8
avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yourname"
---

# 文章标题

这里开始写文章正文...

## 第一部分

内容...

## 第二部分

更多内容...

### 代码示例

\`\`\`go
func main() {
    fmt.Println("Hello World")
}
\`\`\`

## 总结

总结内容...
```

### 第 4 步：刷新浏览器

保存文件后，刷新浏览器（按 F5），新文章会自动出现！

## 📋 Frontmatter 字段说明

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| `title` | ✅ | 文章标题 | "Go 并发编程最佳实践" |
| `author` | ✅ | 作者名称 | "张三" |
| `date` | ✅ | 发布日期 | "2026-06-11" |
| `category` | ✅ | 技术分类 | "Golang" |
| `tags` | ✅ | 标签数组 | ["Go", "并发", "性能"] |
| `excerpt` | ✅ | 文章摘要 | "深入探讨..." |
| `readTime` | ✅ | 阅读时间（分钟） | 8 |
| `avatar` | ❌ | 作者头像 URL | "https://..." |

### ⚠️ 重要注意事项

1. **category 必须匹配已定义的分类**（区分大小写）：
   - `Golang`
   - `React`
   - `TypeScript`
   - `Python`
   - `DevOps`
   - `Database`

2. **日期格式**：必须是 `YYYY-MM-DD` 格式，例如：`2026-06-11`

3. **tags**：必须是数组格式，用方括号包裹，例如：`["Go", "并发"]`

4. **avatar**：可选，推荐使用 [DiceBear Avatars](https://dicebear.com/)

## 🎨 Markdown 语法支持

### 标题
```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 代码块
````markdown
```javascript
const hello = "world";
```
````

### 列表
```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2
```

### 链接和图片
```markdown
[链接文字](https://example.com)
![图片描述](https://example.com/image.jpg)
```

### 引用
```markdown
> 这是一段引用文字
```

### 加粗和斜体
```markdown
**加粗文字**
*斜体文字*
***加粗斜体***
```

## 💡 示例文章

创建 `src/content/golang/my-first-article.md`：

```markdown
---
title: "我的第一篇 Go 文章"
author: "我的名字"
date: "2026-06-11"
category: "Golang"
tags: ["Go", "入门", "教程"]
excerpt: "这是我在 DevHub 平台上发布的第一篇技术文章"
readTime: 5
avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=myname"
---

# 我的第一篇 Go 文章

欢迎来到 Go 语言的世界！

## 为什么选择 Go

Go 语言具有以下优点：
- 简洁的语法
- 强大的并发支持
- 高效的性能

## Hello World

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

## 总结

Go 是一门优秀的编程语言！
```

保存后刷新浏览器，你的文章就会出现在首页和 Golang 分区！

## 🚀 当前文章统计

你的 Golang 分区下目前有：
- `go-concurrency-best-practices.md`
- `go-how-to-detect-escape.md`

这两篇文章应该已经自动加载并显示在网站上了！

## ❓ 常见问题

### Q: 添加文章后为什么没有显示？
A: 请检查：
1. Frontmatter 格式是否正确（三个短横线包裹）
2. category 是否拼写正确且区分大小写
3. 是否刷新了浏览器

### Q: 如何修改已有文章？
A: 直接编辑 `.md` 文件，保存后刷新浏览器即可

### Q: 如何删除文章？
A: 直接删除对应的 `.md` 文件，刷新浏览器即可

### Q: 可以添加图片吗？
A: 可以！将图片放在 `public/images/` 文件夹，然后在 Markdown 中使用：
```markdown
![描述](/images/your-image.jpg)
```

---

现在就去添加你的第一篇文章吧！🎉