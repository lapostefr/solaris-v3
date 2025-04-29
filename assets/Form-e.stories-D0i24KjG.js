import{C as d,L as u,S as c}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-BPE212ka.js";import{S as v}from"./Container-4mOEeQBe.js";import{r,w as b}from"./vue.esm-bundler-S_SeJiWS.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BPI5Oo0c.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BH_SZZwx.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Cglt47Yd.js";import"./CheckboxGroup-B7ZiHIw9.js";import"./DropdownLegacy-DXL7ZOkt.js";import"./Flag-CKMlDyvb.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Picture-CRdhf1Nz.js";import"./Input-DA1iUAw4.js";import"./Tooltip-C8TedUek.js";import"./DropdownSimple-BeQ1LJM_.js";import"./Dropdown-BcWqGsmy.js";import"./Message--_6567Go.js";import"./InputPhone-KU7ufUC2.js";import"./InputButton-C0xtaZR9.js";import"./FileUploader-DzarEzLs.js";import"./Notification-BVqXdJdU.js";import"./Collapse-Bil4FeqR.js";import"./types-CX4OQ2kf.js";import"./useTips-yS-55qFh.js";import"./Radio--EVWUfZg.js";import"./Tile-BKc2bv9_.js";import"./Select-BXv_0BDN.js";import"./Switch-C7AQencE.js";import"./ButtonGroup-CQ-4wyjs.js";import"./Textarea-Dx7o3bjo.js";import"./NumberField-CYFr5V0t.js";import"./RangeSlider-Ca2gokUg.js";import"./v4-CQkTLCs1.js";const E={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},co={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:u.outside,size:c.medium,modelValue:{tile:"dummy-id-2"}}},o={render:e=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(e.modelValue),s=r(f),a=r(null);b(()=>e.modelValue,p=>{t.value=p},{deep:!0});const m={...e};return delete m.modelValue,{model:t,otherProps:m,formSlot:s,form:a,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const fo=["FormE"];export{o as FormE,fo as __namedExportsOrder,co as default};
