---
title: "Go 并发编程最佳实践"
author: "戴崇"
date: "2026-06-10"
category: "Golang"
tags: ["Go", "并发", "Goroutine", "Channel"]
excerpt: "深入探讨 Go 语言的并发模型，包括 Goroutine、Channel 和常见并发模式。"
readTime: 8
---

# Go 并发编程最佳实践

Go 语言的并发模型是其最强大的特性之一。本文将深入探讨 Go 的并发编程。

## Goroutine 基础

Goroutine 是 Go 的轻量级线程：

```go
func main() {
    go func() {
        fmt.Println("Hello from goroutine")
    }()
    
    time.Sleep(time.Second)
}
```

## Channel 通信

使用 Channel 在 Goroutine 之间传递数据：

```go
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    // 启动 3 个 worker
    for w := 1; w <= 3; w++ {
        go worker(jobs, results)
    }
    
    // 发送任务
    for j := 1; j <= 5; j++ {
        jobs <- j
    }
    close(jobs)
    
    // 收集结果
    for a := 1; a <= 5; a++ {
        <-results
    }
}
```

## Select 语句

Select 用于处理多个 Channel 操作：

```go
func main() {
    c1 := make(chan string)
    c2 := make(chan string)
    
    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("received", msg1)
        case msg2 := <-c2:
            fmt.Println("received", msg2)
        }
    }
}
```

## 常见并发模式

### Worker Pool

```go
type Job struct {
    ID int
    Data string
}

type Result struct {
    Job Job
    Output string
}

func worker(id int, jobs <-chan Job, results chan<- Result) {
    for job := range jobs {
        output := processJob(job)
        results <- Result{Job: job, Output: output}
    }
}
```

## 最佳实践

1. **使用 Context 控制生命周期**
2. **避免共享内存，使用 Channel 通信**
3. **合理设置 Channel 缓冲区大小**
4. **使用 sync.WaitGroup 等待 Goroutine 完成**
5. **避免 Goroutine 泄漏**

## 总结

Go 的并发模型简单而强大，掌握这些模式可以编写出高效的并发程序。
