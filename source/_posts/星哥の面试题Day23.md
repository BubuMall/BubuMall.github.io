---
title: 星哥の面试题Day23
date: 2023-03-15 12:24:52
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 有哪些 CSS 性能优化的操作或技巧？

1. 使用合适的选择器：选择器的复杂度会影响 CSS 渲染性能。尽量使用简单的选择器，避免使用通配符和后代选择器等复杂的选择器。
2. 避免使用 @import：@import 可以在 CSS 文件中导入其他 CSS 文件，但它会阻塞页面的渲染，影响性能。建议使用 link 标签来引入 CSS 文件。
3. 避免使用 !important：!important 会影响 CSS 属性的优先级，而且会增加解析和渲染时间。建议尽量避免使用 !important。
4. 避免使用 inline 样式：inline 样式的优先级最高，但它会增加 HTML 文件的大小，降低页面的加载速度。建议使用外部 CSS 文件和内部样式表。
5. 压缩和合并 CSS 文件：压缩和合并 CSS 文件可以减小文件大小，提高页面加载速度。可以使用工具例如 CSSMin 和 YUI Compressor 等来进行压缩和合并操作。
6. 使用 CSS Sprites：CSS Sprites 可以将多个小图片合并成一张大图片，并使用 CSS 来显示不同的部分，减少 HTTP 请求次数，提高页面加载速度。
7. 避免过度继承：过度继承会导致样式的冗余和继承链的深度增加，影响 CSS 的解析和渲染性能。
8. 避免使用高消耗的属性和值：某些属性和值的计算成本比较高，例如 box-shadow、border-radius 等，应该尽量避免使用。



以上是一些常用的 CSS 性能优化操作和技巧，可以帮助提高页面的加载速度和渲染性能

## JS 在什么情况下会存在数字精度丢失的问题，如何解决？

在 JavaScript 中，数字类型是采用 IEEE 754 标准的双精度浮点数表示的，由于双精度浮点数只有 52 位精度，因此在进行精度较高的数值计算时，可能会出现数字精度丢失的问题。例如：

```apache
console.log(0.1 + 0.2); // 输出结果为 0.30000000000000004
```

可以看到，实际上 0.1 + 0.2 的结果并不等于 0.3，这是因为双精度浮点数的精度限制导致的。在处理货币等需要高精度计算的场景时，这种精度丢失的问题可能会导致计算错误。

为了解决这个问题，可以采用以下几种方法：

1. 使用整数进行计算：可以将数字转换成整数进行计算，例如将货币的单位从元转换成分进行计算，避免小数计算带来的精度问题。
2. 使用第三方库：例如 decimal.js 和 big.js 等第三方库，可以提供更高精度的数字计算功能，避免精度丢失的问题。
3. 使用 toFixed 方法：可以使用 JavaScript 中的 toFixed 方法将数字转换成指定位数的字符串，例如将 0.1 和 0.2 转换成一位小数的字符串再进行相加，避免精度丢失的问题。

```apache
console.log((0.1 + 0.2).toFixed(1)); // 输出结果为 "0.3"
```

总之，在进行精度较高的数值计算时，需要注意 JavaScript 中存在的数字精度丢失问题，并根据具体情况选择合适的解决方案。



## ES6 中的 Reflect 对象有什么用？

Reflect对象是一个内置对象，它提供了一组用于操作对象的方法

1. 简化了操作对象：Reflect方法是函数式的，与Object方法是命令式的不同

   ```javascript
   const person = { name: 'Tom' }
   const objName = Object.getOwnPropertyDescriptor(person,'name').value
   const reflectName = Reflect.get(person,'name')
   console.log(objName) // 'Tom'
   console.log(reflectName) // 'Tom'
   ```

2. Reflect方法的返回值更加明确，定义属性成功后直接返回布尔值来表示是否设置成功，而Object.defineProperty()会返回obj

   ```javascript
   const person = { name: 'Tom'}
   const result1 = Object.defineProperty(person,'gender',{
       value: 'man',
       writable: false,
       enumerable: true,
       configurable: true
   })
   const result2 = Reflect.defineProperty(person,'address',{
       value: 'Beijing',
       writable: false,
       enumerable: true,
       configurable: true
   })
   console.log(result1) // 返回对象 {name: 'Tom',gender: 'man'}
   console.log(result2) // 返回布尔值 true 表示操作成功
   ```

3. 统一了对象操作的API：通过Reflect方法可以操作对象的属性，与Object方法基本类似

4. 与Proxy对象进行配合使用：Reflect对象和Proxy对象配合使用，可以实现拦截对象操作，例如使用Reflect.get()方法获取被代理对象的属性，在获取属性值之前可以先进行一些拦截操作，从而实现拦截对象操作的效果

   ```javascript
   const obj = { name: 'Tom' }
   const proxy = new Proxy(obj,{
       get(target,key,receiver) {
           console.log(`获取属性${key}`)
           return Reflect.get(target,key,receiver)
       }
   })
   console.log(proxy.name)
   ```

5. Reflect内置对象里面还有许许多多的方法API，Reflect对象提供了许多灵活和强大的对象操作方法

