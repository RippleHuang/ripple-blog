---
title: node 第三方模块
date: 2020-03-15
categories:
  - node
tags:
  - node
---

::: tip
第三方模块
:::

<!-- more-->

## 通过 express 框架书写 api

ajax 2007.8 提出前后端分离
前端通过 ajax 请求数据
`$.get('url',()=>{})`
url 就是 api 接口

前端：

1. 写界面
2. 请求数据
3. 数据处理
后端： 写 api 接口

登入接口的逻辑分析

1. 接受用户的传递数据
2. 处理数据
3. 返回数据

## express 框架 基本使用(第三方插件)

- 安装 express

> npm install express
> 模块的引用 从当前目录的 node_modules 依次向上寻找

## 服务器相关

服务器

1. 服务器就是一台电脑  
2. 服务器软件（apach(php) tomcat(java) iis(微软) ngnix(linux) node.js）
3. 服务器 ip 和端口号（每个软件占用一个端口号）
局域网：服务器通过网络线连接（或无线） 每台电脑都有一个 ip
外网： ip 确定服务器的位置 端口号（port）确定软件位置

## api 接口的书写

- 接受数据
  - get req.query
  - post req.body 需要 body-parser 插件进行解析
    - 注意数据格式 json x-www-form-urencode formdata

## postman 接口测试

- post 传参的格式：一般传 form 表单格式 和 json 格式

## 路由 router

> userRouter.js

```js
const express = require("express");
//获取路由实例
const router = express.Router();

router.get("/add", (req, res) => {
  res.send("user add");
});

router.get("/del", (req, res) => {
  res.send("user del");
});
module.exports = router;
```

> foodRouter.js

```js
const express = require("express");
//获取路由实例
const router = express.Router();

router.get("/ssh", (req, res) => {
  res.send("food ssh");
});

router.get("/hbn", (req, res) => {
  res.send("food hbn");
});
module.exports = router;
```

> server.js

```js
const express = require("express");
//express 实例化
const app = express();
let userRouter = require("./router/userRouter");
let foodRouter = require("./router/foodRouter");
app.use("/user", userRouter);
app.use("/food", foodRouter);
//监听3000 端口 开启服务器
app.listen(3000, () => {
  console.log("server start");
});
```

## 中间件(use) middlewear(拦截器)

- 内置中间件 static(静态资源目录)
- 自定义中间件（全局 局部）
- 第三方中间件 (body-parser) (拦截器)

中间件使用 一定要注意 next

## static

制定一个目录 目录可以被访问(外网) apach （www）

```js
const express = require("express");
//内置模块path，处理物理路径
const path = require("path");

const app = express();

// console.log(__dirname)
console.log(path.join(__dirname, "/router-Test/static"));
//域名:3000 直接指向规定的静态目录
// app.use(express.static(path.join(__dirname,'/router-Test/static')))
//建议在前加上地址，安全
app.use("/test", express.static(path.join(__dirname, "/router-Test/static")));
app.listen(3000, () => {
  console.log("server start");
});
```

## apidoc 自动生成 api 接口文档

- 第一步安装：

> npm install apidoc -g
> apidoc -i myapp/ -o apidoc/ -t mytemplate/
> 如
> apidoc -i ./ -o ./api 2.按照他的格式书写

```js
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
```

- 创建一个 apidoc.json 在所在项目根目录

```json
    {
    "name": "api接口文档",
    "version": "0.1.0",
    "description": "api接口文档简介",
    "title": "api接口文档标题",
    "url" : "https://localhost:3000"
  }
```

## 跨域问题

ajax 同源策略 协议 主机{ip 域名} 端口号

1. 协议 主机 端口号 一致就能解决跨域问题
2. cors（后端配合）可以安装中间件 cors

    > npm install cors
    > const cors = require('cors')
    > app.use(cors())

3. jsonp(后端配合)
4. 代理(前端可解决)

## 图片上传

安装 multer 模块

> npm install multer
::: details 点击查看代码

```js
const express = require("express");
const router = express.Router();
//文件上传
const multer = require("multer");
//配置
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    //文件路径
    cb(null, "./static/img");
  },
  filename: function(req, file, cb) {
    //文件名
    //问题：1.文件名重复覆盖 2.后缀名发生改变
    // cb(null,'aaa.jpg')
    let exts = file.originalname.split(".");
    let ext = exts[exts.length - 1];
    let tmpname = new Date().getTime() + parseInt(Math.random() * 10000);
    cb(null, `${tmpname}.${ext}`);
  },
});
var upload = multer({
  storage: storage,
});
//上传图片必须为post方法
router.post("/upload", upload.single("img"), (req, res) => {
  // img 要上传图片数据的key值  必须和前后端统一
  console.log(req.file);
  //筛选
  let { size, mimetype, path } = req.file;
  let types = ["jpg", "jpeg", "png", "gif"];
  let tmpType = mimetype.split("/")[1];
  if (size > 500 * 1024) {
    return res.send({ err: -1, msg: "尺寸过大" });
  } else if (types.indexOf(tmpType) == -1) {
    return res.send({ err: -2, msg: "媒体类型错误" });
  } else {
    //返回图片地址
    let url = `/musicStatic/img/${req.file.filename}`;
    //解决跨域
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);

    res.send({ err: 0, msg: "上传ok", img: url });
  }
});
module.exports = router;
```

:::

## 前后端分离

前端矩阵 （app pc 小程序 （微信 支付宝 抖音 微博 百度）wap）

api 接口（前后端交互的桥梁）

- url `http://xxx.xxxx.com/uyser/reg`
参数
结果
方法
- 前端-> ajax 通过 api 接口传递数据
后端 通过 api 接收数据 处理数据 返回数据 {err：-1,msg:data}
前端 接收数据 页面的刷新渲染
