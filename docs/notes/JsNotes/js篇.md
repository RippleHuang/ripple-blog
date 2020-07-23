---
title: JS
date: 2020-07-23
publish: true
categories:
  - js
tags:
  - js
---

## js 数据类型

数据类型主要包括两部分：

基本数据类型： Undefined、Null、Boolean、Number 和 String
引用数据类型： Object (包括 Object 、Array 、Function)
ECMAScript 2015 新增:Symbol(创建后独一无二且不可变的数据类型 )

## js中布尔值为false的

undefined、null、false、NaN、‘’、0、-0
注意空数组空对象，负值转的布尔值时都为true
"!!"将表达式进行强制转化为bool值的运算，运算结果为true或者false。

## 判断值的类型方法

typeof 运算符
instanceof 运算符
Object.prototype.toString 方法

## null 与undefined区别

null 表示一个对象被定义了，值为“空值”；
undefined 表示不存在这个值。
（1）变量被声明了，但没有赋值时，就等于undefined。 
（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。 
（3）对象没有赋值的属性，该属性的值为undefined。 
（4）函数没有返回值时，默认返回undefined。

## 怎么判断一个变量arr的话是否为数组（此题用 typeof 不行）

arr instanceof Array
arr.constructor == Array
Object.protype.toString.call(arr) == '[Object Array]'

## “eval是做什么的

它的功能是把对应的字符串解析成 JS 代码并运行；
应该避免使用 eval，不安全，非常耗性能（2次，一次解析成 js 语句，一次执行）。

## 箭头函数有哪些特点

不需要function关键字来创建函数
省略return关键字
改变this指向

##  new操作符具体干了什么呢

1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2、属性和方法被加入到 this 引用的对象中。
3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

```js

let obj = new Base()

let obj = {}

obj.__proto__ = Base.prototype
var result = Base.call(obj)

```

4、判断Func的返回值类型：

如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。



```javascript
if (typeof(result) == "object"){  func=result;}else{    func=obj;;}
```

## AMD CMD CommonJS区别

CommonJS：同步加载
AMD（require.js）:异步加载模块，依赖前置，提前执行
CMD（sea.js）:异步加载模块，依赖就近，延迟加载



## require与import区别

- `require` 是 AMD规范引入方式
- `import`是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法

##### 调用时间

- require是运行时调用，所以require理论上可以运用在代码的任何地方（虽然这么说但是还是一般放开头）
- import是编译时调用，所以必须放在文件开头

##### 本质

- require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
- import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require

import会被转成require  那就说明了啥import 更高级嘛，以后的主力，require就是替补嘛

 

require / exports ：
遵循 AMD/CommonJS，只能在运行时确定模块的依赖关系及输入/输出的变量，无法进行静态优化。
用法只有以下三种简单的写法：

```null
const fs = require('fs')
exports.fs = fs
module.exports = fs
```

import / export：
遵循 ES6 规范，支持编译时静态分析，便于JS引入宏和类型检验。动态绑定。
写法就比较多种多样：

```null
import fs from 'fs'
import {default as fs} from 'fs'
import * as fs from 'fs'
import {readFile} from 'fs'
import {readFile as read} from 'fs'
import fs, {readFile} from 'fs'

export default fs
export const fs
export function readFile
export {readFile, read}
export * from 'fs'我还是觉得import  字面上更好理解一点喜欢import  　　
```

1. 通过require引入基础数据类型时，属于复制该变量。
2. 通过require引入复杂数据类型时，数据浅拷贝该对象。
3. 出现模块之间的循环引用时，会输出已经执行的模块，而未执行的模块不输出（比较复杂）
4. CommonJS模块默认export的是一个对象，即使导出的是基础数据类型

