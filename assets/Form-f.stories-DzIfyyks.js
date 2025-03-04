import{C as d,L as c,S as u}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./defaultOptions-wvr5blgf.js";import{o as v}from"./options-Bu0UZnng.js";import{S}from"./Form-CWUS_bhz.js";import{S as g}from"./Container-Cohd6eky.js";import{r,w as h}from"./vue.esm-bundler-DbnnIJWB.js";import{a as F}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BK8XWuU9.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Boej8-ka.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-7Yv3mQsR.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CBuZPh0R.js";import"./CheckboxGroup-C0jntYMK.js";import"./DropdownLegacy-Ufqt1JNe.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./DropdownSimple-BF1bXZMa.js";import"./Dropdown-_93MqEx2.js";import"./InputPhone-YndM-Hce.js";import"./InputButton-DNgOpyq9.js";import"./FileUploader-DgIu7geU.js";import"./Notification-5ws3yawP.js";import"./Collapse-1esKams1.js";import"./useTips--vxYfQKv.js";import"./Radio-BA8OiYOd.js";import"./RadioGroup-VaeUIlyf.js";import"./Tile-CcMI_7fP.js";import"./Select-500Krdi8.js";import"./Switch-C4xiRlAu.js";import"./ButtonGroup-a0KpRHA_.js";import"./Textarea-DtQPBA-z.js";import"./NumberField-diz4OiOg.js";import"./RangeSlider-B6S_e4FG.js";import"./v4-CQkTLCs1.js";const w=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],y={dropdown:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:b,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",selectionType:"simple",size:"medium"},validation:{validators:{},messages:{}}},dropdownB:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:w,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:v,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},fe={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:y,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2"}}},e={render:o=>({components:{SolarisContainer:g,SolarisForm:S},setup(){const t=r(o.modelValue),n=r(f),m=r(null);h(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:n,form:m,submit:()=>{F("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire F</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>`})};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisContainer,
      SolarisForm
    },
    setup() {
      const model = ref(args.modelValue);
      const formSlot = ref(slotExample);
      const form = ref(null);
      watch(() => args.modelValue, newModelValue => {
        model.value = newModelValue;
      }, {
        deep: true
      });
      const otherProps = {
        ...args
      };
      delete otherProps.modelValue;
      const submit = () => {
        action('Submitted model')(model.value);
      };
      return {
        model,
        otherProps,
        formSlot,
        form,
        submit
      };
    },
    template: \`<SolarisContainer>
      <h1>Fomulaire F</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const be=["FormF"];export{e as FormF,be as __namedExportsOrder,fe as default};
