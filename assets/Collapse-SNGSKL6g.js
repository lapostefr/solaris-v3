import{m as n,o as l,B as p,G as h,b as u,T as d}from"./vue.esm-bundler-BV06ZB-3.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";const a=n({name:"Collapse",setup(){return{afterEnter:t=>{t.style.height="auto"},enter:t=>{const o=getComputedStyle(t).width;t.style.width=o,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const s=getComputedStyle(t).height;t.style.width="",t.style.position="",t.style.visibility="",t.style.height="0",getComputedStyle(t),requestAnimationFrame(()=>{t.style.height=s})},leave:t=>{const o=getComputedStyle(t).height;t.style.height=o,getComputedStyle(t),requestAnimationFrame(()=>{t.style.height="0"})}}}});function y(e,r,i,t,o,s){return l(),p(d,{name:"collapse",onAfterEnter:e.afterEnter,onEnter:e.enter,onLeave:e.leave},{default:h(()=>[u(e.$slots,"default")]),_:3},8,["onAfterEnter","onEnter","onLeave"])}const f=c(a,[["render",y]]);a.__docgenInfo={displayName:"Collapse",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/Collapse/Collapse.vue"]};const C=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));export{f as S,C as _};