![img](https://img2018.cnblogs.com/blog/1159729/201903/1159729-20190320110016773-1046340068.png)

## js延迟加载有哪些

defer和async
动态创建DOM方式
按需异步载入js

## documen.write 和 innerHTML 的区别

document.write 只能重绘整个页面
innerHTML 可以重绘页面的一部分

document.write是直接将内容写入页面的内容流，会导致页面全部重绘，内容会替换

innerHTML将内容写入某个DOM节点，不会导致页面全部重绘

## ajax过程

(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.
(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
(3)设置响应HTTP请求状态变化的函数.
(4)发送HTTP请求.
(5)获取异步调用返回的数据.
(6)使用JavaScript和DOM实现局部刷新.

## 介绍一下闭包和闭包常用场景

闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包常见方式，就是在一个函数的内部创建另一个函数
使用闭包主要为了设计私有的方法和变量，闭包的优点是可以避免变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念。
闭包有三个特性：
    函数嵌套函数
    函数内部可以引用外部的参数和变量
    参数和变量不会被垃圾回收机制回收
应用场景，设置私有变量的方法
不适用场景：返回闭包的函数是个非常大的函数
闭包的缺点就是常驻内存，会增大内存使用量，使用不当会造成内存泄漏

## javascript的内存(垃圾)回收机制

### 垃圾回收机制

我们在前面已经说到JS内存分配回收由计算机自动完成，同时也提到了垃圾回收机制这个概念，这里来细说。

### js中的内存回收

在js中，垃圾回收器每隔一段时间就会找出那些不再使用的数据，并释放其所占用的内存空间。

以全局变量和局部变量来说，函数中的局部变量在函数执行结束后这些变量已经不再被需要，所以垃圾回收器会识别并释放它们。而对于全局变量，垃圾回收器很难判断这些变量什么时候才不被需要，所以尽量少使用全局变量。

### 垃圾回收的两种模式

那么垃圾回收器是如何检测变量是否需要的呢，大体上分为两种检测手段，引用计数与标记清除。

**引用计数**

引用计数的判断原理很简单，就是看一份数据是否还有指向它的引用，如果没有任何对象再指向它，那么垃圾回收器就会回收，举个例子：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
// 创建一个对象，由变量o指向这个对象的两个属性
var o = {
    name: '听风是风',
    handsome: true
};
// name虽然设置为了null，但o依旧有name属性的引用
o.name = null;
var s = o;
// 我们修改并释放了o对于对象的引用，但变量s依旧存在引用
o = null;
// 变量s也不再引用，对象很快会被垃圾回收器释放
s = null;
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

引用计数存在一个很大的问题，就是对象间的循环引用，比如如下代码中，对象o1与o2相互引用，即便函数执行完毕，垃圾回收器通过引用计数也无法释放它们。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
function f() {
    var o1 = {};
    var o2 = {};
    o1.a = o2; // o1 引用 o2
    o2.a = o1; // o2 引用 o1
    return;
};
f();
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**标记清除**

标记清除的概念也好理解，从根部出发看是否能达到某个对象，如果能达到则认定这个对象还被需要，如果无法达到，则释放它，这个过程大致分为三步：

a.垃圾回收器创建roots列表，roots通常是代码中保留引用的全局变量，在js中，我们一般认定全局对象window作为root，也就是所谓的根部。

b.从根部出发检查所有 的roots，所有的children也会被递归检查，能从root到达的都会被标记为active。

c.未被标记为active的数据被认定为不再需要，垃圾回收器开始释放它们。

![img](https://img2018.cnblogs.com/blog/1213309/201909/1213309-20190914234730378-1302787578.gif)

当一个对象零引用时，我们从根部一定无法到达；但反过来，从根部无法到达的不一定是严格意义上的零引用，比如循环引用，所以标记清除要更优于引用计数。

## 避免内存泄露

**如何避免内存泄漏**

我们已经知道了垃圾回收的原理，那么我们如何避免创建无法回收的对象，以至造成内存泄漏的尴尬呢下面说说常见的四种js内存泄漏。

**1.全局变量**

尽可能少的去创建全局变量是js开发者的常识，但如下两种方式还是会意外的创建全局变量，第一是在函数中声明变量未使用var：

```js
function fn() {
    a = 1;
};
fn();
window.a //1
```

上述代码中我们在函数体内声明了一个变量a，由于未使用var声明，即便在函数体内，但它依旧是一个全局变量。我们知道全局变量等同于在window上添加属性，所以在函数执行完毕，我们依旧可以访问到它。

第二种是在函数体内通过this来创建变量：

```js
function fn() {
    this.a = 1;
};
fn();
window.a //1
```

我们知道，当直接调用函数fn时，等同于window.fn()，所以函数体内的this会指向window，所以本质上还是创建了一个全局变量。

当然上述问题也不是无法解决，我们可以使用严格模式来避免这个问题，试着在代码头部添加‘use strict’，你会发现a就无法访问了，因为严格模式下，全局对象指向undefined。

有时候我们无法避免使用全局变量，那么记得在使用完毕后手动释放它们，例如让变量指向null。

**2.被遗忘的定时器或回调函数**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
var serverData = loadData();
setInterval(function () {
    var renderer = document.getElementById('renderer');
    if (renderer) {
        renderer.innerHTML = JSON.stringify(serverData);
    }
}, 3000);
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

在上述代码中，当dom元素renderer被移除时，由于是周期定时器的缘故，定时器回调函数始终无法被回收，这也导致了定时器会一直对数据serverData保持引用，好的做法是在不需要时停止定时器。

在例如我们在使用事件监听时，如果不再需要监听记得移除监听事件。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
var element = document.getElementById('button');

function onclick(event) {
    element.innerHTML = 'text';
};

element.addEventListener('click', onclick);
// 移除监听
element.removeEventListener('click', onclick);
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**3.闭包**

闭包在js开发中是极其常见的，我们来看个例子：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        //unused未执行，但一直保持对theThing的引用
        if (originalThing)
            console.log("hi");
    };
    //创建一个新对象
    theThing = {
        longStr: new Array(1000000).join('*'),
        someMethod: function () {
            console.log("message");
        }
    };
};

setInterval(replaceThing, 1000);
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

定时器每次调用replaceThing，theThing都会获得一个包含数组longStr与闭包someMethod的新对象。

闭包unused保持着对象originalThing的引用，因为theThing赋值的缘故，也保持了对theThing的引用。虽然unused没执行，但引用关系会导致originalThing一直无法被回收，那么theThing也一样。正确做法是在replaceThing  最后添加originalThing  = null；

所以我们常说，对于闭包中的变量，在不需要时一定记得手动释放。

**4.DOM的引用**

操作dom总是被认为是不好的，但一定得操作，我们的习惯是通过一个变量来存储它，这样就可以反复使用了，但这也会造成一个问题，dom会被引用2次。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
var elements = document.getElementById('button')

function doStuff() {
    elements.innerHTML = '听风是风';
};
// 清除引用
elements = null;
document.body.removeChild(document.getElementById('button'));
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

在上述代码中，一次引用是基于dom树的引用，第二是变量elements的引用，当我们不需要这个dom时，都做两次清除操作。

## JavaScript原型，原型链 ? 有什么特点

每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
于是就这样一直找下去，也就是我们平时所说的原型链的概念。
关系：instance.constructor.prototype = instance.proto
特点：
JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

当我们需要一个属性的时，Javascript引擎会先看当前对象中是否有这个属性， 如果没有的话，

就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象。

```js
`function` `Func(){}``Func.prototype.name = ``"Sean"``;``Func.prototype.getInfo = ``function``() {``  ``return` `this``.name;``} ``var` `person = ``new` `Func(); ``// 现在可以参考``var` `person = Object.create(oldObject);``console.log(person.getInfo());``//它拥有了Func的属性和方法``//"Sean"``console.log(Func.prototype);``// Func { name="Sean", getInfo=function()}`
```


## var let const区别

　　var是ES5语法，let const是ES6语法；

　　var有变量提升(不会报错，只会打印出undefined)

　　var和let是变量可以修改，count是常量不可以修改

　　let和count是块级作用域，var没有

## typeof能判断哪些类型

　　undefined、string、number、boolean、symbol [值类型]

　　object(注意 typeof null === ‘object’) [引用类型instanceof]

　　function

## 列举强制类型转换和隐式类型转换

　　强制 parseInt parseFloat Number string toString等(toString转换null undefined会报错)

　　隐式 +拼接字符串 == === if 逻辑运算等

2.隐式转换

JavaScript的数据类型分为六种，分别为null,undefined,boolean,string,number,object。object是引用类型，其它的五种是基本类型或者是原始类型。我们可以用typeof方法打印来某个是属于哪个类型的。不同类型的变量比较要先转类型，叫做类型转换，类型转换也叫隐式转换。隐式转换通常发生在运算符加减乘除，等于，还有小于，大于等。。

```js
console.log(typeof '11')//输出string
console.log(typeog 11) //输出number
console.log('11' < 4 ) //输出fals
```

1.字符串加数字,数字就会转成字符串。

2.数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两个字符串相减也先转成数字。

3.乘，除，大于，小于跟减的转换也是一样。

隐式转换的其他例子

```js
console.log(10+'20') //2010

console.log(10-'20')//-10 number
console.log(10-'one') //NaN not a number
console.log(10-'101a') //NaN
console.log(10*'20') //200 number
console.log('10'*'20') //200 number
console.log(20/'10') //2 number
console.log('20'/'10') //2 number
console.log('20'/'one') //NaN
```

关于==

1.undefined等于null

2.字符串和数字比较时，字符串转数字

3.数字为布尔比较时，布尔转数字

4.字符串和布尔比较时，两者转数字

```js
console.log(undefined==null) //true
console.log('0'==0) //true 字符串转数字
console.log(0==false) //true 布尔转数字
console.log('0'==false) //2个都转成数字
console.log(null==false) //false
console.log(undefined==false)//false
```

## split()和join()的区别

　　split() 将字符串切割成数组 ‘1-2-3’.split(‘-’)

　　join()  将数组转换为字符串  [1,2,3].join(‘-’)

## 数组 pop push unshift shift 分别是什么

　　pop尾部删除 —— 返回删除元素 —— .pop()

　　push尾部添加 —— 返回length —— .push(要添加的元素)

　　unshift头部添加 —— 返回length —— .unshitf(要添加的元素)

　　shift头部删除 —— 返回删除元素 —— .shift()

## 数组slice和splice区别

　　slice是截取 splice是剪接；

　　slice是纯函数 splice是非纯函数

## 数组的API有哪些是纯函数(纯函数不改变源数组没有副作用，返回一个数组)

concat：连接数组

slice：截取数组

join：返回一个字符串

toString：返回一个字符串

map遍历

filter过滤

## ajax请求get和post的区别

　　get一般用于查询操作，post一般用于用户提交操作

　　get参数拼接在url上，post放在请求体内(数据体积可能更大)

　　安全性：post易于防止CSRF/XSRF跨站请求伪造

你轻轻松松的给出了一个“标准答案”：

- GET在浏览器回退时是无害的，而POST会再次提交请求。

- GET产生的URL地址可以被Bookmark，而POST不可以。

- GET请求会被浏览器主动cache，而POST不会，除非手动设置。

- GET请求只能进行url编码，而POST支持多种编码方式。

- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

- GET请求在URL中传送的参数是有长度限制的，而POST么有。

- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。

- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

- GET参数通过URL传递，POST放在Request body中。

## 闭包是什么有何特性有何影响

　　特性：①函数嵌套函数

　　　　　②函数内部可以引用外部的参数和变量

　　　　　③参数和变量不会被垃圾回收机制回收

　　好处：避免全局变量的污染，私有成员的存在

　　缺点：①常驻内存，增加内存使用量 ②使用不当容易造成内存泄漏

　　应用场景：作为参数被传递，作为返回值被返回

　　* 自由变量的查找，要在参数定义的地方 而不是执行的地方

## 如何阻止事件冒泡和默认行为

　　event.stopPropagation() 阻止事件冒泡       (IE:event.cancelBubble = true)

　　event.preventDefault()  阻止默认行为/事件  (return false)

1、首先对事件冒泡和默认行为以及要用到的事件对象event有个认识

对事件冒泡的理解是当触发一个子元素的事件时，同时它的父元素的事件也会依次被触发。即事件从最低层元素依次向最外层元素触发
默认事件（行为）指的是有些元素自身会有一些行为会自行被触发。例如< a>链接，提交按钮< input type = ‘submit’/>
event代表事件的状态。例如触发event对象的元素、鼠标的位置及状态，按下的键等等
event只在事件发生的过程中才有效
不同的浏览器用到event时会有所不同：例如IE里面是全局变量，即window.event；而火狐firefox里面是临时变量，需要用参数引导才可以用

2、阻止事件冒泡：
w3c方法是e.stopPropation()
IE中方法是window.event.cancelBubble = true

3、阻止事件默认行为：
w3c方法是e.preventDefault
IE中方法是window.event.returnValue = false

4、return false方法阻止事件冒泡和默认行为
javaScript的return只会阻止默认行为，而jQuery的return false两者都会阻止

## 添加、删除、替换、插入到某个节点的方法

　　新建节点：createElement() //创建一个具体的元素
　　　　　　　createTextNode() //创建一个文本节点

　　添加  appendChild()

　　移除  removeChild()

　　替换  replaceChild()

　　插入  insertBefore()

## 如何减少DOM操作

　　缓存DOM查询结果

　　多次DOM操作合并到一次插入

## 解释jsonp原理，为何不是真正的ajax

　　jsonp是动态创建script标签，回调函数

　　而ajsx是页面无刷新请求数据操作，通过XMLHttpRequest来实现的

## document load 和 document ready的区别

1 window.addEventListener('load', funtion(){
2     // 页面的全部资源加载完才会执行，包括图片、视频等
3 })
4 document.addEventListener('DOMContentLoaded', funtion(){
5     // DOM渲染完即可执行，此时图片、视频还可能没有加载完(常用)
6 })

## ‘==’和‘===’区别

　　==会自动转换类型，然后再比较

　　===不转换类型之前比较，严格相等

　　使用场景：①只有在 ==null 时用双等，其他一律用===
            ②这是jQuery源码中的写法，推荐

## 函数声明和函数表达式的区别

　　函数声明function fn(){…}

　　函数表达式 const fn = function(){…}

　　函数声明会再代码执行前预加载，而函数表达式不会

## new Object()和Object.create()的区别

　　{}等同于new Object()，原型Object.prototype

　　Object.create(null) 没有原型

　　Object.create({…})可指定原型

**Object.create()介绍**
Object.create(null) 创建的对象是一个空对象，在该对象上没有继承 Object.prototype 原型链上的属性或者方法,例如：toString(), hasOwnProperty()等方法

Object.create()方法接受两个参数:Object.create(obj,propertiesObject) ;

obj:一个对象，应该是新创建的对象的原型。

propertiesObject：可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，值是属性描述符（这些属性描述符的结构与[`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)的第二个参数一样）。注意：该参数对象不能是 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，另外只有该对象中自身拥有的可枚举的属性才有效，也就是说该对象的原型链上属性是无效的。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});
```

console.log(o);//{foo:'hello'}

var test1 = Object.create(null) ;
console.log(test1);// {} No Properties 

因为在bar中设置了configurable 使用set,get方法默认都是不起作用，所以bar值无法赋值或者获取
这里的o对象继承了 Object.prototype  Object上的原型方法

我们可以 对象的 __proto__属性，来获取对象原型链上的方法 如：

console.log(o.__proto__);//{__defineGetter__: ƒ, __defineSetter__: ƒ,  hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
console.log(test1.__proto__);//undefined

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

通过打印发现， 将{}点开，显示的是 No Properties ，也就是在对象本身不存在属性跟方法，原型链上也不存在属性和方法，

**new object()**  

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var test1 = {x:1};var test2 = new Object(test1);var test3 = Object.create(test1);console.log(test3);//{} //test3等价于test5var test4 = function(){　　}test4.prototype = test1;var test5 = new test4();console.log(test5);console.log(test5.__proto__ === test3.__proto__);//trueconsole.log(test2);//{x:1}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

**{}** 

 {}是javascript对象字面量创建的形式，其本质和new Object()并无区别，默认都是继承了Object对象上的prototype

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var test1 = {};var test2 = new Object();var test3 = Object.create(Object.prototype);var test4 = Object.create(null);//console.log(test4.__proto__)=>undefined 没有继承原型属性和方法console.log(test1.__proto__ === Object.prototype);//true
console.log(test2.__proto__ === Object.prototype);//true
console.log(test1.__proto__ === test2.__proto__);//trueconsole.log(test1.__proto__ === test3.__proto__);//trueconsole.log(test2.__proto__ === test3.__proto__);//trueconsole.log(test1.__proto__ === test4.__proto__);//falseconsole.log(test2.__proto__ === test4.__proto__);//falseconsole.log(test3.__proto__ === test4.__proto__);//false

```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**总结：使用Object.create()是将对象继承到原型链上，然后可以通过对象实例的__proto__属性进行访问原型链上的属性**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
var test = Object.create({x:123,y:345});
console.log(test);//{}console.log(test.x);//123console.log(test.__proto__.x);//123console.log(test.__proto__.x === test.x);//truevar test1 = new Object({x:123,y:345});console.log(test1);//{x:123,y:345}console.log(test1.x);//123console.log(test1.__proto__.x);//undefinedconsole.log(test1.__proto__.x === test1.x);//falsevar test2 = {x:123,y:345};console.log(test2);//{x:123,y:345};console.log(test2.x);//123console.log(test2.__proto__.x);//undefinedconsole.log(test2.__proto__.x === test2.x);//false
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)



