import{m as Z,x as I,y as ee,r as g,c as y,o as d,a as P,n as L,v as N,B as M,G as V,C,H as q,I as S,J as B,E as _,F as ae,q as te,t as O}from"./vue.esm-bundler-BV06ZB-3.js";import{S as b}from"./Icon-R0HSrbr6.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const se={key:0,class:"pagination"},oe=["disabled"],ie={class:"pagination__numbers"},ne=["disabled"],T=Z({__name:"Pagination",props:I({pageParam:{default:"page"},perPage:{},total:{},url:{},withLinks:{type:Boolean},modelValue:{}},{modelValue:{},modelModifiers:{}}),emits:I(["input"],["update:modelValue"]),setup(D,{emit:j}){const u=D,A=j,o=ee(D,"modelValue"),r=g([u.modelValue]),v=g([]),c=g(8),p=g(!0),E=g(0),k=g(!1),h=t=>{p.value=!1,k.value=!0,o.value!==t&&(r.value=[],v.value=[],o.value=t,A("input",t))},w=()=>u.withLinks?"a":"div",x=t=>{let e={};if(u.withLinks){if(!u.url)throw new Error("Missing required url props with withLinks props");const a=new URL(u.url),s=new URLSearchParams(a.search);t>1?s.set(u.pageParam,t.toString()):s.delete(u.pageParam);const i=s.toString();e={...e,href:a.pathname+(i.length?"?"+i:"")}}return e},l=y(()=>Math.ceil(u.total/u.perPage)),n=y(()=>{const t=Array(l.value).fill(null).map((s,i)=>i+1),e=m(10,o.value),a=o.value%10===0?o.value+10:f(10,o.value);return t.reduce((s,i)=>{F(s,i);const X=i<l.value,Y=l.value<=c.value;return(!p.value||p.value&&(X||Y))&&R(s,i),r.value.length||o.value===1&&i>3&&l.value>c.value?s:o.value===l.value&&!v.value.length&&l.value>c.value?(i<o.value-3||s.push(i),s):(i>=e&&i<=a&&s.push(i),s)},[])}),F=(t,e)=>{e<m(10,o.value)&&v.value.forEach(a=>{e%10===0&&e<a&&e>=a-100&&t.push(e),e%100===0&&e<a-100&&t.push(e),a<=20&&e<a&&e<10&&t.push(e)})},R=(t,e)=>{r.value.forEach(a=>{const s=l.value-a<=10?!0:a>=l.value-10;if(e<m(10,a)&&a>=10)return t;U(t,e,a,s),W(t,e,a,s),$(t,e,a)})},U=(t,e,a,s)=>{e%10===0&&e%100!==0&&(e<f(100,a+1)&&e>m(100,a)&&!s||a>=m(100,l.value)-10)&&t.push(e),e%10===0&&e%100===0&&e<f(100,a+1)&&t.push(e)},W=(t,e,a,s)=>{e>a&&e%100===0&&!s&&t.push(e)},$=(t,e,a)=>{e%10!==0&&(e<=f(10,a+1)||a>=m(10,l.value)-10)&&t.push(e)},z=y(()=>v.value.length===1?!1:n.value[0]>1),H=t=>{const e=t>3&&t<=l.value,a=l.value>c.value;return p.value&&!k.value&&e&&a},G=y(()=>{const t=l.value<=c.value,e=n.value[n.value.length-1],a=l.value>c.value;return p.value&&a?!0:t||r.value.length===1||l.value<=10&&o.value!==1||l.value%10===1&&e===l.value-1||e===l.value-10||e===l.value-100?!1:l.value<20&&o.value<10?!r.value.length:!n.value.some(s=>s===l.value)}),J=()=>{const t=o.value<110?m(100,o.value)-1:f(100,o.value),e=String(o.value).length===2?f(10,o.value):t;v.value=[...v.value,v.value.length?n.value[0]:e]},K=()=>{r.value=[...r.value,r.value.length?n.value[n.value.length-1]:o.value]},Q=()=>{E.value++;const t=k.value&&E.value===1;(!p.value||t)&&K(),p.value=!1,k.value=!1},f=(t,e)=>t*Math.ceil(e/t),m=(t,e)=>t*Math.floor(e/t);return(t,e)=>t.total?(d(),P("div",se,[L("button",{disabled:o.value<=n.value[0],class:"pagination__item pagination__item--prev",title:"Cliquer pour revenir en arrière",onClick:e[0]||(e[0]=a=>h(o.value-1))},[N(b,{name:"arrow-large-left"})],8,oe),L("div",ie,[n.value.some(a=>a===1)?_("",!0):(d(),M(B(w()),q({key:0,class:"pagination__item pagination__item--other"},x(1),S(t.withLinks?{}:{click:()=>h(1)})),{default:V(()=>e[2]||(e[2]=[C(" 1 ")])),_:1},16)),z.value?(d(),P("button",{key:1,"arial-label":"Voir plus de pages",class:"pagination__item pagination__item--other",onClick:J},[N(b,{name:"settings-menu-action"})])):_("",!0),(d(!0),P(ae,null,te(n.value,a=>(d(),M(B(w()),q({ref_for:!0},x(a),{key:a,class:["pagination__item",{"pagination__item--current":o.value===a,"visually-hidden":H(a)}],tabindex:H(a)?-1:void 0},S(t.withLinks?{}:{click:()=>h(a)})),{default:V(()=>[C(O(a),1)]),_:2},1040,["class","tabindex"]))),128)),G.value?(d(),P("button",{key:2,"arial-label":"Voir plus de pages",class:"pagination__item pagination__item--other",onClick:Q},[N(b,{name:"settings-menu-action"})])):_("",!0),l.value&&!n.value.some(a=>a===l.value)?(d(),M(B(w()),q({key:3,class:"pagination__item pagination__item--other"},x(l.value),S(t.withLinks?{}:{click:()=>h(l.value)})),{default:V(()=>[C(O(l.value),1)]),_:1},16)):_("",!0)]),L("button",{disabled:o.value===l.value,class:"pagination__item pagination__item--next",title:"Cliquer pour avancer",onClick:e[1]||(e[1]=a=>h(o.value+1))},[N(b,{name:"arrow-large-right"})],8,ne)])):_("",!0)}}),ue=le(T,[["__scopeId","data-v-54a46a46"]]);T.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"pageParam",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'page'"}},{name:"perPage",required:!0,type:{name:"number"}},{name:"total",required:!0,type:{name:"number"}},{name:"url",required:!1,type:{name:"string"}},{name:"withLinks",required:!1,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"number"}}],events:[{name:"input"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/Pagination/Pagination.vue"]};const me=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));export{ue as S,me as _};
