import{S as B}from"./Notifications-JF1OiC5J.js";import{S as a}from"./Notification-BVqXdJdU.js";import{L as k}from"./types-CX4OQ2kf.js";import{r}from"./vue.esm-bundler-S_SeJiWS.js";import{a as w}from"./argsType-Du3p6Xws.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-D8mvpj6W.js";import"./Collapse-Bil4FeqR.js";import"./generateId-CVaf2GGW.js";import"./useTips-yS-55qFh.js";const c="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna",p=[{url:"#",label:"Envoyer un courrier"},{url:"#",label:"Envoyer un courrier",target:k.BLANK}],l={base:{alertFormat:"block",color:"informational",id:1,links:[{url:"#",label:"link wording 1"},{url:"#",label:"link wording 2"}],title:"Notification title",type:"inline"},inline:{closable:{color:"success",description:c,id:1,links:p,isClosable:!0,title:"Success notification",type:"inline"},collapse:{color:"error",description:c,id:2,isCollapse:!0,links:p,show:!0,title:"Error notification",type:"inline"}},toast:{animate:!0,color:"alert",description:c,duration:0,icon:"action-information-warning",id:1,links:p,role:"dialog",title:"Notification title",type:"toast"}},q={title:"Molecules/Notification/Examples",component:a,argTypes:w,parameters:{docs:{description:{component:"The **Notification component** allows you to have three types of notifications, Toast, Inline or Banner.<br> This section introduces you to the Toast and Inline types and shows you how to use this component."}}}},e={render:i=>({components:{SolarisNotification:a},setup(){const o=r(!0);return{args:i,isVisible:o}},template:`
        <SolarisNotification v-model:isVisible="isVisible" v-bind="args">
            <p class="slot" style="margin: 0 0 6px 0; color: #3c3c3c; font-size: 1.2rem; line-height: 1.6rem;">For the description of the notification, you can choose to use a slot or using the description prop.</p>  
        </SolarisNotification>
  `})};e.args=l.base;const s={render:i=>({components:{SolarisNotification:a},setup(){const o=r(!0);return{args:i,isVisible:o}},template:'<SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>'})};s.args=l.inline.closable;const t={render:i=>({components:{SolarisNotification:a},setup(){const o=r(!0),T=r(!0);return{args:i,isVisible:o,isVisibleB:T}},template:'<SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>'})};t.args=l.inline.collapse;const n={render:i=>({components:{SolarisNotification:a,SolarisNotifications:B},setup(){const o=r(!0);return{args:i,isVisible:o}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle Toast</SolarisButton> 

      <SolarisNotifications type="toast">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>
      </SolarisNotifications>
    </div>
  `})};n.args=l.toast;var m,u,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
    },
    setup() {
      const isVisible = ref(true);
      return {
        args,
        isVisible
      };
    },
    template: \`
        <SolarisNotification v-model:isVisible="isVisible" v-bind="args">
            <p class="slot" style="margin: 0 0 6px 0; color: #3c3c3c; font-size: 1.2rem; line-height: 1.6rem;">For the description of the notification, you can choose to use a slot or using the description prop.</p>  
        </SolarisNotification>
  \`
  })
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,f,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
    },
    setup() {
      const isVisible = ref(true);
      return {
        args,
        isVisible
      };
    },
    template: '<SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>'
  })
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var V,S,v;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
    },
    setup() {
      const isVisible = ref(true);
      const isVisibleB = ref(true);
      return {
        args,
        isVisible,
        isVisibleB
      };
    },
    template: '<SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>'
  })
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,y,h;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const isVisible = ref(true);
      return {
        args,
        isVisible
      };
    },
    template: \`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle Toast</SolarisButton> 

      <SolarisNotifications type="toast">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="args"/>
      </SolarisNotifications>
    </div>
  \`
  })
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const D=["AllAvailableElements","InlineClosable","InlineCollapse","Toast"];export{e as AllAvailableElements,s as InlineClosable,t as InlineCollapse,n as Toast,D as __namedExportsOrder,q as default};
