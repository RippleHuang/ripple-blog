---
title: 项目中的积累
date: 2020-07-11
categories:
  - 项目
tags:
  - 项目
---

::: tip
项目中的积累
:::

<!-- more -->

## 登入业务的相关技术点

- http  是无状态的

1. 方式一:前端与后台不存在跨域问题

    - 通过 cookie 在客户端记录状态

    - 通过 session 在服务器记录状态

2. 方式二:前端与后台存在跨域问题

    - 通过token 方式维持状态
      - 客户端进行登入后由服务器验证之后，服务器生成的token值返回给客户端
      - 客户端存储token值，后续所有操作都携带token值来发送请求
      - 服务器验证token值

vue cli3

\- 移除了配置文件目录，config 和 build 文件夹；

\- 移除了 static 文件夹，新增 public 文件夹，并且 index.html 移动到 public 中；

\- 在 src 文件夹中新增了 views 文件夹，用于分类 视图组件 和 公共组件；

\- 部分命令行发生变化：创建项目、运行项目

## 判断图片是否加载完成的六种方式

### 一、load事件

```html
<!DOCTYPE HTML>
<html>
<head>
 <meta charset="utf-8">
<title>img - load event</title>`
</head>
<body>
   <img id="img1"src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg">
    <p id="p1">loading...</p>
    <script type="text/javascript">
img1.onload =function() {
p1.innerHTML ='loaded'

}
</script>
</body>
</html>
```

测试，所有浏览器都显示出了“loaded”，说明所有浏览器都支持img的load事件

### 二、readystatechange事件

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
<title>img - readystatechange event</title>

</head>

<body>

    <img id="img1"src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg">
    <p id="p1">loading...</p>
    <script type="text/javascript">
        img1.onreadystatechange = function () {
            if(img1.readyState=="complete"||img1.readyState=="loaded"){
              p1.innerHTML ='readystatechange:loaded'
}

}

</script>
</body>
</html>
```

 readyState为complete和loaded则表明图片已经加载完毕。测试IE6-IE10支持该事件，其它浏览器不支持。

### 三、img的complete属性

```html
<!DOCTYPE HTML>

<html>

<head>

    <meta charset="utf-8">

<title>img - complete attribute</title>

</head>

<body>

    <img id="img1"src="http://pic1.win4000.com/wallpaper/f/51c3bb99a21ea.jpg">

    <p id="p1">loading...</p>

    <script type="text/javascript">

        function imgLoad(img, callback) {

         var timer = setInterval(function() {

               if(img.complete) {`

                callback(img)

                clearInterval(timer)

                }

                }, 50)

                }

                imgLoad(img1,function() {

                p1.innerHTML('加载完毕')

                })

</script>

</body>

</html>
```

轮询不断监测img的complete属性，如果为true则表明图片已经加载完毕，停止轮询。该属性所有浏览器都支持。

### onload方法

通过向img标签添加onload属性，并填入相应的函数来执行后续的javascipt代码。如下代码例子中img元素默认是不显示的，通过onload判断加载完成后再将图片显示出来。

```html
<img class="pic1" onload="get(this)" src="..." style='display:none' />

<script type="text/javascript">
function get(ts){
	ts.style.display = 'block'; //显示图片
}</script>
```

优点：可以将javascript代码部分放置于页面的任何部分加载，并且可以用于多数任意图片上。使用比较简单，易理解。

缺点：必须在每个标签上都贴上onlaod属性，在某些无法直接操作HTML代码，或者需要代码精简的情况下不适用

### javascipt原生方法

选取指定ID的图片，通过onload指定回调方法，在图片加载完成后弹出“图片加载已完成”字样提示。

```html
<img id="pic1" src="..." />

<script language="JavaScript">
    document.getElementById("pic1").onload = function () {
        alert("图片加载已完成");
    }
