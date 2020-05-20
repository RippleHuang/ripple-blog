---
title: vue router
date: 2020-04-04
categories:
  - vue框架
tags:
  - vue
  - vue router
---

::: tip
vue的路由,概念,基本路由,动态路由,路由守卫
:::

<!-- more -->

## 概念

- 官方路由管理器，核心深度集成，让构建单页面应用变的更加轻松
- 功能
  - 嵌套的路由/视图表
  - 模块化的、基于组件的路由配置
  - 路由参数、查询、通配符
  - 基于 Vue.js 过渡系统的视图过渡效果
  - 细粒度的导航控制
  - 带有自动激活的 CSS class 的链接
  - HTML5 历史模式或 hash 模式，在 IE9 中自动降级
  - 自定义的滚动条行为
- 总结
  - 将组件(components)映射到路由，通过 vue-router 来控制在哪渲染
  - 组件与组件之间可以通过路由来进行灵活切换
  - 在切换过程中可以进行各种参数传递，权限控制

## 简单使用 vue-router

- html 部分
  - 使用 router-link 组件来导航，通过 to 属性指定链接，router-link
    默认会渲染成为 a 标签
  - 路由出口：router-view 路由匹配到的组件将渲染在这里
- js 部分
  - 如果使用模块化编程，需导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)
  - 定义（路由）组件 `const Foo = { templete：'<div>Foo</div>'}`或者 import 其他组件
  - 定义路由：每个路由应该映射一个组件，其中 component 可以是
  1. 通过 Vue.extend()创建的组件构造起
  2. 组件配置对象
  3. redirect:'/foo'，默认打开/foo

  ```js
      const routes = [
          { path: '/foo', component: Foo },
          { path: '/bar', component: Bar }，
          {path:'/',redirect:'/foo'}
      ]
  ```

  - 创建 router 实例，然后传 routes 配置

  ```js
  const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
  });
  ```

  - 创建和挂载根实例

  ```js
  const app = new Vue({
    router,
  }).$mount("#app");
  ```

- 在任何组件内通过
  - this.\$router 访问路由器
  - this.$route访问当前路由,this.$route.params 为路由路径
- 当 `<router-link>`对应的路由匹配成功时

  - 将自动设置 class 属性 router-link-active

## vue-cli 使用 vue-router

### 安装

> npm install vue-router --save

### 基本配置

- 初始化工程
  - vue create xxx
  - npm i vue-router -S
  - npm ren serve
  - 在创建工程中可以直接勾选 router 直接默认配置
- 路由默认配置
  router.js：

  ```js
  import Vue from "vue";
  import VueRouter from "vue-router";
  Vue.use(VueRouter);
  export default new VueRouter({
    routes: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/",
        redirect: "/about",
      },
    ],
  });
  ```

  main.js:

  ```js
  import router from "./router";
  new Vue({
    //配置对象的属性名都是一些确定的名称，不能随便修改
    router,
    render: (h) => h(App),
  });
  ```

- 使用路由组件标签

1. `<router-link>`:用来生成路由链接
路由导航：`<router-link></router-link>`
2. `<router-view>`:用来显示当前路由的组件界面
路由出口：`<router-view></router-view>`,必须有出口

### history 模式

- 概念
  - vue-router 默认 hash 模式，url 后用#后面为定位路由，对 seo 不利，设置 history 模式，就可以使用普通的 url 模式
  - history 和普通 url 模式，利用了 history.pushState API 来完成 URL 跳转而无需重新加载页面，修改的只是 URL 中的 hash，则不会导致页面被刷新
- 使用
  - 在 router.js 中设置
    `export default new VueRouter({mode:'history',routes:[]})`
- history 与 hash 区别
  - hash 模式 url 带#号，而 history 没有
  - url 规范，则用 history 模式
  - 有些 app 里面 url 是不允许带#号，需要 history 模式
  - history 模式有一个问题，在访问二级页面时，做刷新操作，会出现 404 错误，需要与后台配置一下 apache 或 nginx 的 url 重定向，重定向到你的首页路由，hash 没问题
  - 版本支持，hash 兼容性好，history 是 html5 推出的 api

## 基本路由

