---
title: mongodb
date: 2020-3-12
categories:
  - node
tags:
  - node
  - mongodb
---

::: tip
非关系数据库 mongodb
:::

<!-- more-->

## 非关系数据库（文档） mongodb

### 安装 mongodb

1. 最后一个勾不选不然安装不上
2. 缺少数据库文件 H:/data/db
3. 配置环境变量
4. 指定数据库文件存放路径

    > cmd 下 mongod --dbpath 所存放路径
    > 可以在网页输入地址：localhost:27017
    > 可以更改端口：mongod --dbpath 所存放路径 --port 指定端口（如 10086）

5. mongod 为数据库服务器，mongo 为数据库客户端

6. 在 H 盘根目录下创建 data

- 在 data 文件下创建 db 和 log 文件夹,在 log 文件夹下创建一个 mongod.log 空文件
- 在 mongodb 安装目录 bin 下加个配置文件 mongod.cfg

```json
systemLog: destination: file;
path: H: \data\log\mongod.log;
storage: dbpath: H: \data\db;
```

### 指令

- mongodb 数据库名
- mongod 命令行启动数据库命令
- mongo 命令行操作数据库命令
- mongoose node 操作数据库的插件

### 回调函数 promise

```js
const fs = require("fs");
function delfile() {
  return new Promise((reslove, reject) => {
    //异步操作
    fs.appendFile("./abcd.txt", "sbcs", (err) => {
      if (err) {
        reject("失败了");
      } else {
        reslove("成功了");
      }
    });
  });
}
//好处：可以链式调用
delfile()
  //旧版
  // .then((data)=>{
  //     console.log('then:'+data)
  // },(err)=>{
  //     console.log('err:'+err)
  // })
  //新式
  .then((msg) => {
    console.log("then:" + msg);
  })
  .catch((err) => {
    console.log("err:" + err);
  });
```

::: details 点击查看代码

```js
const fs = require("fs");
//封装
function isEixt() {
  return new Promise((resolve, reject) => {
    fs.stat("./abd.txt", (err, stats) => {
      if (err) {
        reject("文件不存在");
      } else {
        resolve("文件存在");
      }
    });
  });
}

function delfile() {
  return new Promise((resolve, reject) => {
    fs.unlink("./abd.txt", (err) => {
      if (err) {
        reject("删除失败");
      } else {
        resolve("删除成功");
      }
    });
  });
}
//在一组链式调用中只用一个catch就可以捕获成功
isEixt()
  .then(() => {
    console.log("iseixt 的成功处理");
    return delfile();
  })
  .then(() => {
    console.log("删除文件处理成功");
    //return false
    throw new Error("手动终止");
  })
  .then(() => {
    console.log("123");
  })
  //后面如果继续.then，依然会执行
  //想要手动终止链式调用的执行，return false 没有效果，可以在想要终止的地方抛出异常
  //throw new Error('手动终止')
  .catch((err) => {
    console.log("catch");
    console.log(err);
  });
```

:::
大量异步操作 如果需要顺序执行 通过回调函数实行 嵌套多了 回调地狱

通过 promise 解决回调地狱

```js
function test(){
    // 返回 promise
    return new Promise((resolve,reject)=>{
        //需要执行的异步操作
        成功的时候 resolve
        失败 reject
    })
}
```

根据顺序 形成链式调用

```js
test()
.then()
.then()
.
.
.
.catch()
```

最后捕获错误

### node 操作 mongodb 数据库

- mongod
- mongoose

  - 安装 mongoose
    > npm install mongoose
  - 创建数据库
    在 H 盘下 cmd 命令行 mongod
    新创一个 H 盘下的 cmd 命令行 mongo
    创建一个新数据库
    > use [数据库名称]
    > 展示所有数据库（空数据库查询不到，必须有语句）
    > db.test3.insert({name:"zhangsan",age:4})
    > show dbs
  - 连接数据库

  ```js
  const mongoose = require("mongoose");
  //连接数据库
  mongoose.connect("mongodb://localhost/test3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //数据库的连接对象
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("db ok");
  });
  ```

  其中{ useNewUrlParser: true ,useUnifiedTopology: true}若不添加会警告，会要求写上这两个

  - 数据库操作相关
  ::: details 点击查看代码

  ```js
  //mongodb 提供 scheme 对象

  //创建一个和集合相关的scheme对象 类似表头
  //   var Schema = mongoose.Schema;

  //   var userSchema = new Schema({
  //   });
  //简写
  var userScheme = new mongoose.Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 },
  });

  //将Scheme 对象转化为数据类型
  //该数据对象和集合关联（'集合名/表名'，scheme对象）
  //表名若不是复数，数据库自动变成复数，如user>users，child>children
  var Users = mongoose.model("users", userScheme);
  //操作数据库
  //增
  // Users.insertMany({us:'huangbo',ps:'123',age:16})
  // .then(data=>{
  //     show()
  //     console.log(data)
  //     console.log('插入成功')
  // })
  // .catch(err=>{
  //     console.log('插入失败')
  // })
  //删
  // Users.remove()
  // .then(data=>{
  //     show()
  //     console.log(data)
  //     console.log('删除成功')
  // })
  // .catch(err=>{
  //     console.log('查询失败')
  // })
  //改
  // Users.update({us:'huangbowen',ps:'1234',age:25})
  // .then(data=>{
  //     show()
  //     console.log('修改成功')
  // })
  // .catch(err=>{
  //     console.log('修改失败')
  // })
  //查
  var show = () => {
    Users.find()
      .then((data) => {
        console.log(data);
        console.log("查询成功");
      })
      .catch((err) => {
        console.log("查询失败");
      });
  };
  ```
  
  :::
