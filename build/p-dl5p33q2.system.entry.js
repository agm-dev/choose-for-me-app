var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return c([t,e])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(u){o=[6,u];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-ba3208be.system.js"],(function(t){"use strict";var e,n,r,i,a;return{setters:[function(t){e=t.r;n=t.c;r=t.h;i=t.H;a=t.e}],execute:function(){var o=t("ion_fab",function(){function t(t){var n=this;e(this,t);this.edge=false;this.activated=false;this.onClick=function(){var t=!!n.el.querySelector("ion-fab-list");var e=n.getFab();var r=e&&e.disabled;if(t&&!r){n.activated=!n.activated}}}t.prototype.activatedChanged=function(){var t=this.activated;var e=this.getFab();if(e){e.activated=t}Array.from(this.el.querySelectorAll("ion-fab-list")).forEach((function(e){e.activated=t}))};t.prototype.componentDidLoad=function(){if(this.activated){this.activatedChanged()}};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.activated=false;return[2]}))}))};t.prototype.getFab=function(){return this.el.querySelector("ion-fab-button")};t.prototype.render=function(){var t;var e=this,a=e.horizontal,o=e.vertical,u=e.edge;var c=n(this);return r(i,{onClick:this.onClick,class:(t={},t[c]=true,t["fab-horizontal-"+a]=a!==undefined,t["fab-vertical-"+o]=o!==undefined,t["fab-edge"]=u,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"},enumerable:true,configurable:true});return t}())}}}));