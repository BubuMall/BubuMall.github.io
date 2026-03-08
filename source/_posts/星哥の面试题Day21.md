---
title: 星哥の面试题Day21
date: 2023-03-13 19:46:43
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 怎么使用 CSS3 来实现动画？你实现过哪些动画？

**css3 动画的实现的方案，大概有以下方案**：

- js 的 animation() 方法实现动画

- @keyframes + animation：这是一个实现动画的组合，必须一起使用。

  1. @keyframes——创建动画

     （1）在 @keyframes 中用 from 和 to 创建动画

     （2）在 @keyframes 中用 “百分比” 创建动画

     （3）将 @keyframes 嵌套进要添加动画的元素的样式里

  2. animation 执行动画

- transition：表示过渡。transition 可以单独使用

- transform：表示变形。使用 transform 实现动画时有两种选择：

- transform + transition：一次性动画。transform 定义行为，transition 驱动，但一次仅能驱动一次。

- transform + @keyframes + animation：支持循环动画。在 @keyframes 里使用 transform 定义行为，animation 驱动，可充分调整动画的实现，包括：指定动画任意的执行次数，指定动画的结束与开始的状态等等。

```css
.iconfont-loadding {
  animation: start_loadding 800ms linear 100ms infinite normal none running;
}

@keyframes start_loadding {
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
}
```

**transition 和 animation 实现动画的区别：** transition：需要触发一个事件才执行动画。 animation：自动执行动画，可循环执行。

## Vue Router 路由有哪些模式？各模式有什么区别？

Vue Router 路由有三种模式：

1. hash 模式：使用 URL 中的 hash（即 # 后面的内容）来作为路由路径。这种模式下，页面不会重新加载，只会更新 hash 值，并触发路由变化，从而渲染对应的组件。
2. history 模式：使用 HTML5 中新增的 History API 来管理浏览历史记录，从而实现页面的前进和后退。在这种模式下，URL 中不会带有 # 号，而是使用真实的 URL 路径来作为路由路径。
3. abstract 模式：在不需要基于浏览器的 API 时，可以使用这种模式。在这种模式下，路由器并不会监听 URL 变化，而是通过调用 router.replace 或 router.push 来进行导航。



区别：

1. hash 模式可以兼容较老的浏览器，但 URL 中会带有 # 号。
2. history 模式无需带有 # 号，更加美观，但需要后端支持，否则刷新页面会导致 404 错误。
3. abstract 模式主要用于一些特定场景，例如在使用 Node.js 时，可以使用 abstract 模式来构建路由。



一般来说，如果需要支持较老的浏览器，或者不需要后端支持，可以使用 hash 模式；否则建议使用 history 模式。

## 如何使用 JS 判断某个字符串长度（要求支持 Emoji 表情）？

利用正则表达式将emoji替换成单字符的符号，然后再获取len就是正确的length了。

> replace不会影响原字符串的内容

```arcade
const str = "H😋";
const len = str.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,"-").length;
console.log(len)
```

输出

```undefined
2
```

## ES6特性

ES6大幅增强了对字符串的处理能力。 借用数组，可以快速判断带有emoji字符的字符串长度。

```axapta
const str = "A😋";
const arr = Array.from(str);
console.log(str.length,arr.length)
```

输出：

```basic
3 2
```

### 局限性

多码点的emoji比如👨‍👩‍👧，会显示长度为5，这是因为unicode的约定导致的，详情可看阮一峰的这篇博文 http://www.ruanyifeng.com/blog/2017/04/emoji.html
