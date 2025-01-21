import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{b as m,c as u}from"./Input-CfpJPdR5.js";import{d as c,a as y,c as d,b}from"./details-DCO6kuGf.js";import{L as t}from"./types-Dd7QR7uO.js";import{r as f}from"./vue.esm-bundler-BHwbD8xO.js";import"./v4-CQkTLCs1.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-CcQPO6Um.js";import"./index-pMn-qRVg.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./generateId-DPOzJEtM.js";const h="inline-flex",g=!1,v=!1,x=!1,w=8,T="top",D="default",I="hover",S="search-loupe",V={displayElement:h,forceShow:g,forcePlacement:v,isManual:x,offset:w,placement:T,tooltipStyle:D,trigger:I,triggerIcon:S},E=Object.values(t),U={title:"Atoms/TextInput/Default",argTypes:{aria:{description:"Aria attributes",table:{type:{summary:"object",detail:c}},control:{type:"object"}},autocomplete:{description:"Autocompletion value",table:{type:{summary:"string"}}},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:y}},control:{type:"object"}},disabled:{description:"Disables the field.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},inputRefStr:{description:"The Input Text reference.",table:{type:{summary:"string"}},defaultValue:{summary:"input"}},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:E.join(" | ")},defaultValue:{summary:"inside"}},control:{type:"select"},options:[t.inside,t.outside]},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},max:{description:"Maximum value for the input. *Works with input type number or if numericonly is setted to true.*",table:{type:{summary:"number"}}},maxlength:{description:"Maximum length of the input. *Does not apply to the type number.*",table:{type:{summary:"number"}}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},numericOnly:{description:"only numeric values are allowed",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},min:{description:"Minimum value for the input. *Works with input type number or if numericonly is setted to true.*",table:{type:{summary:"number"}}},name:{description:"The Input Text name.",table:{type:{summary:"string"}},required:!0},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},suggestions:{description:"Display suggestions.",table:{type:{summary:"array",detail:d}}},tooltipComponent:{description:`Display tooltip.
        This prop allows you to customize the display and behavior of the tooltip. Use also the *tooltipContent* slot to define the contents of the tooltip.`,table:{type:{summary:"object"},defaultValue:{summary:JSON.stringify({displayElement:"inline-flex",forcePlacement:!1,offset:8,placement:"top",tooltipStyle:"default",trigger:"hover",triggerIcon:"search-loupe"},null,2)}},control:{type:"object"}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"].join(" | ")}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:b}},control:{type:"object"}},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:"false"},control:{type:"boolean"}},onBlur:{description:"Triggered when input loses focus.",table:{category:"Events"},action:"blur"},onInput:{description:"Triggered when typing in the input.",table:{category:"Events"},action:"changed"}},args:{aria:{label:"test"},autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,icon:"search-loupe",id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,max:99,maxlength:30,message:"Voilà le message",min:10,numericOnly:!1,name:"name",placeholder:"",readonly:!1,size:m.medium,success:!1,tooltipComponent:V,type:"text",unit:{label:"cm",description:"centimeter"}}},e={render:s=>({components:{SolarisInput:u},setup(){const a=f(),r=o("Change"),p=o("input")(a.value);return{args:s,changeElement:r,inputData:a,showModel:p}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;" @input="changeElement">
      <SolarisInput v-model="inputData" v-bind="args" @input="showModel">
        <template #tooltipContent>
          <p style="margin: 0;">
          Tooltip 
            <a style="display: inline-block;" href="https://www.laposte.fr/mon-timbre-en-ligne/gamme-etiquettes"
              target="_blank"
            >
              lien
            </a>
            information
          </p>
        </template>
      </SolarisInput>
    </div>`})};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInput
    },
    setup() {
      const inputData = ref();
      const changeElement = action('Change');
      const showModel = action('input')(inputData.value);
      return {
        args,
        changeElement,
        inputData,
        showModel
      };
    },
    template: \`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;" @input="changeElement">
      <SolarisInput v-model="inputData" v-bind="args" @input="showModel">
        <template #tooltipContent>
          <p style="margin: 0;">
          Tooltip 
            <a style="display: inline-block;" href="https://www.laposte.fr/mon-timbre-en-ligne/gamme-etiquettes"
              target="_blank"
            >
              lien
            </a>
            information
          </p>
        </template>
      </SolarisInput>
    </div>\`
  })
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const W=["Default"];export{e as Default,W as __namedExportsOrder,U as default};
