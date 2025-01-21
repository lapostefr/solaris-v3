import{d as r,o,e as n,z as a,t as l,v as _,f,H as g}from"./vue.esm-bundler-BHwbD8xO.js";import{S as k}from"./BackLink-C7dKA6Rc.js";import{S as h}from"./LogoNew-Dajnl_kr.js";import{S as d}from"./Icon-LmhyBlqB.js";import{_ as i}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=["href"],c=r({__name:"HeaderHelp",props:{helpLink:{}},setup(t){return(e,s)=>(o(),n("a",{href:e.helpLink,class:"help",target:"_blank",title:"Aide"},[a(d,{name:"action-help",class:"help__icon",type:"light"}),s[0]||(s[0]=l("span",{class:"help__hiddenForAccessibility"},"Aide",-1))],8,v))}}),H=i(c,[["__scopeId","data-v-9143bb98"]]);c.__docgenInfo={exportName:"default",displayName:"HeaderHelp",description:"",tags:{},props:[{name:"helpLink",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Header/HeaderHelp/HeaderHelp.vue"]};const S={class:"header__base"},b={class:"header__right"},p=r({__name:"HeaderLight",props:{backTitle:{default:void 0},helpLink:{default:void 0},universe:{default:"single"}},emits:["goBack","logoClicked"],setup(t){return(e,s)=>(o(),n("div",S,[a(k,{class:"header__back","back-title":e.backTitle,onGoBack:s[0]||(s[0]=m=>e.$emit("goBack"))},null,8,["back-title"]),a(h,{class:_(["header__logo--new",`header__logo--${e.universe}`]),"is-responsive":"",universe:e.universe,direction:"horizontal",onLogoClicked:s[1]||(s[1]=m=>e.$emit("logoClicked"))},null,8,["class","universe"]),l("div",b,[f(e.$slots,"default",{},void 0,!0),a(H,{"help-link":e.helpLink},null,8,["help-link"])])]))}}),j=i(p,[["__scopeId","data-v-f6182e4b"]]);p.__docgenInfo={exportName:"default",displayName:"HeaderLight",description:"",tags:{},props:[{name:"backTitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"helpLink",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"universe",required:!1,type:{name:"union",elements:[{name:'"part"'},{name:'"pro"'},{name:'"business"'},{name:'"single"'}]},defaultValue:{func:!1,value:"'single'"}}],events:[{name:"goBack"},{name:"logoClicked"}],slots:[{name:"default"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Header/HeaderLight.vue"]};const L={class:"secure"},u=r({__name:"HeaderSecure",props:{title:{}},setup(t){return(e,s)=>(o(),n("div",L,[a(d,{name:"cart-lock",class:"secure__icon"}),s[0]||(s[0]=g(" Paiment sécurisé "))]))}}),C=i(u,[["__scopeId","data-v-bbda8ce7"]]);u.__docgenInfo={exportName:"default",displayName:"HeaderSecure",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Header/HeaderSecure/HeaderSecure.vue"]};export{j as S,C as a};
