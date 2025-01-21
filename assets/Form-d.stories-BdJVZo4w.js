import{i}from"./Datepicker-BuWH4Ykk.js";import{C as u,L as c,S as f}from"./types-Dd7QR7uO.js";import{s as b}from"./contentExamples-_RNmAYDJ.js";import{S as v}from"./Form-Bw9e4jHa.js";import{S}from"./Container-Byn0Stvv.js";import{r,w as g}from"./vue.esm-bundler-BHwbD8xO.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Bng8ioTX.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";import"./generateId-DPOzJEtM.js";import"./Checkbox-BHJD1l2a.js";import"./CheckboxGroup-B09vwubx.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Picture-CBfxdjno.js";import"./Input-CfpJPdR5.js";import"./Tooltip-CcQPO6Um.js";import"./useDropdown-B0lJwPIR.js";import"./DropdownCheckbox-D5E_zZPu.js";import"./DropdownSimple-DW46HI45.js";import"./InputPhone-gU6ACpsM.js";import"./InputButton-KVbnvBA3.js";import"./FileUploader-BPhpaOAK.js";import"./Notification-DOA_utlQ.js";import"./Collapse-B_Mth1Fk.js";import"./useTips-BOECcAvL.js";import"./Radio-CJnrNu4K.js";import"./RadioGroup-B3R1mj47.js";import"./Tile-7N05wgqk.js";import"./Select-B5X4pFpv.js";import"./Switch-CUSkuMtt.js";import"./ButtonGroup-CGPIo7z3.js";import"./Textarea-DC4QhuDO.js";import"./NumberField-Bhgz-Q1z.js";import"./RangeSlider-BLDVKYON.js";import"./v4-CQkTLCs1.js";const y=[],V={datepickerInterval:{col:"12",type:"datepicker",props:{holidays:!0,blackList:[1704892448,1708434848],buttonLayout:"centered",dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},id:"calendar",inputReadonly:!1,name:"calendar",size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}},fileUploader:{col:"12",type:"fileUploader",props:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:y,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"},validation:{validators:{},messages:{}}},datepicker:{col:"12",type:"datepicker",props:{readonly:!1,id:"datepicker",name:"datepicker",label:"Date du calendrier",start:{label:"Date de début"},end:{label:"Date de fin"},blackList:[1657404e6,1665612e6,16716636e5,16763292e5,16823736e5],holidays:!0,typage:"interval",weekend:!0,whiteList:[]},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}}},ue={title:"Organisms/Form",argTypes:{},args:{colorStyle:u.default,elements:V,labelPosition:c.outside,size:f.medium,modelValue:{datepickerInterval:["01/01/2024","02/02/2024"]}}},e={render:t=>({components:{SolarisContainer:S,SolarisForm:v},setup(){const o=r(t.modelValue),n=r(b),d=r(null);g(()=>t.modelValue,p=>{o.value=p},{deep:!0});const a={...t};return delete a.modelValue,{model:o,otherProps:a,formSlot:n,form:d,submit:()=>{h("Submitted model")(o.value)}}},template:`<SolarisContainer>
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const ce=["FormD"];export{e as FormD,ce as __namedExportsOrder,ue as default};
