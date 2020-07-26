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
    "revision": "c28ce0e39fcdc372c0aa914a58065d31"
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
    "url": "assets/js/34.bfb6d153.js",
    "revision": "91d79a5978aa467c3ab35091d82346e4"
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
    "url": "assets/js/app.b45e58bd.js",
    "revision": "ab9db6693499b321ace980abf9180bfa"
  },
  {
    "url": "categories/css/index.html",
    "revision": "86043cdd9184dede08cf32dc89f395f8"
  },
  {
    "url": "categories/git/index.html",
    "revision": "9d7f709d6d6559565cf14494afe5d6de"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "8a07525eee6029ce27804652ae7a1d50"
  },
  {
    "url": "categories/index.html",
    "revision": "79837ec7f7430c718b3448172009d838"
  },
  {
    "url": "categories/js/index.html",
    "revision": "2b75f935446f6e2f56c23c9ea92f6ce0"
  },
  {
    "url": "categories/node/index.html",
    "revision": "77b7d1cdd2a5a17dbe40abbe226f9f33"
  },
  {
    "url": "categories/vue框架/index.html",
    "revision": "a9cd4c4541f66df7fef9855353735fda"
  },
  {
    "url": "categories/webpack打包/index.html",
    "revision": "e3f103e2b63e629c5be7836c0353577b"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "bb4f51a2f0da2be22a61c9582bfbdbc3"
  },
  {
    "url": "categories/跨域/index.html",
    "revision": "1aaeea8c6b32c8e2710af86978eaffa4"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "2bfb78a7ac2e7011460f35fb3e89d88a"
  },
  {
    "url": "index.html",
    "revision": "1337901f1658eba793f3adfc0d5cc9e5"
  },
  {
    "url": "notes/CssNotes/Css_Css3 flex布局.html",
    "revision": "c04b2c7fca1659087b037a9ac966b438"
  },
  {
    "url": "notes/CssNotes/Css_样式规范.html",
    "revision": "dfaa9b1fa35e36229838510699f2ab99"
  },
  {
    "url": "notes/CssNotes/Css_遇到的问题.html",
    "revision": "990182bc01dead88d624ea211ac0e532"
  },
  {
    "url": "notes/CssNotes/css_面试.html",
    "revision": "4987e066d9e054656c3f26acad5d6761"
  },
  {
    "url": "notes/CssNotes/Css_页面布局.html",
    "revision": "30cd19f87bdb0337975ec599e7aec727"
  },
  {
    "url": "notes/Git/Git_发布到npm.html",
    "revision": "942dbabf8c0af686ecb4554c4ea0ae06"
  },
  {
    "url": "notes/Git/Git_本地操作.html",
    "revision": "8713542dbaf3b050359b67597af7cd9e"
  },
  {
    "url": "notes/Git/Git_概念及使用.html",
    "revision": "b5f7f886647eb51dd7766cf8af35bb83"
  },
  {
    "url": "notes/Git/Git_远程仓库及操作.html",
    "revision": "37ad47d0f3eb06b2f8fd030ef43e0cf0"
  },
  {
    "url": "notes/JsNotes/HTML篇.html",
    "revision": "30b688961e55208daeed02855f12faed"
  },
  {
    "url": "notes/JsNotes/js篇.html",
    "revision": "78d82a09d19ad38f233400bfb114d8fd"
  },
  {
    "url": "notes/JsNotes/设计模式.html",
    "revision": "98f4367344bdfa8385f11a8dde552dcf"
  },
  {
    "url": "notes/NodeNotes/Node_mongodb.html",
    "revision": "84ab1a0026b80506ebc947810bac7d02"
  },
  {
    "url": "notes/NodeNotes/Node_url及第三方模块.html",
    "revision": "02286a2af0b85053ac825856eed0b8fe"
  },
  {
    "url": "notes/NodeNotes/Node_基础.html",
    "revision": "ed702bea93711843e0bb705d02c9d592"
  },
  {
    "url": "notes/NodeNotes/Node_第三方模块.html",
    "revision": "d6b99876f538d02b2790f6dc78c56c92"
  },
  {
    "url": "notes/others/CORS.html",
    "revision": "8ca8f6085529f312f8abe21408bf3ecc"
  },
  {
    "url": "notes/others/JSONP.html",
    "revision": "028ac95bf8f22b4d406a86bbcdd1e3b7"
  },
  {
    "url": "notes/others/WebSocket.html",
    "revision": "ffd8d7eb480695d7215b6f329383660b"
  },
  {
    "url": "notes/others/跨域的理解.html",
    "revision": "b988f6072f15d04c30fac0a05355d1cb"
  },
  {
    "url": "notes/project.html",
    "revision": "5218b97fced47de6a3612c13bfa73dab"
  },
  {
    "url": "notes/VueNotes/Vue_axios.html",
    "revision": "e3afc0829e93b97e2e819557c1bc3adf"
  },
  {
    "url": "notes/VueNotes/Vue_UI组件库.html",
    "revision": "fa21dfa947168bc423a62f739e464fa7"
  },
  {
    "url": "notes/VueNotes/Vue_Vuex.html",
    "revision": "8c758a32a57f74c47917e5f023389b82"
  },
  {
    "url": "notes/VueNotes/Vue_基础.html",
    "revision": "cb859b76b67bb16b809910bf8a198c01"
  },
  {
    "url": "notes/VueNotes/Vue_组件化.html",
    "revision": "ce9369585b384a84deb1c7a4806eec31"
  },
  {
    "url": "notes/VueNotes/Vue_路由.html",
    "revision": "c3d320f979fde9142d7258e74d631631"
  },
  {
    "url": "notes/VueNotes/Vue_进阶.html",
    "revision": "bd0c51ea71c77a74147d453f733718bc"
  },
  {
    "url": "notes/VueNotes/Vue_通信.html",
    "revision": "a959b8d20f98edf2028223fdde48374b"
  },
  {
    "url": "notes/WebpackNotes/Webpack_css处理.html",
    "revision": "83e0b1acc2ba747345be8816044f49e8"
  },
  {
    "url": "notes/WebpackNotes/Webpack_js及语法检查.html",
    "revision": "4db84f15bb1145f7c1efa2b64651a39a"
  },
  {
    "url": "notes/WebpackNotes/Webpack_基础.html",
    "revision": "7d9d3bae92dfac719ab3601303db8c8c"
  },
  {
    "url": "notes/WebpackNotes/webpack_性能优化.html",
    "revision": "35b980cb081be5388678384d9cba4be5"
  },
  {
    "url": "notes/WebpackNotes/webpack_总结.html",
    "revision": "0c97eb71b47c0f6a92bb6bd7fc491874"
  },
  {
    "url": "notes/WebpackNotes/Webpack_资源打包.html",
    "revision": "c8c5e19ca307353a6cbe01b45bee3149"
  },
  {
    "url": "projects/CloudMusic/项目.html",
    "revision": "aec265e79c1de13a7f6ecfb1430a8bcd"
  },
  {
    "url": "projects/index.html",
    "revision": "e68ede501f6007a13ca7c99d129801f5"
  },
  {
    "url": "projects/problem.html",
    "revision": "6953145ba77e8aa3f69be1dd4bb38acf"
  },
  {
    "url": "rippleUi/rippleUI.html",
    "revision": "96ab912e16281089bb59fe5d21d2e0a5"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "b1f048d7eb9b6b06a94652227fc9b444"
  },
  {
    "url": "tag/CloudMusic/index.html",
    "revision": "6cd084723905ebb9c212ea4199ee2f03"
  },
  {
    "url": "tag/CORS/index.html",
    "revision": "72556abece36d2e75c273494ffc4b7b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "665497da962c754c9f7dbacd041b3171"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "78c50baf657991cd067958792c4de533"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "8b5b60c56d0de1e3869ba42695231cae"
  },
  {
    "url": "tag/git/index.html",
    "revision": "39705e30b18fd81b91e891892620364c"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "62dbfe7cd42e8acbd9f6252cd773f9a2"
  },
  {
    "url": "tag/index.html",
    "revision": "2d4e3f6d9d9f3cedf60d0d6cb0a829f2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "35b961ff20780390222631c689ffaf0b"
  },
  {
    "url": "tag/JSONP/index.html",
    "revision": "ea9af594867d8db8e39768dab0c240d9"
  },
  {
    "url": "tag/mongodb/index.html",
    "revision": "3fd97e418a2597225f17e34bd796d66b"
  },
  {
    "url": "tag/node/index.html",
    "revision": "283407d1a67851d6fdf9caa2543bd80f"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "4c61d58fdf4fd1e84fbe02d674ff1ff2"
  },
  {
    "url": "tag/vue router/index.html",
    "revision": "ef17f5ba0f8763cc09deae9858cc8714"
  },
  {
    "url": "tag/vue-cli/index.html",
    "revision": "ab5767b781da54c2651bd2cd6d4e6438"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cefd4bc9dfdeffd0618fc7ff8a84136b"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "531286bfc13d3021ff5b44bc346b039e"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "0df304c26301c25f1bc6cb9119a4b1d6"
  },
  {
    "url": "tag/WebSocket/index.html",
    "revision": "629b12fc4725e053852b994f0e453db1"
  },
  {
    "url": "tag/服务器/index.html",
    "revision": "e3bd48013ff43124d346069ad0376492"
  },
  {
    "url": "tag/组件库/index.html",
    "revision": "5f985c4324fe1fe77a703eb920511ac2"
  },
  {
    "url": "tag/资源打包/index.html",
    "revision": "f58f7cc1b09f54f3eff0dcad3ec539f2"
  },
  {
    "url": "tag/跨域的理解/index.html",
    "revision": "eab873280dc897435b36b516c2d98f9b"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "cc8a4149228d870258766565bc24ac04"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b880cde991306493923f10e5375912c"
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
