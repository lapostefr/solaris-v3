const i=`[
  {
    title: string,
    desc: [
      {
        color: string,
        icon: string,
        text: string
      }
    ]
  }
]`,c=[{title:"Information du demandeur",desc:[{text:"Mme Laurette Beauchamps"}]},{title:"Pieces justificatives",desc:[{text:"Mme Laurette Beauchamps"},{text:"2 pieces justificatives",icon:"editing-paperclip",color:"cobalt"}]},{title:"Information du mandataire"},{title:"Récapitulatif"}],o={title:"Molecules/Vertical Stepper",argTypes:{current:{description:"Description slot of the tips",type:{summary:"string"}},steps:{description:"Steps of the vertical stepper.",table:{type:{summary:"array",detail:i}},type:{required:!0}}},args:{current:2,steps:c}},e=(a,{argTypes:p})=>({props:Object.keys(p),data:()=>({args:a}),template:'<SolarisVerticalStepper v-model="args.current" :steps="args.steps" />'});var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    args
  }),
  template: '<SolarisVerticalStepper v-model="args.current" :steps="args.steps" />'
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const l=["VerticalStepper"];export{e as VerticalStepper,l as __namedExportsOrder,o as default};
