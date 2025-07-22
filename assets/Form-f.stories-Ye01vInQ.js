import{C as d,L as c,S as u}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./options-Bu0UZnng.js";import{S}from"./Form-DWufw0pa.js";import{S as v}from"./Container-NrtmUGg6.js";import{r,w as g}from"./vue.esm-bundler-BQVOD3cV.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D6S1gCMb.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bz21hexC.js";import"./CheckboxGroup-DkCNss51.js";import"./DropdownLegacy-DmQ0owFG.js";import"./Flag-ZAST6x_H.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Picture-iFfEkxpL.js";import"./Input-CYubRYun.js";import"./Tooltip-D1JQ9w2q.js";import"./DropdownSimple-BPyFiHEv.js";import"./Dropdown-Baz_At0U.js";import"./InputPhone-Cen7CQLu.js";import"./InputButton-DaUXfMSM.js";import"./FileUploader-Dk3E3pJ4.js";import"./Notification-lGc5pTbv.js";import"./Collapse-CARPdCeu.js";import"./types-CX4OQ2kf.js";import"./useTips-B26kB0Ta.js";import"./Radio-BX2bMz80.js";import"./Tile-CLzz_d_O.js";import"./Select-DTwz-9EH.js";import"./Switch-AVrTsyVL.js";import"./ButtonGroup-BuatuvYZ.js";import"./Textarea-C6EZ-NJZ.js";import"./NumberField-ArBv8zlJ.js";import"./RangeSlider-CwHgxAxt.js";import"./SegmentedControl-Cg0Zm6-C.js";import"./Badge-CNyb-hIR.js";import"./types-BTVVhIqi.js";import"./Shadow-T-9zCUlx.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const F=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],w={dropdownB:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:F,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:b,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},Fe={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:w,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2"}}},e={render:o=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(o.modelValue),s=r(f),n=r(null);g(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:s,form:n,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
    </SolarisContainer>`})};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const we=["FormF"];export{e as FormF,we as __namedExportsOrder,Fe as default};
