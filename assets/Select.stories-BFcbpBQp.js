import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Select-DTwz-9EH.js";import{o as u}from"./options-Bu0UZnng.js";import{L as e}from"./types-DKXD8uiR.js";import{r as d,w as b}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Message-COM7xYSp.js";const y=`[
  value: string | number,
  label: string,
  disabled?: boolean
]`,f=`{
  active: boolean,
  message: string
}`,g=`{
  [key: string]: string
}`,h=Object.values(e),x={title:"Atoms/Select",argTypes:{aria:{description:"Objet containing custom aria attributes to be applied to the field.",table:{type:{summary:"object",detail:g}},control:"object"},autocomplete:{description:"Use the correct value to auto-populate user info. If the field not concern personal data, leave the attribute empty or set it to off. See [WCAG input purpose](https://www.w3.org/Translations/WCAG21-fr/#input-purposes) and [autocomplete list](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liste-des-valeurs-possibles-pour-l-attribut-autocomplete)",table:{type:{summary:"string"}}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:f}},control:{type:"object"}},disabled:{description:"Disabled the select.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},icon:{description:"Icon on the right of the select.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},id:{description:"The select id.",table:{type:{summary:"string"}},required:!0},inputRef:{description:"Input reference.",table:{type:{summary:"string"},defaultValue:{summary:"select"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:h.join(" | ")},defaultValue:{summary:e.inside}},control:{type:"select"},options:[e.inside,e.outside]},mandatory:{description:"Makes the select mandatory.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},name:{description:"The select name.",table:{type:{summary:"string"}},required:!0},options:{description:"The options of the select.",table:{type:{summary:"object",detail:y}},required:!0},placeholder:{description:"The placeholder of the select.",table:{type:{summary:"string"}}},readonly:{description:"Change the select to read-only.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},size:{description:"The size of the textarea.",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},error:{description:'Show an error for the select. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:!1,control:{type:"boolean"}}},args:{aria:{label:"name",describedby:"info-text-id"},autocomplete:"off",dataError:{active:!1,message:"Message d'erreur"},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label",labelPosition:e.inside,mandatory:!1,message:"Voilà le message",name:"name",options:u,placeholder:"-Sélectionner une option-",readonly:!1,size:"default"}},t={render:a=>({components:{SolarisSelect:m},setup(){const o=d("3");b(()=>a.value,p=>{o.value=p});const i=r("change"),c=r("blur");return{args:a,elementInput:i,elementBlur:c,selectData:o}},template:'<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'})};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSelect
    },
    setup() {
      const selectData = ref('3');
      watch(() => args.value, (value: string) => {
        selectData.value = value;
      });
      const elementInput = action('change');
      const elementBlur = action('blur');
      return {
        args,
        elementInput,
        elementBlur,
        selectData
      };
    },
    template: '<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'
  })
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const B=["Select"];export{t as Select,B as __namedExportsOrder,x as default};