## 如何用js实现继承

　　①class继承  ②prototype继承

## 如何捕获js中的异常

1 ①用try-catch手动捕获
2 ②window.onerror = function(message信息, source源码, lineNum行号, colNum, error){
3     // 第一，对于跨域的js，如CDN的，不会有详细的报错信息
4     // 第二，对于压缩的js，还要配合sourceMap反查到未压缩代码的行、列
5 }

## 什么是JSON

　　json是一种数据格式，本质是一段字符串

　　json格式和JS对象结构一致，对JS语言更友好(json现已覆盖大多XML)

　　window.JSON是一个全局对象：.stringify对象转化json字符串 .parse字符串转换为对象

## 获取当前页面url的参数

　　传统方式：location.search

　　新的API：URLSearchParams

1 function query(name){
2     const search = location.search
3     const p = new URLSearchParams(search)
4     return p.get(name)
5 }
6 query('a')

## forEach和map都能遍历数组，它们的区别是什么

forEach会改变原数组；map不会改变原数组，会返回一个新数组

## DOMContentLoad和onload的区别

一般情况下，DOMContentLoad事件要在window.onload之前执行，DOM树构建完成时就会执行DOMContentLoad事件

而window.onload是在页面载入完成的时候才执行，这其中包括了DOM、CSS、JS、图片

## for in 和 for of的区别

for in 遍历的是数组的索引（即键值）key

 遍历顺序可能不是内部顺序

 会遍历数组内所有可枚举属性

for of 遍历的是数组元素 value

 只遍历数组内元素

 不能遍历对象，因为没有迭代器对象

 若实在想用for of来遍历普通对象的属性的话，可以通过和 Object.keys() 搭配使用

## 继承

## 面向对象

#### 一、面向对象基本特征

1. 封装：也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。
2. 继承：通过继承创建的新类称为“子类”或“派生类”。继承的过程，就是从一般到特殊的过程。
3. 多态：对象的多功能，多方法，一个方法多种表现形式。
4. Javascript是一种基于对象（object-based）的语言。但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）—–es6以前是这样的。所以es5只有使用函数模拟的面向对象。

#### 二、对象实例化方式

1. 原始模式：这样的写法有两个缺点，一是如果多生成几个（100个！）实例，写起来就非常麻烦；二是实例与原型之间，没有任何办法，可以看出没有什么联系。

```js
var Car = {
   color: 'red',//车的颜色
   wheel: 4,//车轮数量
}
var Car2 = {
   color: 'blue',
   wheel: 4,
}
alert(Car.color);//red
```

2. 原始模式的改进：通过写一个函数，解决代码重复的问题。

```js
function createCar(color,wheel) {
   return {
       color:color,
       wheel:wheel
   }
}
//然后生成实例对象，就等于是在调用函数：
var cat1 = createCar("红色","4");
var cat2 = createCar("蓝色","4");

alert(cat1.color);//红色
```

   3.工厂模式

```js
function createCar(color,wheel){//createCar工厂
   var obj = new Object;//或obj = {} 原材料阶段
   obj.color = color;//加工
   obj.wheel = wheel;//加工
   return obj;//输出产品
}
//实例化
var cat1 = createCar("红色","4");
var cat2 = createCar("蓝色","4");

alert(cat1.color);//红色

```

4.构造函数模式：为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数（Constructor）模式。 所谓”构造函数”，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。加`new`执行的函数构造内部变化：自动生成一个对象，this指向这个新创建的对象，函数自动返回这个新创建的对象

```js
function CreateCar(color,wheel){//构造函数首字母大写
   //不需要自己创建对象了
   this.color = color;//添加属性，this指向构造函数的实例对象
   this.wheel = wheel;//添加属性

   //不需要自己return了
}

//实例化
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");
alert(cat1.color);//红色

```

