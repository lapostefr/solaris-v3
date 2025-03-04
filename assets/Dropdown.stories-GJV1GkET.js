import{L as i,d as s}from"./types-DKXD8uiR.js";import{D as p,a as d,b as m,S as u}from"./Dropdown-_93MqEx2.js";import{r as c}from"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./index-7Yv3mQsR.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./generateId-CVaf2GGW.js";const g=[{groupName:"Groupe - Color",id:"option1-A-id",label:"Téléphone",value:"option-1A",color:"red"},{groupName:"Groupe - Color",id:"option2-A-id",label:"Micro-informatique",value:"option-2A",color:"green"},{groupName:"Groupe - Color",id:"option3-A-id",label:"Jeux vidéo",value:"option-3A",color:"orange"},{groupName:"Groupe - Color",id:"option4-A-id",label:"Électroménager",value:"option-4A",color:"purple",disabled:!0},{groupName:"Groupe - Icon",id:"option1-B-id",label:"Traçage et mesure",value:"option-1B",icon:"search-keyboard"},{groupName:"Groupe - Icon",id:"option2-B-id",label:"Encre",value:"option-2B",icon:"search-keyboard",disabled:!0},{groupName:"Groupe - Icon",id:"option3-B-id",label:"Enveloppes",value:"option-3B",icon:"search-keyboard"},{groupName:"Groupe - Icon",id:"option4-B-id",label:"Classement",value:"option-4B",icon:"search-keyboard"},{groupName:"Groupe - Image",id:"option1-C-id",label:"Toutes nos offres",value:"option-1C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}}},{groupName:"Groupe - Image",id:"option2-C-id",label:"Autres équipements",value:"option-2C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}}},{groupName:"Groupe - Image",id:"option3-C-id",label:"Applications",value:"option-3C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}},disabled:!0},{groupName:"Groupe - Image",id:"option4-C-id",label:"Souscrire un abonnement",value:"option-4C",image:{width:26,height:26,defaultSource:{url:"https://picsum.photos/26/26",alt:"my image title"}}},{groupName:"Groupe - Flag",id:"monId-AL+355",flag:{name:"AL",alt:"Albanie"},value:"AL",label:"Albanie (+355)"},{groupName:"Groupe - Flag",id:"monId-DZ+213",flag:{name:"DZ",alt:"Algérie"},value:"DZ",label:"Algérie (+213)"},{groupName:"Groupe - Flag",id:"monId-FR+33",flag:{name:"FR",alt:"France"},value:"FR",label:"France (+33)"},{groupName:"Groupe - Flag",id:"monId-GL+299",flag:{name:"GL",alt:"Groenland"},value:"GL",label:"Groenland (+299)"},{groupName:"Groupe - Flag",id:"monId-PS+970",flag:{name:"PS",alt:"Palestine"},value:"PS",label:"Palestine (+970)"},{groupName:"Groupe - Flag",id:"monId-CH+41",flag:{name:"CH",alt:"Suisse"},value:"CH",label:"Suisse (+41)"},{groupName:"Groupe - Flag",id:"monId-TR+90",flag:{name:"TR",alt:"Turquie"},value:"TR",label:"Turquie (+90)"},{groupName:"Groupe - Checkbox",id:"option1-A-id",label:"Option 1A",name:"option1-A-name",value:"Option 1A",checkbox:!0},{groupName:"Groupe - Checkbox",id:"option1-B-id",label:"Option 1B",name:"option1-B-name",value:"Option 1B",checkbox:!0},{groupName:"Groupe - Checkbox",id:"option1-C-id",label:"Option 1C",name:"option1-C-name",value:"Option 1C",checkbox:!0}],o=Object.values(i),x={title:"Atoms/Dropdown/New",argTypes:{dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:s}},control:{type:"object"}},disabled:{description:"Disable/Enable the component",table:{type:{summary:"boolean"}},control:"boolean"},icon:{description:"The dropdown right icon",table:{type:{summary:"string"}}},label:{description:"The dropdown's label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:o.toString()}},control:{type:"select"},options:o},lazyload:{description:"Enable the lazyloading. ",table:{type:{summary:"boolean"}},control:"boolean"},listboxHeight:{description:"Fix height for options List.",table:{type:{summary:"number"}}},loadFlags:{description:"Enables the loading of flags.",table:{type:{summary:"boolean"}},control:"boolean"},mandatory:{description:"Make the Dropdown mandatory.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},message:{description:"Message under the dropdown and above the possible error message.",table:{type:{summary:"string"}}},name:{description:"Name of the component for API.",table:{type:{summary:"string"}},required:!0},options:{description:"Define all options details.",table:{type:{summary:"Array<Option>",detail:`[{
            checkbox?: boolean
            color?: string
            disabled?: boolean
            groupName?: string
            flag?: SolarisFlag
            icon?: string
            id?: string
            image?: SolarisPicture
            label: string
            name?: string
            value: string
          }]`}},required:!0},placeholder:{description:"The dropdown's placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Open the listbox but no selection",table:{type:{summary:"boolean"}},control:"boolean"},size:{description:"Size of the dropdown.",table:{type:{summary:"string"}},control:{type:"select"},options:["small","medium"]},searchField:{description:"Show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"}},control:{type:"select"},options:["contains","startswith"]},selectionType:{description:"Two types of dropdown are possible.",table:{type:{summary:"string"}},control:{type:"select"},options:["simple","multi"]}},args:{dataError:{active:!1,message:""},disabled:!1,icon:"arrow-bottom",label:"Label",labelPosition:i.inside,lazyload:!0,listboxHeight:300,loadFlags:!1,mandatory:!1,message:"Voilà mon message pour le test",name:"nameTemp",options:g,placeholder:"- Sélectionner une option -",readonly:!1,searchField:!1,searchFieldMode:p.CONTAINS,selectionType:d.SIMPLE,size:m.MEDIUM}},e={render:l=>({components:{SolarisDropdown:u},setup(){const n=c("");return{args:l,selection:n}},template:`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdown v-model="selection" v-bind="args" />
    </div>`})};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDropdown
    },
    setup() {
      const selection = ref('');
      return {
        args,
        selection
      };
    },
    template: \`<div style="margin: auto; width: 300px; height: 100vh;">
    <SolarisDropdown v-model="selection" v-bind="args" />
    </div>\`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,x as default};
