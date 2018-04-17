(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{44:function(t,s,e){t.exports={example:"example_2DuOfB6G"}},45:function(t,s,e){"use strict";var n=e(44),a=e.n(n);s.default=a.a},57:function(t,s,e){"use strict";e.r(s);var n={mounted:function(){document.querySelector("."+this.$style.example).textContent="This is rendered by inline script and styled by inline CSS"}},a=e(45),r=e(0);var i=Object(r.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),e("pre",[e("code",[t._v(t._s(2))])]),t._m(13),e("p",[t._v("Directives also work:")]),t._m(14),t._m(15),t._m(16),e("pre",[e("code",t._l(3,function(s){return e("span",[t._v(t._s(s)+" ")])}))]),t._m(17),e("p",[t._v("The compiled component does not have any private data but do have access to the "),e("router-link",{attrs:{to:"./custom-themes.html#site-and-page-metadata"}},[t._v("site metadata")]),t._v(". For example:")],1),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),e("p",[t._v("Inside any markdown file you can then directly use the components (names are inferred from filenames):")]),t._m(31),e("demo-1"),e("OtherComponent"),t._m(32),t._m(33),t._m(34),e("p",{staticClass:"demo",class:t.$style.example})],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"using-vue-in-markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Vue in Markdown")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"browser-api-access-restrictions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions","aria-hidden":"true"}},[this._v("#")]),this._v(" Browser API Access Restrictions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),s("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("universal code requirements")]),this._v(". In short, make sure to only access Browser / DOM APIs in "),s("code",[this._v("beforeMounted")]),this._v(" or "),s("code",[this._v("mounted")]),this._v(" hooks.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you are using or demoing a component that is not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),s("code",[this._v("<ClientOnly>")]),this._v(" component:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note this does not fix components or libraries that access Browser APIs "),s("strong",[this._v("on import")]),this._v(" - in order to use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("then")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating","aria-hidden":"true"}},[this._v("#")]),this._v(" Templating")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpolation","aria-hidden":"true"}},[this._v("#")]),this._v(" Interpolation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Each markdown file is first compiled into HTML and then passed on as a Vue component to "),s("code",[this._v("vue-loader")]),this._v(". This means you can use Vue-style interpolation in text:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"directives"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directives","aria-hidden":"true"}},[this._v("#")]),this._v(" Directives")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"access-to-site-page-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-to-site-page-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Access to Site & Page Data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"path"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping","aria-hidden":"true"}},[this._v("#")]),this._v(" Escaping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("By default, fenced code blocks are automatically wrapped with "),s("code",[this._v("v-pre")]),this._v(". If you want to display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the "),s("code",[this._v("v-pre")]),this._v(" custom container:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{attrs:{class:"token code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Components")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Any "),s("code",[this._v("*.vue")]),this._v(" file found in "),s("code",[this._v(".vuepress/components")]),this._v(" are automatically registered as global async components. For example:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      └─ OtherComponent.vue\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),s("p",[this._v("Make sure a custom component’s names either contains a hyphen or is in PascalCase. Otherwise it will be treated as an inline element and wrapped inside a "),s("code",[this._v("<p>")]),this._v(" tag, which will lead to hydration mismatch because "),s("code",[this._v("<p>")]),this._v(" does not allow block elements to be placed inside it.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"script-style-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-style-hoisting","aria-hidden":"true"}},[this._v("#")]),this._v(" Script & Style Hoisting")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases you can directly write root-level "),e("code",[t._v("<script>")]),t._v(" or "),e("code",[t._v("<style>")]),t._v(" blocks in the markdown file, and they will be hoisted out of the compiled HTML and used as the "),e("code",[t._v("<script>")]),t._v(" and "),e("code",[t._v("<style>")]),t._v(" blocks for the resulting Vue single-file component.")])}],!1,function(t){this.$style=a.default.locals||a.default},null,null);s.default=i.exports}}]);