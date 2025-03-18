import{C as s,L as u,S as c}from"./types-DKXD8uiR.js";import{r as b}from"./index-DU1z2gU3.js";import{r as t,w as f}from"./vue.esm-bundler-BIhSTzsT.js";import{s as v}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-CjIwfF3_.js";import{S as y}from"./Container-D6yQEqWb.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D8APteRP.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-VbIBO5f1.js";import"./Button-CGWBbttc.js";import"./Loader-zDVSlyhy.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-BaiQJBqJ.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CAW1jdel.js";import"./CheckboxGroup-C9om3WOh.js";import"./DropdownLegacy-CDR30zc5.js";import"./Flag-Dr1gNV3C.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./Picture-DIMOpAs8.js";import"./Input-BxxbZeE9.js";import"./Tooltip-Bdf-DHgJ.js";import"./DropdownSimple-D1b2Krou.js";import"./Dropdown-BiqI4tYG.js";import"./InputPhone-CuoneMOx.js";import"./InputButton-BPfGjX0D.js";import"./FileUploader-CqT6FxrR.js";import"./Notification-BKiJZPcV.js";import"./Collapse-CVKvXEFZ.js";import"./useTips-B5jVkqXZ.js";import"./Radio-BdOzcDoT.js";import"./RadioGroup-Cs9BRrpN.js";import"./Tile-oPGKDV1H.js";import"./Select-DFr0BS_t.js";import"./Switch-D2hb4KcK.js";import"./ButtonGroup-BdaU5Drt.js";import"./Textarea-BYnugDXW.js";import"./NumberField-BsLz6Nrb.js";import"./RangeSlider-CzjqhVWN.js";import"./v4-CQkTLCs1.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:s.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",labelPosition:"visually-hidden",name:"NumberField",min:1,max:99},validation:{validators:{},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},de={title:"Organisms/Form",argTypes:{},args:{colorStyle:s.default,elements:h,labelPosition:u.outside,size:c.small,modelValue:{checkboxB:!0,numberField:2,rangeSlider:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},select:"type1"}}},e={render:o=>({components:{SolarisContainer:y,SolarisForm:S},setup(){const r=t(o.modelValue),n=t(v),p=t(null);f(()=>o.modelValue,d=>{r.value=d},{deep:!0});const l={...o};return delete l.modelValue,{model:r,otherProps:l,formSlot:n,form:p,submit:()=>{g("Submitted model")(r.value)}}},template:`<SolarisContainer>
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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const ue=["FormB"];export{e as FormB,ue as __namedExportsOrder,de as default};
