---
title: 解决跨域之CORS
date: 2020-07-24
publish: true
categories:
  - 跨域
tags:
  - CORS
---

::: tip
CORS
:::

<!-- more -->

## CORS

根据[前端跨域的那些事](https://www.cnblogs.com/LO-ME/p/7515393.html)这篇文章中的**跨域的理解这一块，我们重新创建两个服务，第一个服务使用了test.html**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html', 'utf8')
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(html)
}).listen(8888)

console.log('server listening on 8888')
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**test.html中使用fetch来发送请求，并且设置了一个自定义的请求头**'X-Test-Cors': '123'

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  测试
</body>
<script>
  fetch('http://localhost:8887', {
    method: 'POST',
    headers: {
      'X-Test-Cors': '123'
    }
  })
</script>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**第二个服务，还是设置了**'Access-Control-Allow-Origin': '*'允许所有域名下的请求

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**启动两个服务，请求访问第一个服务中的test.html，test.html发送了一个请求**

**![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509040832494-109813986.png)**

**运行结果看到，报错了，在跨域请求中加了自定义的请求头是不允许的（JSONP请求没法设置自定义请求头），其实请求是发送成功了的，并且也有数据返回只是浏览器因为安全策略将返回的数据拦截掉了**

**![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509042506291-1102702038.png)**

**这时候就要用到CORS的预请求，在CORS中有一些限制，如下**

**在跨域的情况下，允许的请求方法只有：GET，HEAD， POST，这三个方法不需要预请求验证，其它的请求方法默认都是不允许的，浏览器要有一个预请求的方式去验证，验证通过之后才能发送请求**

**在跨域的情况下，允许的Content-Type：test/plain，multipart/form-data，application/x-www-form-urlencoded，除了这三种之外的其它Content-Type同样需要预请求去验证，验证通过之后才能发送请求**

**在跨域的情况下，自定义请求头也会被限制，需要预请求去验证，验证通过之后才能发送请求**

 

**如果我们要允许自定义的请求头在请求里发送，那么我们需要返回一个新的请求头来告诉浏览器我们这个自定义的请求头是允许的，在第二个服务中设置返回的新的请求头**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors'
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**运行结果显示，比之前多一个请求，第一个其实就是浏览器验证的一个请求，第二个才是实际发送的请求**

**![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509043003403-2076451953.png)**

![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509043204624-1006111067.png)

同样请求方法和**Content-Type**也是可以设置的，没设置之前我们使用PUT的请求方式来请求是会报错的

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  测试
</body>
<script>
  fetch('http://localhost:8887', {
    method: 'PUT',
    headers: {
      'X-Test-Cors': '123'
    }
  })
</script>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509043705570-2107165321.png)

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**设置之后，就可以使用PUT方式去请求了，运行结果可以看到第二个实际的请求PUT成功的**

**![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509043840710-477868498.png)**

 还有一个设置就是：Access-Control-Max-Age：1000，表示运行这种跨域的请求在第一个预请求验证通过后，1000秒之内第二次请求的时候不需要发送预请求了，可以直接发送实际的请求（也就是上面说的第二个实际的请求）

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```js
const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
    'Access-Control-Max-Age': '1000'
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 运行结果可以看到，当我第一个发送请求的时候是需要预请求验证的，当我刷新页面再次请求的时候，就已经不需要预请求验证了

![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509044607431-848919748.png)

![img](https://img2018.cnblogs.com/blog/591234/201905/591234-20190509044619281-1332949876.png)

 