import{d as k,c as g,o,e as s,F as i,t as a,z as n,A as u,H as v,x as h,y,f as L,b as w,v as S}from"./vue.esm-bundler-BHwbD8xO.js";import{S as b}from"./Icon-LmhyBlqB.js";import{S as c}from"./Container-Byn0Stvv.js";import{S as x}from"./FooterBottom-CGf462Jx.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"footer__header"},C={class:"footer__content"},V=["href"],N={class:"footer__underline"},f=k({__name:"Footer",props:{hasStaticLinks:{type:Boolean,default:!0},newLogo:{type:Boolean,default:!1},universe:{default:"part"},moreLinks:{}},setup(d){const m=d,p=[{url:"/plan-du-site",text:"Plan du site"},{url:"/accessibilite-particuliers",text:"Charte d'accessibilité"},{url:"/conditions-contractuelles",text:" Conditions contractuelles "},{url:"/mentions-legales",text:"Mentions légales"},{url:"/donnees-personnelles-et-cookies",text:"Données personnelles et cookies"}],r=g(()=>[...p,...m.moreLinks??[]]),_=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(e,l)=>(o(),s("footer",{class:S(["footer",e.newLogo?"footer--default":"footer--legacy"]),role:"contentinfo"},[e.newLogo?(o(),w(x,{key:1,links:r.value,universe:e.universe,"new-logo":e.newLogo},null,8,["links","universe","new-logo"])):(o(),s(i,{key:0},[a("header",B,[n(c,null,{default:u(()=>[a("a",{class:"footer__back",tabindex:"0",onClick:_},[l[0]||(l[0]=v(" Retour en haut ")),n(b,{class:"footer__back__icon",size:"small",name:"arrow-large-up"})])]),_:1})]),a("section",C,[n(c,null,{default:u(()=>[(o(!0),s(i,null,h(r.value,t=>(o(),s("a",{key:t.url,href:t.url,class:"footer__link"},[a("span",N,y(t.text),1)],8,V))),128))]),_:1}),L(e.$slots,"default",{},void 0,!0)])],64))],2))}}),A=F(f,[["__scopeId","data-v-3a38f6a9"]]);f.__docgenInfo={exportName:"default",displayName:"Footer",description:"",tags:{},props:[{name:"hasStaticLinks",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"newLogo",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"universe",required:!1,type:{name:"union",elements:[{name:'"part"'},{name:'"pro"'},{name:'"business"'},{name:'"single"'}]},defaultValue:{func:!1,value:"'part'"}},{name:"moreLinks",required:!1,type:{name:"Array",elements:[{name:"LinkType"}]}}],slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Footer/Footer.vue"]};export{A as S};
