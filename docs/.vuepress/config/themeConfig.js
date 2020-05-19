const nav = require('./nav')
const privacy = require('./privacy')

module.exports = {
    logo: '/assets/img/logo.jpg',
    type: 'blog',
    blogConfig: {
      category: {
        location: 3,
        text: '类别'
      },
      tag: {
        location: 4,
        text: '标签'
      }
    },
    locales: {
      '/': {
        recoLocals: {
          homeBlog: {
            article: '文章', 
            tag: '标签',
            category: '类别'
          }
        }
      }
    },
    author: '小文',
    authorAvatar: '/assets/img/logo.jpg',
    mode: 'auto',
    nav: nav,
    valineConfig: {
      appId: privacy.appId,
      appKey: privacy.appKey
    },
    lastUpdated: '更新时间',
    sidebar: 'auto',
    smoothScroll: true,
    sidebarDepth: 2,
    repo: 'RippleHuang/ripple-blog',
    docsDir: 'docs',
    docsBranch: 'test',
    editLinks: true,
    editLinkText: '帮助我改善此页面'
}