---
title: git 发布到npm
date: 2020-04-13
categories:
  - git
tags:
  - git
  - npm
---

::: tip
git 发布到npm
:::

<!-- more -->

## 打包项目

在package.json 的 "scripts" 中 配置

> "lib": "vue-cli-service build --target lib packages/index.js"

运行 `yarn lib` 或 `npm run lib` 得到 dist 文件

## 把项目推送到 github 上

具体过程不再叙述

## 发布到npm 的前置条件

在 package.json 中  

修改 package.json 中 的 `"private"`，修改为`false`  

配置 
`"main":"dist/hripple-ui.umd.min.js"`
`"author": { "name": "xxx" }`

根目录下创建 .npmignore

```json
# 忽略文件
examples/
packages/
public/

# 忽略指定文件
vue.config.js
babel.config.js
*.map
```

装了nrm的需保证源为npm的源，而不是淘宝镜像的源

`npm login`

输入用户名，密码，邮箱

再 `npm publish`
