module.exports = [
  { text: '首页', link: '/', icon: 'reco-home' },
  { text: '时间线', link: '/timeline/', icon: 'reco-date' },
  {
      text: '项目',
      ariaLabel: 'Projects Menu',
      items: [
      { text: '项目1', link: '/projects/project1/' },
      { text: '项目2', link: '/projects/project2/' }
      ]
  },
  {
      text: '联系',
      icon: 'reco-account',
      ariaLabel: 'Contact Menu',
      items: [
      { text: 'github', link: 'https://github.com/RippleHuang', icon: 'reco-github' },
      { text: '码云', link: 'https://gitee.com/ripplehuang', icon: 'reco-mayun' }
      ]
  }
]