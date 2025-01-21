import{C as s,L as u,S as c}from"./types-Dd7QR7uO.js";import{r as b}from"./index-CDK2Sd1I.js";import{r as t,w as f}from"./vue.esm-bundler-BHwbD8xO.js";import{s as v}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-Bw9e4jHa.js";import{S as y}from"./Container-Byn0Stvv.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BuWH4Ykk.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Bng8ioTX.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";import"./generateId-DPOzJEtM.js";import"./Checkbox-BHJD1l2a.js";import"./CheckboxGroup-B09vwubx.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Picture-CBfxdjno.js";import"./Input-CfpJPdR5.js";import"./Tooltip-CcQPO6Um.js";import"./useDropdown-B0lJwPIR.js";import"./DropdownCheckbox-D5E_zZPu.js";import"./DropdownSimple-DW46HI45.js";import"./InputPhone-gU6ACpsM.js";import"./InputButton-KVbnvBA3.js";import"./FileUploader-BPhpaOAK.js";import"./Notification-DOA_utlQ.js";import"./Collapse-B_Mth1Fk.js";import"./useTips-BOECcAvL.js";import"./Radio-CJnrNu4K.js";import"./RadioGroup-B3R1mj47.js";import"./Tile-7N05wgqk.js";import"./Select-B5X4pFpv.js";import"./Switch-CUSkuMtt.js";import"./ButtonGroup-CGPIo7z3.js";import"./Textarea-DC4QhuDO.js";import"./NumberField-Bhgz-Q1z.js";import"./RangeSlider-BLDVKYON.js";import"./v4-CQkTLCs1.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:s.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",labelPosition:"visually-hidden",name:"NumberField",min:1,max:99},validation:{validators:{},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},ue={title:"Organisms/Form",argTypes:{},args:{colorStyle:s.default,elements:h,labelPosition:u.outside,size:c.small,modelValue:{checkboxB:!0,numberField:2,rangeSlider:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},select:"type1"}}},e={render:o=>({components:{SolarisContainer:y,SolarisForm:S},setup(){const r=t(o.modelValue),n=t(v),p=t(null);f(()=>o.modelValue,d=>{r.value=d},{deep:!0});const l={...o};return delete l.modelValue,{model:r,otherProps:l,formSlot:n,form:p,submit:()=>{g("Submitted model")(r.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire B</h1>

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
    </SolarisContainer>`})};var a,m,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire B</h1>

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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const ce=["FormB"];export{e as FormB,ce as __namedExportsOrder,ue as default};