</script>
```

优点：简单易用，不影响HTML代码。

缺点：只能指定一个元素，javascipt代码必须置于图片元素的下方

### jquery方法

为每个class为pic1的图片元素绑定事件，通过jquery的load方法，将元素渐现出来。

注意，不要在$(document).ready()里绑定load事件。

```html
<script type="text/javascript">
$(function(){
	$('.pic1').each(function() {
		$(this).load(function(){
			$(this).fadeIn();
		});
    });
})
</script>
```

优点：可以批量绑定元素事件，并且不影响HTML代码内容

缺点：需要jquery库的支持，代码需要放置到需要操作元素的下方。

## 所有图片加载完成

```js
export const imgLoadingAll = (pics) => {
  const picsAll = pics.map((imgurl) => {
    imgurl = imgurl + '?v=' + Math.random() // 仅是为了区分下不同的图片链接
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = imgurl
      img.onload = () => resolve(imgurl)
      img.onerror = () => reject(new Error(imgurl + ' load error'))
    })
  })
  Promise.all(picsAll).then(() => {
    console.log('load all success')
  }).catch((e) => {
    console.log(e)
  })
}
```

使用vue-cli脚手架快速生成的框架中，
src**同级目录**中有static文件夹
src**子文件夹**中有assets文件夹
在使用vue-lazyload，设置error或loading属性的图片路径时，

图片在assets文件夹，就需要使用require（）进行引入。

```js
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/123.gif'),
  attempt: 1
})
```

图片在static文件夹，就可以直接写路径了

```js
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../static/123.gif',
  attempt: 1
})
```

vue-lazyload是在main.js文件中引入，不会被webpack进行编译，src中的文件会被webpack编译，包括assets，assets文件夹中的图片地址，会在编译过程中改变。因此vue-lazyload无法正确获得图片地址，就不能显示图片了。

懒加载图片 v-lazy代替 src `v-lazy="imgUrl"` 并增加key属性，`:key="imgUrl"`解决了在none到block时不能正确显示

## 优化

- 图片尺寸要符合坑位大小
- 图片要进行压缩，最优采用webp格式
- 对图片使用懒加载
- 对非首屏的dom进行懒加载
- 对css请求进行合并
- 对js进行异步加载

为的就是快速让浏览器解析DOM, CSSOM, 从而进行渲染。

还有很多其他的优化方案，个人认为比较重要的就是缓存机制。

防抖：不管触发频率多大，都在停止触发之后的给定时间触发。
节流：不管触发频率多大，都以恒定频率触发。

## UI库样式的修改

可以定义一个全局样式覆盖组件内的样式

## 移动端事件

**1. click事件**

单击事件，类似于PC端的click，但在移动端中，连续click的触发有200ms ~ 300ms的延迟

**2. touch类事件**

触摸事件，有touchstart touchmove touchend touchcancel 四种之分

touchstart：手指触摸到屏幕会触发

touchmove：当手指在屏幕上移动时，会触发

touchend：当手指离开屏幕时，会触发

touchcancel：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件

**3. tap类事件**

触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件，有tap longTap singleTap doubleTap四种之分

tap: 手指碰一下屏幕会触发

longTap: 手指长按屏幕会触发

singleTap: 手指碰一下屏幕会触发

doubleTap: 手指双击屏幕会触发

**4. swipe类事件**

滑动事件，有swipe swipeLeft swipeRight swipeUp swipeDown 五种之分

swipe：手指在屏幕上滑动时会触发

swipeLeft：手指在屏幕上向左滑动时会触发

swipeRight：手指在屏幕上向右滑动时会触发

swipeUp：手指在屏幕上向上滑动时会触发

swipeDown：手指在屏幕上向下滑动时会触发

## flex 布局

父元素的flex-direction会影响子元素，子元素会继承

## css3动画性能优化--针对移动端卡顿问题

### 使用css，jquery，canvas制作动画

1. Canvas

优点：性能好，强大，支持多数浏览器（除了IE6、IE7、IE8），画出来的图形可以直接保存为 .png 或者 .jpg的图形；

缺点：依赖于HTML，只能通过脚本绘制图形，没有实现动画的API（依靠事件和定时器更新）；由于在 canvas 上以编程方式显示的文本其实就是位图，因此搜索爬行器将完全忽略文本。文本内容也无法被屏幕阅读器识别。

2. css3

优点：简单且与内容分离、css动画不触发layout和paint；（这些属性的修改不会触发layout和paint：backface-visibility、opacity、perspective、perspective-origin、transform）；

缺点：有浏览器兼容性问题、安卓手机会出现卡顿、受排版引擎的限制，与整个页面的dom结构息息相关。

3. JQuery

优点：没有兼容性问题

缺点：每一帧，都要进行repaint、recomposite（非常耗时）；

总结：在移动端动画效果上，使用css3动画要比jquery动画效率高的多。在安卓手机上表现尤其明显！所以移动端动画以css3动画为优先，jquery只能用来简单处理应用逻辑。css3动画是用来给内容布局加上特效的通用解决方案，但是在性能堪忧的移动浏览器上很可能会受排版性能所限，达不到理想的效果。而对性能有要求的特定场景，比如游戏，用canvas会有很大的提高。

### css3在移动端出现卡顿问题

css3制作的动画在ios上跑的66的，但是在安卓上有时会出现卡顿现象。不妨从下面几点找找问题。

a、是否导致layout
如果是，尽可能将动画元素absolute或者fixed化以避免影响文档树，以减少重排.

b、是否启用硬件加速
“用到了CSS3动画”和“开启了硬件加速”是两件事情，虽然前者有可能导致后者。
开启硬件加速在webkit中有神奇的万金油：opacity: 1;或者-webkit-backface-visibility: hidden;。

c、是否是有高消耗的属性（css shadow、gradients、background-attachment: fixed等）
有的话，图片也是一种选择。这算得上是用空间换时间的优化了。

d、repaint的面积
如果是，只好缩小动画面积了。这一步的优化有限;

e、尽量使用 transform 生成动画，避免使用 height,width,margin,padding 等；如以下例子1和例子2。

PS：使用 transform，浏览器只需要一次生成这个元素的位图，并在动画开始的时候将它提交给 GPU 去处理 。之后，浏览器不需要再做任何布局、 绘制以及提交位图的操作。从而，浏览器可以充分利用 GPU 的特长去快速地将位图绘制在不同的位置、执行旋转或缩放处理。简而言之，transform 动画由GPU控制，支持硬件加速，并不需要软件方面的渲染

### 动画过程有闪烁（一般出现在动画开始）

 解决方法：

```css
.cube {

   -webkit-backface-visibility: hidden;

   -moz-backface-visibility: hidden;

   -ms-backface-visibility: hidden;

   backface-visibility: hidden;

   -webkit-perspective: 1000;

   -moz-perspective: 1000;

   -ms-perspective: 1000;

   perspective: 1000;

   /* Other transform properties here */

}
```

在webkit内核的浏览器中，另一个行之有效的方法是

```css
.cube {

   -webkit-transform: translate3d(0, 0, 0);

   -moz-transform: translate3d(0, 0, 0);

   -ms-transform: translate3d(0, 0, 0);

   transform: translate3d(0, 0, 0);

  /* Other transform properties here */

}
```

## 方法

1、开启translateZ或 translate3d

```css
webkit-transform: translateZ(0);
-moz-transform: translateZ(0);
-ms-transform: translateZ(0);
-o-transform: translateZ(0);
transform: translateZ(0);

