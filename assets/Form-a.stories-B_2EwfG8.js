import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Form-CWUS_bhz.js";import{S}from"./Container-Cohd6eky.js";import{r,w as h}from"./vue.esm-bundler-DbnnIJWB.js";import{r as m,m as i}from"./index-BjDyHO91.js";import{o as b}from"./optionsGroup-BeSfFgL2.js";import{o as v}from"./options-Bt3-Nn_M.js";import{C as g,L as y,S as C}from"./types-DKXD8uiR.js";import{s as x}from"./contentExamples-_RNmAYDJ.js";import"./v4-CQkTLCs1.js";import"./Datepicker-BK8XWuU9.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Boej8-ka.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-7Yv3mQsR.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CBuZPh0R.js";import"./CheckboxGroup-C0jntYMK.js";import"./DropdownLegacy-Ufqt1JNe.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./DropdownSimple-BF1bXZMa.js";import"./Dropdown-_93MqEx2.js";import"./InputPhone-YndM-Hce.js";import"./InputButton-DNgOpyq9.js";import"./FileUploader-DgIu7geU.js";import"./Notification-5ws3yawP.js";import"./Collapse-1esKams1.js";import"./useTips--vxYfQKv.js";import"./Radio-BA8OiYOd.js";import"./RadioGroup-VaeUIlyf.js";import"./Tile-CcMI_7fP.js";import"./Select-500Krdi8.js";import"./Switch-C4xiRlAu.js";import"./ButtonGroup-a0KpRHA_.js";import"./Textarea-DtQPBA-z.js";import"./NumberField-diz4OiOg.js";import"./RangeSlider-B6S_e4FG.js";const A={radioA:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",options:b,readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:i(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:m,minLength:i(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:v,readonly:!1},validation:{validators:{},messages:{}}}},bo={title:"Organisms/Form",argTypes:{},args:{colorStyle:g.default,elements:A,labelPosition:y.outside,size:C.small,modelValue:{radioA:"Option 3",inputA:void 0,checkboxA:["checkbox-id-1"]}}},o={render:e=>({components:{SolarisContainer:S,SolarisForm:f},setup(){const t=r(e.modelValue),p=r(x),d=r(null);h(()=>e.modelValue,u=>{t.value=u},{deep:!0});const s={...e};return delete s.modelValue,{model:t,otherProps:s,formSlot:p,form:d,submit:()=>{c("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
