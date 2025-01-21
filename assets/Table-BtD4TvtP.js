import{d as ne,r as y,c,l as le,a0 as se,o as l,e as r,f as H,B as d,t as f,b as x,E as re,C as z,y as m,F as C,x as B,A as E,H as S,v as T,z as ce}from"./vue.esm-bundler-BHwbD8xO.js";import{S as F}from"./Checkbox-BHJD1l2a.js";import{S as ie}from"./Icon-LmhyBlqB.js";import{S as ue}from"./Pagination-BfVUkDzV.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";const me={class:"table__container"},ve={key:0,class:"table__top"},pe={class:"table__inner"},be={key:0,class:"visually-hidden"},he={class:"table__head"},fe={class:"table__row"},_e={class:"table__flex"},ke={class:"table__body"},ge=["data-before-content"],ye={key:1,class:"table__value"},we={key:1,class:"table__bottom"},W=ne({__name:"Table",props:{alternateBackground:{type:Boolean},content:{},description:{default:void 0},headers:{},mobileScroll:{type:Boolean,default:!0},id:{},rowsQty:{default:0},title:{default:void 0}},emits:["checkRow"],setup(j,{emit:A}){const i=j,M=A,I=y([]),p=y(0),w=y(0),k=y(1),b=y(2),P=y(!1),O=(e,a,t)=>{M("checkRow",{row:e,col:a,data:t})},u=c(()=>{const e=i.headers.map(a=>{const t={...a},o=(t.checkbox&&t.checkbox.length>0)??!1,n=t.checkbox&&t.checkbox==="checked",s=t.checkbox&&t.checkbox==="indeterminate",v="arrow-sort",V=t.align?`table__cell--${t.align}`:"table__cell--start";return delete t.checkbox,delete t.align,{...t,sortIcon:v,hasCheckbox:o,checked:n,indeterminate:s,alignClass:V}});return p.value>0&&(e[w.value].sortIcon=p.value%2===0?"arrow-large-down":"arrow-large-up"),e}),_=c(()=>i.content.map((a,t)=>Object.keys(a).map((n,s)=>{var Q,U,R;const v=a==null?void 0:a._options.filter(oe=>oe.col===s),V=n,ae={id:`${V}-${t}`,text:a[n],type:typeof((Q=v[0])==null?void 0:Q.checked)=="boolean"?"checkbox":"default",checked:(U=v[0])!=null&&U.checked?(R=v[0])==null?void 0:R.checked:!1};return{cellName:V,values:ae,options:v}}).filter(n=>n.cellName!=="_options"))),G=c(()=>{let e="default";return p.value>0&&(e=p.value%2===0?"desc":"asc"),e}),J=c(()=>{let e,a,t;return i.description&&(a="aria-describedby",t=i.description.id,e={[a]:t}),e??{}}),$=()=>{var t,o;const e=(t=I[`tableWrapper-${i.id}`])==null?void 0:t.offsetWidth,a=(o=I[`tableItem-${i.id}`])==null?void 0:o.offsetWidth;P.value=e<a&&i.mobileScroll},L=c(()=>g.value*(k.value-1)),g=c(()=>i.rowsQty&&i.rowsQty>0?i.rowsQty:_.value.length),q=c(()=>{const e=g.value*(k.value-1)+g.value;return e>h.value?h.value:e}),h=c(()=>_.value.length),K=c(()=>g.value<h.value),D=c(()=>{const e=L.value,a=q.value;return[..._.value].sort(X.value).filter((t,o)=>o>=e&&o<a)}),X=c(()=>{const e=G.value,a=w.value;return e!=="default"?function(t,o){const n=t[a].values.text.toString(),s=o[a].values.text.toString();return e==="desc"?s.localeCompare(n,void 0,{numeric:!0}):n.localeCompare(s,void 0,{numeric:!0})}:function(){return 0}}),Y=c(()=>u.value.map((a,t)=>{let o,n="none",s;return p.value>0&&w.value===t&&(n=p.value%2===0?"descending":"ascending"),a.sortable&&(o="aria-sort",s={[o]:n}),s})??{}),Z=(e,a,t)=>{_.value[t][a].options[0].checked=!e,b.value=a,N(),O(t,a,_.value[t][a].values)},N=()=>{const e=_.value.filter(a=>a[b.value].options[0].checked).length;u.value[b.value].checked=e===h.value,u.value[b.value].indeterminate=e!==h.value&&e!==0},ee=(e,a)=>{u.value[a].checked=!e,u.value[a].indeterminate=!1,b.value=a,_.value.map(t=>(t[b.value].options[0].checked=u.value[a].checked,t))},te=e=>{p.value=w.value===e?p.value+1:1,w.value=e,k.value=1,N()};return le(()=>{$(),window.addEventListener("resize",$)}),u.value.map((e,a)=>(e.hasCheckbox&&(b.value=a,N()),e)),se(()=>{window.removeEventListener("resize",$)}),(e,a)=>(l(),r("div",me,[e.$slots.tableTop?(l(),r("div",ve,[H(e.$slots,"tableTop",{},void 0,!0)])):d("",!0),f("div",{ref:`tableWrapper-${e.id}`,class:T(["table__wrapper",{"table__wrapper--shadow":P.value&&e.mobileScroll}])},[f("div",pe,[e.description?(l(),x(re(e.description.tag?e.description.tag:"p"),{key:0,id:e.description.id,class:"visually-hidden",innerHTML:e.description.content},null,8,["id","innerHTML"])):d("",!0),f("table",z(J.value,{ref:`tableItem-${e.id}`,class:["table",{"table--no-scroll":!e.mobileScroll}]}),[e.title?(l(),r("caption",be,m(e.title),1)):d("",!0),f("thead",he,[f("tr",fe,[(l(!0),r(C,null,B(u.value,(t,o)=>(l(),r("th",z({key:o,tabindex:"0",scope:"col",ref_for:!0},Y.value[o],{class:["table__cell table__cell--th",[t.alignClass,{"table__cell--sortable":t.sortable}]]}),[f("div",_e,[t.hasCheckbox?(l(),x(F,{key:0,id:`checkbox--${o}`,modelValue:t.checked,"onUpdate:modelValue":n=>t.checked=n,name:`checkbox--${o}`,indeterminate:t.indeterminate,onInput:n=>ee(t.checked,o)},{default:E(()=>[S(m(t.text)+" -- "+m(t.checked),1)]),_:2},1032,["id","modelValue","onUpdate:modelValue","name","indeterminate","onInput"])):d("",!0),t.hasCheckbox?d("",!0):(l(),r(C,{key:1},[S(m(t.text),1)],64)),t.sortable?(l(),x(ie,{key:2,class:"table__sort",name:t.sortIcon,type:"bold",onClick:n=>te(o)},null,8,["name","onClick"])):d("",!0)])],16))),128))])]),f("tbody",ke,[(l(!0),r(C,null,B(D.value,(t,o)=>(l(),r("tr",{key:o,class:T(["table__row table__row--body",{"table__row--alternate":e.alternateBackground,"table__row--selected":D.value[o][b.value].values.checked}])},[(l(!0),r(C,null,B(t,(n,s)=>(l(),r("td",{key:s,class:T(["table__cell",[u.value[s].alignClass]]),"data-before-content":u.value[s].text},[n.values.type==="checkbox"?(l(),x(F,{key:0,id:`checkbox--${o}--${s}`,modelValue:n.options[0].checked,"onUpdate:modelValue":v=>n.options[0].checked=v,class:"table__check-body",name:`checkbox--${o}--${s}`,onInput:v=>Z(n.options[0].checked,s,o+g.value*(k.value-1))},{default:E(()=>[S(m(n.values.text)+" -- "+m(n.options[0].checked),1)]),_:2},1032,["id","modelValue","onUpdate:modelValue","name","onInput"])):d("",!0),H(e.$slots,n.cellName,{content:n,index:o},void 0,!0),n.values.type==="default"?(l(),r("span",ye,m(n.values.text),1)):d("",!0)],10,ge))),128))],2))),128))])],16)])],2),K.value?(l(),r("div",we,[f("span",null,[S(m(L.value+1)+" - "+m(q.value)+" de "+m(h.value)+" élément",1),h.value>0?(l(),r(C,{key:0},[S("s")],64)):d("",!0)]),ce(ue,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=t=>k.value=t),class:"table__pagination","with-links":!1,"per-page":g.value,total:h.value},null,8,["modelValue","per-page","total"])])):d("",!0)]))}}),Ne=de(W,[["__scopeId","data-v-12adbd8a"]]);W.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"alternateBackground",required:!1,type:{name:"boolean"}},{name:"content",required:!0,type:{name:"Array",elements:[{name:"intersection",elements:[{name:"{ [key: string]: string | number }"},{name:"{ _options: Option[] }"}]}]}},{name:"description",required:!1,type:{name:"Description"},defaultValue:{func:!1,value:"undefined"}},{name:"headers",required:!0,type:{name:"Array",elements:[{name:"Thead"}]}},{name:"mobileScroll",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"id",required:!0,type:{name:"string"}},{name:"rowsQty",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"checkRow"}],slots:[{name:"tableTop"},{name:"cell.cellName",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"content",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Table/Table.vue"]};export{Ne as S};
