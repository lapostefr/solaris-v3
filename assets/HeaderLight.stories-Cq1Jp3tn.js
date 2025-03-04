import{t as o,d as i,b as l,c as p}from"./templateContent-CRXX3PUE.js";import{S as m,a as d}from"./Logo-CqEOlebH.js";import{S as g,a as c}from"./HeaderSecure-CkRgOdTe.js";import{S as u}from"./Progress-miKdCIR6.js";import{r as h}from"./vue.esm-bundler-DbnnIJWB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-Bjhj7hjj.js";import"./BackLink-CgE1ethG.js";import"./Icon-BFYv-dj3.js";import"./LogoNew-BZoFKVWd.js";const L=[{title:"Label",state:"done"},{title:"Label",state:"current"},{title:"Label",state:"pending"},{title:"Label",state:"pending"}],A={title:"Organisms/Header/Light",argTypes:{backTitle:{description:"Text for the backlink.",table:{type:{summary:"string"}}},helpLink:{description:"Url for the backlink icon.",table:{type:{summary:"string"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"].join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{backTitle:"Texte du lien",helpLink:"#",universe:"single"}},e={render:n=>({components:{SolarisHeader:m,SolarisLogo:d,SolarisHeaderLight:g,SolarisHeaderSecure:c,SolarisProgress:u},setup(){const s=h(L);return{args:n,progressArray:s}},template:`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeaderLight v-bind="args">
    <template #headerTop>
      ${o}
    </template>

    ${i}

    <template #headerBottom>
      ${l}
    </template>
  </SolarisHeaderLight>
  <div style="color: #949494;">
    ${p}
  </div>
  </div>`}),args:{backTitle:"Texte du lien",helpLink:"#",newLogo:!0,universe:"single"}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeader,
      SolarisLogo,
      SolarisHeaderLight,
      SolarisHeaderSecure,
      SolarisProgress
    },
    setup() {
      const progressArray = ref(progressArrayJson);
      return {
        args,
        progressArray
      };
    },
    template: \`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeaderLight v-bind="args">
    <template #headerTop>
      \${templateHeaderTop}
    </template>

    \${templateHeaderLighContent}

    <template #headerBottom>
      \${templateHeaderBottom}
    </template>
  </SolarisHeaderLight>
  <div style="color: #949494;">
    \${templatePageContent}
  </div>
  </div>\`
  }),
  args: {
    backTitle: 'Texte du lien',
    helpLink: '#',
    newLogo: true,
    universe: 'single'
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const B=["Light"];export{e as Light,B as __namedExportsOrder,A as default};
