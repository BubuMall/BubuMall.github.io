---
title: 星哥の面试题Day2
date: 2023-02-22 09:33:26
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 什么是 HTML5，HTML5 有哪些新特性？

HTML5是HTML的第五个版本，是用于创建网页和其他web应用程序的标记语言。与之前的HTML版本相比，HTML5引入了许多新特性和改进，包括以下几个方面：

1. 语义化标签：HTML5引入了很多新的标签，如&lt; header>，&lt; footer>，&lt; nav>，&lt; article>，&lt; section>等，这些标签都是为了更好地表达文档内容的语义而设计的。
2. 多媒体支持：HTML5支持多媒体内容，包括音频、视频、SVG和Canvas等图形元素，这些都可以直接在网页中嵌入，无需使用第三方插件。
3. 新的表单控件：HTML5引入了一些新的表单控件，如日期选择器、搜索框、滑块等，这些控件都能够提高用户体验。
4. Web存储：HTML5提供了两种新的客户端存储机制：localStorage和sessionStorage，它们可以让Web应用程序在客户端上存储数据，从而提高性能和用户体验。
5. Web Workers：HTML5提供了一种新的机制，即Web Workers，它们可以让Web应用程序在后台运行，从而提高性能和响应速度。
6. 地理位置支持：HTML5提供了一种新的API，即Geolocation API，它可以让Web应用程序获取用户的地理位置信息。



HTML5的新特性为Web开发提供了更多的功能和工具，让开发者能够更加方便地开发Web应用程序，并提高用户体验



## CSS 中的 1 像素问题是什么？有哪些解决方案？

CSS 中的 1 像素问题指的是在高分辨率屏幕上显示的 1 像素边框或者细线在实际显示时会比 1 个物理像素更宽或更粗，从而导致边框或者细线看上去比预期的更粗或者更宽，影响页面的美观性和用户体验。

造成这个问题的原因是由于**高分辨率屏幕的像素密度比传统的屏幕要高，所以在屏幕上显示的一个 CSS 像素对应的物理像素个数也会相应地增多，当使用 CSS 中的 1px 来设置边框或者细线时，实际上渲染出来的线条在屏幕上会被拆分为多个物理像素，从而导致看上去更粗。**

解决这个问题的方法有以下几种：

1. 使用图片代替边框或细线，这种方法能够保证显示效果的一致性，但是需要制作多张图片，增加了页面加载的开销。

2. 使用 scale 进行缩放，使用 transform 缩放 0.5 像素大小的边框，以达到渲染 1 像素的效果。例如：

   ```css
   .border {
     position: relative;
     border: 1px solid #000;
   }
   .border:after {
     content: "";
     position: absolute;
     top: -1px;
     left: -1px;
     right: -1px;
     bottom: -1px;
     border: 1px solid #000;
     transform: scale(0.5);
   }
   ```

3. 使用 border-image，border-image 可以实现将一张图片作为边框样式，图片会自动拉伸或者重复以填充边框。这种方法需要制作一张边框的图片，但是可以通过 CSS 控制图片的填充方式和边框样式，比较灵活。例如：

   ```CSS
   .border {
     border: 1px solid transparent;
     border-image: url(border.png) 1 1 stretch;
   }
   ```

   

4. 使用 CSS3 的 box-shadow，可以用 box-shadow 属性来模拟边框。例如：

   ```CSS
   .border {
     box-shadow: 0 0 0 1px #000;
   }
   ```

   

5. 使用 viewport，在 head 中添加如下代码可以解决 1px 问题：

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

## JavaScript 中如何中止网络请求？

在 JavaScript 中，我们可以通过 AbortController 和 AbortSignal 来中止网络请求。

使用 AbortController 创建一个新的 AbortController 对象，然后使用它的 abort() 方法来中止请求。在创建请求时，将 AbortController.signal 分配给请求的 signal 属性，以便在调用 abort() 方法时取消请求。

以下是一个使用 AbortController 中止 fetch 请求的示例：

```js
const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal }).then(response => {
  // Handle the response
}).catch(error => {
  if (error.name === 'AbortError') {
    console.log('Request was cancelled');
  } else {
    console.log('Request failed:', error);
  }
});

// To abort the request, call the following:
controller.abort();
```

