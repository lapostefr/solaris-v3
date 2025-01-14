import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as c,a as p}from"./details-EClPA87j.js";import{o as i}from"./checkboxOptions-CEjxT4Ru.js";import{L as s}from"./types-Dd7QR7uO.js";import{S as d}from"./DropdownCheckbox-xVxrGBDU.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Input-B2dYoFF6.js";import"./Tooltip--bRklYKV.js";import"./index-Lw3s2UWX.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./generateId-DPOzJEtM.js";import"./CheckboxGroup-Bc-SERGa.js";import"./Checkbox-1Ng9DjFN.js";import"./useDropdown-DKauCvUi.js";const u=Object.values(s),L={title:"Atoms/Dropdown/Checkbox",argTypes:{active:{description:"State of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"active"}},control:{type:"select"},options:["active","readonly","disabled"],required:!0},activeGroup:{description:"Enable/disable group mode.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:{type:"object"}},label:{description:"The label of dropdown",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:u.join(" | ")},defaultValue:{summary:"inside"}},control:{type:"select"},options:s},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},mandatory:{description:"Make the Dropdown mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},message:{description:"Message under the dropdown and above the possible error message.",table:{type:{summary:"string"}}},nesting:{description:"Enable/disable nesting checkbox mode.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},name:{description:"Name of the component for API.",table:{type:{summary:"string"}},required:!0},options:{description:"Define all options details.",table:{type:{summary:"array",detail:p}},required:!0},picto:{description:"The picto to the right.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},placeholder:{description:"The dropdown's placeholder.",table:{type:{summary:"string"}}},size:{description:"Size of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:["default","compact","regular","small","medium"]},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},multiSelected:{description:"Event at change on the selection in the list.",table:{category:"Events"}}},args:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},id:"idTempCheckbox",label:"Label",labelPosition:"inside",listboxHeight:300,mandatory:!1,message:"Message pour le test",name:"nameTempCheckbox",nesting:!1,options:i,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"}},e={render:l=>({components:{SolarisDropdownCheckbox:d},setup(){const n=t("MultiSelected"),m=t("Change");return{args:l,elementSelectedMulti:n,elementChange:m}},template:`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdownCheckbox v-bind="{...args}" @multiSelected="elementSelectedMulti" @change="elementChange"/>
    </div>`}),args:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},error:"",id:"idTempCheckbox",label:"Label",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTempCheckbox",nesting:!1,options:i,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDropdownCheckbox
    },
    setup() {
      const elementSelectedMulti = action('MultiSelected');
      const elementChange = action('Change');
      return {
        args,
        elementSelectedMulti,
        elementChange
      };
    },
    template: \`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdownCheckbox v-bind="{...args}" @multiSelected="elementSelectedMulti" @change="elementChange"/>
    </div>\`
  }),
  args: {
    active: 'active',
    activeGroup: true,
    dataError: {
      active: false,
      message: ''
    },
    error: '',
    id: 'idTempCheckbox',
    label: 'Label',
    labelPosition: 'inside',
    listboxHeight: 300,
    message: 'Message pour le test',
    name: 'nameTempCheckbox',
    nesting: false,
    options: options,
    picto: 'arrow-bottom',
    placeholder: '-Sélectionner une option-',
    searchField: false,
    searchFieldMode: 'contains',
    size: 'default',
    type: 'multi'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const z=["Checkbox"];export{e as Checkbox,z as __namedExportsOrder,L as default};
