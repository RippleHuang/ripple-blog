---
title: webpack css处理及devServer
date: 2020-2-25
categories:
  - webpack
tags:
  - webpack
---

::: tip
webpack css的处理及devServer使用
:::

<!-- more -->

## devServer 使用

- 概念 ：开发服务器 devServer，用来自动化(自动编译，自动打开浏览器，自动刷新浏览器)
- 特点：只会在内存中编译打包，不会有任何输出
- 启动 devServer 指令为：npx webpack-dev-server
- 需要安装 webpack-dev-server
- 在 index.js 中 mode 下配置

```js
  devserver:{
    ontentBase:resolve(__dirname,'build'),
    //启动gzip压缩
    compress:true,
    //端口号
    port:3000,
    //自动打开浏览器
    open:true
  }
```

## 提取 css 成单独文件

- 准备工作
  - 下载 mini-css-extract-plugin
  - 在 config.js 中引入所下载的
  - 在 plugins 中配置 `new MiniCssExtractPlugin()`
  - 把 style-loader 替换为 `MiniCssExtractPlugin.loader`
  - 如果需要输出到文件夹中在 plugins `new MiniCssExtractPlugin()`中配置 `filename:'css/built.css'`就可以

## css 兼容问题

- postcss 的两个 postcss-loader 和 postcss-preset-env
- 帮 postcss 找到 package.json 中 browserslist 里面的配置，通过配置加载指定的 css 兼容性样式

```json
"browserslist": {
    "development":[
        <!-- 开发环境
        设置node.js环境变量
        process.env.NODE_ENV = 'development' -->
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production":[
      <!-- 兼容大于99.8的浏览器 -->
      ">0.2%",
      <!-- 不要死的浏览器 -->
      "not dead",
      <!-- 不要op_mini这个浏览器 -->
      "not op_mini all"
    ]
  }
```

```js
//第一种：使用loader的默认配置
//'postcss-loader'
//第二种：修改loader的配置
{
    loader: 'postcss-loader',
    options:{
    ident:'postcss',
    plugins:()=>[
        //postcss插件
        require('postcss-preset-env')()
    ]
}
```

## 压缩 css

- 下载插件 optimize-css-assets-webpack-plugin
- 引入 config.js 中引入
- 在 plugin 中 `new OptimizeCssAssetsWebpackPlugin()`就可以以了