#### 三、构造函数注意事项

   1. 此时CreateCar称之为构造函数，也可以称之类，构造函数就是类 。

   2. cat1，cat2均为CreateCar的实例对象。

   3. CreateCar构造函数中this指向CreateCar实例对象即 `new CreateCar( )`出来的对象。

   4. 必须带new 。

   5. 构造函数首字母大写，这是规范，官方都遵循这一个规范，如Number() Array()。

   6. contructor：这时cat1和cat2会自动含有一个constructor属性，指向它们的构造函数,即CreateCar。

   7. 每定义一个函数，这个函数就有一个 prototype 的属性{}，`__proto__` 指向被实例化的构造函数的prototype，prototype默认带constructor属性，constructor指向构造函数。

   8. instanceof 运算符：`object instanceof constructor`运算符，验证构造函数与实例对象之间的关系

#### 四、构造函数的问题

构造函数方法很好用，但是存在一个浪费内存的问题。如果现在为其再添加一个方法`showWheel`。那么，CreateCar就变成了下面这样，这样做有一个很大的弊端，对于每一个实例对象，`showWheel`都是一模一样的内容，每一次生成一个实例，都必须生成重复的内容，多占用一些内存。这样既不环保，也缺乏效率。

```js
function CreateCar(color,wheel){

    this.color = color;
    this.wheel = wheel;
    this.showWheel = function(){//添加一个新方法
        alert(this.wheel);
    }
}

//还是采用同样的方法，生成实例：
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");

alert(cat1.showWheel == cat2.showWheel); //false

```

#### 五、Prototype 原型

Javascript规定，每一个构造函数都有一个`prototype`属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。 这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。`__proto__`是原型链，指向实例化的函数原型。

```js
function CreateCar(color,wheel){
    //属性写构造函数里面
    this.color = color;
    this.wheel = wheel;
}

//方法写原型里面
CreateCar.prototype.showWheel = function(){
    alert(this.wheel);
}
CreateCar.prototype.showName = function(){
    alert('车');
}

//生成实例。
var cat1 = new CreateCar("红色","4");
var cat2 = new CreateCar("蓝色","4");
cat1.showName();//'车'

//这时所有实例的showWheel属性和showName方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率。
alert(cat1.showWheel == cat2.showWheel );//true
alert(cat1.showName == cat2.showName );//true
console.log(cat1.__proto__ === CreateCar.prototype); //true

```

#### 六、对象和函数的关系

对象是由函数构造出来的。

1. Object是Function 的一个实例。 `Object.constructor  == Function  //true`

2. 函数是Function 的实例，但不是Object 的实例

```js
function fn(){}
fn.constructor  == Function  //true
fn.constructor  == Object    //false 

```

3. {} 与 Object 的关系

```js
var obj = {};
obj.constructor  === Object   //true

```

#### 七、静态方法和静态属性

只属于类而不属于实例化对象

```js
function foo(){
    this.show = function(){
        return this;
    }
}

foo.test = 123; //静态属性

foo.say = function(){
    return this;
}
foo.say();

var fn = new foo(); //实例化的新的对象，this指向这个新的对象，不能访问类的静态方法
fn.say(); //Noname1.html:45 Uncaught TypeError: fn.say is not a function
console.log(foo.say() == fn.say());

```

#### 八、对象继承

1. 利用call()及for in继承 。
    给对象的constructor.prototype添加方法属性，对象就会继承，如果要实现一个对象继承其他对象，采用如下方法。

```js
//人类
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.run = function(){
    console.log('跑路~')
};
Person.prototype.say = function(){
    console.log('说话~')
};

console.log(Person.prototype);

//男人
function Man(){
    this.sex = "男";
}

Man.prototype = Person.prototype;

Man.prototype.yyy = function(){
    console.log('嘤嘤嘤');
}
//会发现Person的prototype也改变了，因为复杂对象的赋值操作是引用而不是赋值
console.log(Person.prototype);


//人类
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.run = function(){
    console.log('跑路~')
};
Person.prototype.say = function(){
    console.log('说话~')
};

console.log(Person.prototype);

//男人
function Man(){
    this.sex = "男";
}

for(var key in Person.prototype){
    Man.prototype[key] = Person.prototype[key];
    console.log(key)
}
Man.prototype.yyy = function(){
    console.log('嘤嘤嘤');
}

console.log(Person.prototype);
var xm = new Man();
xm.yyy();

```

2. 采用中介

```js
function ClassA(name){
    this.name = name;
}
ClassA.prototype.say = function(){
    console.log(666);
}

//中继来做准备工作
function Ready(){}//
Ready.prototype = ClassA.prototype;//引用

//需要来继承ClassA
function ClassB(){}
ClassB.prototype = new Ready();//new 返回了一个新对象 __proto__指向被实例化的构造函数的prototype
ClassB.prototype.constructor = ClassB;
console.log(ClassB.prototype);

```
3. 采用中介，使用call改变this指向

```js
function ClassA(name){
    this.name = name;
}
ClassA.prototype.showName = function(){
    console.log(this.name);
}

//中继来做准备工作
function Ready(){}//
Ready.prototype = ClassA.prototype;//引用

//需要来继承ClassA
function ClassB(name){
    ClassA.call(this,name);
}
ClassB.prototype = new Ready();//new 返回了一个新对象 __proto__指向被实例化的构造函数的prototype
ClassB.prototype.constructor = ClassB;
console.log(ClassB.prototype);
var xiaoming = new ClassB('小明');
xiaoming.showName();

```

#### 九、多态

同一个方法,面对不同的对象有不同的表现形式就叫做多态。

```js
var obj = {
    eat : function(_type){
        if(_type == '猫'){
            console.log('猫粮')
        }else if (_type == "狗") {
            console.log('狗粮')
        }else{
            console.log("吃饭");
        }
    }
};
obj.eat("狗");

```
#### 十、 hasOwnProperty

查看该属性是否在这个对象本身上，只有在自身属性上才会返回真，在原型链上会返回假。

```js
function ClassA(){}
ClassA.prototype.test = function(){
    console.log('test')
}

var a = new ClassA();
a.test();
console.log(a.hasOwnProperty('test')); //false

```

#### 十一、描述符（修饰符）

描述符是对一个属性的特性的描述，defineProperty设置描述符（修饰符），value设置属性值，configurable是否允许修饰符被改变 默认为false，enumerable 是否可以被枚举 默认为false，writable 是否可以被 = 等号改变 默认为false。

```js
var obj = {
    a : 1
};
var c = 666;
Object.defineProperty(obj,'c',{
    //value : 233,
    //enumerable : false,
    //writable : true,//他的值能否改变
    //设置的时候调用
    set : function(n){
        //n 就是等号的右边的值
        c = c*n;
    },

    //获取的时候调用
    get : function(){
        return c;
    },

    configurable : true,//是否可以再次修改修饰符
});

```

## call与apply

笔记中

## 浅拷贝与深拷贝

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。

浅拷贝的实现方式（详见浅拷贝与深拷贝）：

- Object.assign()：需注意的是目标对象只有一层的时候，是深拷贝；
- Array.prototype.concat()；
- Array.prototype.slice()。

深拷贝就是在拷贝数据的时候，将数据的所有引用结构都拷贝一份。简单的说就是，在内存中存在两个数据结构完全相同又相互独立的数据，将引用型类型进行复制，而不是只复制其引用关系。

深拷贝的实现方式：

- 热门的函数库lodash，也有提供_.cloneDeep用来做深拷贝；
- jquery 提供一个$.extend可以用来做深拷贝；
- JSON.parse(JSON.stringify())；
- 手写递归方法。

递归实现深拷贝的原理：要拷贝一个数据，我们肯定要去遍历它的属性，如果这个对象的属性仍是对象，继续使用这个方法，如此往复。

```javascript
//定义检测数据类型的功能函数
function checkedType(target) {
   return Object.prototype.toString.call(target).slice(8, -1)
}
//实现深度克隆---对象/数组
function clone(target) {
   //判断拷贝的数据类型
   //初始化变量result 成为最终克隆的数据
   let result,
   targetType = checkedType(target)
   if (targetType === 'Object') {
     result = {}
   } else if (targetType === 'Array') {
     result = []
   } else {
     return target
   }
   //遍历目标数据
   for (let i in target) {
     //获取遍历数据结构的每一项值。
     let value = target[i]
     //判断目标结构里的每一值是否存在对象/数组
     if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
       //对象/数组里嵌套了对象/数组
       //继续遍历获取到value值
       result[i] = clone(value)
     } else {
       //获取到value值是基本的数据类型或者是函数。
       result[i] = value
     }
   }
   return result
}
```

