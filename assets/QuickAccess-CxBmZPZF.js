import{m as h,r as b,Z as y,W as S,o as t,a as o,n as _,F as C,q as L,E as k,v as w,D as p,C as m,t as d,B as P,G as B,H as N}from"./vue.esm-bundler-BV06ZB-3.js";import{S as A}from"./Button-DIKv7yJx.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"quick__list"},T={key:0,class:"quick__new"},j={class:"quick__picture"},D=["href"],V={key:0,class:"quick-access__footer"},f=h({__name:"QuickAccess",props:{button:{},quickList:{}},emits:["closePopover","footerLinkClick"],setup(I,{emit:v}){const r=v,c=b(),i=e=>{const a=e.relatedTarget;a&&c.value&&!c.value.contains(a)&&r("closePopover")};return(e,a)=>{const q=y("SolarisPicture"),n=S("tracking");return t(),o("nav",{ref_key:"wrapper",ref:c,class:"quick-access"},[_("ul",Q,[(t(!0),o(C,null,L(e.quickList,(s,g)=>{var u,l;return t(),o("li",{key:`quick-${g}`,class:"quick__item"},[s.new?(t(),o("span",T,"Nouveau")):k("",!0),_("div",j,[w(q,{class:"quick__image",width:56,height:56,"default-source":(u=s.image)==null?void 0:u.defaultSource,"other-sources":(l=s.image)==null?void 0:l.otherSources},null,8,["default-source","other-sources"])]),p((t(),o("a",{href:s.link,class:"quick__title",onFocusout:i},[m(d(s.title),1)],40,D)),[[n,{name:"header/quickLink",data:{link:s}}]])])}),128))]),e.button?(t(),o("footer",V,[p((t(),P(A,N({class:"quick-access__button"},{...e.button,label:void 0},{onClick:a[0]||(a[0]=s=>r("footerLinkClick")),onFocusout:i}),{default:B(()=>[m(d(e.button.label),1)]),_:1},16)),[[n,{name:"header/quickLink",data:{link:{title:e.button.label}}}]])])):k("",!0)],512)}}}),x=F(f,[["__scopeId","data-v-f7886a31"]]);f.__docgenInfo={exportName:"default",displayName:"QuickAccess",description:"",tags:{},props:[{name:"button",required:!1,type:{name:"intersection",elements:[{name:"ButtonProps"},{name:"{ label: string }"}]}},{name:"quickList",required:!1,type:{name:"Array",elements:[{name:"QuickType"}]}}],events:[{name:"closePopover"},{name:"footerLinkClick"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/QuickAccess/QuickAccess.vue"]};const z=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{x as S,z as _};
