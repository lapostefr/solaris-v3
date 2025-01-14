import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Select-DjqEJyjx.js";import{o as u}from"./options-Bu0UZnng.js";import{L as n}from"./types-Dd7QR7uO.js";import{r as d,w as b}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-DPOzJEtM.js";const y=`[
  value: string | number,
  label: string,
  disabled?: boolean
]`,g=`{
  active: boolean,
  message: string
}`,f=Object.values(n),w={title:"Atoms/Select",argTypes:{aria:{description:"Aria attributes.",table:{type:{summary:"object"}},control:"object"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:g}},control:{type:"object"}},disabled:{description:"Disabled the select.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},icon:{description:"Icon on the right of the select.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},id:{description:"The select id.",table:{type:{summary:"string"}},required:!0},inputRef:{description:"Input reference.",table:{type:{summary:"string"},defaultValue:{summary:"select"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:f},defaultValue:{summary:"inside"}},control:{type:"select"},options:n},mandatory:{description:"Makes the select mandatory.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},name:{description:"The select name.",table:{type:{summary:"string"}},required:!0},options:{description:"The options of the select.",table:{type:{summary:"object",detail:y}},required:!0},placeholder:{description:"The placeholder of the select.",table:{type:{summary:"string"}}},readonly:{description:"Change the select to read-only.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},size:{description:"The size of the textarea.",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},error:{description:'Show an error for the select. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:!1,control:{type:"boolean"}},blur:{description:"Event at blur on the select.",table:{category:"Events"},action:"blur"},input:{description:"Event at change on the select.",table:{category:"Events"},action:"input"}},args:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:u,placeholder:"-Sélectionner une option-",readonly:!1,size:"default"}},e={render:t=>({components:{SolarisSelect:p},setup(){const a=d("3");b(()=>t.value,m=>{a.value=m});const i=o("change"),c=o("blur");return{args:t,elementInput:i,elementBlur:c,selectData:a}},template:'<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'})};var r,l,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSelect
    },
    setup() {
      const selectData = ref('3');
      watch(() => args.value, (value: string) => {
        selectData.value = value;
      });
      const elementInput = action('change');
      const elementBlur = action('blur');
      return {
        args,
        elementInput,
        elementBlur,
        selectData
      };
    },
    template: '<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'
  })
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const A=["Select"];export{e as Select,A as __namedExportsOrder,w as default};
