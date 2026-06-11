---
title: "TypeScript 5.0 新特性详解"
author: "戴崇"
date: "2026-06-08"
category: "TypeScript"
tags: ["TypeScript", "编程语言", "类型系统"]
excerpt: "探索 TypeScript 5.0 的新特性，包括装饰器、const 类型参数等。"
readTime: 7
---

# TypeScript 5.0 新特性详解

TypeScript 5.0 带来了许多激动人心的新特性。

## Decorators

正式支持 ECMAScript 装饰器：

```typescript
function logged(target: any, key: string) {
  const original = target[key];
  
  target[key] = function(...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @logged
  add(a: number, b: number) {
    return a + b;
  }
}
```

## const 类型参数

```typescript
function identity<const T>(value: T): T {
  return value;
}

const result = identity({ name: "Alice", age: 30 });
// result 的类型是 { readonly name: "Alice"; readonly age: 30 }
```

## 枚举改进

```typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

// 现在可以使用联合类型
type ColorValue = `${Color}`;
```

## 性能提升

- 更快的类型检查
- 减少内存占用
- 优化的模块解析

## 总结

TypeScript 5.0 让类型系统更加强大和灵活。
