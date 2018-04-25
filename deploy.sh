#!/bin/bash
yarn build
cd dist
cp -r ./vuepress/* ./ && rm -rf ./vuepress
git add .
git commit -m 'deploy'
git push -u origin master --force
cd ..
git add .
git commit -m'deploy'
git push origin edit --force

# git remote add origin git@github.com:kungfuboy/kungfuboy.github.io.git