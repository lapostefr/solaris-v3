import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as c}from"./Switch-CUSkuMtt.js";import{r as m,w as n}from"./vue.esm-bundler-BHwbD8xO.js";import"./v4-CQkTLCs1.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-DPOzJEtM.js";const d=`{
  active: boolean,
  message: string
}`,w={title:"Atoms/Switch",argTypes:{color:{description:"Type of switch.",table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},fullSpace:{description:"The switch occupies the entire line.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},icon:{description:"The switch icon.",table:{type:{summary:"string"},defaultValue:{summary:"action-check-switch"}}},id:{description:"The switch id.",table:{type:{summary:"string"}},required:!0},label:{description:"The switch label.",table:{type:{summary:"string"}}},reverse:{description:"Change order of the switch and the label.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},small:{description:"Choose small size for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,fullSpace:!1,icon:"action-check-switch",id:"monId",label:"Label",reverse:!1,small:!1}},e={render:r=>({components:{SolarisSwitch:c},setup(){const a=m(!1);return n(()=>a.value,l=>{i("toggle value")(l)}),{args:r,model:a}},template:'<SolarisSwitch v-model="model" v-bind="args"/>'})};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSwitch
    },
    setup() {
      const model = ref(false);
      watch(() => model.value, value => {
        action('toggle value')(value);
      });
      return {
        args,
        model
      };
    },
    template: '<SolarisSwitch v-model="model" v-bind="args"/>'
  })
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const v=["Switch"];export{e as Switch,v as __namedExportsOrder,w as default};
