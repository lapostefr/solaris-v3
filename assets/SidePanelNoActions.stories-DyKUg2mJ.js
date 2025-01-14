import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u}from"./SidePanel-CZxW1cjy.js";import{a as s}from"./argsTypeSidePanel-CFj-Ved0.js";import{r as d}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";const P={title:"Organisms/Side Panel",argTypes:s,args:{disableClickOutside:!1,size:"default",title:"Je suis le titre"}},e={render:l=>({components:{SolarisSidePanel:u},setup(){const i=d(!1),n=r("Toggle Side Panel")();return{args:l,elementToggle:n,showSidePanel:i,toggle:()=>{i.value=!i.value}}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir le SidePanel</SolarisButton>
    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
      <template v-slot:content>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </template>
    </SolarisSidePanel>
  </div>`}),args:{size:"default",title:"Je suis le titre"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSidePanel
    },
    setup() {
      const showSidePanel = ref(false);
      const elementToggle = action('Toggle Side Panel')();
      const toggle = () => {
        showSidePanel.value = !showSidePanel.value;
      };
      return {
        args,
        elementToggle,
        showSidePanel,
        toggle
      };
    },
    template: \`<div>
    <SolarisButton @click="toggle">Ouvrir le SidePanel</SolarisButton>
    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
      <template v-slot:content>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </template>
    </SolarisSidePanel>
  </div>\`
  }),
  args: {
    size: 'default',
    title: 'Je suis le titre'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const h=["SidePanelNoAction"];export{e as SidePanelNoAction,h as __namedExportsOrder,P as default};
