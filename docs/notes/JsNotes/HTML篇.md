---
title: HTML篇
date: 2020-07-23
publish: true
categories:
  - HTML
tags:
  - HTML
---

## HTML语义化理解

什么：根据内容的结构(内容语义化)，选择合适的标签（代码语义化），便于开发者易读和易写代码同时让浏览器的爬虫和机器很好的解析

为什么：
->1.在没有css的情况下，页面也能呈现出很好的效果
->2.用户体验,例如title，alt，label的应用 
->3.有利于SEO，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和关键字权重
->4方便团队开发和维护，减少差异性

怎么做：减少使用无语义的div与span，可以使用div或p时，尽量用p，p默认有上下间距，对兼容有利，不用纯样式标签b，font，u等，改用css设置
需要强调的文本，可以用strong（不用b）和em（不用i），可以用css就不用这两个
表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来

## Doctype作用，标准模式（严格）与兼容模式（混杂/怪异）区别，知道多少种Doctype类型

作用：声明浏览器使用什么文档标准解析

区别：
怪异模式，浏览器使用自己的怪异模式解析渲染页面
1.怪癖模式中 ：width是元素的实际宽度；
2.给span等行内元素设置wdith和height会生效；
3.margin:0 auto会失效；
4.图片的padding会失效；
5.Table中的字体属性不能继承上层的设置；
6.white-space:pre会失效；
标准模式，浏览器使用W3C的标准解析渲染页面
严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。

DOCTYPE 不存在或格式不正确会导致文档以混杂模式呈现。

三种：标准模式（standard mode）混杂模式（quirks mode）准标准模式（almost standard mode），标准与准标准基本一致
标准模式可以通过strict.dtd或xhtml1-strict.dtd或HTML5直接`<!DOCTYPE html>`
准标准模式可以使用过渡型（transitional）或框架集型（frameset）的文档类型来触发

使用 window.top.document.compatMode 可显示为什么模式

## HTML与XHTML,XML的区别

HTML：超文本标记语言，构成网页最基本的东西
XML：可扩展标记语言 区别：HTML标签都是预定的，XML可以自己定义
XHTML：可扩展超文本标记语言
区别：XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
标签名，属性名必须用小写字母。
属性值必须加引号
所有布尔值属性必须加属性值
XHTML 文档必须拥有根元素。如body，head


## 页面导入样式时，使用link和@import的区别

（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;

## HTML5有哪些新特性，移除了哪些，如何处理HTML5的浏览器兼容问题，如何区分HTML5与HTML

拖拽释放API
画布 Canvas;
地理 Geolocation;
音频与视频 video 和 audio 元素;
本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
sessionStorage 的数据在浏览器关闭后自动删除;
语义化更好的内容元素，比如 article、footer、header、nav、section;
表单控件，calendar、date、time、email、url、search;
新的技术webworker, websocket, Geolocation;

移除的元素：
纯表现的元素：basefont，big，center，font, s，strike，tt，u;
对可用性产生负面影响的元素：frame，frameset，noframes；

兼容：使用成熟的框架、比如html5shim
```html
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```
区分HTML与HTML5：DOCTYPE声明\新增的结构元素\功能元素

## iframe的优缺点

优点：
解决加载缓慢的第三方内容如图标和广告等的加载问题
Security sandbox，安全沙箱
并行加载脚本

缺点：
iframe会阻塞主页面的Onload事件；
搜索引擎的检索程序无法解读这种页面，不利于SEO;
内容为空也需要加载时间

使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
动态给iframe添加src属性值，这样可以绕开以上两个问题。

## img的title与alt

title是global attributes之一，用于为元素提供附加的advisory information。通常当鼠标滑动到元素上的时候显示。
alt是<img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提高图片可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。

## 对前端界面工程师的理解，对前端开发工程师的理解

前端是最贴近用户的程序员，比后端、数据库、产品经理、运营、安全都近。
1、实现界面交互
2、提升用户体验
3、有了Node.js，前端可以实现服务端的一些事情
前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好，
参与项目，快速高质量完成实现效果图，精确到1px；
与团队成员，UI设计，产品经理的沟通；
做好的页面结构，页面重构和用户体验；
处理hack，兼容、写出优美的代码格式；
针对服务器的优化、拥抱最新前端技术。

## SEO优化需要考虑什么

语义化html标签
合理的title, description,keywords;
重要的html代码放前面
少用iframe, 搜索引擎不会抓取iframe中的内容
图片加上alt

## 网页内容需要多语言，要怎么做

采用统一编码utf-8模式，utf-8与Unicode区别，前者是使用最广的一种unicode的实现方式，unicode用于统一地区性文字编码，utf-8就是每次8个位传输数据，而后者是1次16个位

