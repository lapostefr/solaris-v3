import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as l}from"./Textarea-C6EZ-NJZ.js";import{L as i}from"./types-DKXD8uiR.js";import{c as m}from"./argsType-Dv5GTBuQ.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BQVOD3cV.js";import"./Message-COM7xYSp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Atoms/Textarea",argTypes:{...m,maxlength:{description:"Maximum number of characters allowed",table:{type:{summary:"number"}}}},args:{aria:{describedby:"info-text-id"},autofocus:!1,dataError:{active:!1,message:"Message d'erreur"},description:"",disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:i.inside,mandatory:!1,message:"Voilà le message",maxlength:900,name:"name",placeholder:"Placeholder",readonly:!1,row:5,size:"default"}},e={render:s=>({components:{SolarisTextarea:l},setup(){const o=n("blur");return{args:s,blurElement:o}},template:`<div>
      <SolarisTextarea v-bind="args" @blur="blurElement"/>
    </div>`})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
  })
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const T=["WithCounter"];export{e as WithCounter,T as __namedExportsOrder,y as default};
