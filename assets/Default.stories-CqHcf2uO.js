import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./Textarea-C6EZ-NJZ.js";import{r as n}from"./vue.esm-bundler-BQVOD3cV.js";import{L as m}from"./types-DKXD8uiR.js";import{c}from"./argsType-Dv5GTBuQ.js";import"./v4-CQkTLCs1.js";import"./Message-COM7xYSp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Atoms/Textarea",argTypes:c,args:{aria:{describedby:"info-text-id"},autofocus:!1,dataError:{active:!1,message:"Message d'erreur"},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:m.inside,mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},e={render:o=>({components:{SolarisTextarea:i},setup(){const t=d("blur"),l=n("");return{args:o,textareaModel:l,blurElement:t}},template:`<div>
    <SolarisTextarea v-model="textareaModel" v-bind="args" @blur="blurElement"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTextarea
    },
    setup() {
      const blurElement = action('blur');
      const textareaModel = ref('');
      return {
        args,
        textareaModel,
        blurElement
      };
    },
    template: \`<div>
    <SolarisTextarea v-model="textareaModel" v-bind="args" @blur="blurElement"/>
  </div>\`
  }),
  args: {
    autofocus: false,
    dataError: {
      active: false,
      message: ''
    },
    description: '',
    disabled: false,
    error: false,
    id: 'monId',
    label: 'My super Input Text',
    // labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    name: 'name',
    placeholder: 'Placeholder',
    readonly: false,
    row: 5,
    size: 'default'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,T as default};
