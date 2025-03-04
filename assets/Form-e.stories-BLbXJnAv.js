import{C as d,L as u,S as c}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-CWUS_bhz.js";import{S as v}from"./Container-Cohd6eky.js";import{r,w as b}from"./vue.esm-bundler-DbnnIJWB.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BK8XWuU9.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Boej8-ka.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-7Yv3mQsR.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-CBuZPh0R.js";import"./CheckboxGroup-C0jntYMK.js";import"./DropdownLegacy-Ufqt1JNe.js";import"./Flag-C03qRat4.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Picture-DrwsyF7G.js";import"./Input-DQLpWQzd.js";import"./Tooltip-CNCAgM55.js";import"./DropdownSimple-BF1bXZMa.js";import"./Dropdown-_93MqEx2.js";import"./InputPhone-YndM-Hce.js";import"./InputButton-DNgOpyq9.js";import"./FileUploader-DgIu7geU.js";import"./Notification-5ws3yawP.js";import"./Collapse-1esKams1.js";import"./useTips--vxYfQKv.js";import"./Radio-BA8OiYOd.js";import"./RadioGroup-VaeUIlyf.js";import"./Tile-CcMI_7fP.js";import"./Select-500Krdi8.js";import"./Switch-C4xiRlAu.js";import"./ButtonGroup-a0KpRHA_.js";import"./Textarea-DtQPBA-z.js";import"./NumberField-diz4OiOg.js";import"./RangeSlider-B6S_e4FG.js";import"./v4-CQkTLCs1.js";const E={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},ao={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:u.outside,size:c.medium,modelValue:{tile:"dummy-id-2"}}},o={render:e=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(e.modelValue),s=r(f),a=r(null);b(()=>e.modelValue,p=>{t.value=p},{deep:!0});const m={...e};return delete m.modelValue,{model:t,otherProps:m,formSlot:s,form:a,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const po=["FormE"];export{o as FormE,po as __namedExportsOrder,ao as default};
