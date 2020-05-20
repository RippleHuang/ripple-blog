---
title: vue 进阶用法
date: 2020-03-29
categories:
 - vue框架
tags:
 - vue
---

::: tip
vue的生命周期,过渡与动画,过滤器,指令,插件,组件
:::

<!-- more -->

## 生命周期

1. 实例生命周期钩子
   - Vue 实例在被创建时都要经过一系列的初始化过程
   - 设置数据监听
   - 编译模板
   - 将实例挂载到 DOM 并在数据变化时更新 DOM
   - 这个过程中会运行一些叫做生命周期钩子的函数用户可以在不同阶段添加自己的代码
2. 图片：
   ![生命周期](../../.vuepress/public/assets/img/lifecycle.png "生命周期")
3. 不要在选项属性或回调上使用箭头函数
   因为箭头函数并没有 `this` 会作为变量一直向上级词法作用域查找，直至找到为止，经常导致 `Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function` 之类的错误。
4. vue 对象的生命周期
   - 初始化显示
     - `beforeCreate()`
     - `created()`
     - `beforeMount()`
     - `mounted()`
   - 更新显示
     - `beforeUpdate()`
     - `updated()`
   - 销毁 vue 实例： `vm.$destory()`
     - `beforeDestory()`
     - `destoryed()`
5. 常用的生命周期方法
   - `created()/mounted()`:发送 ajax 请求，启动定时器等异步任务
   - `beforeDestory()`：做收尾工作，如清除定时器

## 过渡与动画

1. 在进入/离开的过渡中，会有 6 个 class 切换
   - v-enter：定义进入过渡的开始状态.在元素被插入之前生效.在元素被插入之后的下一帧移除。
   - v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
   - v-enter-to：2.1.8 版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
   - v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
   - v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
   - v-leave-to：2.1.8 版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
2. 配合 `<transition name="v">` 使用，这里的 v 对应 class 中的 v，可以自定义
3. CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除
4. 自定义 transition 的类名，配合第三方插件

```json
 enter-class
 enter-active-class
 enter-to-class (2.1.8+)
 leave-class
 leave-active-class
 leave-to-class (2.1.8+)
```

```html
<transition
  name="custom-classes-transition"
  enter-active-class="animated tada"
  leave-active-class="animated bounceOutRight"
>
  <p v-if="show">hello</p>
</transition>
```

可以在 transition 属性中声明 JavaScript 钩子,在 methods:{}中定义并调用这些方法

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
```

```js
 methods: {
     // --------
     // 进入中
     // --------

     beforeEnter: function (el) {
         // ...
     },
     // 当与 CSS 结合使用时
     // 回调函数 done 是可选的
     enter: function (el, done) {
         // ...
         done()
     },
     afterEnter: function (el) {
         // ...
     },
     enterCancelled: function (el) {
         // ...
     },

     // --------
     // 离开时
     // --------

     beforeLeave: function (el) {
         // ...
     },
     // 当与 CSS 结合使用时
     // 回调函数 done 是可选的
     leave: function (el, done) {
         // ...
         done()
     },
     afterLeave: function (el) {
         // ...
     },
     // leaveCancelled 只用于 v-show 中
     leaveCancelled: function (el) {
         // ...
     }
 }
```

这些钩子函数可以结合 CSS transitions/animations 使用，也可以单独使用。当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。

## 过滤器

格式：

```html
<!-- 在双括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

可以在一个组件的选项中定义本地的过滤器

```js
  filters: {
      capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
      }
  }
```

或者在创建 Vue 实例之前全局定义过滤器：

```js
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  // ...
});
```

当全局过滤器和局部过滤器重名时，会采用局部过滤器  
过滤器可以串联：大括号 message | filterA | filterB 大括号

## 指令

1. 内置指令

- `v-text`: 更新元素的的 textContent
- `v-html`： 更新元素的 innerHTMl，不建议使用，容易遭到攻击
- `v-if`：若为 true，当前页面才会输出到页面
- `v-else`：若为 false，当前页面才会输出到页面
- `v-show`：通过控制 display 来控制显示隐藏
- `v-for`：遍历数组/对象
- `v-on`：绑定监听
- `v-bind`：强制绑定解析表达式
- `v-model`：双向数据绑定
  - `<input v-model="searchText">`等价于
    `<input :value="searchText" @input="searchText = \$event.target.value">`
