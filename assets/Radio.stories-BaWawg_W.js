import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Radio-D90bWRQi.js";import{r as m}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Atoms/Radio/Default",argTypes:{aria:{description:"Aria attributes for accessibility.",table:{type:{summary:"object",detail:"key (string) : string"}},control:"object"},colorStyle:{description:"Colors of the radio button.",table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},disabled:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},error:{description:"Shows that a selection exists.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},id:{description:"The Radio id.",table:{type:{summary:"string"}},required:!0},name:{description:"The Radio name.",table:{type:{summary:"string"}},required:!0},value:{description:"The Radio value.",table:{type:{summary:"string"}},required:!0},type:{description:'*Colors of the radio button. <span style="color:orange">This prop is deprecated</span>*. Use the colorStyle prop instead. ',table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"},category:"Deprecated"},control:{type:"select"},options:["emphasis","default","quiet"]}},args:{aria:{label:"test"},disabled:!1,error:!1,id:"monId",name:"name",colorStyle:"emphasis",value:"test",type:"emphasis"}},e={render:o=>({components:{SolarisRadio:n},setup(){const r=m(null),i=l("input");return{args:o,elementChange:i,model:r}},template:`<div>
    <SolarisRadio v-model="model" v-bind="args" @input="elementChange">
      Radiobutton label
    </SolarisRadio>
    </div>`}),args:{aria:{label:"test"},disabled:!1,error:!1,id:"monId",name:"name",colorStyle:"emphasis",value:"test",type:"emphasis"}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadio
    },
    setup() {
      const model = ref(null);
      const elementChange = action('input');
      return {
        args,
        elementChange,
        model
      };
    },
    template: \`<div>
    <SolarisRadio v-model="model" v-bind="args" @input="elementChange">
      Radiobutton label
    </SolarisRadio>
    </div>\`
  }),
  args: {
    aria: {
      label: 'test'
    },
    disabled: false,
    error: false,
    id: 'monId',
    name: 'name',
    colorStyle: 'emphasis',
    value: 'test',
    // |-- Deprecated
    type: 'emphasis'
    // Deprecated --|
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,b as default};
