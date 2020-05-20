---
title: vue 组件化
date: 2020-03-30
categories:
 - vue框架
tags:
 - vue
 - vue-cli
---

::: tip
vue的组件化
:::

<!-- more -->

## vue 组件化编码

vue-cli 是官方提供的脚手架工具，默认搭建好了一个项目的基本架子
我们在其基础上进行相应的修改即可

1. 安装 vue-cli 以管理员 cmd
    > npm install -g @vue/cli
2. 初始化 vue 项目

    基于交互式命令行的方式创建新版 vue 项目
    - 在要创建的目录下 cmd vue create lk-demo
    - 按键上下可以选择默认（default）还是手动（Manually）
    - 空格是选中与取消，A 键是全选
    - 选择配置
    - Babei 把高阶语法 ES6，ES7，ES8 等转化为低阶 ES5 语法，方便打包构建
    - TypeScript 支持 TypeScript 书写源码
    - Progressive Web App(PWA) Support PWA 支持（渐进式网络应用程序）
    - Router 路由支持 vue-router
    - Vuex 支持 vuex 状态管理
    - CSS Pre-processors 支持 CSS 预处理器 lass sass
    - linter/Fomatter 支持代码风格检查和格式化
    - Unit Testing 支持单元测试
    - E2E Testing 支持 E2E 测试
    - 选择将这些配置文件写入到什么地方(in dedicated donfig files)
    专用配置文件中
    - 是否保存这份预设配置 （n）
    - 运行项目 npm run serve

    基于图形化界面的方式创建 vue 项目 - vue ui

3. vue 文件模板

    ```html
    <template>
    <div></div>
    </template>
    <script>
    export default {

    }
    </script>
    <style>
    </style>
    ```

4. App.vue 使用其他组件三步骤

    - 引入组件 在 script 中 import Test from './components/Test.vue'
    - 注册组件,映射组件标签 在 script export default 中 components: { Test }
    - 使用组件标签 在 template 中 `<Test/>`

5. main.js 入口 js

    整个项目都能用的，一般配置在 main.js 中  
    阻止启动产生消息 Vue.config.productionTip = false  

    3.0 版本以前：

    ```js
    new Vue({
      el: "#app",
      components: {
        App,
      },
      template: "<App/>",
    });
    ```

    若 3.0 之后版本用这个方式,则两种方法

    - vue.config.js 文件里加上 webpack 的如下配置

    ```json
    configureWebpack: {
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.esm.js'
        }
    }
    ```

    - 在引用 vue 时 import Vue from 'vue/dist/vue.esm.js'

    3.0 版本之后：

    ```js
    //新版本 $mount 手动挂载
    new Vue({
    render: (h) => h(App)
    }).$mount("#app")
    ```

## 打包与发布

打包,所在文件夹下 cmd

> npm run build

发布

- 使用静态服务器工具包
  > npm install -g serve
  > serve dist

访问`http://localhost:5000`

- 使用动态 Web 服务器(tomcat)

  - 修改配置：webpack.prod.conf.js
    output{publicPath:'/xxx/'} //打包文件夹的名称
  - 重新打包

    > npm run build

  - 修改 dist 文件夹为项目名称：xxx，将 xxx 拷贝到运行的 tomcat 的 webapps 目录下
    访问：`http://localhost:8080/xxx`

## 组件化思想

1. 划分功能(拆分组件)
   css,jQuery 等库在 index.html 中引入
2. 静态组件
   静态页面没有数据交互
3. 动态组件
   页面的交互
    - 数据在哪个组件，更新数据的行为（方法）就应该在哪个组件
    - 把方法或数据通过 v-bind:强制绑定数据绑定给子组件，子组件或者子组件的后代组件需要用到，则需要定义其同名 props 接受属性并通过 v-bind:强制绑定数据，若后代组件需要方法或数据，则其祖先组件都需要定义 props 并通过 v-bind:强制绑定数据，依次传递
    - 其中的哪个组件触发事件，this 为哪个组件，如组件中的按钮触发，这时的 this 为该组件
