import{C as d,L as u,S as c}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-DWufw0pa.js";import{S as v}from"./Container-NrtmUGg6.js";import{r,w as b}from"./vue.esm-bundler-BQVOD3cV.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D6S1gCMb.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bz21hexC.js";import"./CheckboxGroup-DkCNss51.js";import"./DropdownLegacy-DmQ0owFG.js";import"./Flag-ZAST6x_H.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Picture-iFfEkxpL.js";import"./Input-CYubRYun.js";import"./Tooltip-D1JQ9w2q.js";import"./DropdownSimple-BPyFiHEv.js";import"./Dropdown-Baz_At0U.js";import"./InputPhone-Cen7CQLu.js";import"./InputButton-DaUXfMSM.js";import"./FileUploader-Dk3E3pJ4.js";import"./Notification-lGc5pTbv.js";import"./Collapse-CARPdCeu.js";import"./types-CX4OQ2kf.js";import"./useTips-B26kB0Ta.js";import"./Radio-BX2bMz80.js";import"./Tile-CLzz_d_O.js";import"./Select-DTwz-9EH.js";import"./Switch-AVrTsyVL.js";import"./ButtonGroup-BuatuvYZ.js";import"./Textarea-C6EZ-NJZ.js";import"./NumberField-ArBv8zlJ.js";import"./RangeSlider-CwHgxAxt.js";import"./SegmentedControl-Cg0Zm6-C.js";import"./Badge-CNyb-hIR.js";import"./types-BTVVhIqi.js";import"./Shadow-T-9zCUlx.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const E={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},ho={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:u.outside,size:c.medium,modelValue:{tile:"dummy-id-2"}}},o={render:e=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(e.modelValue),s=r(f),a=r(null);b(()=>e.modelValue,p=>{t.value=p},{deep:!0});const m={...e};return delete m.modelValue,{model:t,otherProps:m,formSlot:s,form:a,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire E</h1>

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
    </SolarisContainer>`})};var i,l,n;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <h1>Fomulaire E</h1>

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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const Eo=["FormE"];export{o as FormE,Eo as __namedExportsOrder,ho as default};
