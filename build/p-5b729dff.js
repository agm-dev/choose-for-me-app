import"./p-02d97433.js";import"./p-3e9c62cb.js";import{g as t}from"./p-5712a179.js";import{c as o}from"./p-39c54535.js";const r=(r,i)=>{const a="back"===i.direction,s=i.leavingEl,c=t(i.enteringEl),p=c.querySelector("ion-toolbar"),e=o();if(e.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),a?e.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):e.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),p){const t=o();t.addElement(p),e.addAnimation(t)}if(s&&a){e.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=o();r.addElement(t(s)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),e.addAnimation(r)}return e};export{r as mdTransitionAnimation};