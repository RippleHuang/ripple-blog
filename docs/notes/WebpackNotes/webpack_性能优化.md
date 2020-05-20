---
title: webpack 性能优化
date: 2020-02-27
categories:
  - webpack打包
tags:
  - webpack
---

::: tip
webpack 开发环境性能优化,生产环性能境优化,懒加载与预加载,多进程打包,动态链接库(dll),渐进式网络开发应用程序(PWA)
:::

<!-- more -->

## 性能优化

### 开发环境性能优化

- 优化打包构建速度

  - 热模块替换(HMR--hot module replacement)：原本修改一个模块所有模块都被重新打包，影响速度，热模块解决这个问题，只会打包变化的模块，极大提升速度,在 devServer 中 hot: true,需重启 webpack 服务
    - 样式文件可以使用 HMR 功能，js 文件不能使用 HMR 功能，html 默认不能使用，html 文件不能热更新了，需修改 entry 入口，将 html 文件引入,html 不需要 HMR 功能，只有一个页面
    - js 需要 HMR 功能,只能处理非入口 js 文件，且需要 HNR 功能的要加以上代码
    - 运行 npx webpack-dev-server

  ```js
  if (module.hot) {
    module.hot.accept("./print.js", function() {
      print();
    });
  }
  ```

- 优化代码调试
  - source-map 一种 提供源代码到构建后代码映射 技术 (如果构建后代码出错了，可以映射追踪源代码错误)
    - 只需在 devServer 后加上 devtool: 'source-map'
    - 运行 webpack
    - 还有其他 source-map 系列
    - 开发环境-速度快：(eval>inline>cheap>...)
      - eval-cheap-source-map
      - eval-source-map
    - 开发环境-调试友好：
      - source-map
      - cheap-module-source-map
      - cheap-source-map
    - 结合：eval-source-map(vue 和 react 使用的)/ eval-cheap-module-source-map
  - 用 oneOf 包裹 loader 配置，让其匹配一次，不用匹配到后还要去匹配其他的，减轻运算，注意不能有两个配置处理同一类型的文件

### 生产环性能境优化

- 优化打包构建速度
- 优化代码运行的性能
  - 源代码隐藏，调试友好
    - nosources-source-map 彻底隐藏
    - hidden-source-map 隐藏构建化代码
    - 内联会让代码体积变大，生产环境不用内联
    - 结合：source-map /cheap-module-source-map
  - 缓存：让代码上线运行缓存更好使用
    - babel 缓存，第二次构建时，会读取之前缓存的，在 options 中 presets 之后编写代码 `cacheDirectory: true`
    - 文件资源缓存
      - 带上 hash 值，hash：每次 webpack 构建都会创建不同的 hash 值
        - 问题：因为多个文件同时使用 hash ，如果重新打包会失效
      - chunkhash: 根据 chunk 生成 hash 值，但是打包资源来源于同一个 chunk(所有被 import 引入的都属于同一 chunk)，hash 值还是一样
      - contenthash: 根据文件内容生成 hash 值
  - tree shaking(树摇):代码运行时引入的第三方库或者引入其他模块，没有工作的为枯萎的叶子，工作的为绿色的叶子，通过摇晃树来去掉那些没有工作的叶子，因此叫做树摇，去掉应用程序中没有使用的代码，减少代码体积
    - 必须 ES6 模块化，开启 production 模式
    - 在 package.json 中配置 "sideEffects": false 所有代码都没有副作用(都可以进行树摇)，可能会把 css 文件干掉，因为只引入了，只需要设置 `"sideEffects": ["*.css"]` 就可以了，有些也需要设置

## 性能优化二

### code split

- 方案一：在入口修改可以改为多入口

  ```js
  entry:{
    main: './src/index.js',
    dome: './src/dome.js'
    },
    output:{
      //输出文件名,上面是什么名这里name就是什么
    filename:'built.[name].[contenthash:10].js',
      //输出路径
    path: resolve(__dirname,'build')
  },
  ```

- 方案二：可以将 node_modules 中代码单独打包一个 chunk 最终输出(在页面 import 引入的),防止一个包会被多个入口文件打包成多个包，会自动分析多入口 chunk 有没有公共代码，有就会打包成一个 chunk .在 plugins 后配置

```js
optimization: {
  splitChunks: {
    chunks: "all";
  }
}
```

- 方案三：通过 js 代码让某个文件被单独打包成一个 chunk,import 动态导入语法，能将某个文件单独打包

```js
import(/* webpackChunkName: 'dome' */ "./dome")
  .then(() => {
    console.log(mul);
  })
  .catch(() => {
    console.log("文件加载失败");
  });
```

### 懒加载与预加载

- 预加载 prefetch: 会在使用之前，提前加载 js 文件(兼容问题大，高版本 pc 端可以，手机端和 ie 不支持)
- 懒加载 当文件需要使用时才会加载
- 使用 import 必须要拆分 js 代码的前提,在需要懒加载和预加载的地方配置(异步)：

```js
document.getElementById("btn").onclick = function() {
  import(/* webpackPrefetch: true */ "./dome").then(({ mul }) => {
    console.log(mul(4, 5));
  });
};
```

- 正常加载可以是认为并行加载(同时加载多个文件)，而预加载是等其他资源下载完毕，浏览器空闲了，在偷偷加载资源

### 渐进式网络开发应用程序(PWA):离线也可以访问

- workbox --> 下载 workbox-webpack-plugin
- 在 webpak.config.js 中引入
- 在 plugins 中

```js
new WorkboxWebpackPlugin.GenerateSW({
  clientsClaim: true,
  skipWating: true,
});
```

- 在入口文件中注册 serviceworker,需要兼容处理，支持则用，不支持则不用
- eslint 不认知 window navegator 全局变量，需要增加配置`"env": { "browser": true }`
- 需要在服务器上

```js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceworker
      .register("/service-worker.js")
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  });
}
```

### 多进程打包

- 下载 thread-loader
- 一般用在 bsbel-loader 上，`use: ['thread-loader',{loader: 'babel-loader',.....}]`
- 进程启动需要 600ms，进程通信也有开销，只有工作消耗时间长才需要多进程打包
- 防止把导入的库打包,如 jQuery，需要手动引入 cdn 链接
- 在 mode 后配置 `externals: { jquery: 'jQuery'}`

### 动态链接库(dll)

- 对某些库进行单独打包，在入口处配置：`entry: { jquery: ['jquery']}`
- 在 output 配置
- 需要运行指令： webpack --config webpack.dll.js

```js
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllReferenceplugin({
            name: '[name]_[hash]',
            path: resolve(__dirname, 'dll/manifest.json')
        })
        //将某个文件打包出去，并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname. 'dll/jquery.js')
        })
    ]
```
