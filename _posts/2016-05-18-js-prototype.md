---
layout: post
title: 辞职第一天：Prototype(原型)
---
# 辞职第一天：Prototype(原型)
---
我辞职的时候，手上的项目还没有完结，上完最后一天班，回到家里，兴奋地看了一遍《叶问3》，然后想再看看项目里的代码。

CSS代码不用看啦，都是自己写的，熟的不能再熟了，于是专门找自己看不懂的，于是看到了这一段：

```
Component.prototype.showLoading = function (divId) {
    $("#" + divId).empty().append("
      <div class='loading'>
        <img src='static/images/loading.gif' />
      </div>");
};
```

我知道这段代码是干嘛的，所以无视里面的东西：

```
Component.prototype.showLoading = function (**) {
    //balabalabala
}
```

唔……

**prototype**？这是虾米？

在脑子里搜索了一下，记得在《Javascript高级程序设计》这本书里面看到过，叫原型……链？这玩意是怎么用的？
于是我又在浩瀚的代码里找它是怎么被使用的？哦，找到了：

```
var myNavigator = new Component("common/navigator");
······
myNavigator.on("load", function () {
    this.showLoading("side-menu");
······
```
不懂！

遇到不懂的，先翻书……咦，我的《Javascript高级程序设计》呢？卧槽，书还在公司呢，好吧，改天再回去拿书，现在只能求助于伟大的因特网了。

网上看了一下，不懂！

于是去图灵社区，看了一下在线的《你不知道的Javascript（上）》，好像有点眉目了。自己折腾着，报错两次之后，敲下了这样一段没有报错的交互代码：

![7DDE5B21-DE6B-4568-A990-3283A6DB45AF.png-43.1kB][1]

a是foo()的实例，所以，尽管他们里面的东西不一样，但是原型链是一样的，这么理解对吗？
我不知道，通常我想不明白的事情，会去问迷失的生鱼片（网名），我把代码发给他后……

> *迷失的生鱼片*：可以这么理解，但一般prototype 是用来扩展的，比如 js 标准库没有这个方法，就可以直接扩展。

所以项目代码里的写法，其实是跟下面的写法一样的。

![559B5EB2-421B-4A4A-9DC4-F7D0057B26DA.png-38.9kB][2]

总结一下，大致的步骤是：

>* 1，创建一个函数foo()。
>* 2，将这个函数扩展——foo.prototype.look。
>* 3，实例化foo函数。
>* 4，在foo函数里直接使用look。

刚想明白，第一反应就觉得自己实在是太牛逼了。

第二个念头，转折想到：卧槽，用面向对象的方法不是更简单吗？
```
var foo = function {
    look: function() {
        var i = 1;
    }
}
foo.look;
```
这不是更高效吗？代码量少呀！！

嗯，遇到想不懂的问题，去问迷失的生鱼片……

> *迷失的生鱼片*：js 中的function就是对象，都可以new出来。new出来的是一个实例，各自不同，虽然不同，但可以共享用 prototype 扩展出来的方法及属性。

> *夜鹰*： 共享？好像还真是……但当中好像还有隐隐约约的类似于继承关系。

> *迷失的生鱼片*： 你那种全部写在闭包里面的方法也是可以的，但一般习惯定义一个简单的对象，然后扩展。

> *夜鹰*：所以……用原型扩展的主要目的是为了共享……吗？

> *迷失的生鱼片*：NO！主要就是为了扩展，但扩展出来的东西是实例共享的。

> *夜鹰*：所以new在某种意义上，可以看做是一种继承，只要实例化了，就可以用这个老爹的扩展方法。

> *迷失的生鱼片*：new不能看做是继承啊你个混蛋！！！

###实际运用

在项目里的做法，是在一个单独的js文件里定义一个简单的function，然后在它身上扩展各种方法，其他js文件对它进行实例化之后，直接调用它的扩展方法。

唔，赞！！

然而，ES6的语法中已经有了`class`这个新的关键字，那prototype这个写法淡渐退出，也是可以预见的事了吧……

###遗留问题

* 什么是继承？


  [1]: http://static.zybuluo.com/kungfuboy/fl979yehvbm1wd5ex0k12oio/7DDE5B21-DE6B-4568-A990-3283A6DB45AF.png
  [2]: http://static.zybuluo.com/kungfuboy/gnvf6tnz8j7wfn8b84odax3f/559B5EB2-421B-4A4A-9DC4-F7D0057B26DA.png
