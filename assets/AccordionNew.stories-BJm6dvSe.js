import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as s}from"./AccordionNew-DgcJRkkn.js";import{a as l}from"./argTypes-KXTj3Y1Y.js";import{r as c}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Collapse-SNGSKL6g.js";const A={title:"Molecules/Accordion New",argTypes:l,args:{accordionStyle:"transparent",disabled:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}},e={render:d=>({components:{SolarisAccordionNew:s},setup(){const n=c(!1);return{args:d,expanded:n,onExpandedChange:r=>{i("expanded changed",r)()}}},template:`
      <SolarisAccordionNew 
        v-model="expanded" 
        v-bind="args" 
        @click="onExpandedChange(expanded)"
      >
        <template v-slot:content>
          <p style="margin: 0;">Lorem ipsum dolor sit amet...</p>
        </template>
      </SolarisAccordionNew>
    `}),args:{accordionStyle:"transparent",disabled:!1,expanded:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionNew
    },
    setup() {
      const expanded = ref(false);
      const onExpandedChange = (value: boolean) => {
        action('expanded changed', value)();
      };
      return {
        args,
        expanded,
        onExpandedChange
      };
    },
    template: \`
      <SolarisAccordionNew 
        v-model="expanded" 
        v-bind="args" 
        @click="onExpandedChange(expanded)"
      >
        <template v-slot:content>
          <p style="margin: 0;">Lorem ipsum dolor sit amet...</p>
        </template>
      </SolarisAccordionNew>
    \`
  }),
  args: {
    accordionStyle: 'transparent',
    disabled: false,
    expanded: false,
    icon: 'package-delivery',
    id: 'id1',
    paddingLeftRight: true,
    size: 'small',
    title: 'Accordion title',
    titleLevel: 'h3',
    type: 'default'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const S=["Accordion"];export{e as Accordion,S as __namedExportsOrder,A as default};
