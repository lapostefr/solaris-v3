import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Switch-DvT8uLpb.js";import{r as c,w as n}from"./vue.esm-bundler-CaiLyLZC.js";import"./v4-CQkTLCs1.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Message-BhgJ819g.js";const d=`{
  active: boolean,
  message: string
}`,p=`{
  [key: string]: string
}`,v={title:"Atoms/Switch",argTypes:{aria:{description:"Objet containing custom aria attributes to be applied to the field.",table:{type:{summary:"object",detail:p}},control:"object"},color:{description:"Type of switch.",table:{type:{summary:["emphasis","default","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:d}},control:{type:"object"}},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},fullSpace:{description:"The switch occupies the entire line.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},id:{description:"The switch id.",table:{type:{summary:"string"}},required:!0},label:{description:"The switch label.",table:{type:{summary:"string"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},reverse:{description:"Change order of the switch and the label.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},small:{description:"Choose small size for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{aria:{describedby:"info-text-id"},color:"emphasis",dataError:{active:!1,message:"Message d'erreur"},disabled:!1,fullSpace:!1,id:"monId",label:"Label",message:"Voilà le message",reverse:!1,small:!1}},e={render:o=>({components:{SolarisSwitch:m},setup(){const a=c(!1);return n(()=>a.value,l=>{i("toggle value")(l)}),{args:o,model:a}},template:'<SolarisSwitch v-model="model" v-bind="args"/>'})};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const S=["Switch"];export{e as Switch,S as __namedExportsOrder,v as default};
