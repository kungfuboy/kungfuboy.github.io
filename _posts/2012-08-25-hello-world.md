---
layout: post
title: 你好，世界
---
# Gulp + Webpack

标签（空格分隔）：工具

---

前几天脑洞大开，想着能不能在Github Pages上布置一个基于React的SPA，哇，想想就很酷。

然而经过两天的折腾，发现太难了，解析.md文件就是个重要的问题，Github Pages官方的Jekyll引擎似乎是事先将.md格式的文件转化为.html，不知道在哪个角落猫着，需要的时候再拿出来。

如果我要建立自己的.md解析机制，那……我的时间都花在建立博客网站上了，博客还写不写了？在这等衡量下，决定不再深究了，就用自己已经掌握的知识开干……做出来再说！

于是想到，能不能用单页面和传统页面结合的方式？好吧，听起来是有点怪，但体验上，至少应该会比传统页面要好一些吧……

磨刀不误砍柴功，事先花时间搭建好开发环境是很值得的，由于我的博客是由SPA和传统页面相结合，思虑再三，我还是决定把两个开发环境分开——用Gulp开发传统页面，用Webpack开发SPA。

理由很简单，在传统页面上，模板渲染Jekyll已经做好了，只需要按照它的规则书写即可，主要的开发工作应该是在页面样式上，也就是css代码，那么gulp的主要工作就是转换sass了。至于Webpack，是用来打包组件的，虽然可以写在一起，但我可不想转换个sass就需要把react组件给打包一次，那太浪费时间。

先配置SPA这边吧，准确来说是Webpack + react + material-ui + babel

```bash
npm init
# 一路Enter

npm install --save-dev webpack
# 安装webpack

npm install --save react react-dom react-router react-tap-event-plugin material-ui
# 生产用的 React 与 Material-UI 部分

npm install --save-dev babel-core babel-loader
# Babel转换器的核心部分

npm install --save-dev babel-preset-es2015 babel-preset-react babel-preset-stage-1
# Babel转换器的三个额外配置

vim .babelrc
# 新建文件，写入以下内容
---
{
  "presets": [
    "es2015",
    "react",
    "stage-1"
  ],
  "plugins": []
}
---

vim webpack.config.js
# 新建文件，写入以下内容
---
var path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel'] }
        ]
    }
}
---

vim package.json
# 更改scripts域
---
  "scripts": {
    "build": "webpack",
    "build-dev": "webpack -w -d"
  }
---

vim index.jsx
# 编写入口文件
---
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router"
import routes from './src/routes'

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('container'));
---
```

##Gulp + Sass + broswer-sync
```
npm i -D gulp gulp-autoprefixer browser-sync gulp-sass
```
