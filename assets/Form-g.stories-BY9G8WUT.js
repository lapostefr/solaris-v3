import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as d,w as g,c as F}from"./vue.esm-bundler-BV06ZB-3.js";import{r as t,m as S,a as u}from"./index-DkdQS98R.js";import{C as q,L as y,S as O}from"./types-Dd7QR7uO.js";import{s as b,l as L}from"./debugForm-DK5Cr3ff.js";import"./v4-CQkTLCs1.js";const z={title:"Organisms/Form",argTypes:{},args:{colorStyle:q.default,elements:{radioG:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",disabled:!1,layout:"vertical",options:{legend:"Radio buttons heading",optionsList:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3 (add conditional field)",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4 (add conditional field - required)",val:"option4-id"}]},readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:t,minLength:S(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:t,maxLength:u(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}}},labelPosition:y.outside,size:O.small,value:{radioG:"Option 1",inputG:"1234"}}},a={render:e=>({setup(){const p=d(b),n=d(null);g(()=>e.value,o=>{var l;r("v-model change")(o);const i=(l=n.value)==null?void 0:l.v$;L(i),r("Form is invalid?")(i==null?void 0:i.$invalid)},{deep:!0});const v=()=>{n.value.submit()},h=(o,i)=>{console.error("Form data changed",o,i)},f=F(()=>{const o={...e,elements:{...e.elements,...["Option 3 (add conditional field)","Option 4 (add conditional field - required)"].includes(e.value.radioG)&&{conditionalField:{col:"12",type:"input",props:{id:"conditionalField-1",name:"conditionalField",label:"Champ conditionnel et required si Option 4 checked",inputRef:"conditionalField"},...e.value.radioG==="Option 4 (add conditional field - required)"&&{validation:{validators:{required:t,maxLength:u(10)},messages:{required:"Le champ conditionnel est requis!",maxLength:"10 chars max"}}}}}},value:{...e.value,...["Option 3 (add conditional field)","Option 4 (add conditional field - required)"].includes(e.value.radioG)&&{conditionalField:null}}};return delete o.value,o});return{args:e,otherProps:f,formSlot:p,form:n,submitForm:v,change:h}},template:`<SolarisContainer>
    <h1>Fomulaire G (avec champ conditionnel & validation conditionnelle)</h1>
    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps" @change="change">
      <template #formEnd>
        <div class="actions">
          <SolarisButton size="large" color="default" @click="submitForm">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>`})};var s,m,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      const submitForm = () => {
        ;
        (form.value as any).submit();
      };
      const change = (val, pay) => {
        console.error('Form data changed', val, pay);
      };
      const otherProps = computed(() => {
        const result = {
          ...args,
          elements: {
            ...args.elements,
            ...(['Option 3 (add conditional field)', 'Option 4 (add conditional field - required)'].includes(args.value.radioG) && {
              conditionalField: {
                col: '12',
                type: 'input',
                props: {
                  id: 'conditionalField-1',
                  name: 'conditionalField',
                  label: 'Champ conditionnel et required si Option 4 checked',
                  inputRef: 'conditionalField'
                },
                ...(args.value.radioG === 'Option 4 (add conditional field - required)' && {
                  validation: {
                    validators: {
                      required,
                      maxLength: maxLength(10)
                    },
                    messages: {
                      required: 'Le champ conditionnel est requis!',
                      maxLength: '10 chars max'
                    }
                  }
                })
              }
            })
          },
          value: {
            ...args.value,
            ...(['Option 3 (add conditional field)', 'Option 4 (add conditional field - required)'].includes(args.value.radioG) && {
              conditionalField: null
            })
          }
        };
        delete result.value;
        return result;
      });
      return {
        args,
        otherProps,
        formSlot,
        form,
        submitForm,
        change
      };
    },
    template: \`<SolarisContainer>
    <h1>Fomulaire G (avec champ conditionnel & validation conditionnelle)</h1>
    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps" @change="change">
      <template #formEnd>
        <div class="actions">
          <SolarisButton size="large" color="default" @click="submitForm">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const $=["FormG"];export{a as FormG,$ as __namedExportsOrder,z as default};
