---
layout: post
title: 辞职第二天：constructor（构造函数）
---
# 辞职第二天：constructor（构造函数）
---

同时学着JS和python，是为了在不同的语言里学习不同的东西，还可以对比学习，果然，在python就学到了在JS里忽略多次的**构造函数**。

```
class Ball:
	def __init__(self, color):
		self.color = color

	def __str__(self):
		msg = self.color
		return msg

myBall = Ball("blue")
print myBall
```
在以上代码里，\__init__是构造函数。暂时还没在书里看到很完整的解释，于是自己的解释是：构造函数就是用来初始化对象的函数。

self就是指向它本身，跟JS里的this类似，但是在自定义的函数里，可以不用显式地传入self……那么问题来了，我这是JS的笔记，我为什么一直在讲python？

在python里面知道了构造函数之后，我发了如下的代码问迷失的生鱼片。
```
function A(x) {
    this.x = x;
}
var obj = new A(5);
alert(obj.x);
```
> *夜鹰*：这是JS的构造方法吧？哪里初始化了？
> *迷失的生鱼片*：JS比较特殊，一切皆是对象。

啊？原来其他的面向对象语言不是一切皆对象的啊？

于是我回来翻《Javascript高级程序设计》（是的，我把书从公司拿回来了）。

找到了这样一句定义，嗯，只有一句：

**constructor: 保存着用于创建当前对象的函数**

这个constructor其实是个属性，是个身为函数的属性。如下例：
```
function Person(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function(){
            alert(this.name);
}; }
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
```
两个实例——person1和person2，它们都有一个属性constructor，指向Person。好玩的是：Person.prototype 指向了原型对象,而 Person.prototype.constructor 又指回了 Person。

constructor的值是可能会被改变的哦！
```
function foo() {
}
foo.prototype = {
    name: 'eagle'
}
```
由于以上代码在本质上重写了prototype属性，所以隶属于prototype属性的constructor属性也变成了新对象的constructor属性，指向Object构造函数，而不是foo()，此时constructor已经无法确定对象的类型了。

如果constructor的值很重要，可以这样修改：
```
function foo() {
}
foo.prototype = {
    constructor: 'resetName'
}
```

呵呵，JS真是能玩啊……
