import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Notifications-HNiVRkET.js";import{S as a}from"./Notification-lGc5pTbv.js";import{a as d}from"./argsType-Du3p6Xws.js";import{r as t}from"./vue.esm-bundler-BQVOD3cV.js";import{L as f}from"./types-CX4OQ2kf.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-CNTEbVSX.js";import"./Collapse-CARPdCeu.js";import"./generateId-CVaf2GGW.js";import"./useTips-B26kB0Ta.js";const u=[{url:"#",label:"Envoyer un courrier"},{url:"#",label:"Envoyer un courrier",target:f.BLANK}],P={title:"Molecules/Notification",component:a,argTypes:d,args:{animate:!0,alertFormat:"",color:"informational",description:"Lorem ipsum dolor",duration:0,icon:"",id:1,isClosable:!0,isCollapse:!0,links:u,role:"dialog",show:!0,descriptionTag:"div",title:"Titre de notification",titleLevel:"p",type:"inline",toastPosition:"top-center",closable:!0,text:"Old text"}},i={render:o=>({components:{SolarisNotification:a,SolarisNotifications:m},setup(){const l=t(!1),n=t(o.show),c=p("close");return{args:o,isVisible:l,isCollapse:n,elementClose:c}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle</SolarisButton>

      <SolarisNotifications style="margin-top: 30px;" :toastPosition="args.toastPosition" :type="args.type" @close="elementClose">
          <SolarisNotification v-model:isVisible="isVisible" v-model:isCollapse="isCollapse" v-bind="{...args, id: '1'}"/>
      </SolarisNotifications>
    </div>
  `})};var s,e,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const isVisible = ref(false);
      const isCollapse = ref(args.show);
      const elementClose = action('close');
      return {
        args,
        isVisible,
        isCollapse,
        elementClose
      };
    },
    template: \`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle</SolarisButton>

      <SolarisNotifications style="margin-top: 30px;" :toastPosition="args.toastPosition" :type="args.type" @close="elementClose">
          <SolarisNotification v-model:isVisible="isVisible" v-model:isCollapse="isCollapse" v-bind="{...args, id: '1'}"/>
      </SolarisNotifications>
    </div>
  \`
  })
}`,...(r=(e=i.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const k=["Notification"];export{i as Notification,k as __namedExportsOrder,P as default};
