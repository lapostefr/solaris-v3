import{S as r}from"./AccordionGroup-X0WrMWoM.js";import{S as d}from"./AccordionNew-CMa4Tmme.js";import{r as i}from"./vue.esm-bundler-CaiLyLZC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CPWlc7Vn.js";import"./Collapse-CYHAQvC0.js";const o={allAvailaibleElements:{expanded:!0,icon:"package-delivery",id:"id-elements",title:"Accordion title"},size:{defaultSmall:{id:"id-size-1",title:"Accordion title"},defaultMedium:{id:"id-size-2",size:"medium",title:"Accordion title"},brandSmall:{id:"id-size-3",title:"Accordion title",type:"brand"},brandMedium:{id:"id-size-4",size:"medium",title:"Accordion title",type:"brand"}},style:{defaultTransparent:{id:"id-style-1",title:"Accordion title"},defaultWhite:{id:"id-style-2",accordionStyle:"white",title:"Accordion title"},brandTransparent:{id:"id-style-3",title:"Accordion title",type:"brand"},brandWhite:{id:"id-style-4",accordionStyle:"white",title:"Accordion title",type:"brand"}},paddingLeftRight:{id:"id-padding-left-right",paddingLeftRight:!1,title:"Accordion title"},groupDefault:{size:"medium"},groupBrand:{id:"id-group-brand",size:"medium",spaceBetween:!1,type:"brand"},groupBrandSpaceBetween:{size:"medium",spaceBetween:!0,type:"brand"},groupOneOnlyOpen:{oneOpenOnly:!0,size:"medium",type:"brand"}},_="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",Z={title:"Molecules/Accordion New/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"You can use the **SolarisAccordion** component if you only have one. Otherwise, if you have a list of accordions, use the **SolarisAccordionGroup** component and put the SolarisAccordion component in the default slot."}}}},t=(n,e,a,b)=>{const Y=b?`<template v-slot:title>${b}</template>`:"",j=a||_,P=e==="slot"?`class="${e}"`:"";return`
  <SolarisAccordionNew ${e!=="slot"?`style="${e}"`:""} v-bind="${n}">
    ${Y}
    <template v-slot:content>
      <div ${P}>${j}</div>
    </template>
  </SolarisAccordionNew>`},A=n=>Object.fromEntries(Object.entries(n).filter(([e])=>e!=="spaceBetween")),l={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.allAvailaibleElements);return{args:n,data:e}},template:t("data","slot","Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.")})},s={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.size);return{args:n,data:e}},template:`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        ${t("data.defaultSmall","margin-bottom: 50px;")}
      <p>Medium default Accordion</p>
        ${t("data.defaultMedium","margin-bottom: 50px;")}
      <p>Small brand Accordion</p>
        ${t("data.brandSmall","margin-bottom: 50px;")}
      <p>Medium brand Accordion</p>
        ${t("data.brandMedium","margin-bottom: 50px;")}
    </div>
    `})},c={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.style.defaultTransparent);return{args:n,data:e,datas:[o.style.defaultTransparent,o.style.defaultWhite,o.style.brandTransparent,o.style.brandWhite]}},template:`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      ${t("datas[0]","margin-bottom: 50px;")}
    <p>Style default white</p>
      ${t("datas[1]","margin-bottom: 50px;")}
    <p>Style brand transparent</p>
      ${t("datas[2]","margin-bottom: 50px;")}
    <p>Style brand white</p>
      ${t("datas[3]","margin-bottom: 50px;")}
  </div>`})},p={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.paddingLeftRight);return{args:n,data:e}},template:t("data",void 0,"Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.")})},u={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.groupDefault),a=A(e.value);return{args:n,data:e,filtered:a}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      ${t("{...filtered, id: 'id-default-1', icon:'package-newsletter'}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 1")}
      ${t("{...filtered, id: 'id-default-2', icon:'misc-ghost', disabled: true}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 2 - disabled")}
      ${t("{...filtered, id: 'id-default-3', icon:'package-delivery', expanded: true}",void 0,"This example use the default type for accordion group. It also uses the title slot and expanded is set to true.","Custom title 3")}
    </template>
  </SolarisAccordionGroup>
  `})},m={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.groupBrand),a=A(e.value);return{args:n,data:e,filtered:a}},template:`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      ${t("{...filtered, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
      ${t("{...filtered, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}")}
      ${t("{...filtered, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}")}
      </template>
    </SolarisAccordionGroup>
    `})},f={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.groupBrandSpaceBetween),a=A(e.value);return{args:n,data:e,filtered:a}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${t("{...filtered, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${t("{...filtered, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${t("{...filtered, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    </template>
  </SolarisAccordionGroup>
  `})},g={render:n=>({components:{SolarisAccordionGroup:r,SolarisAccordionNew:d},setup(){const e=i(o.groupOneOnlyOpen),a=A(e.value);return{args:n,data:e,filtered:a}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${t("{...filtered, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
    ${t("{...filtered, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}")}
    ${t("{...filtered, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}")}
    </template>
  </SolarisAccordionGroup>
  `})};var h,y,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
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
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,x,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.size);
      return {
        args,
        data
      };
    },
    template: \`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        \${renderAccordion('data.defaultSmall', 'margin-bottom: 50px;')}
      <p>Medium default Accordion</p>
        \${renderAccordion('data.defaultMedium', 'margin-bottom: 50px;')}
      <p>Small brand Accordion</p>
        \${renderAccordion('data.brandSmall', 'margin-bottom: 50px;')}
      <p>Medium brand Accordion</p>
        \${renderAccordion('data.brandMedium', 'margin-bottom: 50px;')}
    </div>
    \`
  })
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var $,O,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
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
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var G,B,E;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
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
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var k,z,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupDefault);
      const filtered = filteredData(data.value);
      return {
        args,
        data,
        filtered
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      \${renderAccordion(\`{...filtered, id: 'id-default-1', icon:'package-newsletter'}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 1')}
      \${renderAccordion(\`{...filtered, id: 'id-default-2', icon:'misc-ghost', disabled: true}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 2 - disabled')}
      \${renderAccordion(\`{...filtered, id: 'id-default-3', icon:'package-delivery', expanded: true}\`, undefined, 'This example use the default type for accordion group. It also uses the title slot and expanded is set to true.', 'Custom title 3')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var N,R,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupBrand);
      const filtered = filteredData(data.value);
      return {
        args,
        data,
        filtered
      };
    },
    template: \`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      \${renderAccordion(\`{...filtered, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
      \${renderAccordion(\`{...filtered, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}\`)}
      \${renderAccordion(\`{...filtered, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}\`)}
      </template>
    </SolarisAccordionGroup>
    \`
  })
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,F,C;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupBrandSpaceBetween);
      const filtered = filteredData(data.value);
      return {
        args,
        data,
        filtered
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...filtered, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...filtered, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...filtered, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(C=(F=f.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var W,q,I;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupOneOnlyOpen);
      const filtered = filteredData(data.value);
      return {
        args,
        data,
        filtered
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...filtered, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
    \${renderAccordion(\`{...filtered, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`)}
    \${renderAccordion(\`{...filtered, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`)}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(I=(q=g.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const ee=["AllAvailableElements","Sizes","Styles","PaddingLeftRigh","GroupDefault","GroupBrand","GroupSpaceBetween","GroupOneOpenOnly"];export{l as AllAvailableElements,m as GroupBrand,u as GroupDefault,g as GroupOneOpenOnly,f as GroupSpaceBetween,p as PaddingLeftRigh,s as Sizes,c as Styles,ee as __namedExportsOrder,Z as default};
