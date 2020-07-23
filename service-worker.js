/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ec8d053f2dbfc26cd8fcd7c15c8c2fb"
  },
  {
    "url": "assets/css/0.styles.599e030f.css",
    "revision": "023c6484bb542ec3a5caf3e45bb542c4"
  },
  {
    "url": "assets/fonts/demo.css",
    "revision": "31103ad158e19b978f7e730ff5ac959b"
  },
  {
    "url": "assets/fonts/demo.html",
    "revision": "b973fcf940cb1bc3f4a0196a93550847"
  },
  {
    "url": "assets/fonts/iconfont.css",
    "revision": "8cb8a25cafd28248a8b5a0b5770d0ec4"
  },
  {
    "url": "assets/fonts/iconfont.eot",
    "revision": "c2b158da92a61e974d84827e621a91f1"
  },
  {
    "url": "assets/fonts/iconfont.js",
    "revision": "ef6d071d94182a800ed9b0499918dab3"
  },
  {
    "url": "assets/fonts/iconfont.svg",
    "revision": "6b656dc5ab659abf0b60cf5d648f913e"
  },
  {
    "url": "assets/fonts/iconfont.ttf",
    "revision": "6d2d00803ba670aba1bd3e8f1b3a9e50"
  },
  {
    "url": "assets/fonts/iconfont.woff",
    "revision": "95152e41e6c57706feaba4e3a6c66269"
  },
  {
    "url": "assets/fonts/iconfont.woff2",
    "revision": "92c250e9c4cb7e8de4839e9f6f254cfe"
  },
  {
    "url": "assets/img/bg.jpg",
    "revision": "2a24d3d522070fc5b456a0d2fd0a2129"
  },
  {
    "url": "assets/img/flow.png",
    "revision": "e10ae01859816b8c2f41c29902965f2b"
  },
  {
    "url": "assets/img/git.ee074e2b.png",
    "revision": "ee074e2b1874ddbcc17280f13d1a58e7"
  },
  {
    "url": "assets/img/git.png",
    "revision": "ee074e2b1874ddbcc17280f13d1a58e7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.6b656dc5.svg",
    "revision": "6b656dc5ab659abf0b60cf5d648f913e"
  },
  {
    "url": "assets/img/lifecycle.b3251a15.png",
    "revision": "b3251a15e5779fcfec925b78a149f5c8"
  },
  {
    "url": "assets/img/lifecycle.png",
    "revision": "b3251a15e5779fcfec925b78a149f5c8"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "3e77d9fbc5cb249a7d7573382292c5d1"
  },
  {
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/js/1.f570230b.js",
    "revision": "81bf1023050dae8c262165f52716218e"
  },
  {
    "url": "assets/js/10.b352966c.js",
    "revision": "72c22fa2f6f9fe6dd691fd268d14353f"
  },
  {
    "url": "assets/js/11.feb5da44.js",
    "revision": "1aca0649f48037bc8bf3f7ca414081ff"
  },
  {
    "url": "assets/js/12.3fa43037.js",
    "revision": "7bbb68410ba300d2d9e3925851503253"
  },
  {
    "url": "assets/js/13.595cc734.js",
    "revision": "7adae236dd5afc08527e42242196ebc2"
  },
  {
    "url": "assets/js/14.2d41f284.js",
    "revision": "ffef51a7ebb8ad1b30c3b8671aa5875e"
  },
  {
    "url": "assets/js/15.52bcb3dd.js",
    "revision": "ae2ef5fa133987130b7455be6094b0ad"
  },
  {
    "url": "assets/js/16.78033b18.js",
    "revision": "7718b072990aa1365629b13e0267b92f"
  },
  {
    "url": "assets/js/17.0c06f997.js",
    "revision": "a814eafbb59ad67e24d8a7b06fcfe2f1"
  },
  {
    "url": "assets/js/18.436bcee8.js",
    "revision": "8df7be113c99797a977bc174a6338e61"
  },
  {
    "url": "assets/js/19.eebf4ac3.js",
    "revision": "479fe33abf19ce4fbba5a76b3f3e0653"
  },
  {
    "url": "assets/js/2.94dd4d80.js",
    "revision": "03f698703fb55feb4d03d2e636d82ace"
  },
  {
    "url": "assets/js/20.dde36c97.js",
    "revision": "2a891cf299c4e6284159ebc7c61b56db"
  },
  {
    "url": "assets/js/21.99adbc9b.js",
    "revision": "fa8d52880ffdcda1a5d03f4ffd15beeb"
  },
  {
    "url": "assets/js/22.3b6b1217.js",
    "revision": "c6e89e30364d6f0c5657012a217de418"
  },
  {
    "url": "assets/js/23.34c4a9b0.js",
    "revision": "a683c187ab6465eb79b7cc9107ebf83d"
  },
  {
    "url": "assets/js/24.914f58e2.js",
    "revision": "60969df7ab0fd854c7c3c115f6a3eb02"
  },
  {
    "url": "assets/js/25.548f6447.js",
    "revision": "37932ee9fa94d6ad7b3fb20f7f1d2ccc"
  },
  {
    "url": "assets/js/26.bbc5bc18.js",
    "revision": "6073b2abf2e5ed7b1b5197629f7549d8"
  },
  {
    "url": "assets/js/27.5243eed3.js",
    "revision": "e8c4979ddccae78414392c537e3e74f3"
  },
  {
    "url": "assets/js/28.aa4f0292.js",
    "revision": "61e63b6392d4ff6860c8c00ae552b149"
  },
  {
    "url": "assets/js/29.b940a71a.js",
    "revision": "d7cf6f19375fffaa44332b9e15856a6e"
  },
  {
    "url": "assets/js/30.d3cc1247.js",
    "revision": "cbaa28eef3a01dc9a68657158fc9cf53"
  },
  {
    "url": "assets/js/31.3df19a87.js",
    "revision": "acbf69af872352f188a55043662eff3e"
  },
  {
    "url": "assets/js/32.8c8eda23.js",
    "revision": "ea9e3636c77e9e9f1a8f1fc2ec6857a0"
  },
  {
    "url": "assets/js/33.3be9b956.js",
    "revision": "41f09e99d87ac70a57810c3f98fe555c"
  },
  {
    "url": "assets/js/34.cfa8acac.js",
    "revision": "e193b8d7b4233b81fddcbb9e7d486fec"
  },
  {
    "url": "assets/js/35.60844464.js",
    "revision": "fa6782009c6493ca67383cb0f7bb7e9d"
  },
  {
    "url": "assets/js/36.084dbe5e.js",
    "revision": "0a48e07b1c3991bfae62b8a6f9a6e121"
  },
  {
    "url": "assets/js/37.dbae05b4.js",
    "revision": "0b6874be389c0a6fa39734c4bc544f59"
  },
  {
    "url": "assets/js/38.c93463f8.js",
    "revision": "7bc5f296d9623eb304151f753f7d2a47"
  },
  {
    "url": "assets/js/39.821060a4.js",
    "revision": "f5a8789635674cf3fc46515ceaaf1457"
  },
  {
    "url": "assets/js/4.23b04796.js",
    "revision": "fa9b9b960d73ec038be088fcec82d206"
  },
  {
    "url": "assets/js/40.227e9c54.js",
    "revision": "03ed526e63db01c5083fe249ae13cc85"
  },
  {
    "url": "assets/js/41.df614e02.js",
    "revision": "a10c51de7232b12424ce62ad56591cc6"
  },
  {
    "url": "assets/js/42.259ff5d0.js",
    "revision": "8490ca869268d478b069cee1e73ec3c0"
  },
  {
    "url": "assets/js/43.e777c447.js",
    "revision": "41403d97a9311718a985046e9bff599e"
  },
  {
    "url": "assets/js/44.fa052451.js",
    "revision": "b5415a51fc0bd3faa5a9452c64b1e7c4"
  },
  {
    "url": "assets/js/45.ab538b9d.js",
    "revision": "8771dd8f57183d369da2fe71bfd41513"
  },
  {
    "url": "assets/js/46.25af2c25.js",
    "revision": "c014e6ee9b2fe282155eb0fc073092b2"
  },
  {
    "url": "assets/js/47.0ab40e86.js",
    "revision": "144b4703a0940682c6bc128bb50c2142"
  },
  {
    "url": "assets/js/48.3e23f2ba.js",
    "revision": "004ecd3bdd8daa26ba551e568ff4af14"
  },
  {
    "url": "assets/js/49.61dd6732.js",
    "revision": "8cd24bb968c68828904f23f8c2d835a5"
  },
  {
    "url": "assets/js/5.d7a48aed.js",
    "revision": "9d433f15df8971d3da5c1163d6ba37e2"
  },
  {
    "url": "assets/js/50.e943b806.js",
    "revision": "135c5ea5f1793f16f7f4ddbae7bf6ba2"
  },
  {
    "url": "assets/js/51.0a118471.js",
    "revision": "e083668f806e022952192a02ba8b0222"
  },
  {
    "url": "assets/js/52.00615690.js",
    "revision": "2c6956b9bf4a88df7419bfdae20747c4"
  },
  {
    "url": "assets/js/53.708df977.js",
    "revision": "1811fba6c3b5be809e19aec8d712f639"
  },
  {
    "url": "assets/js/54.0258200a.js",
    "revision": "098d73bd7a4dded2750a9b578f315d23"
  },
  {
    "url": "assets/js/55.33c5f7de.js",
    "revision": "d40d8bbc825463ea97fc1fcd4de2cee2"
  },
  {
    "url": "assets/js/56.8b9cad10.js",
    "revision": "d597c1c36635f78432061b1043438742"
  },
  {
    "url": "assets/js/57.72795aeb.js",
    "revision": "1c3bfef56ebf2b2b69379c2247579a8b"
  },
  {
    "url": "assets/js/58.32091932.js",
    "revision": "913f7ee300e599d629e8cde257add79c"
  },
  {
    "url": "assets/js/6.b45b8355.js",
    "revision": "045ed31e03db9c286d3a5f00bf9e1aca"
  },
  {
    "url": "assets/js/7.08c33c3f.js",
    "revision": "44fa770c45b07f718ea34fd7e21a6867"
  },
  {
    "url": "assets/js/8.8665d6ca.js",
    "revision": "11a17b99e13bd5c5fecebabae160cda5"
  },
  {
    "url": "assets/js/9.d8a8e288.js",
    "revision": "d89fe88f9e62c9865fb1032cb448457f"
  },
  {
    "url": "assets/js/app.8bdd1cba.js",
    "revision": "299505a4fe50dc2a7e4bbe535463d864"
  },
  {
    "url": "categories/css/index.html",
    "revision": "040b52cf9afdb42664d7d587b1db30ea"
  },
  {
    "url": "categories/git/index.html",
    "revision": "8a7c52d605e9e041877b3b2b0ab1b345"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "1dbfee2b4e73b3476bd896bc08d46edc"
  },
  {
    "url": "categories/index.html",
    "revision": "d3af8b92cbd22b9de50d65373a455247"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9a5b66a6f6f8f316cc89d2a81267753d"
  },
  {
    "url": "categories/node/index.html",
    "revision": "552e36c0c24c276a90726e7980f5835c"
  },
  {
    "url": "categories/vue框架/index.html",
    "revision": "096016a9c945b93ea841f41bf55e840b"
  },
  {
    "url": "categories/webpack打包/index.html",
    "revision": "2fa17aba4d3f62d4b2a1a3fdac48502e"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "6b5e061052f13522b57cc5ab2a7b0b57"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "b093ee4d35030b5ceab9dfb127989fbb"
  },
  {
    "url": "index.html",
    "revision": "ba9e1403430660b28d41eee52e45c110"
  },
  {
    "url": "notes/CssNotes/Css_Css3 flex布局.html",
    "revision": "d15fa33e01f88ec441b4644e9300af8a"
  },
  {
    "url": "notes/CssNotes/Css_样式规范.html",
    "revision": "026b152c9f4be7a43ec27f2fd6b799df"
  },
  {
    "url": "notes/CssNotes/Css_遇到的问题.html",
    "revision": "d35fd6db603f29846580a49ee78496a3"
  },
  {
    "url": "notes/CssNotes/css_面试.html",
    "revision": "34e0954be9c8381e3088d2171f78f1d4"
  },
  {
    "url": "notes/CssNotes/Css_页面布局.html",
    "revision": "b3c9aaecaaddf111ef42be22906103e3"
  },
  {
    "url": "notes/Git/Git_发布到npm.html",
    "revision": "c3805680bd863382b776f9f10af61faf"
  },
  {
    "url": "notes/Git/Git_本地操作.html",
    "revision": "11f15d3699dae3c1ddabe690a9af86cc"
  },
  {
    "url": "notes/Git/Git_概念及使用.html",
    "revision": "6c22dbbde6d016a7ed0554d4e70cbef9"
  },
  {
    "url": "notes/Git/Git_远程仓库及操作.html",
    "revision": "df755e76669e3a8907602f64119b95a0"
  },
  {
    "url": "notes/JsNotes/HTML篇.html",
    "revision": "ef08d136e6c3d4bf87c5de4992ca42bb"
  },
  {
    "url": "notes/JsNotes/js篇.html",
    "revision": "8a004f36e5675d1e30029d28fdd89824"
  },
  {
    "url": "notes/JsNotes/设计模式.html",
    "revision": "f03e493b356c8bd11f12241906461705"
  },
  {
    "url": "notes/NodeNotes/Node_mongodb.html",
    "revision": "96f6aed45e1a62993ca845c9005f7711"
  },
  {
    "url": "notes/NodeNotes/Node_url及第三方模块.html",
    "revision": "855908ee34fc808c2fab56184802a091"
  },
  {
    "url": "notes/NodeNotes/Node_基础.html",
    "revision": "a056a7c4a50c25b8d2cbf07bb87c8c1a"
  },
  {
    "url": "notes/NodeNotes/Node_第三方模块.html",
    "revision": "921a21a66b36d6e3c59915755975d809"
  },
  {
    "url": "notes/project.html",
    "revision": "dbed44607032f1859a374b7d13d4c6a4"
  },
  {
    "url": "notes/VueNotes/Vue_axios.html",
    "revision": "6f592e80355a8edde3e6794973872ad1"
  },
  {
    "url": "notes/VueNotes/Vue_UI组件库.html",
    "revision": "9b04f3005a07badbe0ab6ea78fcb396e"
  },
  {
    "url": "notes/VueNotes/Vue_Vuex.html",
    "revision": "cf1e2724737c42666a93cc94bef5b6ab"
  },
  {
    "url": "notes/VueNotes/Vue_基础.html",
    "revision": "f5f2a262d4637e84afd5e7608465a745"
  },
  {
    "url": "notes/VueNotes/Vue_组件化.html",
    "revision": "259028f8066499a9e910befdfc21be8b"
  },
  {
    "url": "notes/VueNotes/Vue_路由.html",
    "revision": "c417ed92c07015ebc7b5054e792a8634"
  },
  {
    "url": "notes/VueNotes/Vue_进阶.html",
    "revision": "caf9d58f0f43b352c91221aa9d946c21"
  },
  {
    "url": "notes/VueNotes/Vue_通信.html",
    "revision": "6965840c88c9726477605fd558e8fedb"
  },
  {
    "url": "notes/WebpackNotes/Webpack_css处理.html",
    "revision": "e05937dcf7f78b5c172e88b293cb63ad"
  },
  {
    "url": "notes/WebpackNotes/Webpack_js及语法检查.html",
    "revision": "f4716c6f592708dd2f5515fdd64993aa"
  },
  {
    "url": "notes/WebpackNotes/Webpack_基础.html",
    "revision": "9ef40a50eb575776fbe4cb77d1b3b83c"
  },
  {
    "url": "notes/WebpackNotes/webpack_性能优化.html",
    "revision": "e4141094c8a9de5fa3526644f48f4118"
  },
  {
    "url": "notes/WebpackNotes/webpack_总结.html",
    "revision": "95c8d3dffb652f8c4a39f98cb939cd1a"
  },
  {
    "url": "notes/WebpackNotes/Webpack_资源打包.html",
    "revision": "c2279644e32b723c29c0203333366c9f"
  },
  {
    "url": "projects/CloudMusic/项目.html",
    "revision": "65e7d20cdec999d56766bc99bfaf2d23"
  },
  {
    "url": "projects/index.html",
    "revision": "27421d6a6953a1fbebc2ae423e724b9b"
  },
  {
    "url": "projects/problem.html",
    "revision": "7d74c02abec571cabae2e7bd34d7c08c"
  },
  {
    "url": "rippleUi/rippleUI.html",
    "revision": "867750fc08e39cb2065841cf1c59ad44"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "8fe0bf9a3958d4e00690b8f3b23b839a"
  },
  {
    "url": "tag/CloudMusic/index.html",
    "revision": "b707123a10564dde6478120ccec81550"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4ad2ecf1fcd76cac06ae9100b8a33876"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "c096b6bd401953dfe387ba7534c8a718"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b165a00fcde7bc17446b76f70303dade"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "668140105c149b7dde425481d5d8271a"
  },
  {
    "url": "tag/index.html",
    "revision": "7109f4741dd8ec00f78e0ec5785ecfca"
  },
  {
    "url": "tag/js/index.html",
    "revision": "516042ed73ebcbfe7756d82d0817c9e5"
  },
  {
    "url": "tag/mongodb/index.html",
    "revision": "6bf9a769cc075eb08e8b4573f11a66c7"
  },
  {
    "url": "tag/node/index.html",
    "revision": "8c4543d131a79e99b4e0a50769271cd8"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "a6ce3bf2792494e579b568de63f5a572"
  },
  {
    "url": "tag/vue router/index.html",
    "revision": "28e7b40a9e6cccd805b81fd6e900e114"
  },
  {
    "url": "tag/vue-cli/index.html",
    "revision": "9cbbd5ad49557137a9aee422042025f0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7c9ec202077cb37ff4f884bac8b72909"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "02be27c3a84a5be6536a29cedda0cf80"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a0f92da7266c56cc5c18d186a988a811"
  },
  {
    "url": "tag/服务器/index.html",
    "revision": "56bff0a9e93dfbebac59216f3e56248b"
  },
  {
    "url": "tag/组件库/index.html",
    "revision": "3752479cbc0eb3c3b89e7efad0c08da1"
  },
  {
    "url": "tag/资源打包/index.html",
    "revision": "24ad44fbc05da4d20ea6f508f5cd94c8"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "74ff75975da72a998b5135648d8d338c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ae1ae84384e74d94705d6d4ec30fe5c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
