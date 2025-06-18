import{C as d,L as u,S as c}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-BPlHI1AD.js";import{S as v}from"./Container-CgnnegP6.js";import{r,w as b}from"./vue.esm-bundler-CaiLyLZC.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-C0ItQiMK.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const E={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://placehold.co/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},ho={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:E,labelPosition:u.outside,size:c.medium,modelValue:{tile:"dummy-id-2"}}},o={render:e=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(e.modelValue),s=r(f),a=r(null);b(()=>e.modelValue,p=>{t.value=p},{deep:!0});const m={...e};return delete m.modelValue,{model:t,otherProps:m,formSlot:s,form:a,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
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
