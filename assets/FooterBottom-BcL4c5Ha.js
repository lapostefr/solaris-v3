import{m as d,o as t,a as r,E as s,F as l,q as i,n as o,t as m,v as u,H as c}from"./vue.esm-bundler-BV06ZB-3.js";import{S as f}from"./Icon-R0HSrbr6.js";import{S as g}from"./Picture-BTt4q-w2.js";import{S as k}from"./LogoNew-tJgIKI_q.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"footer__bottom-content"},v=["innerHTML"],b={key:1,class:"footer__bottom-upper"},S={key:0,class:"external-links"},L=["target","href"],w={key:1,class:"partners"},q={key:0},P=["href"],F=["src","alt"],T=["href"],B={class:"footer__bottom-lower"},z={class:"footer__bottom-logo"},N={key:0,class:"footer__bottom-site-title"},V={key:0,role:"navigation","aria-label":"Navigation de bas de page"},$={class:"links"},j=["target","href"],A=["target","href"],_=d({__name:"FooterBottom",props:{universe:{default:"part"},newPartners:{},moreLinks:{},text:{},pros:{},partner:{},links:{},logoSize:{default:"Large"},siteTitle:{}},setup(C){const p=()=>{window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector('button, [href]:not(link), input, select, textarea, [tabindex]:not([tabindex="-1"])');document.activeElement.blur(),e==null||e.focus({preventScroll:!0})};return(e,H)=>(t(),r("div",y,[e.text?(t(),r("div",{key:0,class:"footer__text footer__text--new-logo",innerHTML:e.text},null,8,v)):s("",!0),e.pros&&e.pros.length>0||e.newPartners?(t(),r("div",b,[e.pros?(t(),r("ul",S,[(t(!0),r(l,null,i(e.pros,(a,n)=>(t(),r("li",{key:`pro-${n}`,class:"pros__item external-links__item"},[o("a",{target:a.target,class:"external-links__link",href:a.url},m(a.label),9,L)]))),128))])):s("",!0),e.newPartners?(t(),r("ul",w,[e.partner?(t(),r("li",q,[o("a",{href:e.partner.url,class:"partners"},[o("img",{class:"partners__image",src:e.partner.image.url,alt:e.partner.image.alt},null,8,F)],8,P)])):s("",!0),e.newPartners?(t(!0),r(l,{key:1},i(e.newPartners,(a,n)=>(t(),r("li",{key:`partner-${n}`},[o("a",{href:a.url,class:"partners"},[u(g,c({class:"partners__image",ref_for:!0},a.image),null,16)],8,T)]))),128)):s("",!0)])):s("",!0)])):s("",!0),o("div",B,[u(f,{tabindex:"0",class:"back",name:"arrow-large-up","aria-label":"Retour en haut",onClick:p}),o("div",z,[u(k,{universe:e.universe,direction:"horizontal",size:e.logoSize},null,8,["universe","size"]),e.siteTitle?(t(),r("div",N,m(e.siteTitle),1)):s("",!0)]),e.links?(t(),r("nav",V,[o("ul",$,[(t(!0),r(l,null,i(e.links,(a,n)=>(t(),r("li",{key:`link-${n}`,class:"links__item"},[o("a",{target:a.target,href:a.url,class:"links__link"},m(a.label),9,j)]))),128)),e.moreLinks&&e.moreLinks.length>0?(t(!0),r(l,{key:0},i(e.moreLinks,(a,n)=>(t(),r("li",{key:`link-${n}-${n}`,class:"links__item"},[o("a",{class:"links__link",target:a.target,href:a.url},m(a.text),9,A)]))),128)):s("",!0)])])):s("",!0)])]))}}),M=h(_,[["__scopeId","data-v-713eba15"]]);_.__docgenInfo={exportName:"default",displayName:"FooterBottom",description:"",tags:{},props:[{name:"universe",required:!1,type:{name:"union",elements:[{name:'"part"'},{name:'"pro"'},{name:'"business"'},{name:'"single"'}]},defaultValue:{func:!1,value:"'part'"}},{name:"newPartners",required:!1,type:{name:"Array",elements:[{name:"Partner"}]}},{name:"moreLinks",required:!1,type:{name:"Array",elements:[{name:"LinkType"}]}},{name:"text",required:!1,type:{name:"string"}},{name:"pros",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"partner",required:!1,type:{name:"Partner"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"logoSize",required:!1,type:{name:"union",elements:[{name:'"XXSmall"'},{name:'"XSmall"'},{name:'"Small"'},{name:'"Medium"'},{name:'"Large"'}]},defaultValue:{func:!1,value:"'Large'"}},{name:"siteTitle",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterBottom/FooterBottom.vue"]};const D=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{M as S,D as _};