## HTML5为什么只需要写`<!DOCTYPE HTML>`

HTML4.01基于SGML。所以需要对DTD进行引用，HTMl5反之，但是需要doctype来规范浏览器行为 
SGML是标准通用标记语言,简单的说，就是比HTML,XML更老的标准，这两者都是由SGML发展而来的

## 行内元素，块状元素，空(void)元素有哪些 

首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
（1）行内元素有：a b span img input select strong（强调的语气）
（2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
（3）常见的空元素：
`<br> <hr> <img> <input> <link> <meta>`
鲜为人知的是：
`<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>`

## 浏览器内核的理解，常见的浏览器内核

主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
（1）渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
（2）JS引擎则：解析和执行javascript来实现网页的动态效果。
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。所以渲染引擎又称浏览器内核

Trident内核：IE，360，搜狗浏览器；
Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
Presto内核：Opera7及以上 [Opera内核原为：Presto，现为：Blink;]
Blink内核：Opera，Chrome [ Chrome的：Blink（WebKit的分支）]；
Webkit内核：Safari，Chrome(已改为Blink)
移动端的浏览器内核主要说的是系统内置浏览器的内核。

Android手机而言，使用率最高的就是Webkit内核，大部分国产浏览器宣称的自己的内核，基本上也是属于webkit二次开发。

iOS以及WP7平台上，由于系统原因，系统大部分自带浏览器内核，一般是Safari或者IE内核Trident的

## HTML5的离线存储怎么使用，工作原理是什么

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
如何使用：
1、页面头部像下面一样加入一个manifest的属性；
`<html manifest="cache.manifest">`
2、在cache.manifest文件的编写离线存储的资源；
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
/ /offline.html

3、在离线状态时，操作window.applicationCache进行需求实现

离线缓存和浏览器缓存的区别

离线缓存允许我们在没网的时候通过读取离线文件进行站点的访问，而浏览器缓存即使浏览器又对资源文件的缓存也必须在有网的情况下读取缓存文件以提高文件加载速度，没网的时候依然显示网络断开的错误。

Service Worker ,PWA离线缓存

## 浏览器是怎么对HTML5的离线存储资源进行管理和加载的

在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

离线的情况下，浏览器就直接使用离线存储的资源。


## cookie，sessionStorage，localStorage的区别

cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
存储大小：
cookie数据大小不能超过4k。
sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M-10M。
有期时间：
localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
sessionStorage 数据在当前浏览器窗口关闭后自动删除。
cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## Label的作用，是怎么用的

```html
 <label for="Name">Number:</label>
 <input type=“text“name="Name" id="Name"/>
 <label>Date:<input type="text" name="B"/></label>
```
label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。label标签主要是方便鼠标点击使用，扩大可点击的范围，增强用户操作体验

## 如何实现浏览器内多个标签页之间的通信

WebSocket、SharedWorker；
也可以调用localstorge、cookies等本地存储方式；
localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
我们通过监听事件，控制它的值来进行页面信息通信；
注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；

## 如何在页面上实现圆形可点击区域

1、map+area或者svg
2、border-radius
3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

## title与h1，b与strong，i与em的区别

title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；
strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。
i内容展示为斜体，em表示强调的文本；
Physical Style Elements -- 自然样式标签
b, i, u, s, pre
Semantic Style Elements -- 语义样式标签
strong, em, ins, del, code
应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。

## 使用data-属性的好处是什么

自定义属性在dataset对象中统一管理，遍历很方便，不至于零零散散;
可以利用这一点在生成DOM结构时把数据储存在自定义属性中,通过一系列交互操作,可以再获得这些数据,而不再用ajax去后台取得数据。

## 把HTML5看做一个开放平台，他的构建模块有哪些

标签及属性 地理位置 画布 视频 音频 拖放 微数据 应用缓存 Web存储 web workers 服务器发送事件

## `<script>`,`<script async>`和` <script defer>` 的区别

1.首先`<script async>`和`<script defer>`都是异步加载js文件；
2.区别是：async在加载完之后自动执行；defer:在所有元素解析完之后；

## 为什么推荐css`<link>`在head之前，js`<script>`在`</body>`之前

作用：当页面渲染完成再去执行`< script>`，防止页面阻塞。
例外：希望DOM还没加载必须需要先加载的js会放置在<head>中,有些加了defer、async的<script>也会放在< head>中。

## 什么是渐进式渲染

服务器渲染一部分，客户端渲染一部分

## 页面渲染HTML的过程/浏览器渲染原理

1.浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是 documentElement，对应的是html标签。

2.浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html中的style。

3.DOM Tree + CSSOM(CSS Rule Tree) --> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。

DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的css属性。

4.一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。

以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM

