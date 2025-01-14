import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./Switch-BJNR7jvq.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-DPOzJEtM.js";const c=`{
  active: boolean,
  message: string
}`,f={title:"Atoms/Switch",argTypes:{color:{description:"Type of switch.",table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:{type:"object"}},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},fullSpace:{description:"The switch occupies the entire line.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},icon:{description:"The switch icon.",table:{type:{summary:"string"},defaultValue:{summary:"action-check-switch"}}},id:{description:"The switch id.",table:{type:{summary:"string"}},required:!0},label:{description:"The switch label.",table:{type:{summary:"string"}}},reverse:{description:"Change order of the switch and the label.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},small:{description:"Choose small size for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},value:{description:"Activate the switch.",table:{type:{summary:"boolean"}},control:"boolean",required:!0}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,fullSpace:!1,icon:"action-check-switch",id:"monId",label:"Label",reverse:!1,small:!1,value:!0}},e={render:r=>({components:{SolarisSwitch:i},setup(){const o=l("change");return{args:r,actionInput:o}},template:'<SolarisSwitch @input="actionInput" v-bind="args"/>'}),args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,fullSpace:!1,icon:"action-check-switch",id:"monId",label:"Label",reverse:!1,small:!1,value:!0}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSwitch
    },
    setup() {
      const actionInput = action('change');
      return {
        args,
        actionInput
      };
    },
    template: '<SolarisSwitch @input="actionInput" v-bind="args"/>'
  }),
  args: {
    color: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    fullSpace: false,
    icon: 'action-check-switch',
    id: 'monId',
    label: 'Label',
    reverse: false,
    small: false,
    value: true
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const y=["Switch"];export{e as Switch,y as __namedExportsOrder,f as default};
