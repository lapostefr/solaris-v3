import{i}from"./Datepicker-BPI5Oo0c.js";import{C as u,L as c,S as f}from"./types-DKXD8uiR.js";import{s as b}from"./contentExamples-_RNmAYDJ.js";import{S as v}from"./Form-BPE212ka.js";import{S}from"./Container-4mOEeQBe.js";import{r,w as g}from"./vue.esm-bundler-S_SeJiWS.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BH_SZZwx.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Cglt47Yd.js";import"./CheckboxGroup-B7ZiHIw9.js";import"./DropdownLegacy-DXL7ZOkt.js";import"./Flag-CKMlDyvb.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Picture-CRdhf1Nz.js";import"./Input-DA1iUAw4.js";import"./Tooltip-C8TedUek.js";import"./DropdownSimple-BeQ1LJM_.js";import"./Dropdown-BcWqGsmy.js";import"./Message--_6567Go.js";import"./InputPhone-KU7ufUC2.js";import"./InputButton-C0xtaZR9.js";import"./FileUploader-DzarEzLs.js";import"./Notification-BVqXdJdU.js";import"./Collapse-Bil4FeqR.js";import"./types-CX4OQ2kf.js";import"./useTips-yS-55qFh.js";import"./Radio--EVWUfZg.js";import"./Tile-BKc2bv9_.js";import"./Select-BXv_0BDN.js";import"./Switch-C7AQencE.js";import"./ButtonGroup-CQ-4wyjs.js";import"./Textarea-Dx7o3bjo.js";import"./NumberField-CYFr5V0t.js";import"./RangeSlider-Ca2gokUg.js";import"./v4-CQkTLCs1.js";const y=[],V={datepickerInterval:{col:"12",type:"datepicker",props:{holidays:!0,blackList:[1704892448,1708434848],buttonLayout:"centered",dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},id:"calendar",inputReadonly:!1,name:"calendar",size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}},fileUploader:{col:"12",type:"fileUploader",props:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:y,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"},validation:{validators:{},messages:{}}},datepicker:{col:"12",type:"datepicker",props:{readonly:!1,id:"datepicker",name:"datepicker",label:"Date du calendrier",start:{label:"Date de début"},end:{label:"Date de fin"},blackList:[1657404e6,1665612e6,16716636e5,16763292e5,16823736e5],holidays:!0,typage:"interval",weekend:!0,whiteList:[]},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}}},fe={title:"Organisms/Form",argTypes:{},args:{colorStyle:u.default,elements:V,labelPosition:c.outside,size:f.medium,modelValue:{datepickerInterval:["01/01/2024","02/02/2024"]}}},e={render:t=>({components:{SolarisContainer:S,SolarisForm:v},setup(){const o=r(t.modelValue),n=r(b),d=r(null);g(()=>t.modelValue,p=>{o.value=p},{deep:!0});const a={...t};return delete a.modelValue,{model:o,otherProps:a,formSlot:n,form:d,submit:()=>{h("Submitted model")(o.value)}}},template:`<SolarisContainer>
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
    </SolarisContainer>`})};var l,m,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const be=["FormD"];export{e as FormD,be as __namedExportsOrder,fe as default};
