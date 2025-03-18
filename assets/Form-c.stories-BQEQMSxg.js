import{r,m}from"./index-DU1z2gU3.js";import{C as c,L as h,S as f}from"./types-DKXD8uiR.js";import{s as S}from"./contentExamples-_RNmAYDJ.js";import{r as i,w as b}from"./vue.esm-bundler-BIhSTzsT.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as g}from"./Form-CjIwfF3_.js";import{S as V}from"./Container-D6yQEqWb.js";import"./v4-CQkTLCs1.js";import"./Datepicker-D8APteRP.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-VbIBO5f1.js";import"./Button-CGWBbttc.js";import"./Loader-zDVSlyhy.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-BaiQJBqJ.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CAW1jdel.js";import"./CheckboxGroup-C9om3WOh.js";import"./DropdownLegacy-CDR30zc5.js";import"./Flag-Dr1gNV3C.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./Picture-DIMOpAs8.js";import"./Input-BxxbZeE9.js";import"./Tooltip-Bdf-DHgJ.js";import"./DropdownSimple-D1b2Krou.js";import"./Dropdown-BiqI4tYG.js";import"./InputPhone-CuoneMOx.js";import"./InputButton-BPfGjX0D.js";import"./FileUploader-CqT6FxrR.js";import"./Notification-BKiJZPcV.js";import"./Collapse-CVKvXEFZ.js";import"./useTips-B5jVkqXZ.js";import"./Radio-BdOzcDoT.js";import"./RadioGroup-Cs9BRrpN.js";import"./Tile-oPGKDV1H.js";import"./Select-DFr0BS_t.js";import"./Switch-D2hb4KcK.js";import"./ButtonGroup-BdaU5Drt.js";import"./Textarea-BYnugDXW.js";import"./NumberField-BsLz6Nrb.js";import"./RangeSlider-CzjqhVWN.js";const C={switch:{col:"12",type:"switch",props:{id:"switch",label:"Label Switch"},validation:{validators:{required:r},messages:{required:"Le switch est requis!"}}},inputPhone:{col:"12",type:"inputPhone",inputType:"tel",props:{placeholder:"Téléphone",id:"tel",name:"tel",label:"Téléphone"},validation:{validators:{required:r,minLength:m(10)},messages:{required:"Le champ prénom est requis!",minLength:"Votre numéro de téléphone n'est pas complet"}}},inputWithButton:{col:"12",type:"inputButton",props:{id:"inputWithButton",name:"inputWithButton",label:"Label Input With Button",class:"last-name",validateText:"Valider"},validation:{validators:{required:r,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputWithUnit:{col:"12",type:"input",props:{id:"inputWithUnit",name:"inputWithUnit",label:"Label Input With Unit",class:"last-name",unit:{label:"cm",description:"centimeter"}},validation:{validators:{},messages:{}}}},dt={title:"Organisms/Form",argTypes:{},args:{colorStyle:c.default,elements:C,labelPosition:h.outside,size:f.medium,modelValue:{switch:!0,radio:"test",inputPhone:"0123456789",inputWithButton:"Value Input With Button",inputWithUnit:"Value Input With Unit",textarea:"Value Textarea"}}},t={render:o=>({components:{SolarisContainer:V,SolarisForm:g},setup(){const e=i(o.modelValue),p=i(S),u=i(null);b(()=>o.modelValue,d=>{e.value=d},{deep:!0});const n={...o};return delete n.modelValue,{model:e,otherProps:n,formSlot:p,form:u,submit:()=>{v("Submitted model")(e.value)}}},template:`<SolarisContainer>
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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const ct=["FormC"];export{t as FormC,ct as __namedExportsOrder,dt as default};