　　自上而下解析，遇到任何样式（link、style）和脚本（script）都会阻塞
　　1）css加载不会阻塞html文件的解析，但会阻塞dom的渲染
　　2）css加载会阻塞后面js语句的执行
　　3）js会阻塞html的解析和渲染
　　4）没有defer和async标签的script会立即加载并执行
　　5）有async标签的js，js的加载执行和html的解析和渲染并行
　　6）有defer标签的js，js的加载和html的解析和渲染并行，但会在html解析完成后执行,在触发DOMContentLoaded事件前执行
　　7）DOMContentLoaded和onload的区别：DOMContentLoaded在html解析完毕后执行，loload在页面完全加载完成后执行（包括样式和图片）
2.解析css，生成CSSOM，css对象模型
3.dom和css合并，构建渲染树（Render Tree）
4.布局（Layout）和绘制（Paint），重绘（repaint）和重排（reflow/回流）
　　1）重绘：根据元素的新属性重新绘制，使元素呈现新的外观
　　2）重排：当渲染树中的一部分因为元素的规模尺寸，布局，隐藏等改变而需要重新构建
　　3）重排必定会引发重绘，但重绘不一定会引发重排
　　
　　监听资源加载完成有四种方式

　　1. window.onload = function(){....}
　　2. window.addEventListener("load",function(){....});
　　3. document.body.onload = function(){....}
　　4. <body onload = "load()">

## href与src区别

href (Hypertext Reference)指定网络资源的位置，从而在当前元素或者当前文档和由当前属性定义的需要的锚点或资源之间定义一个链接或者关系。（目的不是为了引用资源，而是为了建立联系，让当前标签能够链接到目标地址。）

src source（缩写），指向外部资源的位置，指向的内容将会应用到文档中当前标签所在位置。
href与src的区别

1、请求资源类型不同：href 指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的联系。在请求 src 资源时会将其指向的资源下载并应用到文档中，比如 JavaScript 脚本，img 图片；
2、作用结果不同：href 用于在当前文档和引用资源之间确立联系；src 用于替换当前内容；
3、浏览器解析方式不同：当浏览器解析到src ，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。

## 简述同步与异步

同步是阻塞模式，指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么会一直等待下去，直到收到信息
异步是非阻塞模式，指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态，当有消息返回时才处理

## 什么是渐进增强和优雅降级

渐进增强(progressive enhancement)：针对低版本浏览器进行构建页面，保证基本功能，然后再针对高版本浏览器进行效果，交互的改进和追加功能，达到更好的用户体验

优雅降级(graceful degradation)：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容

区别：优雅是从复杂的现状开始，并试图减少用户体验的供给
增强是从非常基础的版本开始不断扩充，以适应未来环境的需求

## web标准与w3c的理解

标签闭合，标签小写，不乱嵌套，使用外链css和js脚本
结构行为表现分离，加快文件下载与页面速度
更少的代码和组件，容易维护，改版方便，提高网站易用性

## Restful API是什么

而所谓的restful就是用来规范api的一种约束
而如果想你的api被称为restful api，只要遵循其规定的约束即可。

6大原则

(1).C-S架构：数据在server端，Client端只需要使用就行，两端分离，前者的拓展性变强，后者代码可移植性变强，两端单独开发，互不干扰

(2).无状态：http请求本身就是无状态的，基于C-S架构，客户端的每一次请求带有充分的信息能够让服务端识别。请求所需的一些信息都包含在URL的查询参数、header、div，服务端能够根据请求的各种参数，无需保存客户端的状态，将响应正确返回给客户端。无状态的特征大大提高的服务端的健壮性和可拓展性。

(3).统一的接口：REST架构的核心内容，统一的接口对于RESTful服务非常重要。客户端只需要关注实现接口就可以，接口的可读性加强，使用人员方便调用。
REST接口约束定义为：资源识别; 请求动作; 响应信息; 它表示通过uri标出你要操作的资源，通过请求动作（http method）标识要执行的操作，通过返回的状态码来表示这次请求的执行结果。

(4).一致的数据格式

服务端返回的数据格式要么是XML，要么是Json（获取数据），或者直接返回状态码，一些知名网站的开放平台的操作数据的api，post、put、patch都是返回的一个状态码 。

如请求一条微博信息，服务端响应信息应该包含这条微博相关的其他URL，客户端可以进一步利用这些URL发起请求获取感兴趣的信息，再如分页可以从第一页的返回数据中获取下一页的URT也是基于这个原理。

(5).可缓存

在万维网上，客户端可以缓存页面的响应内容。因此响应都应隐式或显式的定义为可缓存的，若不可缓存则要避免客户端在多次请求后用旧数据或脏数据来响应。管理得当的缓存会部分地或完全地除去客户端和服务端之间的交互，进一步改善性能和延展性。

(6).按需编码、可定制代码

