import{d as c,e as t,B as o,F as l,x as i,t as a,z as m,y as u,o as r}from"./vue.esm-bundler-DbnnIJWB.js";import{S as d}from"./Icon-BFYv-dj3.js";import{s as f,S as k}from"./LogoNew-BZoFKVWd.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={class:"footer__bottom-content"},y=["innerHTML"],v={key:1,class:"footer__bottom-upper"},b={key:0,class:"external-links"},L=["target","href"],S={key:1,class:"partners"},w={key:0},q=["href"],z=["src","alt"],B=["href"],F=["url","alt"],T={class:"footer__bottom-lower"},N={class:"footer__bottom-logo"},A={key:0,class:"footer__bottom-site-title"},E={key:0,role:"navigation","aria-label":"Navigation de bas de page"},P={class:"links"},V=["target","href"],$=["target","href"],p=c({__name:"FooterBottom",props:{universe:{default:"part"},newPartners:{},moreLinks:{},text:{},pros:{},partner:{},links:{},logoSize:{default:f.LARGE},siteTitle:{}},setup(C){const _=()=>{window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector('button, [href]:not(link), input, select, textarea, [tabindex]:not([tabindex="-1"])');document.activeElement.blur(),e==null||e.focus({preventScroll:!0})};return(e,I)=>(r(),t("div",h,[e.text?(r(),t("div",{key:0,class:"footer__text footer__text--new-logo",innerHTML:e.text},null,8,y)):o("",!0),e.pros&&e.pros.length>0||e.newPartners?(r(),t("div",v,[e.pros?(r(),t("ul",b,[(r(!0),t(l,null,i(e.pros,(s,n)=>(r(),t("li",{key:`pro-${n}`,class:"pros__item external-links__item"},[a("a",{target:s.target,class:"external-links__link",href:s.url},u(s.label),9,L)]))),128))])):o("",!0),e.newPartners?(r(),t("ul",S,[e.partner?(r(),t("li",w,[a("a",{href:e.partner.url,class:"partners"},[a("img",{class:"partners__image",src:e.partner.image.url,alt:e.partner.image.alt},null,8,z)],8,q)])):o("",!0),e.newPartners?(r(!0),t(l,{key:1},i(e.newPartners,(s,n)=>(r(),t("li",{key:`partner-${n}`},[a("a",{href:s.url,class:"partners"},[a("img",{class:"partners__image",url:s.image.url,alt:s.image.alt},null,8,F)],8,B)]))),128)):o("",!0)])):o("",!0)])):o("",!0),a("div",T,[m(d,{tabindex:"0",class:"back",name:"arrow-large-up","aria-label":"Retour en haut",onClick:_}),a("div",N,[m(k,{universe:e.universe,direction:"horizontal",size:e.logoSize},null,8,["universe","size"]),e.siteTitle?(r(),t("div",A,u(e.siteTitle),1)):o("",!0)]),e.links?(r(),t("nav",E,[a("ul",P,[(r(!0),t(l,null,i(e.links,(s,n)=>(r(),t("li",{key:`link-${n}`,class:"links__item"},[a("a",{target:s.target,href:s.url,class:"links__link"},u(s.label),9,V)]))),128)),e.moreLinks&&e.moreLinks.length>0?(r(!0),t(l,{key:0},i(e.moreLinks,(s,n)=>(r(),t("li",{key:`link-${n}-${n}`,class:"links__item"},[a("a",{class:"links__link",target:s.target,href:s.url},u(s.text),9,$)]))),128)):o("",!0)])])):o("",!0)])]))}}),H=g(p,[["__scopeId","data-v-06c68e5c"]]);p.__docgenInfo={exportName:"default",displayName:"FooterBottom",description:"",tags:{},props:[{name:"universe",required:!1,type:{name:"union",elements:[{name:'"part"'},{name:'"pro"'},{name:'"business"'},{name:'"single"'}]},defaultValue:{func:!1,value:"'part'"}},{name:"newPartners",required:!1,type:{name:"Array",elements:[{name:"Partner"}]}},{name:"moreLinks",required:!1,type:{name:"Array",elements:[{name:"LinkType"}]}},{name:"text",required:!1,type:{name:"string"}},{name:"pros",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"partner",required:!1,type:{name:"Partner"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"logoSize",required:!1,type:{name:"sizeEnum"},defaultValue:{func:!1,value:"sizeEnum.LARGE"}},{name:"siteTitle",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/organisms/FooterFull/FooterBottom/FooterBottom.vue"]};export{H as S};
