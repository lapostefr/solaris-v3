import{c}from"./argTypes-Bj6PbXdt.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p,a as u}from"./Datepicker-D6S1gCMb.js";import{r as b}from"./vue.esm-bundler-BQVOD3cV.js";import{L as f}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";const V={title:"Molecules/Datepicker/Default",argTypes:c},t={render:s=>({components:{SolarisDatepicker:p},setup(){const l=b([s.start.date]),n=e("input"),o=e("blur"),m=e("selection"),d=e("reset");return{args:s,inputElement:n,blurElement:o,selectionElement:m,resetElement:d,selection:l}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{aria:{describedby:"info-text-id"},range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:"Message d'erreur"},disabled:!1,disabledDaysByWeek:[],inputReadonly:!1,label:"Label",labelPosition:f.inside,mandatory:!1,message:"Voilà le message",size:u.medium,start:{label:"Date de début",date:"20/03/2024"},typage:"default",weekend:!0,whiteList:[],withReset:!1}};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDatepicker
    },
    setup() {
      const selection = ref([args.start.date]);
      const inputElement = action('input');
      const blurElement = action('blur');
      const selectionElement = action('selection');
      const resetElement = action('reset');
      return {
        args,
        inputElement,
        blurElement,
        selectionElement,
        resetElement,
        selection
      };
    },
    template: '<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'
  }),
  args: {
    aria: {
      describedby: 'info-text-id'
    },
    range: {
      min: 1693864800000
    },
    holidays: true,
    blackList: [1704892448, 1708434848],
    // buttonLayout: 'centered',
    dataError: {
      active: false,
      message: 'Message d\\'erreur'
    },
    disabled: false,
    disabledDaysByWeek: [],
    // id: 'calendar',
    inputReadonly: false,
    // name: 'calendar',
    label: 'Label',
    labelPosition: LabelPosition.inside,
    mandatory: false,
    message: 'Voilà le message',
    size: Size.medium,
    start: {
      label: 'Date de début',
      date: '20/03/2024'
    },
    typage: 'default',
    weekend: true,
    whiteList: [],
    withReset: false
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const W=["Datepicker"];export{t as Datepicker,W as __namedExportsOrder,V as default};
