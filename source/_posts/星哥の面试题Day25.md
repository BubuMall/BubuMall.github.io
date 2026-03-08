---
title: 星哥の面试题Day25
date: 2023-03-17 10:25:05
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 怎么使用 JS 实现元素拖拽功能？

要使用JavaScript实现元素的拖拽功能，您可以按照以下步骤操作：

为需要拖拽的元素添加mousedown、mousemove和mouseup事件监听器。 在mousedown事件处理函数中，记录鼠标按下时的位置，以及鼠标相对于元素的位置。 在mousemove事件处理函数中，计算鼠标移动的距离，并更新元素的位置。 在mouseup事件处理函数中，移除mousemove和mouseup事件监听器。 以下是一个简单的实现示例：

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draggable Element</title>
    <style>
        #draggable {
            width: 100px;
            height: 100px;
            background-color: blue;
            position: absolute;
            cursor: move;
        }
    </style>
</head>
<body>
    <div id="draggable"></div>

    <script>
        const draggableElement = document.getElementById('draggable');

        draggableElement.addEventListener('mousedown', (event) => {
            // 记录鼠标按下时的位置
            let startX = event.clientX;
            let startY = event.clientY;

            // 计算鼠标相对于元素的位置
            let offsetX = startX - draggableElement.offsetLeft;
            let offsetY = startY - draggableElement.offsetTop;

            // 处理鼠标移动事件
            const onMouseMove = (event) => {
                // 计算鼠标移动的距离
                let deltaX = event.clientX - startX;
                let deltaY = event.clientY - startY;

                // 更新元素的位置
                draggableElement.style.left = `${event.clientX - offsetX}px`;
                draggableElement.style.top = `${event.clientY - offsetY}px`;
            };

            // 处理鼠标松开事件
            const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            // 添加事件监听器
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    </script>
</body>
</html>
```

这个示例将实现一个简单的拖拽功能，您可以在此基础上根据需要进行调整和优化。注意，这个示例未考虑边界限制和性能优化，请根据实际需求进行相应调整。

##  什么是回流和重绘？什么场景下会触发？怎么减少回流和重绘？

回流（Reflow）和重绘（Repaint）是浏览器渲染过程中的两个关键概念，它们对网页性能产生重要影响。理解回流和重绘以及它们的触发场景有助于我们优化网页性能。



回流（Reflow）： 回流是当浏览器需要重新计算元素的布局、尺寸和位置时所发生的过程。回流通常发生在以下场景：

1. 添加或删除可见的DOM元素。
2. 元素尺寸发生变化，如宽度、高度、边距、填充等。
3. 页面布局发生变化，如改变窗口大小。
4. CSS伪类激活，如:hover。
5. 计算offsetWidth、offsetHeight等属性。



重绘（Repaint）： 重绘是浏览器在元素的外观发生变化，但不影响布局时所发生的过程。重绘通常发生在场景：改变元素的颜色、背景、边框等样式，但不影响元素尺寸和位置。



减少回流和重绘的方法：

1. 避免频繁操作样式：多次修改样式时，可以使用一个class来修改，或者通过修改style属性进行批量操作。
2. 避免逐项改变样式：使用CSS的transform、opacity等属性进行动画，而不是改变宽度、高度、位置等会触发回流的属性。
3. 使用文档片段（DocumentFragment）或者offscreen元素进行批量操作：在对DOM元素进行大量操作时，可以先将它们从文档流中移除，然后在内存中进行操作，最后再插入文档流中。
4. 避免使用table布局：table布局中的元素发生回流时，会影响到整个表格，从而导致更多的回流。
5. 对具有复杂动画的元素使用绝对定位：将动画元素脱离文档流，减少回流对其他元素的影响。
6. 避免频繁访问布局信息：如offsetWidth、offsetHeight等，可以在访问前将这些值缓存起来，避免多次触发回流。



回流和重绘对性能影响较大，尤其是在移动设备上。因此，优化代码以减少回流和重绘次数是提高网页性能的重要手段。

## 什么是 npm？你用过哪些 npm 包？是否开发过自己的 npm 包？

npm（Node Package Manager）是一个基于Node.js的包管理器，用于管理Node.js项目中的依赖和包。npm提供了一种简单、方便的方式来安装、更新和卸载第三方库和工具，同时还可以用于发布和共享自己开发的包。通过npm，开发者可以轻松地引入各种库，提高开发效率。

提供一些常见的npm包：

1. express：一个简洁、灵活的Node.js Web应用框架，提供了一系列强大的功能来开发Web和API应用。
2. react：一个用于构建用户界面的JavaScript库，由Facebook开发，广泛应用于前端开发。
3. lodash：一个强大的JavaScript实用库，提供了许多有用的工具函数，如数组操作、对象操作、函数操作等。
4. axios：一个基于Promise的HTTP客户端库，用于浏览器和Node.js，提供了简单、易用的API来发起HTTP请求。
5. moment：一个用于解析、处理和显示日期和时间的JavaScript库，提供了丰富的API来处理各种日期和时间操作。
6. nodemon：一个实用的开发工具，用于监视Node.js应用程序中的文件更改，并在发生更改时自动重启应用。

开发自己的npm包的过程大致如下：

1. 创建项目文件夹，并在文件夹中初始化npm项目，使用npm init命令生成package.json文件。
2. 开发功能模块，确保遵循模块化的原则，编写模块的导出和引入。
3. 编写详细的README文件，说明模块的用途、安装方法、使用方法以及API文档。
4. 确保项目中包含.gitignore和.npmignore文件，以排除不需要发布到npm的文件和文件夹。
5. 在npm官网 https://www.npmjs.com/ 注册一个账号，然后在命令行中使用 `npm login` 命令登录。
6. 使用npm publish命令发布包到npm仓库。

发布后，其他开发者可以通过npm install命令安装和使用您的包。注意在开发过程中遵循语义化版本规范（Semantic Versioning），便于其他开发者理解版本变更。
