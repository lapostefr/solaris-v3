import{r as t,m as s}from"./index-DkdQS98R.js";import{C as v,L as f,S as g}from"./types-Dd7QR7uO.js";import{s as S,l as b}from"./debugForm-DK5Cr3ff.js";import{r as n,w as y}from"./vue.esm-bundler-BV06ZB-3.js";import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const B={switch:{col:"12",type:"switch",props:{id:"switch",label:"Label Switch"},validation:{validators:{required:t},messages:{required:"Le switch est requis!"}}},inputPhone:{col:"12",type:"inputPhone",inputType:"tel",props:{placeholder:"Téléphone",id:"tel",name:"tel",label:"Téléphone"},validation:{validators:{required:t,minLength:s(10)},messages:{required:"Le champ prénom est requis!",minLength:"Votre numéro de téléphone n'est pas complet"}}},inputWithButton:{col:"12",type:"inputButton",props:{id:"inputWithButton",name:"inputWithButton",label:"Label Input With Button",class:"last-name",validateText:"Valider"},validation:{validators:{required:t,minLength:s(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputWithUnit:{col:"12",type:"input",props:{id:"inputWithUnit",name:"inputWithUnit",label:"Label Input With Unit",class:"last-name",unit:{label:"cm",description:"centimeter"}},validation:{validators:{},messages:{}}},textarea:{col:"12",type:"textarea",props:{placeholder:"Placeholder Textarea",id:"message",name:"message",label:"Label Textarea"},validation:{validators:{required:t},messages:{required:"Le champ message est requis!"}}},radio:{col:"12",type:"radio",props:{id:"radio",name:"radio",label:`J'accepte les <a href="#">conditions générales d'utilisation</a>`},validation:{validators:{},messages:{}}}},q={title:"Organisms/Form",argTypes:{},args:{colorStyle:v.default,elements:B,labelPosition:f.outside,size:g.medium,value:{switch:!0,radio:"test",inputPhone:"0123456789",inputWithButton:"Value Input With Button",inputWithUnit:"Value Input With Unit",textarea:"Value Textarea"}}},a={render:o=>({setup(){const c=n(S),r=n(null);y(()=>o.value,h=>{var i;m("v-model change")(h);const e=(i=r.value)==null?void 0:i.v$;b(e),m("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const l={...o};return delete l.value,{args:o,otherProps:l,formSlot:c,form:r}},template:`<SolarisContainer>
      <h1>Fomulaire C</h1>
      <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
        <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default">Valider</SolarisButton>
            <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>`})};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <h1>Fomulaire C</h1>
      <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const w=["FormC"];export{a as FormC,w as __namedExportsOrder,q as default};
