(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{669:function(t,a,s){"use strict";s.r(a);var n=s(4),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",[t._v("vue的组件间通信,props,自定义事件,订阅与发布,vuex")])]),t._v(" "),s("h2",{attrs:{id:"通信基本原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通信基本原则"}},[t._v("#")]),t._v(" 通信基本原则")]),t._v(" "),s("ul",[s("li",[t._v("不要在子组件直接修改父组件的状态数据")]),t._v(" "),s("li",[t._v("数据和处理数据的函数应该在统一模块")])]),t._v(" "),s("h2",{attrs:{id:"组件之间通信方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件之间通信方式"}},[t._v("#")]),t._v(" 组件之间通信方式")]),t._v(" "),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),s("ul",[s("li",[t._v("在组件内声明所有的 props，在传递过程中，除了字符串，传递其他数据没有强制绑定数据都会报错\n"),s("ul",[s("li",[t._v("只指定名称")]),t._v(" "),s("li",[t._v("指定名称与类型")]),t._v(" "),s("li",[t._v("指定名称/类型/必要性/默认值")])])]),t._v(" "),s("li",[t._v("使用注意\n"),s("ul",[s("li",[t._v("此方法适用于父组件向子组件传递数据")]),t._v(" "),s("li",[t._v("所有标签属性都会成为组件对象的属性，模板页面可以直接引用")]),t._v(" "),s("li",[t._v("存在缺陷，如果非要向后代组件传递，必须多层传递，兄弟间组件不能直接 props 通信，需借助父组件才可以")])])])]),t._v(" "),s("h3",{attrs:{id:"自定义事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件"}},[t._v("#")]),t._v(" 自定义事件")]),t._v(" "),s("ul",[s("li",[t._v("绑定事件监听并触发事件")]),t._v(" "),s("li",[t._v("使用注意\n"),s("ul",[s("li",[t._v("只适用于子组件向父组件发送数据")]),t._v(" "),s("li",[t._v("隔代组件或兄弟组件不适用")])])])]),t._v(" "),s("p",[t._v('绑定事件 v-on:xxx="xxxFunction",利用函数处理绑定事件,利用'),s("code",[t._v("$emit(xxx,data)")]),t._v("触发事件,前者为事件名，后者为参数(父子组件间的通信)"),s("br"),t._v('\nsync修饰符简化，:xxx.sync="xxx" 等价于 :xxx="xxx", @update:xxx="xxxFunction",只不过在需要'),s("code",[t._v("$emit('update:xxx',data)")]),t._v("传参，格式固定，可以省略绑定函数")]),t._v(" "),s("p",[t._v("利用"),s("code",[t._v("$on")]),t._v("监听事件，组件也是 vue 实例，所以可以使用,相当于 vm.$on，可以用"),s("code",[t._v('ref="xxx"')]),t._v("给组件标记，在生命周期 mounted 中使用"),s("code",[t._v("$refs.xxx.$on('addTodo',this.addTodo)")]),t._v("绑定事件,最后在利用"),s("code",[t._v("$emit(addTodo,todo)")]),t._v("触发事件")]),t._v(" "),s("h3",{attrs:{id:"订阅与发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅与发布"}},[t._v("#")]),t._v(" 订阅与发布")]),t._v(" "),s("p",[t._v("订阅消息与触发布消息(异步操作要在 mounted 中使用)")]),t._v(" "),s("ul",[s("li",[t._v("安装 npm install --save pubsub-js")]),t._v(" "),s("li",[t._v("订阅消息相当于 绑定事件监听")]),t._v(" "),s("li",[t._v("发布消息相当于 触发事件")]),t._v(" "),s("li",[t._v("可以跨组件通信，无论兄弟，父子，子孙都可以")])]),t._v(" "),s("h3",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),s("p",[t._v("后续详解")]),t._v(" "),s("h3",{attrs:{id:"插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),s("p",[t._v("slot")]),t._v(" "),s("ul",[s("li",[t._v("在 2.6 版本之后被舍弃但仍然能用，新版本使用 v-slot:简写#")]),t._v(" "),s("li",[t._v("旧版结构：")]),t._v(" "),s("li",[t._v("子组件 child：")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("确定内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("不确定内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yyy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("不确定内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    - 父组件：\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yyy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("相应的属性,方法也应该在父组件中定义使用")])])}),[],!1,null,null,null);a.default=p.exports}}]);