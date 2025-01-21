import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as t,a as e,b as m}from"./Shadow-ELLRTBGu.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Button-Cqby2nDZ.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DVyLjiyj.js";const r=Object.values(t),a=Object.values(e),k={title:"Atoms/Shadow",argTypes:{arrowWeight:{description:"Define the arrows weight",table:{type:{summary:r.join(" | ")},defaultValue:{summary:t.Regular}},control:{type:"select"},options:r},bgColor:{description:"Define the shadow background color",table:{type:{summary:a.join(" | ")},defaultValue:{summary:e.NeutralSoft}},control:{type:"select"},options:a}},args:{arrowWeight:t.Regular,bgColor:e.NeutralSoft,showArrows:!0}},o={render:l=>({components:{SolarisShadow:m},setup(){const n=p("click-stop");return{args:l,clickStopElement:n}},template:'<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'})};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisShadow
    },
    setup() {
      const clickStopElement = action('click-stop');
      return {
        args,
        clickStopElement
      };
    },
    template: '<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'
  })
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["Shadow"];export{o as Shadow,v as __namedExportsOrder,k as default};