服务端可选择临时给客户端下发一些功能代码让客户端来执行，从而定制和扩展客户端的某些功能。比如服务端可以返回一些 Javascript 代码让客户端执行，去实现某些特定的功能。提示：REST架构中的设计准则中，只有按需编码为可选项。如果某个服务违反了其他任意一项准则，严格意思上不能称之为RESTful风格。

一般的约束：
1.使用名词
2.methods对应不同的请求动作，get为查询操作，post为新增操作，put为更新操作，patch为部分更新，delete为删除操作
3.使用`-`而不是`_`来提高URI的可读性
4.使用小写字母
5.不要使用文件扩展名 文件扩展名看起来很糟糕，不会增加任何优势
6.使用查询组件过滤URI集合
7.不要在末尾使用`/`
8.使用http状态码定义api执行结果，1XX:信息，2XX:成功，3XX:重定向，4XX:客户端错误，5XX:服务端错误
9.api定义版本

## 同源与跨域，JSONP原理

同源策略：限制从一个源(同源)加载的文档或脚本与来自另一个源的资源进行交互（限制不同源之间的资源交互）。这是一个用于隔离潜在恶意文件的关键的安全机制。

同源：一段脚本只能读取来自同一来源的窗口和文档的属性，源指协议，域名和端口一致，一旦有一个不同就是跨域

资源：
1.Cookie、LocalStorage和IndexDB无法获取。
2.无法获取和操作DOM。
3.不能发送Ajax请求。我们要注意，Ajax只适合同源的通信。

前后端通信：
同源
1.Ajax：不支持跨域
跨域
2.WebSocket：不受同源策略的限制，支持跨域
3.CORS：不受同源策略的限制，支持跨域，可以理解成支持同源与跨域的Ajax
4.JSONP：通过`<script>`标签的异步加载来实现的。给服务器传一个回调函数，服务器返回一个传递过去的回调函数名称的js代码.
再比如说，实际开发中，可以通过`<script>`标签的src，里面放url，加载很多在线的插件。这就是用到了JSONP
5.页面hash：url的#后面的内容就叫Hash。Hash的改变，页面不会刷新。这就是用 Hash 做跨域通信的基本原理，url的?后面的内容叫Search。Search的改变，会导致页面刷新，因此不能做跨域通信。通过

```js
//A中的伪代码
    var B = document.getElementsByTagName('iframe');
    B.src = B.src + '#' + 'jsonString';  //我们可以把JS 对象，通过 JSON.stringify()方法转成 json字符串，发给 B
// B中的伪代码
    window.onhashchange = function () {  //通过onhashchange方法监听，url中的 hash 是否发生变化
        var data = window.location.hash;
    };
```

6.postMessage：H5中新增的postMessage()方法，可以用来做跨域通信

```js
// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息
 	Bwindow.postMessage('data', 'http://B.com'); //这里强调的是B窗口里的window对象
  // 在窗口B中监听 message 事件
    Awindow.addEventListener('message', function (event) {   //这里强调的是A窗口里的window对象
        console.log(event.origin);  //获取 ：url。这里指：http://A.com
        console.log(event.source);  //获取：A window对象
        console.log(event.data);    //获取传过来的数据
    }, false);
```

7.设置代理服务器

## 完整的HTTP事任务是怎么一个过程

1.域名解析
2.发起TCP的三次握手
3.建立TCP连接后发起http请求
4.服务器端响应http请求，浏览器得到html代码
5.浏览器解析html代码，并请求html代码中的资源
6.浏览器对页面进行渲染呈现给用户

## 网页从输入网址到渲染完成经历了哪些过程？

大致可以分为如下7步：

输入网址；
发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
与web服务器建立TCP连接；
浏览器向web服务器发送http请求；
web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
浏览器下载web服务器返回的数据及解析html源文件；
生成DOM树，解析css和js，渲染页面，直至显示完成；

##  线程与进程的区别？

一个程序至少有一个进程,一个进程至少有一个线程.

线程的划分尺度小于进程，使得多线程程序的并发性高。

另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。

线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。

从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别

## TCP 传输的三次握手、四次挥手策略

三次握手：

为了准确无误地吧数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送后的情况置之不理，他一定会向对方确认是否送达，握手过程中使用TCP的标志：SYN和ACK

1.发送端首先发送一个带SYN的标志的数据包给对方
2.接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息
3.最后，发送端再回传一个带ACK的标志的数据包，代表“握手”结束

如在握手过程中某个阶段莫明中断，TCP协议会再次以相同的顺序发送相同的数据包

断开一个TCP连接需要“四次挥手”

