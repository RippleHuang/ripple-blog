---
title: vue Vuex
date: 2020-04-09
categories:
  - vue框架
tags:
  - vue
  - Vuex
---

::: tip
vue的组件通信 vuex, 概念, 组成
:::

<!-- more -->

## 单向数据流理念

- 组成部分
  - state，驱动应用的数据源
  - view，以声明的方式将 state 映射到视图
  - actions，响应在 view 上的用户输入导致的状态变化
- 结构： state -> view -> actions -> state 循环
- 传统数据通信存在的问题：当遇到多个组件共享状态是，单向数据流的简洁性很容易被破坏
  - 多个视图依赖同一状态：传参的方法对于多层嵌套组件会非常麻烦，并对兄弟组件间的状态无能为了
  - 来自不同视图的行为需要变更同一状态：经常采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝
- 解决问题的钥匙
  - 把组件的共享状态抽取出来，以一个全局单例模式管理
  - 这种模式下，项目中的组件树构成了一个巨大的视图，不管在哪个位置，组件都能获取或者触发行为
  - vuex

## vuex 是什么

- 专门为 vue.js 应用程序开发的状态管理模式
- 采用集中式存储管理应用的所有组件的共享状态
- vuex 相当于一个数据银行，对 vue 应用中多个组件的共享状态进行集中式的管理（读写）

## vuex 的组成

- 结构：
  - state ---> vue components(view) (dispatch) ---> actions (commit) ---> mutations
  - mutations ---> state 单向循环
  - actions 与后台接口双向， mutations 与开发工具双向
  - state，actions，mutations 组成 vuex，这里数据单向
  - vue component，后台接口，开发工具都与 vuex 双向
  - 同步操作不需要经过 actions，直接从 vue components 到 mutations，异步要

## 安装

- npm install vuex --save

## state

- vuex 的 状态管理对象
- 它应该是唯一的
  
  > const state ={ xxx:initValue}

## mutations

- 包含多个直接更新 state 的方法(回调函数)的对象
- 谁来触发 ：action 中的 commit（mutation 名称）
- 只能包含同步的代码，不能写异步代码
  
  > const mutations ={yyy(state,data){//更新 state 的每个属性} }

## actions

- 包含多个事件回调函数的对象
- 通过执行 commit()来触发 mutation 的调用，间接的更新 state
- 谁来触发 组件中：`$store.dispatch('action 名称')`
- 可以包含异步代码(定时器，ajax)

  > const actions ={ zzz({commit,state},data1){commit('yyy',data2)}}

## getter

- 包含多个计算属性 get 的对象
- 谁来读取 组件中 `$store.getters.xxx`
  
  > const getter ={mmm(state){return...}}

## modules

- 包含多个 modules
- 一个 module 是一个 store 的配置对象
- 与一个组件(包含有共享数据)对应

## 界面读取

- mapAction
- mapState
- mapGetter

## 向外暴露 store 对象

export default new Vuex.Store({
state,
mutations,
action,
getter
})

## 映射 store

import store from './store'
new Vue({
store
})

## store 对象

- 所有用 vuex 管理的组件中都多了一个属性\$store，它就是一个 store 对象
- 属性 state 注册 state 对象 getter 注册 getter 对象
- 方法 dispatch(actionName,data):分发调用 action
