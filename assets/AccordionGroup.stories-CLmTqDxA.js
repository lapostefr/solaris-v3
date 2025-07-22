import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as r}from"./AccordionGroup-Ci5-F3wf.js";import{S as l}from"./AccordionNew-CWO0aDCK.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BQVOD3cV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CNTEbVSX.js";import"./Collapse-CARPdCeu.js";const v={title:"Molecules/Accordion New/Accordion Group",argTypes:{accordionStyle:{description:"The accordion's background color.",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:{type:"select"},options:["transparent","white"]},paddingLeftRight:{description:"**Only if type is default.** Add/remove left and right padding from title and content.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:"boolean"},size:{description:"The size of accordion.",table:{type:{summary:"string"},defaultValue:{summary:"small"}},control:{type:"select"},options:["small","medium"]},titleLevel:{description:"Level of section headings.",table:{type:{summary:"string"},defaultValue:{summary:"h3"}},control:{type:"select"},options:["h2","h3","h4","h5","h6"]},type:{description:"The style of accordion.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","brand"]},oneOpenOnly:{description:"Only one accordion can be opened at a time.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},spaceBetween:{description:"**Only if type is brand.** Add/remove space between accordions.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"}},args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}},o={render:a=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:l},setup(){return{args:a,filteredArgs:()=>Object.fromEntries(Object.entries(a).filter(([e])=>e!=="spaceBetween")),onExpanded1Change:e=>{t("expanded 1 changed")(e)},onExpanded2Change:e=>{t("expanded 2 changed")(e)},onExpanded3Change:e=>{t("expanded 3 changed")(e)}}},template:`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id1', title: 'Accordion Title 1', expanded: true}" @click="onExpanded1Change(expandedA)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id2', title: 'Accordion Title 2'}" @click="onExpanded2Change(expandedB)">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id3', title: 'Accordion Title 3'}" @click="onExpanded3Change(expandedC)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>
    </template>
  </SolarisAccordionGroup>`}),args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}};var i,n,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const filteredArgs = () => {
        return Object.fromEntries(Object.entries(args).filter(([key]) => key !== 'spaceBetween'));
      };
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
        filteredArgs,
        onExpanded1Change,
        onExpanded2Change,
        onExpanded3Change
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id1', title: 'Accordion Title 1', expanded: true}" @click="onExpanded1Change(expandedA)">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id2', title: 'Accordion Title 2'}" @click="onExpanded2Change(expandedB)">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-bind="{...filteredArgs(), id: 'id3', title: 'Accordion Title 3'}" @click="onExpanded3Change(expandedC)">
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
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const S=["AccordionGroup"];export{o as AccordionGroup,S as __namedExportsOrder,v as default};