第一次挥手：主动关闭方发送一个FIN，用来关注主动方到被动关闭方的数据传送，也即是主动关闭方告诫被动关闭方：我已经不会再给你发数据了（在FIN包之前发送的数据，如果没有收到对应的ACK确认报文，主动关闭方依然会重发这些数据）。但是，此时主动关闭方还可以接受数据

第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号收到序号 +1（与SYN相同，一个 FIN占用一个序号）

第三次挥手：被动关闭方发送一个 FIN。用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会给你发送数据了

第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手

##  HTTP 和 HTTPS，为什么HTTPS安全？

HTTP协议通常承载与 TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS
默认HTTP的端口号为80，HTTPS的端口号为443
因为网络请求需要中间有很多的服务器路由的转发，中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有，https之所有说比http安全，是因为他利用ssl/tls协议传输。包含证书，流量转发，负载均衡，页面适配，浏览器适配，refer传递等，保障了传输过程的安全性



一、HTTP 和 HTTPS 的基本概念

HTTP：超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。它可以使浏览器更加高效。HTTP 协议是以明文方式发送信息的，如果黑客截取了 Web 浏览器和服务器之间的传输报文，就可以直接获得其中的信息。

HTTP 原理：

①  客户端的浏览器首先要通过网络与服务器建立连接，该连接是通过 TCP 来完成的，一般 TCP 连接的端口号是80。 建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是 MIME 信息包括请求修饰符、客户机信息和许可内容。

②  服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是 MIME 信息包括服务器信息、实体信息和可能的内容。

 

HTTPS：是以安全为目标的 HTTP 通道，是 HTTP 的安全版。HTTPS 的安全基础是 SSL。SSL 协议位于 TCP/IP 协议与各种应用层协议之间，为数据通讯提供安全支持。SSL 协议可分为两层：SSL 记录协议（SSL Record Protocol），它建立在可靠的传输协议（如TCP）之上，为高层协议提供数据封装、压缩、加密等基本功能的支持。SSL 握手协议（SSL Handshake Protocol），它建立在 SSL 记录协议之上，用于在实际的数据传输开始前，通讯双方进行身份认证、协商加密算法、交换加密密钥等。

​                                                       

 

HTTPS 设计目标：

(1) 数据保密性：保证数据内容在传输的过程中不会被第三方查看。就像快递员传递包裹一样，都进行了封装，别人无法获知里面装了什么  。

(2) 数据完整性：及时发现被第三方篡改的传输内容。就像快递员虽然不知道包裹里装了什么东西，但他有可能中途掉包，数据完整性就是指如果被掉包，我们能轻松发现并拒收 。

(3) 身份校验安全性：保证数据到达用户期望的目的地。就像我们邮寄包裹时，虽然是一个封装好的未掉包的包裹，但必须确定这个包裹不会送错地方，通过身份校验来确保送对了地方  。


二、HTTP 与 HTTPS  的区别

1、HTTPS  协议需要到 CA （Certificate Authority，证书颁发机构）申请证书，一般免费证书较少，因而需要一定费用。(以前网易官网是http，而网易邮箱是 https 。)

2、HTTP 是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协议。

3、HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

4、HTTP 的连接很简单，是无状态的。HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全。(无状态的意思是其数据包的发送、传输和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)


三、HTTPS 相对于 HTTP 的改进

双向的身份认证

客户端和服务端在传输数据之前,会通过基于X.509证书对双方进行身份认证 。具体过程如下：

客户端发起 SSL 握手消息给服务端要求连接。

服务端将证书发送给客户端。

客户端检查服务端证书，确认是否由自己信任的证书签发机构签发(客户端内置了所有受信任 CA 的证书)。 如果不是，将是否继续通讯的决定权交给用户选择 ( 注意，这里将是一个安全缺陷 )。如果检查无误或者用户选择继续，则客户端认可服务端的身份。

服务端要求客户端发送证书，并检查是否通过验证。失败则关闭连接，认证成功则从客户端证书中获得客户端的公钥，一般为 1024 位或者 2048 位。到此，服务器客户端双方的身份认证结束，双方确保身份都是真实可靠的。

注意：

(1) 采用 HTTPS 协议的服务器必须要有一套数字证书，可以自己制作，也可以向组织申请。区别就是自己颁发的证书需要客户端验证通过，才可以继续访问。这套证书其实就是一对公钥和私钥。

(2) 互联网有太多的服务需要使用证书来验证身份，以至于客户端（操作系统或浏览器等）无法内置所有证书，需要通过服务端将证书发送给客户端。

(3) 客户端内置的是 CA 的根证书(Root Certificate)，HTTPS 协议中服务器会发送证书链（Certificate Chain）给客户端。

 

数据传输的机密性

