import{m as Z,r as b,M as ee,c as ae,w as oe,j as re,k as ne,o as t,a as u,n as m,u as a,p as c,t as k,E as w,z as y,A as I,v as q,G as se,D as te,N as le,L as ie,B as S,f as de,F as L,q as pe,T as ue,O as me}from"./vue.esm-bundler-BV06ZB-3.js";import{S as ce}from"./Icon-R0HSrbr6.js";import{S as fe}from"./Input-B2dYoFF6.js";import{S as G}from"./CheckboxGroup-Bc-SERGa.js";import{u as be,S as ye}from"./useDropdown-DKauCvUi.js";import{o as we,u as ge}from"./index-Lw3s2UWX.js";import{_ as he}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ve={class:"dropdown__wrapper"},_e=["aria-describedby","aria-invalid","aria-required"],ke=["for"],qe=["tabindex","aria-disabled","aria-readonly"],Se={class:"dropdown__container"},Ce={key:0,class:"dropdown__placeholder"},De={class:"dropdown__value"},Ee=["id"],Me={key:1,class:"dropdown__no-result"},N=Z({__name:"DropdownCheckbox",props:{nesting:{type:Boolean},active:{default:"active"},activeGroup:{type:Boolean},dataError:{},id:{},label:{},labelPosition:{default:"inside"},listboxHeight:{default:0},mandatory:{type:Boolean},message:{},name:{},options:{},phoneCode:{},picto:{default:"arrow-bottom"},placeholder:{},size:{default:"default"},searchField:{type:Boolean},searchFieldMode:{default:"contains"}},emits:["multiSelected"],setup(O,{emit:$}){const s=O,x=$,C=b(null),f=b([]),g=b(),h=b(null),D=b(""),{id:l,options:E,active:H,phoneCode:R,searchField:M,searchFieldMode:j}=ee(s),{multiSelected:V,toggleListBox:d,close:i,dynamicListboxHeight:K,opened:p,dynamicHeight:F,searches:v,noSearchResult:T,multiValue:_,dynamicOptions:U}=be(x,l,E,H,R,M,j,f,g);we(C,()=>i());const J=ae(()=>{let e=!1;return E.value.every(r=>r.parent)&&(e=!0),e}),Q=e=>{n()==="readonly"&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation())};oe(p,async()=>{await me(),K();const{focused:e}=ge(g.value,{initialValue:!1});p.value&&s.searchField&&(e.value=!e.value)});const W=()=>{var e,r;return(e=s.dataError)!=null&&e.active&&((r=s.dataError)!=null&&r.message)?D.value:void 0},z=()=>{D.value=h.value.idMessage?h.value.idMessage:"error-message"},X=()=>{var e;return(e=s.dataError)!=null&&e.active?!0:null},n=()=>s.options.length&&!!s.options[0].optionsList&&s.options[0].optionsList.length?s.active:"disabled";return re(()=>{z()}),ne(()=>{z()}),(e,r)=>{var B,P,A;return t(),u("div",ve,[m("fieldset",{ref_key:"targetDropdown",ref:C,class:c(["dropdown",[`dropdown--${e.labelPosition}`,{"dropdown--small":e.size=="small"||e.size=="compact","dropdown--medium":e.size=="medium"||e.size=="default","dropdown--disabled":n()==="disabled","dropdown--readonly":n()==="readonly","dropdown--isOpen":a(p),"dropdown--filled":!!a(_),"dropdown--placeholder":!!e.placeholder,"dropdown--error":(B=e.dataError)==null?void 0:B.active}]]),"aria-describedby":W(),"aria-invalid":X(),"aria-required":e.mandatory||null},[e.label?(t(),u("legend",{key:0,ref:o=>f.value[a(l)]=o,class:c(["dropdown__label",[`dropdown__label--${e.labelPosition}`,{"dropdown__label--mandatory":e.mandatory,"dropdown__label--disabled":n()==="disabled","dropdown__label--readonly":n()==="readonly"}]]),for:a(l)},k(e.label),11,ke)):w("",!0),m("div",{ref:o=>f.value[a(l)]=o,tabindex:n()!=="disabled"?0:-1,class:c(["dropdown__element",[`dropdown__element--${e.labelPosition}`,{"dropdown__element--inside-label":!!e.label&&e.labelPosition==="inside","dropdown__element--inside-no-label":!e.label&&e.labelPosition==="inside","dropdown__element--disabled":n()==="disabled","dropdown__element--readonly":n()==="readonly","dropdown__element--error":(P=e.dataError)==null?void 0:P.active}]]),"aria-disabled":n()==="disabled","aria-readonly":n()==="readonly",onClick:r[0]||(r[0]=(...o)=>a(d)&&a(d)(...o)),onKeydown:[r[1]||(r[1]=y(I((...o)=>a(d)&&a(d)(...o),["prevent"]),["space","enter"])),r[2]||(r[2]=y((...o)=>a(d)&&a(d)(...o),["down","up"])),r[3]||(r[3]=y((...o)=>a(i)&&a(i)(...o),["esc"])),r[4]||(r[4]=y(I((...o)=>a(i)&&a(i)(...o),["shift","exact"]),["tab"]))]},[m("span",Se,[e.placeholder&&!a(_)?(t(),u("span",Ce,k(e.placeholder),1)):w("",!0),m("span",De,k(a(_)),1)]),q(ce,{name:e.picto,class:c(["dropdown__picto",{"dropdown__picto--isActive":e.picto==="arrow-bottom"&&a(p)}])},null,8,["name","class"])],42,qe),q(ye,{ref_key:"childMessage",ref:h,message:e.message,error:(A=e.dataError)==null?void 0:A.message,"data-error":e.dataError},null,8,["message","error","data-error"]),q(ue,{name:"lightbox"},{default:se(()=>[te(m("div",{id:`${a(l)}-lightbox`,ref:o=>f.value[`${a(l)}-lightbox`]=o,class:c(["dropdown__lightbox",{"dropdown__lightbox--noFocus":!a(p)}]),role:"listbox","aria-multiselectable":"true",style:ie([e.listboxHeight&&e.listboxHeight>16?{"max-height":e.listboxHeight+"px"}:"",a(F)?{height:a(F)+"px"}:""]),onKeydown:r[6]||(r[6]=y((...o)=>a(i)&&a(i)(...o),["esc"]))},[a(M)?(t(),S(fe,{key:0,id:"idSearch",ref_key:"search",ref:g,modelValue:a(v),"onUpdate:modelValue":r[5]||(r[5]=o=>de(v)?v.value=o:null),class:"dropdown__search",name:"nameSearch",type:"text",label:"Rechercher",icon:"search-loupe",autocomplete:"off"},null,8,["modelValue"])):w("",!0),m("div",{ref:o=>f.value[`${a(l)}-optionsList`]=o,class:c(["dropdown__optionsList",{"dropdown__optionsList--readonly":n()==="readonly"}]),onKeydownCapture:Q},[(t(!0),u(L,null,pe(a(U),(o,Y)=>(t(),u(L,{key:`dropdown-${a(l)}-checkboxNesting-${Y}`},[e.nesting&&J.value?(t(),S(G,{key:0,nesting:"",options:o,"active-group":e.activeGroup,class:"dropdown__checkboxNesting",color:"quiet",onInput:a(V)},null,8,["options","active-group","onInput"])):(t(),S(G,{key:1,options:o,"active-group":e.activeGroup,class:"dropdown__checkboxGroup",color:"quiet",onInput:a(V)},null,8,["options","active-group","onInput"]))],64))),128))],34),a(T)?(t(),u("span",Me,"Aucun résultat")):w("",!0)],46,Ee),[[le,a(p)]])]),_:1})],10,_e)])}}}),Ve=he(N,[["__scopeId","data-v-6e10f803"]]);N.__docgenInfo={exportName:"default",displayName:"DropdownCheckbox",description:"",tags:{},props:[{name:"nesting",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"union",elements:[{name:'"disabled"'},{name:'"readonly"'},{name:'"active"'}]},defaultValue:{func:!1,value:"'active'"}},{name:"activeGroup",required:!1,type:{name:"boolean"}},{name:"dataError",required:!1,type:{name:"DataError"}},{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"inside"'},{name:'"outside"'}]},defaultValue:{func:!1,value:"'inside'"}},{name:"listboxHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"mandatory",required:!1,type:{name:"boolean"}},{name:"message",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Group"}]}},{name:"phoneCode",required:!1,type:{name:"string"}},{name:"picto",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'arrow-bottom'"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'},{name:'"regular"'},{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"searchField",required:!1,type:{name:"boolean"}},{name:"searchFieldMode",required:!1,type:{name:"union",elements:[{name:'"contains"'},{name:'"startswith"'}]},defaultValue:{func:!1,value:"'contains'"}}],events:[{name:"multiSelected"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/Dropdown/Checkbox/DropdownCheckbox.vue"]};const Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Ve as S,Ne as _};
