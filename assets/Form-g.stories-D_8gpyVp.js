import{r as e,w as u}from"./vue.esm-bundler-BIhSTzsT.js";import{r as m,m as c,a as f}from"./index-DU1z2gU3.js";import{C as S,L as v,S as h}from"./types-DKXD8uiR.js";import{S as b}from"./Form-CjIwfF3_.js";import{S as g}from"./Container-D6yQEqWb.js";import{s as F}from"./contentExamples-_RNmAYDJ.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D8APteRP.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-VbIBO5f1.js";import"./Button-CGWBbttc.js";import"./Loader-zDVSlyhy.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-BaiQJBqJ.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CAW1jdel.js";import"./CheckboxGroup-C9om3WOh.js";import"./DropdownLegacy-CDR30zc5.js";import"./Flag-Dr1gNV3C.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./Picture-DIMOpAs8.js";import"./Input-BxxbZeE9.js";import"./Tooltip-Bdf-DHgJ.js";import"./DropdownSimple-D1b2Krou.js";import"./Dropdown-BiqI4tYG.js";import"./InputPhone-CuoneMOx.js";import"./InputButton-BPfGjX0D.js";import"./FileUploader-CqT6FxrR.js";import"./Notification-BKiJZPcV.js";import"./Collapse-CVKvXEFZ.js";import"./useTips-B5jVkqXZ.js";import"./Radio-BdOzcDoT.js";import"./RadioGroup-Cs9BRrpN.js";import"./Tile-oPGKDV1H.js";import"./Select-DFr0BS_t.js";import"./Switch-D2hb4KcK.js";import"./ButtonGroup-BdaU5Drt.js";import"./Textarea-BYnugDXW.js";import"./NumberField-BsLz6Nrb.js";import"./RangeSlider-CzjqhVWN.js";import"./v4-CQkTLCs1.js";const co={title:"Organisms/Form",argTypes:{},args:{colorStyle:S.default,elements:{radioG:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",type:"default",options:{legend:"Radio buttons heading",optionsList:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4",val:"option4-id"}]},readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:c(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:m,maxLength:f(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}}},labelPosition:v.outside,size:h.small,modelValue:{radioG:e("option3-id"),inputG:"1234"}}},o={render:t=>({components:{SolarisContainer:g,SolarisForm:b},setup(){const r=e(t.modelValue),s=e(F),p=e(null);u(()=>t.modelValue,d=>{r.value=d},{deep:!0});const i={...t};return delete i.modelValue,{model:r,otherProps:i,formSlot:s,form:p,submit:()=>{C("Submitted model")(r.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire G</h1>

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
    </SolarisContainer>`})};var a,n,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire G</h1>

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
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const fo=["FormG"];export{o as FormG,fo as __namedExportsOrder,co as default};
