import{d as B,r as q,c as m,g as a,y as s,L as D,A as p,B as V,C as u,F as y,z as L,v,f as o}from"./vue.esm-bundler-BiAlgFmf.js";import{S as N}from"./Icon-C-Sturzh.js";import{a as F}from"./index-a4aneQim.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";var g=(n=>(n.responsive="responsive",n.full="full",n.accordion="accordion",n))(g||{});const z=["aria-label"],I=["aria-controls","aria-expanded"],j={class:"lp-stepper__progress-details"},E={class:"lp-stepper__progress-text"},M={class:"lp-stepper__label-accordion"},O=["id"],U=["aria-current"],G=["aria-label","onClick"],H={class:"lp-stepper__step-text"},J={class:"lp-stepper__label"},K={key:0,class:"lp-stepper__description"},Q={class:"lp-stepper__step-text"},R={class:"lp-stepper__label"},W={key:0,class:"lp-stepper__description"},h=B({__name:"Stepper",props:{ariaLabel:{default:"Étapes"},id:{},componentType:{default:g.responsive},current:{},showProgressDetail:{type:Boolean,default:!0},steps:{}},emits:["goToStep"],setup(n,{emit:k}){const r=n,S=k,f=F({tablet:700}).smaller("tablet"),i=q(!1),d=m(()=>r.componentType==="accordion"||r.componentType==="responsive"&&f.value),_=m(()=>r.componentType==="full"||r.componentType==="responsive"&&!f.value),T=m(()=>(r.current+1)/r.steps.length*100),$=e=>({"lp-stepper__step--current":r.current===e,"lp-stepper__step--previous":r.current>e,"lp-stepper__step--default":r.current<e||r.current===void 0}),w=()=>{i.value=!i.value},C=e=>{S("goToStep",e)},A=e=>r.current===e;return(e,c)=>{var b;return o(),a("nav",{class:v(["lp-stepper",[`lp-stepper--${e.componentType}`,{"lp-stepper__container":d.value},{"lp-stepper--open":i.value&&d.value},{"lp-stepper--with-progress":_.value&&e.showProgressDetail}]]),"aria-label":e.ariaLabel||"Étapes"},[d.value?(o(),a("button",{key:0,class:"lp-stepper__head-accordion","aria-controls":`${e.id}-listbox`,"aria-expanded":`${i.value}`,onClick:w},[s("span",{class:"lp-stepper__progress-bar",style:D(`--progress: ${T.value}`),"aria-hidden":"true"},null,4),s("div",j,[s("span",E," Étape "+p(e.current+1)+" sur "+p(e.steps.length),1),s("span",M,p((b=e.steps[e.current])==null?void 0:b.label),1)]),V(N,{name:"arrow-bottom",class:"lp-stepper__arrow"})],8,I)):u("",!0),s("ol",{id:`${e.id}-listbox`,class:"lp-stepper__list"},[(o(!0),a(y,null,L(e.steps,(t,l)=>(o(),a("li",{key:t.id,class:v(["lp-stepper__step",$(l)]),"aria-current":A(l)?"step":void 0},[_.value&&e.current===l?(o(),a("span",{key:0,class:v(["lp-stepper__progress-text",{"visually-hidden":_.value&&!e.showProgressDetail}])}," Étape "+p(e.current+1)+" sur "+p(e.steps.length),3)):u("",!0),e.current>l?(o(),a("button",{key:1,class:"lp-stepper__button-previous","aria-label":`Etape ${l+1} complétée : ${t.label}${t.description?` ${t.description}`:""}`,onClick:Y=>C(l)},[c[0]||(c[0]=s("span",{class:"lp-stepper__picto-container"},[s("i",{class:"lp-stepper__picto"})],-1)),s("span",H,[s("span",J,p(t.label),1),t.description?(o(),a("span",K,p(t.description),1)):u("",!0)])],8,G)):(o(),a(y,{key:2},[c[1]||(c[1]=s("span",{class:"lp-stepper__picto-container"},[s("i",{class:"lp-stepper__picto"})],-1)),s("span",Q,[s("span",R,p(t.label),1),t.description?(o(),a("span",W,p(t.description),1)):u("",!0)])],64))],10,U))),128))],8,O)],10,z)}}}),re=P(h,[["__scopeId","data-v-483d2ba6"]]);h.__docgenInfo={exportName:"default",displayName:"Stepper",description:"",tags:{},props:[{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Étapes'"}},{name:"id",required:!0,type:{name:"string"}},{name:"componentType",required:!1,type:{name:"StepperType"},defaultValue:{func:!1,value:"StepperType.responsive"}},{name:"current",required:!0,type:{name:"number"}},{name:"showProgressDetail",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"steps",required:!0,type:{name:"Array",elements:[{name:"StepType"}]}}],events:[{name:"goToStep"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/solaris/vue3/src/components/organisms/Stepper/Stepper.vue"]};export{g as S,re as a};
