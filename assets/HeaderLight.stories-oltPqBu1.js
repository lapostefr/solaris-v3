import{t as i,d as l,b as p,c as m}from"./templateContent-DLcvstf4.js";import{S as d,a as g}from"./Logo-C93GeenA.js";import{S as c,a as u}from"./HeaderSecure-B4EywhUV.js";import{S as h}from"./Progress-BmNKHvtK.js";import{r as L}from"./vue.esm-bundler-BIhSTzsT.js";import{a as y}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-Bjhj7hjj.js";import"./BackLink-BjtG7DZ3.js";import"./Icon-DZ5u0r7n.js";import"./LogoNew-sW4UQnxF.js";import"./v4-CQkTLCs1.js";const S=[{title:"Label",state:"done"},{title:"Label",state:"current"},{title:"Label",state:"pending"},{title:"Label",state:"pending"}],w={title:"Organisms/Header/Light",argTypes:{altLogo:{description:"Specifies the alternative text for the logo.",table:{type:{summary:"string"},defaultValue:{summary:"La Poste, aller à l'accueil"}}},backTitle:{description:"Text for the backlink.",table:{type:{summary:"string"}}},helpLink:{description:"Url for the backlink icon.",table:{type:{summary:"string"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"].join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{altLogo:"La Poste aller à l'acceuil",backTitle:"Texte du lien",helpLink:"#",universe:"single"}},e={render:o=>({components:{SolarisHeader:d,SolarisLogo:g,SolarisHeaderLight:c,SolarisHeaderSecure:u,SolarisProgress:h},setup(){const n=L(S),s=y("logoClicked");return{args:o,progressArray:n,handleLogoClick:s}},template:`<div style="height: 1000px; margin: -1rem;">
    <SolarisHeader v-bind="args">
      <template #headerTop>
        ${i}
      </template>

    ${l}

    <template #headerBottom>
      ${p}
    </template>
    </SolarisHeader>
    <div style="color: #949494;">
      ${m}
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
      const handleLogoClick = action('logoClicked');
      return {
        args,
        progressArray,
        handleLogoClick
      };
    },
    template: \`<div style="height: 1000px; margin: -1rem;">
    <SolarisHeader v-bind="args">
      <template #headerTop>
        \${templateHeaderTop}
      </template>

    \${templateHeaderLighContent}

    <template #headerBottom>
      \${templateHeaderBottom}
    </template>
    </SolarisHeader>
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const J=["Light"];export{e as Light,J as __namedExportsOrder,w as default};
