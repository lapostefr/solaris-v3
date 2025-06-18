import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Form-BPlHI1AD.js";import{S as h}from"./Container-CgnnegP6.js";import{r,w as S}from"./vue.esm-bundler-CaiLyLZC.js";import{r as m,m as a}from"./index-BTfyDAd-.js";import{o as b}from"./options-BqvALU3E.js";import{C as v,L as g,S as y}from"./types-DKXD8uiR.js";import{s as C}from"./contentExamples-_RNmAYDJ.js";import"./v4-CQkTLCs1.js";import"./Datepicker-C0ItQiMK.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";const x={radioA:{col:"12",type:"radio",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1"},{id:"option2-id",name:"name",value:"Option 2",disabled:!0},{id:"option3-id",name:"name",value:"Option 3"},{id:"option4-id",name:"name",value:"Option 4"}],readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:a(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:m,minLength:a(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:b,readonly:!1},validation:{validators:{},messages:{}}}},Ao={title:"Organisms/Form",argTypes:{},args:{colorStyle:v.default,elements:x,labelPosition:g.outside,size:y.small,modelValue:{radioA:"Option 3",inputA:void 0,checkboxA:["checkbox-id-1"]}}},o={render:e=>({components:{SolarisContainer:h,SolarisForm:f},setup(){const t=r(e.modelValue),p=r(C),d=r(null);S(()=>e.modelValue,u=>{t.value=u},{deep:!0});const i={...e};return delete i.modelValue,{model:t,otherProps:i,formSlot:p,form:d,submit:()=>{c("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Fo=["FormA"];export{o as FormA,Fo as __namedExportsOrder,Ao as default};