客户端和服务端在开始传输数据之前，会协商传输过程需要使用的加密算法。 客户端发送协商请求给服务端, 其中包含自己支持的非对成加密的密钥交换算法 ( 一般是RSA)，数据签名摘要算法 ( 一般是SHA或者MD5) ，加密传输数据的对称加密算法 ( 一般是DES)，以及加密密钥的长度。 服务端接收到消息之后，选中安全性最高的算法，并将选中的算法发送给客户端，完成协商。客户端生成随机的字符串，通过协商好的非对称加密算法，使用服务端的公钥对该字符串进行加密，发送给服务端。 服务端接收到之后，使用自己的私钥解密得到该字符串。在随后的数据传输当中，使用这个字符串作为密钥进行对称加密。

 

防止重放攻击

SSL 使用序列号来保护通讯方免受报文重放攻击。这个序列号被加密后作为数据包的负载。在整个 SSL 握手中,都有一个唯一的随机数来标记 SSL 握手。 这样防止了攻击者嗅探整个登录过程，获取到加密的登录数据之后，不对数据进行解密, 而直接重传登录数据包的攻击手法。

可以看到，鉴于电子商务等安全上的需求，HTTPS 对比 HTTP 协议，在安全方面已经取得了极大的增强。总结来说，HTTPS 的改进点在于创造性的使用了非对称加密算法，在不安全的网路上，安全的传输了用来进行非对称加密的密钥，综合利用了非对称加密的安全性和对称加密的快速性。


四、HTTPS 的优点

1、使用 HTTPS 协议可认证用户和服务器，确保数据发送到正确的客户机和服务器。

2、HTTPS 协议是由SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，要比 HTTP 协议安全，可防止数据在传输过程中不被窃取、修改，确保数据的完整性。

3、HTTPS 是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。


五、HTTPS 的缺点（对比优点）

1、HTTPS 协议握手阶段比较费时，会使页面的加载时间延长近。

2、HTTPS 连接缓存不如 HTTP 高效，会增加数据开销，甚至已有的安全措施也会因此而受到影响。

3、HTTPS 协议的安全是有范围的，在黑客攻击、拒绝服务攻击和服务器劫持等方面几乎起不到什么作用。

4、SSL 证书通常需要绑定 IP，不能在同一 IP 上绑定多个域名，IPv4 资源不可能支撑这个消耗。

5、成本增加。部署 HTTPS 后，因为 HTTPS 协议的工作要增加额外的计算资源消耗，例如 SSL 协议加密算法和 SSL 交互次数将占用一定的计算资源和服务器成本。

6、HTTPS 协议的加密范围也比较有限。最关键的，SSL 证书的信用链体系并不安全，特别是在某些国家可以控制 CA 根证书的情况下，中间人攻击一样可行。


六、HTTPS 的连接过程

https://blog.csdn.net/kobejayandy/article/details/52433660（图片是我借用这位大佬的，大家可以看看）

 

图片中的过程是按 8 个步骤分的，但是网上有更详细的步骤，所以我把详细的过程和这个图片配在一起。

① 客户端的浏览器向服务器发送请求，并传送客户端 SSL 协议的版本号，加密算法的种类，产生的随机数，以及其他服务器和客户端之间通讯所需要的各种信息。

② 服务器向客户端传送 SSL 协议的版本号，加密算法的种类，随机数以及其他相关信息，同时服务器还将向客户端传送自己的证书。

③ 客户端利用服务器传过来的信息验证服务器的合法性，服务器的合法性包括：证书是否过期，发行服务器证书的 CA 是否可靠，发行者证书的公钥能否正确解开服务器证书的 "发行者的数字签名"，服务器证书上的域名是否和服务器的实际域名相匹配。如果合法性验证没有通过，通讯将断开；如果合法性验证通过，将继续进行第四步。

④ 用户端随机产生一个用于通讯的 "对称密码"，然后用服务器的公钥（服务器的公钥从步骤②中的服务器的证书中获得）对其加密，然后将加密后的“预主密码”传给服务器。

⑤ 如果服务器要求客户的身份认证（在握手过程中为可选），用户可以建立一个随机数然后对其进行数据签名，将这个含有签名的随机数和客户自己的证书以及加密过的密钥一起传给服务器。

⑥ 如果服务器要求客户的身份认证，服务器必须检验客户证书和签名随机数的合法性，具体的合法性验证过程包括：客户的证书使用日期是否有效，为客户提供证书的 CA  是否可靠，发行 CA 的公钥能否正确解开客户证书的发行 CA 的数字签名，检查客户的证书是否在证书废止列表（CRL）中。检验如果没有通过，通讯立刻中断；如果验证通过，服务器将用自己的私钥解开加密的私钥，然后执行一系列步骤来产生主通讯密码（客户端也将通过同样的方法产生相同的主通讯密码）。

