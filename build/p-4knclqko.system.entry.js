System.register(["./p-ba3208be.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.H}],execute:function(){var a=t("app_category_button",function(){function t(t){e(this,t);this.selectRandomItem=this.selectRandomItem.bind(this);var n=this.categories.map((function(t){return t.name}));this.data=n.reduce((function(t,e){var n;return Object.assign(Object.assign({},t),(n={},n[e]=e,n))}),{})}t.prototype.selectRandomItem=function(t){var e;console.log("getting random item for "+t+" category");var n=this.categories.find((function(e){return e.name===t})).items;var r=Math.floor(Math.random()*n.length);var a=n[r];console.log("selected "+a);this.data=Object.assign(Object.assign({},this.data),(e={},e[t]=a,e))};t.prototype.render=function(){var t=this;return n(r,null,n("slot",null,this.categories.map((function(e){return n("ion-button",{expand:"block",onClick:function(){return t.selectRandomItem(e.name)}},t.data[e.name])}))))};Object.defineProperty(t,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return t}())}}}));