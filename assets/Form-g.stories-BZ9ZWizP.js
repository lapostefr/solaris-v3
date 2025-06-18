import{r as t,w as u}from"./vue.esm-bundler-CaiLyLZC.js";import{r,m as c,a as h}from"./index-BTfyDAd-.js";import{C as g,L as f,S as v}from"./types-DKXD8uiR.js";import{S as b}from"./Form-BPlHI1AD.js";import{S}from"./Container-CgnnegP6.js";import{s as y}from"./contentExamples-_RNmAYDJ.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-C0ItQiMK.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BuGuII6G.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-CAhNJgAn.js";import"./Message-BhgJ819g.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-Bn01JkVB.js";import"./CheckboxGroup-CxGDKhko.js";import"./DropdownLegacy-kyqD5dsk.js";import"./Flag-DcUWOxk_.js";import"./iframe-Cr_QfRJv.js";import"../sb-preview/runtime.js";import"./Picture-NxZc57wS.js";import"./Input-RS4yhFRP.js";import"./Tooltip-oSLk5Wwy.js";import"./DropdownSimple-DJ-m94CB.js";import"./Dropdown-CvVzJ1t-.js";import"./InputPhone-wRkPtfVx.js";import"./InputButton-CwguzgOV.js";import"./FileUploader-D3gcKxSX.js";import"./Notification-4lasvgX0.js";import"./Collapse-CYHAQvC0.js";import"./types-CX4OQ2kf.js";import"./useTips-CxyLfgBz.js";import"./Radio-DeGgHUpc.js";import"./Tile-BAaZTemZ.js";import"./Select-CMhDEDXV.js";import"./Switch-DvT8uLpb.js";import"./ButtonGroup-qdMeV2GQ.js";import"./Textarea-BBqDtYzy.js";import"./NumberField-BFaXk8eE.js";import"./RangeSlider-DC2p3pF8.js";import"./SegmentedControl-C7atfApm.js";import"./Badge-DZX3eL36.js";import"./types-BTVVhIqi.js";import"./Shadow-RWvAolDs.js";import"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const Co={title:"Organisms/Form",argTypes:{},args:{colorStyle:g.default,elements:{radioG:{col:"12",type:"radio",props:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",type:"default",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4",val:"option4-id"}]},slotBeforeComponent:"beforeComponent",validation:{validators:{required:r,minLength:c(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:r,maxLength:h(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}},segmentedControlG:{col:12,type:"segmentedControl",props:{componentStyle:"primary",dataError:{active:!0,message:"Message d'erreur"},disabled:!1,fullContainer:!1,iconPosition:"icon-left",id:"sc-id",label:"Sélectionnez une option",labelPosition:"outside",mandatory:!1,message:"Le message du Segmented control",name:"sc-name",options:[{id:"option1-id",label:"Label 1",value:"option-1"},{icon:"misc-ghost",id:"option2-id",label:"Label 2",value:"option-2"},{disabled:!0,icon:"misc-ghost",id:"option3-id",label:"Label 3",value:"option-3"},{id:"optio4-id",label:"Label 4",value:"option-4"}],overflowScroll:!0,shadowBackground:"neutral-soft"},slots:["customIcon-0","customIcon-3"],actions:{input:o=>{console.log("value :>> ",o)}}}},labelPosition:f.outside,size:v.small,modelValue:{radioG:t("option3-id"),inputG:"1234",segmentedControlG:"option-1"}}},e={render:o=>({components:{SolarisContainer:S,SolarisForm:b},setup(){const i=t(o.modelValue),s=t(y),p=t(null);u(()=>o.modelValue,d=>{i.value=d},{deep:!0});const a={...o};return delete a.modelValue,{model:i,otherProps:a,formSlot:s,form:p,submit:()=>{C("Submitted model")(i.value)}}},template:`<SolarisContainer>
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
