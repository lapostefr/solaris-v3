import{S as a}from"./Error-6uBbNP0i.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Button-DIKv7yJx.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DKFivUin.js";import"./logo-Bjhj7hjj.js";const u={title:"Templates/Error",argTypes:{status:{description:"The error status code",table:{type:{summary:"number"}},control:{type:"select"},options:[404,500]},sessionId:{description:"The session id",table:{type:{summary:"string"}}},date:{description:"The date of the error",table:{type:{summary:"string"}}}},args:{status:404,sessionId:"df8db67e-4834-4cf8-9eb8-c6a31d24f6ab",date:"2020/07/20 10:30:32:635 CEST"}},r={render:o=>({components:{SolarisError:a},setup(){return{args:o}},template:'<SolarisError v-bind="args" />'})};var e,t,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisError
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisError v-bind="args" />'
  })
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const b=["Error"];export{r as Error,b as __namedExportsOrder,u as default};
