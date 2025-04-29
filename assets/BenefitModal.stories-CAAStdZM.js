import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u}from"./BenefitModal-DEnZ4_Uy.js";import{l as g}from"./colissimo-B7reKzCB.js";import{b as v}from"./argsTypeModal-CuWBmXn4.js";import{r as f}from"./vue.esm-bundler-S_SeJiWS.js";import"./v4-CQkTLCs1.js";import"./Icon-D8mvpj6W.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-CRdhf1Nz.js";import"./iframe-BRSAEr0u.js";import"../sb-preview/runtime.js";import"./Button-CBxU2lEn.js";import"./Loader-B3d5UITI.js";import"./index-Dq8tj7-6.js";import"./focusTrap-BnjFpEHS.js";import"./closeOnFocusOut-PJkN61SV.js";const n={url:g,alt:"logo Colissimo"},r=[{id:1,title:"Peser son colis est essentiel",description:"Peser son colis est essentiel pour calculer le montant de votre affranchissement. C'est simple et rapide. Découvrez les différentes options qui s'offrent à vous !",background:{url:"https://picsum.photos/id/10/1200/600",alt:"Alternative à remplir si l'image n'est pas décorative et/ou contient du texte, sinon laisser vide"}},{id:2,title:"Solution 1 : La balance de cuisine",description:"Si vous possédez une balance de cuisine et que votre colis est petit et léger, vous pouvez user de cette option.",background:{url:"https://picsum.photos/id/1015/1200/600"}},{id:3,title:"Solution 2 : Le pèse personne",description:"Vous disposez sans doute d'un pèse personne. Astuce : Pesez vous sans votre colis puis pesez-vous avec. Pour avoir le poids net de votre colis calculez la différence entre les 2.",background:{url:"https://picsum.photos/id/1024/1200/600"}},{id:4,title:"Solution 3 : Le crochet pèse bagage",description:"Si vous voyagez souvent vous êtes surement doté d'un crochet pèse bagage. Commen faire ? Fermez solidement votre colis à l'aide d'adhésif et accrochez le crochet à cet adhésif",background:{url:"https://picsum.photos/id/1020/1200/600"}},{id:5,title:"Solution 4 : L'assistant d'envoi",description:"Si vous n'êtes pas équipé pour peser votre colis, il existe l'assistant d'envoi. Cet outil vous permettra de retrouver une liste d'objets les plus fréquemment envoyés.",background:{url:"https://picsum.photos/id/1021/1200/600"}}],P={title:"Organisms/Modal/Benefit Modal",argTypes:v,args:{disableClickOutside:!1,focusTrap:!1,logo:n,modals:r,showTitle:!0,titleLevel:"h1",padding:"default",closable:!0}},e={render:d=>({components:{SolarisBenefitModal:u},setup(){const o=f(!0),p=t("Toggled modal"),c=()=>{t("Changed")(),i()},m=t("Id"),i=()=>{o.value=!o.value};return{args:d,modalModel:o,toggle:i,elementToggle:p,elementChanged:c,elementId:m}},template:`<div>
  <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
  
  <SolarisBenefitModal v-model="modalModel" v-bind="args">
  <template #description="{ step }">
    <div v-if="step === 2">
      <div>Longueur maximal du colis = 100 cm</div>
      <div>Dimension minimal : L = 22 cm + l = 11 cm + h = 1 cm</div>
        <br>
      <div>Expédition depuis un point de contact postal : 30kg</div>
    </div>
  </template>
    <template #additional="{ step }">
      <p style="margin: 0; padding: 0;" v-if="step === 0">Slot pour informations additionnelles</p>
    </template>
    <template #actions>
      <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
      >
        Annuler
      </SolarisButton>
      <SolarisButton
        @click="toggle"
        color="supernova"
      >
        Valider
      </SolarisButton>
    </template>
  </SolarisBenefitModal>
  </div>`}),args:{closable:!0,focusTrap:!1,logo:n,modals:r,showTitle:!0,titleLevel:"h1",padding:"default"}};var l,s,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBenefitModal
    },
    setup() {
      const modalModel = ref(true);
      const elementToggle = action('Toggled modal');
      const elementChanged = () => {
        action('Changed')();
        toggle();
      };
      const elementId = action('Id');
      const toggle = () => {
        modalModel.value = !modalModel.value;
      };

      // <SolarisBenefitModal v-model="modalModel" v-bind="args" @toggledModal="elementToggle" @currentId="elementId" @changed="elementChanged">

      return {
        args,
        modalModel,
        toggle,
        elementToggle,
        elementChanged,
        elementId
      };
    },
    template: \`<div>
  <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
  
  <SolarisBenefitModal v-model="modalModel" v-bind="args">
  <template #description="{ step }">
    <div v-if="step === 2">
      <div>Longueur maximal du colis = 100 cm</div>
      <div>Dimension minimal : L = 22 cm + l = 11 cm + h = 1 cm</div>
        <br>
      <div>Expédition depuis un point de contact postal : 30kg</div>
    </div>
  </template>
    <template #additional="{ step }">
      <p style="margin: 0; padding: 0;" v-if="step === 0">Slot pour informations additionnelles</p>
    </template>
    <template #actions>
      <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
      >
        Annuler
      </SolarisButton>
      <SolarisButton
        @click="toggle"
        color="supernova"
      >
        Valider
      </SolarisButton>
    </template>
  </SolarisBenefitModal>
  </div>\`
  }),
  args: {
    closable: true,
    focusTrap: false,
    logo: logo,
    modals: modals,
    showTitle: true,
    titleLevel: 'h1',
    padding: 'default'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const w=["BenefitModal"];export{e as BenefitModal,w as __namedExportsOrder,P as default};
