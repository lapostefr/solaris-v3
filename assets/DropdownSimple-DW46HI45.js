import{d as u,m as p,a as m,r as c,c as f,b,u as h,o as v}from"./vue.esm-bundler-BHwbD8xO.js";import{S as g}from"./Dropdown-DOCK4iP_.js";import{A as y,b as S,S as q,a as V}from"./Input-CfpJPdR5.js";const F=u({__name:"DropdownSimple",props:p({active:{default:y.active},dataError:{},id:{},label:{},labelPosition:{},listboxHeight:{default:0},message:{},picto:{default:"arrow-bottom"},options:{},placeholder:{},size:{default:S.default},searchField:{type:Boolean},searchFieldMode:{default:q.contains}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const r=t,i=m(t,"modelValue"),o=c(""),s=f(()=>[{optionsList:r.options.map((a,l)=>({id:`${o.value}-option-${l}`,radioName:`${o.value}-option-${l}`,value:a.value,label:a.label,checked:n(a.value,i.value),disabled:a.disabled}))}]),n=(e,a)=>typeof e!=typeof a?!1:typeof e=="object"?JSON.stringify(e)===JSON.stringify(a):e===a,d=()=>Date.now().toString(36)+Math.random().toString(36).substring(2);return o.value=r.id||d(),(e,a)=>(v(),b(g,{id:o.value,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),name:o.value,label:e.label,"label-position":e.labelPosition,placeholder:e.placeholder,picto:e.picto,"selection-type":h(V).simple,"listbox-height":e.listboxHeight,"active-group":!1,options:s.value,active:e.active,size:e.size,"search-field":e.searchField,"search-field-mode":e.searchFieldMode,message:e.message,"data-error":e.dataError},null,8,["id","modelValue","name","label","label-position","placeholder","picto","selection-type","listbox-height","options","active","size","search-field","search-field-mode","message","data-error"]))}});F.__docgenInfo={exportName:"default",displayName:"DropdownSimple",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"Active"},defaultValue:{func:!1,value:"Active.active"}},{name:"dataError",required:!1,type:{name:"DataError"}},{name:"id",required:!1,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"LabelPosition"}},{name:"listboxHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"message",required:!1,type:{name:"string"}},{name:"picto",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'arrow-bottom'"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"OptionStart"}]}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"Size"},defaultValue:{func:!1,value:"Size.default"}},{name:"searchField",required:!1,type:{name:"boolean"}},{name:"searchFieldMode",required:!1,type:{name:"SearchFieldMode"},defaultValue:{func:!1,value:"SearchFieldMode.contains"}}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/Dropdown/Simple/DropdownSimple.vue"]};export{F as _};
