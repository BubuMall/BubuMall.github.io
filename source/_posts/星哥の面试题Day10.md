---
title: 星哥の面试题Day10
date: 2023-03-01 22:46:45
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 怎么用 CSS 实现一个宽高自适应的正方形？

**方法1、CSS3 vw单位** CSS3 中新增了一组相对于可视区域百分比的长度单位 vw, vh, vmin, vmax。其中 vw 是相对于视口宽度百分比的单位，1vw = 1% viewport width， vh 是相对于视口高度百分比的单位，1vh = 1% viewport height；vmin 是相对当前视口宽高中 较小 的一个的百分比单位，同理 vmax 是相对当前视口宽高中 较大 的一个的百分比单位。

```xml
<div class="box"></div>
<style>
    .box{width: 100vw;height: 100vw;background: #F2DEDE;}
</style>
```

优点：简洁方便 缺点：浏览器兼容不好

**方法2、设置垂直方向的padding撑开容器**

在 CSS 盒模型中，margin, padding的百分比数值是相对 **父元素的宽度**计算的。只需将元素垂直方向的一个 padding 值设定为与 width 相同的百分比就可以制作出自适应正方形

```xml
<div class="box"></div>
 
<style>
     .box{
        width: 100%;
        padding-bottom: 100%;/* padding百分比相对父元素宽度计算 */
        height: 0;//避免被内容撑开多余的高度
    }
</style>    
```

padding百分比+height设置0； 这种方案简洁明了，且兼容性好；通常会给父元素设置固定的高度，子元素设置width百分比布局，通过padding是基于父元素宽度前提下，进行适配

**方法3、利用伪元素的 margin(padding)-top 撑开容器**

```xml
<div class="box"></div>
 
<style>
    .box {
    width: 100%;
    overflow:hidden; 
    background: #F2DEDE;
    }
    .box::after {
    content: "";
    display: block;
    margin-top: 100%;
    }
</style>
```

由于容器与伪元素在垂直方向发生了外边距折叠，所以我们想象中的撑开父元素高度并没有出现。而应对的方法是在父元素上触发 BFC：overflow:hidden;

若使用垂直方向上的 padding 撑开父元素，则不需要触发 BFC，如下：

```xml
<div class="box"></div>
 
<style>
    .box {
    width: 100%;
    background: #F2DEDE;
    }
    .box::after {
    content: "";
    display: block;
    padding-top: 100%;
    }
</style>
```

**注意** 当元素内部添加内容时高度出现溢出，可以将内容放到独立的内容块中，利用绝对定位消除空间占用，如下：

```xml
<div class="container">
    <div class="box">内容</div>
</div>
 
<style>
    .container {
    width: 100%;
    background: #F2DEDE;
    position: relative;
    }
    .container::after {
    content: "";
    display: block;
    padding-top: 100%;
    }
    .container .box{
    position: absolute;
    width: 100%;
    height: 100%;
    }
</style>
```

## 什么是防抖和节流？如何用 JS 编码实现？

防抖和节流都是一种优化技术，用来降低函数调用的频率，提高性能。

防抖（Debounce）：在连续触发某个事件时，只有当一定时间内没有再次触发事件，才会执行事件处理函数。比如说，我们需要监听用户输入框中的文字，只有用户停止输入一段时间，才去发送请求获取数据。

节流（Throttle）：在一段时间内只执行一次函数，无论事件被触发多少次。比如说，当我们需要监听用户滚动页面时，我们可以在用户滚动时，每隔一定时间就执行一次滚动事件。

下面是防抖和节流的实现代码：

防抖实现：

```actionscript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

**搜索框，文本编辑器的实时保存**

节流实现：

```actionscript
function throttle(func, delay) {
  let timer;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}
```

**快速点击，鼠标滑动，下拉加载，scroll事件**

其中 func 是需要进行防抖或节流处理的函数，delay 是事件执行的最小时间间隔。在防抖中，只有当事件触发后 delay 时间内没有再次触发事件，才会执行一次 func 函数；在节流中，每隔 delay 时间执行一次 func 函数。

需要注意的是，在实际使用时，防抖和节流的处理函数应该在需要进行防抖或节流的事件上进行绑定，而不是在函数内部进行处理。

## 什么是 ES6 中的 Promise？它的使用场景有哪些？

ES6 中的 Promise 是一种处理异步操作的方式，它是一个对象，用于表示一个异步操作的最终完成或失败及其结果值的表示。Promise 对象有三种状态：pending（等待中）、fulfilled（已完成）和 rejected（已失败）。

Promise 有以下几个优点：

1. 可以避免回调地狱：将回调函数转换成了链式调用，代码可读性更好。
2. 可以支持多个并发请求：Promise.all() 可以让多个 Promise 并行执行，提高了执行效率。
3. 可以在异步代码中捕获错误：Promise.catch() 可以捕获异步代码中的错误。

Promise 的使用场景包括：

1. 处理异步操作：比如 Ajax 请求、文件读取等。
2. 优化回调函数：将回调函数转换成 Promise 链，提高代码可读性。
3. 实现并发请求：Promise.all() 可以让多个请求并行执行。
4. 解决回调地狱：将嵌套的回调函数转换成链式调用，提高代码可读性。

以下是使用 JS 编码实现 Promise 的例子

```coffeescript
// 定义一个 Promise
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('成功');
    } else {
      reject(new Error('失败'));
    }
  }, 1000);
});

// 处理 Promise 的结果
promise.then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});
```