⑦ 服务器和客户端用相同的对称加密密钥，对称密钥用于 SSL 协议的安全数据通讯的加解密通讯。同时在 SSL 通讯过程中还要完成数据通讯的完整性，防止数据通讯中的任何变化。

⑧ 客户端向服务器端发出信息，指明后面的数据通讯将使用的步骤 ⑦ 中的主密码为对称密钥，同时通知服务器客户端的握手过程结束。

⑨ 服务器向客户端发出信息，指明后面的数据通讯将使用的步骤 ⑦ 中的主密码为对称密钥，同时通知客户端服务器端的握手过程结束。

⑩ SSL 的握手部分结束，SSL 安全通道的数据通讯开始，客户和服务器开始使用相同的对称密钥进行数据通讯，同时进行通讯完整性的检验。


上述的过程需要弄懂的核心思想

客户端解析证书

这部分工作是由客户端的 TLS 来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等等，如果发现异常，则会弹出一个警告框，提示证书存在问题。如果证书没有问题，那么就生成一个对称加密密钥，然后用公钥对该密钥进行非对称加密。

 

传送加密信息

这部分传送的是用公钥加密后的对称加密密钥，目的就是让服务端得到这个密钥，以后客户端和服务端的通信就可以通过这个密钥来进行加密解密了。

 

服务端解密信息

服务端用非对称加密算法里的私钥解密后，得到了客户端传过来的对称加密算法的私钥，然后把之后传输的内容通过该值进行对称加密。

 

为什么用非对称加密协商对称加密密钥

对称加密的特点：对称密码体制中只有一种密钥，并且是非公开的。如果要解密就得让对方知道密钥，所以想要保证其安全性就要保证密钥的安全。

非对称加密的特点：算法强度复杂、安全性依赖于算法与密钥但是由于其算法复杂，而使得加密解密速度没有对称加密解密的速度快。非对称密钥体制有两种密钥，其中一个是公开的，这样就可以不需要像对称密码那样传输对方的密钥了，这样安全性就大了很多。

非对称加密公钥和私钥的使用方法：(1)公钥加密私钥解密。(2)私钥做数字签名，公钥验证。


补充：
SSL 提供服务

(1) 认证用户和服务器，确保数据发送到正确的客户机和服务器；

(2) 加密数据以防止数据中途被窃取；

(3) 维护数据的完整性，确保数据在传输过程中不被改变。


SSL 工作流程

服务器认证阶段：

(1) 客户端向服务器发送一个开始信息 "Hello" 以便开始一个新的会话连接；

(2) 服务器根据客户的信息确定是否需要生成新的主密钥，如需要则服务器在响应客户的 "Hello" 信息时将包含生成主密钥所需的信息；

(3) 客户根据收到的服务器响应信息，产生一个主密钥，并用服务器的公开密钥加密后传给服务器；

(4) 服务器回复该主密钥，并返回给客户一个用主密钥认证的信息，以此让客户认证服务器。

 

用户认证阶段：在此之前，服务器已经通过了客户认证，这一阶段主要完成对客户的认证。经认证的服务器发送一个提问给客户，客户则返回（数字）签名后的提问和其公开密钥，从而向服务器提供认证。

 

SSL 协议提供的安全通道有以下三个特性：

机密性：SSL 协议使用密钥加密通信数据。

可靠性：服务器和客户都会被认证，客户的认证是可选的。

完整性：SSL 协议会对传送的数据进行完整性检查。

 

服务器证书(server certificates)是 SSL 数字证书的一种形式，意指通过提交数字证书来证明您的身份或表明您有权访问在线服务。再者简单来说，通过使用服务器证书可为不同站点提供身份鉴定并保证该站点拥有高强度加密安全。是组成 Web 服务器的 SSL 安全功能的唯一的数字标识。通过相互信任的第三方组织获得，并为用户提供验证您 Web 站点身份的手段。服务器证书包含详细的身份验证信息，如服务器内容附属的组织、颁发证书的组织以及称为公开密钥的唯一的身份验证文件。


## 前端页面有哪三层，作用是什么

结构层：HTML/XHTML(DOM节点)
样式层：CSS（页面渲染）
行为层：JS（页面动画效果）

## 前端优化，提高网页加载速度

1.压缩 css, js, 图片
2.减少 http 请求次数， 合并 css、js 、合并图片（雪碧图）
3.使用 CDN
4.减少 dom 元素数量
5.图片懒加载
6.静态资源另外用无 cookie 的域名
7.减少 dom 的访问（缓存 dom）
8.巧用事件委托
9.样式表置顶、脚本置低

## 移动端性能优化？

