import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./EServiceCard-Ct-ttrLd.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-LmhyBlqB.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";const l=`{
  width?: number,
  height?: number,
  defaultSource: {
    alt?: string,
    url: string,
    mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  },
  otherSources: [
    {
      alt?: string,
      url: string,
      mimeType: image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
      device?: 320 | 640 | 992 | 1280 | 1440 | 1680
    }
  ],
  lazyload?: boolean
}`,t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor massa, placerat in interdum volutpat, mollis sed nulla. Nulla tincidunt volutpat quam at accumsan. Duis quis velit molestie, porta turpis id, auctor augue. Cras nibh turpis, consectetur quis orci sed, ultrices iaculis sapien.",C={title:"Organisms/E Service Card",argTypes:{button:{description:"Text of the button.",table:{type:{summary:"string"}}},category:{description:"EService title",table:{type:{summary:"string"}}},categoryColor:{description:"Choose the colors of the category",table:{type:{summary:"string"},defaultValue:{summary:"dark-grey"}},required:!0,control:{type:"select"},options:["dark-grey","cobalt","nebula-blue","nebula-blue-darker","brand-vsmp-blue-dark","brand-vsmp-purple-dark","info-dark","promo","omega-pink-dark","comet","comet-darker","success-dark","colissimo-darker"]},categoryLink:{description:"Ulr to the complete EService",table:{type:{summary:"string"}},required:!0},description:{description:"Describe the EService",table:{type:{summary:"string"}}},full:{description:"Fill the entire space.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},image:{description:"The image display at the top of the component.",table:{type:{summary:"object",detail:l}}},picto:{description:"The picto after the price.",table:{type:{summary:"string"}}},price:{description:"The price of the component.",table:{type:{summary:"string"}}},size:{description:"The size of the Card",table:{type:{summary:"string"},defaultValue:{summary:"responsive"}},control:{type:"select"},options:["responsive","xs","s","m","l","xl"]},tag:{description:"Text of the tag.",table:{type:{summary:"string"}}}},args:{button:"Accéder",category:t,categoryColor:"dark-grey",categoryLink:"##",description:t,full:!0,picto:"arrow-large-right",price:"à partir de X,XX €",size:"responsive",tag:"Tag"}},e={render:o=>({components:{SolarisEServiceCard:n},setup(){const s=c("clicked");return{args:o,elementClick:s}},template:'<div style="display: flex; justify-content: center; align-items: center; margin: auto; width: 320px; max-width: 100%; height: 100vh;"><SolarisEServiceCard v-bind="args" @clicked="elementClick"/></div>'}),args:{button:"Accéder",category:t,categoryColor:"dark-grey",categoryLink:"##",description:t,full:!0,picto:"arrow-large-right",price:"à partir de X,XX €",size:"responsive",tag:"Tag"}};var r,i,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisEServiceCard
    },
    setup() {
      const elementClick = action('clicked');
      return {
        args,
        elementClick
      };
    },
    template: '<div style="display: flex; justify-content: center; align-items: center; margin: auto; width: 320px; max-width: 100%; height: 100vh;">' + '<SolarisEServiceCard v-bind="args" @clicked="elementClick"/>' + '</div>'
  }),
  args: {
    button: 'Accéder',
    category: lorem,
    categoryColor: 'dark-grey',
    categoryLink: '##',
    description: lorem,
    full: true,
    // image: image,
    picto: 'arrow-large-right',
    price: 'à partir de X,XX €',
    size: 'responsive',
    tag: 'Tag'
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["EServiceCard"];export{e as EServiceCard,S as __namedExportsOrder,C as default};
