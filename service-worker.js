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
    "revision": "883ac4ffdcc2fea69173cdd482f9cc94"
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
    "url": "assets/js/1.c7e591f2.js",
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
    "url": "assets/js/21.4f877fd8.js",
    "revision": "af5715712b3997ab2e536abffacca620"
  },
  {
    "url": "assets/js/22.90d2b2e4.js",
    "revision": "c9113e23ebf584cab6bd7bab147626c7"
  },
  {
    "url": "assets/js/23.73b9168b.js",
    "revision": "b0a1649b96e504ad05d1d856eb83a7b6"
  },
  {
    "url": "assets/js/24.53e87ed0.js",
    "revision": "8623192f8a41b7e4f8fbcdb2492764a0"
  },
  {
    "url": "assets/js/25.6c4cfab1.js",
    "revision": "d90018232fca45a5bc462a1a7173ae1c"
  },
  {
    "url": "assets/js/26.720c27f6.js",
    "revision": "6c9256d57583d00567bac7e5383ec217"
  },
  {
    "url": "assets/js/27.a66f053b.js",
    "revision": "792053f280eee85595e1aee94bce485f"
  },
  {
    "url": "assets/js/28.440ffc8e.js",
    "revision": "b7000d32fcccc67b692c3be4bdfeff82"
  },
  {
    "url": "assets/js/29.fc8e97bc.js",
    "revision": "fa54ca177c80e7610547975f9cef5959"
  },
  {
    "url": "assets/js/30.a5e1ef14.js",
    "revision": "d47bfbf381f3a870c065145986ba1ed2"
  },
  {
    "url": "assets/js/31.11070f47.js",
    "revision": "306489ce149360fec9aa06606b55dd4d"
  },
  {
    "url": "assets/js/32.2fdb0a94.js",
    "revision": "ab98080a5a7e4af67733a09577dce142"
  },
  {
    "url": "assets/js/33.63e1daa4.js",
    "revision": "cd0c272e68bcce630bbd556ab78a3e58"
  },
  {
    "url": "assets/js/34.0c51e11d.js",
    "revision": "d40f7e8c53dc1c9abb4e4683e96e48f5"
  },
  {
    "url": "assets/js/35.4811552e.js",
    "revision": "8ceb84295afecaebe82ea2b67e144a31"
  },
  {
    "url": "assets/js/36.99983896.js",
    "revision": "442bed0188827f228a3b8dffb867333a"
  },
  {
    "url": "assets/js/37.1fcba7fd.js",
    "revision": "9851557085397ab0ceaad70c5a376435"
  },
  {
    "url": "assets/js/38.7b070a5c.js",
    "revision": "9c162375bd7403adeae933dfbd90828e"
  },
  {
    "url": "assets/js/39.1d8ad787.js",
    "revision": "1afde2edf3a90f6ba4c4c688fd451a3e"
  },
  {
    "url": "assets/js/4.97154772.js",
    "revision": "fa9b9b960d73ec038be088fcec82d206"
  },
  {
    "url": "assets/js/40.656721e9.js",
    "revision": "d2f08c27774266e995d87fdbc579d541"
  },
  {
    "url": "assets/js/41.d1f9a47b.js",
    "revision": "cf29b2cda381dcd04434cb93c52f1b9e"
  },
  {
    "url": "assets/js/42.1ca931d8.js",
    "revision": "943181eb08c80882c65ed83cdfe43e5e"
  },
  {
    "url": "assets/js/43.d788b26f.js",
    "revision": "4fd753101c70bdd0a7ebdec4da43afe3"
  },
  {
    "url": "assets/js/44.1b4d816b.js",
    "revision": "2c922bbaf1e5fe6a64d2cbeb0871c9ea"
  },
  {
    "url": "assets/js/45.36860b02.js",
    "revision": "16b06dd7c7ea493130066e2d8c1008e7"
  },
  {
    "url": "assets/js/46.73e51b1d.js",
    "revision": "210cde24883950efbb6dd1c085d2052e"
  },
  {
    "url": "assets/js/47.95acd657.js",
    "revision": "516d6db672ef9b7d00e8d993d5a137b6"
  },
  {
    "url": "assets/js/48.45b35111.js",
    "revision": "5f9bf29a973a60e93ab3d30c69e6b133"
  },
  {
    "url": "assets/js/49.ee8fb4bf.js",
    "revision": "b61fe0fcff83d268871de26217279dd3"
  },
  {
    "url": "assets/js/5.6ba3370c.js",
    "revision": "9d433f15df8971d3da5c1163d6ba37e2"
  },
  {
    "url": "assets/js/50.3961d0aa.js",
    "revision": "0f5e533dc15235032d95583fe09e1ddd"
  },
  {
    "url": "assets/js/51.ded72553.js",
    "revision": "345df10518b0da85bd5e0e277fd8fcbf"
  },
  {
    "url": "assets/js/52.3ad0fa1a.js",
    "revision": "4d6493df20ee73ca55f81e691530efa8"
  },
  {
    "url": "assets/js/53.7550c75e.js",
    "revision": "1d94b49785268d7a3eb09295bbd3883a"
  },
  {
    "url": "assets/js/54.0a508f84.js",
    "revision": "d564e819ea5b7d10af0f79e8f4373e3b"
  },
  {
    "url": "assets/js/6.4aa81e6c.js",
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
    "url": "assets/js/app.bb55bb1a.js",
    "revision": "fcb7409158f2d8215a53224c4c0b381c"
  },
  {
    "url": "categories/css/index.html",
    "revision": "70fa83e02dc0f4c2a827d047ec600117"
  },
  {
    "url": "categories/git/index.html",
    "revision": "682411e0955e5a98f9ea93301eca2219"
  },
  {
    "url": "categories/index.html",
    "revision": "55ed422fbeab7eede91ba71d726b8b71"
  },
  {
    "url": "categories/node/index.html",
    "revision": "2652c7fad09b9669368c95f11a62c518"
  },
  {
    "url": "categories/vue框架/index.html",
    "revision": "e4848d89dba77c32f9173cb065f9791a"
  },
  {
    "url": "categories/webpack打包/index.html",
    "revision": "32d9450dc62605a36b22e9da38da8e66"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "fd031b7a8dbf1ef6f616845847f21f43"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "7fd5899effd69aa911deec7ef0f9fd13"
  },
  {
    "url": "index.html",
    "revision": "2c6a581f51908cca1a7430687443cb61"
  },
  {
    "url": "notes/CssNotes/Css_Css3 flex布局.html",
    "revision": "90dbe257541bccdca360edd14857c4a9"
  },
  {
    "url": "notes/CssNotes/Css_样式规范.html",
    "revision": "536bb12c7607ac907b0db27740335955"
  },
  {
    "url": "notes/CssNotes/Css_遇到的问题.html",
    "revision": "81336671db4fa7d4a40841ab510fa4cd"
  },
  {
    "url": "notes/CssNotes/Css_页面布局.html",
    "revision": "a974c90aecbe6799e58ca2ba089eddf7"
  },
  {
    "url": "notes/Git/Git_发布到npm.html",
    "revision": "1df77778d1455fa66a2f985f85a39cc2"
  },
  {
    "url": "notes/Git/Git_本地操作.html",
    "revision": "ea7c81aae4507078f7713fb946949ea0"
  },
  {
    "url": "notes/Git/Git_概念及使用.html",
    "revision": "7e2236c55e88a32fa2dbaa83f2474374"
  },
  {
    "url": "notes/Git/Git_远程仓库及操作.html",
    "revision": "281ddd3ba8c4f740ff1dc358dff38d4f"
  },
  {
    "url": "notes/NodeNotes/Node_mongodb.html",
    "revision": "cd57680577c56e778c6b18f00255b460"
  },
  {
    "url": "notes/NodeNotes/Node_url及第三方模块.html",
    "revision": "89eb330b3ad17b04e694617979d9b823"
  },
  {
    "url": "notes/NodeNotes/Node_基础.html",
    "revision": "14d3f7d1462f88a67b3cccf0db9d1090"
  },
  {
    "url": "notes/NodeNotes/Node_第三方模块.html",
    "revision": "4604fd7f5de9f22aa11159aa2a12e48d"
  },
  {
    "url": "notes/project.html",
    "revision": "0defac2e6b17618a3ac8e6fd40d2e553"
  },
  {
    "url": "notes/VueNotes/Vue_axios.html",
    "revision": "45c177435f570d629d7f1bc31ce710c7"
  },
  {
    "url": "notes/VueNotes/Vue_UI组件库.html",
    "revision": "026c2d523a3c9c867d39ed55d0cffdd7"
  },
  {
    "url": "notes/VueNotes/Vue_Vuex.html",
    "revision": "c8dbb971c83c26ffb90461531d02292f"
  },
  {
    "url": "notes/VueNotes/Vue_基础.html",
    "revision": "a27f1112e2d03b3d2229f53d7836a7a8"
  },
  {
    "url": "notes/VueNotes/Vue_组件化.html",
    "revision": "bb96b0fb1010ce610b47081f3b646cf6"
  },
  {
    "url": "notes/VueNotes/Vue_路由.html",
    "revision": "34b33d847cd3f699210dc6fff21e6da6"
  },
  {
    "url": "notes/VueNotes/Vue_进阶.html",
    "revision": "cccd61987e4b98770fb8cd03bd7fec26"
  },
  {
    "url": "notes/VueNotes/Vue_通信.html",
    "revision": "3bf6967bad9336d4586b16bab13fcbf4"
  },
  {
    "url": "notes/WebpackNotes/Webpack_css处理.html",
    "revision": "794ae7fe8f74fdc51e6a9d0fed5a8410"
  },
  {
    "url": "notes/WebpackNotes/Webpack_js及语法检查.html",
    "revision": "4e919cf0f0bac2df5279b4a3f55d756e"
  },
  {
    "url": "notes/WebpackNotes/Webpack_基础.html",
    "revision": "d462847b6818687bb95810010d7d36ba"
  },
  {
    "url": "notes/WebpackNotes/webpack_性能优化.html",
    "revision": "5f7940ddd7c686e8f0f7d930fa9ac087"
  },
  {
    "url": "notes/WebpackNotes/webpack_总结.html",
    "revision": "d5aead3a16339d8a5ead57a86d962114"
  },
  {
    "url": "notes/WebpackNotes/Webpack_资源打包.html",
    "revision": "46ffa6917a236e57b94249d4fa4d2d2a"
  },
  {
    "url": "projects/CloudMusic/项目.html",
    "revision": "c44bbac893afe6f846985ed1ce2abef5"
  },
  {
    "url": "projects/index.html",
    "revision": "e17a67f2ad1c932ea89d67693fb04587"
  },
  {
    "url": "projects/problem.html",
    "revision": "5468c666cfcb9d121b0e5489b6cf8591"
  },
  {
    "url": "rippleUi/rippleUI.html",
    "revision": "830a9db77e01b47cab59100718d8c9b6"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "ca5142cd9d296e020a5c8169ee1b461d"
  },
  {
    "url": "tag/CloudMusic/index.html",
    "revision": "6eba1ce24010d57f688e1b9ae5773d32"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1baedf371e545afc20f0f8e5839084a6"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "1e5c9a7af967262292c7fb10f12dc856"
  },
  {
    "url": "tag/git/index.html",
    "revision": "eb04d06d2ee90bfe1f3963c4f27227a9"
  },
  {
    "url": "tag/index.html",
    "revision": "5f84bc45c8936533f37437e2b3c3583b"
  },
  {
    "url": "tag/mongodb/index.html",
    "revision": "e695081975401a2fe43e627eaec8bcb4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "dcb0a16f5d80cb8b6d62147419144f12"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "6606d9224398e053bc92a0e136c3af1d"
  },
  {
    "url": "tag/vue router/index.html",
    "revision": "ea14e446d9b1b2d2c167ab187a2b1651"
  },
  {
    "url": "tag/vue-cli/index.html",
    "revision": "87c0f5f0d4a0de0b40c9f408ebc9fc06"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "632582fdc76e0981b63eeecb1f2cb05a"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "b864259a28d7439e6c5c7402575e3975"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "3973f6c94fab11f6071c8f2195f0f1ed"
  },
  {
    "url": "tag/服务器/index.html",
    "revision": "890117a46950931fd09526d348bd7133"
  },
  {
    "url": "tag/组件库/index.html",
    "revision": "9dfa4818ca6191fa97f36b8000c361ef"
  },
  {
    "url": "tag/资源打包/index.html",
    "revision": "fa95a5e790f52397f854732ead3dc4f1"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "8544c6f92541f9d3a29bbbf9b5b5aa09"
  },
  {
    "url": "timeline/index.html",
    "revision": "199062fe86a505056033bd0af6dba68a"
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
