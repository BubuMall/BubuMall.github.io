---
title: 在hexo中添加音乐播放
date: 2020-03-24 19:27:50
tags: 
- 前端
- 学习
---

添加音乐有2种方式，Aplayer和meting,meting可以添加各平台歌单id，很简单，自己琢磨^_^

## Aplayer

你需要知道，这2个不能同时使用，所以Aplayer的我就不用了

```
{% aplayer "残酷天使行动纲领" "22" "1.mp3" "http://p1.music.126.net/45hISoQHiPTbPg9oapc7DQ==/109951163549396167.jpg?param=130y130" "lrc:1.lrc" %}
```

格式就是上下这样， 当开启 Hexo 的 [文章资源文件夹](https://hexo.io/zh-cn/docs/asset-folders.html#文章资源文件夹) 功能时，可以将图片、音乐文件、歌词文件放入与文章对应的资源文件夹中，然后直接引用： 

```
{% aplayer "Caffeine" "Jeff Williams" "caffeine.mp3" "picture.jpg" "lrc:caffeine.txt" %}
```

##### 标签参数

- `title` : 曲目标题
- `author`: 曲目作者
- `url`: 音乐文件 URL 地址
- `picture_url`: (可选) 音乐对应的图片地址
- `narrow`: （可选）播放器袖珍风格
- `autoplay`:  (可选) 自动播放，移动端浏览器暂时不支持此功能
- `width:xxx`: (可选) 播放器宽度 (默认: 100%)
- `lrc:xxx`: （可选）歌词文件 URL 地址

##### **使用播放列表**

一开始调试歌词无法显示出来，搞了1个多小时就忽然出来了。。。

另外按照文档写，但是歌手名字无法显示QAQ

<!--more-->

{% aplayerlist %}

{

"mode": "random",

 "autoplay": true,

"mutex": true, 

"width": 300,

"showlrc": 3,

"music": [

{

"title": "残酷天使行动",

"author ":   "歌手名字无法显示呀",

"url": "1.mp3",

"cover": "http://p1.music.126.net/45hISoQHiPTbPg9oapc7DQ==/109951163549396167.jpg?param=130y130",

"lrc": "1.lrc"

},

{

"title": " Reality ",

" author":  " Lost Frequencies,Janieck",

"url": "2.mp3",

"cover": "http://p1.music.126.net/LKFWPd5m8ZStX8gm_536Ag==/109951163131792528.jpg?param=130y130",

"lrc": "2.lrc"

},

{

"title": "  可愛くなりたい ",

" author": " 鎖那" ,

"url": "3.mp3",

"pic": "http://p2.music.126.net/IB5K5tcKuJKnhQYoTCmOQw==/3312828539936484.jpg?param=130y130",

"lrc": "3.lrc"

}

]

}

{% endaplayerlist %}

```
{% aplayerlist %}

{

"mode": "random",

 "autoplay": true,

"mutex": true, 

"width": 300,

"showlrc": 3,

"music": [

{

"title": "残酷天使行动",

"author ":   "歌手名字无法显示呀",

"url": "1.mp3",

"cover": "http://p1.music.126.net/45hISoQHiPTbPg9oapc7DQ==/109951163549396167.jpg?param=130y130",

"lrc": "1.lrc"

},

{

"title": " Reality ",

" artist ":  " Lost Frequencies,Janieck",

"url": "2.mp3",

"cover": "http://p1.music.126.net/LKFWPd5m8ZStX8gm_536Ag==/109951163131792528.jpg?param=130y130",

"lrc": "2.lrc"

},

{

"title": "  可愛くなりたい ",

" artist ": " 鎖那" ,

"url": "3.mp3",

"pic": "http://p2.music.126.net/IB5K5tcKuJKnhQYoTCmOQw==/3312828539936484.jpg?param=130y130",

"lrc": "3.lrc"

}

]

}

{% endaplayerlist %}

```



## 使用meting



```
<!-- 简单示例 (id, server, type)  -->
{% meting "60198" "netease" "playlist" %}

<!-- 进阶示例 -->
{% meting "60198" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}
```

下面是我测试用的，可以运行^_^

```
{% meting "2618915549" "netease" "playlist" "listfolded"%}
```



有关  `meting`  的选项列表如下:

| 选项          | 默认值     | 描述                                                        |
| ------------- | ---------- | ----------------------------------------------------------- |
| id            | **必须值** | 歌曲 id / 播放列表 id / 相册 id / 搜索关键字                |
| server        | **必须值** | 音乐平台: `netease`, `tencent`, `kugou`, `xiami`, `baidu`   |
| type          | **必须值** | `song`, `playlist`, `album`, `search`, `artist`             |
| fixed         | `false`    | 开启固定模式                                                |
| mini          | `false`    | 开启迷你模式                                                |
| loop          | `all`      | 列表循环模式：`all`, `one`,`none`                           |
| order         | `list`     | 列表播放模式： `list`, `random`                             |
| volume        | 0.7        | 播放器音量                                                  |
| lrctype       | 0          | 歌词格式类型                                                |
| listfolded    | `false`    | 指定音乐播放列表是否折叠                                    |
| storagename   | `metingjs` | LocalStorage 中存储播放器设定的键名                         |
| autoplay      | `true`     | 自动播放，移动端浏览器暂时不支持此功能                      |
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

关于hexo这个音乐插件就介绍到这了，bye