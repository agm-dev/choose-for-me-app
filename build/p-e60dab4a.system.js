System.register(["./p-ba3208be.system.js","./p-35047b4c.system.js","./p-914214d9.system.js","./p-9c9f2bdf.system.js"],(function(e){"use strict";var t,n;return{setters:[function(){},function(){},function(e){t=e.g},function(e){n=e.c}],execute:function(){var a=e("mdTransitionAnimation",(function(e,a){var r="40px";var i="0px";var o=a.direction==="back";var s=a.enteringEl;var c=a.leavingEl;var d=t(s);var f=d.querySelector("ion-toolbar");var u=n();u.addElement(d).fill("both").beforeRemoveClass("ion-page-invisible");if(o){u.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{u.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+r+")","translateY("+i+")").fromTo("opacity",.01,1)}if(f){var l=n();l.addElement(f);u.addAnimation(l)}if(c&&o){u.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var m=n();m.addElement(t(c)).afterStyles({display:"none"}).fromTo("transform","translateY("+i+")","translateY("+r+")").fromTo("opacity",1,0);u.addAnimation(m)}return u}))}}}));