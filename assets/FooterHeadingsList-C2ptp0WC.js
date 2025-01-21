import{d as h,o as t,e as o,t as u,y as m,F,x as b,G as S,b as H,B as I,Z as x,r as D,c as L,u as e,H as y,z as A,v as j}from"./vue.esm-bundler-BHwbD8xO.js";import{S as E}from"./Picture-CBfxdjno.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as $}from"./Icon-LmhyBlqB.js";import{b as T}from"./index-pMn-qRVg.js";const V={class:"app"},z={class:"footer__head"},R={class:"footer__title"},G=["href"],w=h({__name:"FooterApps",props:{title:{},apps:{}},setup(c){return(s,n)=>{const i=x("tracking");return t(),o("div",V,[u("div",z,[u("h2",R,m(s.title),1)]),(t(!0),o(F,null,b(s.apps,(a,d)=>S((t(),o("a",{key:`footer-app-${d}`,class:"app__link",href:a.link},[a.image?(t(),H(E,{key:0,class:"app__img",width:135,height:40,"default-source":a.image.defaultSource,"other-sources":a.image.otherSources},null,8,["default-source","other-sources"])):I("",!0)],8,G)),[[i,{name:"footer/app",data:a}]])),128))])}}}),de=k(w,[["__scopeId","data-v-c36d4637"]]);w.__docgenInfo={exportName:"default",displayName:"FooterApps",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"apps",required:!1,type:{name:"Array",elements:[{name:"App"}]}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterApps/FooterApps.vue"]};const P=["href","title","target"],N=h({__name:"FooterAppLink",props:{link:{}},setup(c){return(s,n)=>s.link?(t(),o("a",{key:0,class:"app__all",href:s.link.url,title:s.link.label,target:s.link.target||"_self"},m(s.link.label),9,P)):I("",!0)}}),pe=k(N,[["__scopeId","data-v-b9183c66"]]);N.__docgenInfo={exportName:"default",displayName:"FooterAppLink",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"Url"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterAppLink/FooterAppLink.vue"]};function q(){const c=D(!1),n=T({tablet:992}).smaller("tablet"),i=L(()=>n.value?c.value:void 0),a=L(()=>n.value?"region":void 0);return{open:c,isTabletAndDown:n,setAriaExpanded:i,setRole:a,setAriaAttribute:r=>n.value?r:void 0,toggle:()=>{c.value=!c.value}}}const Z={key:0,class:"connected__title"},J=["id","aria-controls","aria-expanded"],K={key:1,class:"connected__title"},M=["id","role","aria-labelledby"],O=["href","title","aria-label"],Q={class:"visually-hidden"},C=h({__name:"FooterSocial",props:{title:{},connected:{}},setup(c){const s=l=>l.charAt(0).toUpperCase()+l.slice(1).toLowerCase(),n=l=>l.toLowerCase(),{open:i,isTabletAndDown:a,setAriaExpanded:d,setRole:g,setAriaAttribute:r,toggle:f}=q();return(l,p)=>{const v=x("tracking");return t(),o("div",{class:j(["connected",{"connected--open":e(i)&&e(a)}])},[e(a)?(t(),o("h2",Z,[u("button",{id:e(r)("footer-connected"),class:"footer__head--accordion","aria-controls":e(r)("footer-connected-list"),"aria-expanded":e(d),onClick:p[0]||(p[0]=(..._)=>e(f)&&e(f)(..._))},[y(m(l.title)+" ",1),A($,{class:"footer__toggle",name:"arrow-bottom"})],8,J)])):(t(),o("h2",K,m(l.title),1)),u("ul",{id:e(r)("footer-connected-list"),class:"connected__list",role:e(g),"aria-labelledby":e(r)("footer-connected")},[(t(!0),o(F,null,b(l.connected,_=>(t(),o("li",{key:_.name},[S((t(),o("a",{class:"connected__link",target:"_blank",href:_.url,title:`${_.label} - nouvelle fenêtre`,"aria-label":_.label},[A($,{name:"brands-"+n(_.name)},null,8,["name"]),u("span",Q,m(s(_.name)),1)],8,O)),[[v,{name:"footer/social",data:_}]])]))),128))],8,M)],2)}}}),_e=k(C,[["__scopeId","data-v-3b26169b"]]);C.__docgenInfo={exportName:"default",displayName:"FooterSocial",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"connected",required:!1,type:{name:"SocialNetworks"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterSocial/FooterSocial.vue"]};const W={key:0,class:"heading__title"},X=["id","aria-controls","aria-expanded"],Y={key:1,class:"heading__title"},ee=["id","role","aria-labelledby"],te=["href","target"],U=h({__name:"FooterHeading",props:{title:{},links:{},index:{}},setup(c){const{open:s,isTabletAndDown:n,setAriaExpanded:i,setRole:a,setAriaAttribute:d,toggle:g}=q();return(r,f)=>{const l=x("tracking");return t(),o("li",{class:j(["heading",{"heading--open":e(s)&&e(n)}])},[e(n)?(t(),o("h2",W,[u("button",{id:e(d)(`footer-heading-${r.index}`),class:"footer__head--accordion","aria-controls":e(d)(`footer-heading-list-${r.index}`),"aria-expanded":e(i),onClick:f[0]||(f[0]=(...p)=>e(g)&&e(g)(...p))},[y(m(r.title)+" ",1),A($,{name:"arrow-bottom",class:"heading__arrow"})],8,X)])):(t(),o("h2",Y,m(r.title),1)),u("ul",{id:e(d)(`footer-heading-list-${r.index}`),class:"heading__list",role:e(a),"aria-labelledby":e(d)(`footer-heading-${r.index}`)},[(t(!0),o(F,null,b(r.links,(p,v)=>(t(),o("li",{key:`footer-${v}`,class:"heading__item"},[S((t(),o("a",{class:"heading__link",href:p.url,target:p.target||"_self"},[y(m(p.label),1)],8,te)),[[l,{name:"footer/heading",data:p}]])]))),128))],8,ee)],2)}}}),oe=k(U,[["__scopeId","data-v-14e154bc"]]);U.__docgenInfo={exportName:"default",displayName:"FooterHeading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"links",required:!1,type:{name:"Array",elements:[{name:"Url"}]}},{name:"index",required:!1,type:{name:"number"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterHeading/FooterHeading.vue"]};const se={class:"headings"},ae={class:"headings__list"},B=h({__name:"FooterHeadingsList",props:{headings:{}},setup(c){return(s,n)=>(t(),o("section",se,[u("ul",ae,[(t(!0),o(F,null,b(s.headings,(i,a)=>(t(),H(oe,{key:`heading-${a}`,class:"headings__item",title:i.title,links:i.links,index:a},null,8,["title","links","index"]))),128))])]))}}),ue=k(B,[["__scopeId","data-v-7755bef8"]]);B.__docgenInfo={exportName:"default",displayName:"FooterHeadingsList",description:"",tags:{},props:[{name:"headings",required:!1,type:{name:"Array",elements:[{name:"Heading"}]}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/FooterFull/FooterHeading/FooterHeadingsList.vue"]};export{ue as S,de as a,pe as b,_e as c};
