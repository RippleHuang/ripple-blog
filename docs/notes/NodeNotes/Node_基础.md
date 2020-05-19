---
title: node 基础以及fs模块
date: 2020-3-9
categories:
  - node
tags:
  - node
---

::: tip
node 基础以及fs模块
:::

<!-- more -->

## 什么是 node

- chrome（google） V8 runtime
- 事件驱动
- 非阻塞的 i/o(input/output)

i/o:输入输出流 正常情况下的操作都是阻塞的
网络请求 数据库处理 文件的读写....
优点：高并发特别好（同时大量的数据处理，如双 11 的同一商品被多人抢购）

## js 运行环境

- 浏览器
  - 基本语法
  - bom
  - dom
  - ajax
  - 系统文件数据库（不能，不是语言不能 处于安全性考虑不能）
- 服务器
  - 基本语法
  - 能操作数据库
  - 能操作本地文件

## node 运行环境 REPL

直接在命令行（cmd/终端）书写

> ctrl + c 退出当前终端 按下两次 退出 node REPL  
> ctrl + d 退出 node REPL  
> 向上/向下 键 - 查看输入的历史命令  
> tab 键 - 列出当前命令  
> .help - 列出使用命令  
> .break - 退出多行表达式  
> .clear - 退出多行表达式  
> .save filename - 保存当前的 Node REPL 会话到指定文件  
> .load filename - 载入当前 Node REPL 会话的文件内容

## 模块化

- 内置模块
- 第三方模块
- 自定义模块

  - 创建一个模块（一个 js 文件一个模块）
  - 导出一个模块（module.exports=name）
  - 引用一个模块并且调用

  ```js
  //module.js
  let name = {
    sayHello() {
      console.log("hello nodejs");
    },
  };
  module.exports = name;
  ```

  ```js
  //引用一个模块并且调用
  let Module = require("./module");
  console.log(Module);
  Module.sayHello();
  ```

## 内置模块 fs

- 数据操作
  - c(creat)
  - u(updata)
  - r(read)
  - d(delete)
- 代码
::: details 点击查看代码

```js
//引入内置模块
const fs = require("fs");
//同步读取文件 在关键位置捕获错误信息
try {
  let dirs = fs.readdirSync("./");
  console.log(dirs);
} catch (err) {
  console.log("出错了");
  console.log(err);
}

//异步读取
// fs.readdir('./',(err,data)=>{
//     // console.log(err)
//     // console.log(data)
//     if(err){
//         console.log('读取错误')
//     }else{
//         console.log(data)
//     }
// })
//错误的回调优先，在回调函数中第一个参数表示错误对象
//默认为null

//创建，只需要err不需要data
// fs.mkdir('./test1',err =>{
//     console.log(err)
// })
//更改文件夹名
// fs.rename('./test1','./test2',err=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('更改成功')
//     }
// })
//删除 只能删除空文件夹
// fs.rmdir('./test2',err=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('删除成功')
//     }
// })
```

:::

```js
const fs = require("fs");
//创建文件 覆盖写入
// fs.writeFile('./test/name.txt','今天的收获不错',err=>{
//     console.log(err)
// })
// //写入文件
// fs.appendFile('./test/name.txt','node.js',err=>{
//     console.log(err)
// })
//读取文件
// fs.readFile('./test/name.txt','utf-8',(err,msg)=>{
//     console.log(err)
//     console.log(msg)
//     //默认读取二进制数据流 buffer 也可在实参中写入utf-8
//     // console.log(msg.toString('utf-8'))
// })
//删除文件
fs.unlink("./test/name.txt", (err) => {
  console.log(err);
});
```
