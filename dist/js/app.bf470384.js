webpackJsonp([1],[,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(3),i=t.n(r),a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(6);c.install({onUpdateReady:function(){c.applyUpdate()},onUpdated:function(){console.log("updated"),window.location.reload()}}),new o.default(a({el:"#app"},i.a))},,function(e,n,t){var o=t(4)(null,t(5),null,null,null);e.exports=o.exports},function(e,n){e.exports=function(e,n,t,o,r){var i,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,a=e.default);var s="function"==typeof a?a.options:a;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),o&&(s._scopeId=o);var d;if(r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=d):t&&(d=t),d){var l=s.functional,u=l?s.render:s.beforeCreate;l?s.render=function(e,n){return d.call(n),u(e,n)}:s.beforeCreate=u?[].concat(u,d):[d]}return{esModule:i,exports:a,options:s}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("ii")])},staticRenderFns:[]}},function(e,n){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function o(e){if(e||(e={}),t()){navigator.serviceWorker.register("/vonut/sw.js")}else if(window.applicationCache){var n=function(){var e=document.createElement("iframe");e.src="/vonut/appcache/manifest.html",e.style.display="none",a=e,document.body.appendChild(e)};return void("complete"===document.readyState?setTimeout(n):window.addEventListener("load",n))}}function r(e,n){}function i(){if(t()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),a)try{a.contentWindow.applicationCache.update()}catch(e){}}var a;n.install=o,n.applyUpdate=r,n.update=i}],[1]);