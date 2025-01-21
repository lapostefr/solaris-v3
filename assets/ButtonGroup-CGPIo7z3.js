import{d as K,m as U,a as z,r as n,c as G,k as O,l as R,o as l,e as u,t as m,F as _,x as j,v as w,J as B,I as E,b as L,H,y as I,G as J,u as P,B as Q}from"./vue.esm-bundler-BHwbD8xO.js";import{S as W}from"./Icon-LmhyBlqB.js";import{g as X}from"./generateId-DPOzJEtM.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z=["role","aria-describedby"],x=["for","aria-checked","tabindex","onKeydown","onClick"],ee=["id","value","checked","name","disabled"],ae={class:"buttonGroup__error-message-text"},D=K({__name:"ButtonGroup",props:U({dataError:{},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},id:{},name:{},options:{},readonly:{type:Boolean,default:!1},responsive:{type:Boolean,default:!0},small:{type:Boolean,default:!1},value:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const s=v,d=z(v,"modelValue"),V=X,c=n([]),b=n(null),y=n(""),t=n(0),p=n(0),f=n(-1),$=e=>{d.value=e.target.value},q=()=>{var e,o,a;return s.dataError&&((e=s.dataError)==null?void 0:e.active)&&((a=(o=s.dataError)==null?void 0:o.message)==null?void 0:a.length)},M=G(()=>{var e;return(e=s.dataError)!=null&&e.active||s.error?"radiogroup":void 0}),A=G(()=>{var e,o;return(e=s.dataError)!=null&&e.active&&((o=s.dataError)!=null&&o.message)?y.value:void 0}),g=e=>{e.target.click()},k=()=>{const e=b.value;y.value=e&&e.id?e.id:"error-message"},F=()=>{p.value=0},C=()=>{const e=s.options,o=e.findIndex(i=>!i.disabled),a=e[0].disabled;t.value===0&&a&&(t.value=o),c.value[`${s.id}-${t.value}`].focus()},S=e=>{const o=s.options.length;let a=(t.value+e+o)%o;for(;s.options[a].disabled;)a=(a+e+o)%o;t.value=a,c.value[`${s.id}-${a}`].click()},T=e=>{const a={ArrowRight:1,ArrowLeft:-1,ArrowUp:-1,ArrowDown:1}[e.key];a!==void 0?(S(a),(e.key==="ArrowUp"||e.key==="ArrowDown")&&e.preventDefault()):e.key==="Tab"&&(p.value=-1,f.value!==-1&&(t.value=f.value))},N=e=>{t.value=e,f.value=e};return O(()=>{k()}),R(()=>{k()}),(e,o)=>{var a;return l(),u("div",{class:w(["buttonGroup",[{"buttonGroup--error":e.error||e.dataError&&e.dataError.active,"buttonGroup--responsive":e.responsive},e.small?"buttonGroup--small":"buttonGroup--big"]])},[m("fieldset",{class:"buttonGroup__wrapper",role:M.value,"aria-describedby":A.value},[(l(!0),u(_,null,j(e.options,(r,i)=>(l(),u("label",{ref_for:!0,ref:h=>c.value[`${e.id}-${i}`]=h,key:r.value,class:w(["buttonGroup__section",[{"buttonGroup__section--active":d.value===r.value},{"buttonGroup--disabled":e.disabled||r.disabled}]]),for:`${e.id}-${r.value}`,role:"radio","aria-checked":d.value===r.value,tabindex:p.value,onFocusin:C,onFocusout:F,onKeydown:[T,B(E(g,["prevent"]),["space"]),B(E(g,["prevent"]),["enter"])],onClick:h=>N(i)},[m("input",{id:`${e.id}-${r.value}`,class:"buttonGroup__radio",value:r.value,checked:d.value===r.value,name:e.name,disabled:e.disabled||e.readonly||r.disabled,type:"radio",tabindex:"-1",onInput:$},null,40,ee),r.icon?(l(),L(W,{key:0,class:"icons__display",name:r.icon,size:e.small?"small":"big"},null,8,["name","size"])):(l(),u(_,{key:1},[H(I(r.label),1)],64))],42,x))),128))],8,Z),q()?J((l(),u("p",{key:0,ref_key:"errorMessage",ref:b,class:"buttonGroup__error-message","aria-live":"polite"},[m("span",ae,I((a=e.dataError)==null?void 0:a.message),1)])),[[P(V),"buttonGroup-error-message--"]]):Q("",!0)],2)}}}),ne=Y(D,[["__scopeId","data-v-73be823d"]]);D.__docgenInfo={exportName:"default",displayName:"ButtonGroup",description:"",tags:{},props:[{name:"dataError",required:!1,type:{name:"DataErrorType"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"id",required:!0,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"ButtonGroupItem"}]}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"responsive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"small",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"value",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/ButtonGroup/ButtonGroup.vue"]};export{ne as S};
