import{r as e,w as u}from"./vue.esm-bundler-DbnnIJWB.js";import{r as m,m as c,a as f}from"./index-BjDyHO91.js";import{C as S,L as v,S as h}from"./types-DKXD8uiR.js";import{S as b}from"./Form-CWUS_bhz.js";import{S as g}from"./Container-Cohd6eky.js";import{s as F}from"./contentExamples-_RNmAYDJ.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BK8XWuU9.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Boej8-ka.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-7Yv3mQsR.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CBuZPh0R.js";import"./CheckboxGroup-C0jntYMK.js";import"./DropdownLegacy-Ufqt1JNe.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./DropdownSimple-BF1bXZMa.js";import"./Dropdown-_93MqEx2.js";import"./InputPhone-YndM-Hce.js";import"./InputButton-DNgOpyq9.js";import"./FileUploader-DgIu7geU.js";import"./Notification-5ws3yawP.js";import"./Collapse-1esKams1.js";import"./useTips--vxYfQKv.js";import"./Radio-BA8OiYOd.js";import"./RadioGroup-VaeUIlyf.js";import"./Tile-CcMI_7fP.js";import"./Select-500Krdi8.js";import"./Switch-C4xiRlAu.js";import"./ButtonGroup-a0KpRHA_.js";import"./Textarea-DtQPBA-z.js";import"./NumberField-diz4OiOg.js";import"./RangeSlider-B6S_e4FG.js";import"./v4-CQkTLCs1.js";const co={title:"Organisms/Form",argTypes:{},args:{colorStyle:S.default,elements:{radioG:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",type:"default",options:{legend:"Radio buttons heading",optionsList:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4",val:"option4-id"}]},readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:c(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:m,maxLength:f(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}}},labelPosition:v.outside,size:h.small,modelValue:{radioG:e("option3-id"),inputG:"1234"}}},o={render:t=>({components:{SolarisContainer:g,SolarisForm:b},setup(){const r=e(t.modelValue),s=e(F),p=e(null);u(()=>t.modelValue,d=>{r.value=d},{deep:!0});const i={...t};return delete i.modelValue,{model:r,otherProps:i,formSlot:s,form:p,submit:()=>{C("Submitted model")(r.value)}}},template:`<SolarisContainer>
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
