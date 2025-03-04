import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{_ as o}from"./NumberField-diz4OiOg.js";import{w as m}from"./vue.esm-bundler-DbnnIJWB.js";import"./v4-CQkTLCs1.js";import"./generateId-CVaf2GGW.js";const d=`{
  active: boolean,
  message: string
}`,b={title:"Atoms/Number Field",parameters:{layout:"centered"},argTypes:{dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disabled the NumberField.",table:{type:{summary:"boolean"}}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Defines the text for the label.",table:{type:{summary:"string"},defaultValue:{summary:"Quantité"}}},labelPosition:{description:'Specifies how the label is displayed, "visually-hidden" for accessibility or "outside" for a standard label display.',table:{type:{summary:["visually-hidden","outside"].join(" | ")},defaultValue:{summary:"visually-hidden"}},control:{type:"select"},options:["visually-hidden","outside"]},max:{description:"The maximum possible value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{summary:"string"}},min:{description:"The minimum possible value.",table:{type:{summary:"number"}}},small:{description:"Enables the small size.",table:{type:{summary:"string"}}},type:{description:"Type of Number Field",table:{type:{summary:["emphasis","default","quiet","ghost"].join(" | ")},defaultValue:{summary:"quiet"}},control:{type:"select"},options:["emphasis","default","quiet","ghost"]},error:{description:'Enables the error display. <span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}}},args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"Label",labelPosition:"visually-hidden",max:100,message:"Voilà le message",min:1,small:!1,type:"quiet",value:0}},e={render:a=>({components:{SolarisNumberField:o},setup(){return m(()=>a.value,i=>{l("input")(i)}),{args:a}},template:'<SolarisNumberField v-model="args.value" v-bind="args" />'})};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNumberField
    },
    setup() {
      watch(
      // log v-model update to action
      () => args.value, val => {
        action('input')(val);
      });
      return {
        args
      };
    },
    template: '<SolarisNumberField v-model="args.value" v-bind="args" />'
  })
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const g=["NumberField"];export{e as NumberField,g as __namedExportsOrder,b as default};
