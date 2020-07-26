(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{645:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("CSS 问题")])]),t._v(" "),a("h2",{attrs:{id:"盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),a("p",[t._v("IE盒子模型：box-sizing: border-box;(怪异模式)")]),t._v(" "),a("p",[t._v("W3C标准盒子模型：box-sizing：content-box；（标准模式）")]),t._v(" "),a("p",[t._v("padding-box； width和height属性包括padding的大小，不包括border和margin")]),t._v(" "),a("p",[t._v("border-box；width和height属性包括padding和border，但不包括margin")]),t._v(" "),a("p",[t._v("content-box；不包含 padding")]),t._v(" "),a("h2",{attrs:{id:"display有那些值，它们的作用是"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display有那些值，它们的作用是"}},[t._v("#")]),t._v(" display有那些值，它们的作用是")]),t._v(" "),a("p",[t._v("block：块状行，默认宽度为父元素宽，可设置宽高，独占一行\nnone：缺省值，像行内元素类型一样显示\ninline：行内元素，默认宽度为内容宽度，不可设置宽高，同行显示\ninline-block：默认宽度为内容宽度，可设置宽高，同行显示\nlist-item：像块状元素一样显示，并添加样式列表标记\ntable：此元素会作为块状级表格来显示\ninherit：继承父元素的display属性\nflex：多栏多列布局")]),t._v(" "),a("h2",{attrs:{id:"清除浮动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),a("p",[t._v("为什么清除浮动：父元素高度无法被撑开，影响父元素同级的元素，与浮动元素同级的非浮动会跟随其后")]),t._v(" "),a("ol",[a("li",[t._v("clear清除浮动：添加空div法并添加样式"),a("code",[t._v("{clear:both;height:0;overflow:hidden;}")])]),t._v(" "),a("li",[t._v("给浮动元素设置高度，缺点：在不确定高度时不适用")]),t._v(" "),a("li",[t._v("给父元素添加浮动元素，缺点：需要给每个浮动元素的父元素都添加浮动，容易出现问题")]),t._v(" "),a("li",[t._v("父元素设置display：inline-block;缺点：父元素的margin 0 auto失效")]),t._v(" "),a("li",[a("code",[t._v("<br>")]),t._v("标签清除浮动，语义不好，不符合行为，样式，结构三者分离的要求")]),t._v(" "),a("li",[t._v("给父元素添加 overflow：hidden 清除浮动")]),t._v(" "),a("li",[t._v("after，before伪类清除浮动(推荐使用)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("clear::after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 兼容IE6，7\n.clear")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"css-单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-单位"}},[t._v("#")]),t._v(" css 单位")]),t._v(" "),a("p",[t._v("1.px：绝对单位，页面按精确像素展示")]),t._v(" "),a("p",[t._v("2.em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。")]),t._v(" "),a("p",[t._v("3.rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持。")]),t._v(" "),a("p",[t._v("4.vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。")]),t._v(" "),a("p",[t._v("5.vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。")]),t._v(" "),a("p",[t._v("6.vmin：vw和vh中较小的那个。")]),t._v(" "),a("p",[t._v("7.vmax：vw和vh中较大的那个。")]),t._v(" "),a("p",[t._v("8.%:百分比")]),t._v(" "),a("p",[t._v("9.in:寸")]),t._v(" "),a("p",[t._v("10.cm:厘米")]),t._v(" "),a("p",[t._v("11.mm:毫米")]),t._v(" "),a("p",[t._v("12.pt:point，大约1/72寸")]),t._v(" "),a("p",[t._v("13.pc:pica，大约6pt，1/6寸")]),t._v(" "),a("p",[t._v("14.ex：取当前作用效果的字体的x的高度，在无法确定x高度的情况下以0.5em计算(IE11及以下均不支持，firefox/chrome/safari/opera/ios safari/android browser4.4+等均需属性加么有前缀)")]),t._v(" "),a("p",[t._v("15.ch:以节点所使用字体中的“0”字符为基准，找不到时为0.5em(ie10+,chrome31+,safair7.1+,opera26+,ios safari 7.1+,android browser4.4+支持)")]),t._v(" "),a("h2",{attrs:{id:"css-选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[t._v("#")]),t._v(" css 选择器")]),t._v(" "),a("p",[t._v("标记选择器，伪类选择器，ID、class选择器，后代选择器（>）、通配选择器、属性选择器、子选择器、相邻兄弟选择器、子串匹配属性选择器等")]),t._v(" "),a("p",[t._v("可以继承：类选择器、标签名选择器、后代选择器（派生选择器）、群组选择器")]),t._v(" "),a("p",[t._v("可以继承的样式：font-size，font-family，color，text-indext\n不可继承的样式：border，padding，margin，width，height")]),t._v(" "),a("p",[t._v("新增伪类")]),t._v(" "),a("p",[t._v("p:first-of-type 选择属于其父元素的首个 "),a("code",[t._v("<p>")]),t._v(" 元素的每个 "),a("code",[t._v("<p>")]),t._v(" 元素。\np:last-of-type  选择属于其父元素的最后 "),a("code",[t._v("<p>")]),t._v(" 元素的每个"),a("code",[t._v("<p>")]),t._v("元素。\np:only-of-type  选择属于其父元素唯一的"),a("code",[t._v("<p>")]),t._v("元素的每个"),a("code",[t._v("<p>")]),t._v(" 元素。\np:only-child    选择属于其父元素的唯一子元素的每个"),a("code",[t._v("<p>")]),t._v(" 元素。\np:nth-child(2)  选择属于其父元素的第二个子元素的每个 "),a("code",[t._v("<p>")]),t._v(" 元素。\n:enabled、:disabled 控制表单控件的禁用状态。\n:checked，单选框或复选框被选中。")]),t._v(" "),a("p",[t._v("加的权重：\n!important 最高\n内联：1000\nid：100\nclass：10，属性（[title]这种）：10，伪类（元素状态）：10，\n元素选择器：1，关系选择器：1，伪元素（不存在的元素，after等）：1\n通配符，继承样式：0")]),t._v(" "),a("p",[t._v("如 div#content 为101")]),t._v(" "),a("h2",{attrs:{id:"css3新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3新特性"}},[t._v("#")]),t._v(" css3新特性")]),t._v(" "),a("p",[t._v("1、颜色：新增RGBA、HSLA模式\n2、文字阴影(text-shadow)\n3、边框：圆角（border-radius）边框阴影：box-shadow\n4、盒子模型：box-sizing\n5、背景：background-size设置背景图片的尺寸，background-origin设置背景图片的原点，background-clip设置背景图片的裁剪区域，以“，”分隔可以设置多背景，用于自适应布局\n6、渐变：linear-gradient、radial-gradient\n7、过渡：transition可实现动画\n8、自定义动画\n9、在CSS3中唯一引入的伪元素是::selection\n10、多媒体查询、多栏布局\n11、border-image\n12、2D转换：transform:translate(x,y)rotate(x,y)skew(x,y)scale(x,y)\n13、3D转换")]),t._v(" "),a("p",[t._v("rgba透明与opacity区别，前者不会继承，后者会继承父元素的opacity属性")]),t._v(" "),a("h2",{attrs:{id:"css-reset的作用和用途，解释css-sprites-如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-reset的作用和用途，解释css-sprites-如何使用"}},[t._v("#")]),t._v(" css reset的作用和用途，解释css sprites,如何使用")]),t._v(" "),a("p",[t._v('Reset重置浏览器的css默认属性，浏览器的品种不同，样式不同，然后重置，让他们统一。\n解释css sprites：css 精灵图，把一堆小的图片整合到一张大的图片（png）上，减轻服务器对图片的请求数量。\n为什么使用精灵图：\ncss精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量\ncss sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用css的"background-image","background-position"的组合进行背景定位，这样可以减少。\n很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是如果请求太多会给服务器增加很大的压力')]),t._v(" "),a("h2",{attrs:{id:"display：none-与-visibility：hidden-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display：none-与-visibility：hidden-区别"}},[t._v("#")]),t._v(" display：none 与 visibility：hidden 区别")]),t._v(" "),a("p",[t._v("前者完全消失，不占空间，后者占空间")]),t._v(" "),a("h2",{attrs:{id:"ie6中的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie6中的问题"}},[t._v("#")]),t._v(" IE6中的问题")]),t._v(" "),a("p",[t._v("实际上IE6中，很多BUG的解决方法都可以使用display:inline、font-size:0、float解决。因此我们在书写代码时要记住，一旦使用了float浮动，就为元素增加一个display:inline样式，可以有效的避免浮动造成的样式错乱问题。使用空DIV时，为了避免其高度影响布局美观，也可以为其加上font-size:0 这样就很容易避免一些兼容上的问题。")]),t._v(" "),a("h2",{attrs:{id:"calc-support-media各自的含义及用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calc-support-media各自的含义及用法"}},[t._v("#")]),t._v(" calc, support, media各自的含义及用法")]),t._v(" "),a("p",[t._v("@support主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。")]),t._v(" "),a("p",[t._v('calc() 函数用于动态计算长度值。 calc()函数支持 "+", "-", "*", "/" 运算；')]),t._v(" "),a("p",[t._v("@media 查询，你可以针对不同的媒体类型定义不同的样式。")]),t._v(" "),a("h2",{attrs:{id:"css水平、垂直居中的写法，请至少写出4种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css水平、垂直居中的写法，请至少写出4种"}},[t._v("#")]),t._v(" css水平、垂直居中的写法，请至少写出4种")]),t._v(" "),a("p",[t._v("水平居中")]),t._v(" "),a("p",[t._v("行内元素: text-align: center\n块级元素: margin: 0 auto\nposition:absolute +left:50%+ transform:translateX(-50%)\ndisplay:flex + justify-content: center")]),t._v(" "),a("p",[t._v("垂直居中")]),t._v(" "),a("p",[t._v("设置line-height 等于height\nposition：absolute +top:50%+ transform:translateY(-50%)\ndisplay:flex + align-items: center\ndisplay:table+display:table-cell + vertical-align: middle;")]),t._v(" "),a("h2",{attrs:{id:"画一条0-5px的直线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画一条0-5px的直线"}},[t._v("#")]),t._v(" 画一条0.5px的直线")]),t._v(" "),a("p",[t._v("height: 1px;\ntransform: scale(0.5);")]),t._v(" "),a("p",[t._v("使用伪类")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border_bottom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".border_bottom::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #d4d6d7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("1 设置height: 1px，根据媒体查询结合transform缩放为相应尺寸。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("2.用::after和::befor,设置border-bottom：1px solid #000,然后在缩放-webkit-transform: scaleY(0.5);可以实现两根边线的需求")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div::after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三角形"}},[t._v("#")]),t._v(" 三角形")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" .a {\n    width: 0;\n    height: 0;\n    border-width: 100px;\n    border-style: solid;\n    border-color: transparent #0099CC transparent transparent;\n    transform: rotate(90deg);/*顺时针旋转90°*/\n }\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"什么是bfc-触发条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc-触发条件"}},[t._v("#")]),t._v(" 什么是BFC 触发条件")]),t._v(" "),a("p",[t._v("（块级格式化上下文），是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。")]),t._v(" "),a("p",[t._v("body根元素\nposition: absolute/fixed\ndisplay: inline-block / table-cells/flex\nfloat 元素\novevflow !== visible")]),t._v(" "),a("p",[t._v("规则：\n属于同一个 BFC 的两个相邻 Box 垂直排列\n属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠\nBFC 的区域不会与 float 的元素区域重叠计算 BFC 的高度时，浮动子元素也参与计算\n文字层不会被浮动层覆盖，环绕于周围")]),t._v(" "),a("h2",{attrs:{id:"css预处理，后处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css预处理，后处理"}},[t._v("#")]),t._v(" css预处理，后处理")]),t._v(" "),a("p",[t._v("css预处理呢，less、sass等。后处理postcss、rework等")]),t._v(" "),a("p",[t._v("那什么是css预处理呢？")]),t._v(" "),a("p",[t._v("CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件。")]),t._v(" "),a("p",[t._v("预处理的优点")]),t._v(" "),a("p",[t._v("提供CSS层缺失的样式层复用机制减少冗余代码提高样式代码的可维护性")]),t._v(" "),a("p",[t._v("实现方式")]),t._v(" "),a("p",[t._v("取到 DSL 源代码 的 分析树")]),t._v(" "),a("p",[t._v("将含有 动态生成 相关节点的 分析树 转换为 静态分析树")]),t._v(" "),a("p",[t._v("将 静态分析树 转换为 CSS 的 静态分析树")]),t._v(" "),a("p",[t._v("将 CSS 的 静态分析树 转换为 CSS 代码")]),t._v(" "),a("p",[t._v("sass和less的使用方式这里就不过多说了。")]),t._v(" "),a("p",[t._v("CSS后处理器 （了解）")]),t._v(" "),a("p",[t._v("CSS 后处理器 是对 CSS 进行处理，并最终生成 CSS 的 预处理器，它属于广义上的 CSS 预处理器。我们很久以前就在用 CSS 后处理器 了，最典型的例子是 CSS 压缩工具（如 clean-css），只不过以前没单独拿出来说过。")]),t._v(" "),a("h2",{attrs:{id:"相邻的两个inline-block节点为什么会出现间隔，该如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相邻的两个inline-block节点为什么会出现间隔，该如何解决"}},[t._v("#")]),t._v(" 相邻的两个inline-block节点为什么会出现间隔，该如何解决")]),t._v(" "),a("p",[t._v("解决的方法是在父元素的样式上加上“font-size:0”")]),t._v(" "),a("h2",{attrs:{id:"meta-viewport-移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-viewport-移动端适配"}},[t._v("#")]),t._v(" meta viewport 移动端适配")]),t._v(" "),a("p",[t._v("meta viewport 的6个属性:")]),t._v(" "),a("p",[t._v('width ： 设置viewport 的宽度\nheight： 设置viewport 的高度\ninitial-scale ： 设置页面的初始缩放值\nminimum-scale ：允许用户的最小缩放值\nmaximum-scale：允许用户的最大缩放值\nuser-scalable： 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许')]),t._v(" "),a("p",[a("code",[t._v('<meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable="no">')])]),t._v(" "),a("h2",{attrs:{id:"position的值，-relative和absolute分别是相对于谁进行定位的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position的值，-relative和absolute分别是相对于谁进行定位的"}},[t._v("#")]),t._v(" position的值， relative和absolute分别是相对于谁进行定位的")]),t._v(" "),a("p",[t._v("relative:相对定位，相对于自己本身在正常文档流中的位置进行定位。\nabsolute:生成绝对定位，相对于最近一级定位不为static的父元素进行定位。\nfixed: （老版本IE不支持）生成绝对定位，相对于浏览器窗口或者frame进行定位。\nstatic:默认值，没有定位，元素出现在正常的文档流中。\nsticky:生成粘性定位的元素，容器的位置根据正常文档流计算得出。")]),t._v(" "),a("h2",{attrs:{id:"常见兼容性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见兼容性问题"}},[t._v("#")]),t._v(" 常见兼容性问题")]),t._v(" "),a("p",[t._v("浏览器默认的margin与padding不同，通过margin：0，padding：0解决\n谷歌浏览器小于12px的文本强制按照12px显示\n通过transform解决")]),t._v(" "),a("h2",{attrs:{id:"css实现宽度自适应100-，宽高比16：9的矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现宽度自适应100-，宽高比16：9的矩形"}},[t._v("#")]),t._v(" css实现宽度自适应100%，宽高比16：9的矩形")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一个16：9的矩形"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".scale")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 56.25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aquamarine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n")])])]),a("h2",{attrs:{id:"常见页面布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见页面布局"}},[t._v("#")]),t._v(" 常见页面布局")]),t._v(" "),a("p",[t._v("静态布局(Static Layout)：最传统、原始的Web布局设计。")]),t._v(" "),a("p",[t._v("流式布局(Liquid Layout)：俗称百分比布局")]),t._v(" "),a("p",[t._v("弹性布局(Flex Layout)")]),t._v(" "),a("p",[t._v("响应式布局(Responsive layout)")]),t._v(" "),a("h2",{attrs:{id:"响应式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局"}},[t._v("#")]),t._v(" 响应式布局")]),t._v(" "),a("p",[t._v("bootstrap 响应式布局的一套css的框架。响应式布局，顾名思义，能根据容器的大小来自适应展示。根据不同的屏幕宽来表达不同的展示。做到自适应。")]),t._v(" "),a("h2",{attrs:{id:"实现布局中间自适应宽度，左右两栏固定宽度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现布局中间自适应宽度，左右两栏固定宽度"}},[t._v("#")]),t._v(" 实现布局中间自适应宽度，左右两栏固定宽度")]),t._v(" "),a("p",[t._v("1.左右固定宽度，中间宽100%，父盒子display：flex，需要居中的盒子要在中间")]),t._v(" "),a("p",[t._v("2.绝对定位法，左右两边absolute")]),t._v(" "),a("p",[t._v("该法布局的好处，三个div顺序可以任意改变。不足是 因为绝对定位，所以如果页面上还有其他内容，top的值需要小心处理，最好能够对css样式进行一个初始化，就像在上面例子中加了一个标题，如果不对样式进行初始化，则两边和中间的值会对不齐。 另外，随着浏览器窗口缩小，小于两盒子宽度的时候，会发生压缩")]),t._v(" "),a("p",[t._v("3.自身浮动，左右两个盒子浮动，中间盒子必须在最后")]),t._v(" "),a("p",[t._v("该布局法的好处是受外界影响小，但是不足是 三个元素的顺序，center一定要放在最后，这是和绝对定位不一样的地方，center占据文档流位置，所以一定要放在最后，左右两个元素位置没有关系。当浏览器窗口很小的时候，右边元素会被击倒下一行")]),t._v(" "),a("p",[t._v("4.圣杯布局")]),t._v(" "),a("h2",{attrs:{id:"透明问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透明问题"}},[t._v("#")]),t._v(" 透明问题")]),t._v(" "),a("blockquote",[a("p",[t._v("opacity:0.6;\nfilter:alpha(opacity=60);/* IE8 及更早版本 */")])])])}),[],!1,null,null,null);s.default=e.exports}}]);