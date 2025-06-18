import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as c,R as r,a as n}from"./Radio-DeGgHUpc.js";import{r as g}from"./vue.esm-bundler-CaiLyLZC.js";import{t as e}from"./i18n-iXEj6ePW.js";import"./v4-CQkTLCs1.js";import"./Message-BhgJ819g.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";function d(o){return`enum {
  ${Object.entries(o).map(([a,s])=>`${a} = '${s}'`).join(`,
  `)}
}`}function l(o){return{DataError:`{
  active: boolean
  message: string
}`,RadioOption:`{
  aria?: {
    [key: string]: string
  }
  id?: string
  name: string
  value: string
  disabled?: boolean
  readonly?: boolean
}`,RadiOptions:"Array<RadioOption>"}[o]||`type ${o}`}const f={descriptions:{modelValue:"Selected value from the available options, bound with v-model.",aria:"Objet containing custom aria attributes to be applied to the fieldset.",colorStyle:"Color style of the radio buttons.",dataError:"Error information to display for the radio button group.",disabled:"Disables the entire radio button group.",layout:"Orientation of the radio button group (vertical or horizontal).",legend:"Title for the radio button group.",mandatory:"Indicates if the radio group selection is mandatory.",message:"Informational message to display with the radio group.",name:"Name for all fields.",options:"List of radio button options to display.",readonly:"Sets the entire radio group to read-only mode."},events:{updateModelValue:"Emitted when the selected value changes (for v-model).",input:"Emitted when a user selects an option."},slots:{default:"Additional content to display with the radio buttons (optional)."}},O={stories:f},t=O,V={title:"Atoms/Radio/New",component:c,parameters:{actions:{handles:["update:modelValue","input"]}},argTypes:{aria:{description:e(t,"aria"),table:{type:{summary:"object",detail:"{ [key: string]: string }"},category:"Accessibility"},control:"object"},colorStyle:{description:e(t,"colorStyle"),table:{type:{summary:"RadioColorStyle",detail:d(r)},defaultValue:{summary:r.DEFAULT},category:"Content"},control:{type:"select"},options:Object.values(r)},dataError:{description:e(t,"dataError"),table:{type:{summary:"DataError",detail:`type DataError = ${l("DataError")}`},category:"Validation"},control:"object"},disabled:{description:e(t,"disabled"),table:{type:{summary:"boolean"},category:"State"},control:"boolean"},layout:{description:e(t,"layout"),table:{type:{summary:"RadioLayout",detail:d(n)},defaultValue:{summary:n.VERTICAL},category:"Layout"},control:{type:"select"},options:Object.values(n)},legend:{description:e(t,"legend"),table:{type:{summary:"string"},category:"Content"},control:"text"},mandatory:{description:e(t,"mandatory"),table:{type:{summary:"boolean"},category:"Validation"},control:"boolean"},message:{description:e(t,"message"),table:{type:{summary:"string"},category:"Content"},control:"text"},name:{description:e(t,"name"),table:{type:{summary:"string"},category:"Content"},control:"text"},options:{description:e(t,"options"),table:{type:{summary:"RadiOptions",detail:`type RadiOptions = ${l("RadiOptions")}

type RadioOption = ${l("RadioOption")}`},category:"Content"},control:"object"},readonly:{description:e(t,"readonly"),table:{type:{summary:"boolean"},category:"State"},control:"boolean"}}},i={render:o=>({components:{SolarisRadio:c},setup(){const a=g("Option 3");return{args:o,model:a,onInput:y=>{b("input")(y)}}},template:`<div>
    <SolarisRadio 
      v-model="model" 
      v-bind="args"
      @input="onInput"
    />
    </div>`}),args:{aria:{describedby:"info-text-id"},colorStyle:r.EMPHASIS,dataError:{active:!1,message:"Message d'erreur"},disabled:!1,layout:n.VERTICAL,legend:"Radio buttons heading",mandatory:!1,message:"Voilà le message",name:"essai",options:[{aria:{label:"test"},label:"Label: Option 1",value:"Option 1"},{id:"essai",label:"Label: Option 2",value:"Option 2",disabled:!0},{label:"Label: Option 3",value:"Option 3"},{label:"Label: Option 4",value:"Option 4"}],readonly:!1}};var p,u,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadio
    },
    setup() {
      const model = ref('Option 3');
      const onInput = value => {
        action('input')(value);
      };
      return {
        args,
        model,
        onInput
      };
    },
    template: \`<div>
    <SolarisRadio 
      v-model="model" 
      v-bind="args"
      @input="onInput"
    />
    </div>\`
  }),
  args: {
    aria: {
      describedby: 'info-text-id'
    },
    colorStyle: RadioColorStyle.EMPHASIS,
    dataError: {
      active: false,
      message: 'Message d\\'erreur'
    },
    disabled: false,
    layout: RadioLayout.VERTICAL,
    legend: 'Radio buttons heading',
    mandatory: false,
    message: 'Voilà le message',
    name: 'essai',
    options: [{
      aria: {
        label: 'test'
      },
      label: 'Label: Option 1',
      value: 'Option 1'
    }, {
      id: 'essai',
      label: 'Label: Option 2',
      value: 'Option 2',
      disabled: true
    }, {
      label: 'Label: Option 3',
      value: 'Option 3'
    }, {
      label: 'Label: Option 4',
      value: 'Option 4'
    }],
    readonly: false
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["New"];export{i as New,A as __namedExportsOrder,V as default};
