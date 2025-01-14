import{C as p,L as v,S as f}from"./types-Dd7QR7uO.js";import{r as b}from"./index-DkdQS98R.js";import{r as s,w as S}from"./vue.esm-bundler-BV06ZB-3.js";import{s as g,l as y}from"./debugForm-DK5Cr3ff.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:p.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",labelPosition:"visually-hidden",name:"NumberField",min:1,max:99},validation:{validators:{},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},L={title:"Organisms/Form",argTypes:{},args:{colorStyle:p.default,elements:h,labelPosition:v.outside,size:f.small,value:{checkboxB:!0,numberField:2,rangeSlider:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},select:"type1"}}},a={render:l=>({setup(){const u=s(g),o=s(null);S(()=>l.value,c=>{var t;i("v-model change")(c);const e=(t=o.value)==null?void 0:t.v$;y(e),i("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const r={...l};return delete r.value,{args:l,otherProps:r,formSlot:u,form:o}},template:`<SolarisContainer>
  <h1>Fomulaire B</h1>
  <SolarisForm  ref="form" v-model="args.value" v-bind="otherProps">
    <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
    <template #formEnd>
      <div class="actions">
        <SolarisButton size="large" color="default">Valider</SolarisButton>
        <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
      </div>
    </template>
  </SolarisForm>
  </SolarisContainer>`})};var m,n,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const formSlot = ref(slotExample);
      const form = ref(null);
      watch(() => args.value,
      // = model
      val => {
        action('v-model change')(val);
        const v$ = (form.value as any)?.v$;
        logInvalidFormElements(v$);
        action('Form is invalid?')(v$?.$invalid);
      }, {
        deep: true
      });
      const otherProps = {
        ...args
      };
      delete otherProps.value;
      return {
        args,
        otherProps,
        formSlot,
        form
      };
    },
    template: \`<SolarisContainer>
  <h1>Fomulaire B</h1>
  <SolarisForm  ref="form" v-model="args.value" v-bind="otherProps">
    <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
    <template #formEnd>
      <div class="actions">
        <SolarisButton size="large" color="default">Valider</SolarisButton>
        <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
      </div>
    </template>
  </SolarisForm>
  </SolarisContainer>\`
  })
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const z=["FormB"];export{a as FormB,z as __namedExportsOrder,L as default};
