import{S as d}from"./Burger-BE52IuaC.js";import{r as g,w as p}from"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Atoms/Burger",argTypes:{},args:{}},e={render:r=>({components:{SolarisBurger:d},setup(){return{args:r}},template:`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" />
  </div>`}),args:{}},a={render:r=>({components:{SolarisBurger:d},setup(){const n=g(r.value);return p(()=>r.value,m=>{n.value=m}),{args:r,model:n}},template:`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" />
  </div>`}),args:{value:!1}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBurger
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" />
  </div>\`
  }),
  args: {}
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,u,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBurger
    },
    setup() {
      const model = ref(args.value);
      watch(() => args.value, (value: boolean) => {
        model.value = value;
      });
      return {
        args,
        model
      };
    },
    template: \`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" />
  </div>\`
  }),
  args: {
    value: false
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const B=["StaticStory","AnimatedStory"];export{a as AnimatedStory,e as StaticStory,B as __namedExportsOrder,y as default};
