import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{b as d,a as c}from"./details-Dlf24xuS.js";import{S as u}from"./Checkbox-BHJD1l2a.js";import{r as p,w as l}from"./vue.esm-bundler-BHwbD8xO.js";import"./v4-CQkTLCs1.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=["emphasis","default","quiet","error"],S={title:"Atoms/Checkbox/Default",argTypes:{aria:{description:"The aria attributes.",table:{type:{summary:"object",detail:d}},control:"object"},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:b},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},id:{description:"The checkbox id",table:{type:{summary:"string"}},required:!0},indeterminate:{description:"Indeterminate status",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},name:{description:"The checkbox name",table:{type:{summary:"string"}},required:!0},value:{description:"The checkbox value",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},error:{description:'Show an error checkbox. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"},readonly:{description:'The readonly attribute is not supported to checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"}},args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",value:!1,readonly:!1}},e={render:a=>({components:{SolarisCheckbox:u},setup(){const r=p(a.value),m=t("input");return l(()=>a.value,o=>{r.value=o}),l(()=>r.value,o=>{t("update")(o)}),{args:a,inputElement:m,model:r}},template:`<div>
    <SolarisCheckbox v-model="model" v-bind="args">My super checkbox</SolarisCheckbox>
    </div>`}),args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",readonly:!1,value:!1}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckbox
    },
    setup() {
      const model = ref(args.value);
      const inputElement = action('input');
      watch(() => args.value, (value: boolean) => {
        model.value = value;
      });
      watch(() => model.value, (value: boolean) => {
        action('update')(value);
      });
      return {
        args,
        inputElement,
        model
      };
    },
    template: \`<div>
    <SolarisCheckbox v-model="model" v-bind="args">My super checkbox</SolarisCheckbox>
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,S as default};
