import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";const n=["supernova","default","cobalt","darkgrey","white","danger"],l="small",c="regular",u="large",p={mobile:l,tablet:c,desktop:u},d=["small","regular","large"],m=["primary","secondary","ghost"],y=`{
  mobile: string,
  tablet: string,
  desktop: string
}`,f={title:"Atoms/Button",argTypes:{ariaHidden:{description:'if true, the icon is hidden from assistive technologies. Set the "title" prop to ensure that the content remains accessible.',table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},buttonType:{description:'If present and not undefined, add the "type" html attribute with the selected value.',table:{type:{summary:"button| reset| submit"}},control:{type:"select"},options:["button","reset","submit"]},color:{description:"The background color of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"supernova"},control:{type:"select"},options:n},disabled:{description:"Activate or deactivate the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},href:{description:"Link to the button.",table:{type:{summary:"string"}}},icon:{description:"Choose the type of the icon.",table:{type:{summary:"string"}}},iconReverse:{description:"Place the icon after the text in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isLoading:{description:"Displays a loading animation in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},loadingCustom:{description:"Color for the Loading.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"select"},options:["","emphasis","quiet","default","vsmp","danger"]},padding:{description:"Activate a padding for the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:{type:"boolean"}},responsive:{description:"Specific sizes for the three types of screen (mobile - tablet - desktop). If there is no value, it is the overall button size (above) that is applied.",table:{type:{summary:"object",detail:y}}},size:{description:"Overall button size for all screen sizes (unless there are specific sizes in responsive).",table:{type:{summary:"string"}},defaultValue:{summary:"regular"},control:{type:"select"},options:d},target:{description:"Target for the link of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"_self"}},title:{description:"The title for the button.",table:{type:{summary:"string"}}},type:{description:"The kind of button.",table:{type:{summary:"string"}},defaultValue:{summary:"primary"},control:{type:"select"},options:m}},args:{buttonType:void 0,color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isLoading:!1,loadingCustom:"default",padding:!0,responsive:p,size:"regular",target:"_self",title:"",type:"primary"}},e={render:s=>({setup(){const r=i("click");return{args:s,clickElement:r}},template:`
      <div style="padding: 15px; background: #ccc;">
        <SolarisButton v-bind="{...args}" @click="clickElement">Button</SolarisButton>
      </div>
    `}),args:{color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isLoading:!1,loadingCustom:"default",padding:!0,size:"regular",target:"_self",title:"",type:"primary"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const clickElement = action('click');
      return {
        args,
        clickElement
      };
    },
    template: \`
      <div style="padding: 15px; background: #ccc;">
        <SolarisButton v-bind="{...args}" @click="clickElement">Button</SolarisButton>
      </div>
    \`
  }),
  args: {
    color: 'supernova',
    disabled: false,
    href: '',
    icon: 'cart-simple',
    iconReverse: false,
    isLoading: false,
    loadingCustom: 'default',
    padding: true,
    size: 'regular',
    target: '_self',
    title: '',
    type: 'primary'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Button"];export{e as Button,h as __namedExportsOrder,f as default};
