import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./BenefitModal-C384sefJ.js";import{l as m}from"./colissimo-B7reKzCB.js";import{b as g}from"./argsTypeModal-BLMhfQxO.js";import"./v4-CQkTLCs1.js";import"./Icon-LmhyBlqB.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-pMn-qRVg.js";const n={url:m,alt:"logo Colissimo"},r=[{id:1,title:"Peser son colis est essentiel",description:"Peser son colis est essentiel pour calculer le montant de votre affranchissement. C'est simple et rapide. Découvrez les différentes options qui s'offrent à vous !",background:{url:"https://picsum.photos/id/10/1200/600"}},{id:2,title:"Solution 1 : La balance de cuisine",description:"Si vous possédez une balance de cuisine et que votre colis est petit et léger, vous pouvez user de cette option.",background:{url:"https://picsum.photos/id/1015/1200/600"}},{id:3,title:"Solution 2 : Le pèse personne",description:"Vous disposez sans doute d'un pèse personne. Astuce : Pesez vous sans votre colis puis pesez-vous avec. Pour avoir le poids net de votre colis calculez la différence entre les 2.",background:{url:"https://picsum.photos/id/1024/1200/600"}},{id:4,title:"Solution 3 : Le crochet pèse bagage",description:"Si vous voyagez souvent vous êtes surement doté d'un crochet pèse bagage. Commen faire ? Fermez solidement votre colis à l'aide d'adhésif et accrochez le crochet à cet adhésif",background:{url:"https://picsum.photos/id/1020/1200/600"}},{id:5,title:"Solution 4 : L'assistant d'envoi",description:"Si vous n'êtes pas équipé pour peser votre colis, il existe l'assistant d'envoi. Cet outil vous permettra de retrouver une liste d'objets les plus fréquemment envoyés.",background:{url:"https://picsum.photos/id/1021/1200/600"}}],z={title:"Organisms/Modal/Benefit Modal",argTypes:g,args:{disableClickOutside:!1,focusTrap:!1,logo:n,modals:r,showModal:!0,showTitle:!0,titleLevel:"h1",padding:"default",closable:!0}},e={render:o=>({components:{SolarisBenefitModal:p},setup(){const d=t("Toggled modal"),c=()=>{t("Changed")(),s()},u=t("Id"),s=()=>{o.showModal=!o.showModal};return{args:o,toggle:s,elementToggle:d,elementChanged:c,elementId:u}},template:`<div>
  <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
  <SolarisBenefitModal v-model="args.showModal" v-bind="args" @toggledModal="elementToggle" @currentId="elementId" @changed="elementChanged">
  <template #description="{ step }">
    <div v-if="step === 2">
      <div>Longueur maximal du colis = 100 cm</div>
      <div>Dimension minimal : L = 22 cm + l = 11 cm + h = 1 cm</div>
        <br>
      <div>Expédition depuis un point de contact postal : 30kg</div>
    </div>
  </template>
    <template #additional>Slot pour informations additionnelles</template>
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
  </div>`}),args:{closable:!0,focusTrap:!1,logo:n,modals:r,showModal:!0,showTitle:!0,titleLevel:"h1",padding:"default"}};var i,l,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBenefitModal
    },
    setup() {
      const elementToggle = action('Toggled modal');
      const elementChanged = () => {
        action('Changed')();
        toggle();
      };
      const elementId = action('Id');
      const toggle = () => {
        args.showModal = !args.showModal;
      };
      return {
        args,
        toggle,
        elementToggle,
        elementChanged,
        elementId
      };
    },
    template: \`<div>
  <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
  <SolarisBenefitModal v-model="args.showModal" v-bind="args" @toggledModal="elementToggle" @currentId="elementId" @changed="elementChanged">
  <template #description="{ step }">
    <div v-if="step === 2">
      <div>Longueur maximal du colis = 100 cm</div>
      <div>Dimension minimal : L = 22 cm + l = 11 cm + h = 1 cm</div>
        <br>
      <div>Expédition depuis un point de contact postal : 30kg</div>
    </div>
  </template>
    <template #additional>Slot pour informations additionnelles</template>
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
    showModal: true,
    showTitle: true,
    titleLevel: 'h1',
    padding: 'default'
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const y=["BenefitModal"];export{e as BenefitModal,y as __namedExportsOrder,z as default};
