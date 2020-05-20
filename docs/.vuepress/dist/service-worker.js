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
    "revision": "adb563c97af3b80189ad9a2e3cd6700c"
  },
  {
    "url": "assets/css/0.styles.9ed61b87.css",
    "revision": "df02727f1a7c7210a9e962dc72ddd595"
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
    "url": "assets/js/10.351331da.js",
    "revision": "88139a40a95c2ee4a455d306b1952be6"
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
    "url": "assets/js/15.338d25ef.js",
    "revision": "00d6f0fdb271ff4c9fa47be7308ee8b4"
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
    "url": "assets/js/18.099b104a.js",
    "revision": "8ca475d7b4251018ba36ed93f64963b3"
  },
  {
    "url": "assets/js/19.77cf933a.js",
    "revision": "6cdfe17a20dee2a976f755019f814984"
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
    "url": "assets/js/21.60312002.js",
    "revision": "740c3926d014f2cd01f2d03e8ef0f757"
  },
  {
    "url": "assets/js/22.28e9acc2.js",
    "revision": "8326310357e1724c91b05a81240de26b"
  },
  {
    "url": "assets/js/23.b5e053b1.js",
    "revision": "24422bd4ccdc5c6179cbf3aa8cff6a69"
  },
  {
    "url": "assets/js/24.e5eec968.js",
    "revision": "8b263c4cca3ec3584449679dca94d939"
  },
  {
    "url": "assets/js/25.548f6447.js",
    "revision": "37932ee9fa94d6ad7b3fb20f7f1d2ccc"
  },
  {
    "url": "assets/js/26.e7293c1d.js",
    "revision": "8de7714ae600b092e8a538585fd5d935"
  },
  {
    "url": "assets/js/27.dd0e67ca.js",
    "revision": "cf651c99bd0ff48b4c0868f0bb62fca6"
  },
  {
    "url": "assets/js/28.ac276c5d.js",
    "revision": "cd46ac2220e991e89d2a3bd45a9e7080"
  },
  {
    "url": "assets/js/29.a9215cb3.js",
    "revision": "4ee25a56dbabde28660309ea0c70c061"
  },
  {
    "url": "assets/js/30.3b706504.js",
    "revision": "b823824a172e2f93698aa284ad4ceb14"
  },
  {
    "url": "assets/js/31.e47329bb.js",
    "revision": "fdbe386307434fea271b51fa5649d395"
  },
  {
    "url": "assets/js/32.31a7d46c.js",
    "revision": "e42b6aa3ff362f76fc4a496061be03c7"
  },
  {
    "url": "assets/js/33.e2ac32af.js",
    "revision": "333a9bfcefa98b9988d59a20d296bc35"
  },
  {
    "url": "assets/js/34.151bf566.js",
    "revision": "b756ed510ef9d7fdc6f51acf0a2db4d8"
  },
  {
    "url": "assets/js/35.0da04c54.js",
    "revision": "00e4af03e46f512a949fc3bd18d118e7"
  },
  {
    "url": "assets/js/36.5adfaa35.js",
    "revision": "cf50bc5922221eadb612a38a8ba99417"
  },
  {
    "url": "assets/js/37.74c28bbb.js",
    "revision": "c48eb24aba3731669bc08ac5e9d4b8ad"
  },
  {
    "url": "assets/js/38.4f551031.js",
    "revision": "da363bd888777aeb02657bd32d1ef5e3"
  },
  {
    "url": "assets/js/39.f2ac1afe.js",
    "revision": "b0993a1bd88eb529527b22c1509deca0"
  },
  {
    "url": "assets/js/4.97154772.js",
    "revision": "fa9b9b960d73ec038be088fcec82d206"
  },
  {
    "url": "assets/js/40.2e77071d.js",
    "revision": "fb161db1850e1d71bff668a61adfc9ce"
  },
  {
    "url": "assets/js/41.d45a0c99.js",
    "revision": "0fc4ab3379aa329f061d260227117567"
  },
  {
    "url": "assets/js/42.94e4f939.js",
    "revision": "dd56cc8858ffad5d76fb0aff85fc08dd"
  },
  {
    "url": "assets/js/43.17463198.js",
    "revision": "ee39a8816fa5a41a24f4c2e563ffcc72"
  },
  {
    "url": "assets/js/44.f2bdd061.js",
    "revision": "2dd208c4055694da3aa1642792878223"
  },
  {
    "url": "assets/js/45.2d6213df.js",
    "revision": "300f052b946201dd47f285f7df2e924e"
  },
  {
    "url": "assets/js/46.09b54b27.js",
    "revision": "fc0028e7cc488d2178f7ba08d38b7619"
  },
  {
    "url": "assets/js/47.4ce459e0.js",
    "revision": "20aef6511d34320f7b62d67208a534ca"
  },
  {
    "url": "assets/js/48.b1aea4d4.js",
    "revision": "a7e1c8f7cdbb22ad65f8eda738e21cc7"
  },
  {
    "url": "assets/js/49.fb8114b2.js",
    "revision": "69618779755862569999124abd7a25ff"
  },
  {
    "url": "assets/js/5.6ba3370c.js",
    "revision": "9d433f15df8971d3da5c1163d6ba37e2"
  },
  {
    "url": "assets/js/50.c91fa5e0.js",
    "revision": "656472dcb0e0c243405b68c962017af0"
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
    "url": "assets/js/8.42c213e7.js",
    "revision": "11a17b99e13bd5c5fecebabae160cda5"
  },
  {
    "url": "assets/js/9.d8a8e288.js",
    "revision": "d89fe88f9e62c9865fb1032cb448457f"
  },
  {
    "url": "assets/js/app.c1d3db25.js",
    "revision": "21fb55cb77aad894d121932dd63f93f3"
  },
  {
    "url": "categories/css/index.html",
    "revision": "19f43e8cd64f59df701d4034e940f99b"
  },
  {
    "url": "categories/git/index.html",
    "revision": "32fbdc36a07b21aa7465978e332f7e9a"
  },
  {
    "url": "categories/index.html",
    "revision": "75832ff176c7997a35078966dc2d0bf6"
  },
  {
    "url": "categories/node/index.html",
    "revision": "562cbdb4c8d3aebf35a255521d35519f"
  },
  {
    "url": "categories/vue框架/index.html",
    "revision": "36bbe529448f5d80c4ffdc9ae6eff77c"
  },
  {
    "url": "categories/webpack打包/index.html",
    "revision": "4fe834b5949473cd1be3940221f1dc08"
  },
  {
    "url": "index.html",
    "revision": "559a241cb5bafacd0e46467b26c3fe35"
  },
  {
    "url": "notes/CssNotes/Css_样式规范.html",
    "revision": "605fde078a72dc2ed753eccb1c279b52"
  },
  {
    "url": "notes/CssNotes/Css_遇到的问题.html",
    "revision": "a9e31568a766868782734e5273afe103"
  },
  {
    "url": "notes/Git/Git_发布到npm.html",
    "revision": "756781660711c5b349fa83dcfe3a5966"
  },
  {
    "url": "notes/Git/Git_本地操作.html",
    "revision": "b821c10575dad085c07eff9e1218222f"
  },
  {
    "url": "notes/Git/Git_概念及使用.html",
    "revision": "9b37b40ac7e8503d11909f81b6dd7300"
  },
  {
    "url": "notes/Git/Git_远程仓库及操作.html",
    "revision": "cd6b1f84c7b4fb4943ab02ef92d04d1b"
  },
  {
    "url": "notes/NodeNotes/Node_mongodb.html",
    "revision": "b246eb3482939b9fe953c60ede7f510e"
  },
  {
    "url": "notes/NodeNotes/Node_url及第三方模块.html",
    "revision": "a8b71a6096a8049a47034bf8b37d62a8"
  },
  {
    "url": "notes/NodeNotes/Node_基础.html",
    "revision": "1e627d5aafaed3df0229c847573329c2"
  },
  {
    "url": "notes/NodeNotes/Node_第三方模块.html",
    "revision": "4ee2d161289b321d9ef64571205a1bca"
  },
  {
    "url": "notes/project.html",
    "revision": "2d77cbfa8f7b18e50b32c1826ab664bc"
  },
  {
    "url": "notes/VueNotes/Vue_axios.html",
    "revision": "3228135278a6492d9e29bbac024e970a"
  },
  {
    "url": "notes/VueNotes/Vue_UI组件库.html",
    "revision": "bb4abac8b97bfd6c42885bd43dc300de"
  },
  {
    "url": "notes/VueNotes/Vue_Vuex.html",
    "revision": "2bc9d840303de0930d9b23fe50207ad2"
  },
  {
    "url": "notes/VueNotes/Vue_基础.html",
    "revision": "5c9580b93914002de4c7b91206058b19"
  },
  {
    "url": "notes/VueNotes/Vue_组件化.html",
    "revision": "9b39672f288b3bff3a97ae519c38532f"
  },
  {
    "url": "notes/VueNotes/Vue_路由.html",
    "revision": "0d95a6d374dc947b20f7d20018b34e73"
  },
  {
    "url": "notes/VueNotes/Vue_进阶.html",
    "revision": "5d2ddb1d20ec4bcddcd847dd5f670780"
  },
  {
    "url": "notes/VueNotes/Vue_通信.html",
    "revision": "624dc8f9922889edf770922b0825b675"
  },
  {
    "url": "notes/WebpackNotes/Webpack_css处理.html",
    "revision": "23882504e4475aad71aca3a98372e2c4"
  },
  {
    "url": "notes/WebpackNotes/Webpack_js及语法检查.html",
    "revision": "3d2c8183fd674e5d99bba63f387dd2cd"
  },
  {
    "url": "notes/WebpackNotes/Webpack_基础.html",
    "revision": "9908afc042c7bd0c2bc154d697f16cfe"
  },
  {
    "url": "notes/WebpackNotes/webpack_性能优化.html",
    "revision": "67f3557702d7540d064cbe724bf5e76c"
  },
  {
    "url": "notes/WebpackNotes/webpack_总结.html",
    "revision": "58b6776789c19ec7d71fede7aa2de54d"
  },
  {
    "url": "notes/WebpackNotes/Webpack_资源打包.html",
    "revision": "163afca2f4a9955d35e5cb3d854a74c7"
  },
  {
    "url": "projects/index.html",
    "revision": "cddb08e34dd8d79d079d70e19e3819d3"
  },
  {
    "url": "rippleUi/rippleUI.html",
    "revision": "e22a1ca334c294c5da6b091a0b8e42ae"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "fae10b66685e2330f30055b38f5d3f4e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "00ff3a13bbd475204fd65d6ab2b8dfc6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fe7e60a032351cf968bffa58735ef582"
  },
  {
    "url": "tag/index.html",
    "revision": "f915d7a9ae5afde2707fd8535eb68fcd"
  },
  {
    "url": "tag/mongodb/index.html",
    "revision": "6c59ddfd54ad711db1a36733ef2cb739"
  },
  {
    "url": "tag/node/index.html",
    "revision": "a22e499ca62ca28d21e8558fb21953ac"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c5139080bb770abbb7d9ed0decfdd9fe"
  },
  {
    "url": "tag/vue router/index.html",
    "revision": "a4f89e734cb06004cfe53409d986a85d"
  },
  {
    "url": "tag/vue-cli/index.html",
    "revision": "ab16782a058064100b76539b3b2eb596"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4b5d47055d759fe1b5275591b83a64ec"
  },
  {
    "url": "tag/Vuex/index.html",
    "revision": "45d584b1044c92065e0ed342013b944a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "ce9da3178442f8cd4cc9c9338afe4c0f"
  },
  {
    "url": "tag/组件库/index.html",
    "revision": "844dda88e5cb2cd2ab04825d15571fc9"
  },
  {
    "url": "tag/资源打包/index.html",
    "revision": "e2013d65670380e9dbbf048698de3857"
  },
  {
    "url": "tag/项目/index.html",
    "revision": "7563a83210511023eb97dc20703096ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9239d00f27bd12e8d5a90e74408b1a3"
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
