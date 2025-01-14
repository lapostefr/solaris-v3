import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./OrderSummary-BiaOi3pi.js";import{a as d,h as s,p as l}from"./price-dFDXtPxN.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Divider-8H8YcS_F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-BTt4q-w2.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";import"./Icon-R0HSrbr6.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./Modal-NRfyb4RI.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";import"./colissimo-B7reKzCB.js";const I={title:"Molecules/Order Summary",argTypes:d,args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:s,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:l,showMobileDetails:!1,StepBtnFullWidth:!1,stickyMobile:!1}},e={render:i=>({components:{SolarisOrderSummary:m},setup(){const n=t("Next Step"),p=t("Step Icon");return{args:i,elementNext:n,elementStep:p}},template:`
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
  `}),args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:s,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:l,showMobileDetails:!1,StepBtnFullWidth:!1,stickyMobile:!1}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary
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
    StepBtnFullWidth: false,
    stickyMobile: false
    // titleTag: ''
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const v=["OrderSummary"];export{e as OrderSummary,v as __namedExportsOrder,I as default};
