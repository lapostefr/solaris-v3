import{C as s,L as u,S as c}from"./types-DKXD8uiR.js";import{r as b}from"./index-C8gaitkE.js";import{r as t,w as f}from"./vue.esm-bundler-BQVOD3cV.js";import{s as v}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-DWufw0pa.js";import{S as y}from"./Container-NrtmUGg6.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D6S1gCMb.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bz21hexC.js";import"./CheckboxGroup-DkCNss51.js";import"./DropdownLegacy-DmQ0owFG.js";import"./Flag-ZAST6x_H.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Picture-iFfEkxpL.js";import"./Input-CYubRYun.js";import"./Tooltip-D1JQ9w2q.js";import"./DropdownSimple-BPyFiHEv.js";import"./Dropdown-Baz_At0U.js";import"./InputPhone-Cen7CQLu.js";import"./InputButton-DaUXfMSM.js";import"./FileUploader-Dk3E3pJ4.js";import"./Notification-lGc5pTbv.js";import"./Collapse-CARPdCeu.js";import"./types-CX4OQ2kf.js";import"./useTips-B26kB0Ta.js";import"./Radio-BX2bMz80.js";import"./Tile-CLzz_d_O.js";import"./Select-DTwz-9EH.js";import"./Switch-AVrTsyVL.js";import"./ButtonGroup-BuatuvYZ.js";import"./Textarea-C6EZ-NJZ.js";import"./NumberField-ArBv8zlJ.js";import"./RangeSlider-CwHgxAxt.js";import"./SegmentedControl-Cg0Zm6-C.js";import"./Badge-CNyb-hIR.js";import"./types-BTVVhIqi.js";import"./Shadow-T-9zCUlx.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:s.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",labelPosition:"visually-hidden",name:"NumberField",min:1,max:99},validation:{validators:{},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},ge={title:"Organisms/Form",argTypes:{},args:{colorStyle:s.default,elements:h,labelPosition:u.outside,size:c.small,modelValue:{checkboxB:!0,numberField:2,rangeSlider:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},select:"type1"}}},e={render:o=>({components:{SolarisContainer:y,SolarisForm:S},setup(){const r=t(o.modelValue),n=t(v),p=t(null);f(()=>o.modelValue,d=>{r.value=d},{deep:!0});const l={...o};return delete l.modelValue,{model:r,otherProps:l,formSlot:n,form:p,submit:()=>{g("Submitted model")(r.value)}}},template:`<SolarisContainer>
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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const he=["FormB"];export{e as FormB,he as __namedExportsOrder,ge as default};
