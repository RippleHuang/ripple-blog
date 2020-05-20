const head = require('./config/head')
const plugins = require('./config/plugins')
const themeConfig = require('./config/themeConfig')

module.exports = {
  title: '心晴无云',
  description: '记录走过的前端之路',
  head: head,
  plugins: plugins,
  themeConfig: themeConfig,
  theme: 'reco'
}