webkit-transform: translate3d(0,0,0);
-moz-transform: translate3d(0,0,0);
-ms-transform: translate3d(0,0,0);
-o-transform: translate3d(0,0,0);
transform: translate3d(0,0,0);
```

2、backface-visibility

```css
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
```

3、perspective

```css
-webkit-perspective:1000;
perspective:1000
```

4、运动元素的父级transform-style

```css
-webkit-transform-style: preserve-3d;
transform-style: preserve-3d;
```

### 单独提升层css属性

页面绘制的过程分为三个部分：layout、paint 和合成。layout负责计算 DOM 元素的布局关系，paint 负责将 DOM 元素绘制成位图，合成则负责将位图发送给 GPU 绘制到屏幕上。
当某个 DOM 元素开启硬件加速之后，浏览器会为此元素单独创建一个“层”。当有单独的层之后，此元素的repaint操作将只需要更新自己，不用影响到别人。
能够单独提升层的css属性有

```ccs
// 根元素
* position：absolute/relative ，+z-index(不为auto）
* display: flex|inline-flex +z-index(不为auto）
* position: fixed
* transform 不为 "none"
* -webkit-overflow-scrolling：touch
* opacity属性值小于 1 的元素
* mix-blend-mode属性值不为 "normal"的元素
* filter值不为“none”的元素
* perspective值不为“none”的元素
* isolation 属性被设置为 "isolate"的元素
* will-change
```

### 路由懒加载

外层路由才需要懒加载，内容少的路由可以不用懒加载

### 路由

路由之间值的传递和组件之间的传递类似,通过绑定事件父路由可以获取子路由的值，并且获取激活时子路由的值,在router-view标签上绑定,传值

### v-model

`v-model.trim` 过滤内容开始和最后的空格，中间的会保留一个空格，多的会被过滤掉

### flex布局

通过伪类获取的行间元素，justufy-content 无效，而通过类名获取的行间元素可以正常使用

### 使用vant

在使用数字键盘组件时,通过在要触发的组件上 添加 readonly="readonly"就可以阻止手机自带的键盘弹出

### props与data

props 是父组件传来的,不应该改变,data可以改变

### vscode

使用 vs code 默认没有调整字体大小的快捷键，这个就需要自己设置一下了。一般我们习惯使用ctr 和 - 及 = 两个符号键来设置。因为可以对应到键盘上的 一个减号键，一个加号键，很容易理解。

### 关于 vuex 刷新后 数据恢复默认值

方法一：利用beforeunload事件在用户刷新页面时将vuex的store存入sessionstorage中然后再在页面加载时获从sessionstorage中获取,replaceState  store，然后清除

```js
<script>
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
      sessionStorage.removeItem('store');
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>
```

方法二：结合vuex+localStorage

```js
const state = {
  user_name: localStorage.getItem('user_name'),
  isLogin : localStorage.getItem('isLogin')
}
const getters = {
  userName: (state) => state.user_name,
  isLogin :(state) => state.isLogin
}
const mutations = {
  handleUserName: (state, user_name) => {
      state.user_name = user_name
      localStorage.setItem('user_name', user_name)  
  },
  isLogin(state,status){
    state.isLogin = status;
    localStorage.setItem('isLogin', status)
  },
  LoginOut (state){
    localStorage.clear();
    state.user_name = '';
    state.isLogin = false;
  }
}
```

### 定时器

在vue中使用定时器，很多情况下，进入和退出vue界面，都没有清除定时器，从而导致有很多定时器一起工作，这样肯定是不行的，接下来就使用当用户进入界面时启用定时器，当用户离开当前界面时就清除定时器。

```js
data () {
    return {
        timer: null
    }
},
methods: {
    setTimer() {
        if(this.timer == null) {
            this.timer = setInterval( () => {
                console.log('开始定时...每过一秒执行一次')
            }, 1000)
        }
    }
},
  created () {
            // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
            clearInterval(this.timer)
            this.timer = null
            this.setTimer()
        },
destroyed () {
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer)
    this.timer = null
}
```

在 路由跳转时, 实际上定时器还在工作,所以还需再离开当前路由时把定时器清除

```js
// 导航离开前关闭定时器
beforeRouteLeave (to, from, next) {
clearInterval(this.timer)
this.timer = null
next()
},
```

### vant popup遇到的问题

跳转路由时发现 跳转到 vant popup 所在的路由时, vant popup 会自动打开,且离开路由时vant popup的关闭是一个问题

解决方案
通过路由守卫来解决,

```js
// 导航进入前关闭侧边栏
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$data.visible = false
    })
  },
  // 导航离开前关闭侧边栏
  beforeRouteLeave (to, from, next) {
    this.visible = false
    next()
  },
