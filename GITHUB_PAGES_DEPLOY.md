# 🚀 GitHub Pages 部署指南

## 📋 已完成的修复

✅ **vite.config.ts** - 添加 `base: '/devhub/'`
✅ **App.tsx** - 添加 `<Router basename="/devhub">`

---

## 🔧 部署步骤

### 方法 1：手动部署

1. **重新构建项目**
```bash
npm run build
```

2. **检查 dist 目录**
```bash
ls -la dist/
```

3. **部署到 GitHub Pages**
```bash
# 如果使用 gh-pages 分支
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages

# 或者推送整个项目，让 GitHub Actions 构建
git add .
git commit -m "Fix: Add base path for GitHub Pages"
git push origin main
```

---

### 方法 2：使用 gh-pages 工具（推荐）

1. **安装 gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **添加部署脚本到 package.json**
在 `scripts` 中添加：
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. **执行部署**
```bash
npm run deploy
```

---

### 方法 3：GitHub Actions 自动部署（最佳）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

---

## 🔍 故障排查

### 问题 1：页面显示 404
**原因**：GitHub Pages 设置不正确

**解决方案**：
1. 进入仓库 Settings → Pages
2. Source 选择 `gh-pages` 分支（或 main 分支的 /docs 文件夹）
3. 等待几分钟让 GitHub 部署

### 问题 2：页面一片空白
**原因**：路径配置错误

**解决方案**：
- ✅ 已修复：`vite.config.ts` 添加 `base: '/devhub/'`
- ✅ 已修复：`App.tsx` 添加 `basename="/devhub"`

### 问题 3：CSS/JS 加载失败
**原因**：资源路径错误

**解决方案**：
- 检查 `base` 配置是否正确
- 清除浏览器缓存
- 检查 Network 标签查看具体哪个资源 404

### 问题 4：路由刷新后 404
**原因**：GitHub Pages 不支持客户端路由

**解决方案 A**：使用 HashRouter（简单但 URL 不美观）
```tsx
import { HashRouter as Router } from 'react-router-dom';
// 不需要 basename
```

**解决方案 B**：添加 404.html（推荐）
在 `public` 目录创建 `404.html`：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      const path = window.location.pathname.replace('/devhub', '');
      window.location.href = '/devhub/#' + path;
    </script>
  </head>
  <body></body>
</html>
```

---

## ✅ 验证部署

部署后访问：
```
https://daichongdev.github.io/devhub/
```

检查清单：
- [ ] 首页能正常显示
- [ ] 搜索功能正常
- [ ] 点击文章能跳转
- [ ] CSS 样式正常加载
- [ ] 图标显示正常
- [ ] 分类页面正常

---

## 🎯 快速部署命令

```bash
# 1. 确保所有更改已保存
git status

# 2. 重新构建
npm run build

# 3. 提交更改
git add .
git commit -m "feat: Add GitHub Pages configuration"

# 4. 推送到远程
git push origin main

# 5. 如果使用 gh-pages 工具
npm run deploy
```

---

## 📝 package.json 推荐脚本

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist",
    "predeploy": "npm run build"
  }
}
```

---

## 🌐 访问地址

- **开发环境**: `http://localhost:5173/`
- **GitHub Pages**: `https://daichongdev.github.io/devhub/`

---

## 💡 最佳实践

1. **使用 GitHub Actions** - 自动化部署，推送即部署
2. **添加 CNAME** - 如果有自定义域名
3. **开启 HTTPS** - GitHub Pages 默认支持
4. **设置缓存** - 在 vite.config.ts 中配置
5. **压缩资源** - 开启 gzip 压缩

---

## 🔗 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages 工具](https://www.npmjs.com/package/gh-pages)

---

**现在重新构建并部署项目即可！** 🚀
