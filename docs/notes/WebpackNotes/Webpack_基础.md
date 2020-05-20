---
title: webpack 基础
date: 2020-02-23
categories:
  - webpack打包
tags:
  - webpack
---

::: tip
webpack 的基础
:::

<!-- more -->

## webpack

五个核心概念

- Entry：入口，指 webpack 以那个文件为入口起点开始打包，分析构建内部依赖图
- Output：输出，打包后的资源 bundles 输出到哪里，以及如何命名
- Loader：能够去处理非 js 文件，他自身只能理解 js
- Plugins：插件，可以执行更广的任务，插件范围包括从打包优化和压缩，一直到重新定义环境的变量
- Mode：模式，指定 webpack 使用相应模式，一是 development，能让代码本地调试运行的环境，production 能让代码优化上线运行的环境

结论

- webpack 能处理 js/json 资源，不能处理 css/img 等其他资源
- 生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化
- 生成环境比开发环境多一个压缩 js 代码
