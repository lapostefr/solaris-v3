import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as n,c as p}from"./details-EClPA87j.js";import{L as s}from"./types-Dd7QR7uO.js";import{w as d}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";const m=Object.values(s),g={title:"Atoms/Dropdown/Simple",parameters:{layout:"centered"},decorators:[()=>({template:'<div style="width: 300px; "><story/></div>'})],argTypes:{active:{description:"State of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"active"}},control:{type:"select"},options:["active","readonly","disabled"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:n}},control:{type:"object"}},id:{description:"ID to associate label property.",table:{type:{summary:"string"}},required:!0},label:{description:"The dropdown's label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:m.join(" | ")},defaultValue:{summary:"inside"}},control:{type:"select"},options:Object.keys(s)},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},message:{description:"Message under the dropdown and above the possible error message.",table:{type:{summary:"string"}}},options:{description:"Define all options details. ",table:{type:{summary:"array",detail:p}},required:!0},picto:{description:"The picto to the right.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},placeholder:{description:"The dropdown's placeholder",table:{type:{summary:"string"}}},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},size:{description:"Size of the dropdown.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:["default","compact","regular","small","medium"]}},args:{active:"active",dataError:{active:!1,message:""},options:[{label:"simple label",value:"simplelabel"},{label:"other label",value:"otherlabel"}],id:"idTemp",label:"Label",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",modelValue:"simplelabel"}},e={render:t=>({setup(){return d(()=>t.value,i=>{l("Change")(i)}),{args:t}},template:'<SolarisDropdownSimple v-model="args.modelValue" v-bind="args" />'})};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      watch(() => args.value, val => {
        action('Change')(val);
      });
      return {
        args
      };
    },
    template: \`<SolarisDropdownSimple v-model="args.modelValue" v-bind="args" />\`
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["Simple"];export{e as Simple,f as __namedExportsOrder,g as default};
