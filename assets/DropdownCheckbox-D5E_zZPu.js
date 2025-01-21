import{d as X,r as f,M as Y,c as Z,w as ee,k as ae,l as oe,o as i,e as b,t as m,u as a,v as d,y as k,B as w,J as y,I as A,z as q,A as ne,G as re,N as se,L as te,b as L,n as le,F as ie,x as de,T as pe,O as ue}from"./vue.esm-bundler-BHwbD8xO.js";import{S as me}from"./Icon-LmhyBlqB.js";import{c as ce}from"./Input-CfpJPdR5.js";import{S as fe}from"./CheckboxGroup-B09vwubx.js";import{u as be,S as ye}from"./useDropdown-B0lJwPIR.js";import{o as we,a as he}from"./index-pMn-qRVg.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ve={class:"dropdown__wrapper"},_e=["aria-describedby","aria-invalid","aria-required"],ke=["for"],qe=["tabindex","aria-disabled","aria-readonly"],Se={class:"dropdown__container"},Ce={key:0,class:"dropdown__placeholder"},De={class:"dropdown__value"},Ee=["id"],Ve={key:1,class:"dropdown__no-result"},P=X({__name:"DropdownCheckbox",props:{nesting:{type:Boolean},active:{default:"active"},activeGroup:{type:Boolean},dataError:{},id:{},label:{},labelPosition:{default:"inside"},listboxHeight:{default:0},mandatory:{type:Boolean},message:{},name:{},options:{},phoneCode:{},picto:{default:"arrow-bottom"},placeholder:{},size:{default:"default"},searchField:{type:Boolean},searchFieldMode:{default:"contains"}},emits:["multiSelected"],setup(I,{emit:N}){const s=I,$=N,S=f(null),c=f([]),h=f(),g=f(null),C=f(""),{id:t,options:D,active:x,phoneCode:G,searchField:E,searchFieldMode:H}=Y(s),{multiSelected:O,toggleListBox:p,close:l,dynamicListboxHeight:R,opened:u,dynamicHeight:V,searches:v,noSearchResult:K,multiValue:_,dynamicOptions:T}=be($,t,D,x,G,E,H,c,h);we(S,()=>l());const U=Z(()=>{let e=!1;return D.value.every(n=>n.parent)&&(e=!0),e}),j=e=>{r()==="readonly"&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.stopPropagation())};ee(u,async()=>{await ue(),R();const{focused:e}=he(h.value,{initialValue:!1});u.value&&s.searchField&&(e.value=!e.value)});const J=()=>{var e,n;return(e=s.dataError)!=null&&e.active&&((n=s.dataError)!=null&&n.message)?C.value:void 0},F=()=>{C.value=g.value.idMessage?g.value.idMessage:"error-message"},Q=()=>{var e;return(e=s.dataError)!=null&&e.active?!0:null},r=()=>s.options.length&&!!s.options[0].optionsList&&s.options[0].optionsList.length?s.active:"disabled";return ae(()=>{F()}),oe(()=>{F()}),(e,n)=>{var M,B,z;return i(),b("div",ve,[m("fieldset",{ref_key:"targetDropdown",ref:S,class:d(["dropdown",[`dropdown--${e.labelPosition}`,{"dropdown--small":e.size=="small"||e.size=="compact","dropdown--medium":e.size=="medium"||e.size=="default","dropdown--disabled":r()==="disabled","dropdown--readonly":r()==="readonly","dropdown--isOpen":a(u),"dropdown--filled":!!a(_),"dropdown--placeholder":!!e.placeholder,"dropdown--error":(M=e.dataError)==null?void 0:M.active}]]),"aria-describedby":J(),"aria-invalid":Q(),"aria-required":e.mandatory||null},[e.label?(i(),b("legend",{key:0,ref:o=>c.value[a(t)]=o,class:d(["dropdown__label",[`dropdown__label--${e.labelPosition}`,{"dropdown__label--mandatory":e.mandatory,"dropdown__label--disabled":r()==="disabled","dropdown__label--readonly":r()==="readonly"}]]),for:a(t)},k(e.label),11,ke)):w("",!0),m("div",{ref:o=>c.value[a(t)]=o,tabindex:r()!=="disabled"?0:-1,class:d(["dropdown__element",[`dropdown__element--${e.labelPosition}`,{"dropdown__element--inside-label":!!e.label&&e.labelPosition==="inside","dropdown__element--inside-no-label":!e.label&&e.labelPosition==="inside","dropdown__element--disabled":r()==="disabled","dropdown__element--readonly":r()==="readonly","dropdown__element--error":(B=e.dataError)==null?void 0:B.active}]]),"aria-disabled":r()==="disabled","aria-readonly":r()==="readonly",onClick:n[0]||(n[0]=(...o)=>a(p)&&a(p)(...o)),onKeydown:[n[1]||(n[1]=y(A((...o)=>a(p)&&a(p)(...o),["prevent"]),["space","enter"])),n[2]||(n[2]=y((...o)=>a(p)&&a(p)(...o),["down","up"])),n[3]||(n[3]=y((...o)=>a(l)&&a(l)(...o),["esc"])),n[4]||(n[4]=y(A((...o)=>a(l)&&a(l)(...o),["shift","exact"]),["tab"]))]},[m("span",Se,[e.placeholder&&!a(_)?(i(),b("span",Ce,k(e.placeholder),1)):w("",!0),m("span",De,k(a(_)),1)]),q(me,{name:e.picto,class:d(["dropdown__picto",{"dropdown__picto--isActive":e.picto==="arrow-bottom"&&a(u)}])},null,8,["name","class"])],42,qe),q(ye,{ref_key:"childMessage",ref:g,message:e.message,error:(z=e.dataError)==null?void 0:z.message,"data-error":e.dataError},null,8,["message","error","data-error"]),q(pe,{name:"lightbox"},{default:ne(()=>[re(m("div",{id:`${a(t)}-lightbox`,ref:o=>c.value[`${a(t)}-lightbox`]=o,class:d(["dropdown__lightbox",{"dropdown__lightbox--noFocus":!a(u)}]),role:"listbox","aria-multiselectable":"true",style:te([e.listboxHeight&&e.listboxHeight>16?{"max-height":e.listboxHeight+"px"}:"",a(V)?{height:a(V)+"px"}:""]),onKeydown:n[6]||(n[6]=y((...o)=>a(l)&&a(l)(...o),["esc"]))},[a(E)?(i(),L(ce,{key:0,id:"idSearch",ref_key:"search",ref:h,modelValue:a(v),"onUpdate:modelValue":n[5]||(n[5]=o=>le(v)?v.value=o:null),class:"dropdown__search",name:"nameSearch",type:"text",label:"Rechercher",icon:"search-loupe",autocomplete:"off"},null,8,["modelValue"])):w("",!0),m("div",{ref:o=>c.value[`${a(t)}-optionsList`]=o,class:d(["dropdown__optionsList",{"dropdown__optionsList--readonly":r()==="readonly"}]),onKeydownCapture:j},[(i(!0),b(ie,null,de(a(T),(o,W)=>(i(),L(fe,{key:`dropdown-${a(t)}-checkboxNesting-${W}`,nesting:e.nesting&&U.value,options:o,"active-group":e.activeGroup,class:d({dropdown__checkboxGroup:!e.nesting,dropdown__checkboxNesting:e.nesting}),color:"quiet",onInput:a(O)},null,8,["nesting","options","active-group","class","onInput"]))),128))],34),a(K)?(i(),b("span",Ve,"Aucun résultat")):w("",!0)],46,Ee),[[se,a(u)]])]),_:1})],10,_e)])}}}),Ne=ge(P,[["__scopeId","data-v-e75f56e2"]]);P.__docgenInfo={exportName:"default",displayName:"DropdownCheckbox",description:"",tags:{},props:[{name:"nesting",required:!1,type:{name:"boolean"}},{name:"active",required:!1,type:{name:"union",elements:[{name:'"disabled"'},{name:'"readonly"'},{name:'"active"'}]},defaultValue:{func:!1,value:"'active'"}},{name:"activeGroup",required:!1,type:{name:"boolean"}},{name:"dataError",required:!1,type:{name:"DataError"}},{name:"id",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"inside"'},{name:'"outside"'}]},defaultValue:{func:!1,value:"'inside'"}},{name:"listboxHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"mandatory",required:!1,type:{name:"boolean"}},{name:"message",required:!1,type:{name:"string"}},{name:"name",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"Group"}]}},{name:"phoneCode",required:!1,type:{name:"string"}},{name:"picto",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'arrow-bottom'"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'},{name:'"regular"'},{name:'"small"'},{name:'"medium"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"searchField",required:!1,type:{name:"boolean"}},{name:"searchFieldMode",required:!1,type:{name:"union",elements:[{name:'"contains"'},{name:'"startswith"'}]},defaultValue:{func:!1,value:"'contains'"}}],events:[{name:"multiSelected"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/Dropdown/Checkbox/DropdownCheckbox.vue"]};export{Ne as S};
