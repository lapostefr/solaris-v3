import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./RadioGroup-B3R1mj47.js";import{r as p}from"./vue.esm-bundler-BHwbD8xO.js";import{o as m}from"./optionsGroup-BeSfFgL2.js";import"./v4-CQkTLCs1.js";import"./Radio-CJnrNu4K.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-DPOzJEtM.js";const d=`{
  groupName: string (deprecated),
  legend: string,
  optionsList: [
    id: string,
    name: string,
    value: string,
    val?: string
  ]
}`,u=`{
  active: boolean,
  message: string
}`,G={title:"Atoms/Radio/Group",argTypes:{colorStyle:{description:"Colors of the radio button.",table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:u}},control:{type:"object"}},disabled:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},layout:{description:"The radio buttons group layout.",table:{type:{summary:["vertical","horizontal"].join(" | ")},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","horizontal"]},mandatory:{description:"Make the Radio Group mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},options:{description:"The list of radios.",table:{type:{summary:"object",detail:d}},required:!0},type:{description:'*Colors of the radio button. <span style="color:orange">This prop is deprecated</span>*. Use the colorStyle prop instead. ',table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"},category:"Deprecated"},control:{type:"select"},options:["emphasis","default","quiet"]}}},e={render:r=>({components:{SolarisRadioGroup:n},setup(){const s=p("option1-id"),i=l("input");return{args:r,model:s,elementChange:i}},template:'<SolarisRadioGroup v-model="model" v-bind="args" @input="elementChange" />'}),args:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",options:m,type:"default"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadioGroup
    },
    setup() {
      const model = ref('option1-id');
      const elementChange = action('input');
      return {
        args,
        model,
        elementChange
      };
    },
    template: '<SolarisRadioGroup v-model="model" v-bind="args" @input="elementChange" />'
  }),
  args: {
    colorStyle: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    layout: 'vertical',
    options: options,
    type: 'default'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const C=["Group"];export{e as Group,C as __namedExportsOrder,G as default};
