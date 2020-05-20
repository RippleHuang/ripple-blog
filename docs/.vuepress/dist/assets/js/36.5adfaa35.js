(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{650:function(n,e,t){"use strict";t.r(e);var a=t(4),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[n._v("Ajax库 axios")])]),n._v(" "),t("h2",{attrs:{id:"axios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[n._v("#")]),n._v(" axios")]),n._v(" "),t("p",[n._v("通用的 ajax 请求库，vue2.x 使用广泛")]),n._v(" "),t("h2",{attrs:{id:"axios-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-使用"}},[n._v("#")]),n._v(" axios 使用")]),n._v(" "),t("p",[n._v("下载安装 npm install axios --save")]),n._v(" "),t("ul",[t("li",[n._v("全局使用")])]),n._v(" "),t("p",[n._v("在 main.js 中")]),n._v(" "),t("blockquote",[t("p",[t("code",[n._v("const http = require('axios')")]),n._v(" > "),t("code",[n._v("Vue.use(VueAxios, Axios)")]),n._v("\n组件中\n"),t("code",[n._v("this.$http[method]()")])])]),n._v(" "),t("ul",[t("li",[n._v("局部使用,按需导入")])]),n._v(" "),t("blockquote",[t("p",[n._v("import axios form 'axios'")])]),n._v(" "),t("p",[n._v("通过 axios 发送 ajax 请求\naxios.get('/regUrl').then(data=>{\n// success callback\nconsole.log(data)\n}).catch(err=>{\nconsole.log(err)\n})")]),n._v(" "),t("h2",{attrs:{id:"支持的请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持的请求"}},[n._v("#")]),n._v(" 支持的请求")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("axios.get(url[, config])\naxios.post(url[, data[, config]])\naxios.delete(url[, config])\naxios.head(url[, config])\naxios.options(url[, config])\naxios.put(url[, data[, config]])\naxios.patch(url[, data[, config]])\n")])])]),t("h2",{attrs:{id:"取消请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消请求"}},[n._v("#")]),n._v(" 取消请求")]),n._v(" "),t("p",[n._v("创建取消请求令牌")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("```js\nconst { CancelToken } = axios\nconst source = CancelToken.source()\n\naxios.create({\ncancelToken: source.token,\n})\n```\n")])])]),t("p",[n._v("调用")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('```js\nsource.cancel("用户取消");\n```\n')])])]),t("p",[n._v("捕获取消错误")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('```js\nhttp\n.get("user")\n.then()\n.catch((error) => {\n    if (axios.isCancel(error)) {\n    // 用户取消\n    } else {\n    // 请求失败\n    }\n});\n```\n')])])]),t("h2",{attrs:{id:"并发请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发请求"}},[n._v("#")]),n._v(" 并发请求")]),n._v(" "),t("p",[n._v("实例")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("``` js\ncreated () {\nfunction httpM() {\n    return http.get('music')\n}\nfunction httpS() {\n    return http.get('singer')\n}\n}\naxios.all([httpM(), httpS()])\n.then((res) => {\n    // 两次请求成功才执行 then()\n    console.log(res[0])\n    console.log(res[1])\n})\n\naxios.all([httpM(), httpS()])\n// 使用 axios.spread 分割\n.then(axios.spread((res1, res2) => {\n    console.log(res1)\n    console.log(res2)\n}))\n```\n")])])]),t("h2",{attrs:{id:"拦截器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[n._v("#")]),n._v(" 拦截器")]),n._v(" "),t("p",[n._v("全局拦截器")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("``` js\n// 请求拦截\naxios.interceptors.request.use(\n(config) => {\n    // 在发送请求之前\n    if (config.url.match('login')) {\n    config.baseURL = 'http://www.baidu.com/';\n    }\n    return config;\n},\n(err) => {\n    // 请求错误\n    return Promise.reject(err)\n}\n);\n\n// 响应拦截\naxios.interceptors.response.use(\n(res) => {\n    return res;\n},\nerr => Promise.reject(err)\n);\n```\n")])])]),t("p",[n._v("取消拦截")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("``` js\naxios.interceptors.request.eject(myInterceptor)\n```\n")])])]),t("h2",{attrs:{id:"自定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义"}},[n._v("#")]),n._v(" 自定义")]),n._v(" "),t("p",[n._v("可以使用自定义配置新建一个 axios 实例")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("``` js\nimport axios from 'axios'\nimport queryString from 'queryString'\n\naxios.create({\n// 设置请求的服务器 URL\nurl: '',\n// 设置请求方式，默认是 get\nmethod: 'get',\n// 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。\nbaseURL: '',\n// 允许在向服务器发送前，修改请求数据，只适合 PUT、POST 和 PATCH\ntransformRequest: [function (data) {\n    // 对 data 进行任意转换处理\n    return data;\n}],\n// 传递给 then/catch 前，允许修改响应数据\ntransformResponse: [function (data) {\n    // 对 data 进行任意转换处理\n    return data;\n}],\n// 自定义请求头\nheaders: {\n    'content-type': 'application/x-www-form-urlencoded'\n},\n// 设置查询字符串\nparams: {\n    name: ''\n},\n// `params` 序列化的函数\nparamsSerializer: function(params) {\n    return params\n},\n// 请求主体数据, 只适用于这些请求方法 PUT, POST 和 PATCH\ndata: {\n\n},\n// 设置请求超时ms(0 表示无超时时间), 若超时，请求将被中断\ntimeout: 1000,\n// 跨域请求时是否需要使用凭证, 默认的 false\nwithCredentials: false,\n// 允许自定义处理请求，以使测试更轻松\nadapter: function (config) {\n    // 返回一个 promise 并应用一个有效的响应\n},\n// 表示应该使用 HTTP 基础验证，并提供凭据，将覆写掉 `headers` 设置的自定义 `Authorization`\nauth: {\n    username: '',\n    password: ''\n},\n// 表示服务器响应的数据类型, 默认 'json',\n// 可以是 'arraybuffer'、'blob'、'document'、'text'、'stream'\nresponseType: 'json',\n// 用作 xsrf token 的值的cookie的名称，默认 'XSRF-TOKEN'\nxsrfCookieName: 'XSRF-TOKEN', // default\n// 承载 xsrf token 的值的 HTTP 头的名称, 默认 'X-XSRF-TOKEN'\nxsrfHeaderName: 'X-XSRF-TOKEN',\n// 允许为上传处理进度事件, 对原生进度事件的处理\nonUploadProgress: function (progressEvent) { },\n// 允许为下载处理进度事件\nonDownloadProgress: function (progressEvent) { },\n// 允许的响应内容的最大尺寸\nmaxContentLength: 2000,\n// 定义对于给定的HTTP 响应状态码是 resolve 或 reject\nvalidateStatus: function (status) {\n    return status >= 200 && status < 300; // 默认的\n},\n// 定义在 node.js 中 follow 的最大重定向数目, 如果设置为0，将不会 follow 任何重定向\nmaxRedirects: 5,\n// 定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：\nhttpAgent: new http.Agent({ keepAlive: true }), // 默认不启用\nhttpsAgent: new https.Agent({ keepAlive: true }),\n// 定义代理服务器的主机名称和端口，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization`\nproxy: {\n    host: '127.0.0.1',\n    port: 9000,\n    // HTTP 基础验证应当用于连接代理，并提供凭据\n    auth: : {\n    username: 'admin',\n    password: 'admin'\n    }\n},\n\n// 指定用于取消请求的 cancel token\ncancelToken: new CancelToken(function (cancel) {\n})\n})\n```\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);