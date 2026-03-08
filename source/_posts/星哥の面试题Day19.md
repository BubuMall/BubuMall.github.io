---
title: 星哥の面试题Day19
date: 2023-03-13 19:46:18
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 为什么 JS 要被设计为单线程？

JS 被设计为单线程的主要原因是为了避免多线程编程所带来的复杂性。如果 JS 是多线程的，那么在处理并发问题时，需要考虑锁、同步等一系列复杂的问题，这会增加代码的复杂度和开发难度。



此外，JS 最初是为了解决网页交互的问题而诞生的，而网页交互的需求大部分是基于用户事件的，比如点击按钮、输入文本等。这些操作的响应速度要求很高，如果在响应事件的同时还要处理其他任务，可能会导致网页卡顿、响应变慢等用户体验不佳的问题。



因此，为了避免多线程所带来的复杂性和降低开发难度，并且满足网页交互的高响应速度需求，JS 被设计为单线程。虽然单线程有局限性，但是可以通过异步编程、事件循环机制等技术手段来实现高效的并发处理。

## TypeScript 中的 Declare 关键字有什么用？

TypeScript 中的 declare 关键字用于声明一个变量、函数、类等的类型信息，但不实现其具体实现。它主要用于在编译时进行静态类型检查，并在编译后移除声明的代码，以减少 JavaScript 文件的大小。

使用 declare 关键字声明的类型信息可以是任何类型，如对象、函数、类、变量、命名空间等。常见的使用场景有：

声明全局变量或模块

```typescript
// 声明全局变量
declare const jQuery: (selector: string) => any;

// 声明模块
declare module "lodash" {
  export function debounce(fn: Function, wait: number): Function;
}
```

声明外部的 JavaScript 库

```typescript
declare module "some-library" {
  export function someFunction(): void;
  export const someVariable: number;
}
```

声明命名空间

```actionscript
declare namespace MyNamespace {
  function myFunction(): void;
}
```

通过使用 declare 关键字，可以让 TypeScript 在编译时检查代码的类型信息，并避免一些类型错误。同时，也可以提高代码的可读性和维护性。



## 什么是 Node.js 中的 process？它有哪些方法和应用场景？

在 Node.js 中，process 是一个全局变量，它提供了与当前 Node.js 进程相关的信息和控制。process 对象是 EventEmitter 的一个实例，因此它可以使用 EventEmitter 的 API，例如注册事件监听器和触发事件。



process 对象的一些常用方法和属性：

- process.argv：返回一个数组，其中包含命令行参数。第一个元素是 Node.js 可执行文件的路径，第二个元素是正在执行的 JavaScript 文件的路径，后面的元素是命令行参数。
- process.env：返回一个包含当前 Shell 环境变量的对象。
- process.exit([code])：终止 Node.js 进程。如果指定了 code，那么进程将以 code 退出。
- process.cwd()：返回当前工作目录的路径。
- process.chdir(directory)：将 Node.js 进程的工作目录更改为 directory。
- process.pid：返回 Node.js 进程的进程 ID。
- process.nextTick(callback[, arg1][, arg2][, ...])：将 callback 添加到下一个 tick 队列。callback 会在当前操作完成后、事件循环继续之前调用。
- process.on(event, listener)：注册事件监听器。常用的事件包括 "exit"、"uncaughtException"、"SIGINT" 等。



process 对象的应用场景：

- 监听进程退出事件，执行资源清理操作。
- 通过 process.argv 读取命令行参数。
- 通过 process.env 读取环境变量。
- 通过 process.cwd 和 process.chdir 修改 Node.js 进程的工作目录。
- 通过 process.pid 获取进程 ID。
- 通过 process.nextTick 将某个操作放到下一个 tick 队列中，以实现异步执行。



总之，process 对象提供了与 Node.js 进程相关的许多信息和控制，是 Node.js 编程中不可或缺的一部分。
