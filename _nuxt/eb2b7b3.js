(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{617:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,o=t.app,e.next=3,n("".concat(o.i18n.locale,"/ctf"),c.slug).without(["password"]).fetch().catch(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("en/ctf",c.slug).without(["password"]).fetch().catch((function(t){return console.log("Page not found"),!1}));case 2:return l=t.sent,t.abrupt("return",l);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:return l=e.sent,e.abrupt("return",{writeup:l});case 5:case"end":return e.stop()}}),e)})))()}}),o=n(19),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"writeup-content mx-auto text-white p-3 rounded mb-4"},[n("header",[n("h1",{staticClass:"mb-4 text-center"},[t._v(t._s(t.writeup.title))])]),t._v(" "),n("p",{staticClass:"text-center"},[n("img",{staticStyle:{width:"75%"},attrs:{src:"/images/pwned/"+t.writeup.cover}})]),t._v(" "),1==t.writeup.body.children.length?n("hidden-content",{attrs:{encodedData:t.writeup.body.children[0].value,hint:t.writeup.hint}}):n("nuxt-content",{attrs:{document:t.writeup}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HiddenContent:n(191).default})}}]);