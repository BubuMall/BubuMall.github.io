---
title: 星哥の面试题Day5
date: 2023-02-24 20:04:41
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 哪些 CSS 属性可以继承？

在 CSS 中，并不是所有的属性都可以继承。下面是一些常见的可继承属性：

- font-family
- font-size
- font-weight
- font-style
- color
- letter-spacing
- word-spacing
- line-height
- text-align
- text-indent
- text-transform
- visibility



这些属性在父元素中设置后，子元素可以继承相同的属性值。但需要注意的是，这些属性只能继承，而不能被子元素覆盖。此外，并不是所有的 HTML 元素都可以继承这些属性，具体需要查看相关属性的文档。



## 什么是 BOM 和 DOM？分别列举一些它们的函数

BOM和DOM都是JavaScript中的概念，但它们具有不同的作用。



BOM（Browser Object Model）是浏览器对象模型，它提供了一些浏览器窗口和框架的对象，并提供了一些操作这些对象的方法。BOM不是W3C标准，而是由浏览器厂商制定的。



下面是一些常见的BOM函数：

- `alert()`：在浏览器中显示一个警告框。
- `confirm()`：在浏览器中显示一个确认框，要求用户单击“确定”或“取消”按钮。
- `prompt()`：在浏览器中显示一个提示框，要求用户输入文本。
- `setTimeout()`：用于在指定的时间后执行一段代码。
- `setInterval()`：用于以指定的时间间隔重复执行一段代码。



DOM（Document Object Model）是文档对象模型，它定义了一种标准的方法来访问和操作HTML或XML文档中的元素和内容。DOM是W3C标准。



下面是一些常见的DOM函数：

- `getElementById()`：根据元素ID获取元素对象。
- `getElementsByTagName()`：根据标签名获取元素对象数组。
- `getElementsByClassName()`：根据类名获取元素对象数组。
- `appendChild()`：将一个节点添加到指定父节点的子节点列表的末尾。
- `removeChild()`：从指定父节点的子节点列表中删除一个子节点。



总体来说，BOM主要用于操作浏览器窗口和框架，而DOM主要用于访问和操作HTML或XML文档中的元素和内容。

## 说说你对Node.js 的理解？优缺点？应用场景？

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它允许开发者使用 JavaScript 进行服务器端编程。Node.js 拥有事件驱动、非阻塞I/O的特性，能够处理高并发的请求，因此它被广泛应用于实时应用、Web应用和API的开发。



以下是 Node.js 的优缺点：



优点：

- 事件驱动和非阻塞I/O的特性能够处理高并发的请求，提高了程序的性能和响应速度；
- 使用 JavaScript 进行开发，具有丰富的开源模块和组件，可以大大提高开发效率；
- 支持跨平台，可以在 Windows、Linux、MacOS 等多个操作系统上运行；
- 可以进行快速原型开发和实时调试。



缺点：

- Node.js 对于计算密集型的任务和多线程编程支持不够好，适合于 I/O 密集型任务；
- 因为 Node.js 是基于事件驱动和回调机制的，开发时需要特别注意回调地狱和异步操作的异常处理，否则容易导致代码难以维护。



Node.js 的应用场景主要包括以下几个方面：

- Web 开发：使用 Node.js 可以快速搭建Web服务器，进行Web开发；
- 实时应用：Node.js 支持事件驱动和非阻塞I/O，可以用于实时数据传输和消息通信等领域；
- 命令行工具：Node.js 可以用于编写命令行工具和脚本；
- 微服务：Node.js 支持跨平台和轻量级开发，可以用于编写微服务。



总之，Node.js 具有很多优点，如高并发处理能力、跨平台性、丰富的开源组件等，但也需要注意其局限性，开发者需要在实践中根据具体需求合理选用技术。
