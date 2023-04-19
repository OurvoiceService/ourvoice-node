!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],n):n((t||self).ourvoiceNodeSdk={},t.isomorphicUnfetch)}(this,function(t,n){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=/*#__PURE__*/e(n);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},o.apply(this,arguments)}function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n)}function u(t,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},u(t,n)}var s=/*#__PURE__*/function(){function t(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl="https://staging.getourvoice.com/api/v1"}return t.prototype.invoke=function(t,n){var e=""+this.baseUrl+t,r=o({},n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apikey}});return i.default(e,r).then(function(t){if(t.ok)return t.json();throw new Error(JSON.parse(t.statusText))})},t}(),p="campaigns",a=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var e=n.prototype;return e.getCampaignById=function(t){return this.invoke("/"+p+"/"+t)},e.getCampaigns=function(){return this.invoke("/"+p,{method:"GET"})},e.createCampaign=function(t){return this.invoke("/"+p,{method:"POST",body:JSON.stringify(t)})},e.updateCampaign=function(t,n){return this.invoke("/"+p,{method:"POST",body:JSON.stringify(n)})},e.deleteCampaign=function(t){return this.invoke("/"+p+"/"+t,{method:"DELETE"})},n}(s),c="groups",f=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var e=n.prototype;return e.getGroupById=function(t){return this.invoke("/"+c+"/"+t)},e.getGroups=function(){return this.invoke("/"+c)},e.createGroup=function(t){return this.invoke("/"+c,{method:"POST",body:JSON.stringify(t)})},e.deleteGroup=function(t){return this.invoke("/"+c+"/"+t,{method:"DELETE"})},e.updateGroup=function(t,n){return this.invoke("/"+c+"/"+t,{method:"PATCH",body:JSON.stringify(n)})},n}(s),h="messages",d=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var e=n.prototype;return e.getSmsById=function(t){return this.invoke("/"+h+"/"+t)},e.getSms=function(){return this.invoke("/"+h,{method:"GET"})},e.sendSms=function(t){return this.invoke("/"+h,{method:"POST",body:JSON.stringify(t)})},e.deleteSms=function(t){return this.invoke("/"+h+"/"+t,{method:"DELETE"})},n}(s);t.Library=function(t){this.groups=void 0,this.sms=void 0,this.campaign=void 0,this.groups=new f(t),this.sms=new d(t),this.campaign=new a(t)}});
