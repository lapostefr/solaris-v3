import{d as J,m as L,a as T,r as w,c as s,l as U,o as a,b as c,A as f,e as o,z as m,v as $,t as M,E as y,H as S,y as F,B as l,u as i,J as W,G as Q,f as X,F as Y,x as Z,T as ee,q as te}from"./vue.esm-bundler-DbnnIJWB.js";import{S as v}from"./Icon-BFYv-dj3.js";import{S as ae}from"./Collapse-1esKams1.js";import{u as ne,L as b,a as ie}from"./useTips--vxYfQKv.js";import{g as oe}from"./generateId-CVaf2GGW.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const se=["role"],re={class:"inlineNotification__content"},ue={class:"inlineNotification__content-top"},ce=["aria-label","aria-expanded","aria-controls"],fe={key:0,class:"inlineNotification__links"},I=J({__name:"Notification",props:L({alertFormat:{},animate:{type:Boolean,default:!0},color:{default:"informational"},description:{},duration:{default:3e3},icon:{default:""},id:{},isClosable:{type:Boolean,default:!0},isCollapse:{type:Boolean},links:{},role:{},title:{},titleLevel:{default:"p"},type:{default:"toast"},toastPosition:{},show:{type:Boolean},descriptionTag:{default:"div"},closable:{type:Boolean,default:!0},text:{}},{isOpenCollapse:{type:Boolean},isOpenCollapseModifiers:{},isVisible:{type:Boolean,default:!0},isVisibleModifiers:{}}),emits:L(["link","collapse"],["update:isOpenCollapse","update:isVisible"]),setup(p,{expose:O,emit:x}){const t=p,N=x,A=T(p,"isOpenCollapse"),_=T(p,"isVisible"),d=te(),K=oe,C=w(null),g=w(void 0),{isOpenCollapse:r,ariaControlCollapse:D,collapse:h}=ne(A,{isClosable:t.isClosable,isCollapse:t.isCollapse,show:t.show},N,C),H=()=>t.closable?t.isClosable:!1,k=s(()=>t.description?t.description:t.text),R=s(()=>{if(t.icon&&t.icon.trim().length>0)return t.icon;if(t.color==="success"){if(t.type==="inline")return"action-check-surrounded";if(t.type==="toast")return"action-check"}return t.color==="alert"?"action-information-warning":t.color==="error"?"action-alert":"action-information"}),j=s(()=>t.type==="banner"?"bold":"regular"),q=s(()=>t.isCollapse&&t.type!=="toast"?!!t.text:!1),V=s(()=>t.isCollapse&&t.type!=="toast"?!!t.links:!1),z=e=>{N("link",e,e)},u=()=>{_.value=!1;const e=d==null?void 0:d.proxy;!e.$parent||!e.$parent.close||e.$parent.close(t.id)},E=e=>{if(e.rel)return e.rel;if(e.target===b.BLANK)return ie.BOTH},G=e=>{if(e.target===b.BLANK&&e.title)return`${e.title} - Nouvelle fenêtre`;if(e.target===b.BLANK&&!e.title)return`${e.label} - Nouvelle fenêtre`;if(e.title)return e.title};return O({close:u}),U(()=>{g.value=t.role===void 0||t.role===""?void 0:t.role,t.type==="toast"&&setTimeout(()=>{u()},t.duration)}),(e,B)=>(a(),c(ee,{appear:e.type==="toast",name:e.animate?"slide-fade":""},{default:f(()=>[_.value?(a(),o("div",{key:0,role:g.value,class:$(["inlineNotification",`inlineNotification--${e.color}`,`inlineNotification--${e.type}`,{"inlineNotification--block":e.alertFormat==="block"},{"inlineNotification--collapse":e.isCollapse&&e.type!=="toast"},{"inlineNotification--isActive":i(r)}])},[m(v,{type:j.value,class:$(["inlineNotification__icon",[`inlineNotification__icon--${e.color}`]]),name:R.value},null,8,["type","class","name"]),M("div",re,[M("div",ue,[e.title?(a(),c(y(e.titleLevel),{key:0,class:"inlineNotification__title"},{default:f(()=>[S(F(e.title),1)]),_:1})):l("",!0),q.value||V.value?(a(),o("button",{key:1,class:"inlineNotification__actions","aria-label":`${i(r)?"Réduire":"Voir la suite…"}`,"aria-expanded":i(r),"aria-controls":i(D),onClick:B[0]||(B[0]=(...n)=>i(h)&&i(h)(...n))},[m(v,{name:"arrow-bottom",class:"inlineNotification__arrow"})],8,ce)):H()&&!q.value&&!V.value?(a(),o("button",{key:2,class:"inlineNotification__actions inlineNotification__actions--close","aria-label":"Fermer",onKeydown:W(u,["enter","space"])},[m(v,{name:"action-close",class:"inlineNotification__cross",onClick:u})],32)):l("",!0)]),m(ae,null,{default:f(()=>[!e.isCollapse||i(r)||e.type==="toast"?Q((a(),o("div",{key:0,ref_key:"blockText",ref:C,class:"inlineNotification__details-wrapper"},[X(e.$slots,"default",{},()=>[k.value?(a(),c(y(t.descriptionTag),{key:0,class:"inlineNotification__text",innerHTML:k.value},null,8,["innerHTML"])):l("",!0)],!0),e.links?(a(),o("div",fe,[(a(!0),o(Y,null,Z(e.links,(n,P)=>(a(),c(y(n.url?"a":"button"),{key:`inlineNotification-links-${P}`,href:n.url,target:n.target,rel:E(n),title:G(n),class:"inlineNotification__link",onClick:me=>z(n)},{default:f(()=>[S(F(n.label),1)]),_:2},1032,["href","target","rel","title","onClick"]))),128))])):l("",!0)])),[[i(K),"inlineNotification-text--"]]):l("",!0)]),_:3})])],10,se)):l("",!0)]),_:3},8,["appear","name"]))}}),_e=le(I,[["__scopeId","data-v-76e709db"]]);I.__docgenInfo={exportName:"default",displayName:"Notification",description:"",tags:{},expose:[{name:"close"}],props:[{name:"alertFormat",required:!1,type:{name:"string"}},{name:"animate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"transparent"'},{name:'"quiet"'},{name:'"informational"'},{name:'"success"'},{name:'"alert"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'informational'"}},{name:"description",required:!1,type:{name:"string"}},{name:"duration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"isClosable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isCollapse",required:!1,type:{name:"boolean"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Link"}]}},{name:"role",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"title",required:!1,type:{name:"string"}},{name:"titleLevel",required:!1,type:{name:"union",elements:[{name:'"p"'},{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'p'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"inline"'},{name:'"toast"'},{name:'"banner"'}]},defaultValue:{func:!1,value:"'toast'"}},{name:"toastPosition",required:!1,type:{name:"union",elements:[{name:'"top-left"'},{name:'"top-center"'},{name:'"top-right"'},{name:'"bottom-left"'},{name:'"bottom-center"'},{name:'"bottom-right"'}]}},{name:"show",required:!1,type:{name:"boolean"}},{name:"descriptionTag",required:!1,type:{name:"union",elements:[{name:'"div"'},{name:'"p"'}]},defaultValue:{func:!1,value:"'div'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"text",required:!1,type:{name:"string"}}],events:[{name:"link"},{name:"collapse"}],slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/molecules/Notification/Notification.vue"]};export{_e as S};
