import{S as s}from"./Badge-CbFbL-jh.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["pink","grey","yellow","green","purple","maroon","dark-blue","dodger-blue","success","promo","supernova","neutral","cobalt","info"],i=["default","compact"],g={title:"Atoms/Badge/Badge",argTypes:{color:{description:"The colors of the text and background for the badge.",table:{type:{summary:"string"}},defaultValue:{summary:"cobalt"},control:{type:"select"},options:n},icon:{description:"Optional icon before the text.",table:{type:{summary:"string"}},control:"text"},size:{description:"The size for the badge : size and weight for text, line-height and padding.",table:{type:{summary:"string"}},defaultValue:{summary:"default"},control:{type:"select"},options:i}},args:{color:"cobalt",icon:"action-check",size:"default"}},e={render:r=>({components:{SolarisBadge:s},setup(){return{args:r}},template:'<SolarisBadge v-bind="args">Badge</SolarisBadge>'})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisBadge v-bind="args">Badge</SolarisBadge>'
  })
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Badge"];export{e as Badge,m as __namedExportsOrder,g as default};
