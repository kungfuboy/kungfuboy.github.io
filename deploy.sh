#!/bin/bash
yarn build
cd vuepress
git add .
git commit -m 'deploy'

git remote add origin https://github.com/kungfuboy/kungfuboy.github.io.git
git push -u origin master
cd ..