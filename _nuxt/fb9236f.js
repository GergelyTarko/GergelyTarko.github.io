(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{595:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"1":"Easy","2":"Medium","3":"Hard"},"hu":{"1":"Könnyű","2":"Közepes","3":"Nehéz"},"de":{"1":"Leicht","2":"Mittel","3":"Schwer"}}'),delete t.options._Ctor}},597:function(t,e,n){"use strict";var r=n(595),c=n.n(r);e.default=c.a},613:function(t,e,n){"use strict";n.r(e);var r,c=n(6),o=(n(41),n(0)),l=n.n(o),d={data:function(){return{searchQuery:"",writeups:[]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("en/ctf").limit(6).fetch();case 3:return r=e.sent,e.abrupt("return",{writeups:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{moment:function(){return l()()},setTag:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.searchQuery=e;case 1:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},watch:{searchQuery:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$content("en/ctf").limit(6).where({tags:{$regex:t.toLowerCase()}}).fetch();case 2:e.writeups=n.sent,console.log(e.writeups);case 4:case"end":return n.stop()}}),n)})))()}}},m=n(25),f=n(597),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row text-center text-white mb-5"},[n("div",{staticClass:"col-lg-7 mx-auto"},[n("h1",{staticClass:"display-4"},[t._v("CTF 🚩")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 mx-auto"},[n("div",{staticClass:"list-group shadow"},t._l(t.writeups,(function(e){return n("div",{key:e.title,staticClass:"list-group-item text-white my-2 rounded"},[n("nuxt-link",{attrs:{to:"ctf/"+e.slug}},[n("div",{staticClass:"media align-items-lg-center flex-column flex-lg-row p-3"},[n("div",{staticClass:"media-body order-2 order-lg-1 mb-3"},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("h5",{staticClass:"mt-0 font-weight-bold mb-2"},[t._v(t._s(e.title)),n("p",{staticClass:"font-italic text-muted mb-0 small"},[t._v(t._s(e.comment))])]),t._v(" "),n("small",{staticClass:"text-muted"},[n("span",{staticClass:"writeup-postdate"},[t._v(t._s(t.moment(e.createdAt).from(t.moment())))])])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-between mt-1"},[n("h6",{staticClass:"font-weight-bold my-2",class:["1"==e.difficulty?"text-success":"2"==e.difficulty?"text-warning":"text-danger"]},[t._v(t._s(t.$t(e.difficulty)))])]),t._v(" "),n("p",{staticClass:"font-italic text-muted mb-0 small"},[t._v(t._s(e.site))])]),t._v(" "),n("div",{staticClass:"text-center"},[n("img",{attrs:{src:"/images/covers/"+e.cover,alt:"Cover",width:"300"}})])])]),t._v(" "),n("div",t._l(e.tags,(function(r){return n("span",{key:e.slug+r,staticClass:"badge bg-dark mx-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.setTag(r)}}},[t._v(t._s(r))])})),0)],1)})),0)])])])}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports}}]);