存放在路由文件夹下，分为两大类文件夹，路由文件夹以及非路由文件夹  
非路由文件夹为 components,路由文件夹为 views 或 pages  

路由器需要创建文件夹 router

路由器

```js
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
    {
        path: "/about",
        component: About,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/",
        redirect: "/about",
    },
    ],
});
```

在 main.js 中引入路由器

```js
import router from "./router";
new Vue({
    //配置对象的属性名都是一些确定的名称，不能随便修改
    router,
    render: (h) => h(App),
});
```

`<router-link>`路由链接
`<router-view>`路由组件显示

## 缓存路由

理解

- 默认情况下，被切换的路由组件对象会死亡释放，再次回来时是重新创建
- 如果可以缓存路由组建对象，可以提高用户体验

实现 用 keep-alive 标签包裹 router-view 标签

- `<keep-alive><router-view></router-view></keep-alive>`

## 嵌套路由

概念：一级界面可以通过嵌套路由配置二级界面切换  

需要在 VueRouter 的参数中使用 children 配置 可以多层嵌套

```js
routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile,
          children: [
              {
                  ....
              }
          ]

        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
]
```

## 动态路由匹配

概念：进入对应的路由，需要参数传递

```js
routes: [
  // 动态路径参数 以冒号开头,后面为参数
  { path: "/user/:id", component: User },
];
```

路径参数

- 使用冒号 : 标记
- 当匹配到一个路由时，参数值会被设置到 `this.$route.params` 中
- 通过点调用这个参数，如上面例子中 `this.$route.params.id`
- 可以设置多段 `/user/:id/post/:post_id`
除了路径参数（`$route.params`）还有

- 如果 URL 中有查询参数 \$route.query
- 如果 URL 中有哈希 \$route.hash

响应路由参数的变化

- 复用组件时，想对路由参数的变化作出响应的话使用 watch(监测变化)`$route`对象

  ```js
   $route: function(){
       // 对路由变化作出响应...
   }
  ```

路径中可以使用通配符
  
  > path: `'/user-/*'`

路由 `{ path: '/*' }` 通常用于客户端 404 错误  

当使用一个通配符时，\$route.params 内会自动添加一个名为 pathMatch 参数
  > path: `'/user-/*'`
  > 相当于 this.$router.push('/user-admin')
  > this.$route.params.pathMatch // 'admin'

匹配优先级：匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高

### 使用示例

- 冒号占位符
  - 冒号占位符: 后面跟属性名，可以多个 `path:'/user/:id/:name'` 传递数据,如`/user/123/456?hei=789&dog=aa`
  - 使用`$route.params` 得到数据`{id:'123',name:'456'}`
  - 使用`$route.path` 得到路径 `/user/123/456`
  - 使用`$toute.query` 得到 `{hei:'789',dog:'aa'}`
  - 在标签中`双大括号$route.params.id双大括号`得到 id，`双大括号$route.params.name双大括号`得到 name
- props 传参
  - 在路由配置中`path:'/user',component:User,props:{name:'123'}`传递参数
  - 在组件中设置 `props:['name']`定义参数
  - 在标签中`双大括号name双大括号`得到参数
- 结合
  - 在路由配置中`path:'/user/:id/:name',component:User,props:true`可以允许转成对应属性,可以与冒号占位符一起配合但是问号之后的不行
  - 在路由器中配置`path:'/user/:id/:name',component:User,props:func`可以设置函数
  - 测试路径 `/user/123/456?hei=789&dog=aa`
  - 函数`let func =({params,query})=>{return{id:params.id,name:params.name,hei:query.hei,dog:query.dog}}`处理参数
  - 在组件中设置 `props:['id','name','hei','dog']`定义参数
  - 在标签中`双大括号id双大括号``双大括号name双大括号``双大括号hei双大括号``双大括号dog双大括号`得到参数

## 编程式的导航

### router.push(location, onComplete?, onAbort?)

声明式

  > `<router-link :to="...">`

编程式

  > router.push(...)

在 Vue 实例内部可以通过 `$router` 访问路由实例可以调用 `this.$router.push`

- 想要导航到不同的 URL，则使用 router.push 方法
  - 这个方法会向 history 栈添加一个新的记录
  - 当用户点击浏览器后退按钮时，则回到之前的 URL
