import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{b as c,a as m}from"./details-Dlf24xuS.js";import{S as d}from"./Checkbox-1Ng9DjFN.js";import{r as u,w as p}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=["emphasis","default","quiet","error"],E={title:"Atoms/Checkbox/Default",argTypes:{aria:{description:"The aria attributes.",table:{type:{summary:"object",detail:c}},control:"object"},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:b},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:m}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},id:{description:"The checkbox id",table:{type:{summary:"string"}},required:!0},indeterminate:{description:"Indeterminate status",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},name:{description:"The checkbox name",table:{type:{summary:"string"}},required:!0},value:{description:"The checkbox value",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},error:{description:'Show an error checkbox. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"},readonly:{description:'The readonly attribute is not supported to checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"}},args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",value:!1,readonly:!1}},e={render:a=>({components:{SolarisCheckbox:d},setup(){const r=u(a.value),l=i("input");return p(()=>a.value,n=>{r.value=n}),{args:a,inputElement:l,checkboxdata:r}},template:`<div>
    <SolarisCheckbox v-model="checkboxdata" v-bind="args" @input="inputElement" >My super checkbox</SolarisCheckbox>
    </div>`}),args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",readonly:!1,value:!1}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckbox
    },
    setup() {
      const checkboxdata = ref(args.value);
      const inputElement = action('input');
      watch(() => args.value, (value: boolean) => {
        checkboxdata.value = value;
      });
      return {
        args,
        inputElement,
        checkboxdata
      };
    },
    template: \`<div>
    <SolarisCheckbox v-model="checkboxdata" v-bind="args" @input="inputElement" >My super checkbox</SolarisCheckbox>
    </div>\`
  }),
  args: {
    aria: {
      label: 'name'
    },
    color: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    id: 'monId',
    indeterminate: false,
    name: 'name',
    readonly: false,
    value: false
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,E as default};
