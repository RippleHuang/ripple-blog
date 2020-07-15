---
title: vue Ajax库
date: 2020-04-01
categories:
  - vue框架
tags:
  - vue
  - axios
---

::: tip
Ajax库 axios
:::

<!-- more -->

## axios

通用的 ajax 请求库，vue2.x 使用广泛

## axios 使用

下载安装 npm install axios --save

- 全局使用

在 main.js 中

> `const http = require('axios')` > `Vue.use(VueAxios, Axios)`

> 组件中

> `this.$http[method]()`

- 局部使用,按需导入

> import axios form 'axios'

通过 axios 发送 ajax 请求

```js
axios.get('/regUrl').then(data=>{
// success callback
console.log(data)
}).catch(err=>{
console.log(err)
})
```

## 支持的请求

```js
axios.get(url[, config])
axios.post(url[, data[, config]])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
```

## 取消请求

创建取消请求令牌

```js
const { CancelToken } = axios
const source = CancelToken.source()

axios.create({
cancelToken: source.token,
})
```

调用

```js
source.cancel("用户取消");
```

捕获取消错误

```js
http
.get("user")
.then()
.catch((error) => {
    if (axios.isCancel(error)) {
    // 用户取消
    } else {
    // 请求失败
    }
});
```

## 并发请求

实例

```js
created () {
function httpM() {
    return http.get('music')
}
function httpS() {
    return http.get('singer')
}
}
axios.all([httpM(), httpS()])
.then((res) => {
    // 两次请求成功才执行 then()
    console.log(res[0])
    console.log(res[1])
})

axios.all([httpM(), httpS()])
// 使用 axios.spread 分割
.then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
}))
```

## 拦截器

全局拦截器

```js
// 请求拦截
axios.interceptors.request.use(
(config) => {
    // 在发送请求之前
    if (config.url.match('login')) {
    config.baseURL = 'http://www.baidu.com/';
    }
    return config;
},
(err) => {
    // 请求错误
    return Promise.reject(err)
}
);

// 响应拦截
axios.interceptors.response.use(
(res) => {
    return res;
},
err => Promise.reject(err)
);
```

取消拦截

```js
axios.interceptors.request.reject(myInterceptor)
```

## 自定义

可以使用自定义配置新建一个 axios 实例

```js
import axios from 'axios'
import queryString from 'queryString'

axios.create({
// 设置请求的服务器 URL
url: '',
// 设置请求方式，默认是 get
method: 'get',
// 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
baseURL: '',
// 允许在向服务器发送前，修改请求数据，只适合 PUT、POST 和 PATCH
transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data;
}],
// 传递给 then/catch 前，允许修改响应数据
transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
}],
// 自定义请求头
headers: {
    'content-type': 'application/x-www-form-urlencoded'
},
// 设置查询字符串
params: {
    name: ''
},
// `params` 序列化的函数
paramsSerializer: function(params) {
    return params
},
// 请求主体数据, 只适用于这些请求方法 PUT, POST 和 PATCH
data: {

},
// 设置请求超时ms(0 表示无超时时间), 若超时，请求将被中断
timeout: 1000,
// 跨域请求时是否需要使用凭证, 默认的 false
withCredentials: false,
// 允许自定义处理请求，以使测试更轻松
adapter: function (config) {
    // 返回一个 promise 并应用一个有效的响应
},
// 表示应该使用 HTTP 基础验证，并提供凭据，将覆写掉 `headers` 设置的自定义 `Authorization`
auth: {
    username: '',
    password: ''
},
// 表示服务器响应的数据类型, 默认 'json',
// 可以是 'arraybuffer'、'blob'、'document'、'text'、'stream'
responseType: 'json',
// 用作 xsrf token 的值的cookie的名称，默认 'XSRF-TOKEN'
xsrfCookieName: 'XSRF-TOKEN', // default
// 承载 xsrf token 的值的 HTTP 头的名称, 默认 'X-XSRF-TOKEN'
xsrfHeaderName: 'X-XSRF-TOKEN',
// 允许为上传处理进度事件, 对原生进度事件的处理
onUploadProgress: function (progressEvent) { },
// 允许为下载处理进度事件
onDownloadProgress: function (progressEvent) { },
// 允许的响应内容的最大尺寸
maxContentLength: 2000,
// 定义对于给定的HTTP 响应状态码是 resolve 或 reject
validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
},
// 定义在 node.js 中 follow 的最大重定向数目, 如果设置为0，将不会 follow 任何重定向
maxRedirects: 5,
// 定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
httpAgent: new http.Agent({ keepAlive: true }), // 默认不启用
httpsAgent: new https.Agent({ keepAlive: true }),
// 定义代理服务器的主机名称和端口，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization`
proxy: {
    host: '127.0.0.1',
    port: 9000,
    // HTTP 基础验证应当用于连接代理，并提供凭据
    auth: : {
    username: 'admin',
    password: 'admin'
    }
},

// 指定用于取消请求的 cancel token
cancelToken: new CancelToken(function (cancel) {
})
})
```
