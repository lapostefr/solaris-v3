import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Tips-ExS8_Dc5.js";import{a as d,l as n}from"./links-BWBfRzDI.js";import{r as C,w as v}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useTips-Bh2BOp5E.js";import"./generateId-DPOzJEtM.js";const V={title:"Molecules/Tips",argTypes:d,args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",isClosable:!0,links:n,title:"Title of tips notification",titleLevel:"h3"}},i={render:e=>({components:{SolarisTips:m},setup(){const l=C(e.isOpen),r=s("Close"),c=s("Collapse"),p=s("Click");return v(()=>e.isOpen,u=>{l.value=u}),{args:e,elementClose:r,elementCollapse:c,elementClick:p,isOpenValue:l}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @close="elementClose" @collapse="elementCollapse" @click="elementClick">
       <template v-slot:description>${e.description}</template>
    </SolarisTips>
  `}),args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus",icon:"action-tips",isClosable:!0,links:n,title:"Title of tips notification",titleLevel:"h3"}};var t,o,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTips
    },
    setup() {
      const isOpenValue = ref(args.isOpen);
      const elementClose = action('Close');
      const elementCollapse = action('Collapse');
      const elementClick = action('Click');
      watch(() => args.isOpen, (value: boolean) => {
        isOpenValue.value = value;
      });
      return {
        args,
        elementClose,
        elementCollapse,
        elementClick,
        isOpenValue
      };
    },
    template: \`
    <SolarisTips v-model="isOpenValue" v-bind="args" @close="elementClose" @collapse="elementCollapse" @click="elementClick">
       <template v-slot:description>\${args.description}</template>
    </SolarisTips>
  \`
  }),
  args: {
    color: 'supernova',
    compact: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus',
    icon: 'action-tips',
    isClosable: true,
    links: links,
    title: 'Title of tips notification',
    titleLevel: 'h3'
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const q=["Closable"];export{i as Closable,q as __namedExportsOrder,V as default};
