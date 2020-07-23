(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{642:function(t,a,n){"use strict";n.r(a);var e=n(4),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("css 语法规范")])]),t._v(" "),n("h2",{attrs:{id:"css-样式规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-样式规范"}},[t._v("#")]),t._v(" css 样式规范")]),t._v(" "),n("h3",{attrs:{id:"编码设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编码设置"}},[t._v("#")]),t._v(" 编码设置")]),t._v(" "),n("p",[t._v("采用 UTF-8 编码，在 CSS 代码头部使用：")]),t._v(" "),n("p",[n("code",[t._v('@charset "utf-8";')])]),t._v(" "),n("blockquote",[n("p",[t._v("注意，必须要定义在 CSS 文件所有字符的前面（包括编码注释），@charset 才会生效。")])]),t._v(" "),n("p",[t._v("例如，下面的例子都会使得 @charset 失效：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('  /* 字符编码 */\n  @charset "utf-8";\n  html,\n  body {\n  height: 100%;\n  }\n  @charset "utf-8";\n')])])]),n("h3",{attrs:{id:"命名空间规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名空间规范"}},[t._v("#")]),t._v(" 命名空间规范")]),t._v(" "),n("p",[t._v("布局：以 g 为命名空间，例如：.g-wrap 、.g-header、.g-content。"),n("br"),t._v("\n状态：以 s 为命名空间，表示动态的、具有交互性质的状态，例如：.s-current、s-selected。"),n("br"),t._v("\n工具：以 u 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：u-clearfix、u-ellipsis。"),n("br"),t._v("\n组件：以 m 为命名空间，表示可复用、移植的组件模块，例如：m-slider、m-dropMenu。\n钩子：以 j 为命名空间，表示特定给 JavaScript 调用的类名，例如：j-request、j-open。")]),t._v(" "),n("h3",{attrs:{id:"命名空间思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名空间思想"}},[t._v("#")]),t._v(" 命名空间思想")]),t._v(" "),n("p",[t._v("没有选择 BEM 这种命名过于严苛及样式名过长过丑的规则，采取了一种比较折中的方案。\n不建议使用下划线 "),n("code",[t._v("\\_")]),t._v(" 进行连接")]),t._v(" "),n("blockquote",[n("p",[t._v("节省操作，输入的时候少按一个 shift 键\n能良好区分 JavaScript 变量命名")])]),t._v(" "),n("h3",{attrs:{id:"字符小写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符小写"}},[t._v("#")]),t._v(" 字符小写")]),t._v(" "),n("p",[t._v("定义的选择器名，属性及属性值的书写皆为小写。")]),t._v(" "),n("h3",{attrs:{id:"选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),n("p",[t._v("当一个规则包含多个选择器时，每个选择器独占一行。")]),t._v(" "),n("blockquote",[n("p",[t._v("、+、~、> 选择器的两边各保留一个空格。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  .g-header > .g-header-des,\n  .g-content ~ .g-footer {\n\n  }\n")])])]),n("h3",{attrs:{id:"命名短且语义化良好"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名短且语义化良好"}},[t._v("#")]),t._v(" 命名短且语义化良好")]),t._v(" "),n("p",[t._v("对于选择器的命名，尽量简洁且具有语义化，不应该出现 g-abc 这种语义模糊的命名。")]),t._v(" "),n("h3",{attrs:{id:"规则声明块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#规则声明块"}},[t._v("#")]),t._v(" 规则声明块")]),t._v(" "),n("blockquote",[n("p",[t._v("当规则声明块中有多个样式声明时，每条样式独占一行。\n在规则声明块的左大括号 { 前加一个空格。\n在样式属性的冒号 : 后面加上一个空格，前面不加空格。\n在每条样式后面都以分号 ; 结尾。\n规则声明块的右大括号 } 独占一行。\n每个规则声明间用空行分隔。\n所有最外层引号使用单引号 ' 。\n当一个属性有多个属性值时，以逗号 , 分隔属性值，每个逗号后添加一个空格，当单个>性值过长时，每个属性值独占一行。")])]),t._v(" "),n("p",[t._v("完整示例如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  .g-footer,\n  .g-header {\n  position: relative;\n  }\n\n  .g-content {\n  background:\n  linear-gradient(135deg, deeppink 25%, transparent 25%) -50px 0,\n  linear-gradient(225deg, deeppink 25%, transparent 25%) -50px 0,\n  linear-gradient(315deg, deeppink 25%, transparent 25%),\n  linear-gradient(45deg, deeppink 25%, transparent 25%);\n  }\n\n  .g-content::before {\n  content: '';\n  }\n")])])]),n("p",[t._v("数值与单位")]),t._v(" "),n("blockquote",[n("p",[t._v("当属性值或颜色参数为 0 - 1 之间的数时，省略小数点前的 0 。\ncolor: rgba(255, 255, 255, 0.5)\ncolor: rgba(255, 255, 255, .5);\n当长度值为 0 时省略单位。\nmargin: 0px auto\nmargin: 0 auto\n十六进制的颜色属性值使用小写和尽量简写。\ncolor: #ffcc00\ncolor: #fc0")])]),t._v(" "),n("h3",{attrs:{id:"css-的引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-的引用"}},[t._v("#")]),t._v(" css 的引用")]),t._v(" "),n("p",[t._v("样式放头上，脚本放脚下。不内嵌，只外链")]),t._v(" "),n("p",[t._v("注释用英文，避免解析出现乱码")]),t._v(" "),n("p",[t._v("慎用 "),n("code",[t._v("*")]),t._v(" 通配符。所谓通配符，就是将 CSS 中的所有标签均初始化，不管用的不用的，过时的先进的，一视同仁，这样，大大的占用资源。要有选择的初始化标签。")]),t._v(" "),n("h3",{attrs:{id:"层叠样式类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#层叠样式类型"}},[t._v("#")]),t._v(" 层叠样式类型")]),t._v(" "),n("p",[t._v("类型：")]),t._v(" "),n("ol",[n("li",[t._v("浏览器默认样式")]),t._v(" "),n("li",[t._v("浏览器用户自定义样式")]),t._v(" "),n("li",[t._v("外部样式表")]),t._v(" "),n("li",[t._v("内部样式表")]),t._v(" "),n("li",[t._v("内联样式表"),n("br"),t._v("\n顺序：\n浏览器默认样式 < 浏览器用户自定义样式 < 外部样式表 < 内部样式表 < 内联样式表\n样式表内部选择器\n"),n("ol",[n("li",[t._v("类选择器")]),t._v(" "),n("li",[t._v("类派生选择器")]),t._v(" "),n("li",[t._v("ID 选择器")]),t._v(" "),n("li",[t._v("ID 派生选择器\n样式表内部选择器生效顺序\n类选择器 < 类派生选择器 < ID 选择器 < ID 派生选择器\n生效规则")])]),t._v(" "),n("ul",[n("li",[t._v("样式表的元素选择器选择越精确，则其中的样式优先级越高。\nid 选择器指定的样式 > 类选择器指定的样式 > 元素类型选择器指定的样式")]),t._v(" "),n("li",[t._v("对于相同类型选择器指定的样式，在样式表文件中，越靠后的优先级越高。")]),t._v(" "),n("li",[t._v("一个元素同时应用多个 class，后定义的优先(即近者优先)")]),t._v(" "),n("li",[t._v("如果要让某个样式的优先级变高，可以使用!important 来指定。")])])])]),t._v(" "),n("h3",{attrs:{id:"css-书写顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-书写顺序"}},[t._v("#")]),t._v(" CSS 书写顺序")]),t._v(" "),n("ol",[n("li",[t._v("位置属性(position, top, right, z-index, display, float 等)")]),t._v(" "),n("li",[t._v("大小(width, height, padding, margin)")]),t._v(" "),n("li",[t._v("文字系列(font, line-height, letter-spacing, color- text-align 等)")]),t._v(" "),n("li",[t._v("背景(background, border 等)")]),t._v(" "),n("li",[t._v("其他(animation, transition 等)")])]),t._v(" "),n("h3",{attrs:{id:"样式属性顺序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#样式属性顺序"}},[t._v("#")]),t._v(" 样式属性顺序")]),t._v(" "),n("p",[t._v("单个样式规则下的属性在书写时，应按功能进行分组，并以 Positioning Model > Box Model > Typographic > Visual 的顺序书写，提高代码的可读性。")]),t._v(" "),n("blockquote",[n("p",[t._v("如果包含 content 属性，应放在最前面；\nPositioning Model 布局方式、位置，相关属性包括：position / top / right / bottom / left / z-index / display / float / ...\nBox Model 盒模型，相关属性包括：width / height / padding / margin / border / overflow / ...\nTypographic 文本排版，相关属性包括：font / line-height / text-align / word-wrap / ...\nVisual 视觉外观，相关属性包括：color / background / list-style / transform / animation / transition / ...")])]),t._v(" "),n("p",[t._v("Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。其他属性只在组件内部起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。")]),t._v(" "),n("h3",{attrs:{id:"合理使用使用引号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合理使用使用引号"}},[t._v("#")]),t._v(" 合理使用使用引号")]),t._v(" "),n("p",[t._v("在某些样式中，会出现一些含有空格的关键字或者中文关键字。\nfont-family 内使用引号")]),t._v(" "),n("p",[t._v("当字体名字中间有空格，中文名字体及 Unicode 字符编码表示的中文字体，为了保证兼容性，都建议在字体两端添加单引号或者双引号：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  body {\n  font-family: 'Microsoft YaHei', '黑体-简', '\\5b8b\\4f53';\n  }\n")])])]),n("p",[t._v("background-image 的 url 内使用引号")]),t._v(" "),n("p",[t._v("如果路径里面有空格，旧版 IE 是无法识别的，会导致路径失效，建议不管是否存在空格，都添加上单引号或者双引号：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  div {\n  background-image: url('...');\n  }\n")])])]),n("h3",{attrs:{id:"避免使用-important"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免使用-important"}},[t._v("#")]),t._v(" 避免使用 !important")]),t._v(" "),n("p",[t._v("除去某些极特殊的情况，尽量不要不要使用 !important。")]),t._v(" "),n("p",[t._v("!important 的存在会给后期维护以及多人协作带来噩梦般的影响。")]),t._v(" "),n("p",[t._v("当存在样式覆盖层叠时，如果你发现新定义的一个样式无法覆盖一个旧的样式，只有加上 !important 才能生效时，是因为你新定义的选择器的优先级不够旧样式选择器的优先级高。所以，合理的书写新样式选择器，是完全可以规避一些看似需要使用 !important 的情况的。")]),t._v(" "),n("h3",{attrs:{id:"代码注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码注释"}},[t._v("#")]),t._v(" 代码注释")]),t._v(" "),n("ol",[n("li",[t._v("单行注释")])]),t._v(" "),n("p",[t._v("星号与内容之间必须保留一个空格。\n"),n("code",[t._v("/* 表格隔行变色 */")]),t._v("\n多行注释")]),t._v(" "),n("p",[t._v("星号要一列对齐，星号与内容之间必须保留一个空格。")]),t._v(" "),n("p",[n("code",[t._v("/* 表格隔行变色 */")])]),t._v(" "),n("p",[t._v("规则声明块内注释")]),t._v(" "),n("p",[t._v("使用 "),n("code",[t._v("//")]),t._v(" 注释，"),n("code",[t._v("//")]),t._v(" 后面加上一个空格，注释独立一行。")]),t._v(" "),n("h3",{attrs:{id:"文件注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件注释"}},[t._v("#")]),t._v(" 文件注释")]),t._v(" "),n("p",[t._v("文件顶部必须包含文件注释，用 "),n("code",[t._v("@name")]),t._v(" 标识文件说明。星号要一列对齐，星号与内容之间必须保留一个空格，标识符冒号与内容之间必须保留一个空格。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  @name: 文件名或模块名\n  @description: 文件或模块描述\n  @author: author-name(mail-name@domain.com)\n           author-name2(mail-name2@domain.com)\n  @update: 2015-04-29 00:02\n  @description 为文件或模块描述。\n  @update 为可选项，建议每次改动都更新一下。\n")])])]),n("p",[t._v("当该业务项目主要由固定的一个或多个人负责时，需要添加"),n("code",[t._v("@author")]),t._v(" 标识，一方面是尊重劳动成果，另一方面方便在需要时快速定位责任人。")]),t._v(" "),n("h3",{attrs:{id:"sass-使用建议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sass-使用建议"}},[t._v("#")]),t._v(" SASS 使用建议")]),t._v(" "),n("p",[t._v("嵌套层级规定")]),t._v(" "),n("p",[t._v("使用 SASS 、 LESS 等预处理器时，建议嵌套层级不超过 3 层。")]),t._v(" "),n("p",[t._v("组件/公用类的使用方法")]),t._v(" "),n("p",[t._v("组件/公用类使用 %placeholders 定义，使用 @extend 引用。如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  %clearfix {\n  overflow: auto;\n  zoom: 1;\n  }\n\n  .g-header {\n  @extend %clearfix;\n  }\n")])])]),n("p",[t._v("组件类的思考")]),t._v(" "),n("p",[t._v("使用 SASS ，经常会预先定义好一些常用公用组件类，譬如清除浮动，水平垂直居中，文字 ellipsis。又或者多个元素具有同样的样式，我们希望能够少写这部分代码，公共部分抽离出来只写一次，达到复用。")]),t._v(" "),n("p",[t._v("但是复用的方式在 SASS 中有多种，那么是使用单独使用一个类定义，给需要的标签添加，还是使用 @include 或者 @extend 在定义的类中引入一个 @mixin，或者一个 @function 呢？")]),t._v(" "),n("p",[t._v("基于让 CSS 更简洁以及代码的复用考虑，采用上面的使用 %placeholders 定义，使用 @extend 引用的方案。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("%placeholders，只是一个占位符，只要不通过 @extend 调用，编译后不会产生任何代码量\n使用 @extend 引用，则是因为每次调用相同的 %placeholders 时，编译出来相同的 CSS 样式会进行合并（反之，如果使用 @include 调用定义好的 @mixin，编译出来相同的 CSS 样式不会进行合并）\n这里的组件类特指那些不会动态改变的 CSS 样式，注意与那些可以通过传参生成不同数值样式的 @mixin 方法进行区分\n")])])]),n("p",[t._v("尽量避免使用标签名")]),t._v(" "),n("p",[t._v("使用 SASS ，或者说在 CSS 里也有这种困惑。")]),t._v(" "),n("p",[t._v("假设我们有如下 html 结构：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('  <div class="g-content">\n     <ul class="g-content-list">\n        <li class="item"></li>\n        <li class="item"></li>\n        <li class="item"></li>\n        <li class="item"></li>\n     </ul>\n  </div>\n')])])]),n("p",[t._v("在给最里层的标签命名书写样式的时候，我们有两种选择：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  .g-content {\n  .g-content-list {\n  li {\n  ...\n  }\n  }\n  }\n")])])]),n("p",[t._v("或者是")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  .g-content {\n  .g-content-list {\n  .item {\n  ...\n  }\n  }\n  }\n")])])]),n("p",[t._v("也就是，编译之后生成了下面这两个，到底使用哪个好呢？")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v(".g-content .g-content-list li { }\n.g-content .g-content-list .item { }\n")])])]),n("p",[t._v("基于 CSS 选择器的解析规则（从右向左），建议使用上述第二种 .g-content .g-content-list .item { } ，避免使用通用标签名作为选择器的一环可以提高 CSS 匹配性能。")])])}),[],!1,null,null,null);a.default=s.exports}}]);