- `ref`：唯一指定标识，vue 通过\$els 属性访问这个元素对象
- `v-pre` 跳过这个元素和他子元素的编译过程，如`<p v-pre>大括号conent大括号</p>`这时不会编译，直接显示大括号 conent 大括号
- `v-once` 只渲染元素和组件一次，之后的渲染会跳过这个元素和组件以及素有子节点，视为静态页面
- `v-cloak`：防止闪现，与 css 配合`[v-cloak]{display:none}`
  模板语法这种在 vue 实例还没加载完全是会显示，而通过 `v-cloak`：
  可以防止闪现，利用 `<p v-text='msg'></p>`原理实现 2.自定义指令

```js
//全局指令 el:指令属性所在的标签对象 binding：包含指令相关信息数据的对象
//使用指令 V-upper-text='xxx'
Vue.directive("upper-text", function(el, binding) {
  el.innerHTML = binding.value.toUpperCase();
});
```

```js
new Vue({
  el: "#app5",
  data: {
    msg: "adc",
    msg1: "ABC",
  },
  //局部指令 el:指令属性所在的标签对象 binding：包含指令相关信息数据的对象
  directives: {
    "lower-text"(el, binding) {
      el.textContent = binding.value.toLowerCase();
    },
  },
  methods: {
    hint() {
      alert(this.$refs.content.textContent);
    },
  },
});
```

## 插件

新建一个 js 文件：vue-myPlugin.js

```js
//vue的插件库
(function() {
  //需要向外暴露的插件对象
  const MyPlugin = {};
  //插件对象必须有一个install()
  MyPlugin.install = function(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function() {
      // 逻辑...
      console.log("456");
    };

    // 2. 添加全局资源
    Vue.directive("my-directive", function(el, binding) {
      el.textContent = binding.value.toUpperCase();
    });

    // 3. 注入组件选项
    Vue.mixin({
      created: function() {
        // 逻辑...
      },
    });

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
      // 逻辑...
      console.log("123");
    };
  };
  window.MyPlugin = MyPlugin;
})();
```

在页面中引入这个 js 文件，注意必须在 vue.js 后面  
在所需要的地方：

```js
//声明使用插件
Vue.use(MyPlugin);
Vue.myGlobalMethod();
const vmm = new Vue({
  el: "#app6",
  data: {
    msg: "abddd",
  },
});
vmm.$myMethod();
```

```html
<div id="app6">
  <h2>插件</h2>
  <p v-my-directive="msg"></p>
</div>
```

## 组件

::: details 点击查看代码

```js
// 全局定义一个名为 button-counter 的新组件
//组件命名 kebab-case 或者 PascalCase 后者第一个字母大写
//在组件中书写的内容不生效，需要通过插槽<slot></slot>分发内容
//每个组件必须只有一个根元素,不同标签同级会报错，必须在外层包裹大容器如div
Vue.component("button-counter", {
  //通过 Prop 向子组件传递数据
  //Prop 是你可以在组件上注册的一些自定义 attribute
  //props 选项
  props: ["title"],
  data: function() {
    return {
      count: 0,
    };
  },
  //template中也可以使用模板语法
  template: `
            <div>
            <button @click="count++">点击 {{ count }}次  {{title}}</button>
            <slot></slot>
            </div>
        `,
});
Vue.component("blog-post", {
  //在正常使用v-model下，
  // <input
  // :value="searchText"
  // @input="searchText = $event.target.value"
  // >
  //当用在组件上时，v-model 则会这样
  //   <custom-input
  //   :value="searchText"
  //   @input="searchText = $event"
  //   ></custom-input>
  //为了组件正常使用v-model,必须自己定义一个value
  //可以传多个自定义 attribute
  props: ["post", "value"],
  //data必须为函数
  data: function() {
    return {
      count: 0,
    };
  },
  //也支持模板字符串
  //创建一个子组件
  //子组件可以通过调用内建的 $emit 方法 并传入enlarge-text事件来触发
  //想让 <blog-post> 组件决定要放大可以使用 $emit 的第二个参数来提供这个值
  //在其中书写<slot></slot>，组件内的内容有效
  template: `
            <div class="blog-post">
                <h3>{{ post.title }}</h3>
                <button @click="$emit('enlarge-text',0.1)">放大字体</button>
                <button @click="$emit('enlarge',0.2)">放大字体</button>
                <input :value="value" @input="$emit('input', $event.target.value)">
                <div v-html="post.content"></div>
                <slot></slot>
            </div>
        `,
});
new Vue({
  el: "#app7",
  data: {
    searchText: "123",
    //作为 :key的值，id应为唯一性，不然会报错但是不影响其遍历的结果
    title: [
      { id: 1, title: "abc" },
      { id: 2, title: "def" },
      { id: 3, title: "ghi" },
    ],
    posts: [
      { id: 4, title: "My journey", content: "vnb" },
      { id: 5, title: "Blogging", content: "vcv" },
      { id: 6, title: "Why Vue", content: "vncb" },
    ],
    postFontSize: 1,
  },
  methods: {
    //$emit 的第二个参数的值将会作为第一个参数传入这个方法
    onEnlargeText: function(event) {
      this.postFontSize += event;
    },
  },
});
```

