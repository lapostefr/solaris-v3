import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Tips-CIRk0ErQ.js";import{b as c}from"./argsType-D0HmcrBh.js";import{r as m}from"./vue.esm-bundler-BHwbD8xO.js";import"./v4-CQkTLCs1.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useTips-BOECcAvL.js";import"./generateId-DPOzJEtM.js";const T={title:"Molecules/Tips",argTypes:c,args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",links:[{label:"Link 1",url:"https://www.google.com"},{label:"Link 2",url:"https://www.google.com"}],title:"Title of tips notification",titleLevel:"h3"}},e={render:l=>({components:{SolarisTips:n},setup(){const a=m(l.isOpen),r=s("Click"),p=s("Collapse");return{args:l,elementClick:r,elementCollapse:p,isOpenValue:a}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick" @collapse="elementCollapse">
      <template v-slot:description>${l.description}</template>
    </SolarisTips>
  `})};var t,i,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTips
    },
    setup() {
      const isOpenValue = ref(args.isOpen);
      const elementClick = action('Click');
      const elementCollapse = action('Collapse');
      return {
        args,
        elementClick,
        elementCollapse,
        isOpenValue
      };
    },
    template: \`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick" @collapse="elementCollapse">
      <template v-slot:description>\${args.description}</template>
    </SolarisTips>
  \`
  })
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const O=["Collapsable"];export{e as Collapsable,O as __namedExportsOrder,T as default};
