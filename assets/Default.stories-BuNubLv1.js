import{c as d}from"./argTypes-Bj5RRpZ6.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Datepicker-0CjEQcnc.js";import{r as u}from"./vue.esm-bundler-BV06ZB-3.js";import"./types-Dd7QR7uO.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-NRfyb4RI.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";import"./isValidDate-CEoz4-cc.js";import"./generateId-DPOzJEtM.js";const B={title:"Molecules/Datepicker/Default",argTypes:d},t={render:s=>({components:{SolarisDatepicker:p},setup(){const i=u([s.start.date]),n=e("input"),o=e("blur"),m=e("selection"),c=e("reset");return{args:s,inputElement:n,blurElement:o,selectionElement:m,resetElement:c,selection:i}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],inputReadonly:!1,label:"Label",labelPosition:"inside",mandatory:!1,message:"Voilà le message",size:"large",start:{label:"Date de début",date:"20/03/2024"},typage:"default",weekend:!0,whiteList:[],withReset:!1}};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    // id: 'calendar',
    inputReadonly: false,
    // name: 'calendar',
    label: 'Label',
    labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    size: 'large',
    start: {
      label: 'Date de début',
      date: '20/03/2024'
    },
    typage: 'default',
    weekend: true,
    whiteList: [],
    withReset: false
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const P=["Datepicker"];export{t as Datepicker,P as __namedExportsOrder,B as default};
