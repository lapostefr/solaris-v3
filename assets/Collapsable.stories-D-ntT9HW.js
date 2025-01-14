import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Tips-ExS8_Dc5.js";import{b as c,l as m}from"./links-BWBfRzDI.js";import{r as u}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useTips-Bh2BOp5E.js";import"./generateId-DPOzJEtM.js";const O={title:"Molecules/Tips",argTypes:c,args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",links:m,title:"Title of tips notification",titleLevel:"h3"}},e={render:s=>({components:{SolarisTips:n},setup(){const o=u(s.isOpen),r=t("Click"),p=t("Collapse");return{args:s,elementClick:r,elementCollapse:p,isOpenValue:o}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick" @collapse="elementCollapse">
      <template v-slot:description>${s.description}</template>
    </SolarisTips>
  `})};var l,i,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const V=["Collapsable"];export{e as Collapsable,V as __namedExportsOrder,O as default};
