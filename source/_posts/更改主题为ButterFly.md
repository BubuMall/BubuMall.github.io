---
title: 更改主题为ButterFly
date: 2023-02-09 12:14:47
tags: 
  - 主题
  - 纳西妲
---

## 配置

​	按照butterfly的文档设置，一般都不会出什么问题

## 背景图

​	我就遇到背景图瞎折腾了一下

```_config.butterfly.yml
# The banner image of home page
index_img: 'transparent'
# Website Background (設置網站背景)
# can set it to color or image (可設置圖片 或者 顔色)
# The formal of image: url(http://xxxxxx.com/xxx.jpg)
background: url(/img/nahida.jpg)
# Footer Background
footer_bg: 'transparent'
```

头部，底部弄成透明就行了

## 加一个纳西妲看板娘

​	这个倒是费了我挺多时间的，之前博客已经弄过，用hexo-live2d的插件，但这次我想要自己弄一个纳西妲的。

​	在一个B站up主[天才设计学家](https://space.bilibili.com/72073139)上找到了合适的。下载下来后就找框架了，又参考了大佬九弓子的可莉看板娘。用了live2d的官方模板，再自己稍稍魔改一下（还是借鉴）。

于是就有了以下的效果



## 页底添加爱心和~~小破站~~已运行时间

我真的是到处参考大佬们的技术博客，人都要麻了

看板娘我搞了好久，一直不满意再加上拖延

爱心跟已运行时间借鉴这位[花猪](https://cnhuazhu.gitee.io/2021/02/24/Hexo%E9%AD%94%E6%94%B9/Hexo%E9%A1%B5%E8%84%9A%E7%BE%8E%E5%8C%96/)大哥的博客

```javascript
// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('©2021 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 花猪');
})

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("1/20/2021 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#afb4db>'+daysold+'</font> 天 <font style=color:#f391a9>'+hrsold+'</font> 时 <font style=color:#fdb933>'+minsold+'</font> 分 <font style=color:#a3cf62>'+seconds+'</font> 秒';
}

```

用了之后效果不显示，原来要引入jq

在**主题配置文件**下的**inject**引入

![](https://cdn.jsdelivr.net/gh/BubuMall/Image/202302231342301.png)

```javascript
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
```



## 添加浏览时间

如图

<img src="https://cdn.jsdelivr.net/gh/BubuMall/Image/202302231355949.png" style="zoom:67%;" />



# 摆烂了！魔改太费时间了，看到的想弄参考这个，很简单哦☺！！

*因为我没流量再看这些花里胡哨的博客了*

[直达魔改电梯](https://butterfly.zhheo.com/)
