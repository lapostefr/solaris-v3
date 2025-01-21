import{S as e}from"./StatusLight-DthU6ajy.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["error","success","warning","quiet","informational"],c={title:"Atoms/Badge/Status Light",component:e,argTypes:{color:{description:"The colors of the text and background for the status.",table:{type:{summary:"string"}},defaultValue:{summary:"quiet"},control:{type:"select"},options:n}},args:{color:"quiet"}},t={render:o=>({components:{SolarisStatusLight:e},setup(){return{args:o}},template:`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStatusLight v-bind="args">Status</SolarisStatusLight>
  </div>`}),args:{color:"quiet"}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisStatusLight
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStatusLight v-bind="args">Status</SolarisStatusLight>
  </div>\`
  }),
  args: {
    color: 'quiet'
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const l=["StatusLight"];export{t as StatusLight,l as __namedExportsOrder,c as default};
