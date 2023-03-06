---
title: Picgo+Github配置图床
date: 2023-02-23 13:22:37
tags:
  - 技巧
---

## 步骤

### 1.下载Picgo

官方下载链接：https://github.com/Molunerfinn/PicGo/releases

我的是2.3.1版本

![](https://cdn.jsdelivr.net/gh/BubuMall/Image/202302231413241.png)

### 2.新建Github仓库

在github新建一个仓库，如Image

1. 点击右上角头像
2. **Settings **→  **Developer settings** →  **Personal access tokens** → **Tokens(classic)** → **Generate new token**
3. 在**Note**输入名称，勾选**repo**
4. 然后生成token复制



### 3.配置Picgo

![](https://cdn.jsdelivr.net/gh/BubuMall/Image/picgo2.png)

如图把**token**粘进去，配置参考上图

设定自定义域名：`https://cdn.jsdelivr.net/gh/GitHub /账号名/仓库名 `
（例：https://cdn.jsdelivr.net/gh/BubuMall/Image）

（注：这里使用了jsDelivr进行加速）

然后记得把Github设为默认的图床

### 4.运行

然后你想怎么骚就怎么骚吧，每上传一张就commit一次。

这么聪明的你一定一点就通( ´･ω･)ﾉ(._.`)摸摸头

