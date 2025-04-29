import{C as d,L as c,S as u}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./options-Bu0UZnng.js";import{S}from"./Form-BPE212ka.js";import{S as v}from"./Container-4mOEeQBe.js";import{r,w as g}from"./vue.esm-bundler-S_SeJiWS.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BPI5Oo0c.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BH_SZZwx.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Cglt47Yd.js";import"./CheckboxGroup-B7ZiHIw9.js";import"./DropdownLegacy-DXL7ZOkt.js";import"./Flag-CKMlDyvb.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Picture-CRdhf1Nz.js";import"./Input-DA1iUAw4.js";import"./Tooltip-C8TedUek.js";import"./DropdownSimple-BeQ1LJM_.js";import"./Dropdown-BcWqGsmy.js";import"./Message--_6567Go.js";import"./InputPhone-KU7ufUC2.js";import"./InputButton-C0xtaZR9.js";import"./FileUploader-DzarEzLs.js";import"./Notification-BVqXdJdU.js";import"./Collapse-Bil4FeqR.js";import"./types-CX4OQ2kf.js";import"./useTips-yS-55qFh.js";import"./Radio--EVWUfZg.js";import"./Tile-BKc2bv9_.js";import"./Select-BXv_0BDN.js";import"./Switch-C7AQencE.js";import"./ButtonGroup-CQ-4wyjs.js";import"./Textarea-Dx7o3bjo.js";import"./NumberField-CYFr5V0t.js";import"./RangeSlider-Ca2gokUg.js";import"./v4-CQkTLCs1.js";const F=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],w={dropdownB:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:F,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:b,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},be={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:w,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2"}}},e={render:o=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(o.modelValue),n=r(f),m=r(null);g(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:n,form:m,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const Se=["FormF"];export{e as FormF,Se as __namedExportsOrder,be as default};
