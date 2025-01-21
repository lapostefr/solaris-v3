import{d as F,m as g,a as O,r as R,o as t,b as d,A as p,u as a,e as l,z as c,v as h,t as k,E as B,H as T,y as m,B as n,F as w,J as j,I as z,G as E,N as G,f as H,x as J,T as L}from"./vue.esm-bundler-BHwbD8xO.js";import{S as f}from"./Icon-LmhyBlqB.js";import{u as U,L as y,a as P}from"./useTips-BOECcAvL.js";import{g as Q}from"./generateId-DPOzJEtM.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";const X={class:"lp-tips__content"},Y={class:"lp-tips__content-top"},Z=["aria-label","aria-expanded","aria-controls"],x={key:2,class:"lp-tips__links"},ee=["href","target","rel","title","onClick"],V=F({__name:"Tips",props:g({color:{default:"supernova"},compact:{type:Boolean},links:{},description:{},icon:{default:"action-tips"},title:{},titleLevel:{default:"h3"},isClosable:{type:Boolean,default:!0},isCollapse:{type:Boolean},show:{type:Boolean}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:g(["click","close","collapse"],["update:modelValue"]),setup(v,{emit:N}){const o=v,q=N,S=O(v,"modelValue"),$=Q,C=R(null),{isOpenCollapse:r,isVisible:A,ariaControlCollapse:I,collapse:u,close:_}=U(S,{isClosable:o.isClosable,isCollapse:o.isCollapse,show:o.show},q,C),K=e=>{if(e.rel)return e.rel;if(e.target===y.BLANK)return P.BOTH},M=e=>{if(e.target===y.BLANK&&e.title)return`${e.title} - Nouvelle fenêtre`;if(e.target===y.BLANK&&!e.title)return`${e.label} - Nouvelle fenêtre`;if(e.title)return e.title},D=()=>{if(o.description&&o.description.indexOf("<")===0)return"div";if(o.description)return"p"};return(e,i)=>(t(),d(L,{name:"fade"},{default:p(()=>{var b;return[a(A)?(t(),l("div",{key:0,class:h(["lp-tips",[`lp-tips--${e.color}`,{"lp-tips--compact":e.compact,"lp-tips--collapse":e.isCollapse,"lp-tips--isActive":a(r)}]])},[c(f,{class:h(["lp-tips__icon",{"lp-tips__icon--default":!e.isCollapse}]),name:e.icon},null,8,["class","name"]),k("div",X,[k("div",Y,[e.title?(t(),d(B(e.titleLevel),{key:0,class:"lp-tips__title"},{default:p(()=>[T(m(e.title),1)]),_:1})):n("",!0),e.description||e.links?(t(),l(w,{key:1},[e.isCollapse?(t(),l("button",{key:0,class:"lp-tips__actions","aria-label":`${a(r)?"Réduire":"Voir la suite…"}`,"aria-expanded":((b=a(r))==null?void 0:b.toString().length)!==0,"aria-controls":a(I),onClick:i[0]||(i[0]=s=>a(u)()),onKeydown:i[1]||(i[1]=j(z((...s)=>a(u)&&a(u)(...s),["prevent"]),["enter"]))},[c(f,{name:"arrow-bottom",class:"lp-tips__arrow",type:"light"})],40,Z)):e.isClosable?(t(),l("button",{key:1,class:"lp-tips__actions lp-tips__actions--close","aria-label":"Fermer",onClick:i[2]||(i[2]=(...s)=>a(_)&&a(_)(...s))},[c(f,{name:"action-close"})])):n("",!0)],64)):n("",!0)]),c(L,{name:"slide"},{default:p(()=>[E((t(),l("div",{ref_key:"blockText",ref:C,class:"lp-tips__collapsible"},[e.description?(t(),d(B(D()),{key:0,class:"lp-tips__description"},{default:p(()=>[T(m(e.description),1)]),_:1})):H(e.$slots,"description",{key:1},void 0,!0),e.links?(t(),l("div",x,[(t(!0),l(w,null,J(e.links,s=>(t(),l("a",{key:s.url,href:s.url,target:s.target,rel:K(s),title:M(s),onClick:se=>e.$emit("click",s.url)},m(s.label),9,ee))),128))])):n("",!0)])),[[G,!e.isCollapse||a(r)],[a($),"lp-tips-text--"]])]),_:3})])],2)):n("",!0)]}),_:3}))}}),ne=W(V,[["__scopeId","data-v-d21a3ed7"]]);V.__docgenInfo={exportName:"default",displayName:"Tips",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"union",elements:[{name:'"supernova"'},{name:'"cobalt"'},{name:'"pink"'},{name:'"blue"'},{name:'"green"'},{name:'"purple"'}]},defaultValue:{func:!1,value:"'supernova'"}},{name:"compact",required:!1,type:{name:"boolean"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Link"}]}},{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'action-tips'"}},{name:"title",required:!1,type:{name:"string"}},{name:"titleLevel",required:!1,type:{name:"union",elements:[{name:'"p"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h3'"}},{name:"isClosable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isCollapse",required:!1,type:{name:"boolean"}},{name:"show",required:!1,type:{name:"boolean"}}],events:[{name:"click"},{name:"close"},{name:"collapse"}],slots:[{name:"description"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/Tips/Tips.vue"]};export{ne as S};
