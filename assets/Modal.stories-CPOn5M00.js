import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as d}from"./argsTypeModal-BLMhfQxO.js";import{r as u}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";const v={title:"Organisms/Modal/Default",argTypes:d,args:{arialabel:"Je suis une modale",closable:!0,colorBorderTop:"supernova",focusTrap:!0,mobileFull:!1,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default"}},l={render:o=>({setup(){const e=u(o.showModal),t=i("Toggled modal",e.value);return{args:o,elementToggle:t,toggle:()=>{e.value=!e.value,t()},modalModel:e}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="toggle(modalModel)" v-bind="args" @toggle="toggle">
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
    </div>`}),args:{arialabel:"Je suis une modale",colorBorderTop:"supernova",disableClickOutside:!1,focusTrap:!0,mobileFull:!1,showModal:!0,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default",closable:!0}};var a,r,s;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const modalModel = ref(args.showModal);
      const elementToggle = action('Toggled modal', modalModel.value);
      const toggle = () => {
        modalModel.value = !modalModel.value;
        elementToggle();
      };
      return {
        args,
        elementToggle,
        toggle,
        modalModel
      };
    },
    template: \`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="toggle(modalModel)" v-bind="args" @toggle="toggle">
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
    showModal: true,
    showTitle: true,
    size: 'default',
    title: 'Je suis le titre',
    titleLevel: 'h1',
    padding: 'default',
    // |-- Deprecated
    closable: true
    // Deprecated --|
  }
}`,...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const f=["Default"];export{l as Default,f as __namedExportsOrder,v as default};