```

### vue watch

一、说明

在vue中，使用watch来响应数据的变化。watch的用法大致有三种。下面会详细介绍下watch的使用
二、使用

1、单纯的对值进行监听，当demo的值发生变化时，value的值也会随着变化，直接看代码：

```vue
<template>
  <div>
    <el-input v-model="demo"></el-input>
    {{value}}
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        demo: '',
        value: ''
      };
    },
    watch: {
      demo(val) {
        this.value = this.demo;
      }
    }
  };
</script>
```

2、对对象进行监听，如果watch监测的是一个对象的话，直接使用watch是不行的，此时我们可以借助于computed计算属性来完成：

```vue
<template>
  <div>
    <el-input v-model="demo.name"></el-input>
    {{value}}
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        demo: {
          name: ''
        },
        value: ''
      };
    },
    computed: {
      newName() {
        return this.demo.name;
      }
    },
    watch: {
      newName(val) {
        this.value = val;
      }
    }
  };
</script>
```

3、监听数组的变化：

```html
<div id="app">
  <input type="text" v-model="childrens.name" />
  <input type="text" v-model="lastName" />
</div>

<script type="text/javascript">
  var vm = new Vue( {
    el: '#app',
    data: {
      childrens: {
        name: '小强',
        age: 20,
        sex: '男'
      },
      tdArray:["1","2"],
      lastName:"张三"
    },
    watch:{
      //以V-model绑定数据时使用的数据变化监测
      childrens:{
        handler:function(val,oldval){
          console.log(val.name)
        },
        deep:true  // 对象内部的属性监听，也叫深度监听
      },
      // 键路径必须加上引号
      'childrens.name':function(val,oldval){
        console.log(val+"aaa")
      },  
      lastName:function(val,oldval){
        console.log(this.lastName)
      }
    },
  } );
  //主动调用$watch方法来进行数据监测
  vm.$watch("lastName",function(val,oldval){
    console.log(val)
  })
</script>
```

三、补充

immediate和handler

这样使用watch时有一个特点，就是当值第一次绑定的时候，不会执行监听函数，只有值发生改变才会执行。如果我们需要在最初绑定值的时候也执行函数，则就需要用到immediate属性。

比如当父组件向子组件动态传值时，子组件props首次获取到父组件传来的默认值时，也需要执行函数，此时就需要将immediate设为true。我们拿第一个例子的代码来说明下immediate和handler的使用方法。

```vue
<template>
  <div>
    <el-input v-model="demo"></el-input>
    {{value}}
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        demo: '',
        value: ''
      };
    },
    watch: {
      demo(val) {
        this.value = this.demo;
        // handler的使用
        handler(newName, oldName) {
      　　 console.log(newName)
          console.log(oldName)
    　　},
       // immediate的使用
    　　immediate: true
      }
    }
  };
</script>
```

监听的数据后面写成对象形式，包含handler方法和immediate，之前我们写的函数其实就是在写这个handler方法；

immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler。

四. watch 在任务执行队列中执行的执行时间

watch的处理函数是在同步函数都执行完毕之后，在浏览器更新DOM之前执行

如果我们在调用testFun后，执行一些其他的指令，也会发现是后面的指令先执行，再执行watch处理函数。但是控制台是先显示watch之后，再输出test。

所以可以看出，watch的处理函数是在同步函数都执行完毕之后，在浏览器更新DOM之前执行

### vue 页面刷新的三种方法

方案一

local.reload()
this.$router.go(0)

这两种都可以刷新当前页面的，缺点就是相当于按ctrl+F5 强制刷新那种，整个页面重新加载，会出现一个瞬间的空白页面，体验不好

方案二

新建一个空白页面supplierAllBack.vue，点击确定的时候先跳转到这个空白页，然后再立马跳转回来

需要跳转的页面

```js
this.$router.replace({
  path: '/about/home/back', // 跳转到空白页
  name: 'back'
})
```

空白页

```js
data () {
  this.$router.replace({
   path: '/about/home/home', // 跳转会当前页
   name: 'home'
  })
  return {
  
  }
}
```

这个方式，相比第一种不会出现一瞬间的空白页，只是地址栏有个快速的切换的过程，可采用

3、provide / inject 组合 方式是我试过最实用的，下面用项目截图给大家说明下：首先，要修改下你的app.vue

```vue
<template>
<div>
<router-link tag="li" class="ripple" replace to="/home">我的</router-link>
    <keep-alive>
      <router-view v-if="isReload"></router-view>
    </keep-alive>
  </div>
