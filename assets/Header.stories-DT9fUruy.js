import{t as n,a as s,b as i,c as m}from"./templateContent-CRXX3PUE.js";import{S as p,a as l}from"./Logo-Du_83wkA.js";import{S as d,a as S}from"./HeaderSecure-CNjsNT6V.js";import{S as c}from"./Progress-CW8tjPXO.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-Bjhj7hjj.js";import"./BackLink-C7dKA6Rc.js";import"./Icon-LmhyBlqB.js";import"./LogoNew-Dajnl_kr.js";const T={title:"Organisms/Header/Simple",argTypes:{isSticky:{description:"Make header sticky.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:{type:"boolean"}}},args:{isSticky:!0}},e={render:o=>({components:{SolarisHeader:p,SolarisLogo:l,SolarisHeaderLight:d,SolarisHeaderSecure:S,SolarisProgress:c},setup(){return{args:o}},template:`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      ${n}
    </template>

   ${s}

    <template #headerBottom>
    ${i}
    </template>
  </SolarisHeader>

  <div style="color: #949494;">
    ${m}
  </div>
  </div>`}),args:{isSticky:!0}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeader,
      SolarisLogo,
      SolarisHeaderLight,
      SolarisHeaderSecure,
      SolarisProgress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      \${templateHeaderTop}
    </template>

   \${templateHeaderContent}

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
    isSticky: true
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["Simple"];export{e as Simple,x as __namedExportsOrder,T as default};
