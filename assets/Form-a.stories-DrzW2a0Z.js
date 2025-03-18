import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Form-CjIwfF3_.js";import{S}from"./Container-D6yQEqWb.js";import{r,w as h}from"./vue.esm-bundler-BIhSTzsT.js";import{r as m,m as i}from"./index-DU1z2gU3.js";import{o as b}from"./optionsGroup-BeSfFgL2.js";import{o as v}from"./options-Bt3-Nn_M.js";import{C as g,L as y,S as C}from"./types-DKXD8uiR.js";import{s as x}from"./contentExamples-_RNmAYDJ.js";import"./v4-CQkTLCs1.js";import"./Datepicker-D8APteRP.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-VbIBO5f1.js";import"./Button-CGWBbttc.js";import"./Loader-zDVSlyhy.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-BaiQJBqJ.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CAW1jdel.js";import"./CheckboxGroup-C9om3WOh.js";import"./DropdownLegacy-CDR30zc5.js";import"./Flag-Dr1gNV3C.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./Picture-DIMOpAs8.js";import"./Input-BxxbZeE9.js";import"./Tooltip-Bdf-DHgJ.js";import"./DropdownSimple-D1b2Krou.js";import"./Dropdown-BiqI4tYG.js";import"./InputPhone-CuoneMOx.js";import"./InputButton-BPfGjX0D.js";import"./FileUploader-CqT6FxrR.js";import"./Notification-BKiJZPcV.js";import"./Collapse-CVKvXEFZ.js";import"./useTips-B5jVkqXZ.js";import"./Radio-BdOzcDoT.js";import"./RadioGroup-Cs9BRrpN.js";import"./Tile-oPGKDV1H.js";import"./Select-DFr0BS_t.js";import"./Switch-D2hb4KcK.js";import"./ButtonGroup-BdaU5Drt.js";import"./Textarea-BYnugDXW.js";import"./NumberField-BsLz6Nrb.js";import"./RangeSlider-CzjqhVWN.js";const A={radioA:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",options:b,readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:i(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:m,minLength:i(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:v,readonly:!1},validation:{validators:{},messages:{}}}},bo={title:"Organisms/Form",argTypes:{},args:{colorStyle:g.default,elements:A,labelPosition:y.outside,size:C.small,modelValue:{radioA:"Option 3",inputA:void 0,checkboxA:["checkbox-id-1"]}}},o={render:e=>({components:{SolarisContainer:S,SolarisForm:f},setup(){const t=r(e.modelValue),p=r(x),d=r(null);h(()=>e.modelValue,u=>{t.value=u},{deep:!0});const s={...e};return delete s.modelValue,{model:t,otherProps:s,formSlot:p,form:d,submit:()=>{c("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire A</h1>

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
    </SolarisContainer>`})};var a,l,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire A</h1>

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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const vo=["FormA"];export{o as FormA,vo as __namedExportsOrder,bo as default};
