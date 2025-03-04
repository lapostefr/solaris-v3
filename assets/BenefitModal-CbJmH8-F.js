import{S as E}from"./Icon-BFYv-dj3.js";import{S as D}from"./Button-jFHmCyiG.js";import{b as U,c as j,f as N}from"./closeOnFocusOut-D0QTlgAv.js";import{u as P}from"./index-7Yv3mQsR.js";import{d as W,r as G,c as p,w as H,l as X,k as J,W as V,X as I,o as s,b as A,A as k,G as K,e as r,t as d,v as c,L as Q,z as v,B as f,E as R,H as M,y as C,f as T,F as Y,x as Z,T as x}from"./vue.esm-bundler-DbnnIJWB.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=W({name:"BenefitModal",components:{SolarisIcon:E,SolarisButton:D},directives:{bodyNoScroll:U,closeOnFocusOut:j,focusTrap:N},model:{prop:"showModal",event:"changed"},props:{logo:{required:!1,type:Object},modals:{required:!0,type:Array},disableClickOutside:{required:!1,default:!1,type:Boolean},isLoading:{required:!1,default:!1,type:Boolean},focusTrap:{required:!1,default:!1,type:Boolean},showModal:{required:!1,default:!1,type:Boolean},showTitle:{required:!0,default:!0,type:Boolean},titleLevel:{required:!1,default:"h1",type:String},padding:{required:!1,default:"default",type:String},closable:{required:!1,default:!0,type:Boolean}},emits:["changed","toggledModal","currentId"],setup(e,n){let _=!1;const l=G(0),g=p({get(){return e.showModal},set(a){n.emit("changed",a)}}),w=p(()=>e.modals.find((a,t)=>t===l.value)),B=p(()=>l.value===0?"Fermer":"Précédent"),m=p(()=>l.value===e.modals.length-1?"Fermer":"Suivant"),S=p(()=>{var a,t;return(t=(a=w.value)==null?void 0:a.background)==null?void 0:t.url}),q=()=>{e.disableClickOutside||u()},u=()=>(e.closable&&n.emit("changed"),l.value=0,_=!1,!1),y=()=>{if(l.value===0){u();return}l.value-=1,b(l.value)},o=()=>{const a=e.modals.length-1;if(l.value===a-1||l.value<a){l.value+=1,b(l.value);return}u()},i=a=>{a&&n.emit("currentId",a)},b=a=>{var h;const t=(h=e.modals[a])==null?void 0:h.id;i(t),l.value=a},$=()=>{var t;const a=(t=e.modals[0])==null?void 0:t.id;i(a)},O=()=>{const a=e.modals.find((t,h)=>h===l.value);return e.showTitle||a==null?void 0:a.title},z=()=>e.showTitle?"modal__title":void 0;H(g,a=>{typeof window>"u"||(a&&(document.onkeydown=t=>{t.key==="Escape"&&u()}),n.emit("toggledModal"),$())},{immediate:!0});const L=()=>{const a=P();g.value&&!_&&(_=!0,N.initFocus(a.value))};return X(()=>{L(),$()}),J(()=>{L()}),{currentStep:l,modal:w,labelPrev:B,labelNext:m,backgroundUrl:S,show:g,close:u,handleOverlayClick:q,selectedItem:b,setAriaLabel:O,setAriaLabelledBy:z,goBack:y,goNext:o}}}),ae={key:0,ref:"modal",class:"modal"},le=["aria-label","aria-labelledby","aria-modal","open"],oe={class:"modal__inner"},te=["aria-label"],se=["src","alt"],ne={key:0},ie={key:0,class:"modal__additional"},re={key:0,class:"modal__actions"},de={key:1,class:"modal__stepActions"},ue={class:"modal__bulletContainer"},ce=["onClick"];function me(e,n,_,l,g,w){const B=V("SolarisIcon"),m=V("SolarisButton"),S=I("body-no-scroll"),q=I("focus-trap"),u=I("close-on-focus-out");return s(),A(x,{name:"open"},{default:k(()=>{var y;return[e.show?K((s(),r("section",ae,[d("div",{class:"modal__overlay",onClick:n[0]||(n[0]=(...o)=>e.handleOverlayClick&&e.handleOverlayClick(...o))}),d("dialog",{id:"modal__container",class:c(["modal__container",[{"modal--no-title":!e.showTitle}]]),"aria-label":e.setAriaLabel(),"aria-labelledby":e.setAriaLabelledBy(),"aria-modal":e.show,open:e.show,role:"dialog"},[d("div",oe,[d("div",{class:c(["modal__top",{isBackground:e.modal.background}]),style:Q({backgroundImage:`url('${e.backgroundUrl}')`})},[e.closable&&e.close?(s(),r("button",{key:0,class:"modal__closer","aria-label":`Fermer la fenêtre "${(y=e.modal)==null?void 0:y.title}"`,onClick:n[1]||(n[1]=(...o)=>e.close&&e.close(...o))},[v(B,{size:"small",name:"action-close"})],8,te)):f("",!0),e.logo?(s(),r("img",{key:1,class:"modal__logo",src:e.logo.url,alt:e.logo.alt},null,8,se)):f("",!0)],6),d("div",{class:c(["modal__contentWrapper",[`modal__contentWrapper--${e.padding}`]])},[e.showTitle?(s(),A(R(e.titleLevel),{key:0,id:"modal__title",class:"modal__title"},{default:k(()=>{var o;return[M(C((o=e.modal)==null?void 0:o.title),1)]}),_:1})):f("",!0),d("div",{class:c(["modal__content",{"modal__content--withAdditional":e.$slots.additional}])},[T(e.$slots,"description",{step:e.currentStep},()=>{var o,i;return[(o=e.modal)!=null&&o.description?(s(),r("span",ne,C((i=e.modal)==null?void 0:i.description),1)):f("",!0)]},!0),e.$slots.additional?(s(),r("div",ie,[T(e.$slots,"additional",{},void 0,!0)])):f("",!0)],2)],2),d("div",{class:c(["modal__bottom",[`modal__bottom--${e.padding}`]])},[e.modals.length===1?(s(),r("div",re,[T(e.$slots,"actions",{},void 0,!0)])):(s(),r("div",de,[v(m,{class:"modal__desktop",type:"ghost",color:"default",onClick:e.goBack},{default:k(()=>[M(C(e.labelPrev),1)]),_:1},8,["onClick"]),v(m,{class:c(["modal__mobile",{"modal__mobile--hidden":e.currentStep===0}]),type:"ghost",color:"default",icon:"arrow-left",onClick:e.goBack},null,8,["class","onClick"]),d("div",ue,[(s(!0),r(Y,null,Z(e.modals,(o,i)=>(s(),r("div",{key:i,class:c(["modal__bullet",{"modal__bullet--current":e.currentStep===i}]),onClick:b=>e.selectedItem(i)},null,10,ce))),128))]),v(m,{class:"modal__mobile",color:"default",icon:"arrow-right",onClick:e.goNext},null,8,["onClick"]),v(m,{class:"modal__desktop",color:"default",onClick:e.goNext},{default:k(()=>[M(C(e.labelNext),1)]),_:1},8,["onClick"])]))],2)])],10,le)])),[[S,e.show],[q,e.focusTrap],[u,!0]]):f("",!0)]}),_:3})}const be=ee(F,[["render",me],["__scopeId","data-v-8f9be486"]]);F.__docgenInfo={displayName:"BenefitModal",exportName:"default",description:"",tags:{},props:[{name:"logo",type:{name:"Logo"},required:!1},{name:"modals",type:{name:"Array<ModalType>"},required:!0},{name:"disableClickOutside",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isLoading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"focusTrap",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"v-model",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"showTitle",type:{name:"boolean"},required:!0,defaultValue:{func:!1,value:"true"}},{name:"titleLevel",values:["h1","h2","h3","h4","h5","h6"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'h1'"}},{name:"padding",values:["small","default","large"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"closable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"changed"},{name:"toggledModal"},{name:"currentId"}],slots:[{name:"description",scoped:!0,bindings:[{name:"step",title:"binding"}]},{name:"additional"},{name:"actions"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/organisms/Modal/BenefitModal/BenefitModal.vue"]};export{be as S};
