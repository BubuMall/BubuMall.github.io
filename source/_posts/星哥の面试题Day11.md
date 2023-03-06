---
title: 星哥の面试题Day11
date: 2023-03-01 23:46:52
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 前端有哪些实现跨页面通信的方法？

前端有以下几种实现跨页面通信的方法：

1. Cookie：通过在页面间共享 Cookie 实现简单的跨页面通信，但是 Cookie 大小有限制，不能存储过多的数据。
2. localStorage 和 sessionStorage：HTML5 提供了本地存储的能力，可以通过 localStorage 或 sessionStorage 实现页面间数据共享，相比 Cookie 更加方便，但是也有大小限制。
3. BroadcastChannel API：这是一个 HTML5 新增的 API，允许多个页面间通信，可以广播消息或向特定页面发送消息。
4. SharedWorker：SharedWorker 是一种特殊类型的 Web Worker，可以在多个页面间共享数据，可以通过 postMessage API 实现消息传递。
5. postMessage API：这是 HTML5 提供的一种消息传递机制，可以在不同窗口或 iframe 间传递消息，可以用来实现跨域通信。
6. WebSocket：WebSocket 是一种持久化的协议，可以在浏览器和服务器之间实现双向通信，也可以在不同页面之间实现通信。

以上这些方法都有其适用的场景和限制条件，需要根据具体情况进行选择和使用。

## TypeScript 的内置数据类型有哪些？

TypeScript 的内置数据类型包括：

1. boolean：布尔类型，true 或 false。
2. number：数值类型，包括整数和浮点数。
3. string：字符串类型，表示文本。
4. Array：数组类型，可以存储多个相同类型的值。
5. Tuple：元组类型，可以存储多个不同类型的值，每个值的类型可以自定义。
6. Enum：枚举类型，用于定义一些具有特定含义的常量。
7. any：任意类型，表示不确定的数据类型。
8. void：空类型，表示没有返回值。
9. null 和 undefined：表示 null 和 undefined 值。
10. never：表示永远不会返回的类型。

## 什么是虚拟 DOM？使用虚拟 DOM 一定更快吗？

虚拟 DOM（Virtual DOM）是一种将浏览器 DOM 抽象为 JavaScript 对象的技术，用于提高 DOM 操作的效率和性能。虚拟 DOM 可以在渲染前对组件的变化进行计算，减少 DOM 操作的次数，从而提高渲染性能。

使用虚拟 DOM 可以提高性能，但并不是一定更快。虚拟 DOM 需要进行额外的计算和比较操作，而这些操作也会消耗一定的时间和性能。因此，虚拟 DOM 适用于大规模、高度动态的页面，而在简单的静态页面中使用虚拟 DOM 并不能提高性能。此外，虚拟 DOM 还可以提高开发效率，使代码更易于维护和调试。
