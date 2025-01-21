import{r,m}from"./index-CDK2Sd1I.js";import{C as c,L as h,S as f}from"./types-Dd7QR7uO.js";import{s as S}from"./contentExamples-_RNmAYDJ.js";import{r as i,w as b}from"./vue.esm-bundler-BHwbD8xO.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as g}from"./Form-Bw9e4jHa.js";import{S as V}from"./Container-Byn0Stvv.js";import"./v4-CQkTLCs1.js";import"./Datepicker-BuWH4Ykk.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Bng8ioTX.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";import"./generateId-DPOzJEtM.js";import"./Checkbox-BHJD1l2a.js";import"./CheckboxGroup-B09vwubx.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Picture-CBfxdjno.js";import"./Input-CfpJPdR5.js";import"./Tooltip-CcQPO6Um.js";import"./useDropdown-B0lJwPIR.js";import"./DropdownCheckbox-D5E_zZPu.js";import"./DropdownSimple-DW46HI45.js";import"./InputPhone-gU6ACpsM.js";import"./InputButton-KVbnvBA3.js";import"./FileUploader-BPhpaOAK.js";import"./Notification-DOA_utlQ.js";import"./Collapse-B_Mth1Fk.js";import"./useTips-BOECcAvL.js";import"./Radio-CJnrNu4K.js";import"./RadioGroup-B3R1mj47.js";import"./Tile-7N05wgqk.js";import"./Select-B5X4pFpv.js";import"./Switch-CUSkuMtt.js";import"./ButtonGroup-CGPIo7z3.js";import"./Textarea-DC4QhuDO.js";import"./NumberField-Bhgz-Q1z.js";import"./RangeSlider-BLDVKYON.js";const C={switch:{col:"12",type:"switch",props:{id:"switch",label:"Label Switch"},validation:{validators:{required:r},messages:{required:"Le switch est requis!"}}},inputPhone:{col:"12",type:"inputPhone",inputType:"tel",props:{placeholder:"Téléphone",id:"tel",name:"tel",label:"Téléphone"},validation:{validators:{required:r,minLength:m(10)},messages:{required:"Le champ prénom est requis!",minLength:"Votre numéro de téléphone n'est pas complet"}}},inputWithButton:{col:"12",type:"inputButton",props:{id:"inputWithButton",name:"inputWithButton",label:"Label Input With Button",class:"last-name",validateText:"Valider"},validation:{validators:{required:r,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputWithUnit:{col:"12",type:"input",props:{id:"inputWithUnit",name:"inputWithUnit",label:"Label Input With Unit",class:"last-name",unit:{label:"cm",description:"centimeter"}},validation:{validators:{},messages:{}}}},ct={title:"Organisms/Form",argTypes:{},args:{colorStyle:c.default,elements:C,labelPosition:h.outside,size:f.medium,modelValue:{switch:!0,radio:"test",inputPhone:"0123456789",inputWithButton:"Value Input With Button",inputWithUnit:"Value Input With Unit",textarea:"Value Textarea"}}},t={render:o=>({components:{SolarisContainer:V,SolarisForm:g},setup(){const e=i(o.modelValue),p=i(S),u=i(null);b(()=>o.modelValue,d=>{e.value=d},{deep:!0});const n={...o};return delete n.modelValue,{model:e,otherProps:n,formSlot:p,form:u,submit:()=>{v("Submitted model")(e.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire C</h1>

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
    </SolarisContainer>`})};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire C</h1>

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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const ht=["FormC"];export{t as FormC,ht as __namedExportsOrder,ct as default};
