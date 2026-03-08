---
title: 星哥の面试题Day3
date: 2023-02-22 09:33:36
tags:
  - 面试题
  - 求职	
  - 前端
categories:
  - 技术
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## ES6 有哪些新特性？

ES6（ECMAScript 6）是 JavaScript 的第六个版本，也称为 ES2015，引入了很多新特性来增强 JavaScript 语言的能力。下面是 ES6 中一些常见的新特性：

1. let 和 const 声明变量
2. 模板字符串（Template Literals）
3. 解构赋值（Destructuring）
4. 箭头函数（Arrow Functions）
5. Promise 对象
6. 函数参数默认值
7. 对象字面量增强（Object Literal Enhancements）
8. 类和继承（Classes and Inheritance）
9. 迭代器（Iterators）
10. 生成器（Generators）
11. 模块（Modules）
12. Set 和 Map 数据结构
13. Symbol 数据类型
14. for...of 循环
15. let 和 const 块级作用域
16. 异步函数 async/await



ES6 的新特性增强了 JavaScript 的表现力和编程能力，使得开发者可以更加高效和便捷地编写代码。

## 说说 Vue 中的 diff 算法

Vue 中的 diff 算法是用于更新 Virtual DOM 树，从而实现高效的 DOM 操作。diff 算法会对比新旧两棵 Virtual DOM 树的差异，然后只更新必要的部分，从而减少 DOM 操作的次数。Vue 中的 diff 算法包括以下几个步骤：

1. 新旧节点的比较 diff 算法会首先比较新旧节点是否相同，如果相同，则继续比较子节点；如果不同，则进行下一步操作。

2. 对子节点进行比较 对新旧节点的子节点进行比较，具体分为以下四种情况：

3. - 新节点没有子节点，旧节点有子节点：直接删除旧节点的子节点
   - 旧节点没有子节点，新节点有子节点：直接添加新节点的子节点
   - 新旧节点都有子节点：继续比较子节点
   - 新旧节点都有相同的子节点：对相同的子节点进行递归比较

4. 对旧节点多余的子节点进行删除 如果旧节点的子节点比新节点的子节点多，那么对于多余的子节点，直接进行删除。



在 diff 算法中，由于只更新必要的部分，所以可以大大提高 DOM 操作的效率。这也是 Vue 可以实现高效渲染的重要原因之一。

## React 中的路由懒加载是什么？原理是什么？

React 中的路由懒加载指的是在使用 React Router 进行页面路由时，将页面组件按需加载，而不是一次性加载所有页面组件。这可以提高页面加载速度和性能，尤其在页面中有大量组件的情况下更为明显。

路由懒加载的原理是基于 ES6 的动态 import 特性，通过在 Webpack 打包时使用 React.lazy() 和 Suspense 进行懒加载，当路由被匹配时才会加载对应的组件，而不是一次性加载所有路由组件，从而减少页面加载时间和网络带宽的消耗。

下面是一个使用路由懒加载的例子：

```
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
```