- 点击 `<router-link :to="...">` 等同于调用 router.push(...)
- 该方法的参数可以是
  - 字符串 `router.push('home')`
  - 对象 `router.push({ path: 'home' })`
  - 命名的路由 `router.push({ name: 'user', params: { userId: '123' }})`
  - 带查询参数，变成 `/register?plan=private`
    1. `router.push({ path: 'register', query: { plan: 'private' }})`
  - 提供了 path，则 params 会失效,query 并不属于这种情况

  ```js
  const userId = "123";
  router.push({ name: "user", params: { userId } }); // -> /user/123
  router.push({ path: `/user/${userId}` }); // -> /user/123
  // 这里的 params 不生效
  router.push({ path: "/user", params: { userId } }); // -> /user
  ```

  - 同样的规则也适用于 router-link 组件的 to 属性

### router.replace(location, onComplete?, onAbort?)

声明式

  > `<router-link :to="..."replace>`

编程式

  > router.replace(...)

在 Vue 实例内部可以通过 `$router` 访问路由实例可以调用 `this.$router.replace`

跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录而是替换掉当前的 history 记录

- router.go(n)
  - router.go(1) 在浏览器记录中前进一步，等同于 history.forward() ----`$router.forward()`
  - router.go(-1) 后退一步记录，等同于 history.back() --`$router.back()`
  - router.go(3) 前进 3 步记录

## 命名路由

通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候  
可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称
  > routes: [
  > {
       path: '/user/:userId',
       name: 'user',
       component: User
  }
  ]
要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象
  > `<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>`
这跟代码调用 router.push() 是一回事
  > router.push({ name: 'user', params: { userId: 123 }})

## 视图命名

界面中拥有多个同级 router-view，此时需要命名，没有命名默认为 default

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

components(多个需要带上 s) 配置

```js
const router = new VueRouter({
  routes: [
    {
      path: "/",
      components: {
        default: Foo,
        a: Bar,
        b: Baz,
      },
    },
  ],
});
```

## 重定向和别名

重定向也是通过 routes 配置来完成,从 /a 重定向到 /b
  > routes: [
      { path: '/a', redirect: '/b' }
  ]
重定向的目标

- 一个命名的路由:{ path: '/a', redirect: { name: 'foo' }}
- 是一个方法，动态返回重定向目标
    { path: '/a', redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
    }}
这里/a 的别名是 /b，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户 访问 /a 一样

相当于： `routes: [{ path: '/a', component: A, alias: '/b' }]`

## 路由组件传参

通过动态路由来传递参数，点调用
通过 router-view 属性传递参数
> `<router-view msg="abc">`

## 路由(导航)守卫

概念：通过路由守卫可以对每次刷新或进入的路由界面进行权限验证，相当于 React 的全局中间件

### 全局前置守卫

- 语法 `router.beforeEach((to, from, next) => { })`
  - to：Route：即将要进入的目标路由对象
  - from: Route: 当前导航正要离开的路由
  - next：Function：next(),参数: false 终端导航，'/'为{ path: '/' }简写，error，如果参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
- 使用

  ```js
  //全局路由前置守卫
  router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
      //验证是否登入
      if (window.isLogin) {
        //已经登入
        next();
      } else {
        //没有登入
        next("/login");
      }
    } else {
      //不需要验证
      next();
    }
  });
  //全局路由后置守卫
  router.afterEach((to, from) => {
    console.log("acb");
  });
  export default router;
  ```

### 全局解析守卫

- 语法`router.beforeResolve((to, from, next) => { })`
- 与 beforeEach 类似区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

### 全局后置钩子

- 语法`router.afterEach((to,from)=>{ })`
- 每次调用路由都会执行

### 路由独享的守卫

- 代码

```js
routes: [
  {
    path: "/foo",
    component: Foo,
    beforeEnter: (to, from, next) => {
      // ...
    },
  },
];
```

- 在路由器中起效果

### 完整的导航解析流程

- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫 (2.5+)。
- 导航被确认。
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数

### 异步组件

- 路由懒加载
  - 在引入组件时直接：`const Foo = () => import('./Foo.vue')`
