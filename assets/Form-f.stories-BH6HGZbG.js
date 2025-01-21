import{C as d,L as c,S as u}from"./types-Dd7QR7uO.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./defaultOptions-wvr5blgf.js";import{o as v}from"./checkboxOptions-rfuYRKMv.js";import{o as S}from"./options-Bu0UZnng.js";import{S as h}from"./Form-Bw9e4jHa.js";import{S as g}from"./Container-Byn0Stvv.js";import{r,w as F}from"./vue.esm-bundler-BHwbD8xO.js";import{a as w}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BuWH4Ykk.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Bng8ioTX.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";import"./generateId-DPOzJEtM.js";import"./Checkbox-BHJD1l2a.js";import"./CheckboxGroup-B09vwubx.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Picture-CBfxdjno.js";import"./Input-CfpJPdR5.js";import"./Tooltip-CcQPO6Um.js";import"./useDropdown-B0lJwPIR.js";import"./DropdownCheckbox-D5E_zZPu.js";import"./DropdownSimple-DW46HI45.js";import"./InputPhone-gU6ACpsM.js";import"./InputButton-KVbnvBA3.js";import"./FileUploader-BPhpaOAK.js";import"./Notification-DOA_utlQ.js";import"./Collapse-B_Mth1Fk.js";import"./useTips-BOECcAvL.js";import"./Radio-CJnrNu4K.js";import"./RadioGroup-B3R1mj47.js";import"./Tile-7N05wgqk.js";import"./Select-B5X4pFpv.js";import"./Switch-CUSkuMtt.js";import"./ButtonGroup-CGPIo7z3.js";import"./Textarea-DC4QhuDO.js";import"./NumberField-Bhgz-Q1z.js";import"./RangeSlider-BLDVKYON.js";import"./v4-CQkTLCs1.js";const C=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],E={dropdown:{col:"12",type:"dropdown",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:b,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",selectionType:"simple",size:"medium"},validation:{validators:{},messages:{}}},dropdownB:{col:"12",type:"dropdown",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownC:{col:"12",type:"dropdownCheckbox",props:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},id:"idTempCheckbox",label:"Label Dropdown Checkbox",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTempCheckbox",nesting:!1,options:v,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:C,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:S,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},Se={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2",dropdownC:["Option 1A"]}}},e={render:o=>({components:{SolarisContainer:g,SolarisForm:h},setup(){const t=r(o.modelValue),n=r(f),m=r(null);F(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:n,form:m,submit:()=>{w("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
    </SolarisContainer>`})};var i,l,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const he=["FormF"];export{e as FormF,he as __namedExportsOrder,Se as default};
