(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{662:function(e,v,_){"use strict";_.r(v);var l=_(4),t=Object(l.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",[e._v("webpack 总结")])]),e._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("h3",{attrs:{id:"开发环境性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发环境性能优化"}},[e._v("#")]),e._v(" 开发环境性能优化-")]),e._v(" "),_("ul",[_("li",[e._v("开发环境打包构建优化：HMR")]),e._v(" "),_("li",[e._v("开发环境代码调试：source-map")])]),e._v(" "),_("h3",{attrs:{id:"生产环境性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生产环境性能优化"}},[e._v("#")]),e._v(" 生产环境性能优化")]),e._v(" "),_("ul",[_("li",[e._v("优化打包构建\n"),_("ul",[_("li",[e._v("oneOf")]),e._v(" "),_("li",[e._v("babel 缓存")]),e._v(" "),_("li",[e._v("externals")]),e._v(" "),_("li",[e._v("dll")])])]),e._v(" "),_("li",[e._v("优化代码\n"),_("ul",[_("li",[e._v("缓存")]),e._v(" "),_("li",[e._v("tree shaking")]),e._v(" "),_("li",[e._v("code split")]),e._v(" "),_("li",[e._v("懒加载/预加载")]),e._v(" "),_("li",[e._v("pwa")])])])]),e._v(" "),_("h2",{attrs:{id:"entry"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[e._v("#")]),e._v(" entry")]),e._v(" "),_("ul",[_("li",[e._v("string---\x3e "),_("code",[e._v("'./src/index.js'")]),e._v(",单入口，打包生成一个 chunk，输出一个 bundle 文件，chunk 的名称默认为 main")]),e._v(" "),_("li",[e._v("array---\x3e "),_("code",[e._v("['./src/index.js','./src/add.js']")]),e._v(",多入口，所有入口文件最终只会形成一个 chunk，输出去只有一个 bundle 文件，只有在 HMR 功能中让 html 热更新生效")]),e._v(" "),_("li",[e._v("object 多入口，有几个入口文件就形成几个 chunk 文件，输出几个 bundle 文件，chunk 的名称就是 key\n"),_("ul",[_("li",[e._v("特殊用法 "),_("code",[e._v("{ index: ['',''],add:''}")])])])])]),e._v(" "),_("h2",{attrs:{id:"output"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" output")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("filename: 'js/[name].js'")]),e._v(" 文件名称，指定名称+目录")]),e._v(" "),_("li",[_("code",[e._v("path: resolve(__dirname, 'build')")]),e._v(" 输出文件目录，将来所有资源输出的公共目录,resolve 需要引入")]),e._v(" "),_("li",[_("code",[e._v("publicPath: '/'")]),e._v(" 所有资源引入公共路径前缀")]),e._v(" "),_("li",[_("code",[e._v("chunkFilename: 'js/[name]_chunk.js'")]),e._v(" 非入口 chunk 的名称")]),e._v(" "),_("li",[_("code",[e._v("library: '[name]'")]),e._v(" 整个库向外暴露的变量名")]),e._v(" "),_("li",[_("code",[e._v("libraryTarget: 'window'")]),e._v("变量名添加到哪个上 browser")]),e._v(" "),_("li",[_("code",[e._v("libraryTarget: 'global'")]),e._v("变量名添加到哪个上 node")]),e._v(" "),_("li",[_("code",[e._v("libraryTarget: 'commonjs'")]),e._v("变量名添加到哪个上")])]),e._v(" "),_("h2",{attrs:{id:"module"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" module")]),e._v(" "),_("ul",[_("li",[e._v("rules:[]\n"),_("ul",[_("li",[_("code",[e._v("test: /\\.js$/")]),e._v(" 适用哪个文件类型")]),e._v(" "),_("li",[_("code",[e._v("use: ['','']")]),e._v("多个 loader 用 use")]),e._v(" "),_("li",[_("code",[e._v("exclude: /node_modules/")]),e._v(" 排除这个文件下的")]),e._v(" "),_("li",[_("code",[e._v("include: resolve(__dirname, 'src')")]),e._v(" 只检查 src 下的文件")]),e._v(" "),_("li",[_("code",[e._v("loader: 'eslint-loader'")]),e._v("单个 loader 用 loader")]),e._v(" "),_("li",[_("code",[e._v("enforce: 'pre'")]),e._v(" 优先执行 "),_("code",[e._v("post")]),e._v("延后执行")]),e._v(" "),_("li",[_("code",[e._v("oneOf:[]")]),e._v("其中的配置只会生效一个")])])])]),e._v(" "),_("h2",{attrs:{id:"resolve"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[e._v("#")]),e._v(" resolve")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("alias:{$css: resolve(__dirname, 'src/css')}")]),e._v(" 配置解析模块路径别名,在 import 时"),_("code",[e._v("import $css/index.css")])]),e._v(" "),_("li",[_("code",[e._v("extensions: ['.js','.json']")]),e._v(" 配置省略文件路径的后缀名")]),e._v(" "),_("li",[_("code",[e._v("modules:['node_modules']")]),e._v(" 告诉 webpack 解析模块是去找哪个目录")])]),e._v(" "),_("h2",{attrs:{id:"devserver"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[e._v("#")]),e._v(" devServer")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("contentBase: resolve(__dirname, 'build')")]),e._v("运行代码的目录")]),e._v(" "),_("li",[_("code",[e._v("watchContentBase: true")]),e._v(" 监视这个 contentBase 目录下的所有文件，一旦文件发生变化就会 reload")]),e._v(" "),_("li",[_("code",[e._v("watchOptions: {ignored:/node_modules/}")]),e._v(" 忽略监视这个文件")]),e._v(" "),_("li",[_("code",[e._v("compress: true")]),e._v(" 启动 gzip 压缩")]),e._v(" "),_("li",[_("code",[e._v("port: 3000")]),e._v(" 端口号")]),e._v(" "),_("li",[_("code",[e._v("host: 'localhost'")]),e._v(" 域名")]),e._v(" "),_("li",[_("code",[e._v("open: true")]),e._v(" 自动打开浏览器")]),e._v(" "),_("li",[_("code",[e._v("hot：true")]),e._v(" 开启 HMR 功能")]),e._v(" "),_("li",[_("code",[e._v("clientLogLevel: 'none'")]),e._v(" 不要显示启动服务器的日志信息")]),e._v(" "),_("li",[_("code",[e._v("quiet: true")]),e._v(" 除了基本启动信息以外，其他内容不要显示")]),e._v(" "),_("li",[_("code",[e._v("overlay: false")]),e._v(" 如果出错了不要全屏提示")]),e._v(" "),_("li",[_("code",[e._v("proxy: {'api':{target: 'http://localhost：3000',pathRewrite: {'^/api':''}}}")]),e._v("服务器代理--\x3e解决开发环境跨域问题,一旦 devserver(5000)服务器接受到/api/xxx 的请求，会把请求转发到另外一个服务器(3000),发送请求，路径重写将/api/xxx 改为 /xxx")])]),e._v(" "),_("h2",{attrs:{id:"optimization"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#optimization"}},[e._v("#")]),e._v(" optimization")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("splitChunks:{}")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("chunks: 'all'")]),e._v("下面的都是默认值，这个需要配置")]),e._v(" "),_("li",[_("code",[e._v("minSzie: 30 * 1024")]),e._v(" 最小为 30kb")]),e._v(" "),_("li",[_("code",[e._v("maxSize: 0")]),e._v(" 最大没有限制")]),e._v(" "),_("li",[_("code",[e._v("minChunks: 1")]),e._v(" 要提取的 chunk 被引用次数最少为 1")]),e._v(" "),_("li",[_("code",[e._v("maxAsyncRequests: 5")]),e._v(" 按需加载时并行加载的文件最大数")]),e._v(" "),_("li",[_("code",[e._v("maxInitialRequests: 3")]),e._v(" 入口 js 文件最大并行请求数")]),e._v(" "),_("li",[_("code",[e._v("automaticNameDelimiter: '~'")]),e._v(" 名称连接符")]),e._v(" "),_("li",[_("code",[e._v("name: ture 可以使用命名规则")])]),e._v(" "),_("li",[_("code",[e._v("cacheGrous: {vendors:{test:/[\\\\/]node_modules[\\\\/]/,priority:-10}}")]),e._v(" 分割的 chunk 组，分到 vendors 组，优先级为-10")])])]),e._v(" "),_("li",[_("code",[e._v("runtimeChunk: {name: entrypoint => 'runtime-${entrypoint.name}}'")]),e._v("\n将当前的模块的记录其他模块的 hash 单独打包为一个文件 runtime 解决: 修改 a 文件导致 b 文件的 contenthash 变化")]),e._v(" "),_("li",[_("code",[e._v("minimizer: {new TerserWebpackPlugin({})}")]),e._v(" 配置生产环境的压缩方案: js 和 css,需要下载 terser-webpack-plugin\n"),_("ul",[_("li",[_("code",[e._v("cache: true")]),e._v(" 开启缓存")]),e._v(" "),_("li",[_("code",[e._v("parallel: true")]),e._v(" 开启多进程打包")]),e._v(" "),_("li",[_("code",[e._v("sourceMap: true")]),e._v(" 开启 source-map")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);