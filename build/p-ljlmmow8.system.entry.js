System.register(["./p-ba3208be.system.js","./p-2294249a.system.js"],(function(e){"use strict";var t,n,r,i,a,o,s;return{setters:[function(e){t=e.r;n=e.f;r=e.c;i=e.h;a=e.H;o=e.e},function(e){s=e.c}],execute:function(){var u=e("ion_tab_bar",function(){function e(e){t(this,e);this.keyboardVisible=false;this.translucent=false;this.ionTabBarChanged=n(this,"ionTabBarChanged",7)}e.prototype.selectedTabChanged=function(){if(this.selectedTab!==undefined){this.ionTabBarChanged.emit({tab:this.selectedTab})}};e.prototype.onKeyboardWillHide=function(){var e=this;setTimeout((function(){return e.keyboardVisible=false}),50)};e.prototype.onKeyboardWillShow=function(){if(this.el.getAttribute("slot")!=="top"){this.keyboardVisible=true}};e.prototype.componentWillLoad=function(){this.selectedTabChanged()};e.prototype.render=function(){var e;var t=this,n=t.color,o=t.translucent,u=t.keyboardVisible;var b=r(this);return i(a,{role:"tablist","aria-hidden":u?"true":null,class:Object.assign(Object.assign({},s(n)),(e={},e[b]=true,e["tab-bar-translucent"]=o,e["tab-bar-hidden"]=u,e))},i("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{selectedTab:["selectedTabChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:1px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.07))));--color:var(--ion-tab-bar-color,var(--ion-color-step-600,#666));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:56px}"},enumerable:true,configurable:true});return e}())}}}));