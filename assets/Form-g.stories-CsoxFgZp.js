import{r as t,w as u}from"./vue.esm-bundler-BQVOD3cV.js";import{r,m as c,a as h}from"./index-C8gaitkE.js";import{C as g,L as f,S as v}from"./types-DKXD8uiR.js";import{S as b}from"./Form-DWufw0pa.js";import{S}from"./Container-NrtmUGg6.js";import{s as y}from"./contentExamples-_RNmAYDJ.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-D6S1gCMb.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bz21hexC.js";import"./CheckboxGroup-DkCNss51.js";import"./DropdownLegacy-DmQ0owFG.js";import"./Flag-ZAST6x_H.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Picture-iFfEkxpL.js";import"./Input-CYubRYun.js";import"./Tooltip-D1JQ9w2q.js";import"./DropdownSimple-BPyFiHEv.js";import"./Dropdown-Baz_At0U.js";import"./InputPhone-Cen7CQLu.js";import"./InputButton-DaUXfMSM.js";import"./FileUploader-Dk3E3pJ4.js";import"./Notification-lGc5pTbv.js";import"./Collapse-CARPdCeu.js";import"./types-CX4OQ2kf.js";import"./useTips-B26kB0Ta.js";import"./Radio-BX2bMz80.js";import"./Tile-CLzz_d_O.js";import"./Select-DTwz-9EH.js";import"./Switch-AVrTsyVL.js";import"./ButtonGroup-BuatuvYZ.js";import"./Textarea-C6EZ-NJZ.js";import"./NumberField-ArBv8zlJ.js";import"./RangeSlider-CwHgxAxt.js";import"./SegmentedControl-Cg0Zm6-C.js";import"./Badge-CNyb-hIR.js";import"./types-BTVVhIqi.js";import"./Shadow-T-9zCUlx.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const Co={title:"Organisms/Form",argTypes:{},args:{colorStyle:g.default,elements:{radioG:{col:"12",type:"radio",props:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",type:"default",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4",val:"option4-id"}]},slotBeforeComponent:"beforeComponent",validation:{validators:{required:r,minLength:c(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:r,maxLength:h(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}},segmentedControlG:{col:12,type:"segmentedControl",props:{componentStyle:"primary",dataError:{active:!0,message:"Message d'erreur"},disabled:!1,fullContainer:!1,iconPosition:"icon-left",id:"sc-id",label:"Sélectionnez une option",labelPosition:"outside",mandatory:!1,message:"Le message du Segmented control",name:"sc-name",options:[{id:"option1-id",label:"Label 1",value:"option-1"},{icon:"misc-ghost",id:"option2-id",label:"Label 2",value:"option-2"},{disabled:!0,icon:"misc-ghost",id:"option3-id",label:"Label 3",value:"option-3"},{id:"optio4-id",label:"Label 4",value:"option-4"}],overflowScroll:!0,shadowBackground:"neutral-soft"},slots:["customIcon-0","customIcon-3"],actions:{input:o=>{console.log("value :>> ",o)}}}},labelPosition:f.outside,size:v.small,modelValue:{radioG:t("option3-id"),inputG:"1234",segmentedControlG:"option-1"}}},e={render:o=>({components:{SolarisContainer:S,SolarisForm:b},setup(){const i=t(o.modelValue),s=t(y),p=t(null);u(()=>o.modelValue,d=>{i.value=d},{deep:!0});const a={...o};return delete a.modelValue,{model:i,otherProps:a,formSlot:s,form:p,submit:()=>{C("Submitted model")(i.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire G</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
        <template #customIcon-0>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
      </SolarisForm>
    </SolarisContainer>`})};var n,m,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <h1>Fomulaire G</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
        <template #customIcon-0>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
      </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const Lo=["FormG"];export{e as FormG,Lo as __namedExportsOrder,Co as default};
