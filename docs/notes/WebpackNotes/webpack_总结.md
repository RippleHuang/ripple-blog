---
title: webpack 总结
date: 2020-3-1
categories:
  - webpack
tags:
  - webpack
---

::: tip
webpack 总结
:::

<!-- more -->

## 总结

### 开发环境性能优化-

- 开发环境打包构建优化：HMR
- 开发环境代码调试：source-map

### 生产环境性能优化

- 优化打包构建
  - oneOf
  - babel 缓存
  - externals
  - dll
- 优化代码
  - 缓存
  - tree shaking
  - code split
  - 懒加载/预加载
  - pwa

## entry

- string---> `'./src/index.js'`,单入口，打包生成一个 chunk，输出一个 bundle 文件，chunk 的名称默认为 main
- array---> `['./src/index.js','./src/add.js']`,多入口，所有入口文件最终只会形成一个 chunk，输出去只有一个 bundle 文件，只有在 HMR 功能中让 html 热更新生效
- object 多入口，有几个入口文件就形成几个 chunk 文件，输出几个 bundle 文件，chunk 的名称就是 key
  - 特殊用法 `{ index: ['',''],add:''}`

## output

- `filename: 'js/[name].js'` 文件名称，指定名称+目录
- `path: resolve(__dirname, 'build')` 输出文件目录，将来所有资源输出的公共目录,resolve 需要引入
- `publicPath: '/'` 所有资源引入公共路径前缀
- `chunkFilename: 'js/[name]_chunk.js'` 非入口 chunk 的名称
- `library: '[name]'` 整个库向外暴露的变量名
- `libraryTarget: 'window'`变量名添加到哪个上 browser
- `libraryTarget: 'global'`变量名添加到哪个上 node
- `libraryTarget: 'commonjs'`变量名添加到哪个上

## module

- rules:[]
  - `test: /\.js$/` 适用哪个文件类型
  - `use: ['','']`多个 loader 用 use
  - `exclude: /node_modules/` 排除这个文件下的
  - `include: resolve(__dirname, 'src')` 只检查 src 下的文件
  - `loader: 'eslint-loader'`单个 loader 用 loader
  - `enforce: 'pre'` 优先执行 `post`延后执行
  - `oneOf:[]`其中的配置只会生效一个

## resolve

- `alias:{$css: resolve(__dirname, 'src/css')}` 配置解析模块路径别名,在 import 时`import $css/index.css`
- `extensions: ['.js','.json']` 配置省略文件路径的后缀名
- `modules:['node_modules']` 告诉 webpack 解析模块是去找哪个目录

## devServer

- `contentBase: resolve(__dirname, 'build')`运行代码的目录
- `watchContentBase: true` 监视这个 contentBase 目录下的所有文件，一旦文件发生变化就会 reload
- `watchOptions: {ignored:/node_modules/}` 忽略监视这个文件
- `compress: true` 启动 gzip 压缩
- `port: 3000` 端口号
- `host: 'localhost'` 域名
- `open: true` 自动打开浏览器
- `hot：true` 开启 HMR 功能
- `clientLogLevel: 'none'` 不要显示启动服务器的日志信息
- `quiet: true` 除了基本启动信息以外，其他内容不要显示
- `overlay: false` 如果出错了不要全屏提示
- `proxy: {'api':{target: 'http://localhost：3000',pathRewrite: {'^/api':''}}}`服务器代理-->解决开发环境跨域问题,一旦 devserver(5000)服务器接受到/api/xxx 的请求，会把请求转发到另外一个服务器(3000),发送请求，路径重写将/api/xxx 改为 /xxx

## optimization

- `splitChunks:{}`
  - `chunks: 'all'`下面的都是默认值，这个需要配置
  - `minSzie: 30 * 1024` 最小为 30kb
  - `maxSize: 0` 最大没有限制
  - `minChunks: 1` 要提取的 chunk 被引用次数最少为 1
  - `maxAsyncRequests: 5` 按需加载时并行加载的文件最大数
  - `maxInitialRequests: 3` 入口 js 文件最大并行请求数
  - `automaticNameDelimiter: '~'` 名称连接符
  - `name: ture 可以使用命名规则`
  - `cacheGrous: {vendors:{test:/[\\/]node_modules[\\/]/,priority:-10}}` 分割的 chunk 组，分到 vendors 组，优先级为-10
- `runtimeChunk: {name: entrypoint => 'runtime-${entrypoint.name}}'`
  将当前的模块的记录其他模块的 hash 单独打包为一个文件 runtime 解决: 修改 a 文件导致 b 文件的 contenthash 变化
- `minimizer: {new TerserWebpackPlugin({})}` 配置生产环境的压缩方案: js 和 css,需要下载 terser-webpack-plugin
  - `cache: true` 开启缓存
  - `parallel: true` 开启多进程打包
  - `sourceMap: true` 开启 source-map
