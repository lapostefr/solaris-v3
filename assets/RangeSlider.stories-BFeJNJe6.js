import{S as m}from"./RangeSlider-DC2p3pF8.js";import{r as d}from"./vue.esm-bundler-CaiLyLZC.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Message-BhgJ819g.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";import"./v4-CQkTLCs1.js";const u=`{
  min: {
    label: string,
    value: number
  },
  min: {
    label: string,
    value: number
  },
}`,p=`{
  active: boolean,
  message: string
}`,g=`{
  [key: string]: string
}`,x={title:"Atoms/Range Slider",argTypes:{aria:{description:"Objet containing custom aria attributes to be applied to the fieldset.",table:{type:{summary:"object",detail:g}},control:"object"},color:{description:"Color between selected values.",table:{type:{summary:["default","emphasis","quiet"].join(" | ")},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","emphasis","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:p}},control:{type:"object"}},id:{description:"Field s ID",table:{type:{summary:"string"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},max:{description:"Slider possible max value.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},min:{description:"Slider possible min value.",table:{type:{summary:"number"}}},rangeValues:{description:"Data range for the Range Slider.",table:{type:{summary:"object",detail:u}}},step:{description:"Step size when you change values.",table:{type:{summary:"number"}}},unit:{description:"The unit in the fields.",table:{table:{type:{summary:"string"}},defaultValue:{summary:"€"}}}},args:{aria:{describedby:"info-text-id"},color:"default",dataError:{active:!1,message:"Message d'erreur"},id:"monId",label:"Label",max:200,message:"Voilà le message",min:2,rangeValues:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},step:1,unit:"€"}},e={render:a=>({components:{SolarisRangeSlider:m},setup(){const o=r("changed"),t=d(a.rangeValues),l=r("input",t.value);return{args:a,range:t,elementChanged:o,showModel:l}},template:`<div style="margin: auto; width: 300px;">
    <SolarisRangeSlider v-bind="args" v-model="range" @input="showModel(range)" @changed="elementChanged" />
  </div>`})};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRangeSlider
    },
    setup() {
      const elementChanged = action('changed');
      const range = ref(args.rangeValues);
      const showModel = action('input', range.value);
      return {
        args,
        range,
        elementChanged,
        showModel
      };
    },
    template: \`<div style="margin: auto; width: 300px;">
    <SolarisRangeSlider v-bind="args" v-model="range" @input="showModel(range)" @changed="elementChanged" />
  </div>\`
  })
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const w=["RangeSlider"];export{e as RangeSlider,w as __namedExportsOrder,x as default};
