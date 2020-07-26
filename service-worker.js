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
    "revision": "a50889c476595cc4764c275763743b21"
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
    "url": "assets/js/21.f776c0a3.js",
    "revision": "a6e544ac7b812a3da399e6722ccdee87"
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
    "url": "assets/js/30.09a56e16.js",
    "revision": "88389763df1639292897bee39cd6c469"
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
    "url": "assets/js/34.4b38beab.js",
    "revision": "fc369ff1ad84c77778d8e63a51555c75"
  },
  {
    "url": "assets/js/35.6508a0d4.js",
    "revision": "2d293771c096686f3fc63b3bd710a2f0"
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
    "url": "assets/js/53.45256042.js",
    "revision": "6277ae473d4dd5892e04941641a31c23"
  },
  {
    "url": "assets/js/54.79e38076.js",
    "revision": "1c38d2e5f622ab6d4e3a75f94e36e5a0"
  },
  {
    "url": "assets/js/55.805e7e39.js",
    "revision": "87735f65ff4b0a55905c4e6a824c1652"
  },
  {
    "url": "assets/js/56.ef8ec0bb.js",
    "revision": "c55c399830a8661fbcd38634c76bb87b"
  },
  {
    "url": "assets/js/57.30fd8243.js",
    "revision": "30dfa2aad890a46eceb2db38014da522"
  },
  {
    "url": "assets/js/58.ba3f7c6f.js",
    "revision": "37c8aabde86989e248d10a6454a64fdc"
  },
  {
    "url": "assets/js/59.92b1ab22.js",
    "revision": "0949604954d58871bf77d2d6d048dde8"
  },
  {
    "url": "assets/js/6.b45b8355.js",
    "revision": "045ed31e03db9c286d3a5f00bf9e1aca"
  },
  {
    "url": "assets/js/60.8fbb53e8.js",
    "revision": "7fb2ea6861392511c5e4a4b0883a8b70"
  },
  {
    "url": "assets/js/61.2e4aa4c4.js",
    "revision": "224b2f22553ce104855c49a1a60e1391"
  },
  {
    "url": "assets/js/62.bd5d1044.js",
    "revision": "3a7ca8d43f054085db8f50c3efb1b25a"
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
    "url": "assets/js/app.c625429e.js",
    "revision": "60a3a93361e870bfcba80d6d4835687c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "d868f753083e76cc332ef769267e7638"
  },
  {
    "url": "categories/git/index.html",
    "revision": "4841770e9091adf4ccefb2cd3e21d414"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "4c8d4a2c5d6f09ab44a6de5e12b37162"
  },
  {
    "url": "categories/index.html",
    "revision": "3828a3d2fc457e9e5c5b9b66dfb36f94"
  },
  {
    "url": "categories/js/index.html",
    "revision": "be4f71e9c39a8616bb32fcfe98689d12"
  },
  {
    "url": "categories/node/index.html",
    "revision": "7c1380d8147b06728c9950ff0a436a32"
  },
  {
    "url": "categories/vue框架/index.html",
    "revision": "e6fbd60bfdefa999b57507c6c6562858"
  },
  {
    "url": "categories/webpack打包/index.html",
    "revision": "65e309ba864a0efe38842334b3843282"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "446a676175ad05e2c8ec306748c6f948"
  },
  {
    "url": "categories/跨域/index.html",
    "revision": "e26af1583ea2363a9460c5a52add136b"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "477e6e9b5cf2dd180f74b353a7fd49e8"
  },
  {
    "url": "index.html",
    "revision": "f50f0311c1948cc46a3ee5f7eb1f1a0b"
  },
  {
    "url": "notes/CssNotes/Css_Css3 flex布局.html",
    "revision": "9942348f23ce2cffa2ba1f9c7e689cf5"
  },
  {
    "url": "notes/CssNotes/Css_样式规范.html",
    "revision": "e7a34e1eec082e9739751701cf33de95"
  },
  {
    "url": "notes/CssNotes/Css_遇到的问题.html",
    "revision": "0ba62b7ade491cf65ae9ef4dbdbfe1ad"
  },
  {
    "url": "notes/CssNotes/css_面试.html",
    "revision": "044b745627adc74a512b97665c25fdbd"
  },
  {
    "url": "notes/CssNotes/Css_页面布局.html",
    "revision": "ad54fd9f6a9c58fd06fbb21d30c1c319"
  },
  {
    "url": "notes/Git/Git_发布到npm.html",
    "revision": "b4e5cc324c33d5c30131c8d9429c29c5"
  },
  {
    "url": "notes/Git/Git_本地操作.html",
    "revision": "a20cc0e160a8bb70bd2c6076a087d9a6"
  },
  {
    "url": "notes/Git/Git_概念及使用.html",
    "revision": "f653e4adbac3d716946abbf964d4fc71"
  },
  {
    "url": "notes/Git/Git_远程仓库及操作.html",
    "revision": "b349ab1e0cf2ddf446bf15c33ed28f3c"
  },
  {
    "url": "notes/JsNotes/HTML篇.html",
    "revision": "91c9675c1c797a9917492e42b3ad6843"
  },
  {
    "url": "notes/JsNotes/js篇.html",
    "revision": "947b6baf28b9835e1433cc64b0c447bc"
  },
  {
    "url": "notes/JsNotes/设计模式.html",
    "revision": "4f87288487a5069e67f632aab91dcaf4"
  },
  {
    "url": "notes/NodeNotes/Node_mongodb.html",
    "revision": "47050df22fa19f4f76a45f48dec12876"
  },
  {
    "url": "notes/NodeNotes/Node_url及第三方模块.html",
    "revision": "ab8d4125da0f8c3b67836e6a0d9e6dca"
  },
  {
    "url": "notes/NodeNotes/Node_基础.html",
    "revision": "911d2924e6aa430a4e7f7114bcb7f0dd"
  },
  {
    "url": "notes/NodeNotes/Node_第三方模块.html",
    "revision": "70dab3415d0b6810adc1478521d82240"
  },
  {
    "url": "notes/others/CORS.html",
    "revision": "477d8a5ca59a0e23c01373303e95c35d"
  },
  {
    "url": "notes/others/JSONP.html",
    "revision": "4d271aadae1bcc7a5ef2bdd89f4b4d5f"
  },
  {
    "url": "notes/others/WebSocket.html",
    "revision": "2d523b02299d23cf71a7be50f006b984"
  },
  {
    "url": "notes/others/跨域的理解.html",
    "revision": "9a8d47914d9b6263ce515d9d2f681b16"
  },
  {
    "url": "notes/project.html",
    "revision": "9b93c69ac95465fedc68ab5ca0dce257"
  },
  {
    "url": "notes/VueNotes/Vue_axios.html",
    "revision": "f92bcc5b29684e81cc3cdea1e7b22dfe"
  },
  {
    "url": "notes/VueNotes/Vue_UI组件库.html",
    "revision": "e35ec574aa4c699c7ef2cea09773162a"
  },
  {
    "url": "notes/VueNotes/Vue_Vuex.html",
    "revision": "b86e1d747505b34ba40ab8e767c1d663"
  },
  {
    "url": "notes/VueNotes/Vue_基础.html",
    "revision": "62a035a0cadbbabb76736f01403c8432"
  },
  {
    "url": "notes/VueNotes/Vue_组件化.html",
    "revision": "9f8f29014572814f4cf6084c0e90fab4"
  },
  {
    "url": "notes/VueNotes/Vue_路由.html",
    "revision": "ac2535e6022e130302db930d6d3c5bf7"
  },
  {
    "url": "notes/VueNotes/Vue_进阶.html",
    "revision": "52c6e326292b4e3140afd7ee86425ed2"
  },
  {
    "url": "notes/VueNotes/Vue_通信.html",
    "revision": "c035ec57818c7c6edd7c3899f3cf1c2e"
  },
  {
    "url": "notes/WebpackNotes/Webpack_css处理.html",
    "revision": "00264885e06276baf949c1b401412e70"
  },
  {
    "url": "notes/WebpackNotes/Webpack_js及语法检查.html",
    "revision": "26e349dd291a451982772985661e6908"
  },
  {
    "url": "notes/WebpackNotes/Webpack_基础.html",
    "revision": "93724bfe8e067647b38e3ff99aeab9d6"
  },
  {
    "url": "notes/WebpackNotes/webpack_性能优化.html",
    "revision": "a45d355cc29af79cab500251d1b3ede1"
  },
  {
    "url": "notes/WebpackNotes/webpack_总结.html",
    "revision": "bb3da1d4ce382a84721924b3bb186875"
  },
  {
    "url": "notes/WebpackNotes/Webpack_资源打包.html",
    "revision": "58f3bd7bff192abfdee55774e9e46e2d"
  },
  {
    "url": "projects/CloudMusic/项目.html",
    "revision": "b057f332c77430e60815f80103ce9132"
  },
  {
    "url": "projects/index.html",
    "revision": "d554c45a8f6f0c9adfc1f4c104aad244"
  },
  {
    "url": "projects/problem.html",
    "revision": "5a1b44c7414b4a642027fc01c718c0c8"
  },
  {
    "url": "rippleUi/rippleUI.html",
    "revision": "6d384eae3adc1680fe69d63a9f60c7ef"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "4bf26166f526c4f532e3058b67427549"
  },
  {
    "url": "tag/CloudMusic/index.html",
    "revision": "866c0662c2ce40353e799ce7d2e82462"
  },
  {
    "url": "tag/CORS/index.html",
    "revision": "b01ebb691ff3b40e85dce77e3d400b25"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a6bbd037456643ad5e571d615242bd53"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "4400f788af15446dc1be790aca4d2502"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "4a3161aeffd82e8783426c09f3644d48"
  },
  {
    "url": "tag/git/index.html",
    "revision": "810b0cc53cd1da2e6cdac3a658733699"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "706f083feeea03885392a072cc3c45f7"
  },
  {
    "url": "tag/index.html",
    "revision": "787e809d56728584469d1dba716da29c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "28edd09de8544a0b4bb6a2cbaf8bbf88"
  },
  {
    "url": "tag/JSONP/index.html",
    "revision": "52e55313d413833dad1745a4c6fc2d1d"
  },
  {
    "url": "tag/mongodb/index.html",
    "revision": "306192b9b582c4b6927816d5f6f40eff"
  },
  {
    "url": "tag/node/index.html",
    "revision": "cef811061d9322ce9d7a24a4df649064"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "ff087b948fb806c9e532f4c4a1632a8a"
  },
  {
    "url": "tag/vue router/index.html",
    "revision": "67d27e0fd6976b4e196076c055230411"
  },
  {
    "url": "tag/vue-cli/index.html",
    "revision": "7b3afe990d3eee21ffbf59e727d051a9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c12da460988945a185ae7f1978e8a16e"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "fc4306d85eb42936f7f35073ee48bf40"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "81f3f88f579f9b531d87508152851b61"
  },
  {
    "url": "tag/WebSocket/index.html",
    "revision": "f24bf4239d11ce6f35a2f31a34d2b333"
  },
  {
    "url": "tag/服务器/index.html",
    "revision": "82181cd534f07e2d3c54b6e8cc376408"
  },
  {
    "url": "tag/组件库/index.html",
    "revision": "fea03d4c391963e94b05ff1bbafd8c65"
  },
  {
    "url": "tag/资源打包/index.html",
    "revision": "0e62c74d2ac64011304e8ab42f2f4dcd"
  },
  {
    "url": "tag/跨域的理解/index.html",
    "revision": "30b9c0710beb6f0b741603f52501abaf"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "7d9e0f77d56097445e04efca4713f9c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "e810750e694ac278ee49650873278435"
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
