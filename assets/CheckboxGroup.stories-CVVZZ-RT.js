import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as p,a as n,b as m}from"./details-Ba4RGeTH.js";import{o as d}from"./options-BqvALU3E.js";import{S as s}from"./CheckboxGroup-DkCNss51.js";import{r as u,w as b}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./Checkbox-Bz21hexC.js";import"./Message-COM7xYSp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";const j={title:"Atoms/Checkbox/Group",component:s,argTypes:{aria:{description:"Objet containing custom aria attributes to be applied to the fieldset.",table:{type:{summary:"object",detail:p}},control:"object"},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet","error"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:n}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},layout:{description:"The checkbox group layout.",table:{type:{summary:["vertical","vertical nested","horizontal"].join(" | ")},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","vertical nested","horizontal"]},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{summary:"string"}},options:{description:"The list of checkbox. ",table:{type:{summary:"object",detail:m}}},error:{description:'Show an error checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"},nesting:{description:'Checkbox nesting if is true. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"}},args:{aria:{describedby:"info-text-id"},color:"emphasis",dataError:{active:!1,message:"Message d'erreur"},disabled:!1,error:!1,layout:"vertical",message:"Voilà le message",nesting:!1,options:d}},e={render:i=>({components:{SolarisCheckboxGroup:s},setup(){const o=u(["checkbox-id-1","checkbox-id-3"]);return b(()=>o.value,l=>{c("update")(l)}),{args:i,model:o}},template:'<SolarisCheckboxGroup v-bind="{...args}" v-model="model"></SolarisCheckboxGroup>'})};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckboxGroup
    },
    setup() {
      const model = ref(['checkbox-id-1', 'checkbox-id-3']);
      watch(() => model.value, (value: any) => {
        action('update')(value);
      });
      return {
        args,
        model
      };
    },
    template: '<SolarisCheckboxGroup v-bind="{...args}" v-model="model"></SolarisCheckboxGroup>'
  })
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const V=["Group"];export{e as Group,V as __namedExportsOrder,j as default};
