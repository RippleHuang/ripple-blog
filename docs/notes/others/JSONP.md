---
title: 解决跨域问题之JSONP
date: 2020-07-24
publish: true
categories:
  - 跨域
tags:
  - JSONP
---

::: tip
JSONP
:::

<!-- more -->

## Ajax跨域请求的问题

跨域：跨域名， 一个域名下的文件去请求了和他不一样的域名下的资源文件（注意是请求文件，而不是数据接口），那么就会产生跨域请求，下面来写一个ajax来跨域请求的例子

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script>
window.onload = function() {
    //ajax跨域请求限制
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if ( xhr.status == 200 ) {
                    alert( xhr.responseText );
                }
            }
        }
        xhr.open('get', 'http://api.douban.com/book/subjects?q=javascript&alt=json&max-results=1', true);
        xhr.send();
    }
}
</script>
</head>

<body>
    <input type="button" value="按钮" id="btn" />
</body>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

结果可以看到，报错了，如果该域名的服务器设置了这个域名为白名单，就可以访问，就相当于电话白名单，才可以进行通话

![img](https://images2017.cnblogs.com/blog/591234/201708/591234-20170815123722537-647746693.png)

像这样的需要跨域请求的情况下，可以在当前项目中创建一个后台服务，使用这个后台服务去请求不同域名下的资源（不涉及跨域请求的问题），然后后台服务跟前端放在一起（同域名）转发给前端，这样的话也可以解决跨域请求的问题，这个后台服务就相当于中转站，如果没有这个后台服务，那么就前端直接使用跨域去请求，比如下面的jsonp

 

 

**跨域请求的解决方法（Jsonp : json with padding）**

jsonp的实现原理：

利用script标签，用script标签加载资源是没有跨域问题的，通过script标签的一个src属性加载（包含指定的外部文件），可以跨域包含 ，被包含的资源可以是任何类型的文件(可以是txt,php等) ，**他只关注被包含的文件的内容是否是合法的JS，否则是会报错的**），**也就是说利用script标签来拿到其他域名下的接口数据，但是有个问题就是说，拿到的这个数据可能是一个没有名字的数组，那么即使拿到了没没法办使用，如果这个数组在文件中有声明一个变量来保存，那么通过script标签拿到后是可以通过这个变量来使用的，但是有个问题就是这个变量是全局的（js代码设计过程中尽量少用全局变量）**

在资源加载进来之前定义好一个函数，这个函数接收一个参数（数据），函数里面利用这个参数做一些事情，然后需要的时候通过script标签加载对应远程文件资源，当远程的文件资源被加载进来的时候，就会去执行我们前面定义好的函数，并且把数据当作这个函数的参数传入进去 

*![img](https://images2017.cnblogs.com/blog/591234/201709/591234-20170914001351547-1270619277.png)*

需要注意的是fn这个回调函数的名字需要跟请求文件中的fn这个函数名字相同

```
function fn(data) {
    alert(data);
}
</script>
<script src="2.txt"></script>
```

**在实际项目中，需要按需加载，而不是页面一渲染就去加载这个请求，比如下面通过点击事件动态创建script标签并且将src资源引入**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<script>
function fn(data) {
    alert(data);
}
</script>
<script>
window.onload = function() {
    var oBtn = document.getElementById('btn');
    oBtn.onclick = function() {
        //当按钮点击的时候再去加载远程资源，让他执行
        var oScript = document.createElement('script');
        oScript.src = '2.txt';
        document.body.appendChild(oScript);
    }
}
</script>
</head>
<body>
    <input type="button" id="btn" value="按钮" />
</body>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

 

**百度搜索下拉提示实例**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#q {width: 300px; height: 30px; padding: 5px; border:1px solid #f90; font-size: 16px;}
#ul1 {border:1px solid #f90; width: 310px; margin: 0;padding: 0; display: none;}
li a { line-height: 30px; padding: 5px; text-decoration: none; color: black; display: block;}
li a:hover{ background: #f90; color: white; }
</style>
<script>
function maiov(data) {
    console.log(data)
    var oUl = document.getElementById('ul1');
    var html = '';
    if (data.s.length) {
        oUl.style.display = 'block';
        for (var i=0; i<data.s.length; i++) {
            html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
        }
        oUl.innerHTML = html;
    } else {
        oUl.style.display = 'none';
    }
}
window.onload = function() {
    var oQ = document.getElementById('q');
    var oUl = document.getElementById('ul1');
    oQ.onkeyup = function() {
        if ( this.value != '' ) {
            var oScript = document.createElement('script');
            oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=maiov';//cd也就是回掉函数，用于获取数据的函数
            document.body.appendChild(oScript);
        } else {
            oUl.style.display = 'none';
        }
    }
}
</script>
</head>
<body>
    <input type="text" id="q" />
    <ul id="ul1"></ul>
</body>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 上面接口中可以自己定义一个回调函数名，上面叫做maiov，当拿到数据时候，可以看到方法名也叫做maiov

![img](https://images2017.cnblogs.com/blog/591234/201709/591234-20170914003425094-2109279454.png)

 

 

 

**豆瓣搜索实例**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>无标题文档</title>
<style>
#q {width: 300px; height: 30px; padding: 5px; border:1px solid #f90; font-size: 16px;}
dl {border-bottom: 1px dotted #000;}
dt {font-weight: bold;}
</style>
<script>
function fn1(data) {
    var oMsg = document.getElementById('msg');
    var oList = document.getElementById('list');
    console.log(data);
    oMsg.innerHTML = data.title.$t + ' : ' + data['opensearch:totalResults'].$t;
    
    var aEntry = data.entry;
    var html = '';
    for (var i=0; i<aEntry.length; i++) {
        html += '<dl><dt>'+ aEntry[i].title.$t +'</dt><dd><img src="'+ aEntry[i].link[2]['@href'] +'" /></dd></dl>';
    }
    oList.innerHTML = html;
}
window.onload = function() {
    var oQ = document.getElementById('q');
    var oBtn = document.getElementById('btn');
    var oMsg = document.getElementById('msg');
    var oList = document.getElementById('list');
    
    oBtn.onclick = function() {
        if ( oQ.value != '' ) {
            var oScript = document.createElement('script');
            oScript.src = 'http://api.douban.com/book/subjects?q='+oQ.value+'&alt=xd&callback=fn1';
            document.body.appendChild(oScript);
        }
        
        //http://api.douban.com/book/subjects?q='+oQ.value+'&alt=xd&callback=fn1&start-index=(当前页*每页显示的条数)&max-results=10(每页显示的条数)
        
    }
    
}
</script>
</head>

<body>
    http://www.douban.com/service/apidoc/reference/
    <input type="text" id="q" /><input type="button" id="btn" value="搜索" />
    <p id="msg"></p>
    <hr />
    <div id="list"></div>
</body>
</html>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)