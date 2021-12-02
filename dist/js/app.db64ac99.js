(function(t){function e(e){for(var n,a,u=e[0],c=e[1],i=e[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function u(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8337284c"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"80285691"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){i=p[u],l=i.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],f.parentNode.removeChild(f),r(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var p=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var p=0;p<i.length;p++)e(i[p]);var f=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"4a7f":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:"/"}},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:"/images/allstarlogo.png"}})])]),t._m(0)],1),r("div",{staticClass:"content"},[r("router-view")],1),r("div",{staticClass:"footer"},[r("h4",[r("router-link",{attrs:{to:"/admin"}},[t._v("Admin")]),t._v(" | "),r("router-link",{attrs:{to:"/stats"}},[t._v("Stats")])],1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",[t._v("2021 NBA Allstars")])])}],s=(r("034f"),r("2877")),u={},c=Object(s["a"])(u,a,o,!1,null,null,null),i=c.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return r("div",{key:e.id,staticClass:"image"},[r("h2",[t._v(t._s(e.name)+" #"+t._s(e.number))]),r("img",{attrs:{src:e.path}})])})),0),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],d=r("1da1"),m=(r("96cf"),r("bc3a")),h=r.n(m),v={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("in the get items api call"),e.next=4,h.a.get("/api/players");case 4:return r=e.sent,t.items=r.data,e.abrupt("return",!0);case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},b=v,g=(r("b25a"),Object(s["a"])(b,p,f,!1,null,"6806d19e",null)),_=g.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"players"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.players,(function(e){return r("tr",{key:e._id,staticClass:"player"},[r("th",{attrs:{scope:"row"}},[r("b",[t._v(t._s(e.name))])]),r("td",[t._v(t._s(e.number))]),r("td",[t._v(t._s(e.points))]),r("td",[t._v(t._s(e.rebounds))]),r("td",[t._v(t._s(e.assists))])])})),0)])])])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[r("b",[t._v("Name")])]),r("th",{attrs:{scope:"col"}},[r("b",[t._v("Number")])]),r("th",{attrs:{scope:"col"}},[r("b",[t._v("PPG")])]),r("th",{attrs:{scope:"col"}},[r("b",[t._v("RPG")])]),r("th",{attrs:{scope:"col"}},[r("b",[t._v("AST")])])])])}],C=(r("f9e3"),r("2dd8"),{name:"Stats",data:function(){return{players:null}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/players");case 3:return r=e.sent,t.players=r.data,console.log(t.players),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},props:{}}),j=C,O=Object(s["a"])(j,y,w,!1,null,null,null),k=O.exports;n["default"].use(l["a"]);var x=[{path:"/",name:"Home",component:_},{path:"/admin",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/stats",name:"Stats",component:k}],E=new l["a"]({mode:"history",base:"/",routes:x}),P=E,S=r("5f5b"),A=r("b1e0");n["default"].use(S["a"]),n["default"].use(A["a"]),n["default"].config.productionTip=!1,new n["default"]({router:P,render:function(t){return t(i)}}).$mount("#app")},"85ec":function(t,e,r){},b25a:function(t,e,r){"use strict";r("4a7f")}});
//# sourceMappingURL=app.db64ac99.js.map