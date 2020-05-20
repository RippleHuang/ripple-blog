---
title: vue 基本用法
date: 2020-03-27
categories:
 - vue框架
tags:
 - vue
---

::: tip
vue的模板语法,计算属性与监听,clss与style绑定,条件渲染,列表渲染,事件处理
:::

<!-- more -->

## vue基本使用

1. 引入 vue.js 文件
2. 创建一个 vue 对象
3. 双向数据绑定 ：`v-model="xxx"`
4. 显示数据：双括号
5. 大括号表达式： 读取 data 中的数据显示
6. 数据绑定与双向数据绑定：
   - 数据绑定：数据在页面与内存中的变量自动转移
   - 双向数据绑定: 两个方向的数据都可以自动转移

当 data 中的数据改变时，视图会进行重渲染
当实例被创建时就已经存在于 data 中的属性才是响应式的
添加一个新的属性，改动不会触发任何视图的更新，需要在 data 中设置一些初始值

Vue 实例还暴露了一些实例属性与方法前缀`$`与用户定义的属性区分开来`$el`,`$data`,`$watch` 等等

## 模板语法

1. 模板的理解：
    动态 html 页面包含了一些 js 语法代码
     - 双括号表达式
     - 指令(以 v-开头自定义标签属性)
2. 双括号表达式
    语法 双大括号
    功能
     - 向页面输出数据
     - 可以调用对象的方法
     - 注意：一定要有结果
3. 指令——：强制绑定数据
    功能： 指定变化的属性
    写法：
     - 完整写法 `v-bind：xxx = 'yyy'` yyy 会作为表达式解析
     - 简写 `:xxx = 'yyy'`
4. 指令二：绑定监听事件
    功能：绑定监听事件名的回调函数
    写法
     - 完整写法：`v-on:click = 'xxx'`
     - 简写： `@click = 'xxx'`
    函数写在： methods 中
     - 可以传参数(可以是 data 里的数据)：
       - `v-on:click = 'xxx('')'`
       - `@click = 'xxx('')'`
       - 在()中书写参数

## 计算属性与监听

计算属性 computed

- 作用 ：

1. 减少模板中的计算逻辑
2. 进行数据缓存
3. 响应式数据

- 使用：

1. 在 computed 属性对象中定义计算属性的方法
2. 在页面中使用模板语法来显示计算的结果
3. 通过 getter/setter 实现数据的显示与监视
  
侦听器 watch

- 作用 ：比 computed 更灵活

1. 可以执行任何逻辑，如函数节流，ajax 异步请求，操作 dom
2. 响应式数据

- 使用 ：

1. 通过 vm 对象的`$watch`或 watch 配置来监视指定的属性
2. 当属性变化时回调函数自动调用，在函数内部进行计算

总结：

- computed 能做的，watch 都可以做，反之不行
- 能用 computed 尽量用 computed
- computed 是计算一个新属性并挂载在 vm 对象上，watch 是监听已有的已经挂载在 vm 对象上的数据，watch 也可以监视 computed 的变化，其他的还有 data，props
- computed 本质是惰性求值的观察者，具有缓存性只有当依赖变化第一次访问 computed 才会计算数据，而 watch 则当数据变化就会执行函数
- 使用场景：computed 适用一个数据被多个数据影响，watch 适用一个数据影响多个数据

## class 与 style 绑定

1. 理解
   在应用界面中，某些（个）元素的样式是变化的，class/style 绑定就是专门用来实现动态样式效果的技术
2. class 绑定： `:class='xxx'`
   - `xxx` 是字符串
   - `xxx`是数组
   - `xxx` 是对象
   - 与静态 class 效果合并若样式冲突则计算 css 权重
3. style 绑定： `:style='{color:active,fontSize:font}'`
   其中 active 和 font 是 data 属性

## 条件渲染指令

1. 指令
   - `v-if`
   - `v-else`
   - `v-show`
2. 比较 `v-if`与 `v-show`
   - 如果需要频繁切换 `v-show` 比较好
   - `v-if` 是移除标签，`v-show` 是 `display：none`

## 列表渲染

1. 列表显示
   - 数组：`v-for / index`
   - 对象：`v-for / key`
2. 列表的更新显示
   - 调用变异的数组方法 splice（vue 重写），splice 可以实现增删改
   - vue 重写了数组中的一系列改变数组内部数据的方法(先调用原生，更新界面)

## 列表的搜索与排序

1. 代码：

```html
<div id="app6">
  <input type="text" v-model="seachName" />
  <h2>列表的搜索与排序</h2>
  <ul>
    <li v-for="(p, index) in filterPersons" :key="index">
      {{index}}----{{p.name}}----{{p.age}}
    </li>
  </ul>
  <button @click="setOrderType(2)">年龄升序</button>
  <button @click="setOrderType(3)">年龄降序</button>
  <button @click="setOrderType(1)">原本顺序</button>
</div>
```

