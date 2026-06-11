---
title: "React Server Components 完全指南"
author: "戴崇"
date: "2026-06-09"
category: "React"
tags: ["React", "RSC", "Next.js", "服务端渲染"]
excerpt: "深入理解 React Server Components，探索服务端组件的优势和使用场景。"
readTime: 10
---

# React Server Components 完全指南

React Server Components (RSC) 是 React 18 引入的革命性特性。

## 什么是 Server Components

Server Components 在服务器上渲染，不会发送 JavaScript 到客户端：

```jsx
// app/page.js (Server Component)
async function HomePage() {
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

## 优势

1. **零客户端 JavaScript** - 减少包体积
2. **直接访问后端资源** - 数据库、文件系统
3. **自动代码分割** - 按需加载
4. **更好的 SEO** - 服务端渲染

## Server 和 Client 组件

```jsx
// Server Component (默认)
async function ServerComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}

// Client Component (需要声明)
'use client';

import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 数据获取

```jsx
// 并行获取
async function Page() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  
  const [user, posts] = await Promise.all([userPromise, postsPromise]);
  
  return <Profile user={user} posts={posts} />;
}
```

## 最佳实践

- 默认使用 Server Components
- 只在需要交互时使用 Client Components
- 在 Server Components 中获取数据
- 合理使用 Suspense 边界

## 总结

RSC 改变了我们构建 React 应用的方式，带来更好的性能和用户体验。
