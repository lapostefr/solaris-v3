import{i}from"./Datepicker-BK8XWuU9.js";import{C as u,L as c,S as f}from"./types-DKXD8uiR.js";import{s as b}from"./contentExamples-_RNmAYDJ.js";import{S as v}from"./Form-CWUS_bhz.js";import{S}from"./Container-Cohd6eky.js";import{r,w as g}from"./vue.esm-bundler-DbnnIJWB.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Boej8-ka.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-7Yv3mQsR.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CBuZPh0R.js";import"./CheckboxGroup-C0jntYMK.js";import"./DropdownLegacy-Ufqt1JNe.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./DropdownSimple-BF1bXZMa.js";import"./Dropdown-_93MqEx2.js";import"./InputPhone-YndM-Hce.js";import"./InputButton-DNgOpyq9.js";import"./FileUploader-DgIu7geU.js";import"./Notification-5ws3yawP.js";import"./Collapse-1esKams1.js";import"./useTips--vxYfQKv.js";import"./Radio-BA8OiYOd.js";import"./RadioGroup-VaeUIlyf.js";import"./Tile-CcMI_7fP.js";import"./Select-500Krdi8.js";import"./Switch-C4xiRlAu.js";import"./ButtonGroup-a0KpRHA_.js";import"./Textarea-DtQPBA-z.js";import"./NumberField-diz4OiOg.js";import"./RangeSlider-B6S_e4FG.js";import"./v4-CQkTLCs1.js";const y=[],V={datepickerInterval:{col:"12",type:"datepicker",props:{holidays:!0,blackList:[1704892448,1708434848],buttonLayout:"centered",dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},id:"calendar",inputReadonly:!1,name:"calendar",size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}},fileUploader:{col:"12",type:"fileUploader",props:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:y,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"},validation:{validators:{},messages:{}}},datepicker:{col:"12",type:"datepicker",props:{readonly:!1,id:"datepicker",name:"datepicker",label:"Date du calendrier",start:{label:"Date de début"},end:{label:"Date de fin"},blackList:[1657404e6,1665612e6,16716636e5,16763292e5,16823736e5],holidays:!0,typage:"interval",weekend:!0,whiteList:[]},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}}},pe={title:"Organisms/Form",argTypes:{},args:{colorStyle:u.default,elements:V,labelPosition:c.outside,size:f.medium,modelValue:{datepickerInterval:["01/01/2024","02/02/2024"]}}},e={render:t=>({components:{SolarisContainer:S,SolarisForm:v},setup(){const o=r(t.modelValue),n=r(b),d=r(null);g(()=>t.modelValue,p=>{o.value=p},{deep:!0});const a={...t};return delete a.modelValue,{model:o,otherProps:a,formSlot:n,form:d,submit:()=>{h("Submitted model")(o.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire D</h1>

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
    </SolarisContainer>`})};var l,s,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <h1>Fomulaire D</h1>

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
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const ue=["FormD"];export{e as FormD,ue as __namedExportsOrder,pe as default};