:::

```html
<div id="app7" :style="{ fontSize: postFontSize + 'em' }">
  <h2>组件</h2>
  <button-counter v-for="value in title" :key="value.id" :title="value.title"
    ><p>{{searchText}}</p></button-counter
  >
  <!-- 为blog-post绑定enlarge-text事件-->
  <!--父级组件监听这个事件可以通过 $event 访问到被抛出的这个值-->
  <!-- 为blog-post绑定enlarge事件,这个事件处理函数是一个方法-->
  <blog-post
    v-for="post in posts"
    :key="post.id"
    :post="post"
    @enlarge-text="postFontSize += $event"
    @enlarge="onEnlargeText"
    v-model="searchText"
    ><p>{{searchText}}</p>
  </blog-post>
</div>
```

定义组件

- 组件命名 kebab-case 或者 PascalCase 后者第一个字母大写
- 在组件中书写的内容不生效，需要通过插槽`<slot></slot>`分发内容
- 组件可以复用，每个组件互不干扰
- 是可复用 vue 实例，除了 el 不能用，其他都可以使用如 data,computed、watch、methods
- 要用 data 的话，data 必须为函数

props

- 通过 Prop 向子组件传递数据 Prop 是可以在组件上注册的一些自定义 attribute
- 可以传多个自定义 attribute

template

- 每个组件必须只有一个根元素,不同标签同级会报错，必须在外层包裹大容器如 div
- 可以使用模板语法，也支持模板字符串
- 创建一个子组件可以通过调用内建的 `$emit` 方法 并传入组件上绑定的事件来触发
- 父级组件监听这个事件可以通过 $event 访问到被抛出的 `$emit` 第二个参数
- 为组件绑定事件,这个事件处理是一个方法 `$emit` 的第二个参数的值会作为第一个参数传入这方法
- 在其中书写`<slot></slot>`，组件内的内容有效
`v-model` 问题：在正常使用 `v-model` 下，

```html
//在正常使用v-model下，
<input :value="searchText" @input="searchText = $event.target.value" />
//当用在组件上时，v-model 则会这样
<custom-input :value="searchText" @input="searchText = $event"></custom-input>
```

为了组件正常使用 v-model,必须自己定义一个 value
  > props:['value']
  > 在 template 中
  > `<input :value="value" @input="$emit('input', $event.target.value)">`
动态组件：通过 vue 的元素 component 与:is 配合

- `<component :is="xxx"></component>`
- xxx 可以是组件的名字 或者是一个组件的选项对象
- 通过构造 vue 的实例，其中的 el，data，methods，生命周期钩子等等都是这个实例的选项
- 组件也是 vue 的实例，所以组件也有选项
- `<component :is="xxx"></component>`只能显示一个，对于 v-for 出来的组件其数据无法得到
- 类似 value 属性需要通过 prop 修饰才能正常使用
- 有些 html 标签可以出现在其内部是有严格限制的，无效的内容提升到外部最终渲染结果出错可以配合:is 来实现

```html
<table>
  <blog-post-row></blog-post-row>
</table>
<table>
  <tr is="blog-post-row"></tr>
</table>
```

可以通过外链使用组件

- xxx.vue 中 `<template>...</template>`
- `<script type="text/xxx-template">`
