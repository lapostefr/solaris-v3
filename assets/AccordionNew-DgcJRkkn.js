import{m as h,r as d,X as r,c as O,k as S,o as l,a as c,B as u,G as p,n as s,E as m,F as w,C as N,t as q,b as f,v as y,J as V,D as k,N as $,p as A}from"./vue.esm-bundler-BV06ZB-3.js";import{S as v}from"./Icon-R0HSrbr6.js";import{S as B}from"./Collapse-SNGSKL6g.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L=["id","aria-expanded","aria-controls","disabled"],j=["id","aria-labelledby"],z={class:"lp-accordion__content"},_=h({__name:"AccordionNew",props:{accordionStyle:{default:"transparent"},disabled:{type:Boolean},expanded:{type:Boolean,default:!1},icon:{},id:{},oneOpenOnly:{type:Boolean,default:!1},paddingLeftRight:{type:Boolean,default:!0},size:{default:"small"},type:{default:"default"},title:{},titleLevel:{default:"h3"}},setup(b){const a=b,t=d(a.expanded),i=r("openAccordionId",d(null)),n=r("setOpenAccordion",()=>{}),o=O(()=>a.oneOpenOnly?(i==null?void 0:i.value)===a.id:t.value),g=()=>{a.oneOpenOnly&&n?n(o.value?null:a.id):t.value=!t.value};return S(()=>{a.expanded&&a.oneOpenOnly&&n&&n(a.id)}),(e,I)=>(l(),c("div",{class:A(["lp-accordion",[`lp-accordion--${e.size}`,`lp-accordion--${e.type}`,`lp-accordion--${e.accordionStyle}`,{"lp-accordion--no-padding":!e.paddingLeftRight&&e.type==="default"},{"lp-accordion--disabled":e.disabled},{"lp-accordion--isActive":o.value}]])},[e.title||e.$slots.title?(l(),u(V(e.titleLevel),{key:0,class:"lp-accordion__title"},{default:p(()=>[s("button",{id:`accordion_${e.id}`,class:"lp-accordion__header","aria-expanded":o.value,"aria-controls":`accordion_content_${e.id}`,disabled:e.disabled,onClick:g},[e.icon?(l(),u(v,{key:0,class:"lp-accordion__icon",name:e.icon},null,8,["name"])):m("",!0),e.title?(l(),c(w,{key:1},[N(q(e.title),1)],64)):f(e.$slots,"title",{key:2},void 0,!0),y(v,{class:"lp-accordion__arrow-icon",name:"arrow-bottom"})],8,L)]),_:3})):m("",!0),y(B,null,{default:p(()=>[k(s("div",{id:`accordion_content_${e.id}`,role:"region","aria-labelledby":`accordion_${e.id}`},[s("div",z,[f(e.$slots,"content",{},void 0,!0)])],8,j),[[$,o.value]])]),_:3})],2))}}),D=C(_,[["__scopeId","data-v-dcc0826b"]]);_.__docgenInfo={exportName:"default",displayName:"AccordionNew",description:"",tags:{},props:[{name:"accordionStyle",required:!1,type:{name:"union",elements:[{name:'"transparent"'},{name:'"white"'}]},defaultValue:{func:!1,value:"'transparent'"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"expanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",required:!1,type:{name:"string"}},{name:"id",required:!0,type:{name:"string"}},{name:"oneOpenOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"paddingLeftRight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'small'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"brand"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"title",required:!1,type:{name:"string"}},{name:"titleLevel",required:!1,type:{name:"union",elements:[{name:'"h2"'},{name:'"h3"'},{name:'"h4"'},{name:'"h5"'},{name:'"h6"'}]},defaultValue:{func:!1,value:"'h3'"}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/AccordionNew/Accordion/AccordionNew.vue"]};const T=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{D as S,T as _};