## 数组去重

1. ES6方法(常用)

```js
function unique (arr) {
  return Array.from(new Set(arr))
}
const arr = [1,1,true,'true']
unique(arr)
// 简化
const arr1 = [...new Set(arr)]
// 兼容性问题，没有去除{}
```

2. ES5方法(常用)

```js
function unique (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
// 双层循环，外层循环元素，内层比较值，值相同，删除
// NaN和{}没有去重，null消失
```

3. 利用indexOf

```js
function unique (arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) arr.push(arr[i])
  }
  return array
}
// 创建一个空的结果数组，for循环原数组，判断结果数组是否存在当前元素，没有才push
// NaN和{}没有去重
```

4. 利用sort

```js
function unique (arr) {
  if (!Array.isArray(arr)) return
  arr = arr.sort()
  const array = [arr[0]]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) array.push(arr[i])
  }
  return array
}
// 利用sort排序，然后根据排序后的结果进行遍历相邻元素比较
// NaN，{}没有去重
```

5. 利用对象的属性不能相同的特点进行去重（推荐）

```js
function unique (arr) {
  if (!Array.isArray(arr)) return
  var array = []
  var obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      array.push(arr[i])
      obj[arr[i]] = 1
    } else obj[arr[i]]++
  }
}
// true去掉了，NaN和{}去重
```

6. 利用includes

```js
function unique (arr) {
  if (!Array.isArray(arr)) return
  var array = []
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) array.push(arr[i])
  }
  return array
}
// {}没有去掉
```

7. 利用hasOwnProperty(推荐)

```js
function unique (arr) {
  var obj = {}
  return arr.filter(function(item, index, arr) {
    return obj.hasOwnProperty(typeof item + item) ? false
      : (obj[typeof item + item] = true)
  })
}
// 利用hasOwnProprety判断是否存在对象属性
// 所有都去重了
```

8. reduce去重(推荐)

```js
function unique (arr) {
  if (!Array.isArray(arr)) return
  var obj = {}
  arr.reduce((item, next) => {
    obj[next] ? '' : obj[next] = true && item.push(next)
    return item
  }, [])
  return arr
}
// 所有都去重了
```


9. 利用递归去重

```js
function unique (arr) {
  var array = arr
  var len = array.length
  array.sort((a, b) => a - b)
  function loop (inx) {
    if (inx >= 1) {
      if (array[inx] === array[inx - 1]) array.splice(inx, 1)
      loop(inx - 1)
    }
  }
  loop(len - 1)
  return array
}
```

## this对象

笔记中

## 什么是UA?

浏览器标识（UA）可以使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件，从而判断用户是使用电脑浏览还是手机浏览，让网页作出自动的适应。

使用navigator对象(Navigator 对象包含有关浏览器的信息)
1.Navigator.appCodeName,浏览器代码名的字符表示
2.appName，浏览器的名称
3.appVersion 返回brower平台和版本信息
4.platform，返回运行浏览器的操作系统平台
5.userAgent，返回客户机发送给服务器的useragent头部的值

有时不可避免的我们需要网页加载的时候，动态判断UA（UserAgent），判断出是PC电脑在访问，还是手机移动端在访问。对于静态网页来说，使用PHP是无法判断的，静态网页在生成的时候，PHP代码就已经执行完毕了。因此，我们需要使用JS来做这个判断。

```js
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
    }
    if (ua.match(/WeiBo/i) == "weibo") {
        //在新浪微博客户端打开
    }
    if (ua.match(/QQ/i) == "qq") {
        //在QQ空间打开
    }
    if (browser.versions.ios) {
        //是否在IOS浏览器打开
    } 
    if(browser.versions.android){
        //是否在安卓浏览器打开
    }
}else{
    //否则就是PC浏览器打开
}
```



## 事件绑定，事件监听，事件委托

（1）**事件绑定**

​        要想让 JavaScript 对用户的操作作出响应，首先要对 DOM 元素绑定事件处理函数。所谓事件处理函数，就是处理用户操作的函数，不同的操作对应不同的名称。

　　在JavaScript中，有三种常用的绑定事件的方法：

　　　　在DOM元素中直接绑定；

　　　　在JavaScript代码中绑定；

　　　　绑定事件监听函数。

#### 　　A.在DOM中直接绑定事件

