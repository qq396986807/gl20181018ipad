module.exports=__NEXT_REGISTER_PAGE("/manifest.json",function(){var e=webpackJsonp([2],{216:function(e,n,t){e.exports=t(217)},217:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:true});var r=t(13);var o=t.n(r);var a=t(8);var i=t.n(a);var u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(n,t,r){t&&e(n.prototype,t);r&&e(n,r);return n}}();function c(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(o,a){try{var i=n[o](a);var u=i.value}catch(e){t(e);return}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function l(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var p=function(e){l(n,e);function n(){s(this,n);return f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}u(n,null,[{key:"getInitialProps",value:function(){var e=c(o.a.mark(function e(n){var t=n.req,r=n.res;return o.a.wrap(function e(n){while(1)switch(n.prev=n.next){case 0:r.setHeader("Content-Type","application/json");r.write('\n        {\n            "name": "Snake-VS-Block",\n            "short_name": "Snake VS Block Xavier Le Tohic",\n            "start_url": "/",\n            "display": "fullscreen",\n            "orientation": "portrait",\n            "background_color": "#000000",\n            "theme_color": "#000000",\n            "icons": [\n                {\n                    "src": "/static/voodoo.png",\n                    "sizes": "192x192",\n                    "type": "image/png"\n                }\n            ]\n          }\n          \n    ');r.end();case 3:case"end":return n.stop()}},e,this)}));function n(n){return e.apply(this,arguments)}return n}()}]);return n}(i.a.Component);n["default"]=p}},[216]);return{page:e.default}});