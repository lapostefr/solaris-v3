import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./Modal-DbigVfOb.js";import{a as m}from"./argsTypeModal-CuWBmXn4.js";import{r as c}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./Button-qisKMu5t.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DlskW7bR.js";import"./bodyNoScroll-CKdIPrAc.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";import"./index-KgIASP7u.js";const D={title:"Organisms/Modal/Default",argTypes:m},e={render:n=>({components:{SolarisModal:d},setup(){const o=c(!0),l=a("Toggle"),t=a("Close");return{args:n,elementClose:t,elementToggle:l,close:()=>{t()},toggle:()=>{l()},toggleOut:()=>{o.value=!o.value,l()},modalModel:o}},template:`<div>
    <SolarisButton @click="toggleOut">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="close" v-bind="args" @toggle="toggle">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="toggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisModal>
    </div>`}),args:{arialabel:"Je suis une modale",colorBorderTop:"supernova",disableClickOutside:!1,focusTrap:!0,mobileFull:!1,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default",closable:!0}};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisModal
    },
    setup() {
      const modalModel = ref(true);
      const elementToggle = action('Toggle');
      const elementClose = action('Close');
      const close = () => {
        elementClose();
      };
      const toggleOut = () => {
        modalModel.value = !modalModel.value;
        elementToggle();
      };
      const toggle = () => {
        elementToggle();
      };
      return {
        args,
        elementClose,
        elementToggle,
        close,
        toggle,
        toggleOut,
        modalModel
      };
    },
    template: \`<div>
    <SolarisButton @click="toggleOut">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="close" v-bind="args" @toggle="toggle">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="toggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisModal>
    </div>\`
  }),
  args: {
    arialabel: 'Je suis une modale',
    colorBorderTop: 'supernova',
    disableClickOutside: false,
    focusTrap: true,
    mobileFull: false,
    showTitle: true,
    size: 'default',
    title: 'Je suis le titre',
    titleLevel: 'h1',
    padding: 'default',
    // |-- Deprecated
    closable: true
    // Deprecated --|
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const J=["Default"];export{e as Default,J as __namedExportsOrder,D as default};
