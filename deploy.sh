#!/bin/bash
yarn build
cd vuepress
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:kungfuboy/kungfuboy.github.io.git master
git checkout edit
cd ..