</div>
</template>
<script>
export default {
provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isReload: true
    }
  },
  methods: {
    reload () {
      this.isReload = false
      this.$nextTick(function () {
        this.isReload = true
      })
    }
  }
}
</script>
```

通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载，这边定义了

isReload / /true or false 来控制

然后在需要当前页面刷新的页面中注入App.vue组件提供（provide）的 reload 依赖，然后直接用this.reload来调用就行

```js
export default {
  name: 'FindIndex',
  inject: ['reload'],
  methods: {
    show () {
    // 要执行的方法
    // 刷新
    this.reload()
    }
  }
}
```

### router-view 绑定 key 属性

`<router-view :key="key"></router-view>`

不设置 router-view 的 key 属性

由于 Vue 会复用相同组件, 即 /page/1 => /page/2 或者 /page?id=1 => /page?id=2 这类链接跳转时, 将不在执行created, mounted之类的钩子, 这时候你需要在路由组件中, 添加beforeRouteUpdate钩子来执行相关方法拉去数据

相关钩子加载顺序为: beforeRouteUpdate

设置 router-view 的 key 属性值为 $route.path

从/page/1 => /page/2, 由于这两个路由的$route.path并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:beforeRouteUpdate => created => mounted

从/page?id=1 => /page?id=2, 由于这两个路由的$route.path一样, 所以和没设置 key 属性一样, 会复用组件, 相关钩子加载顺序为:beforeRouteUpdate

设置 router-view 的 key 属性值为 $route.fullPath

从/page/1 => /page/2, 由于这两个路由的$route.fullPath并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:beforeRouteUpdate => created => mounted

从/page?id=1 => /page?id=2, 由于这两个路由的$route.fullPath并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:beforeRouteUpdate => created => mounted

### params传参和query传参有什么区别

1、用法上的

刚query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.xxx和this.$route.params.xxx。

2、展示上的

query在浏览器地址栏中显示参数，params后者则不显示

params不设置的时候，也就是不使用使用冒号占位符，刷新页面或者返回参数会丢失
params一旦设置在路由，也就是使用冒号占位符，params就是路由的一部分，这个时候地址栏就会显现参数，如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。

3、params一旦设置在路由，params是路由的一部分,必须要有。query是拼接在url后面的参数，没有也没关系。

4、params、query不设置也可以传参，params不设置的时候，刷新页面或者返回参数会丢失，这一点的在上面说过了

### 使用 crypto-js 加解密

第一步，安装

`npm install crypto-js`

第二步，在你需要的vue组件内import

`import CryptoJS from 'crypto-js'`

第三步，使用

```js
// Encrypt 加密
var cipherText = CryptoJS.AES.encrypt(
    "my message",
    "secretkey123"
).toString();
console.log(cipherText)
// Decrypt 解密
var bytes = CryptoJS.AES.decrypt(cipherText, "secretkey123");
var originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText);// 'my message'
```

记住密码

实现原理是登录的时候，如果勾选了记住密码（把‘记住密码’状态保存到localstorage）就保存账号密码到cookies；
之后进入登录页面的时候，判断是否记住了密码（从localstorage判断），如果记住密码则导出cookies到表单；

其中保存使用setcookie方法，取出则使用getcookie方法。

登录的方法如下：

```js
login() {
    this.$http //请根据实际情况修改该方法
      .post(...)
      .then(res => {
        if (res.data.code == "success") {
           if (this.rememberPsw == true) {
            //判断用户是否勾选了记住密码选项rememberPsw，传入保存的账号currentPortId，密码password，天数30
            this.setCookie(this.currentPortId, this.password, 30);
           } else {
            this.clearCookie();
           }
            //这里是因为要在created中判断，所以使用了localstorage比较简单，当然你也可以直接根据cookie的长度or其他骚操作来判断有没有记住密码。
           localStorage.setItem("rememberPsw", this.rememberPsw);

        } else {
        //----
        }
      })
     .catch(err => {
     //----
     });
},
```

最后要在created狗子函数内判断用户是否记住了密码来执行相关的操作

```js
// 设置cookie
    setCookie(portId, psw, exdays) {
      // Encrypt，加密账号密码
      var cipherPortId = CryptoJS.AES.encrypt(
        portId+'',
        "secretkey123"
      ).toString();
      var cipherPsw = CryptoJS.AES.encrypt(psw+'', "secretkey123").toString();
      console.log(cipherPortId+'/'+cipherPsw)//打印一下看看有没有加密成功

      var exdate = new Date();//获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
      //字符串拼接cookie，为什么这里用了==，因为加密后的字符串也有个=号，影响下面getcookie的字符串切割，你也可以使用更炫酷的符号。
      window.document.cookie =
        "currentPortId" +
        "==" +
        cipherPortId +
        ";path=/;expires=" +
        exdate.toGMTString();
      window.document.cookie =
        "password" +
        "==" +
        cipherPsw +
        ";path=/;expires=" +
        exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split(";");//这里显示的格式请根据自己的代码更改
        for (var i = 0;i < arr.length;i++) {
          var arr2 = arr[i].split("==");//根据==切割
          //判断查找相对应的值
          if (arr2[0] == "currentPortId") {
            // Decrypt，将解密后的内容赋值给账号
            var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
            this.currentPortId = bytes.toString(CryptoJS.enc.Utf8)-0;
          } else if (arr2[0] == "password") {
            // Decrypt，将解密后的内容赋值给密码
            var bytes = CryptoJS.AES.decrypt(arr2[1], "secretkey123");
            this.password = bytes.toString(CryptoJS.enc.Utf8);
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1);
    }
```

```js
//判断是否记住密码
//**注意这里的true是字符串格式，因为Boolean存进localstorage中会变成String**
created() {
    //判断是否记住密码
    if (localStorage.getItem("rememberPsw") == 'true') {
    this.getCookie();
    }
}
```

### v-for 和 v-if

永远不要把 v-if 和 v-for 同时用在同一个元素上。

一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 users替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。


详解

当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，所以这个模板：

```vue
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

将会经过如下运算：

```js
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})
```

因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。

通过将其更换为在如下的一个计算属性上遍历：

```vue
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}

<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

我们将会获得如下好处：

过滤后的列表只会在 users 数组发生相关变化时才被重新运算，过滤更高效。
使用 v-for="user in activeUsers" 之后，我们在渲染的时候只遍历活跃用户，渲染更高效。
解藕渲染层的逻辑，可维护性 (对逻辑的更改和扩展) 更强。

为了获得同样的好处，我们也可以把：

```html
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

更新为：

```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

通过将 v-if 移动到容器元素，我们不会再对列表中的每个用户检查 shouldShowUsers。取而代之的是，我们只检查它一次，且不会在 shouldShowUsers 为否的时候运算 v-for。

反例

```vue
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

好例子

```vue
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```

### vuex

在页面中可以 $store.state,$store.getter等直接使用,不用像其他的this点调用在钩子函数中则需要

### 网易云接口

相同url请求2分钟内只会向服务器发送一次,2分钟内是缓存，需要注意这一点

### sticky 粘性布局

sticky：对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。

生效规则

须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
并且 top 和 bottom 同时设置时，top 生效的优先级高，left 和 right 同时设置时，left 的优先级高。

设定为 position:sticky 元素的任意父节点的 overflow 属性必须是 visible，否则 position:sticky 不会生效。这里需要解释一下：

如果 position:sticky 元素的任意父节点定位设置为 overflow:hidden，则父容器无法进行滚动，所以 position:sticky 元素也不会有滚动然后固定的情况。

如果 position:sticky 元素的任意父节点定位设置为 position:relative | absolute | fixed，则元素相对父元素进行定位，而不会相对 viewprot 定位。

达到设定的阀值。这个还算好理解，也就是设定了 position:sticky 的元素表现为 relative 还是 fixed 是根据元素是否达到设定了的阈值决定的。

### vant 使用 sticky

使用Sticky 粘性布局的时候,调用`@scroll`

```vue
<van-sticky @scroll="scrollHandle">
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

scroll的回调参数为{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }

```js
scrollHandle(data){
    console.log(`回调参数`,data) // {scrollTop:0,isFixed:true}
```

传递自定义参数,同时获取默认的回调参数,如当前循环的索引等

```vue
<van-sticky @scroll="scrollHandle(`123`)">
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

只要以scrollHandle()或者传自定义参数,就会覆盖默认的回调参数

```js
scrollHandle(data){
    console.log(`回调参数`,data) // 123
}
```

实现

在传参的末尾,添加`$event`参数即可

```vue
<van-sticky @scroll="scrollHandle(`123`,$event)">
  <van-button type="primary">基础用法</van-button>
</van-sticky>
```

结果

```js
scrollHandle(item,data){
    console.log(`回调参数`,item,data) // 123 ,{scrollTop:0,isFixed:true}
}
```

### vue 监听scroll事件

pc端 这样就可以了

```js

mounted () {
  window.addEventListener('scroll', this.handleScroll, true)
},
methods: {
scrollHandler () {
		  // 这样写是兼容移动端,一般只需要第一个
      var scrollTop = document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      document.querySelector('.element').scrollTop
      var clientHeight = document.documentElement.clientHeight
      if (scrollTop / clientHeight >= 0.35) {
        this.isFixed = true
      } else {
        var opa = 1 - (3 * scrollTop / clientHeight)
        this.opacity = opa >= 0 ? opa : 0
        this.isFixed = false
      }
    }
}
```

移动端还需要通过

1. 监听 `@scroll.passive` （.passive 使得滚动行为立即触发）

2. 监听 `@touchmove`

在所需要的地方绑定 `@touchmove ="scrollHandler"` 或 `@scroll.passive=“scrollHandler”`

### v-for 完全渲染完成

只需要在 所在函数中

```js
this.nextTick(function(){
    // v-for 循环完后执行
});
```

如果是ajax 等异步 则

```js
.then((response) => {
    if (response.data.success) {
        this.topFocus.data = response.data.data;
        this.$nextTick(function(){
    		  //渲染完毕
        });
    });
    }
}).catch(function(response) {
    console.log(response);
})
```

### 异步请求

异步需要初始化的 写在 created 中, 如ajax
生命周期也可以异步, `async created: { await this.function }`

### 路由 params 结合 props

在路由配置中设置 props: true, 路由所在组件可以通过props来接收params数据
可以传递数组,对象，由于刷新会丢失数据,结合localStorage来保存数据
通过 encodeURIComponent() 处理数据加密,通过decodeURIComponent()解密

```js
// 传递数组
      var data = [this.createNum, this.favoritesNum, this.createListAll, this.favoritesListAll]
      // 没有冒号占位符,隐藏参数
      // encodeURIComponent 加密处理
      this.$router.push({
        name: 'listAll',
        params: {
          data: encodeURIComponent(JSON.stringify(data))
        }
      })
```

```js
beforeRouteEnter (to, from, next) {
    next(vm => {
      // 解码
      const dataParse = vm.$props.data ? JSON.parse(decodeURIComponent(vm.$props.data))
        : JSON.parse(decodeURIComponent(localStorage.getItem('data')))
      console.log(dataParse)
      vm.$data.createNum = dataParse[0]
      vm.$data.favoritesNum = dataParse[1]
      vm.$data.createListAll = dataParse[2]
      vm.$data.favoritesListAll = dataParse[3]
    })
  },
  created () {
    // 在页面刷新时将data保存到localStorage里
    window.addEventListener('beforeunload', () => {
      const dataParse = JSON.parse(decodeURIComponent(this.data))
      if (dataParse instanceof Array) {
        localStorage.setItem('data', this.data)
      }
    })
  },
```

### vue 过滤

> filters.js

```js
export const filterSetYear = (value, splitY = '.', splitM = '.', splitD = '') => {
  const oDate = new Date(value)
  const oYear = oDate.getFullYear()
  const oMonth = oDate.getMonth() + 1
  const oDay = oDate.getDate()
  value = `${oYear}${splitY}${oMonth}${splitM}${oDay}${splitD}`
  return value
}
```

```vue
<template>
  <span class="fans">{{item.program.createTime | filterSetYear}}</span>
</template>
<script>
import { filterSetYear } from 'utils/filters'

export default {
  filters: {
    filterSetYear
  }
}
</script>
```

### 数字对象的处理

通过a[key]的方式获取。

具体场景是这样的：

有一个对象的key是数字组成的，这时候使用a.b的形式就不能获取到相应的value值，

a.'111'会报错。

特别说明：

a['111']和a[111]两种写法都是一样的，没有什么区别，此用法与数组用下标访问是相同的。

请注意，如果使用方括号运算符，键名不为数值的时候，必须放在引号里面，否则会被当作变量处理。但是，数字键可以不加引号，因为会被当作字符串处理。

另：

当对象的key为一个变量时，并且使用在循环中，那我们可以通过data['key']这种方式来动态生成对象

总结：

1. 对象的key一般应使用合法的变量名(字母或下划线开头的包括字母、下划线和数字的字符串) ，这种情况下通过a.key 或者 a['key']的方式都可以获取到相应的value值。

2. 当特殊场景key为数字的情况下，只能通过a['key']的方式来获取相应的value值。

如当建立一个与数据库中id一一对应的map对象的时候,

可直接用id的数值做key，虽然你可以给它加上一个字母前缀来让它符合合法的变量名的标准,

并让它的数据能通过data.key的方式访问,

但如果数据量非常大的话,

为每个id都加一个前缀，＋字符连接运算也是要消耗性能的,

特别是在很少需要采用data.key方式去访问属性的情况下,

那么可以抛弃此调用方式，直接用数字做key也未尝不可,

除了key名称不符合合法变量名的标准之外，似乎并没有其它损失；

### vue 导入utils工具

方案一

utils 文件夹下的 a.js

```js
const utils = {
    a: 'hello',
    b: function(){
        console.log("hello");
    }
}
// 不需要{}
export default utils
```

在组件中导入
不需要`{}`
> import utils from 'utils/a'

使用 utils.a, utils.b()

方案二

```js
var utils = {
    a: 'hello',
    b: function(){
        console.log("hello");
    }
}
```

在main.js中全局引入不需要`{}`

> import utils from 'utils/a'

并注册到原型上

```js
Vue.prototype.utils = utils
```

在任意地方都可以使用
`this.utils.a,  this.utils.b()`

方案三

```js
const findIcons = [{
  text: '每日推荐',
  icon: 'iconfont icon-meirituijian',
  linkTo: 'dateRecommend'
},
{
  text: '歌单',
  icon: 'iconfont icon-gedan1',
  linkTo: 'recommend'
},
{
  text: '排行榜',
  icon: 'iconfont icon-paihangbang',
  linkTo: 'idx'
},
{
  text: '电台',
  icon: 'iconfont icon-diantai',
  linkTo: 'dj'
},
{
  text: '私人FM',
  icon: 'iconfont icon-FM',
  linkTo: 'personalFm'
}]
// 多个需要`{}`,这里只示例了一个
export default {
  findIcons
}

export const FindIcons = () => findIcons
```

在组件中

```vue
<template>
  <div class="home-icons-content">
    <ul class="icons-group">
      <!-- compile 等价于 :compile="true" -->
      <li
        v-for="(item, index) in HomeIcons"
        :icons="item"
        :key="index"
        compile
        is="icon"
        class="home-icon-list"
      >
      </li>
    </ul>
  </div>
</template>
<script>
// 需要`{}`
import { HomeIcons } from 'getIcons/icons'
export default {
  name: 'HomeIcons',
  data () {
    return {
      HomeIcons
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      this.HomeIcons = HomeIcons()
    }
  }
}
</script>
```

方案四

```js
export const filterPlayCount = value => {
  if (!value) return ''
  if (value > 100000000) {
    value = (value / 100000000).toFixed(1) + '亿'
  } else if (value > 10000) {
    value = Math.floor(value / 10000) + '万'
  }
  return value
}
```

```vue
<template>
  <div>
  	{{ someting | filterPlayCount }}
  </div>
</template>
<script>
// 需要`{}`
import { filterPlayCount } from 'utils/filters'
export default {
  filters: {
    filterPlayCount
  }
}
</script>
```

### vant 单行文字

多余的省略号表示时，不能使用flex,会失效

### 父组件获取子组件,子组件获取父组件

1. 父组件主动获取子组件中的数据和方法

在父组件里面通过:

`this.$refs.childMethod.属性`
`this.$refs.childMethod.方法`

在父组件中：(调用子组件的时候，定义一个ref)

`<child-list ref="childMethod" :parentListClick="parent"></child-list>`

2. 子组件主动获取父组件中的数据和方法

在子组件里面通过:

this.$parent.属性
this.$parent.方法

### watch 监听 vuex

可以用watch监听 vuex

```js
watch: {
    '$store.state.xxx' (val, oldVal) {
      // do something
    }
  },
```

### vant ImagePreview

组件调用需要使用的页面单独引入
`import { ImagePreview } from 'vant'`
在methods 中

```js
bgcPreview () {
  ImagePreview({ images: [this.coverImgUrl], closeable: true })
},
```

### vue watch 与 computed

computed 与 watch 例子

`<i class="iconfont" :class="[modeClass]"></i>`

```js
props: {
    mode: {
      type: Number
    }
  },
computed: {
    ...mapGetters(['playState']),
    modeClass: function () {
      if (this.mode === 0) {
        return 'icon--lbxh'
      }
      if (this.mode === 1) {
        return 'icon-loop'
      } else {
        return 'icon-suijibofang-wangyiicon'
      }
    }
  },
  watch: {
    playState: {
      handler (val, oldVal) {
        document.querySelector('.img-circle').style.animationPlayState = val ? 'running' : 'paused'
      }
    }
  }
```

### 组件触发事件

想要在组件上触发事件,需要`.native`修饰符 如 `@click.native`

### animation不生效（ transform）

必须把span转成行内块，不然animation无效，查了一下相关的资料，其实这里主要是 transform对行内元素无效，可以使用变换（transform）的元素必须是块级元素或者原子内联级元素，单纯的内联元素是不能应用变换的。

过渡效果 带来的字体模糊和抖动
`z-index: 1;`解决过渡效果带来的字体模糊,要使用z-index必须有定位元素
`transform: translateZ(0);` 解决过渡效果带来的抖动


### vue keep-alive以及activated,deactivated生命周期的用法

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition`> 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
当组件在 `<keep-alive>` 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

注意：只有当组件在 `<keep-alive>` 内被切换，才会有activated 和 deactivated 这两个钩子函数

通过描述我们知道，它会缓存不活动的组件，而不是销毁。这样组件之间的切换就能保存上个组件的状态，而不是切换之后又得重新操作。

在keep-alive上有两个属性

字符串或正则表达式。只有匹配的组件会被缓存。

include 值为字符串或者正则表达式匹配的组件name会被缓存。
exclude 值为字符串或正则表达式匹配的组件name不会被缓存。

还可以利用路由中的meta属性来控制

```vue
{
  path: '/',
  name: 'home',
  meta:{
    keepAlive:true
  },
  component: Home
}
```

将home的路由规则钟的meta添加keepAlive属性为true，也就是当前路由组件要进行缓存

keep-alive代码可以结合v-if进行包裹，如果meta中的keepAlive为true进行缓存，否侧不进行缓存，这样可以更灵活一些

```html
<keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
</keep-alive>
<router-view v-if="!$route.meta.keepAlive" />
```

### css 瀑布流

纯CSS实现瀑布流布局的两种方案

1. 使用CSS3的column属性
这里的关键属性是column-count，设置列数为5。然后是break-inside:avoid，为了控制文本块分解成单独的列，以免项目列表的内容跨列，破坏整体的布局

```html
<div class="container">
    <div class="item">
        <div class="itemContent" style="background-color: blue;height: 50px">1</div>
    </div>
</div>
```

```css
.container{
	width: 100%;
	column-count: 5;
}
.item{
	break-inside: avoid;
	margin-bottom:10px;
}
```

2. 第二种方案是使用Flexbox布局

这里把container和column都设置为flex布局，container的属性设置为flex-direction:row，column的属性设置为flex-direction: column，还要设置一下每一列的宽度，这里设置为width: 100%。

```html
<div class="column">
    <div class="item">
        <div class="itemContent" style="background-color: blue;height: 50px">1</div>
    </div>
    <div class="item">
        <div class="itemContent" style="background-color: rosybrown;height: 100px">2</div>
    </div>
    <div class="item">
        <div class="itemContent" style="background-color: red;height: 80px">3</div>
    </div>
    <div class="item">
        <div class="itemContent" style="background-color: rosybrown;height: 100px">4</div>
    </div>
</div>
```

```css
.container{
	display: flex;
	flex-direction: row;
}
.column{
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 10px;
}
.item{
	margin-bottom: 10px;
}
```

## 部署node项目到云服务器上

  需要云服务器和宝塔面板以及finalshel
  选择宝塔面板的PM2管理插件
