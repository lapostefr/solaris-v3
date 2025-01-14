import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as l,a as p}from"./details-Dlf24xuS.js";import{o as c}from"./options-nvNyIa8k.js";import{S as a}from"./CheckboxGroup-Bc-SERGa.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Checkbox-1Ng9DjFN.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Atoms/Checkbox/Group",component:a,argTypes:{options:{description:"The list of checkbox. ",table:{type:{summary:"object",detail:l}},required:!0},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet","error"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:p}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},layout:{description:"The checkbox group layout.",table:{type:{summary:["vertical","vertical nested","horizontal"].join(" | ")},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","vertical nested","horizontal"]},error:{description:'Show an error checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"},nesting:{description:'Checkbox nesting if is true. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,layout:"vertical",nesting:!1,options:c}},e={render:s=>({components:{SolarisCheckboxGroup:a},setup(){const n=i("input");return{args:s,inputElement:n}},template:`<div>
    <SolarisCheckboxGroup v-bind="{...args}" @input="inputElement"></SolarisCheckboxGroup>
    </div>`})};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckboxGroup
    },
    setup() {
      const inputElement = action('input');
      return {
        args,
        inputElement
      };
    },
    template: \`<div>
    <SolarisCheckboxGroup v-bind="{...args}" @input="inputElement"></SolarisCheckboxGroup>
    </div>\`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const k=["Group"];export{e as Group,k as __namedExportsOrder,v as default};
