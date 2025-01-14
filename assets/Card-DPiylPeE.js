import{m as M,r as N,B as n,G as s,p as c,u as O,L as u,J as f,o as l,a as r,n as p,F as y,q as R,H,C as g,t as d,E as t,b as i,v as L}from"./vue.esm-bundler-BV06ZB-3.js";import{S as j}from"./Icon-R0HSrbr6.js";import{S as A}from"./Badge-mwQ5UWeV.js";import{S as D}from"./Picture-BTt4q-w2.js";import{S as G}from"./Collapse-SNGSKL6g.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";var V=(a=>(a.left="left",a.center="center",a.right="right",a))(V||{}),b=(a=>(a.none="none",a.small="small",a.medium="medium",a.large="large",a.xlarge="xlarge",a))(b||{}),F=(a=>(a.elevated="elevated",a.outlined="outlined",a.filledDefault="filled-default",a.filledAlt="filled-alt",a.filledTransparent="filled-transparent",a))(F||{}),B=(a=>(a.article="article",a.section="section",a))(B||{}),S=(a=>(a.headerOntTop="Header on top",a.imageOnTop="Image on top",a))(S||{}),_=(a=>(a.horizontal="horizontal",a.vertical="vertical",a.responsiveHorizontalMobile="responsive-horizontal-mobile",a.responsiveVerticalMobile="responsive-vertical-mobile",a))(_||{}),$=(a=>(a.medium="medium",a.small="small",a))($||{}),v=(a=>(a.subtitleOntTop="Subtitle on top",a.titleOnTop="Title on top",a))(v||{});const U={class:"lp-card__header"},K={key:0,class:"lp-card__badge-list"},Q={key:1,class:"lp-card__title-list"},W={key:0,class:"lp-card__body"},X={key:0,class:"lp-card__content"},Y={key:1,class:"lp-card__footer"},Z={key:2,class:"lp-card__label"},x={key:0,class:"lp-card__extra"},ee={class:"lp-card__extra-inner"},w=M({__name:"Card",props:{alignments:{default:V.left},backgroundColor:{default:"#FFFFFF"},badges:{},bodyText:{},cardStyle:{default:F.elevated},color:{default:"#3C3C3C"},containerTag:{default:B.article},contentPadding:{default:b.small},expanded:{type:Boolean,default:!1},footerRight:{type:Boolean,default:!1},fullClickable:{type:Boolean,default:!0},headerContentToBottom:{type:Boolean,default:!1},id:{},imageOrder:{},imagePadding:{default:b.none},isContainerOnly:{type:Boolean,default:!1},isFormElement:{type:Boolean,default:!1},label:{},layout:{default:_.vertical},link:{},picture:{},radius:{default:$.small},showImagesOnMobile:{type:Boolean,default:!0},subtitle:{default:void 0},title:{default:void 0},titlesOrder:{default:v.titleOnTop}},emits:["cardClicked"],setup(a){const o=a,P=N(!1),z=()=>{let e=null;return o.isFormElement&&o.id&&(e=`card-input-id-${o.id}`),e},h=()=>{let e="span";return o.link&&(e="a"),o.isFormElement&&(e="label"),e},E=()=>o.footerRight?"lp-card--footer-right":"lp-card--footer-default";return(e,C)=>(l(),n(f(e.containerTag),{id:e.id,class:c(["lp-card",[`lp-card--${e.layout}
      lp-card--style-${e.cardStyle} lp-card--radius-${e.radius}
      lp-card--alignments-${e.alignments} ${E()}
      lp-card--content-p-${e.contentPadding}`,{"lp-card--image-on-bottom":e.imageOrder===O(S).headerOntTop},{"lp-card--header-content-to-bottom":e.headerContentToBottom},{"lp-card--checked":P.value},{"lp-card--full":e.fullClickable},{"lp-card--expanded":e.expanded},{"lp-card--hover":h()!=="span"}]]),style:u({color:e.color||null,background:e.backgroundColor||null})},{default:s(()=>{var k,T,q;return[e.isContainerOnly?t("",!0):(l(),r(y,{key:0},[p("header",U,[e.badges?(l(),r("div",K,[(l(!0),r(y,null,R(e.badges,(m,I)=>(l(),n(A,H({key:I,class:"lp-card__badge",ref_for:!0},m),{default:s(()=>[g(d(m.content),1)]),_:2},1040))),128))])):t("",!0),e.title&&e.title.content||e.subtitle&&e.subtitle.content?(l(),r("div",Q,[e.title&&e.title.content?(l(),r(y,{key:0},[e.title.content?(l(),n(f(e.title.titleLevel||"h3"),{key:0,style:u({color:e.title.color||e.color}),class:c([{"lp-card__title--not-full":!e.fullClickable,"lp-card__title--full":e.fullClickable,"lp-card__title--bottom":e.titlesOrder===O(v).subtitleOntTop},"lp-card__title"])},{default:s(()=>[e.title.icon?(l(),n(j,{key:0,type:"light",name:e.title.icon,class:"lp-card__icon"},null,8,["name"])):t("",!0),i(e.$slots,"cardBeforeTitle",{},void 0,!0),(l(),n(f(h()),{class:"lp-card__title-inner",style:u({color:e.title.color||e.color,lineHeight:e.title.lineHeight||null,weight:e.title.weight||null,fontSize:e.title.fontSize||null}),for:z(),href:e.link||null,onClick:C[0]||(C[0]=m=>e.$emit("cardClicked"))},{default:s(()=>[g(d(e.title.content),1)]),_:1},8,["style","for","href"]))]),_:3},8,["style","class"])):t("",!0)],64)):t("",!0),e.subtitle&&e.subtitle.content?(l(),n(f(e.subtitle.titleLevel||"h4"),{key:1,class:"lp-card__subtitle",style:u({color:e.subtitle.color||e.color,textTransform:e.subtitle.textTransform||"uppercase"})},{default:s(()=>[g(d(e.subtitle.content),1)]),_:1},8,["style"])):t("",!0)])):t("",!0)]),e.$slots.cardBody||e.bodyText?(l(),r("section",W,[e.bodyText?(l(),r("div",X,d(e.bodyText),1)):t("",!0),i(e.$slots,"cardBody",{},void 0,!0)])):t("",!0),e.$slots.cardFooter?(l(),r("footer",Y,[i(e.$slots,"cardFooter",{},void 0,!0)])):t("",!0),e.label?(l(),r("span",Z,d(e.label),1)):t("",!0),p("section",{class:c([[`lp-card__medias--p-${e.imagePadding}`,{"lp-card__medias--mobile-hide-image":!e.showImagesOnMobile}],"lp-card__medias"])},[i(e.$slots,"cardMedias",{},void 0,!0),e.picture?(l(),n(D,{key:0,class:"lp-card__image",width:(k=e.picture)==null?void 0:k.width,height:(T=e.picture)==null?void 0:T.height,"default-source":(q=e.picture)==null?void 0:q.defaultSource},null,8,["width","height","default-source"])):t("",!0)],2),L(G,null,{default:s(()=>[e.$slots.cardExtra&&e.expanded?(l(),r("div",x,[p("div",ee,[i(e.$slots,"cardExtra",{},void 0,!0)])])):t("",!0)]),_:3})],64)),e.isContainerOnly?i(e.$slots,"containerOnly",{key:1},void 0,!0):t("",!0)]}),_:3},8,["id","class","style"]))}}),ae=J(w,[["__scopeId","data-v-77ecfee7"]]);w.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"alignments",required:!1,type:{name:"Alignments"},defaultValue:{func:!1,value:"Alignments.left"}},{name:"backgroundColor",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#FFFFFF'"}},{name:"badges",required:!1,type:{name:"Array",elements:[{name:"SolarisBadgeProps"}]}},{name:"bodyText",required:!1,type:{name:"string"}},{name:"cardStyle",required:!1,type:{name:"CardStyle"},defaultValue:{func:!1,value:"CardStyle.elevated"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#3C3C3C'"}},{name:"containerTag",required:!1,type:{name:"ContainerTag"},defaultValue:{func:!1,value:"ContainerTag.article"}},{name:"contentPadding",required:!1,type:{name:"CardSizing"},defaultValue:{func:!1,value:"CardSizing.small"}},{name:"expanded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"footerRight",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fullClickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"headerContentToBottom",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",required:!1,type:{name:"string"}},{name:"imageOrder",required:!1,type:{name:"ImageOrder"}},{name:"imagePadding",required:!1,type:{name:"CardSizing"},defaultValue:{func:!1,value:"CardSizing.none"}},{name:"isContainerOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isFormElement",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"layout",required:!1,type:{name:"Layout"},defaultValue:{func:!1,value:"Layout.vertical"}},{name:"link",required:!1,type:{name:"string"}},{name:"picture",required:!1,type:{name:"Image"}},{name:"radius",required:!1,type:{name:"Radius"},defaultValue:{func:!1,value:"Radius.small"}},{name:"showImagesOnMobile",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"subtitle",required:!1,type:{name:"SubtitleType"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"TitleType"},defaultValue:{func:!1,value:"undefined"}},{name:"titlesOrder",required:!1,type:{name:"TitlesOrder"},defaultValue:{func:!1,value:"TitlesOrder.titleOnTop"}}],events:[{name:"cardClicked"}],slots:[{name:"cardBeforeTitle"},{name:"cardBody"},{name:"cardFooter"},{name:"cardMedias"},{name:"cardExtra"},{name:"containerOnly"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/Card/Card.vue"]};const ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{V as A,F as C,S as I,_ as L,$ as R,ae as S,v as T,ie as _,b as a,B as b};
