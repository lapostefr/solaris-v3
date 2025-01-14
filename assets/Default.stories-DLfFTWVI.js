import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./Textarea-DGCysDH0.js";import{a as n}from"./argsType-B4LSM2Dt.js";import{r as m}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-Dd7QR7uO.js";const v={title:"Atoms/Textarea",argTypes:n,args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},e={render:l=>({components:{SolarisTextarea:i},setup(){const t=d("blur"),o=m("");return{args:l,textareaModel:o,blurElement:t}},template:`<div>
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,v as default};
