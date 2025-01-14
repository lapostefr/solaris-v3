import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as d}from"./argsTypeSidePanel-CFj-Ved0.js";import{S as u}from"./SidePanel-CZxW1cjy.js";import{S as c}from"./Modal-NRfyb4RI.js";import{r as t}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-Lw3s2UWX.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";const V={title:"Organisms/Side Panel",argTypes:d,args:{disableClickOutside:!1,size:"default",title:"Je suis le titre",focusTrap:!1}},l={render:r=>({components:{SolarisModal:c,SolarisSidePanel:u},setup(){const a=t(!1),e=t(!1);return{args:r,toggleSidePanel:()=>{o("Toggle Side Panel")(),e.value=!e.value},closeModal:()=>{o("Toggle Modal")(),a.value=!1},showModalAndSidepanel:()=>{e.value=!0,a.value=!0},isVisibleModal:a,showSidePanel:e}},template:`<div>
    <SolarisButton @click="showModalAndSidepanel">Ouvrir le SidePanel</SolarisButton>
    <SolarisModal :show-modal="isVisibleModal" title="Je suis le titre" @close="closeModal">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
          <SolarisButton
            @click="closeModal"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
      </template>
    </SolarisModal>

    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
        <template v-slot:content>
          <div style="margin-bottom: 16px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </div>
        </template>
        <template v-slot:actions>
          <SolarisButton
            @click="toggleSidePanel"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
        </template>
      </SolarisSidePanel>
    </div>`}),args:{disableClickOutside:!1,size:"default",title:"Je suis le titre",focusTrap:!1}};var i,s,n;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisModal,
      SolarisSidePanel
    },
    setup() {
      const isVisibleModal = ref(false);
      const showSidePanel = ref(false);
      const showModalAndSidepanel = () => {
        showSidePanel.value = true;
        isVisibleModal.value = true;
      };
      const toggleSidePanel = () => {
        action('Toggle Side Panel')();
        showSidePanel.value = !showSidePanel.value;
      };
      const closeModal = () => {
        action('Toggle Modal')();
        isVisibleModal.value = false;
      };
      return {
        args,
        toggleSidePanel,
        closeModal,
        showModalAndSidepanel,
        isVisibleModal,
        showSidePanel
      };
    },
    template: \`<div>
    <SolarisButton @click="showModalAndSidepanel">Ouvrir le SidePanel</SolarisButton>
    <SolarisModal :show-modal="isVisibleModal" title="Je suis le titre" @close="closeModal">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
          <SolarisButton
            @click="closeModal"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
      </template>
    </SolarisModal>

    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
        <template v-slot:content>
          <div style="margin-bottom: 16px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </div>
        </template>
        <template v-slot:actions>
          <SolarisButton
            @click="toggleSidePanel"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
        </template>
      </SolarisSidePanel>
    </div>\`
  }),
  args: {
    disableClickOutside: false,
    size: 'default',
    title: 'Je suis le titre',
    focusTrap: false
  }
}`,...(n=(s=l.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const q=["MultipleElevatedContaint"];export{l as MultipleElevatedContaint,q as __namedExportsOrder,V as default};
