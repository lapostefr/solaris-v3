import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./InputButton-CX0TSjAc.js";import{d as p,a as c,b as d}from"./details-DCO6kuGf.js";import{L as i}from"./types-Dd7QR7uO.js";import{r as y}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Input-B2dYoFF6.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip--bRklYKV.js";import"./index-Lw3s2UWX.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./generateId-DPOzJEtM.js";const b=[{label:"un",value:1},{label:"deux",value:2}],f=Object.values(i),k={title:"Atoms/TextInput/Button",argTypes:{aria:{description:"Aria attributes",table:{type:{summary:"object",detail:p}},control:"object"},autocomplete:{description:"Active autocompletion.",table:{type:{summary:"string"}},defaultValue:{summary:"on"},control:{type:"select"},options:["on","off"]},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},cancelText:{description:"Text for cancellation.",table:{type:{summary:"string"},defaultValue:{summary:"Annuler"}}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:"object"},disabled:{description:"Disables the field.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},initButtonState:{description:"Change the status of the button when loading.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:f},defaultValue:{summary:"inside"}},control:{type:"select"},options:i},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},max:{description:"Maximum value for the input.",table:{type:{summary:"number"}}},maxlength:{description:"Maximum length of the input.",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},min:{description:"Minimum value for the input.",table:{type:{summary:"number"}}},name:{description:"The Input Text name.",table:{type:{summary:"string"}}},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"default"},control:{type:"boolean"}},tooltip:{description:"The text of the tooltip.",table:{type:{summary:"string"}}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"].join(" | ")}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:d}},control:{type:"object"}},validateText:{description:"The text of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"Valider"}},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:"false"},control:{type:"boolean"}}},args:{aria:{label:"test"},autocomplete:"on",autofocus:!1,cancelText:"Annuler",dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"",id:"monId",initButtonState:!1,inputRef:"input",isQuiet:!1,hideLabel:!1,label:"My super Input Text",mandatory:!1,max:120,maxlength:30,message:"Voilà le message",min:0,name:"name",placeholder:"",readonly:!1,size:"default",success:!1,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"},validateText:"Valider"}},e={render:n=>({components:{SolarisInputButton:m},setup(){const t=y(),r=a("click"),u=a("input",t.value);return{args:n,actionButton:r,inputData:t,showModel:u}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
    <SolarisInputButton v-model="inputData" v-bind="args" @input="showModel" @buttonClicked="actionButton"/>
  </div>`}),args:{autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"My super Input Text",labelPosition:"inside",mandatory:!1,message:"Voilà le message",max:120,maxlength:30,name:"name",placeholder:"",readonly:!1,size:"default",success:!1,suggestions:b,tooltip:"Tooltip text",type:"text",unit:{label:"cm",description:"centimeter"},validateText:"Valider"}};var o,l,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  }),
  args: {
    autofocus: false,
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    id: 'monId',
    label: 'My super Input Text',
    labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    max: 120,
    maxlength: 30,
    name: 'name',
    placeholder: '',
    readonly: false,
    size: 'default',
    success: false,
    suggestions: suggestions,
    tooltip: 'Tooltip text',
    type: 'text',
    unit: {
      label: 'cm',
      description: 'centimeter'
    },
    validateText: 'Valider'
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const C=["Button"];export{e as Button,C as __namedExportsOrder,k as default};
