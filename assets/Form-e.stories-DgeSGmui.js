import{C as d,L as u,S as c}from"./types-Dd7QR7uO.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-Bw9e4jHa.js";import{S as v}from"./Container-Byn0Stvv.js";import{r,w as b}from"./vue.esm-bundler-BHwbD8xO.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BuWH4Ykk.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Bng8ioTX.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";import"./generateId-DPOzJEtM.js";import"./Checkbox-BHJD1l2a.js";import"./CheckboxGroup-B09vwubx.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Picture-CBfxdjno.js";import"./Input-CfpJPdR5.js";import"./Tooltip-CcQPO6Um.js";import"./useDropdown-B0lJwPIR.js";import"./DropdownCheckbox-D5E_zZPu.js";import"./DropdownSimple-DW46HI45.js";import"./InputPhone-gU6ACpsM.js";import"./InputButton-KVbnvBA3.js";import"./FileUploader-BPhpaOAK.js";import"./Notification-DOA_utlQ.js";import"./Collapse-B_Mth1Fk.js";import"./useTips-BOECcAvL.js";import"./Radio-CJnrNu4K.js";import"./RadioGroup-B3R1mj47.js";import"./Tile-7N05wgqk.js";import"./Select-B5X4pFpv.js";import"./Switch-CUSkuMtt.js";import"./ButtonGroup-CGPIo7z3.js";import"./Textarea-DC4QhuDO.js";import"./NumberField-Bhgz-Q1z.js";import"./RangeSlider-BLDVKYON.js";import"./v4-CQkTLCs1.js";const E={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},po={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:u.outside,size:c.medium,modelValue:{tile:"dummy-id-2"}}},o={render:e=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(e.modelValue),s=r(f),a=r(null);b(()=>e.modelValue,p=>{t.value=p},{deep:!0});const m={...e};return delete m.modelValue,{model:t,otherProps:m,formSlot:s,form:a,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const uo=["FormE"];export{o as FormE,uo as __namedExportsOrder,po as default};
