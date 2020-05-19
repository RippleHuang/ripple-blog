---
title: node url及nodemailer
date: 2020-3-11
categories:
  - node
tags:
  - node
---

::: tip
node url及nodemailer
:::

<!-- more -->

## 内置模块 url

> const url = require('url')

### 字符串转对象

```js
let urlString = "https:127.0.0.1:3000/fsi/hot/here?us=123&ps=456#dsaad";
let urlObj = url.parse(urlString);
console.log(urlObj);
```

### 对象转字符串

```js
let obj = {
  protocol: "https:",
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: "#dsaad",
  search: "?us=123&ps=456",
  query: "us=123&ps=456",
  pathname: "127.0.0.1:3000/fsi/hot/here",
  path: "127.0.0.1:3000/fsi/hot/here?us=123&ps=456",
  href: "https:127.0.0.1:3000/fsi/hot/here?us=123&ps=456#dsaad",
};
let string = url.format(obj);
console.log(string);
```

### 将 query 字符串转为 query 对象(split)

```js
const qs = require("querystring");
let string = "name=123&pass=456&sex=0";
let obj = qs.parse(string);
let string1 = "name-wang#psaa-123#sex-0";
let obj1 = qs.parse(string1, "#", "-");
console.log(obj);
console.log(obj1);
```

### 将 query 对象转为 query 字符串(stringfy)

```js
let obj2 = { name: "wang", psaa: "123", sex: "0" };
let string2 = qs.stringify(obj2, "&", "=");
console.log(string2);
```

### 特殊字符串转译

```js
let stringfg = "w=你好&foo=bar";
let result = qs.escape(stringfg);
console.log(result);

let escape = "w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar";
console.log(qs.unescape(escape));
```

## 第三方内置模块

- 邮箱验证码案例

  - npm 服务器(国内淘宝镜像服务器 10 分钟更新同步)
  - nodemailer 可以实现发邮件
  - 安装插件

    > npm install nodemailer

  - 发送方的邮箱地址 在 lib 下的 well-known 下的 services.json 中查找对应的邮箱
  - 在 qq 邮箱设置中 POP3/SMTP 服务 开启（默认关闭）得到一个授权码
  - 文本和网页二选一，文本只能为字符串，其他报错

### 通过 npm 安装一个插件，必须 init 触发一个项目工程

> npm init --yes

然后有个 `package.json` 文件

### 错误对象 Error

对象本身没有终止代码执行，可以抛出异常来终止代码运行

```js
let err = new Error("错误发生");
console.log(err);
throw err;
console.log(222);
```

## 爬虫案例

- 获取目标网站(http.get)
::: details 点击查看代码

```js
/*
    1.请求网站数据
    2.将数据保存本地文件
    */
const https = require("https");
const fs = require("fs");
const qs = require("querystring");
let url = "https://home.firefoxchina.cn/";
let json = "https://www.bilibili.com/";
https
  .get(url, (res) => {
    //安全判断
    const { statusCode } = res; // 状态码
    const contentType = res.headers["content-type"]; //文件类型
    console.log(statusCode, contentType);
    let error = null;
    if (statusCode !== 200) {
      error = new Error("请求错误");
    } else if (!/^text\/html/.test(contentType)) {
      //不是网页类型
      error = new Error("请求类型错误");
    }
    //error 为真两个判断出错
    if (error) {
      console.log(error);
      res.resume(); //重置缓存
      return false;
    }
    //数据分段 只要接受数据就会触发data 事件 chunk
    //每次接受的数据片段
    //数据量大分段传输
    let rawData = "";
    res.on("data", (chunk) => {
      // console.log('数据传输')
      console.log("-----");
      rawData += chunk.toString("utf8");
      // console.log(chunk.toString('utf8'))
    });
    //数据传输完毕
    res.on("end", () => {
      fs.writeFileSync("./test1/bili.html", rawData);
      console.log("数据传输完毕");
    });
  })
  .on("error", (err) => {
    console.log("请求错误");
  });
```

:::