> - 尽量使用css3动画，开启硬件加速
> - 适当使用touch时间代替click时间
> - 避免使用css3渐变阴影效果
> - 可以用transform: translateZ(0) 来开启硬件加速
> - 不滥用float。float在渲染时计算量比较大，尽量减少使用
> - 不滥用web字体。web字体需要下载，解析，重绘当前页面
> - 合理使用requestAnimationFrame动画代替setTimeout
> - css中的属性（css3 transitions、css3 3D transforms、opacity、webGL、video）会触发GUP渲染，耗电

## WEB应用从服务器主动推送Data到客户端有哪些方式

HTML5 WebSoket
WebSocket 通过 Flash
XHR长时间连接
XHR Multipart Streaming
不可见Iframe
`<script>`标签的长时间连接(可跨域)

## JSON的了解

轻量级的数据交换格式，是js的一个子集，数据格式简单易于读写，占用宽带小

## 异步加载的方式

defer(只支持IE)
async
动态创建DOM(用的最多)
创建script，插入到DOM中，加载完毕后进行回调

## xss，csrf的概念

XSS

全称Cross Site Scripting，名为跨站脚本攻击，黑客将恶意脚本代码植入到页面中从而实现盗取用户信息等操作。

常见的攻击情景：

    1、用户A访问安全网站B，然后用户C发现B网站存在XSS漏洞，此时用户C向A发送了一封邮件，里面有包含恶意脚本的URL地址（此URL地址还是网站B的地址，只是路径上有恶意脚本），当用户点击访问时，因为网站B中cookie含有用户的敏感信息，此时用户C就可以利用脚本在受信任的情况下获取用户A的cookie信息，以及进行一些恶意操作。
    
    这种攻击叫做反射性XSS
    
    2、假设网站B是一个博客网站，恶意用户C在存在XSS漏洞的网站B发布了一篇文章，文章中存在一些恶意脚本，例如img标签、script标签等，这篇博客必然会存入数据库中，当其他用户访问该文章时恶意脚本就会执行，然后进行恶意操作。
    
    这种攻击方式叫做持久性XSS，将携带脚本的数据存入数据库，之后又由后台返回。

预防措施：

    1、对输入、输出结果进行过滤和必要的转义
    
    2、尽量使用post，使用get方式时对路径长度进行限制
    
    3、使用httponly禁止黑客通过脚本获取用户cookie数据，但这样无法完全阻止xss攻击，因为发送http请求并不需要主动获取cookie
    
    1.什么是HttpOnly?
    如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性，即便是这样，也不要将重要信息存入cookie。XSS全称Cross SiteScript，跨站脚本攻击，是Web程序中常见的漏洞，XSS属于被动式且用于客户端的攻击方式，所以容易被忽略其危害性。其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。

CSRF

全称cross-site request forgery，名为跨站请求伪造，顾名思义就是黑客伪装成用户身份来执行一些非用户自愿的恶意以及非法操作

常见攻击情景：

用户A经常访问博客网站B，用户C发现网站B存在CSRF漏洞，想尽了各种办法勾引用户A访问了C写好的危险网站D，而此时用户A的cookie信息还没有失效，危险网站D中有向网站B求请求的非法操作，这样用户在不知情的情况下就被操控了。

这个时候就会有一个疑问，浏览器本身有同源策略啊，为什么在网站D还可以请求网站B的api，要记住浏览器对img、iframe和script的src是没有同源限制的！所以黑客完全可以利用动态添加这些标签的方法来实现跨站请求。

预防措施：

    1、验证码
    2、tokenId令牌
    3、判断请求的Referer是否正确

CSRF和XSS的区别：

    1、CSRF需要登陆后操作，XSS不需要
    2、CSRF是请求页面api来实现非法操作，XSS是向当前页面植入js脚本来修改页面内容。

## 前端模块化的理解

模块化就是把js程序划分成独立命名，可独立访问的模块，每个模块完成一个子功能，把这些模块集成起来构成一个整体，完成指定的功能

意义：组件复用，降低开发和维护成本
组件单独开发，方便分工合作
模块化遵循标准，方便自动化依赖管理，代码优化，部署
这样会导致模块之间的依赖问题，于是有了CommonJS，AMD，CMD规范，最后出现Webpack
webpack就是前端模块化的一种解决方案

## CommonJS，AMD，CMD规范

通行的js模块化规范主要有两种：浏览器使用AMD，服务端使用CommonJS

## MVC与MVVM的理解

MVC是比较直观的架构模式
MVVM是将 数据-模型-数据双向绑定的思想作为核心，view与Model没有联系，通过viewModel进行交互，而Model和viewModel之间的交互是双向的，视图的数据的改变会同时修改数据源，而数据源数据的变化也会立即反应到view

## 前端路由的原理

什么：是根据不同的url地址展示不同的内容或页面
使用场景：前端路由更多用在单页面应用上，也就是SPA，因为单页面应用，基本上都是前后端分离的，后端自然不会给前端提供路由




