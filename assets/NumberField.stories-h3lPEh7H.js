import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{_ as m}from"./NumberField-CYFr5V0t.js";import{r as n}from"./vue.esm-bundler-S_SeJiWS.js";import"./v4-CQkTLCs1.js";import"./generateId-CVaf2GGW.js";const d=`{
  active: boolean,
  message: string
}`,f={title:"Atoms/Number Field",parameters:{layout:"centered"},argTypes:{dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disabled the NumberField.",table:{type:{summary:"boolean"}}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Defines the text for the label.",table:{type:{summary:"string"},defaultValue:{summary:"Quantité"}}},labelPosition:{description:'Specifies how the label is displayed, "visually-hidden" for accessibility or "outside" for a standard label display.',table:{type:{summary:["visually-hidden","outside"].join(" | ")},defaultValue:{summary:"visually-hidden"}},control:{type:"select"},options:["visually-hidden","outside"]},max:{description:"The maximum possible value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{summary:"string"}},min:{description:"The minimum possible value.",table:{type:{summary:"number"}}},small:{description:"Enables the small size.",table:{type:{summary:"string"}}},type:{description:"Type of Number Field",table:{type:{summary:["emphasis","default","quiet","ghost"].join(" | ")},defaultValue:{summary:"quiet"}},control:{type:"select"},options:["emphasis","default","quiet","ghost"]},error:{description:'Enables the error display. <span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}}},args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"Label",labelPosition:"visually-hidden",max:100,message:"Voilà le message",min:1,small:!1,type:"quiet"}},e={render:r=>({components:{SolarisNumberField:m},setup(){const i=n(2);return{args:r,model:i,onInput:l=>{o("input")(l)}}},template:'<div><SolarisNumberField v-model="model" v-bind="args" @input="onInput" /></div>'})};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const v=["NumberField"];export{e as NumberField,v as __namedExportsOrder,f as default};
