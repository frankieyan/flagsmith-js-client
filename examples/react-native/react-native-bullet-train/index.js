§!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["bullet-train"]=e():t["bullet-train"]=e()}(global,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=n(1);e.default=i({})},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n,i=0;i<e.length;i++)(n=e[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a,o,s="https://api.bullet-train.io/api/v1/",l=function(){function t(e){var i=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),r(this,"getJSON",(function(t,e,n){var r={method:e||"GET",body:n,headers:{"x-environment-key":i.environmentID}};return"GET"!==e&&(r.headers["Content-Type"]="application/json; charset=utf-8"),a(t,r).then((function(t){return 200<=t.status&&300>t.status?t:t.text().then((function(t){var e=t;try{e=JSON.parse(t)}catch(t){}return Promise.reject(e)}))})).then((function(t){return t.json()}))})),r(this,"getFlags",(function(t,e){var n=i.onChange,r=i.onError,a=i.identity,o=i.api,s=(i.disableCache,!1),l=function(t,e){var r=t.flags,a=t.traits,o={},s={};if(a=a||[],(r=r||[]).forEach((function(t){o[t.feature.name.toLowerCase().replace(/ /g,"_")]={enabled:t.enabled,value:t.feature_state_value}})),a.forEach((function(t){s[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),i.oldFlags=o,i.flags=o,i.traits=s,e){var l={};e.map((function(t){l[t.name]=t})),i.segments=l}i.updateStorage(),n&&n(i.oldFlags,{isFromServer:!0})};return a?Promise.all([i.getJSON(o+"identities/?identifier="+encodeURIComponent(a))]).then((function(t){l(t[0],t[1])})).catch((function(t){var e=t.message;r&&r({message:e})})):Promise.all([i.getJSON(o+"flags/")]).then((function(e){l({flags:e[0]},null),t&&!s&&(s=!0,t())})).catch((function(t){e&&!s&&(s=!0,e(t)),r&&r(t)}))})),r(this,"getValue",(function(t){var e=i.flags&&i.flags[t],n=null;return e&&(n=e.value),n})),r(this,"getTrait",(function(t){return i.traits&&i.traits[t]})),r(this,"setTrait",(function(t,e){var n=i.getJSON,r=i.identity,a=i.api;return n("".concat(a,"traits/"),"POST",JSON.stringify({identity:{identifier:r},trait_key:t,trait_value:e})).then(i.getFlags)})),r(this,"setTraits",(function(t){var e=i.getJSON,r=i.identity,a=i.api;t&&"object"===n(t)||console.error("Expected object for bulletTrain.setTraits");var o=Object.keys(t).map((function(e){return{identity:{identifier:r},trait_key:e,trait_value:t[e]}}));return e("".concat(a,"traits/bulk/"),"PUT",JSON.stringify(o)).then(i.getFlags)})),r(this,"incrementTrait",(function(t,e){var n=i.getJSON,r=i.identity,a=i.api;return n("".concat(a,"traits/increment-value/"),"POST",JSON.stringify({trait_key:t,increment_by:e,identifier:r})).then(i.getFlags)})),r(this,"hasFeature",(function(t){var e=i.flags&&i.flags[t],n=!1;return e&&e.enabled&&(n=!0),n})),a=e.fetch?e.fetch:global.fetch,o=e.AsyncStorage}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(t,[{key:"init",value:function(t){var e=this,n=t.environmentID,i=t.api,r=void 0===i?s:i,a=t.onChange,l=t.cacheFlags,u=t.onError,c=t.defaultFlags,f=t.preventFetch,g=t.enableLogs,h=t.AsyncStorage,y=t.state;return new Promise((function(t,i){if(e.environmentID=n,e.api=r,e.interval=null,e.onChange=a,e.onError=u,e.enableLogs=g,e.flags=Object.assign({},c)||{},e.initialised=!0,e.timer=e.enableLogs?(new Date).valueOf():null,h&&(o=h),e.cacheFlags=void 0!==o&&l,e.setState(y),!n)throw i("Please specify a environment id"),"Please specify a environment id";l?o.getItem("BULLET_TRAIN_DB",(function(n,r){if(r)try{var a=JSON.parse(r);a&&a.api===e.api&&(e.setState(a),e.log("Retrieved flags from cache",a)),e.flags?(e.onChange&&e.onChange(null,{isFromServer:!1}),t(),e.getFlags(Promise.resolve,Promise.reject)):e.getFlags(t,i)}catch(t){e.log("Exception fetching cached logs",t)}})):!f&&e.getFlags(t,i)}))}},{key:"getAllFlags",value:function(){return this.flags}},{key:"identify",value:function(t){this.identity=t,this.initialised&&!this.interval&&this.getFlags()}},{key:"getState",value:function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits}}},{key:"setState",value:function(t){t&&(this.initialised=!0,this.api=t.api||this.api||s,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.segments=t.segments||this.segments,this.traits=t.traits||this.traits)}},{key:"log",value:function(){if(this.enableLogs){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log.apply(this,["BULLET TRAIN:",(new Date).valueOf()-this.timer,"ms"].concat(e))}}},{key:"updateStorage",value:function(){if(this.cacheFlags){var t=JSON.stringify(this.getState());this.log("Setting storage",t),o.setItem("BULLET_TRAIN_DB",t)}}},{key:"logout",value:function(){this.identity=null,this.segments=null,this.traits=null,this.initialised&&!this.interval&&this.getFlags()}},{key:"startListening",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3;this.interval||(this.interval=setInterval(this.getFlags,t))}},{key:"getSegments",value:function(){}},{key:"stopListening",value:function(){clearInterval(this.interval)}}]),t}();t.exports=function(t){var e=t.fetch,n=t.AsyncStorage;return new l({fetch:e,AsyncStorage:n})}}])}));