我们可以在DOM元素上绑定onclick、onmouseover、onmouseout、onmousedown、onmouseup、ondblclick、onkeydown、onkeypress、onkeyup等。如果想知道更多事件类型请查看，[ DOM事件](http://www.runoob.com/jsref/dom-obj-event.html)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
1 <input type="button" value="click me" onclick="hello()">
2 
3 <script>
4 function hello(){
5     alert("hello world!");
6 }
7 </script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 　　**B.**在JavaScript代码中绑定事件

　　在JavaScript代码中（即 `script` 标签内）绑定事件可以使JavaScript代码与HTML标签分离，文档结构清晰，便于管理和开发。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
1 <input type="button" value="click me" id="btn">
2 
3 <script>
4 document.getElementById("btn").onclick = function(){
5     alert("hello world!");
6 }
7 </script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　C.使用事件监听绑定事件

　　绑定事件的另一种方法是用 addEventListener() 或 attachEvent() 来绑定事件监听函数。下面详细介绍，事件监听。

（2）**事件监听**

　　关于事件监听，W3C规范中定义了3个事件阶段，依次是捕获阶段、目标阶段、冒泡阶段。起初Netscape制定了JavaScript的一套事件驱动机制（即事件捕获）。随即IE也推出了自己的一套事件驱动机制（即事件冒泡）。最后W3C规范了两种事件机制，分为捕获阶段、目标阶段、冒泡阶段。IE8以前IE一直坚持自己的事件机制（前端人员一直头痛的兼容性问题），IE9以后IE也支持了W3C规范。

#### 　　W3C规范【语法】

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
element.addEventListener(event, function, useCapture)
//event : （必需）事件名，支持所有DOM事件 。

//function：（必需）指定要事件触发时执行的函数。

//useCapture：（可选）指定事件是否在捕获或冒泡阶段执行。true，捕获。false，冒泡。默认false。

//注：IE8以下不支持。

<input type="button" value="click me" id="btn1">

<script>
document.getElementById("btn1").addEventListener("click",hello);
function hello(){
    alert("hello world!");
}
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#### 　　IE标准【语法】

```html
element.attachEvent(event, function)
//event：（必需）事件类型。需加“on“，例如：onclick。
//function：（必需）指定要事件触发时执行的函数。
<input type=``"button" value="click me" id="btn2"><script>
    document.getElementById("btn2").attachEvent("onclick",hello);
    function hello(){   alert("hello world!");}
</script>
```

#### 　　事件监听的优点

　　a、可以绑定多个事件。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<input type="button" value="click me" id="btn3">

<script>
var btn3 = document.getElementById("btn3");
btn3.onclick = function(){
    alert("hello 1");   //不执行
}
btn3.onclick = function(){
    alert("hello 2");   //执行
}
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　常规的事件绑定只执行最后绑定的事件。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<input type="button" value="click me" id="btn4">

<script>
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click",hello1);
btn4.addEventListener("click",hello2);

function hello1(){
    alert("hello 1");
}
function hello2(){
    alert("hello 2");
}
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　两个事件都执行了。

　　b、可以解除相应的绑定

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<input type="button" value="click me" id="btn5">

<script>
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click",hello1);//执行了
btn5.addEventListener("click",hello2);//不执行
btn5.removeEventListener("click",hello2);

function hello1(){
    alert("hello 1");
}
function hello2(){
    alert("hello 2");
}
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#### 　　封装事件监听

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<input type="button" value="click me" id="btn5">

//绑定监听事件
function addEventHandler(target,type,fn){
    if(target.addEventListener){
        target.addEventListener(type,fn);
    }else{
        target.attachEvent("on"+type,fn);
    }
}

//移除监听事件
function removeEventHandler(target,type,fn){
    if(target.removeEventListener){
        target.removeEventListener(type,fn);
    }else{
        target.detachEvent("on"+type,fn);
    }
}

//测试
var btn5 = document.getElementById("btn5");
addEventHandler(btn5,"click",hello1);//添加事件hello1
addEventHandler(btn5,"click",hello2);//添加事件hello2
removeEventHandler(btn5,"click",hello1);//移除事件hello1
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 （3）**事件委托**

　　**事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<input type="button" value="click me" id="btn6">

var btn6 = document.getElementById("btn6");
document.onclick = function(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    if(target == btn6){
        alert(btn5.value);
    }
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　上面只是个例子，代码尽可能的简化了。在实际的代码中 我们可能用到jQuery的live()、delegate()、bind()、on()等。

#### 　　事件委托优点

　　1、提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。 [实例分析JavaScript中的事件委托和事件绑定 ](https://www.diguage.com/archives/71.html)，这篇文章写得还不错。

#### 　　传统写法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<ul id="list">
  <li id="item1" >item1</li>
  <li id="item2" >item2</li>
  <li id="item3" >item3</li>
</ul>

<script>
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");

item1.onclick = function(){
    alert("hello item1");
}
item2.onclick = function(){
    alert("hello item2");
}
item3.onclick = function(){
    alert("hello item3");
}
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#### 　　事件委托

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<ul id="list">
  <li id="item1" >item1</li>
  <li id="item2" >item2</li>
  <li id="item3" >item3</li>
</ul>

<script>
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");

document.addEventListener("click",function(event){
    var target = event.target;
    if(target == item1){
        alert("hello item1");
    }else if(target == item2){
        alert("hello item2");
    }else if(target == item3){
        alert("hello item3");
    }
})
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　2、动态的添加DOM元素，不需要因为元素的改动而修改事件绑定。

#### 　　传统写法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<ul id="list">
  <li id="item1" >item1</li>
  <li id="item2" >item2</li>
  <li id="item3" >item3</li>
</ul>

<script>
var list = document.getElementById("list");

var item = list.getElementsByTagName("li");
for(var i=0;i<item.length;i++){
    (function(i){
        item[i].onclick = function(){
            alert(item[i].innerHTML);
        }
    })(i)
}

var node=document.createElement("li");
var textnode=document.createTextNode("item4");
node.appendChild(textnode);
list.appendChild(node);

</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　点击item1到item3都有事件响应，但是点击item4时，没有事件响应。说明传统的事件绑定无法对动态添加的元素而动态的添加事件。

#### 　　事件委托

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
<ul id="list">
  <li id="item1" >item1</li>
  <li id="item2" >item2</li>
  <li id="item3" >item3</li>
</ul>

<script>
var list = document.getElementById("list");

document.addEventListener("click",function(event){
    var target = event.target;
    if(target.nodeName == "LI"){
        alert(target.innerHTML);
    }
})

var node=document.createElement("li");
var textnode=document.createTextNode("item4");
node.appendChild(textnode);
list.appendChild(node);

</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　当点击item4时，item4有事件响应。说明事件委托可以为新添加的DOM元素动态的添加事件。

## promise

#### 什么是Promise

Promise 是异步编程的一种解决方案，其实是一个构造函数，自己身上有all、reject、resolve这几个方法，原型上有then、catch等方法。（ps:什么是原型：https://blog.csdn.net/qq_34645412/article/details/105997336）

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。



下面先 new一个Promise

```js
let p = new Promise(function(resolve, reject){
		//做一些异步操作
		setTimeout(function(){
			console.log('执行完成Promise');
			resolve('要返回的数据可以任何数据例如接口返回数据');
		}, 2000);
	});
```

刷新页面会发现控制台直接打出

其执行过程是：执行了一个异步操作，也就是setTimeout，2秒后，输出“执行完成”，并且调用resolve方法。

注意！我只是new了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节。所以我们用Promise的时候一般是包在一个函数中，在需要的时候去运行这个函数，如：

```js
<div onClick={promiseClick}>开始异步请求</div>
 
const promiseClick =()=>{
	 console.log('点击方法被调用')
	 let p = new Promise(function(resolve, reject){
		//做一些异步操作
		setTimeout(function(){
				console.log('执行完成Promise');
				resolve('要返回的数据可以任何数据例如接口返回数据');
			}, 2000);
		});
        return p
	}
```

刷新页面的时候是没有任何反映的，但是点击后控制台打出

当放在函数里面的时候只有调用的时候才会被执行

#### then的用法

那么，接下里解决两个问题：

1、为什么要放在函数里面

2、resolve是个什么鬼

我们包装好的函数最后，会return出Promise对象，也就是说，执行这个函数我们得到了一个Promise对象。接下来就可以用Promise对象上有then、catch方法了，这就是Promise的强大之处了，看下面的代码：

```js
promiseClick().then(function(data){
    console.log(data);
    //后面可以用传过来的数据做些其他操作
    //......
});
```

这样控制台输出

先是方法被调用起床执行了promise,最后执行了promise的then方法，then方法是一个函数接受一个参数是接受resolve返回的数据这事就输出了‘要返回的数据可以任何数据例如接口返回数据’

这时候你应该有所领悟了，原来then里面的函数就跟我们平时的回调函数一个意思，能够在promiseClick这个异步任务执行完成之后被执行。这就是Promise的作用了，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。

你可能会觉得在这个和写一个回调函数没有什么区别；那么，如果有多层回调该怎么办如果callback也是一个异步操作，而且执行完后也需要有相应的回调函数，该怎么办呢总不能再定义一个callback2，然后给callback传进去吧。而Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作。

所以：精髓在于：Promise只是能够简化层层回调的写法，而实质上，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多。所以使用Promise的正确场景是这样的：

```js
promiseClick()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});
```

这样能够按顺序，每隔两秒输出每个异步回调中的内容，在runAsync2中传给resolve的数据，能在接下来的then方法中拿到。

（Ps：此处执行多次是因为研究该用法的时候我在一个react的demo中进行的，该页面多个元素改变导致页面多次渲染执行所致，正常页面只渲染一次的话就所有只会执行一次）

#### reject的用法

以上是对promise的resolve用法进行了解释，相当于resolve是对promise成功时候的回调，它把promise的状态修改为

fullfiled，那么，reject就是失败的时候的回调，他把promise的状态修改为rejected，这样我们在then中就能捕捉到，然后执行“失败”情况的回调。

```js
function promiseClick(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
 
	promiseClick().then(
		function(data){
			console.log('resolved成功回调');
			console.log('成功回调接受的值：',data);
		}, 
		function(reason, data){
			console.log('rejected失败回调');
			console.log('失败执行回调抛出失败原因：',reason);
		}
	);	
```

执行结果：

（PS：此处也是执行多次所以输出多次，执行多次的原因和上次原因一致）

以上代码：调用promiseClick方法执行，2秒后获取到一个随机数，如果小于10，我们算成功，调用resolve修改Promise的状态为fullfiled。否则我们认为是“失败”了，调用reject并传递一个参数，作为失败的原因。并将状态改成rejected

运行promiseClick并且在then中传了两个参数，这两个参数分别是两个函数，then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调。（也就是说then方法中接受两个回调，一个成功的回调函数，一个失败的回调函数，并且能在回调函数中拿到成功的数据和失败的原因），所以我们能够分别拿到成功和失败传过来的数据就有以上的运行结果

#### catch的用法

与Promise对象方法then方法并行的一个方法就是catch,与try  catch类似，catch就是用来捕获异常的，也就是和then方法中接受的第二参数rejected的回调是一样的，如下：

```js
function promiseClick(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
 
	promiseClick().then(
		function(data){
			console.log('resolved成功回调');
			console.log('成功回调接受的值：',data);
		}
	)
	.catch(function(reason, data){
		console.log('catch到rejected失败回调');
		console.log('catch失败执行回调抛出失败原因：',reason);
	});	
```

执行结果：

效果和写在then的第二个参数里面一样。它将大于10的情况下的失败回调的原因输出，但是，它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。如下：

```js
function promiseClick(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
 
	promiseClick().then(
		function(data){
			console.log('resolved成功回调');
			console.log('成功回调接受的值：',data);
			console.log(noData);
		}
	)
	.catch(function(reason, data){
		console.log('catch到rejected失败回调');
		console.log('catch失败执行回调抛出失败原因：',reason);
	});	
```

执行结果：

在resolve的回调中，我们console.log(noData);而noData这个变量是没有被定义的。如果我们不用Promise，代码运行到这里就直接在控制台报错了，不往下运行了。但是在这里，会得到上图的结果，也就是说进到catch方法里面去了，而且把错误原因传到了reason参数中。即便是有错误的代码也不会报错了

#### all的用法

与then同级的另一个方法，all方法，该方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后并且执行结果都是成功的时候才执行回调。

将上述方法复制两份并重命名promiseClick3(), promiseClick2(), promiseClick1()，如下

```js
function promiseClick1(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
	   function promiseClick2(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
	   function promiseClick3(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
 
	Promise
		.all([promiseClick3(), promiseClick2(), promiseClick1()])
		.then(function(results){
			console.log(results);
		});
```

Promise.all来执行，all接收一个数组参数，这组参数为需要执行异步操作的所有方法，里面的值最终都算返回Promise对象。这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面。那么，三个异步操作返回的数据哪里去了呢都在then里面，all会把所有异步操作的结果放进一个数组中传给then，然后再执行then方法的成功回调将结果接收，结果如下：（分别执行得到结果，all统一执行完三个函数并将值存在一个数组里面返回给then进行回调输出）：

这样以后就可以用all并行执行多个异步操作，并且在一个回调中处理所有的返回数据，比如你需要提前准备好所有数据才渲染页面的时候就可以使用all,执行多个异步操作将所有的数据处理好，再去渲染



#### race的用法

all是等所有的异步操作都执行完了再执行then方法，那么race方法就是相反的，谁先执行完成就先执行回调。先执行完的不管是进行了race的成功回调还是失败回调，其余的将不会再进入race的任何回调

我们将上面的方法延迟分别改成234秒


```js
function promiseClick1(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('2s随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('2s数字太于10了即将执行失败回调');
				}
			}, 2000);
		   })
		   return p
	   }
	   function promiseClick2(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('3s随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('3s数字太于10了即将执行失败回调');
				}
			}, 3000);
		   })
		   return p
	   }
	   function promiseClick3(){
		let p = new Promise(function(resolve, reject){
			setTimeout(function(){
				var num = Math.ceil(Math.random()*20); //生成1-10的随机数
				console.log('4s随机数生成的值：',num)
				if(num<=10){
					resolve(num);
				}
				else{
					reject('4s数字太于10了即将执行失败回调');
				}
			}, 4000);
		   })
		   return p
	   }
 
	Promise
		.race([promiseClick3(), promiseClick2(), promiseClick1()])
		.then(function(results){
			console.log('成功',results);
		},function(reason){
			console.log('失败',reason);
		});
```

当2s后promiseClick1执行完成后就已经进入到了then里面回调，在then里面的回调开始执行时，promiseClick2()和promiseClick3()并没有停止，仍旧再执行。于是再过3秒后，输出了他们各自的值，但是将不会再进入race的任何回调。如图2s生成10进入race的成功回调后，其余函数继续执行，但是将不会再进入race的任何回调，2s生成16进入了race的失败回调，其余的继续执行，但是将不会再进入race的任何回调。

race的使用比如可以使用在一个请求在10s内请求成功的话就走then方法，如果10s内没有请求成功的话进入reject回调执行另一个操作。

补充：（由于有人问我怎么实现race的使用比如可以使用在一个请求在10s内请求成功的话就走then方法，如果10s内没有请求成功的话进入reject回调执行另一个操作。这个问题，想是我的表达有点问题，那我就举个例子）

```js
 //请求某个table数据
    function requestTableList(){
        var p = new Promise((resolve, reject) => {
               //去后台请求数据，这里可以是ajax,可以是axios,可以是fetch 
                resolve(res);
        });
        return p;
    }
  //延时函数，用于给请求计时 10s
      function timeout(){
          var p = new Promise((resolve, reject) => {
              setTimeout(() => {
                  reject('请求超时');
              }, 10000);
          });
          return p;
      }
      Promise.race([requestTableList(), timeout()]).then((data) =>{
        //进行成功回调处理
        console.log(data);
      }).catch((err) => {
        // 失败回调处理
          console.log(err);
      });
```

请求一个接口数据，10s内请求完成就展示数据，10s内没有请求完成就提示请求失败

这里定义了两个promise,一个去请求数据，一个记时10s，把两个promise丢进race里面赛跑去，如果请求数据先跑完就直接进入.then成功回调，将请求回来的数据进行展示；如果计时先跑完，也就是10s了数据请求还没有成功，就先进入race的失败回调，就提示用户数据请求失败进入.catch回调，（ps:或者进入reject的失败回调，当.then里面没有写reject回调的时候失败回调会直接进入.catch）


## 节流与防抖

### 节流

规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

```js
function throttle (fun, delay) {
  let last, deferTimer
  return function (args) {
    const that = this
    const _args = arguments
    const now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}
```



### 防抖

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

```js
// 防抖
function debounce (fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}
```



## 设计模式 

### JavaScript中常见的十五种设计模式



在程序设计中有很多实用的设计模式，而其中大部分语言的实现都是基于“类”。

在JavaScript中并没有类这种概念，JS中的函数属于一等对象，在JS中定义一个对象非常简单（var obj = {}），而基于JS中闭包与弱类型等特性，在实现一些设计模式的方式上与众不同。

本文基于[《JavaScript设计模式与开发实践》](https://book.douban.com/subject/26382780/)一书，用一些例子总结一下JS常见的设计模式与实现方法。文章略长，自备瓜子板凳~

 

### 设计原则

**单一职责原则（SRP）**

一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。

应该把对象或方法划分成较小的粒度

**最少知识原则（LKP）**

一个软件实体应当 尽可能少地与其他实体发生相互作用 

应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理

**开放-封闭原则（OCP）**

软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改

当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定

 

### **什么是设计模式**

作者的这个说明解释得挺好

> 假设有一个空房间，我们要日复一日地往里 面放一些东西。最简单的办法当然是把这些东西 直接扔进去，但是时间久了，就会发现很难从这  个房子里找到自己想要的东西，要调整某几样东 西的位置也不容易。所以在房间里做一些柜子也 许是个更好的选择，虽然柜子会增加我们的成  本，但它可以在维护阶段为我们带来好处。使用 这些柜子存放东西的规则，或许就是一种模式

学习设计模式，有助于写出可复用和可维护性高的程序

设计模式的原则是“找出 程序中变化的地方，并将变化封装起来”，它的关键是意图，而不是结构。

不过要注意，使用不当的话，可能会事倍功半。



[一、单例模式](https://www.cnblogs.com/imwtr/p/9451129.html#o1)

[二、策略模式](https://www.cnblogs.com/imwtr/p/9451129.html#o2)

[三、代理模式](https://www.cnblogs.com/imwtr/p/9451129.html#o3)

[四、迭代器模式](https://www.cnblogs.com/imwtr/p/9451129.html#o4)

[五、发布—订阅模式](https://www.cnblogs.com/imwtr/p/9451129.html#o5)

[六、命令模式](https://www.cnblogs.com/imwtr/p/9451129.html#o6)

[七、组合模式](https://www.cnblogs.com/imwtr/p/9451129.html#o7)

[八、模板方法模式](https://www.cnblogs.com/imwtr/p/9451129.html#o8)

[九、享元模式](https://www.cnblogs.com/imwtr/p/9451129.html#o9)

[十、职责链模式](https://www.cnblogs.com/imwtr/p/9451129.html#o10)

[十一、中介者模式](https://www.cnblogs.com/imwtr/p/9451129.html#o11)

[十二、装饰者模式](https://www.cnblogs.com/imwtr/p/9451129.html#o12)

[十三、状态模式](https://www.cnblogs.com/imwtr/p/9451129.html#o13)

[十四、适配器模式](https://www.cnblogs.com/imwtr/p/9451129.html#o14)

[十五、外观模式](https://www.cnblogs.com/imwtr/p/9451129.html#o15)



## 函数式编程

函数式编程是一种编程范式，是一种构建计算机程序结构和元素的风格，它把计算看作是对数学函数的评估，避免了状态的变化和数据的可变

### 纯函数

给定相同的参数，则得到相同的结果
不会有任何副作用

### 特点

```
1.函数是一等公民
2.只用表达式不用语句(总有返回值)
3.没有副作用(side effect)
4.不修改状态
5.引用透明
```

### 优势

```
1. 代码简洁，开发快速
2. 接近自然语言，易于理解
3. 更方便的代码管理
4. 易于"并发编程"
5. 代码的热升级
```

### 范畴与容器

> 我们可以把"范畴"想象成是一个容器，里面包含两样东西。

```
class Category{
    constructor(val){
        this.val = val
    }
    addOne(x){
        return x + 1
    }
}
```

### 函数的合成与柯里化

> X和Y之间的变形关系是函数f，Y和Z之间的变形关系是函数g，那么X和Z之间的关系，就是g和f的合成函数g·f。

![image](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022204.png)

```
const compose = (f,g) => {
    return function(x) {
        return f(g(x))
    }
}
```

### 满足结合律

![image](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022209.png)

```
compose(f, compose(g, h))
// 等同于
compose(compose(f, g), h)
// 等同于
compose(f, g, h)
```

### 柯里化

> 有了柯里化以后，我们就能做到，所有函数只接受一个参数

> f(x)和g(x)合成为f(g(x))，有一个隐藏的前提，就是f和g都只能接受一个参数。如果可以接受多个参数，比如f(x, y)和g(a, b, c)，函数合成就非常麻烦。

```
//柯里化之前
function add(x,y){
    return x + y;
}
add(1,2)

//柯里化之后
function addX(y){
    return function(x){
        return x + y
    }
}
addX(2)(1)
```

### 函子

> 函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。

> 左侧的圆圈就是一个函子，表示人名的范畴。外部传入函数f，会转成右边表示早餐的范畴。

> 任何具有map方法的数据结构，都可以当作函子的实现。

![image](http://www.ruanyifeng.com/blogimg/asset/2017/bg2017022203.png)

```js
class Functor {
    constructor(val){
        this.val = val
    }
    map(f){
        return new Functor(f(this.val))
    }
}
上面代码中，Functor是一个函子，它的map方法接受函数f作为参数，然后返回一个新的函子，里面包含的值是被f处理过的（f(this.val)）。

一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。

(new Functor(2)).map(function(two){
    return two + 2
}

(new Functor('plus')).map(function(s){
    return s.toUpperCase()
})

(new Functor('bombs')).map(_.concat(' away')).map(_.prop('length'));


上面的例子说明，函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器----函子。函子本身具有对外接口（map方法），各种函数就是运算符，通过接口接入容器，引发容器里面的值的变形。

因此，学习函数式编程，实际上就是学习函子的各种运算。由于可以把运算方法封装在函子里面，所以又衍生出各种不同类型的函子，有多少种运算，就有多少种函子。函数式编程就变成了运用不同的函子，解决实际问题。
```

### of方法

> 函数式编程一般约定，函子有一个of方法，用来生成新的容器。

```
Functor.of = function(val){
    return new Functor(val)
}

Functor.of(2).map(function(two){
    return two + 2
})
```

### Maybe函子

> 函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。

```
//报错
Functor.of(null).map(function(s){
    return s.toUpperCase()
})

//解决
class Maybe extends Functor{
    map(f){
        return this.val ? Maybe.of(f(this.val)) : Maybe.of(null)
    }
}
Maybe.of(null).map(function(s){
    return s.toUpperCase()
})
```

### Either函子

> 条件运算if...else是最常见的运算之一， 函数式编程里面，使用 Either 函子表达。

> Either 函子内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的值，左值是右值不存在时使用的默认值。

```js
class Either extends Functor{
    constructor(left,right){
        this.left = left;
        this.right = right;
    }
    map(f){
        return this.right ? Either.of(this.left,f(this.right)) : 
        Either.of(f(this.left),this.right)
    }
}

Either.of = function(left,right){
    return new Either(left,right)
}

var addOne = function(x){
    return x + 1
}

Either.of(5,6).map(addOne)

Either.of(1,null).map(addOne)

上面代码中，如果右值有值，就使用右值，否则使用左值。通过这种方式，Either 函子表达了条件运算。



Either 函子的常见用途是提供默认值。下面是一个例子。

Either.of({address:'xxx'},currentUser.address).map(updateField)
上面代码中，如果用户没有提供地址，Either 函子就会使用左值的默认地址。


Either函子的另一个用途是代替try...catch,使用左值表示错误

fucntion parseJSON(json){
    try{
        return Either.of(null,JSON.parse(json))
    } catch(e:Error){
        return Either.of(e,null)
    }
}

上面代码中，左值为空，就表示没有出错，否则左值会包含一个错误对象e。一般来说，所有可能出错的运算，都可以返回一个 Either 函子。
```

### ap函子

> 函子里面包含的值，完全可能是函数。我们可以想象这样一种情况，一个函子的值是数值，另一个函子的值是函数。

```
function addTwo(x){
    return x + 2
}

const A = Functor.of(2)
const B = Functor.of(addTwo)

上面代码中，函子A内部的值是2，函子B内部的值是函数addTwo。

有时，我们想让函子B内部的函数，可以使用函子A内部的值进行运算。这时就需要用到 ap 函子。

ap 是 applicative（应用）的缩写。凡是部署了ap方法的函子，就是 ap 函子。


class Ap extends Functor {
    ap(F){
        return Ap.of(this.val(F.val))
    }
}

注意，ap方法的参数不是函数，而是另一个函子。

因此，前面例子可以写成下面的形式。

Ap.of(addTwo).ap(Functor.of(2))

ap 函子的意义在于，对于那些多参数的函数，就可以从多个容器之中取值，实现函子的链式操作。
function add(x){
    return function(y){
        return x + y
    }
}

Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3))
```

### Monad函子

> 函子是一个容器，可以包含任何值。函子之中再包含一个函子，也是完全合法的。但是，这样就会出现多层嵌套的函子。

> Monad 函子的作用是，总是返回一个单层的函子。它有一个flatMap方法，与map方法作用相同，唯一的区别是如果生成了一个嵌套函子，它会取出后者内部的值，保证返回的永远是一个单层的容器，不会出现嵌套的情况。

```
Maybe.of(
    Maybe.of(
        Maybe.of({
            name:'plus',
            number:88888888
        })
    )
)

class Monad extends Functor{
    join(){
        return this.val
    }
    flatMap(f){
        return this.map(f).join()
    }
}
```

### IO操作

> I/O 是不纯的操作，普通的函数式编程没法做，这时就需要把 IO 操作写成Monad函子，通过它来完成。

```
var fs = require('fs')

var readFile = function(filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf8')
    })
}

var print = function(x){
    return new IO(function(){
        console.log(x);
        return x
    })
}

上面代码中，读取文件和打印本身都是不纯的操作，但是readFile和print却是纯函数，因为它们总是返回 IO 函子。

如果 IO 函子是一个Monad，具有flatMap方法，那么我们就可以像下面这样调用这两个函数。

readFile('xxx').flatMap(print)

这就是神奇的地方，上面的代码完成了不纯的操作，但是因为flatMap返回的还是一个 IO 函子，所以这个表达式是纯的。我们通过一个纯的表达式，完成带有副作用的操作，这就是 Monad 的作用。

由于返回还是 IO 函子，所以可以实现链式操作。因此，在大多数库里面，flatMap方法被改名成chain。

var tail = function(x){
    return new IO(function(){
        return x[x.length-1]
    })
}

readFile('xxx').flatMap(tail).flatMap(print)
//等同于
readFile('xxx').chain(tail).chain(print)
```

### 实战

```js
class Functor {
  constructor(val){
     this.val = val
  }
  map(f){
    return new Functor(f(this.val))
  }
  static of(val){
    return new Functor(val)
  }
}

const functor1 = Functor.of(2).map(two => two + 2)
const functor2 = Functor.of('plus').map(name => name.toUpperCase())

//console.log(functor2.val)


//const err = Functor.of(null).map(err => err.toUpperCase())
class Maybe extends Functor {
  map(f){
    return this.val ? Maybe.of(f(this.val)) : Maybe.of(this.val)
  }
  static of(val){
    return new Maybe(val)
  }
}

// const err = Maybe.of(null).map(err => err.toUpperCase())


class Either extends Functor {
  constructor(left,right){
    super()
    this.left = left
    this.right = right
  }
  map(f){
    return this.right ? Either.of(this.left,f(this.right)) : Either.of(f(this.left),this.right)
  }
}
    
Either.of = function(left,right){
    return new Either(left,right)
    
}

const addOne = x => x + 1

const res = Either.of(5,6).map(addOne)
const res2 = Either.of(1,null).map(addOne)


class Ap extends Functor{
  ap(F){
    return Ap.of(this.val(F.val))
  }
  static of(val){
    return new Ap(val)
  }
}
const addTwo = x => x + 2
const add = x => y => x + y
                 
const res3 = Ap.of(addTwo).ap(Functor.of(2))
const res6 = Ap.of(add).ap(Maybe.of(2)).ap(Maybe.of(3))
 console.log(res6)
                 
                 
```



## 说一下宏任务和微任务

宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。 

微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务为微任务。（可以理解为回调事件，promise.then，proness.nextTick等等）。

宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。



## export和export default的区别

使用上的不同

```js
export default  xxx
import xxx from './'

export xxx
import {xxx} from './'
```