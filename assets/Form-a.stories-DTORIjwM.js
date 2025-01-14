import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as i,w as v}from"./vue.esm-bundler-BV06ZB-3.js";import{r as n,m}from"./index-DkdQS98R.js";import{o as h}from"./optionsGroup-BeSfFgL2.js";import{o as S}from"./options-nvNyIa8k.js";import{C as g,L as y,S as b}from"./types-Dd7QR7uO.js";import{s as A,l as F}from"./debugForm-DK5Cr3ff.js";import"./v4-CQkTLCs1.js";const x={radioA:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",options:h,readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:n,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:n,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:S,readonly:!1},validation:{validators:{},messages:{}}}},k={title:"Organisms/Form",argTypes:{},args:{colorStyle:g.default,elements:x,labelPosition:y.outside,size:b.small,modelValue:{radioA:"Option 3",inputA:"Label A",checkboxA:["checkbox 1"]}}},o={render:a=>({setup(){const c=i(A),t=i(null);v(()=>a.value,f=>{var s;l("v-model change")(f);const e=(s=t.value)==null?void 0:s.v$;F(e),l("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const r={...a};return delete r.value,{args:a,otherProps:r,formSlot:c,form:t}},template:`<SolarisContainer>
    <h1>Fomulaire A</h1>

    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
      <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
      <template #formEnd>
        <div class="slot" v-html="formSlot" />
        <div class="slot" v-html="formSlot" />
        <div class="actions">
          <SolarisButton size="large" color="default">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>`})};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    <h1>Fomulaire A</h1>

    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
      <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
      <template #formEnd>
        <div class="slot" v-html="formSlot" />
        <div class="slot" v-html="formSlot" />
        <div class="actions">
          <SolarisButton size="large" color="default">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const I=["FormA"];export{o as FormA,I as __namedExportsOrder,k as default};
