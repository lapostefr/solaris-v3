import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c,S as d}from"./InputPhone-Cen7CQLu.js";import{r as m}from"./vue.esm-bundler-BQVOD3cV.js";import{c as h}from"./argsType-DZmVIovu.js";import{D as a}from"./Dropdown-Baz_At0U.js";import{a as f}from"./Input-CYubRYun.js";import"./v4-CQkTLCs1.js";import"./Flag-ZAST6x_H.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./index-KgIASP7u.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./details-BVBOxkrW.js";import"./types-DKXD8uiR.js";import"./Icon-CNTEbVSX.js";import"./Picture-iFfEkxpL.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";import"./Tooltip-D1JQ9w2q.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";const y=["AL","NL","FR","DZ","PS","GL","CH","TR"],b=Object.values(a);let o=[];o=c.map(e=>Object.keys(e)[0]).sort((e,r)=>e.localeCompare(r));o.unshift("");const Q={title:"Atoms/TextInput/Phone",component:d,argTypes:{...h,countryIsoFilter:{description:"<b>Version simple</b>. Filter a country ISO code. <br><i> When filled, it removes the dropdown behavior.<br>Choose the first empty option to test dropdown version.",table:{type:{summary:"string"}},control:{type:"select"},options:o},defaultCountryIso:{description:"<b>Version with dropdown</b> and show a default country.",table:{type:{summary:"string"}},defaultValue:{summary:"FR"},control:{type:"select"},options:o},excludedCountryList:{description:"List of countries ISO codes to exclude. <br> Please use Docs section for testing.",table:{type:{summary:"Array<string>"}},defaultValue:{summary:"[]"},control:{type:"object"}},searchField:{description:"On the dropdown version, show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:a.CONTAINS}},control:{type:"select"},options:b},sendInputEmitOnblur:{description:"Emit input sent when field is left",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:{type:"boolean"}},specifiedCountryList:{description:"List of specified country ISO codes <i>(please remove it  from the story if you want to test full list of countries).</i> <br>Please use Docs section for testing.",table:{type:{summary:"Array<string>"}},defaultValue:{summary:"[]"},control:{type:"object"}}}},t={render:e=>({components:{SolarisInputPhone:d},setup(){const r=s("blur"),p=s("Phone Code"),n=m("+33612345678");return{args:e,inputData:n,elementBlur:r,elementPhoneCode:p,showModel:()=>s("input")(n.value)}},template:`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone v-model="inputData" v-bind="args" @input="showModel" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
  </div>`}),args:{aria:{label:"test"},autocomplete:"off",autofocus:!1,countryIsoFilter:"",dataError:{active:!1,message:""},defaultCountryIso:"FR",disabled:!1,error:!1,excludedCountryList:["NL"],id:"monId",isQuiet:!1,label:"My super Input Phone",mandatory:!1,maxlength:30,message:"Voilà le message",name:"name",placeholder:"",readonly:!1,searchField:!1,searchFieldMode:a.CONTAINS,sendInputEmitOnblur:!0,size:f.default,specifiedCountryList:y,success:!1,type:"tel"}};var i,l,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInputPhone
    },
    setup() {
      const elementBlur = action('blur');
      const elementPhoneCode = action('Phone Code');
      const inputData = ref('+33612345678');
      const showModel = () => action('input')(inputData.value);
      return {
        args,
        inputData,
        elementBlur,
        elementPhoneCode,
        showModel
      };
    },
    template: \`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone v-model="inputData" v-bind="args" @input="showModel" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
  </div>\`
  }),
  args: {
    aria: {
      label: 'test'
    },
    autocomplete: 'off',
    autofocus: false,
    // cancelText: 'Annuler',
    countryIsoFilter: '',
    dataError: {
      active: false,
      message: ''
    },
    defaultCountryIso: 'FR',
    disabled: false,
    error: false,
    excludedCountryList: ['NL'],
    // initButtonState: false,
    // inputRef: 'input',
    id: 'monId',
    isQuiet: false,
    label: 'My super Input Phone',
    mandatory: false,
    maxlength: 30,
    message: 'Voilà le message',
    name: 'name',
    placeholder: '',
    readonly: false,
    searchField: false,
    searchFieldMode: DropdownSearchMode.CONTAINS,
    sendInputEmitOnblur: true,
    size: Size.default,
    specifiedCountryList: specifiedCountryList,
    success: false,
    type: 'tel'
    // value: '+33612345678'
    // validateText: 'Valider'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const _=["Phone"];export{t as Phone,_ as __namedExportsOrder,Q as default};
