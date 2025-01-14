import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u,a as S}from"./OrderSummary-BiaOi3pi.js";import{S as c}from"./Modal-NRfyb4RI.js";import{b as y,h as s,p as l}from"./price-dFDXtPxN.js";import{i,s as m}from"./steps-D4vHbEjA.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Divider-8H8YcS_F.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-BTt4q-w2.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";import"./Icon-R0HSrbr6.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";import"./colissimo-B7reKzCB.js";const T={title:"Molecules/Order Summary",argTypes:y,args:{button:"Button",buttonDivider:!0,btnFullWidth:!1,displayCloseModalButton:!0,emptySpaceBottom:{active:!0,height:40},hasHeader:!1,header:s,image:i,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:l,showDetails:!0,showMobileDetails:!1,steps:m,StepBtnFullWidth:!1,stickyDesktop:"block",stickyMobile:!1,titleTag:""}},e={render:p=>({components:{SolarisOrderSummary:u,SolarisSummaryStep:S,SolarisModal:c},setup(){const n=t("Next Step"),d=t("Step Icon");return{args:p,elementNext:n,elementStep:d}},template:`<SolarisOrderSummaryLayout sidebar="left" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args"  @nextStep="elementNext" @stepIcon="elementStep">
      <template #logo>
        <SolarisLogo :type="'regular'" />
      </template>
      <template #checkbox>
        <SolarisCheckbox name="storybook" id="checkboxId">
          J’ai lu et j’accepte les Conditions Générales de Vente de La
          Boutique.
        </SolarisCheckbox>
      </template>
    </SolarisOrderSummary>
  </SolarisOrderSummaryLayout>`}),args:{button:"Button",buttonDivider:!0,btnFullWidth:!1,displayCloseModalButton:!0,emptySpaceBottom:{active:!0,height:40},hasHeader:!1,header:s,image:i,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:l,showDetails:!0,showMobileDetails:!1,steps:m,StepBtnFullWidth:!1,stickyDesktop:"block",stickyMobile:!1,titleTag:""}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary,
      SolarisSummaryStep,
      SolarisModal
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
    template: \`<SolarisOrderSummaryLayout sidebar="left" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args"  @nextStep="elementNext" @stepIcon="elementStep">
      <template #logo>
        <SolarisLogo :type="'regular'" />
      </template>
      <template #checkbox>
        <SolarisCheckbox name="storybook" id="checkboxId">
          J’ai lu et j’accepte les Conditions Générales de Vente de La
          Boutique.
        </SolarisCheckbox>
      </template>
    </SolarisOrderSummary>
  </SolarisOrderSummaryLayout>\`
  }),
  args: {
    button: 'Button',
    buttonDivider: true,
    btnFullWidth: false,
    displayCloseModalButton: true,
    emptySpaceBottom: {
      active: true,
      height: 40
    },
    hasHeader: false,
    header: header,
    image: image,
    isLoading: false,
    hiddenButton: false,
    nextStepDisabled: false,
    price: price,
    showDetails: true,
    showMobileDetails: false,
    steps: steps,
    StepBtnFullWidth: false,
    stickyDesktop: 'block',
    stickyMobile: false,
    titleTag: ''
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const H=["SidebarLeft"];export{e as SidebarLeft,H as __namedExportsOrder,T as default};
