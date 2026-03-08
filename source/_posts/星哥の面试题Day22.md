---
title: 星哥の面试题Day22
date: 2023-03-13 19:46:47
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## React.memo() 和 useMemo() 的用法是什么，有哪些区别？

React.memo() 和 useMemo() 是 React 中用于性能优化的两个钩子函数。

React.memo() 是一个高阶组件，用于优化组件的性能。它会比较组件的新旧 props，如果 props 没有发生改变，则跳过渲染，直接使用上一次渲染的结果。使用 React.memo() 可以避免组件不必要的重新渲染，从而提高应用程序的性能。

用法示例：

```abnf
const MemoizedComponent = React.memo(MyComponent);
```

useMemo() 是一个 Hook，用于缓存函数的计算结果。它可以缓存组件的 props 或其他数据的计算结果，只有当依赖项发生改变时才重新计算。

用法示例：

```reasonml
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

区别：

- React.memo() 用于优化组件的性能，它会比较组件的新旧 props，如果 props 没有发生改变，则跳过渲染，直接使用上一次渲染的结果。而 useMemo() 用于缓存函数的计算结果，只有当依赖项发生改变时才重新计算。
- React.memo() 是一个高阶组件，必须包裹组件才能使用，而 useMemo() 是一个 Hook，可以在函数组件中使用。

综上所述，React.memo() 用于缓存组件的渲染结果，从而提高应用程序的性能，而 useMemo() 则用于缓存函数的计算结果，可以在函数组件中使用。

## CSS 有哪些常用单位？这些单位各有什么区别？

CSS 中常用的单位有以下几种：

1. px（像素）：像素是相对于显示器分辨率而言的，是一个固定的单位。1px 可以被理解为显示器上的一个物理像素点，其大小和颜色由显示器自身控制。
2. em（相对长度单位）：em 是相对于父元素的字体大小的单位，当父元素没有设置字体大小时，em 相对于浏览器的默认字体大小。
3. rem（相对长度单位）：rem 同样是相对长度单位，但相对于根元素（即 html 元素）的字体大小。
4. %（百分比）：百分比是相对于父元素的宽度、高度、字体大小等的百分比。
5. vw、vh（视口单位）：vw 和 vh 分别代表视口的宽度和高度的百分比。
6. pt（点）：1pt 等于 1/72 英寸，常用于打印页面。
7. em 和 rem 的区别：em 和 rem 都是相对长度单位，但 em 的大小是相对于其父元素的字体大小，而 rem 的大小则是相对于根元素（即 html 元素）的字体大小。因此，rem 更加稳定，能够更好地控制页面布局和字体大小。



在使用 CSS 单位时，需要根据实际情况选择合适的单位。一般情况下，像素是最常用的单位，因为它在大多数情况下可以提供良好的显示效果。对于需要在不同设备上适配的情况，可以使用 em、rem 和 vw、vh 等相对单位。

## 什么是 TypeScript 中的命名空间和模块？两者有什么区别？

在 TypeScript 中，命名空间和模块都是用来组织和管理代码的方式。

命名空间提供了一种将代码划分为逻辑单元的方式，可以避免命名冲突。在命名空间内，所有变量、函数、类等都是私有的，需要使用 export 关键字进行导出，才能被其他代码使用。例如：

```typescript
namespace MyNamespace {
  export const PI = 3.14;
  export function sayHello(name: string) {
    console.log(`Hello, ${name}!`);
  }
  export class Person {
    constructor(public name: string) {}
  }
}
```

模块是用来组织和管理代码的方式，与命名空间类似，不同之处在于模块是按文件划分的，一个文件就是一个模块。模块可以使用 export 和 import 关键字来导出和导入代码。例如：

```typescript
// moduleA.ts
export const PI = 3.14;
export function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}
export class Person {
  constructor(public name: string) {}
}

// moduleB.ts
import { PI, sayHello, Person } from './moduleA';
console.log(PI); // 3.14
sayHello('world'); // Hello, world!
const person = new Person('Alice');
console.log(person.name); // Alice
```

命名空间和模块的主要区别在于，命名空间是将代码划分为逻辑单元，而模块是按照文件划分的。在使用模块时，可以使用 import 和 export 进行代码的导入和导出，可以更方便地组织和管理代码。
