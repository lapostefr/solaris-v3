import{S as a}from"./Footer-BcoQwRox.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Container-Cohd6eky.js";import"./FooterBottom-DWo4stQO.js";import"./LogoNew-BZoFKVWd.js";const i=`[
  {
    url: string;
    text: string
  }
]`,s=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],y={title:"Organisms/Footer",argTypes:{moreLinks:{description:"Adds links to the default list.",table:{type:{summary:"array",detail:i}}},newLogo:{description:"Show the design of the new footer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"].join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{moreLinks:s,newLogo:!1,universe:"part"}},e={render:n=>({components:{SolarisFooter:a},setup(){return{args:n}},template:`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" />
  </div>
  `}),args:{moreLinks:s,newLogo:!1,universe:"part"}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const f=["Footer"];export{e as Footer,f as __namedExportsOrder,y as default};
