import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d,a as n}from"./OrderSummary-COyD-Yhx.js";import{S as u}from"./OrderSummaryLayout-DYYUYEDl.js";import{S as c}from"./Modal-BH_SZZwx.js";import{S as h}from"./LogoNew-DYFS87vx.js";import{S as y}from"./Checkbox-Cglt47Yd.js";import{b as g,h as s,p as i}from"./price-dFDXtPxN.js";import{s as l}from"./steps-CcnTCYaS.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-S_SeJiWS.js";import"./Divider-uTtlcEs0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-CRdhf1Nz.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Icon-D8mvpj6W.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./Container-4mOEeQBe.js";import"./Logo-CeIKYGiJ.js";import"./logo-Bjhj7hjj.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";import"./colissimo-B7reKzCB.js";const A={title:"Molecules/Order Summary",argTypes:g,args:{button:"Button",buttonDivider:!0,btnFullWidth:!1,displayCloseModalButton:!1,emptySpaceBottom:{active:!0},header:s,hasHeader:!1,image:{width:100,height:100,otherSources:[],defaultSource:{url:"https://picsum.photos/id/312/100/100",alt:"honey",mimeType:"image/jpeg"}},isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showDetails:!0,showMobileDetails:!1,steps:l,StepBtnFullWidth:!1,stickyDesktop:"block",stickyMobile:!1}},e={render:m=>({components:{SolarisOrderSummary:d,SolarisModal:c,SolarisSummaryStep:n,SolarisLogo:h,SolarisCheckbox:y,SolarisOrderSummaryLayout:u},setup(){const p=t("Next Step"),S=t("Step Icon");return{args:m,elementNext:p,elementStep:S}},template:`<SolarisOrderSummaryLayout sidebar="right" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
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
  </SolarisOrderSummaryLayout>`}),args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!1,emptySpaceBottom:{active:!0},header:s,hasHeader:!1,image:{width:100,height:100,otherSources:[],defaultSource:{url:"https://picsum.photos/id/312/100/100",alt:"honey",mimeType:"image/jpeg"}},isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showMobileDetails:!1,steps:l,stickyDesktop:"block",stickyMobile:!1}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary,
      SolarisModal,
      SolarisSummaryStep,
      SolarisLogo,
      SolarisCheckbox,
      SolarisOrderSummaryLayout
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
    template: \`<SolarisOrderSummaryLayout sidebar="right" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
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
    displayCloseModalButton: false,
    emptySpaceBottom: {
      active: true
    },
    header: header,
    hasHeader: false,
    image: {
      width: 100,
      height: 100,
      otherSources: [],
      defaultSource: {
        url: 'https://picsum.photos/id/312/100/100',
        alt: 'honey',
        mimeType: 'image/jpeg'
      }
    },
    isLoading: false,
    hiddenButton: false,
    nextStepDisabled: false,
    price: price,
    showMobileDetails: false,
    steps: steps,
    stickyDesktop: 'block',
    stickyMobile: false
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const K=["SidebarRight"];export{e as SidebarRight,K as __namedExportsOrder,A as default};
