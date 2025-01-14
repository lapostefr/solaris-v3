import{m,o as t,a as o,C as f,v as F,E as h,b as T,W as S,n as d,t as _,F as y,q as b,D as w,B,r as E,c as v,u as r,p as I}from"./vue.esm-bundler-BV06ZB-3.js";import{S as $}from"./Icon-R0HSrbr6.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as O}from"./Picture-BTt4q-w2.js";import{b as P}from"./index-Lw3s2UWX.js";const U={class:"footer footer--default",role:"contentinfo"},C={key:0,class:"footer__main-content"},q=m({__name:"FullFooter",props:{externalLinks:{},hasStaticLinks:{type:Boolean},moreLinks:{},newLinks:{},newPartners:{},showBackButton:{type:Boolean,default:!0},activeBack:{type:Boolean},borderTop:{type:Boolean}},setup(i){const n=()=>{window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector('button, [href]:not(link), input, select, textarea, [tabindex]:not([tabindex="-1"])');document.activeElement.blur(),e==null||e.focus({preventScroll:!0})};return(e,s)=>(t(),o("footer",U,[e.$slots?(t(),o("div",C,[e.showBackButton?(t(),o("button",{key:0,class:"showBack",onClick:n},[s[0]||(s[0]=f(" Retour en haut ")),F($,{name:"arrow-large-up",class:"showBack__arrow"})])):h("",!0),T(e.$slots,"default",{},void 0,!0)])):h("",!0)]))}}),D=p(q,[["__scopeId","data-v-ae0e3fca"]]);q.__docgenInfo={exportName:"default",displayName:"FullFooter",description:"",tags:{},props:[{name:"externalLinks",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"hasStaticLinks",required:!1,type:{name:"boolean"}},{name:"moreLinks",required:!1,type:{name:"Array",elements:[{name:"LinkType"}]}},{name:"newLinks",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"newPartners",required:!1,type:{name:"Array",elements:[{name:"Partner"}]}},{name:"showBackButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"activeBack",required:!1,type:{name:"boolean"}},{name:"borderTop",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FullFooter.vue"]};const ie=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),V={class:"engagement"},z={class:"footer__title"},M={class:"engagement__details"},R=["href"],W={class:"engagement__subtitle"},x=m({__name:"FooterEngagement",props:{isLegacy:{type:Boolean,default:!1},title:{},engagements:{}},setup(i){return(n,e)=>{const s=S("tracking");return t(),o("section",V,[d("h2",z,_(n.title),1),(t(!0),o(y,null,b(n.engagements,(a,c)=>w((t(),o("div",{key:`footer-engagement-${c}`,class:"engagement__content"},[a.image?(t(),B(O,{key:0,class:"engagement__picture",width:56,height:0,"default-source":a.image.defaultSource,"other-sources":a.image.otherSources},null,8,["default-source","other-sources"])):h("",!0),d("p",M,[d("a",{class:"engagement__title",href:a.link},_(a.title),9,R),d("span",W,_(a.subtitle),1)])])),[[s,{name:"footer/engagement",data:a}]])),128))])}}}),G=p(x,[["__scopeId","data-v-1401e17f"]]);x.__docgenInfo={exportName:"default",displayName:"FooterEngagement",description:"",tags:{},props:[{name:"isLegacy",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"}},{name:"engagements",required:!1,type:{name:"Array",elements:[{name:"Engagement"}]}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterEngagement/FooterEngagement.vue"]};const ce=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));function J(){const i=E(!1),e=P({tablet:992}).smaller("tablet"),s=v(()=>e.value?i.value:void 0),a=v(()=>e.value?"region":void 0);return{open:i,isTabletAndDown:e,setAriaExpanded:s,setRole:a,setAriaAttribute:l=>e.value?l:void 0,toggle:()=>{i.value=!i.value}}}const K={key:0,class:"heading__title"},Q=["id","aria-controls","aria-expanded"],X={key:1,class:"heading__title"},Y=["id","role","aria-labelledby"],Z=["href","target"],A=m({__name:"FooterHeading",props:{title:{},links:{},index:{}},setup(i){const{open:n,isTabletAndDown:e,setAriaExpanded:s,setRole:a,setAriaAttribute:c,toggle:g}=J();return(l,k)=>{const N=S("tracking");return t(),o("li",{class:I(["heading",{"heading--open":r(n)&&r(e)}])},[r(e)?(t(),o("h2",K,[d("button",{id:r(c)(`footer-heading-${l.index}`),class:"footer__head--accordion","aria-controls":r(c)(`footer-heading-list-${l.index}`),"aria-expanded":r(s),onClick:k[0]||(k[0]=(...u)=>r(g)&&r(g)(...u))},[f(_(l.title)+" ",1),F($,{name:"arrow-bottom",class:"heading__arrow"})],8,Q)])):(t(),o("h2",X,_(l.title),1)),d("ul",{id:r(c)(`footer-heading-list-${l.index}`),class:"heading__list",role:r(a),"aria-labelledby":r(c)(`footer-heading-${l.index}`)},[(t(!0),o(y,null,b(l.links,(u,H)=>(t(),o("li",{key:`footer-${H}`,class:"heading__item"},[w((t(),o("a",{class:"heading__link",href:u.url,target:u.target||"_self"},[f(_(u.label),1)],8,Z)),[[N,{name:"footer/heading",data:u}]])]))),128))],8,Y)],2)}}}),j=p(A,[["__scopeId","data-v-a68fade5"]]);A.__docgenInfo={exportName:"default",displayName:"FooterHeading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"index",required:!1,type:{name:"number"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterHeading/FooterHeading.vue"]};const de=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),ee={class:"headings"},te={class:"headings__list"},L=m({__name:"FooterHeadingsList",props:{headings:{}},setup(i){return(n,e)=>(t(),o("section",ee,[d("ul",te,[(t(!0),o(y,null,b(n.headings,(s,a)=>(t(),B(j,{key:`heading-${a}`,class:"headings__item",title:s.title,links:s.links,index:a},null,8,["title","links","index"]))),128))])]))}}),ae=p(L,[["__scopeId","data-v-fa27512f"]]);L.__docgenInfo={exportName:"default",displayName:"FooterHeadingsList",description:"",tags:{},props:[{name:"headings",required:!1,type:{name:"Array",elements:[{name:"Heading"}]}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterHeading/FooterHeadingsList.vue"]};const ue=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{D as S,ce as _,G as a,ae as b,de as c,ue as d,ie as e,J as u};
