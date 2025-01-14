import{S as a}from"./Footer-X2o_RhRG.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterBottom-BcL4c5Ha.js";import"./Picture-BTt4q-w2.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";import"./LogoNew-tJgIKI_q.js";const i=`[
  {
    url: string;
    text: string
  }
]`,s=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],v={title:"Organisms/Footer",argTypes:{moreLinks:{description:"Adds links to the default list.",table:{type:{summary:"array",detail:i}}},newLogo:{description:"Show the design of the new footer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"].join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{moreLinks:s,newLogo:!1,universe:"part"}},r={render:n=>({components:{SolarisFooter:a},setup(){return{args:n}},template:`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" />
  </div>
  `}),args:{moreLinks:s,newLogo:!1,universe:"part"}};var e,o,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" />
  </div>
  \`
  }),
  args: {
    moreLinks: moreLinks,
    newLogo: false,
    universe: 'part'
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const F=["Footer"];export{r as Footer,F as __namedExportsOrder,v as default};
