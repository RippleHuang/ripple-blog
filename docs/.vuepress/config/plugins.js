module.exports = {
  // 彩带
  'ribbon': {
    size: 60,
    opacity: 0.6,
    zIndex: -1
  },
  // 线条
  'nest': {
    color: '255,0,0', 
    opacity: 0.8, 
    count: 120, 
    zIndex: -1 
  },
  // pwa配置
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  // 音乐
  'music-bar': {
    playList: [],
    platform: [
      {
        name: "music.163.com",
        songIDs:[],
        playListIDs: ["3165009544"] //支持多个歌单 ID
      }
    ],
    timeOut: 2000,
    firstClickPlay: true //首次点击自动播放,对移动端友好
  },
  // 看板娘
  '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
    theme: ['wanko', 'haruto'],
    width: 150,
    height: 180,
    modelStyle: {
      position: 'fixed',
      right: '115px',
      bottom: '45px',
      opacity: '0.7',
      'z-index': 9999
    },
    messages: {
      welcome: '欢迎来到 心晴无云博客',
      home: '回到主页',
      theme: '更换其他小伙伴',
      close: '关闭'
    },
    messageStyle: {
      position: 'fixed',
      right: '115px',
      bottom: '230px',
      'z-index': 9999
    },
    btnStyle: {
      position: 'fixed',
      bottom: '40px',
      right: '70px',
      'z-index': 9999
    }
  }
}