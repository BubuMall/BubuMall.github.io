---
title: 星哥の面试题Day15
date: 2023-03-06 16:51:02
tags:
  - 面试题
  - 求职	
  - 前端
---

*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## 什么是 HTML 语义化？为什么要语义化？

HTML语义化是指在编写HTML文档时，使用恰当的标签和属性，以及正确的结构来描述文档的内容、结构和意义。HTML语义化可以让Web开发人员更好地组织和呈现页面内容，使页面更具有可读性和可访问性，同时也有助于提高SEO优化效果。

具体来说，HTML语义化可以带来以下几个好处：

1. 代码可读性：通过语义化的标签和结构，可以更好地描述文档的结构和意义，使代码更加清晰易懂，方便维护和修改。
2. 改善用户体验：语义化的HTML结构可以提高页面的可读性和可访问性，使页面内容更容易被用户理解和使用，从而提高用户体验。
3. 提高SEO优化效果：语义化的HTML结构可以提高搜索引擎对页面的理解和评价，使网站更容易被搜索引擎收录和排名，从而提高SEO优化效果。
4. 更好的跨平台支持：语义化的HTML结构可以使页面更好地适应不同的浏览器和设备，提高页面的跨平台支持性和兼容性。
5. 更好的可维护性：通过语义化的HTML结构，可以更好地区分页面的内容和样式，使CSS和JavaScript的编写更加简单和直观，从而提高代码的可维护性。

因此，HTML语义化是Web开发中非常重要的一个概念，它可以帮助开发人员更好地组织和呈现页面内容，提高页面的可读性、可访问性和SEO优化效果，同时也有助于提高代码的可维护性和可扩展性。

## 怎么用 JS 实现大型文件上传？要考虑哪些问题？

在前端实现大型文件上传，需要考虑以下几个问题：

分片上传：将大文件切割成多个小块进行上传，可以避免一次性上传大文件导致的上传时间过长，网络中断等问题。通常情况下，每个块大小为 1MB 左右。

断点续传：由于网络等因素，上传过程中可能出现中断，此时需要能够从中断的地方恢复上传。

并发上传：多个文件同时上传，需要对上传队列进行管理，保证上传速度和顺序。

上传进度显示：及时显示上传进度，让用户知道上传进度和状态。

可以通过使用第三方库来实现大型文件上传，比如 Plupload、Resumable.js 等。

以下是一个使用 Plupload 实现大型文件上传的示例：**(待优化)**

```xml
<!-- 引入 Plupload 的 JavaScript 和 CSS 文件 -->
<script type="text/javascript" src="plupload.full.min.js"></script>
<link rel="stylesheet" href="plupload.css">

<!-- 上传控件的容器 -->
<div id="uploader">
  <p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
</div>

<!-- 初始化上传控件 -->
<script type="text/javascript">
  var uploader = new plupload.Uploader({
    browse_button: 'uploader', // 上传控件的容器
    url: '/upload', // 上传文件的 URL
    multi_selection: false, // 是否允许同时上传多个文件
    filters: {
      max_file_size: '100mb', // 最大上传文件大小
      mime_types: [
        { title: 'Image files', extensions: 'jpg,jpeg,gif,png' },
        { title: 'Zip files', extensions: 'zip,rar' }
      ]
    },
    init: {
      // 添加文件到上传队列之前触发的事件
      BeforeUpload: function (up, file) {
        console.log('BeforeUpload:', file.name);
      },
      // 开始上传文件时触发的事件
      UploadFile: function (up, file) {
        console.log('UploadFile:', file.name);
      },
      // 上传进度改变时触发的事件
      UploadProgress: function (up, file) {
        console.log('UploadProgress:', file.percent);
      },
      // 上传成功时触发的事件
      FileUploaded: function (up, file, info) {
        console.log('FileUploaded:', file.name, info.response);
      },
      // 上传出错时触发的事件
      Error: function (up, err) {
        console.log('Error:', err.message);
      }
    }
  });

  // 初始化上传控件
  uploader.init();
</script>
```

在后端，需要根据上传控件发送的请求，来实现文件的接收和存储。具体实现方式视具体情况而定，可以使用 SpringMVC、Express.js 等框架来实现。同时，也需要考虑上传文件大小限制、上传速度控制等问题。

## 如何提高 webpack 的打包速度？

以下是一些提高Webpack打包速度的技巧：

1. 升级Webpack版本：Webpack的新版本通常具有更快的构建速度和更好的性能。
2. 减少模块解析范围：通过设置resolve.modules、resolve.extensions、resolve.alias等选项，可以让Webpack减少查找和解析模块的范围，从而加快构建速度。
3. 使用LoaderOptionsPlugin插件：该插件可以将Loader的选项提取到Webpack的配置中，避免在每个Loader中重复设置相同的选项，从而提高构建速度。
4. 使用HappyPack插件：该插件可以将Webpack的构建任务分解成多个子进程并行执行，从而加快构建速度。
5. 使用DllPlugin和DllReferencePlugin插件：该插件可以将常用的第三方库预先编译成一个单独的文件，从而避免重复打包，提高构建速度。
6. 开启缓存：通过设置cache选项或使用cache-loader等插件，可以让Webpack在第二次构建时复用已经处理过的结果，从而加快构建速度。
7. 压缩代码：使用UglifyJsPlugin等插件可以将代码压缩，从而减少文件大小和加载时间，提高性能。
8. 移除不必要的插件和Loader：删除不必要的插件和Loader可以减少Webpack的处理时间，从而加快构建速度。
9. 使用Tree shaking：使用ES6的import和export语句以及Webpack的tree shaking功能可以减少打包后的文件大小，从而提高构建速度和性能。
10. 使用多个entry和output：使用多个entry和output可以将不同的代码分别打包成多个文件，从而减少每个文件的大小，提高构建速度和性能。
