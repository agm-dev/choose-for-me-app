System.register(["./p-ba3208be.system.js","./p-2294249a.system.js"],(function(r){"use strict";var e,n,t,a,i,s;return{setters:[function(r){e=r.r;n=r.d;t=r.c;a=r.h;i=r.H},function(r){s=r.c}],execute:function(){var o={bubbles:{dur:1e3,circles:9,fn:function(r,e,n){var t=r*e/n-r+"ms";var a=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(r,e,n){var t=e/n;var a=r*t-r+"ms";var i=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:true,circles:1,fn:function(){return{r:20,cx:44,cy:44,fill:"none",viewBox:"22 22 44 44",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,e){var n=-(110*e)+"ms";return{r:6,style:{left:9-9*e+"px","animation-delay":n}}}},lines:{dur:1e3,lines:12,fn:function(r,e,n){var t="rotate("+(30*e+(e<6?180:-180))+"deg)";var a=r*e/n-r+"ms";return{y1:17,y2:29,style:{transform:t,"animation-delay":a}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,e,n){var t="rotate("+(30*e+(e<6?180:-180))+"deg)";var a=r*e/n-r+"ms";return{y1:12,y2:20,style:{transform:t,"animation-delay":a}}}}};var u=o;var l=r("ion_spinner",function(){function r(r){e(this,r);this.paused=false}r.prototype.getName=function(){var r=this.name||n.get("spinner");var e=t(this);if(r){return r}return e==="ios"?"lines":"circular"};r.prototype.render=function(){var r;var e=this;var o=t(e);var l=e.getName();var y=u[l]||u["lines"];var m=typeof e.duration==="number"&&e.duration>10?e.duration:y.dur;var v=[];if(y.circles!==undefined){for(var d=0;d<y.circles;d++){v.push(c(y,m,d,y.circles))}}else if(y.lines!==undefined){for(var d=0;d<y.lines;d++){v.push(f(y,m,d,y.lines))}}return a(i,{class:Object.assign(Object.assign({},s(e.color)),(r={},r[o]=true,r["spinner-"+l]=true,r["spinner-paused"]=!!e.paused||n.getBoolean("_testing"),r)),role:"progressbar",style:y.elmDuration?{animationDuration:m+"ms"}:{}},v)};Object.defineProperty(r,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}\@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"},enumerable:true,configurable:true});return r}());var c=function(r,e,n,t){var i=r.fn(e,n,t);i.style["animation-duration"]=e+"ms";return a("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},a("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:r.elmDuration?{animationDuration:e+"ms"}:{}}))};var f=function(r,e,n,t){var i=r.fn(e,n,t);i.style["animation-duration"]=e+"ms";return a("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},a("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}}));