import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Form-BPE212ka.js";import{S as h}from"./Container-4mOEeQBe.js";import{r,w as S}from"./vue.esm-bundler-S_SeJiWS.js";import{r as a,m}from"./index-DwHcrxvT.js";import{o as b}from"./options-Bt3-Nn_M.js";import{C as v,L as g,S as y}from"./types-DKXD8uiR.js";import{s as C}from"./contentExamples-_RNmAYDJ.js";import"./v4-CQkTLCs1.js";import"./Datepicker-BPI5Oo0c.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BH_SZZwx.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Cglt47Yd.js";import"./CheckboxGroup-B7ZiHIw9.js";import"./DropdownLegacy-DXL7ZOkt.js";import"./Flag-CKMlDyvb.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Picture-CRdhf1Nz.js";import"./Input-DA1iUAw4.js";import"./Tooltip-C8TedUek.js";import"./DropdownSimple-BeQ1LJM_.js";import"./Dropdown-BcWqGsmy.js";import"./Message--_6567Go.js";import"./InputPhone-KU7ufUC2.js";import"./InputButton-C0xtaZR9.js";import"./FileUploader-DzarEzLs.js";import"./Notification-BVqXdJdU.js";import"./Collapse-Bil4FeqR.js";import"./types-CX4OQ2kf.js";import"./useTips-yS-55qFh.js";import"./Radio--EVWUfZg.js";import"./Tile-BKc2bv9_.js";import"./Select-BXv_0BDN.js";import"./Switch-C7AQencE.js";import"./ButtonGroup-CQ-4wyjs.js";import"./Textarea-Dx7o3bjo.js";import"./NumberField-CYFr5V0t.js";import"./RangeSlider-Ca2gokUg.js";const x={radioA:{col:"12",type:"radio",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1"},{id:"option2-id",name:"name",value:"Option 2",disabled:!0},{id:"option3-id",name:"name",value:"Option 3"},{id:"option4-id",name:"name",value:"Option 4"}],readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:a,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:a,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:b,readonly:!1},validation:{validators:{},messages:{}}}},vo={title:"Organisms/Form",argTypes:{},args:{colorStyle:v.default,elements:x,labelPosition:g.outside,size:y.small,modelValue:{radioA:"Option 3",inputA:void 0,checkboxA:["checkbox-id-1"]}}},o={render:e=>({components:{SolarisContainer:h,SolarisForm:f},setup(){const t=r(e.modelValue),p=r(C),d=r(null);S(()=>e.modelValue,u=>{t.value=u},{deep:!0});const i={...e};return delete i.modelValue,{model:t,otherProps:i,formSlot:p,form:d,submit:()=>{c("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
    </SolarisContainer>`})};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const go=["FormA"];export{o as FormA,go as __namedExportsOrder,vo as default};
