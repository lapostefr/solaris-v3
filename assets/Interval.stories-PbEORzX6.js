import{i as p}from"./argTypes-Bj6PbXdt.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as d,S as u}from"./Datepicker-D6S1gCMb.js";import{r as b}from"./vue.esm-bundler-BQVOD3cV.js";import{L as E}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DbigVfOb.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";import"./Message-COM7xYSp.js";import"./generateId-CVaf2GGW.js";const A={title:"Molecules/Datepicker/Interval",argTypes:p,args:{aria:{describedby:"info-text-id"},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:"Message d'erreur"},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/03/2024"},inputReadonly:!1,label:"Label",labelPosition:E.inside,message:"Voilà le message",mandatory:!1,range:{min:16938648e5},size:d.medium,start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}},t={render:s=>({components:{SolarisDatepicker:u},setup(){const n=b([s.start.date,s.end.date]),o=e("input"),l=e("blur"),m=e("selection"),c=e("reset");return{args:s,inputElement:o,blurElement:l,selectionElement:m,resetElement:c,selection:n}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'})};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDatepicker
    },
    setup() {
      const selection = ref([args.start.date, args.end.date]);
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
  })
} satisfies Meta<typeof SolarisDatepicker>`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["Datepicker"];export{t as Datepicker,B as __namedExportsOrder,A as default};
