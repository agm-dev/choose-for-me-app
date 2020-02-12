var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r["throw"](t))}catch(e){s(e)}}function u(t){t.done?n(t.value):i(t.value).then(o,a)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(s=o[0]&2?i["return"]:o[0]?i["throw"]||((s=i["return"])&&s.call(i),0):i.next)&&!(s=s.call(i,o[1])).done)return s;if(i=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(a){o=[6,a];i=0}finally{r=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-ba3208be.system.js","./p-35047b4c.system.js","./p-0c3d77ed.system.js","./p-2294249a.system.js","./p-9c9f2bdf.system.js","./p-0f7c855e.system.js"],(function(t){"use strict";var e,n,r,i,s,o,a,u,c,l,d,f,h,p,v,m;return{setters:[function(t){e=t.r;n=t.c;r=t.f;i=t.h;s=t.H;o=t.e},function(){},function(t){a=t.p;u=t.a;c=t.d;l=t.e;d=t.i;f=t.s},function(t){h=t.g;p=t.c},function(t){v=t.c},function(t){m=t.s}],execute:function(){var b=function(t,e){var n=v();var r=v();var i=t.host||t;var s=t.querySelector(".toast-wrapper");var o="calc(-10px - var(--ion-safe-area-bottom, 0px))";var a="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(s);switch(e){case"top":r.fromTo("transform","translateY(-100%)","translateY("+a+")");break;case"middle":var u=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=u+"px";r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY("+o+")");break}return n.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)};var y=function(t,e){var n=v();var r=v();var i=t.host||t;var s=t.querySelector(".toast-wrapper");var o="calc(-10px - var(--ion-safe-area-bottom, 0px))";var a="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(s);switch(e){case"top":r.fromTo("transform","translateY("+a+")","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY("+o+")","translateY(100%)");break}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)};var g=function(t,e){var n=v();var r=v();var i=t.host||t;var s=t.querySelector(".toast-wrapper");var o="calc(8px + var(--ion-safe-area-bottom, 0px))";var a="calc(8px + var(--ion-safe-area-top, 0px))";r.addElement(s);switch(e){case"top":s.style.top=a;r.fromTo("opacity",.01,1);break;case"middle":var u=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=u+"px";r.fromTo("opacity",.01,1);break;default:s.style.bottom=o;r.fromTo("opacity",.01,1);break}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)};var w=function(t){var e=v();var n=v();var r=t.host||t;var i=t.querySelector(".toast-wrapper");n.addElement(i).fromTo("opacity",.99,0);return e.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var x=t("ion_toast",function(){function t(t){e(this,t);this.presented=false;this.mode=n(this);this.duration=0;this.keyboardClose=false;this.position="bottom";this.showCloseButton=false;this.translucent=false;this.animated=true;a(this.el);this.didPresent=r(this,"ionToastDidPresent",7);this.willPresent=r(this,"ionToastWillPresent",7);this.willDismiss=r(this,"ionToastWillDismiss",7);this.didDismiss=r(this,"ionToastDidDismiss",7)}t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return[4,u(this,"toastEnter",b,g,this.position)];case 1:e.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.dismiss=function(t,e){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return c(this,t,e,"toastLeave",y,w,this.position)};t.prototype.onDidDismiss=function(){return l(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return l(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this;var e=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];if(this.showCloseButton){e.push({text:this.closeButtonText||"Close",handler:function(){return t.dismiss(undefined,"cancel")}})}return e};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:e=t.role;if(d(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,t.role)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:if(!(t&&t.handler))return[3,4];r.label=1;case 1:r.trys.push([1,3,,4]);return[4,f(t.handler)];case 2:e=r.sent();if(e===false){return[2,false]}return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var r;var s=this;if(t.length===0){return}var o=n(this);var a=(r={"toast-button-group":true},r["toast-button-group-"+e]=true,r);return i("div",{class:a},t.map((function(t){return i("button",{type:"button",class:T(t),tabIndex:0,onClick:function(){return s.buttonClick(t)}},i("div",{class:"toast-button-inner"},t.icon&&i("ion-icon",{icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text),o==="md"&&i("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))})))};t.prototype.render=function(){var t,e;var r=this.getButtons();var o=r.filter((function(t){return t.side==="start"}));var a=r.filter((function(t){return t.side!=="start"}));var u=n(this);var c=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t);return i(s,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((e={},e[u]=true,e),p(this.color)),h(this.cssClass)),{"toast-translucent":this.translucent})},i("div",{class:c},i("div",{class:"toast-container"},this.renderButtons(o,"start"),i("div",{class:"toast-content"},this.header!==undefined&&i("div",{class:"toast-header"},this.header),this.message!==undefined&&i("div",{class:"toast-message",innerHTML:m(this.message)})),this.renderButtons(a,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"},enumerable:true,configurable:true});return t}());var T=function(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-"+t.role]=t.role!==undefined,e["ion-focusable"]=true,e["ion-activatable"]=true,e),h(t.cssClass))}}}}));