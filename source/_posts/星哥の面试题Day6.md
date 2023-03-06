---
title: 星哥の面试题Day6
date: 2023-02-25 11:47:21
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 什么是响应式设计？响应式设计的基本原理是什么？如何进行实现？

响应式设计是指通过一些技术手段，使得网站或应用在不同终端设备（如桌面电脑、平板电脑、手机等）上能够自适应地呈现最佳的用户体验。



响应式设计的基本原理是根据屏幕的尺寸和分辨率等信息，动态调整页面的布局和元素的样式，以便使页面在不同的设备上呈现出最佳的效果。实现响应式设计通常需要使用 HTML、CSS 和 JavaScript 技术，其中 CSS 媒体查询是实现响应式设计的核心技术之一。



为了实现响应式设计，开发人员需要为不同屏幕尺寸和分辨率等场景提供不同的布局和样式。一种实现方式是使用流体网格布局和百分比尺寸等技术，以便根据设备屏幕的宽度和高度等信息自适应地调整页面的布局和元素的大小。另一种实现方式是使用 CSS 媒体查询，根据设备的屏幕尺寸和分辨率等信息，加载不同的样式文件或应用不同的样式规则，以便实现不同场景下的最佳效果。



响应式设计的优点包括可以提高用户体验、提高网站访问率和转化率、降低开发成本等。同时，响应式设计也有一些缺点，例如需要在各种设备上进行充分的测试和调试、可能需要加载大量的 CSS 和 JavaScript 文件等。



总之，响应式设计是一种非常重要的前端开发技术，能够帮助开发人员在不同终端设备上提供最佳的用户体验，提高网站的访问率和转化率，同时也能减少开发成本和维护成本。

## 深拷贝和浅拷贝有什么区别？JS 怎么实现深拷贝？

深拷贝和浅拷贝是复制数据结构的两种不同方式。

浅拷贝是创建一个新的对象，新对象的一些属性引用原始对象中相同的属性。这意味着在原始对象或新对象上的更改会相互影响。

深拷贝是创建一个新的对象，并复制原始对象的所有属性，包括嵌套的对象和数组。这意味着在原始对象或新对象上的更改不会相互影响。

在 JavaScript 中，可以通过以下方式实现深拷贝：

JSON.parse() 和 JSON.stringify() 方法

这是实现深拷贝的一种简单方式，但它有一些限制，例如不能复制函数和特殊对象（如 Date）。同时，它不能处理包含循环引用的对象。

以下是使用 JSON.parse() 和 JSON.stringify() 方法实现深拷贝的示例代码：

```javascript
const obj = { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } };

const obj2 = JSON.parse(JSON.stringify(obj));

obj2.address.city = 'Chicago';

console.log(obj.address.city); // Output: New York
console.log(obj2.address.city); // Output: Chicago
```

递归拷贝对象

这种方法涉及递归遍历对象，并创建一个新的对象，复制原始对象的属性，并在需要时递归复制嵌套的对象和数组。这种方法可以处理循环引用，并复制函数和特殊对象。

以下是使用递归拷贝对象实现深拷贝的示例代码：

```javascript
function deepClone(obj) {
  if (typeof obj === 'object' && obj !== null) {
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deepClone(obj[key]);
      }
    }
    return result;
  }
  return obj;
}

const obj = { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } };

const obj2 = deepClone(obj);

obj2.address.city = 'Chicago';

console.log(obj.address.city); // Output: New York
console.log(obj2.address.city); // Output: Chicago
```

深拷贝的缺点是它可能会更加耗时，因为需要递归遍历整个对象图，复制所有属性和嵌套的对象和数组。而浅拷贝是一种更快的复制方式，因为它只复制了对象的引用。在某些情况下，浅拷贝可能会更有效。

## iframe 标签的作用是什么？有哪些优缺点？

`<iframe> 标签是 HTML 中的一个元素，用于在当前 HTML 文档中嵌入另一个 HTML 文档。它可以在一个 HTML 页面中嵌入另一个 HTML 页面或其他类型的文档，比如 PDF 文件或视频文件。`

`<iframe> 标签的主要作用是将一个页面嵌入到另一个页面中。例如，在一个页面中嵌入一个地图或一个视频，或者在一个页面中嵌入一个在线表单，都可以使用 <iframe> 标签。`

`<iframe> 标签的优点包括：`

- 可以让页面嵌入其他网站或文档，从而扩展页面的功能。
- 可以使用一个单独的文档来管理页面的内容，从而简化页面的管理。
- 可以在一个页面中嵌入多个 ，从而允许多个不同的内容在同一页面中显示。

`<iframe> 标签的缺点包括：`

- 可能会影响页面的加载速度和性能，特别是在页面中嵌入大型媒体文件时。
- 可能会影响页面的可访问性，因为屏幕阅读器可能无法读取嵌入的内容。
- 可能会导致安全风险，因为嵌入的文档可以访问父页面的 JavaScript 对象，从而可能被用于恶意攻击。

要实现 `<iframe>` 的效果，可以使用以下代码：

```xml
<iframe src="http://example.com"></iframe>
```

其中 src 属性指定要嵌入的文档的 URL，可以是一个 HTML 页面、一个 PDF 文件或一个视频文件等等。通过设置 width 和 height 属性可以指定` <iframe> `元素的尺寸。
