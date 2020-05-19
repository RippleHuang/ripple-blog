---
title: vue ui组件库
date: 2020-4-5
categories:
  - vue框架
tags:
  - vue
  - Vant
  - Mint
  - element-ui
---

::: tip
ui组件库
:::

<!-- more -->

## ui 组件库

### Mint ui(移动端)

- 使用
  - npm 安装 `npm install mint-ui --save`
  - 完整引入 `main.js` 中写入
    1. `import MintUI from 'mint-ui'`
    2. `import 'mint-ui/lib/style.css'`
    3. `Vue.use(MintUI)`
  - 按需引入
  1. 安装 babel-plugin-component：`npm install babel-plugin-component --save`
  2. 将 .babel.config.js 修改为：

    ```json
        plugins: ["@babel/plugin-transform-runtime",["component",
        {
            "libraryName": "mint-ui",
            "style": true
        }
        ]
    ]
    ```  

  - 在 main.js 中
  - `import { Button, Cell } from 'mint-ui'`
  - 全局注册标签
    - 可以使用定义好的 `Vue.component(Button.name,Button)`
      默认 `mt-button`
    - 可以自定义 `Vue.component('mint-button',Button)`
  - 在组件中使用
  - `<mt-button type="primary" @click.native="handleClick">primary</mt-button>`
  - `.native` 表明用原生的,直接@click 是它定义好的

### vant ui(移动端)

与mint ui 一致用法，推荐 Vant

### Elment ui（PC 端）

与mint ui 一致用法
