import{r,m}from"./index-BTfyDAd-.js";import{C as c,L as h,S as f}from"./types-DKXD8uiR.js";import{s as S}from"./contentExamples-_RNmAYDJ.js";import{r as i,w as b}from"./vue.esm-bundler-CaiLyLZC.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as g}from"./Form-BPlHI1AD.js";import{S as V}from"./Container-CgnnegP6.js";import"./v4-CQkTLCs1.js";import"./Datepicker-C0ItQiMK.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";const C={switch:{col:"12",type:"switch",props:{id:"switch",label:"Label Switch"},validation:{validators:{required:r},messages:{required:"Le switch est requis!"}}},inputPhone:{col:"12",type:"inputPhone",inputType:"tel",props:{placeholder:"Téléphone",id:"tel",name:"tel",label:"Téléphone"},validation:{validators:{required:r,minLength:m(10)},messages:{required:"Le champ prénom est requis!",minLength:"Votre numéro de téléphone n'est pas complet"}}},inputWithButton:{col:"12",type:"inputButton",props:{id:"inputWithButton",name:"inputWithButton",label:"Label Input With Button",class:"last-name",validateText:"Valider"},validation:{validators:{required:r,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputWithUnit:{col:"12",type:"input",props:{id:"inputWithUnit",name:"inputWithUnit",label:"Label Input With Unit",class:"last-name",unit:{label:"cm",description:"centimeter"}},validation:{validators:{},messages:{}}}},Vt={title:"Organisms/Form",argTypes:{},args:{colorStyle:c.default,elements:C,labelPosition:h.outside,size:f.medium,modelValue:{switch:!0,radio:"test",inputPhone:"0123456789",inputWithButton:"Value Input With Button",inputWithUnit:"Value Input With Unit",textarea:"Value Textarea"}}},t={render:o=>({components:{SolarisContainer:V,SolarisForm:g},setup(){const e=i(o.modelValue),p=i(S),u=i(null);b(()=>o.modelValue,d=>{e.value=d},{deep:!0});const n={...o};return delete n.modelValue,{model:e,otherProps:n,formSlot:p,form:u,submit:()=>{v("Submitted model")(e.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire C</h1>

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
    </SolarisContainer>`})};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire C</h1>

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
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const Ct=["FormC"];export{t as FormC,Ct as __namedExportsOrder,Vt as default};
