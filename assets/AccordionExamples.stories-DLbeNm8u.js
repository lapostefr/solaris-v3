import{S as o}from"./AccordionGroup-Bq5Tc5no.js";import{r}from"./vue.esm-bundler-BV06ZB-3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a={allAvailaibleElements:{expanded:!0,icon:"package-delivery",id:"id-elements",title:"Accordion title"},size:{defaultSmall:{id:"id-size-1",title:"Accordion title"},defaultMedium:{id:"id-size-2",size:"medium",title:"Accordion title"},brandSmall:{id:"id-size-3",title:"Accordion title",type:"brand"},brandMedium:{id:"id-size-4",size:"medium",title:"Accordion title",type:"brand"}},style:{defaultTransparent:{id:"id-style-1",title:"Accordion title"},defaultWhite:{id:"id-style-2",accordionStyle:"white",title:"Accordion title"},brandTransparent:{id:"id-style-3",title:"Accordion title",type:"brand"},brandWhite:{id:"id-style-4",accordionStyle:"white",title:"Accordion title",type:"brand"}},paddingLeftRight:{id:"id-padding-left-right",paddingLeftRight:!1,title:"Accordion title"},groupDefault:{size:"medium"},groupBrand:{id:"id-group-brand",size:"medium",spaceBetween:!1,type:"brand"},groupBrandSpaceBetween:{size:"medium",spaceBetween:!0,type:"brand"},groupOneOnlyOpen:{oneOpenOnly:!0,size:"medium",type:"brand"}},P="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",J={title:"Molecules/Accordion New/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"You can use the **SolarisAccordion** component if you only have one. Otherwise, if you have a list of accordions, use the **SolarisAccordionGroup** component and put the SolarisAccordion component in the default slot."}}}},e=(n,t,q,g)=>{const I=g?`<template v-slot:title>${g}</template>`:"",N=q||P,Y=t==="slot"?`class="${t}"`:"";return`
  <SolarisAccordionNew ${t!=="slot"?`style="${t}"`:""} v-bind="${n}">
    ${I}
    <template v-slot:content>
      <div ${Y}>${N}</div>
    </template>
  </SolarisAccordionNew>`},d={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.allAvailaibleElements);return{args:n,data:t}},template:e("data","slot","Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.")})},i={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.size.defaultSmall);return{args:n,data:t}},template:`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        ${e("data")}
      <p>Medium default Accordion</p>
        ${e("data","margin-bottom: 50px;")}
      <p>Small brand Accordion</p>
        ${e("data","margin-bottom: 50px;")}
      <p>Medium brand Accordion</p>
        ${e("data","margin-bottom: 50px;")}
    </div>
    `})},s={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.style.defaultTransparent);return{args:n,data:t,datas:[a.style.defaultTransparent,a.style.defaultWhite,a.style.brandTransparent,a.style.brandWhite]}},template:`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      ${e("datas[0]","margin-bottom: 50px;")}
    <p>Style default white</p>
      ${e("datas[1]","margin-bottom: 50px;")}
    <p>Style brand transparent</p>
      ${e("datas[2]","margin-bottom: 50px;")}
    <p>Style brand white</p>
      ${e("datas[3]","margin-bottom: 50px;")}
  </div>`})},c={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.paddingLeftRight);return{args:n,data:t}},template:e("data",void 0,"Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.")})},l={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.groupDefault);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      ${e("{...data, id: 'id-default-1', icon:'package-newsletter'}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 1")}
      ${e("{...data, id: 'id-default-2', icon:'misc-ghost', disabled: true}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 2 - disabled")}
      ${e("{...data, id: 'id-default-3', icon:'package-delivery', expanded: true}",void 0,"This example use the default type for accordion group. It also uses the title slot and expanded is set to true.","Custom title 3")}
    </template>
  </SolarisAccordionGroup>
  `})},p={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.groupBrand);return{args:n,data:t}},template:`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      ${e("{...data, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
      ${e("{...data, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}")}
      ${e("{...data, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}")}
      </template>
    </SolarisAccordionGroup>
    `})},u={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.groupBrandSpaceBetween);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${e("{...data, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    </template>
  </SolarisAccordionGroup>
  `})},m={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=r(a.groupOneOnlyOpen);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${e("{...data, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
    ${e("{...data, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}")}
    ${e("{...data, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}")}
    </template>
  </SolarisAccordionGroup>
  `})};var f,h,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.allAvailaibleElements);
      return {
        args,
        data
      };
    },
    template: renderAccordion('data', 'slot', \`Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.\`)
  })
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var A,y,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.size.defaultSmall);
      return {
        args,
        data
      };
    },
    template: \`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        \${renderAccordion('data')}
      <p>Medium default Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
      <p>Small brand Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
      <p>Medium brand Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
    </div>
    \`
  })
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,v,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.style.defaultTransparent);
      return {
        args,
        data,
        datas: [dataExamples.style.defaultTransparent, dataExamples.style.defaultWhite, dataExamples.style.brandTransparent, dataExamples.style.brandWhite]
      };
    },
    template: \`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      \${renderAccordion('datas[0]', 'margin-bottom: 50px;')}
    <p>Style default white</p>
      \${renderAccordion('datas[1]', 'margin-bottom: 50px;')}
    <p>Style brand transparent</p>
      \${renderAccordion('datas[2]', 'margin-bottom: 50px;')}
    <p>Style brand white</p>
      \${renderAccordion('datas[3]', 'margin-bottom: 50px;')}
  </div>\`
  })
}`,...($=(v=s.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var w,O,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.paddingLeftRight);
      return {
        args,
        data
      };
    },
    template: renderAccordion('data', undefined, \`Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.\`)
  })
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var G,B,k;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupDefault);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      \${renderAccordion(\`{...data, id: 'id-default-1', icon:'package-newsletter'}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 1')}
      \${renderAccordion(\`{...data, id: 'id-default-2', icon:'misc-ghost', disabled: true}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 2 - disabled')}
      \${renderAccordion(\`{...data, id: 'id-default-3', icon:'package-delivery', expanded: true}\`, undefined, 'This example use the default type for accordion group. It also uses the title slot and expanded is set to true.', 'Custom title 3')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var z,E,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupBrand);
      return {
        args,
        data
      };
    },
    template: \`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      \${renderAccordion(\`{...data, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
      \${renderAccordion(\`{...data, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}\`)}
      \${renderAccordion(\`{...data, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}\`)}
      </template>
    </SolarisAccordionGroup>
    \`
  })
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var L,F,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupBrandSpaceBetween);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...data, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...data, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...data, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var C,W,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupOneOnlyOpen);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...data, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
    \${renderAccordion(\`{...data, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`)}
    \${renderAccordion(\`{...data, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`)}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const K=["AllAvailableElements","Sizes","Styles","PaddingLeftRigh","GroupDefault","GroupBrand","GroupSpaceBetween","GroupOneOpenOnly"];export{d as AllAvailableElements,p as GroupBrand,l as GroupDefault,m as GroupOneOpenOnly,u as GroupSpaceBetween,c as PaddingLeftRigh,i as Sizes,s as Styles,K as __namedExportsOrder,J as default};
