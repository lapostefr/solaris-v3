import{S as s}from"./Loader-DlskW7bR.js";import"./vue.esm-bundler-BQVOD3cV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"Atoms/Loader",parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{color:{description:"Deprecated Color for the Loader",table:{type:{summary:"string"}},control:{type:"select"},options:["emphasis","quiet","default","vsmp","danger","orange","comet"]},componentStyle:{description:"NEW Color for the Loader",table:{type:{summary:"string"}},control:{type:"select"},options:["default","accent","neutral"]}},args:{color:"default",componentStyle:"default"}},e={render:a=>({components:{SolarisLoader:s},setup(){return{args:a}},template:`<div :style="{ width: '100px' }"><SolarisLoader v-bind="args" /></div>`}),args:{color:"default"}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisLoader
    },
    setup() {
      return {
        args
      };
    },
    template: '<div :style="{ width: \\'100px\\' }"><SolarisLoader v-bind="args" /></div>'
  }),
  args: {
    color: 'default'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const i=["LoaderStory"];export{e as LoaderStory,i as __namedExportsOrder,l as default};
