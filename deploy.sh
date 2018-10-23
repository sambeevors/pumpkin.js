#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'Docs updated via deploy script'

git push -f git@github.com:sambeevors/pumpkin.js.git master:gh-pages

cd -