- 数据库可视化操作
  - 安装 robo 3T（小型）
  - 安装 nodemon，保存后自动更新开启服务器
    > npm install nodemon -g

### 登入注册删除操作 mongod

> userRouter.js

::: details 点击查看代码

```js
const express = require("express");
const router = express.Router();
const Users = require("../db/model/userModel");
//注册
router.post("/reg", (req, res) => {
  //1.获取数据
  let { us, ps, age } = req.body;
  console.log(us, ps);
  //2.数据处理
  if (us && ps) {
    //先查询用户名是否存在
    Users.find({ us })
      .then((data) => {
        if (data.length === 0) {
          // Users.insertMany({us:us,ps:ps,age:age})
          //ES6中的语法，key与value一样，可简写
          return Users.insertMany({ us, ps, age });
        } else {
          return res.send({ err: -1, msg: "用户名已存在" });
        }
      })
      //ES6语法中函数体只有一条时，可以省略{}并自动返回return
      // .then(data=>{
      //     return res.send({err:0,msg:'传参成功，注册成功'})
      // })
      .then((data) => res.send({ err: 0, msg: "注册成功" }))
      .catch((err) => res.send({ err: -2, msg: "注册失败" }));
  } else {
    return res.send({ err: -3, msg: "格式错误" });
  }
  //3.返回数据
  //多次send会报错，为了防止报错，每次send都return
});
// 登入
router.post("/login", (req, res) => {
  let { us, ps } = req.body;
  console.log(us, ps);
  if (!us || !ps) {
    return res.send({ err: -4, msg: "传参失败" });
  }
  Users.find({ us, ps })
    .then((data) => {
      if (data.length > 0) {
        return res.send({ err: 0, msg: "登入成功" });
      } else {
        return res.send({ err: -5, msg: "用户名或密码错误" });
      }
    })
    .catch((err) => res.send({ err: -6, msg: "内部错误" }));
});
//注销
router.post("/unti", (req, res) => {
  let { us } = req.body;
  if (us) {
    Users.find({ us })
      .then((data) => {
        if (data.length === 0) {
          return res.send({ err: -7, msg: "请输入正确用户名" });
        } else {
          return Users.remove({ us });
        }
      })
      .then((data) => res.send({ err: 0, msg: "删除成功" }));
    // .catch(err=>res.send({err:-8,msg:'删除错误'}))
  } else {
    return res.send({ err: -9, msg: "请输入用户名" });
  }
});
//抛出路由
module.exports = router;
```

:::

> server.js

```js
const express = require("express");
//引入模块，可以省略.js
const db = require("./db/connect");
const app = express();
//引入解析数据 中间件 bodyparser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//引入路由,中间件
const userRouter = require("./router/userRouter");
app.use("/user", userRouter);
app.listen(3000, () => {
  console.log("server start");
});
```

> connect.js

```js
const mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost/test3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//数据库的连接对象
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("db ok");
});
```

> userModel.js

```js
const mongoose = require("mongoose");
var userScheme = new mongoose.Schema({
  us: { type: String, required: true },
  ps: { type: String, required: true },
  age: Number,
  sex: { type: Number, default: 0 },
});
//将Scheme 对象转化为数据类型
var Users = mongoose.model("users", userScheme);

module.exports = Users;
```

### 注册模块

1.注册登入
2.验证码逻辑接口实现
a.验证用户名存在

```js
//先查询用户名是否存在
Users.find({ us })
  .then((data) => {
    if (data.length === 0) {
      // Users.insertMany({us:us,ps:ps,age:age})
      //ES6中的语法，key与value一样，可简写
      return Users.insertMany({ us, ps, age });
    } else {
      return res.send({ err: -1, msg: "用户名已存在" });
    }
  })
  //ES6语法中函数体只有一条时，可以省略{}并自动返回return
  // .then(data=>{
  //     return res.send({err:0,msg:'传参成功，注册成功'})
  // })
  .then((data) => res.send({ err: 0, msg: "注册成功" }))
  .catch((err) => res.send({ err: -2, msg: "注册失败" }));
```

b.获取邮箱验证码

```js
const Mail = require("./utils/mail");
//发送邮件验证码
app.post("/getMailCode", (req, res) => {
  let { mail } = req.body;
  //产生随机验证码
  let code = parseInt(Math.random() * 10000);
  Mail.send(mail, code)
    .then((data) => res.send({ err: 0, msg: "验证码发送成功" }))
    .catch((err) => res.send({ err: -1, msg: "验证码发送失败" }));
});
```

> mail.js
::: details 点击查看代码

```js
"use strict";
const nodemailer = require("nodemailer");
//创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com", //发送方邮箱 qq邮箱
  port: 465, //端口号
  secure: true, // true for 465, false for other ports
  auth: {
    user: "422992902@qq.com", // 发送方的邮箱地址
    pass: "jjfebexpoqlmbgdb", // mtp 验证码 qq授权码
  },
});
function send(mail, code) {
  //邮件信息
  let mailobj = {
    from: '"信息科技有限公司" <422992902@qq.com>', // sender address
    to: mail, // list of receivers
    subject: "邮箱验证", // Subject line
    //0
    text: `您的验证码是${code}，有效期五分钟`, // plain text body
    // html: "<b>Hello world?</b>" // html body
  };
  //发送邮件
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailobj, (err, data) => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
//let obj ={send: function(){}} ==>{send:send} ==>{send}
module.exports = { send };
```
