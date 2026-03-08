---
title: 星哥の面试题Day24
date: 2023-03-16 15:21:57
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 说说你对 JS 模块化方案的理解，比如 CommonJS、AMD、CMD、ES Module 分别是什么？

#### AMD

`AMD`是一种**异步模块加载规范**，专为浏览器端设计，其全称是`Asynchronous Module Definition`，中文名称是异步模块定义。`AMD`规范定义模块的方式如下：

```js
define(id?, dependencies?, factory)
```

浏览器并**不支持**`AMD模块`，在浏览器端，需要借助`RequireJs`才能加载AMD模块。`RequireJS`是使用最广泛的AMD模块加载器，但目前的新系统基本不再使用`RequireJS`,因为大部分库都会提供对AMD模块的支持。

```js
// 匿名，无依赖模块，文件名就是模块名
define(function() {
  function clone(source) {
    //此处省略代码
  }

  return clone
})
```



上面的代码定义了一个**匿名AMD模块**，假设代码位于`clone.js`文件中，那么在`index.js`文件中可以像下面这样使用上面定义的模块

```js
define(['clone'], function(clone) {
  const a = {a:1}
  const b = clone(a)
})
```

#### [#](http://knif.gitee.io/daodao-knowledge/pages/a5dbfb/#commonjs)CommonJS

`CommonJS`是一种**同步模块加载规范**，目前主要用于`Node.js`环境中(`Sea.js`使用的也是`CommonJS`规范)。`CommonJS`规范中定义模块的方式如下：

```js
define(function(require, exports, module) {
  //此处省略代码
})
```



在`Node.js`中，外面的`define`包裹函数是系统自动生成的，不需要开发者自己书写。

```js
// 匿名，无依赖模块，文件名就是模块名
function clone(source) {
  //此处省略代码
}

module.exports = clone
```



在`Node.js`环境下，假设上面的代码位于`clone.js`文件中，那么在`index.js`文件中可以像下面代码这样使用上面代码定义的模块

```js
const clone = require('./clone.js')
const a = {a:1}
const b = clone(a)
```



#### [#](http://knif.gitee.io/daodao-knowledge/pages/a5dbfb/#umd)UMD

`UMD`是一种**通用模块加载规范**，其全称是`Universal Module Definition`，中文名称是**通用模块定义**。UMD想要解决的问题和其名称所传递的意思是一致的，它并不是一种新的规范，而是对前面介绍的3种模块规范(原始模块、AMD,CommonJS)的整合，支持UMD规范的库可以在任何模块环境中工作。

```js
(function (root, factory) {
  var clone = factory(root)
  if(typeof define === 'function' && define.amd) {
    //AMD
    define('clone', function() {
      return clone
    })
  } else if (typeof exports === 'object') {
    //CommonJS
    module.exports = clone
  } else {
    // 原始模块
    var _clone = root.clone

    clone.noConflict = function() {
      if(root.clone === clone) {
        root.clone = _clone
      }
      return clone;
    }
  }
})(this, function(root) {
  function clone(source) {
    // 此处省略代码
  }
  return clone
})
```



可以看到，`UMD`规范只是对不同模块规范的简单整合，稍微不同的是，代码中给原始模块增加了`noConflict`方法，使用`noConflict`方法可以解决全局名称冲突的问题。

#### [#](http://knif.gitee.io/daodao-knowledge/pages/a5dbfb/#es-module)ES Module

ECMAScript 2015带来了原生的模块系统——`ES Module`。目前，部分浏览器已经支持直接使用ES Module，而不兼容的浏览器则可以通过构建工具来使用。

`ES Module`的语法更加简单，只需要在函数前面加上关键字`export`即可。

```js
export function clone(source) {
  //此处省略代码
}
```



假设上面的代码位于`clone.js`文件中，那么在`index.js`文件中可以像下面代码这样引用`clone.js`文件中的`clone`函数

```js
import {clone} from './clone.js'
const a = {a:1}
const b = clone(a)
```



#### [#](http://knif.gitee.io/daodao-knowledge/pages/a5dbfb/#总结)总结

对于开源库来说，为了满足各种模块使用者的需求，需要对每种模块提供支持。开源库可以提供两个入口文件，这两个入口文件及其支持的模块如下:

| 入口文件     | 支持的模块                               |
| ------------ | ---------------------------------------- |
| index.js     | 原始模块，AMD模块，CommonJS模块，UMD模块 |
| index.esm.js | ES Module                                |

## 如果使用 Math.random() 来计算中奖概率，会有什么问题吗？

使用 Math.random() 来计算中奖概率是不可靠的。因为 Math.random() 函数的随机性并不是真正的随机，它是基于一个种子值（seed）生成的伪随机数序列。如果你在相同的环境中使用相同的种子值，那么生成的随机数序列是相同的。因此，如果不使用合适的种子值生成伪随机数，就有可能出现概率计算错误的情况。

为了准确地计算中奖概率，可以使用其他的随机数生成算法，比如 crypto 模块中的 randomBytes() 方法，它可以生成真正的随机数。例如，如果要计算 1/1000 的中奖概率，可以使用如下代码：

```javascript
const crypto = require('crypto');

function isWinner() {
  const rand = crypto.randomBytes(4).readUInt32BE();
  return rand < 429496729; // 429496729 = Math.pow(2, 32) / 1000
}
```

在上面的代码中，使用 crypto.randomBytes() 生成 4 个字节的随机数，然后将它转换为无符号的 32 位整数，判断该随机数是否小于 429496729，如果小于，则认为中奖了。这样计算中奖概率是比较准确的。

## 浏览器的本地存储方式有哪些，有什么区别，分别有哪些应用场景？

浏览器的本地存储方式主要有以下几种：

1. Cookie：Cookie 是浏览器中最古老的本地存储方式，它可以存储少量的文本数据，并在之后的 HTTP 请求中自动携带发送给服务器。Cookie 可以设置过期时间，也可以设置作用域（只在特定域名或路径下有效）。 应用场景：一般用于存储会话信息、用户偏好设置等少量的文本数据。
2. LocalStorage：LocalStorage 是 HTML5 新增的本地存储方式，可以存储较大量的数据，数据保存在浏览器本地且不会过期，除非手动删除或清除缓存。 应用场景：适用于存储用户个性化数据、本地数据缓存等。
3. SessionStorage：SessionStorage 也是 HTML5 新增的本地存储方式，与 LocalStorage 类似，但是数据只在会话期间有效，会话结束或关闭浏览器后数据会被清除。 应用场景：适用于需要短期保存数据的场景，如表单数据暂存、页面数据缓存等。
4. IndexedDB：IndexedDB 是 HTML5 中的一个本地数据库存储方案，可以存储大量结构化数据，支持事务处理和索引查找，功能比较强大。 应用场景：适用于需要离线存储数据、本地数据库操作等。
5. Web SQL：Web SQL 是 HTML5 中的另一种本地数据库存储方案，采用 SQL 语句进行数据存储和查询，但是目前已经被弃用，不建议使用。 应用场景：类似于 IndexedDB，适用于需要离线存储数据、本地数据库操作等。



不同的本地存储方式适用于不同的场景，选择合适的方式可以提高用户体验和网站性能。
