---
title: webpack js处理
date: 2020-02-26
categories:
  - webpack打包
tags:
  - webpack
---

::: tip
webpack js处理及eslint语法检查
:::

<!-- more -->

## eslint 语法检查

- 下载插件 eslint-loader 和 eslint，只检查源代码，第三方库不用检查
- 检查规则 下载 eslint-config-airbnb-base 和 eslint-plugin-import

```json
    "eslintConfig":{
    "extends":"airbnb-base"
  }
```

- 下一行不进行 eslint 所有规则的检查

```js
//eslint-disable-next-line
```

## js 兼容处理

- 下载 babel-loader @babel/preset-env @babel/core
- 在 rules options 中预设 ：指示 babel 做怎么样的兼容性处理
- 基本 js 兼容处理 --> @babel/preset-env 缺点处理不了 promise 函数
- 全部 js 兼容处理 --> @babel/polyfill ,在 index.js 引入就可以使用,缺点体积大
- 需要兼容性处理就做，按需加载 --> core-js,在 options 中的 presets 中配置,s 使用此方案需要将上面的 index.js 的引入去掉
- 将模式修改为生产环境 production，它可以自动压缩 js 代码
- 配置 minify 至少两个参数就能压缩