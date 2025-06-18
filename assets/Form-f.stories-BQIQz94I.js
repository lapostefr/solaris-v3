import{C as d,L as c,S as u}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./options-Bu0UZnng.js";import{S}from"./Form-BPlHI1AD.js";import{S as v}from"./Container-CgnnegP6.js";import{r,w as g}from"./vue.esm-bundler-CaiLyLZC.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-C0ItQiMK.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const F=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],w={dropdownB:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:F,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:b,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},Fe={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:w,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2"}}},e={render:o=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(o.modelValue),s=r(f),n=r(null);g(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:s,form:n,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire F</h1>

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
    </SolarisContainer>`})};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <h1>Fomulaire F</h1>

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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const we=["FormF"];export{e as FormF,we as __namedExportsOrder,Fe as default};
