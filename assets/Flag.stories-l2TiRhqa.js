import{_ as s}from"./Flag-CKMlDyvb.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-S_SeJiWS.js";import"./index-Dq8tj7-6.js";const o=`{
  name: string,
  alt?: string
}`,c={title:"Atoms/Flag",argTypes:{country:{description:"The flag to display.",table:{type:{summary:"object",detail:o}},required:!0},lazyload:{description:"Activates lazyloading.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{country:{name:"UA",alt:"Ukraine"},lazyload:!1}},a={render:n=>({components:{SolarisFlag:s},setup(){return{args:n}},template:`<div style="height: 100vh;">
    <SolarisFlag v-bind="args" />
  </div>`})};var e,t,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFlag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisFlag v-bind="args" />
  </div>\`
  })
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["Flag"];export{a as Flag,g as __namedExportsOrder,c as default};
