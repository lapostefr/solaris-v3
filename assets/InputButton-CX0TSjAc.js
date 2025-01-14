import{m as g,x as m,y as q,r as d,c as v,o as B,B as x,G as p,v as _,C as V,t as S,H as T}from"./vue.esm-bundler-BV06ZB-3.js";import{S as I}from"./Input-B2dYoFF6.js";import{S as k}from"./Button-DIKv7yJx.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=g({__name:"InputButton",props:m({cancelText:{default:"Annuler"},initButtonState:{type:Boolean},validateText:{default:"Valider"},dataError:{},mobileLabel:{},aria:{},autocomplete:{},autofocus:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},hideLabel:{type:Boolean},icon:{},id:{},inputRefStr:{},isQuiet:{type:Boolean},label:{},labelPosition:{},mandatory:{type:Boolean},message:{},max:{},maxlength:{},min:{},name:{},numericonly:{type:Boolean},placeholder:{},readonly:{type:Boolean},size:{default:"default"},success:{type:Boolean},suggestions:{},type:{default:"text"},tooltip:{},unit:{},value:{}},{modelValue:{},modelModifiers:{}}),emits:m(["input","buttonClicked"],["update:modelValue"]),setup(l,{emit:y}){const n=l,o=y,r=q(l,"modelValue"),a=d(!1),u=d(!1),s=v(()=>{let e="primary",t=n.validateText;return a.value&&(e="secondary",t=n.cancelText),{type:e,name:t}}),c=e=>{o("input",e)},i=()=>{u.value?a.value=!a.value:(a.value=n.initButtonState,u.value=!0),o("buttonClicked",a.value)};return i(),(e,t)=>(B(),x(I,T({modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=b=>r.value=b)},e.$props,{onInput:c}),{inputRight:p(()=>[_(k,{class:"input__button",type:s.value.type,disabled:e.disabled,size:"small",color:"darkgrey",onClick:i},{default:p(()=>[V(S(s.value.name),1)]),_:1},8,["type","disabled"])]),_:1},16,["modelValue"]))}}),C=h(f,[["__scopeId","data-v-4caf67bd"]]);f.__docgenInfo={exportName:"default",displayName:"InputButton",description:"",tags:{},props:[{name:"cancelText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Annuler'"}},{name:"initButtonState",required:!1,type:{name:"boolean"}},{name:"validateText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Valider'"}},{name:"dataError",required:!1,type:{name:"DataErrorType"}},{name:"mobileLabel",required:!1,type:{name:"string"}},{name:"aria",required:!1,type:{name:`{
  [key: string]: string
}`}},{name:"autocomplete",required:!1,type:{name:"string"}},{name:"autofocus",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"error",required:!1,type:{name:"boolean"}},{name:"hideLabel",required:!1,type:{name:"boolean"}},{name:"icon",required:!1,type:{name:"string"}},{name:"id",required:!0,type:{name:"string"}},{name:"inputRefStr",required:!1,type:{name:"string"}},{name:"isQuiet",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"LabelPosition"}},{name:"mandatory",required:!1,type:{name:"boolean"}},{name:"message",required:!1,type:{name:"string"}},{name:"max",required:!1,type:{name:"number"}},{name:"maxlength",required:!1,type:{name:"number"}},{name:"min",required:!1,type:{name:"number"}},{name:"name",required:!0,type:{name:"string"}},{name:"numericonly",required:!1,type:{name:"boolean"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"success",required:!1,type:{name:"boolean"}},{name:"suggestions",required:!1,type:{name:"Array",elements:[{name:"SuggestionType"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"number"'},{name:'"email"'},{name:'"tel"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"tooltip",required:!1,type:{name:"string"}},{name:"unit",required:!1,type:{name:"UnitProp"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"inputRef",defaultValue:{func:!1,value:"'input'"}}],events:[{name:"input"},{name:"buttonClicked"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/atoms/TextInput/Button/InputButton.vue"]};const z=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{C as S,z as _};
