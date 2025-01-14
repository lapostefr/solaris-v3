import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Textarea-DGCysDH0.js";import{b as i}from"./argsType-B4LSM2Dt.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-Dd7QR7uO.js";const x={title:"Atoms/Textarea",argTypes:i,args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:"inside",mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default",value:""}},e={render:l=>({components:{SolarisTextarea:n},setup(){const t=o("blur");return{args:l,blurElement:t}},template:`<div>
    <SolarisTextarea v-bind="args" @blur="blurElement"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default",value:""}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTextarea
    },
    setup() {
      const blurElement = action('blur');
      return {
        args,
        blurElement
      };
    },
    template: \`<div>
    <SolarisTextarea v-bind="args" @blur="blurElement"/>
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
    maxlength: 900,
    name: 'name',
    placeholder: 'Placeholder',
    readonly: false,
    row: 5,
    size: 'default',
    value: ''
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const h=["WithCounter"];export{e as WithCounter,h as __namedExportsOrder,x as default};
