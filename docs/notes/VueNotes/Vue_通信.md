---
title: vue 组件通信
date: 2020-03-31
categories:
 - vue框架
tags:
 - vue
 - vue-cli
---

::: tip
vue的组件间通信,props,自定义事件,订阅与发布,vuex
:::

<!-- more -->

## 通信基本原则

- 不要在子组件直接修改父组件的状态数据
- 数据和处理数据的函数应该在统一模块

## 组件之间通信方式

### props

- 在组件内声明所有的 props，在传递过程中，除了字符串，传递其他数据没有强制绑定数据都会报错
  - 只指定名称
  - 指定名称与类型
  - 指定名称/类型/必要性/默认值
- 使用注意
  - 此方法适用于父组件向子组件传递数据
  - 所有标签属性都会成为组件对象的属性，模板页面可以直接引用
  - 存在缺陷，如果非要向后代组件传递，必须多层传递，兄弟间组件不能直接 props 通信，需借助父组件才可以

### 自定义事件

- 绑定事件监听并触发事件
- 使用注意
  - 只适用于子组件向父组件发送数据
  - 隔代组件或兄弟组件不适用

绑定事件 v-on:xxx="xxxFunction",利用函数处理绑定事件,利用`$emit(xxx,data)`触发事件,前者为事件名，后者为参数(父子组件间的通信)  
sync修饰符简化，:xxx.sync="xxx" 等价于 :xxx="xxx", @update:xxx="xxxFunction",只不过在需要`$emit('update:xxx',data)`传参，格式固定，可以省略绑定函数  

利用`$on`监听事件，组件也是 vue 实例，所以可以使用,相当于 vm.\$on，可以用`ref="xxx"`给组件标记，在生命周期 mounted 中使用`$refs.xxx.$on('addTodo',this.addTodo)`绑定事件,最后在利用`$emit(addTodo,todo)`触发事件

### 订阅与发布

订阅消息与触发布消息(异步操作要在 mounted 中使用)

- 安装 npm install --save pubsub-js
- 订阅消息相当于 绑定事件监听
- 发布消息相当于 触发事件
- 可以跨组件通信，无论兄弟，父子，子孙都可以

### vuex

后续详解

### 插槽

slot

- 在 2.6 版本之后被舍弃但仍然能用，新版本使用 v-slot:简写#
- 旧版结构：
- 子组件 child：

````html
<template>
    <div>
    <div>确定内容</div>
    <slot name="xxx">不确定内容</slot>
    <slot name="yyy">不确定内容</slot>
    </div>
    <template>
    - 父组件：
    <template>
        <child>
        <div slot="xxx"></div>
        <div slot="yyy"></div>
        </child>
        </template>
    </template>
</template>
````

相应的属性,方法也应该在父组件中定义使用
