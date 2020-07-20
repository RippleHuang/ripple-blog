(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{654:function(t,a,e){"use strict";e.r(a);var v=e(4),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[t._v("vue的组件通信 vuex, 概念, 组成")])]),t._v(" "),e("h2",{attrs:{id:"单向数据流理念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流理念"}},[t._v("#")]),t._v(" 单向数据流理念")]),t._v(" "),e("ul",[e("li",[t._v("组成部分\n"),e("ul",[e("li",[t._v("state，驱动应用的数据源")]),t._v(" "),e("li",[t._v("view，以声明的方式将 state 映射到视图")]),t._v(" "),e("li",[t._v("actions，响应在 view 上的用户输入导致的状态变化")])])]),t._v(" "),e("li",[t._v("结构： state -> view -> actions -> state 循环")]),t._v(" "),e("li",[t._v("传统数据通信存在的问题：当遇到多个组件共享状态是，单向数据流的简洁性很容易被破坏\n"),e("ul",[e("li",[t._v("多个视图依赖同一状态：传参的方法对于多层嵌套组件会非常麻烦，并对兄弟组件间的状态无能为了")]),t._v(" "),e("li",[t._v("来自不同视图的行为需要变更同一状态：经常采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝")])])]),t._v(" "),e("li",[t._v("解决问题的钥匙\n"),e("ul",[e("li",[t._v("把组件的共享状态抽取出来，以一个全局单例模式管理")]),t._v(" "),e("li",[t._v("这种模式下，项目中的组件树构成了一个巨大的视图，不管在哪个位置，组件都能获取或者触发行为")]),t._v(" "),e("li",[t._v("vuex")])])])]),t._v(" "),e("h2",{attrs:{id:"vuex-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex-是什么"}},[t._v("#")]),t._v(" vuex 是什么")]),t._v(" "),e("ul",[e("li",[t._v("专门为 vue.js 应用程序开发的状态管理模式")]),t._v(" "),e("li",[t._v("采用集中式存储管理应用的所有组件的共享状态")]),t._v(" "),e("li",[t._v("vuex 相当于一个数据银行，对 vue 应用中多个组件的共享状态进行集中式的管理（读写）")])]),t._v(" "),e("h2",{attrs:{id:"vuex-的组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的组成"}},[t._v("#")]),t._v(" vuex 的组成")]),t._v(" "),e("ul",[e("li",[t._v("结构：\n"),e("ul",[e("li",[t._v("state ---\x3e vue components(view) (dispatch) ---\x3e actions (commit) ---\x3e mutations")]),t._v(" "),e("li",[t._v("mutations ---\x3e state 单向循环")]),t._v(" "),e("li",[t._v("actions 与后台接口双向， mutations 与开发工具双向")]),t._v(" "),e("li",[t._v("state，actions，mutations 组成 vuex，这里数据单向")]),t._v(" "),e("li",[t._v("vue component，后台接口，开发工具都与 vuex 双向")]),t._v(" "),e("li",[t._v("同步操作不需要经过 actions，直接从 vue components 到 mutations，异步要")])])])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("ul",[e("li",[t._v("npm install vuex --save")])]),t._v(" "),e("h2",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" state")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("vuex 的 状态管理对象")])]),t._v(" "),e("li",[e("p",[t._v("它应该是唯一的")]),t._v(" "),e("blockquote",[e("p",[t._v("const state ={ xxx:initValue}")])])])]),t._v(" "),e("h2",{attrs:{id:"mutations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutations"}},[t._v("#")]),t._v(" mutations")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("包含多个直接更新 state 的方法(回调函数)的对象")])]),t._v(" "),e("li",[e("p",[t._v("谁来触发 ：action 中的 commit（mutation 名称）")])]),t._v(" "),e("li",[e("p",[t._v("只能包含同步的代码，不能写异步代码")]),t._v(" "),e("blockquote",[e("p",[t._v("const mutations ={yyy(state,data){//更新 state 的每个属性} }")])])])]),t._v(" "),e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" actions")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("包含多个事件回调函数的对象")])]),t._v(" "),e("li",[e("p",[t._v("通过执行 commit()来触发 mutation 的调用，间接的更新 state")])]),t._v(" "),e("li",[e("p",[t._v("谁来触发 组件中："),e("code",[t._v("$store.dispatch('action 名称')")])])]),t._v(" "),e("li",[e("p",[t._v("可以包含异步代码(定时器，ajax)")]),t._v(" "),e("blockquote",[e("p",[t._v("const actions ={ zzz({commit,state},data1){commit('yyy',data2)}}")])])])]),t._v(" "),e("h2",{attrs:{id:"getter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" getter")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("包含多个计算属性 get 的对象")])]),t._v(" "),e("li",[e("p",[t._v("谁来读取 组件中 "),e("code",[t._v("$store.getters.xxx")])]),t._v(" "),e("blockquote",[e("p",[t._v("const getter ={mmm(state){return...}}")])])])]),t._v(" "),e("h2",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" modules")]),t._v(" "),e("ul",[e("li",[t._v("包含多个 modules")]),t._v(" "),e("li",[t._v("一个 module 是一个 store 的配置对象")]),t._v(" "),e("li",[t._v("与一个组件(包含有共享数据)对应")])]),t._v(" "),e("h2",{attrs:{id:"界面读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#界面读取"}},[t._v("#")]),t._v(" 界面读取")]),t._v(" "),e("ul",[e("li",[t._v("mapAction")]),t._v(" "),e("li",[t._v("mapState")]),t._v(" "),e("li",[t._v("mapGetter")])]),t._v(" "),e("h2",{attrs:{id:"向外暴露-store-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向外暴露-store-对象"}},[t._v("#")]),t._v(" 向外暴露 store 对象")]),t._v(" "),e("p",[t._v("export default new Vuex.Store({\nstate,\nmutations,\naction,\ngetter\n})")]),t._v(" "),e("h2",{attrs:{id:"映射-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#映射-store"}},[t._v("#")]),t._v(" 映射 store")]),t._v(" "),e("p",[t._v("import store from './store'\nnew Vue({\nstore\n})")]),t._v(" "),e("h2",{attrs:{id:"store-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store-对象"}},[t._v("#")]),t._v(" store 对象")]),t._v(" "),e("ul",[e("li",[t._v("所有用 vuex 管理的组件中都多了一个属性$store，它就是一个 store 对象")]),t._v(" "),e("li",[t._v("属性 state 注册 state 对象 getter 注册 getter 对象")]),t._v(" "),e("li",[t._v("方法 dispatch(actionName,data):分发调用 action")])])])}),[],!1,null,null,null);a.default=s.exports}}]);