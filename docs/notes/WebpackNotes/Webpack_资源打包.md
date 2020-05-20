---
title: webpack 资源打包
date: 2020-02-24
categories:
  - webpack打包
tags:
  - 资源打包
---

::: tip
webpack 资源打包
:::

<!-- more -->

## 样式打包

- 准备工作
  - 需要在与 src 同级下创建一个`webpack.config.js`配置文件
  - 当运行 webpack 指令时，会加载里面的配置
  - 采用 node.js 平台运行的模块化默认采用 commonjs
  - 在 main.js 中引入 css 资源
  - 安装 npm i style-loader 和 css-loader
  - node 找包，是一层层往上找，这里没有往上找，父辈有，子孙都可以用
  - 编写 webpack.config.js 文件，再命令行 `webpack` 把设置编译到 built.js 中
  - 在 html 页面中引入 built.js 文件
  - less 资源需要下载 style-loader 和 css-loader 和 less-loader 还有 less

```js
//代码
const { resolve } = require("path");
module.exports = {
  //入口起点
  entry: "./src/index.js",
  output: {
    //输出文件名
    filename: "built.js",
    //输出路径
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //详细loader配置
      {
        //匹配哪些文件
        //不同文件必须配置不同的loader处理
        test: /\.css$/,
        //使用哪些loader进行处理
        use: [
          //执行顺序，从右到左，从上到下
          //创建style标签，将js中的样式资源插入进行，添加到head生效
          "style-loader",
          //将css文件变成commonjs模块加载js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  //插件配置
  plugins: [],
  //模式
  mode: "delelopment",
};
```

## html 打包

- 准备工作
  - 下载 loader 并配置 loader
  - 下载 plugins 引入 使用，插件名 html-webpack-plugin
  - 在 webpack 中引入 html-webpack-plugin，在 plugin 中 构造一个`new HtmlWebpackPlugin({template:'./src/index.html'})`
  - webpack 编译自动引入打包输出的所有资源(js/css)

## 图片打包

- 准备工作 下载 url-loader file-loader
- url-loader 不能处理 html 中内嵌的图片，需要 html-loader 负责引入 img，从而被 url-loader 处理
- webpack 编译

## 打包其他资源

- 概念：不用处理的资源为其他资源
  - 准备工作 需要 下载 file-loader
  - 在 rules 中配置 exclude:`/\.(css|js|html|png|jpg|giF)$/`,`loader:'file-loader'`
  - webpack 编译
