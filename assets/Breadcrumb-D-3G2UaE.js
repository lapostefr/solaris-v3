import{d as p,o as a,e as r,t as c,F as _,x as b,y as f}from"./vue.esm-bundler-BHwbD8xO.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=["aria-label"],g={class:"breadcrumb__list"},y=["href","aria-current"],n=p({__name:"Breadcrumb",props:{items:{},ariaLabel:{}},setup(i,{expose:m}){const s=i,l=e=>e.ariaLabel||"Fil d'ariane",t=e=>e+1===s.items.length;return m({isLast:t}),(e,L)=>(a(),r("nav",{"aria-label":l(s),class:"breadcrumb"},[c("ol",g,[(a(!0),r(_,null,b(e.items,({label:u,url:d},o)=>(a(),r("li",{key:`breadcrumb-${o}`,class:"breadcrumb__item"},[c("a",{href:d,class:"breadcrumb__item__label","aria-current":t(o)?"page":null},f(u),9,y)]))),128))])],8,h))}}),v=B(n,[["__scopeId","data-v-2f6241ec"]]);n.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},expose:[{name:"isLast"}],props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]}},{name:"ariaLabel",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/Breadcrumb/Breadcrumb.vue"]};export{v as S};
