import{i as p}from"./argTypes-DzYhJKXz.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as l,S as u}from"./Datepicker-BPI5Oo0c.js";import{r as b}from"./vue.esm-bundler-S_SeJiWS.js";import{L as f}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BH_SZZwx.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-Dq8tj7-6.js";import"./generateId-CVaf2GGW.js";const P={title:"Molecules/Datepicker/Interval",argTypes:p,args:{holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/03/2024"},inputReadonly:!1,label:"Label",labelPosition:f.inside,message:"Voilà le message",mandatory:!1,size:l.medium,start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}},t={render:a=>({components:{SolarisDatepicker:u},setup(){const n=b([a.start.date,a.end.date]),o=e("input"),d=e("blur"),m=e("selection"),c=e("reset");return{args:a,inputElement:o,blurElement:d,selectionElement:m,resetElement:c,selection:n}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},inputReadonly:!1,mandatory:!1,size:l.medium,start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}};var s,i,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
  }),
  args: {
    range: {
      min: 1693864800000
    },
    holidays: true,
    blackList: [1704892448, 1708434848],
    // buttonLayout: 'centered',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    disabledDaysByWeek: [],
    end: {
      label: 'Date de fin',
      date: '27/02/2024'
    },
    // id: 'calendar',
    inputReadonly: false,
    mandatory: false,
    // name: 'calendar',
    size: Size.medium,
    start: {
      label: 'Date de début',
      date: '20/02/2024'
    },
    typage: 'interval',
    weekend: true,
    whiteList: [],
    withReset: false
  }
} satisfies Meta<typeof SolarisDatepicker>`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const T=["Datepicker"];export{t as Datepicker,T as __namedExportsOrder,P as default};
