import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as l,a as m}from"./Input-CYubRYun.js";import{t as c,d as u}from"./details-BVBOxkrW.js";import{a as d}from"./argsType-DZmVIovu.js";import{L as f}from"./types-DKXD8uiR.js";import{r as g}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-D1JQ9w2q.js";import"./index-KgIASP7u.js";import"./generateId-CVaf2GGW.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./Message-COM7xYSp.js";const h="inline-flex",y=!1,b=!1,v=!1,w=8,D="top",I="default",S="hover",x="search-loupe",E={displayElement:h,forceShow:y,forcePlacement:b,isManual:v,offset:w,placement:D,tooltipStyle:I,trigger:S,triggerIcon:x},J={title:"Atoms/TextInput/Default",component:l,argTypes:{...d,hideLabel:{description:"Hide the label.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},icon:{description:"Display an icon.",table:{type:{summary:"string"}}},role:{description:"Defining an input role.",table:{type:{summary:"string"}}},tooltipComponent:{description:`Display tooltip.
        This prop allows you to customize the display and behavior of the tooltip. Use also the *tooltipContent* slot to define the contents of the tooltip.`,table:{type:{summary:"object",detail:c},defaultValue:{summary:JSON.stringify({displayElement:"inline-flex",forcePlacement:!1,offset:8,placement:"top",tooltipStyle:"default",trigger:"hover",triggerIcon:"search-loupe"},null,2)}},control:{type:"object"}},unit:{description:"Displays a unit and its full description. If label is an abbreviation (ex: cm), the description is required (ex: centimeters).",table:{type:{summary:"object",detail:u}},control:{type:"object"}}},args:{aria:{describedby:"info-text-id"},autocomplete:"off",autofocus:!1,dataError:{active:!1,message:"Message d'erreur"},disabled:!1,error:!1,hideLabel:!1,icon:"search-loupe",id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",labelPosition:f.inside,mandatory:!1,max:99,maxlength:30,message:"Voilà le message",min:10,numericOnly:!1,name:"name",placeholder:"",readonly:!1,role:"",size:m.medium,success:!1,tooltipComponent:E,type:"text",unit:{label:"cm",description:"centimeter"}}},e={render:s=>({components:{SolarisInput:l},setup(){const t=g(),r=o("Change"),p=o("input")(t.value);return{args:s,changeElement:r,inputData:t,showModel:p}},template:`<div style="height: calc(100vh - 2rem); padding: 15vh 3vw;" @input="changeElement">
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
    </div>`})};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,J as default};
