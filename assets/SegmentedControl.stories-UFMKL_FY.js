import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as d}from"./vue.esm-bundler-BQVOD3cV.js";import{S as i,C as m,I as p,L as c,a as g}from"./SegmentedControl-Cg0Zm6-C.js";import{a as u}from"./argTypes-Cs-pU7ET.js";import{a as b}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";import"./Badge-CNyb-hIR.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-BTVVhIqi.js";import"./Message-COM7xYSp.js";import"./Shadow-T-9zCUlx.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";const S=[{icon:"misc-ghost",id:"option1-id",label:"Label 1",value:"option-1"},{icon:"misc-ghost",id:"option2-id",label:"Label 2",value:"option-2"},{disabled:!0,icon:"misc-ghost",id:"option3-id",label:"Label 3",value:"option-3"},{id:"option4-id",label:"Label 4",value:"option-4"},{badgeNumber:"2",id:"option5-id",label:"Label 5",value:"option-5"}],N={title:"Atoms/Segmented Control",component:i,argTypes:u,args:{aria:{describedby:"info-text-id"},componentStyle:m.primary,dataError:{active:!1,message:"Message d'erreur"},disabled:!1,fullContainer:!1,iconPosition:p.iconLeft,id:"id-sc",label:"Segmented control heading",labelPosition:c.outside,mandatory:!1,message:"Info Message",name:"name-sc",options:S,overflowScroll:!0,shadowBgColor:b.NeutralSoft,size:g.medium}},e={render:l=>({components:{SolarisSegmentedControl:i},setup(){const n=d("option-1"),s=r("update:modelValue");return{args:l,model:n,onUpdateModel:s}},template:`
    <SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
    </solarisSegmentedControl>
    `})};e.parameters={docs:{source:{code:`
<SolarisSegmentedControl
  id="id-sc"
  name="name-sc"
  :options='[{"icon": "misc-ghost", "id":"option1-id","label":"Label 1","value":"option-1"},{"icon": "misc-ghost", "id":"option2-id","label":"Label 2","value":"option-2"},{"disabled": "true", "icon": "misc-ghost","id":"option3-id","label":"Label 3","value":"option-3"}, {"id":"option4-id","label":"Label 4","value":"option-4"}, {"badgeNumber":"2", "id":"option4-id", "label":"Label 5","value":"option-5"}]'>
    <template #customIcon-3>
        <span class="slot" style="margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
    </template>
</solarisSegmentedControl>`}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSegmentedControl
    },
    setup() {
      const model = ref('option-1');
      const onUpdateModel = action('update:modelValue');
      return {
        args,
        model,
        onUpdateModel
      };
    },
    template: \`
    <SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
    </solarisSegmentedControl>
    \`
  })
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const E=["SegmentedControl"];export{e as SegmentedControl,E as __namedExportsOrder,N as default};
