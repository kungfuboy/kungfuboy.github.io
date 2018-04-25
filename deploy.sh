#!/bin/bash
yarn build
cd dist
mv vuepress/* .
rm -rf vuepress
git add .
git commit -m 'deploy'
git push -u origin master --force
cd ..
git add .
git commit -m'deploy'
git push origin edit --force