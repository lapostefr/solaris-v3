import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./AccordionGroup-Bq5Tc5no.js";import{S as u}from"./AccordionNew-DgcJRkkn.js";import{b as x}from"./argTypes-KXTj3Y1Y.js";import{r as n}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-R0HSrbr6.js";import"./Collapse-SNGSKL6g.js";const N={title:"Molecules/Accordion New/Accordion Group",argTypes:x,args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}},a={render:r=>({components:{SolarisAccordionGroup:m,SolarisAccordionNew:u},setup(){const l=n(!1),c=n(!1),s=n(!1),p=o("expanded");return{args:r,handleExpanded:p,expandedA:l,expandedB:c,expandedC:s,onExpanded1Change:e=>{o("expanded 1 changed")(e)},onExpanded2Change:e=>{o("expanded 2 changed")(e)},onExpanded3Change:e=>{o("expanded 3 changed")(e)}}},template:`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-model="expandedA" v-bind="{...args, id: 'id1', title: 'Accordion Title 1'}" @click="onExpanded1Change(expandedA)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedB" v-bind="{...args, id: 'id2', title: 'Accordion Title 2'}" @click="onExpanded2Change(expandedB)">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedC" v-bind="{...args, id: 'id3', title: 'Accordion Title 3'}" @click="onExpanded3Change(expandedC)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>
    </template>
  </SolarisAccordionGroup>`}),args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}};var i,d,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const expandedA = ref(false);
      const expandedB = ref(false);
      const expandedC = ref(false);
      const handleExpanded = action('expanded');
      const onExpanded1Change = (value: boolean) => {
        action('expanded 1 changed')(value);
      };
      const onExpanded2Change = (value: boolean) => {
        action('expanded 2 changed')(value);
      };
      const onExpanded3Change = (value: boolean) => {
        action('expanded 3 changed')(value);
      };
      return {
        args,
        handleExpanded,
        expandedA,
        expandedB,
        expandedC,
        onExpanded1Change,
        onExpanded2Change,
        onExpanded3Change
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-model="expandedA" v-bind="{...args, id: 'id1', title: 'Accordion Title 1'}" @click="onExpanded1Change(expandedA)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedB" v-bind="{...args, id: 'id2', title: 'Accordion Title 2'}" @click="onExpanded2Change(expandedB)">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedC" v-bind="{...args, id: 'id3', title: 'Accordion Title 3'}" @click="onExpanded3Change(expandedC)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>
    </template>
  </SolarisAccordionGroup>\`
  }),
  args: {
    accordionStyle: 'transparent',
    oneOpenOnly: false,
    paddingLeftRight: true,
    size: 'small',
    spaceBetween: false,
    titleLevel: 'h3',
    type: 'default'
  }
}`,...(t=(d=a.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const L=["AccordionGroup"];export{a as AccordionGroup,L as __namedExportsOrder,N as default};
