import t from"isomorphic-unfetch";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t},n.apply(this,arguments)}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,e(t,n)}function e(t,n){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},e(t,n)}var r=/*#__PURE__*/function(){function o(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl="https://staging.getourvoice.com/api/v1"}return o.prototype.invoke=function(o,e){var r=""+this.baseUrl+o,i=n({},e,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apikey}});return t(r,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},o}(),i="groups",s=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.getGroupById=function(t){return this.invoke("/"+i+"/"+t)},e.getGroups=function(){return this.invoke("/"+i,{method:"GET"})},e.createGroup=function(t){return this.invoke("/"+i,{method:"POST",body:JSON.stringify(t)})},e.deleteGroup=function(t){return this.invoke("/"+i+"/"+t,{method:"DELETE"})},e.updateGroup=function(t,n){return this.invoke("/"+i+"/"+t,{method:"PATCH",body:JSON.stringify(n)})},n}(r),u="messages",p=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.getSmsById=function(t){return this.invoke("/"+u+"/"+t)},e.getSms=function(){return this.invoke("/"+u,{method:"GET"})},e.sendSms=function(t){return this.invoke("/"+u,{method:"POST",body:JSON.stringify(t)})},n}(r),c=function(t){this.groups=void 0,this.sms=void 0,this.groups=new s(t),this.sms=new p(t)};export{c as Library};
