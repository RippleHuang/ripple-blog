#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 自定义域名
# echo 'blog.ripplehuang.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@gitee.com:rippleHuang/ripple-blog.git master:gh-pages

cd -