::: details 点击查看代码

```js
new Vue({
  el: "#app6",
  data: {
    seachName: "",
    orderType: 1, //自己设置： 1代表原本 2代表升序 3代表降序
    persons: [
      { name: "abc", age: 18 },
      { name: "bcde", age: 19 },
      { name: "cdef", age: 20 },
      { name: "defg", age: 21 },
    ],
  },
  computed: {
    filterPersons() {
      //取出相关的数据，能用const是每次计算都能更新
      const { seachName, persons, orderType } = this;

      //最终需要显示的数组
      let fPersons;
      //对persons进行过滤
      fPersons = persons.filter((p) => p.name.indexOf(seachName) !== -1);
      //排序
      if (orderType !== 1) {
        fPersons.sort(function(p1, p2) {
          //若返回负数p1在前，返回正数p2在前
          //2代表升序 3代表降序
          if (orderType === 3) {
            return p2.age - p1.age;
          } else {
            return p1.age - p2.age;
          }
        });
      }
      return fPersons;
    },
  },
  methods: {
    setOrderType(orderType) {
      this.orderType = orderType;
    },
  },
});
```

:::

## 事件处理

1. 代码：

```html
<div id="app7">
  <h2>1.绑定监听</h2>
  <button @click="testVon">绑定监听</button>
  <button @click='testVon1("abc")'>绑定监听</button>
  <button @click="testVon2">绑定监听</button>
  <button @click="testVon3(123,$event)">绑定监听</button>
  <h2>2.事件修饰符</h2>
  <div style="width: 100px;height: 100px;background-color: red;" @click="out">
    <!-- 阻止事件冒泡只需@click.stop就可以 -->
    <div
      style="width: 50px;height: 50px;background-color: blue;"
      @click.stop="inner"
    ></div>
  </div>
  <!-- 阻止事件默认行为只需@click.prevent就可以 -->
  <a href="http://www.baidu.com" @click.prevent="aClick">去百度</a>
  <h2>3.按键修饰符</h2>
  <!-- 想要满足某个按键要求，只需后加上keyCode对应的值，或者直接书写这个按键 -->
  <input type="text" @keyup.13="keyUp" />
  <input type="text" @keyup.enter="keyUp" />
</div>
```

::: details 点击查看代码

```js
new Vue({
  el: "#app7",
  data: {},
  methods: {
    testVon() {
      alert("test");
    },
    testVon1(value) {
      alert(value);
    },
    testVon2(event) {
      alert(event.target.innerHTML);
    },
    testVon3(number, event) {
      alert(number + " " + event.target.innerHTML);
    },
    out() {
      alert("out");
    },
    inner() {
      alert("inner");
    },
    aClick() {
      alert("点击了");
    },
    keyUp(event) {
      //原生写法
      // if(event.keyCode === 13){
      //     alert(event.target.value)
      // }
      alert(event.target.value);
    },
  },
});
```

:::

## 表单数据的自动收集

```html
<div id="app8">
  <h2>表单数据的自动收集</h2>
  <form action="" @submit.prevent="handSumit">
    <span>用户名：</span>
    <input type="text" v-model="username" /><br />
    <span>密码：</span>
    <input type="password" v-model="password" /><br />
    <span>性别：</span>
    <input type="radio" id="female" value="女" v-model="sex" />
    <label for="female">女</label>
    <input type="radio" id="male" value="男" v-model="sex" />
    <label for="male">男</label><br />
    <span>爱好：</span>
    <input type="checkbox" id="basket" value="basket" v-model="likes" />
    <label for="basket">篮球</label>
    <input type="checkbox" id="foot" value="foot" v-model="likes" />
    <label for="foot">足球</label>
    <input type="checkbox" id="pingpang" value="pingpang" v-model="likes" />
    <label for="pingpang">乒乓</label><br />
    <span>城市：</span>
    <select v-model="cityId">
      <option value="">未选择</option>
      <option :value="city.id" v-for="(city, index) in allCitys" :key="index"
        >{{city.name}}</option
      > </select
    ><br />
    <span>介绍：</span>
    <textarea cols="30" rows="10" v-model="desc"></textarea><br /><br />
    <input type="submit" value="注册" />
  </form>
</div>
```

::: details 点击查看代码

```js
new Vue({
  el: "#app8",
  data: {
    username: "",
    password: "",
    sex: "女",
    likes: ["foot"],
    allCitys: [
      { id: 1, name: "BJ" },
      { id: 2, name: "SH" },
      { id: 3, name: "SZ" },
    ],
    cityId: "1",
    desc: "你好",
  },
  methods: {
    handSumit() {
      console.log(
        this.username +
          " " +
          this.password +
          " " +
          this.sex +
          " " +
          this.likes +
          " " +
          this.allCitys +
          " " +
          this.cityId +
          " " +
          this.desc
      );
    },
  },
});
```

:::
