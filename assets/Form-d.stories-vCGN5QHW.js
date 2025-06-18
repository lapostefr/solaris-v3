import{i}from"./Datepicker-C0ItQiMK.js";import{C as u,L as c,S as f}from"./types-DKXD8uiR.js";import{s as b}from"./contentExamples-_RNmAYDJ.js";import{S as v}from"./Form-BPlHI1AD.js";import{S}from"./Container-CgnnegP6.js";import{r,w as g}from"./vue.esm-bundler-CaiLyLZC.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const y=[],V={datepickerInterval:{col:"12",type:"datepicker",props:{holidays:!0,blackList:[1704892448,1708434848],buttonLayout:"centered",dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},id:"calendar",inputReadonly:!1,name:"calendar",size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}},fileUploader:{col:"12",type:"fileUploader",props:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:y,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"},validation:{validators:{},messages:{}}},datepicker:{col:"12",type:"datepicker",props:{readonly:!1,id:"datepicker",name:"datepicker",label:"Date du calendrier",start:{label:"Date de début"},end:{label:"Date de fin"},blackList:[1657404e6,1665612e6,16716636e5,16763292e5,16823736e5],holidays:!0,typage:"interval",weekend:!0,whiteList:[]},validation:{validators:{isValidDate:i},messages:{isValidDate:"Le format de la date est incorrect"}}}},he={title:"Organisms/Form",argTypes:{},args:{colorStyle:u.default,elements:V,labelPosition:c.outside,size:f.medium,modelValue:{datepickerInterval:["01/01/2024","02/02/2024"]}}},e={render:t=>({components:{SolarisContainer:S,SolarisForm:v},setup(){const o=r(t.modelValue),n=r(b),d=r(null);g(()=>t.modelValue,p=>{o.value=p},{deep:!0});const a={...t};return delete a.modelValue,{model:o,otherProps:a,formSlot:n,form:d,submit:()=>{h("Submitted model")(o.value)}}},template:`<SolarisContainer>
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const ye=["FormD"];export{e as FormD,ye as __namedExportsOrder,he as default};
