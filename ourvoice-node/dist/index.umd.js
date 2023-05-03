!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],e):e((t||self).ourvoiceNodeSdk={},t.isomorphicUnfetch)}(this,function(t,e){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/n(e);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}var u=/*#__PURE__*/function(){function t(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl="https://staging.getourvoice.com/api/v1"}return t.prototype.invoke=function(t,e){var n=""+this.baseUrl+t,r=i({},e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apikey}});return o.default(n,r).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}(),p="groups",f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.getGroupById=function(t){return this.invoke("/"+p+"/"+t)},n.getGroups=function(){return this.invoke("/"+p,{method:"GET"})},n.createGroup=function(t){return this.invoke("/"+p,{method:"POST",body:JSON.stringify(t)})},n.deleteGroup=function(t){return this.invoke("/"+p+"/"+t,{method:"DELETE"})},n.updateGroup=function(t,e){return this.invoke("/"+p+"/"+t,{method:"PATCH",body:JSON.stringify(e)})},e}(u),c="messages",h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var n=e.prototype;return n.getSmsById=function(t){return this.invoke("/"+c+"/"+t)},n.getSms=function(){return this.invoke("/"+c,{method:"GET"})},n.sendSms=function(t){return this.invoke("/"+c,{method:"POST",body:JSON.stringify(t)})},e}(u);t.Library=function(t){this.groups=void 0,this.sms=void 0,this.groups=new f(t),this.sms=new h(t)}});
