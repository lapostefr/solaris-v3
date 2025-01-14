import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as e,a as t}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const r=Object.values(e),a=Object.values(t),n={title:"Atoms/Shadow",argTypes:{arrowWeight:{description:"Define the arrows weight",table:{type:{summary:r},defaultValue:{summary:e.Regular}},control:{type:"select"},options:r},bgColor:{description:"Define the shadow background color",table:{type:{summary:a},defaultValue:{summary:t.NeutralSoft}},control:{type:"select"},options:a}},args:{arrowWeight:e.Regular,bgColor:t.NeutralSoft,showArrows:!0}},o=i=>({props:Object.keys(i),methods:{clickStopElement:p("click-stop")},template:'<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'});var s,c,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(args: any) => ({
  props: Object.keys(args),
  methods: {
    clickStopElement: action('click-stop')
  },
  template: '<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'
})`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const g=["Shadow"];export{o as Shadow,g as __namedExportsOrder,n as default};
