import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./OrderSummary-CRKvP9_w.js";import{S as d}from"./LogoNew-D5o3A8WB.js";import{S as u}from"./Checkbox-Bz21hexC.js";import{a as c,h as s,p as i}from"./price-dFDXtPxN.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BQVOD3cV.js";import"./Divider-OimMS3jy.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-iFfEkxpL.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Icon-CNTEbVSX.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./Modal-DbigVfOb.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./colissimo-B7reKzCB.js";const J={title:"Molecules/Order Summary",argTypes:c,args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:s,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showMobileDetails:!1,stickyMobile:!1}},e={render:l=>({components:{SolarisOrderSummary:p,SolarisLogo:d,SolarisCheckbox:u},setup(){const m=t("Next Step"),n=t("Step Icon");return{args:l,elementNext:m,elementStep:n}},template:`
  <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
    <template #logo>
      <SolarisLogo :type="'regular'" />
    </template>
    <template #checkbox>
      <SolarisCheckbox name="storybook" id="checkboxId">
        J’ai lu et j’accepte les Conditions Générales de Vente de La Boutique.
      </SolarisCheckbox>
    </template>
  </SolarisOrderSummary>
  `}),args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:s,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showMobileDetails:!1,stickyMobile:!1}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary,
      SolarisLogo,
      SolarisCheckbox
    },
    setup() {
      const elementNext = action('Next Step');
      const elementStep = action('Step Icon');
      return {
        args,
        elementNext,
        elementStep
      };
    },
    template: \`
  <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
    <template #logo>
      <SolarisLogo :type="'regular'" />
    </template>
    <template #checkbox>
      <SolarisCheckbox name="storybook" id="checkboxId">
        J’ai lu et j’accepte les Conditions Générales de Vente de La Boutique.
      </SolarisCheckbox>
    </template>
  </SolarisOrderSummary>
  \`
  }),
  args: {
    button: 'Button',
    buttonDivider: true,
    // btnFullWidth: false,
    displayCloseModalButton: true,
    header: header,
    // image: image,
    isLoading: false,
    hiddenButton: false,
    nextStepDisabled: false,
    price: price,
    // showDetails: true,
    showMobileDetails: false,
    // steps: steps,
    stickyMobile: false
    // titleTag: ''
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const V=["OrderSummary"];export{e as OrderSummary,V as __namedExportsOrder,J as default};
