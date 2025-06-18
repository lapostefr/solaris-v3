import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{_ as n}from"./NumberField-BFaXk8eE.js";import{r as m}from"./vue.esm-bundler-CaiLyLZC.js";import"./v4-CQkTLCs1.js";import"./Message-BhgJ819g.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";const d=`{
  active: boolean,
  message: string
}`,p=`{
  [key: string]: string
}`,F={title:"Atoms/Number Field",parameters:{layout:"centered"},argTypes:{aria:{description:"Objet containing custom aria attributes to be applied to the field.",table:{type:{summary:"object",detail:p}},control:"object"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disabled the NumberField.",table:{type:{summary:"boolean"}}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Defines the text for the label.",table:{type:{summary:"string"},defaultValue:{summary:"Quantité"}}},labelPosition:{description:'Specifies how the label is displayed, "visually-hidden" for accessibility or "outside" for a standard label display.',table:{type:{summary:["visually-hidden","outside"].join(" | ")},defaultValue:{summary:"visually-hidden"}},control:{type:"select"},options:["visually-hidden","outside"]},max:{description:"The maximum possible value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{summary:"string"}},min:{description:"The minimum possible value.",table:{type:{summary:"number"}}},small:{description:"Enables the small size.",table:{type:{summary:"string"}}},type:{description:"Type of Number Field",table:{type:{summary:["emphasis","default","quiet","ghost"].join(" | ")},defaultValue:{summary:"quiet"}},control:{type:"select"},options:["emphasis","default","quiet","ghost"]},error:{description:'Enables the error display. <span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}}},args:{aria:{describedby:"info-text-id"},dataError:{active:!1,message:"Message d'erreur"},disabled:!1,error:!1,id:"monId",label:"Label",labelPosition:"visually-hidden",max:100,message:"Voilà le message",min:1,small:!1,type:"quiet"}},e={render:r=>({components:{SolarisNumberField:n},setup(){const i=m(2);return{args:r,model:i,onInput:o=>{l("input")(o)}}},template:'<div><SolarisNumberField v-model="model" v-bind="args" @input="onInput" /></div>'})};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNumberField
    },
    setup() {
      const model = ref(2);
      const onInput = value => {
        action('input')(value);
      };
      return {
        args,
        model,
        onInput
      };
    },
    template: '<div>' + '<SolarisNumberField v-model="model" v-bind="args" @input="onInput" />' + '</div>'
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const N=["NumberField"];export{e as NumberField,N as __namedExportsOrder,F as default};
