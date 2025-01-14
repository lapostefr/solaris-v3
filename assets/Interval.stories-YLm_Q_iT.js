import{i as c}from"./argTypes-Bj5RRpZ6.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Datepicker-0CjEQcnc.js";import{r as u}from"./vue.esm-bundler-BV06ZB-3.js";import"./types-Dd7QR7uO.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-NRfyb4RI.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";import"./isValidDate-CEoz4-cc.js";import"./generateId-DPOzJEtM.js";const W={title:"Molecules/Datepicker/Interval",argTypes:c,args:{holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/03/2024"},inputReadonly:!1,label:"Label",labelPosition:"inside",message:"Voilà le message",mandatory:!1,size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}},t={render:a=>({components:{SolarisDatepicker:p},setup(){const i=u([a.start.date,a.end.date]),n=e("input"),o=e("blur"),d=e("selection"),m=e("reset");return{args:a,inputElement:n,blurElement:o,selectionElement:d,resetElement:m,selection:i}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},inputReadonly:!1,mandatory:!1,size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    size: 'large',
    start: {
      label: 'Date de début',
      date: '20/02/2024'
    },
    typage: 'interval',
    weekend: true,
    whiteList: [],
    withReset: false
  }
} satisfies Meta<typeof SolarisDatepicker>`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const x=["Datepicker"];export{t as Datepicker,x as __namedExportsOrder,W as default};
