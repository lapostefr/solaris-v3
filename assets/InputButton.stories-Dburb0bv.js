import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as s}from"./InputButton-DaUXfMSM.js";import{d as p}from"./details-BVBOxkrW.js";import{a as m}from"./argsType-DZmVIovu.js";import{L as c}from"./types-DKXD8uiR.js";import{r as d}from"./vue.esm-bundler-BQVOD3cV.js";import{a as f}from"./Input-CYubRYun.js";import"./v4-CQkTLCs1.js";import"./Button-qisKMu5t.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DlskW7bR.js";import"./Tooltip-D1JQ9w2q.js";import"./index-KgIASP7u.js";import"./generateId-CVaf2GGW.js";import"./Message-COM7xYSp.js";const A={title:"Atoms/TextInput/Button",component:s,argTypes:{...m,cancelText:{description:"Text for cancellation.",table:{type:{summary:"string"},defaultValue:{summary:"Annuler"}}},hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},initButtonState:{description:"Change the status of the button when loading.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"default"},control:{type:"boolean"}},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:p}},control:{type:"object"}},validateText:{description:"The text of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"Valider"}}},args:{aria:{label:"test"},autocomplete:"on",autofocus:!1,cancelText:"Annuler",dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"",id:"monId",initButtonState:!1,inputRefStr:"input",isQuiet:!1,hideLabel:!1,label:"My super Input Text",labelPosition:c.inside,mandatory:!1,max:120,maxlength:30,message:"Voilà le message",min:0,name:"name",placeholder:"",readonly:!1,size:f.default,success:!1,type:"text",unit:{label:"cm",description:"centimeter"},validateText:"Valider"}},t={render:r=>({components:{SolarisInputButton:s},setup(){const e=d(),l=a("click"),u=a("input",e.value);return{args:r,actionButton:l,inputData:e,showModel:u}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
    <SolarisInputButton v-model="inputData" v-bind="args" @input="showModel" @buttonClicked="actionButton"/>
  </div>`})};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInputButton
    },
    setup() {
      const inputData = ref();
      const actionButton = action('click');
      const showModel = action('input', inputData.value);
      return {
        args,
        actionButton,
        inputData,
        showModel
      };
    },
    template: \`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
    <SolarisInputButton v-model="inputData" v-bind="args" @input="showModel" @buttonClicked="actionButton"/>
  </div>\`
  })
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const C=["Button"];export{t as Button,C as __namedExportsOrder,A as default};
