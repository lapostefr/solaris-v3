import{d as fe}from"./imageDefaultSource-CMm1GdPE.js";import{o as xe}from"./imageOtherSources-BRif1MR3.js";import{S as a}from"./TileNew-jw6Irp74.js";import{S as y}from"./Divider-I1tDHdcW.js";import{_ as w}from"./DropdownSimple-DW46HI45.js";import{S as T}from"./Icon-LmhyBlqB.js";import{S as k}from"./RadioGroup-B3R1mj47.js";import{S as ye}from"./Radio-CJnrNu4K.js";import{S as E}from"./Checkbox-BHJD1l2a.js";import{c as we}from"./Input-CfpJPdR5.js";import{S as ge}from"./Switch-CUSkuMtt.js";import{S as Se}from"./Notification-DOA_utlQ.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Card-C982uuTO.js";import"./Badge-D68ztoNU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Collapse-B_Mth1Fk.js";import"./Dropdown-DOCK4iP_.js";import"./Flag-BF-Ybv_M.js";import"./index-pMn-qRVg.js";import"./useDropdown-B0lJwPIR.js";import"./generateId-DPOzJEtM.js";import"./Tooltip-CcQPO6Um.js";import"./Button-Cqby2nDZ.js";import"./Loader-DVyLjiyj.js";import"./types-Dd7QR7uO.js";import"./useTips-BOECcAvL.js";const I="@/components/organisms/TileNew/mocks/colissimo.svg",d="@/components/organisms/TileNew/mocks/lettre-recommandee.svg",c="@/components/organisms/TileNew/mocks/lettre-rouge.svg",N="@/components/organisms/TileNew/mocks/demenagement-def.svg",C="@/components/organisms/TileNew/mocks/demenagement-temp.svg",M="@/components/organisms/TileNew/mocks/delivery-address.svg",e={picture:{defaultSource:fe,otherSources:xe,width:80,height:80,alt:"Lorem Ipsum"},title:{content:"Tile title"}},l={bodyText:"En cas d'incident, La Poste vous indemnise 153€",title:{content:"Standard (R2)",fontSize:"16px"}},t={tileAllAvalaibleElements:{options:[{card:{...e,bodyText:'"bodyText" content',badges:[{content:"Badge",color:"info"}],expanded:!0,id:"allAvailableElements",label:"label",title:{content:"tile title",icon:"package-delivery"}},toggleText:"toggleText"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileClickable:{options:[{card:{...e,bodyText:'The "type" prop is "Clickable". Use "link" to add a link to the card',id:"tileClickable-1",link:"www.laposte.fr"}},{card:{...e,alignments:"center",layout:"vertical",bodyText:'Use "layout" with "vertical" value in card object in options table for vertical orientation',id:"tileClickable",link:"www.laposte.fr"}}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Clickable"},tileEditable:{options:[{card:{...e,bodyText:'"Editable" tiles allow the user to enter or modify information."',id:"tileEditable-1"}},{card:{...e,alignments:"center",bodyText:'"Editable" tiles allow the user to enter or modify information."',id:"tileEditable-2",layout:"vertical"}}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileSelectableSingle:{options:[{card:{...e,bodyText:'The "type" prop is "Selectable single"',id:"tileSelectableSingle-1"},id:"radioSingle-A",name:"radioSingle",value:"radioSingle-A"},{card:{...e,bodyText:'The "type" prop is "Selectable single"',alignments:"center",id:"tileSelectableSingle-2",layout:"vertical"},id:"radioSingle-B",name:"radioSingle",value:"radioSingle-B"}],radioDefaultValue:"radioSingle-B",setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable single"},tileSelectableMultiple:{options:[{card:{...e,bodyText:'The "type" prop is "Selectable multiple"',id:"tileSelectableMultiple-1"},checked:!1,id:"selectMulti-id-A",name:"selectMulti-name-A"},{card:{...e,alignments:"center",bodyText:'The "type" prop is "Selectable multiple"',id:"tileSelectableMultiple-2",layout:"vertical"},checked:!1,id:"selectMulti-id-B",name:"selectMulti-name-B"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable multiple"},tileExpandable:{options:[{card:{...e,bodyText:"Fill the toggleText prop to add the text 'Voir plus'",expanded:!0,id:"tileExpandable-1"},toggleText:"Voir plus"},{card:{...e,alignments:"center",bodyText:"Fill the toggleText prop to add the text 'Voir plus'",expanded:!0,id:"tileExpandable-2",layout:"vertical"},toggleText:"Voir plus"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileNested:{nested:!0,options:[{card:{...e,bodyText:"The Nested tile is used when it is nested within another tile",id:"tileNested-1"},id:"radioNested-A",name:"radioNested",value:"radioNested-A"},{card:{...e,alignments:"center",bodyText:'The Nested tile is used when it is nested within another tile. Set "nested" prop to true',id:"tileNested-2",layout:"vertical"},id:"radioNested-B",name:"radioNested",value:"radioNested-B"}],radioDefaultValue:"radioNested-A",setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Selectable single"},tileNestedComponentSingle:{options:[{card:{id:"nested-component-single-1",picture:{...e.picture},title:{content:"Lettre recommandée",fontSize:"18px"}},id:"radio-nested-component-single-1",name:"nested-component-single",value:"radio-nested-component-single-1"},{card:{id:"nested-component-single-2",picture:{...e.picture},title:{content:"Lettre verte",fontSize:"18px"}},id:"radio-nested-component-single-2",name:"nested-component-single",value:"radio-nested-component-single-2"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-10-1 lp-col--lg-10-1",showMoreWhenSelected:!0,type:"Selectable single"},tileNestedComponentSingleChildrenA:{nested:!0,options:[{card:{...l,id:"nested-component-single-child-1"},id:"radio-nested-component-single-child-1",name:"nested-component-single-child-A",value:"radio-nested-component-single-child-1"},{card:{...l,id:"nested-component-single-child-2"},id:"radio-nested-component-single-child-2",name:"nested-component-single-child-A",value:"radio-nested-component-single-child-2"}],setItemClass:"lp-col--4 lp-col--sm-5 lp-col--md-10 lp-col--lg-10",type:"Selectable single"},tileNestedComponentSingleChildrenB:{nested:!0,options:[{card:{...l,id:"nested-component-single-child-3"},id:"radio-nested-component-single-child-3",name:"nested-component-single-child-B",value:"radio-nested-component-single-child-3"},{card:{...l,id:"nested-component-single-child-4"},id:"radio-nested-component-single-child-4",name:"nested-component-single-child-B",value:"radio-nested-component-single-child-4"}],setItemClass:"lp-col--4 lp-col--sm-5 lp-col--md-10 lp-col--lg-10",type:"Selectable single"},tileNestedComponentMultiple:{options:[{card:{id:"nested-component-multiple-1",picture:{...e.picture},title:{content:"Lettre recommandée",fontSize:"18px"}},checked:!1,disabled:!1,id:"checkbox-nested-component-multiple-1",name:"nested-component-multiple-A",value:"checkbox-nested-component-multiple-1"},{card:{id:"nested-component-multiple-2",picture:{...e.picture},title:{content:"Lettre verte",fontSize:"18px"}},checked:!1,disabled:!1,id:"checkbox-nested-component-multiple-2",name:"nested-component-multiple-B",value:"checkbox-nested-component-multiple-2"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-10-1 lp-col--lg-10-1",type:"Selectable multiple",showMoreWhenSelected:!0},tileNestedComponentMultipleChildrenA:{nested:!0,options:[{card:{...l,id:"nested-component-multiple-child-1"},id:"radio-nested-component-multiple-child-1",name:"nested-component-multiple-child-A",value:"radio-nested-component-multiple-child-1"},{card:{...l,id:"nested-component-multiple-child-2"},id:"radio-nested-component-multiple-child-2",name:"nested-component-multiple-child-A",value:"radio-nested-component-multiple-child-2"}],setItemClass:"lp-col--4 lp-col--sm-5 lp-col--md-10 lp-col--lg-10",type:"Selectable single"},tileNestedComponentMultipleChildrenB:{nested:!0,options:[{card:{...l,id:"nested-component-multiple-child-3"},id:"radio-nested-component-multiple-child-3",name:"nested-component-multiple-child-B",value:"radio-nested-component-multiple-child-3"},{card:{...l,id:"nested-component-multiple-child-4"},id:"radio-nested-component-multiple-child-4",name:"nested-component-multiple-child-B",value:"radio-nested-component-multiple-child-4"}],setItemClass:"lp-col--4 lp-col--sm-5 lp-col--md-10 lp-col--lg-10",type:"Selectable single"},tileExpandableWithMoreInfo:{options:[{card:{expanded:!0,id:"tile-colissimo",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:I},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:I},width:20,height:20,alt:"Lorem Ipsum"}},toggleText:"Exp"}]},tileSelectableSingleWithMoreInfo:{options:[{card:{id:"registeredLetter-1",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:d},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:d},width:20,height:20,alt:"Lorem Ipsum"},link:"www.laposte.fr",title:{content:"Lettre recommandée",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"registeredLetter-1",name:"letters-1",value:"registeredLetter-1"},{card:{id:"redLetter",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:c},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:c},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"e-lettre rouge",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"redLetter-1",name:"letters-1",value:"redLetter-1"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-10-1 lp-col--lg-10-1",type:"Selectable single",showMoreWhenSelected:!0},tileSelectableSingleWithMoreInfoOpen:{options:[{card:{expanded:!0,id:"registeredLetter-2",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:d},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:d},width:20,height:20,alt:"Lorem Ipsum"},link:"www.laposte.fr",title:{content:"Lettre recommandée",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"registeredLetter-2",name:"letters-2",value:"registeredLetter-2"},{card:{expanded:!0,id:"redLetter-2",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:c},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:c},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"e-lettre rouge",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"redLetter-2",name:"letters-2",value:"redLetter-2"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-10-1 lp-col--lg-10-1",type:"Selectable single",showMoreWhenSelected:!0},tileSelectableMultipleWithMoreInfo:{options:[{card:{bodyText:"Vous quittez définitivement votre adresse actuelle.",id:"moving-def",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:N},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:N},width:20,height:20,alt:"Lorem Ipsum"},link:"www.laposte.fr",title:{content:"Je déménage",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"moving-def",name:"moving-final",value:"moving-def"},{card:{bodyText:"Vous quittez temporairement votre adresse actuelle.",id:"moving-temp",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:C},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:C},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Je m'absente",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"moving-temp",name:"moving-temporary",value:"moving-temp"},{card:{bodyText:"Je m'absente régulièrement pour des période de courte durée.",id:"mobility-subscription",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:M},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:M},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Abonnement Mobilité",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"mobility-subscription",name:"moving-subscription",value:"mobility-subscription"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-10-1 lp-col--lg-10-1",type:"Selectable multiple",showMoreWhenSelected:!0}},et={title:"Organisms/Tile (New)/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"The **Tile component** allows you to detail and highlight single or multiple choices from a list. **The tile uses the SolarisCard component**, allowing you to use all its props according to your needs."}}}},o=(s,i,_e="lp-grid")=>be=>({components:{SolarisTileNew:a,SolarisDivider:y,SolarisIcon:T,SolarisDropdownSimple:w,SolarisRadioGroup:k,SolarisCheckbox:E,SolarisInput:we,SolarisRadio:ye},props:Object.keys(be),data:()=>({data:s}),template:`
    <SolarisTileNew v-bind="data" class="${_e}">
        ${i}
    </SolarisTileNew>
  `}),p=o(t.tileAllAvalaibleElements,`<template #tileBody>
    <div class="slot">Slot - tileBody</div>
   </template>
   <template #tileFooter>
    <div class="slot">Slot - tileFooter</div>
   </template>
   <template #tileMedias>
    <div class="slot">Slot - tileMedias</div>
   </template>
   <template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
      </div>
   </template>
  `),m=o(t.tileClickable,`<template #tileFooter>
    <div class="tile-clickable__icon">
      <SolarisIcon name="arrow-right" />
    </div>
   </template>`),u=o(t.tileEditable,`<template #tileFooter>
      <div class="tile-editable__actions">
        <SolarisButton
          class="tile-editable__action"
          icon="action-pen"
          type="ghost"
          color="darkgrey"
        />

        <SolarisButton
          class="tile-editable__action"
          icon="editing-trash"
          type="ghost"
          color="darkgrey"
        />
      </div>
  </template>`),v=o(t.tileSelectableSingle,`<template #tileFooter>
      <div class="tile__price">Price</div>
   </template>`),h=o(t.tileSelectableMultiple,`<template #tileFooter>
      <div class="tile__price">Price</div>
   </template>`),g=o(t.tileExpandable,`<template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>To make the tile expandable, fill in the tileExtra slot and set the toggleText prop.</p>
      </div>
  </template>`),S=o(t.tileNested,`<template #tileFooter>
      <div class="tile__price">Price</div>
   </template>`),_=(s,{argTypes:i})=>({components:{SolarisTileNew:a},props:Object.keys(i),data:()=>({data1:t.tileNestedComponentSingle,data2:t.tileNestedComponentSingleChildrenA,data3:t.tileNestedComponentSingleChildrenB}),template:`<SolarisTileNew v-bind="data1" class="lp-grid">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'radio-nested-component-single-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew class="lp-grid" v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'radio-nested-component-single-2'">
      <SolarisTileNew class="lp-grid" v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>`}),b=(s,{argTypes:i})=>({components:{SolarisTileNew:a},props:Object.keys(i),data:()=>({data1:t.tileNestedComponentMultiple,data2:t.tileNestedComponentMultipleChildrenA,data3:t.tileNestedComponentMultipleChildrenB}),template:`<SolarisTileNew v-bind="data1" class="lp-grid">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'checkbox-nested-component-multiple-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew class="lp-grid" v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'checkbox-nested-component-multiple-2'">
      <SolarisTileNew class="lp-grid" v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>`}),f=o(t.tileExpandableWithMoreInfo,`<template #tileBody>
    <div class="tile-colissimo__content">
      <h3 class="tile-colissimo__title">Colis</h3>
      <span class="tile-colissimo__description">Standard</span>
        <div class="tile-colissimo__infos-prices">
          <span class="tile-colissimo__price">4,90€</span>
          <SolarisButton
            class="tile-colissimo__infos"
            icon="settings-menu-action-vertical"
            type="secondary"
            color="darkgrey"
          />
        </div>
    </div>
   </template>

   <template #tileExtra>
      <section class="tile-colissimo__features">
        <h2 class="tile-colissimo__features-title tile-colissimo__title-common">Caratéristiques</h2>
        <SolarisInput
          class="tile-colissimo__weight-input"
          id="idInput"
          name="nameInput"
          label="Poids"
          :unit='{"label":"kg","description":"kilogramme"}'
          size="small"
          value="0,25"
        />
        <SolarisDropdownSimple
          class="tile-colissimo__size-dropdown"
          id="idDropdown"
          name="nameDropdown"
          label="Dimensions"
          :options='[{"value":"entree-1","label":"Entrée 1"},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
          value="entree-1"
          size="small"
        />
      </section>

      <section class="tile-colissimo__shipping-infos">
        <div class="tile-colissimo__recipient">
            <h2 class="tile-colissimo__recipient-title tile-colissimo__title-common">Destinataires</h2>
            <div class="tile-colissimo__recipient-address">
              <SolarisButton
                type="secondary"
                color="darkgrey"
              >
                Renseigner une adresse
              </SolarisButton>
              <span>ou</span>
              <a href="www.laposte.fr" class="tile-colissimo__link">Accédez à votre carnet de contacts</a>
            </div>
        </div>

        <div class="tile-colissimo__delivery">
          <h2 class="tile-colissimo__delivery-title tile-colissimo__title-common">Livraison</h2>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-1"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            En boîte aux lettres
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation en cas de perte ou d'avarie de 23€/kg</p>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-2"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            Avec signature <span class="tile-colissimo__complement"> (à partir de 2,90 €)</span>
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation jusqu’à 1000 € : R1, R2 ou supplément</p>
        </div>
      </section>

      <section class="tile-colissimo__customs">
        <h2 class="tile-colissimo__customs-title tile-colissimo__title-common">Déclaration en douane</h2>
        <p class="tile-colissimo__customs-description">
          Vers l’Outre-Mer, l’international et l’Europe (hors pays membres de l’Union Européenne), vos envois doivent faire l'objet d’une déclaration en douane, avec obligation de saisie numérique. Vous devrez joindre à votre envoi les justificatifs de déclaration et une facture proforma ou 2 factures commerciales (s’il s’agit d’une vente).
        </p>
        <SolarisButton
          type="secondary"
          color="darkgrey"
        >
          Ajouter des objets
        </SolarisButton>
      </section>

      <section class="tile-colissimo__footer-expandable">
        <SolarisButton
          class="tile-colissimo__delete"
          icon="editing-trash"
          type="secondary"
          color="darkgrey"
        />

        <SolarisButton
          icon="editing-duplicate"
          type="secondary"
          color="darkgrey"
        >
          Dupliquer
        </SolarisButton>
      </section>
  </template>`,""),n=(s,{argTypes:i})=>({components:{SolarisTileNew:a,SolarisDivider:y,SolarisIcon:T,SolarisDropdownSimple:w,SolarisCheckbox:E,SolarisRadioGroup:k,SolarisSwitch:ge,SolarisNotification:Se},props:Object.keys(i),data:()=>({data:t.tileSelectableSingleWithMoreInfo}),template:`<SolarisTileNew v-bind="data" class="lp-grid">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template #tileFooter="{ index }">
    <div class="tile-letters__price">
      <span>À partir de
        <span v-if="data.options[index].id === 'registeredLetter-1'">1,49 €</span>
        <span v-else-if="data.options[index].id === 'redLetter-1'">6,60 €</span>
      </span>
    </div>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-single"
            name="name-A-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id1-print-recto-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id2-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadioGroup
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          :options='{
            "legend":"Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25.",
            "optionsList":[
              {"id":"option1-id-single","name":"name-single","value":"Dépôt aujourd’hui","val":"option1-id"},
              {"id":"option2-id-single","name":"name-single","value":"Choisir la date de dépôt","val":"option2-id"}
              ]
            }'
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-single"
            name="name-B-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id3-print-recto-single-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id4-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>`}),x=(s,{argTypes:i})=>({components:{SolarisTileNew:a,SolarisDivider:y,SolarisIcon:T,SolarisDropdownSimple:w,SolarisCheckbox:E,SolarisRadioGroup:k,SolarisSwitch:ge,SolarisNotification:Se},props:Object.keys(i),data:()=>({data:t.tileSelectableSingleWithMoreInfoOpen}),template:`<SolarisTileNew v-bind="data" class="lp-grid">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template #tileFooter="{ index }">
    <div class="tile-letters__price">
      <span>À partir de
        <span v-if="data.options[index].id === 'registeredLetter-2'">1,49 €</span>
        <span v-else-if="data.options[index].id === 'redLetter-2'">6,60 €</span>
      </span>
    </div>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-open"
            name="name-A-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id1-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id2-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadioGroup
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          :options='{
            "legend":"Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25.",
            "optionsList":[
              {"id":"option1-id-open","name":"name-open","value":"Dépôt aujourd’hui","val":"option1-id"},
              {"id":"option2-id-open","name":"name-open","value":"Choisir la date de dépôt","val":"option2-id"}
              ]
            }'
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-open"
            name="name-B-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id3-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id4-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>`}),r=(s,{argTypes:i})=>({components:{SolarisTileNew:a,SolarisDivider:y,SolarisIcon:T,SolarisDropdownSimple:w,SolarisRadioGroup:k},props:Object.keys(i),data:()=>({data:t.tileSelectableMultipleWithMoreInfo}),template:`<SolarisTileNew v-bind="data" class="lp-grid">
  <template v-slot:tileExtra="{ index }">
    <!-- DEMENAGEMENT DEFINITIF -->
    <template v-if="data.options[index].id === 'moving-def'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">
            <SolarisDropdownSimple
                class="tile-reex__dropdown"
                id="idDropdown-moving-def"
                name="nameDropdown"
                label="Veuillez sélectionner la destination de réexpédition de vos couriers et colis."
                labelPosition="outside"
                :options='[{"value":"entree-1","label":"France Métropolitaine et Outre-mer", "checked": true},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
                value="entree-1"
                size="small"
              />

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
                aria-hidden="true"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadioGroup        
            colorStyle="emphasis"
            :options='{
              "legend":"Veuillez sélectionner la durée de réexpédition que vous souhaitez.",
              "optionsList":[
                {"id":"option1-id-multi-A","name":"name-multi-A","value":"6 mois","val":"option3-id"},
                {"id":"option2-id-multi-A","name":"name-multi-A","value":"12 mois","val":"option4-id"}
                ]
              }'
          />
      </section>
    </template>

    <!-- ABONNEMENT MOBILITÉE -->
    <template v-else-if="data.options[index].id === 'mobility-subscription'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">
            <SolarisDropdownSimple
                class="tile-reex__dropdown"
                id="idDropdown-mobility"
                name="nameDropdown"
                label="Veuillez sélectionner la destination de réexpédition de vos couriers et colis."
                labelPosition="outside"
                :options='[{"value":"entree-1","label":"France Métropolitaine et Outre-mer", "checked": true},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
                value="entree-1"
                size="small"
              />

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadioGroup        
            colorStyle="emphasis"
            :options='{
              "legend":"Veuillez sélectionner la durée de réexpédition que vous souhaitez.",
              "optionsList":[
                {"id":"option4-id-multi-B","name":"name-multi-B","value":"6 mois","val":"option4-id"},
                {"id":"option5-id-multi-B","name":"name-multi-B","value":"12 mois","val":"option5-id"}
                ]
              }'
          />
      </section>
    </template>
  </template>
</SolarisTileNew>`});n.parameters={docs:{description:{story:"Cards datas are inserted via the prop <em>options</em> (title, picture and radio infos).<br />Use the prop <em>showMoreWhenSelected </em>to display the content of the Tile when selected, and the <em>type</em> prop with <em>Selectable single</em> for the selection mode.<br />Each slot (tileBody for the list below the title; tileFooter for price; tileExtra for tile contents), receives the index as a prop, and is used to access information specific to the current option. Depending on the ID of the current option, the rendered content can be adapted to display different contents."}}};r.parameters={docs:{description:{story:"Cards datas are inserted via the prop <em>options</em> (title, picture, bodyText and checkbox infos).<br />Use the prop <em>showMoreWhenSelected </em>to display the content of the Tile when selected, and the <em>type</em> prop with <em>Selectable multiple</em> for the selection mode.<br />TileExtra slot for tile contents, receives the index as a prop, and is used to access information specific to the current option. Depending on the ID of the current option, the rendered content can be adapted to display different contents."}}};var D,L,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`generateTile(data.tileAllAvalaibleElements, \`<template #tileBody>
    <div class="slot">Slot - tileBody</div>
   </template>
   <template #tileFooter>
    <div class="slot">Slot - tileFooter</div>
   </template>
   <template #tileMedias>
    <div class="slot">Slot - tileMedias</div>
   </template>
   <template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
      </div>
   </template>
  \`)`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var z,j,O;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`generateTile(data.tileClickable, \`<template #tileFooter>
    <div class="tile-clickable__icon">
      <SolarisIcon name="arrow-right" />
    </div>
   </template>\`)`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var A,R,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`generateTile(data.tileEditable, \`<template #tileFooter>
      <div class="tile-editable__actions">
        <SolarisButton
          class="tile-editable__action"
          icon="action-pen"
          type="ghost"
          color="darkgrey"
        />

        <SolarisButton
          class="tile-editable__action"
          icon="editing-trash"
          type="ghost"
          color="darkgrey"
        />
      </div>
  </template>\`)`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,P,V;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:'generateTile(data.tileSelectableSingle, `<template #tileFooter>\n      <div class="tile__price">Price</div>\n   </template>`)',...(V=(P=v.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,G,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:'generateTile(data.tileSelectableMultiple, `<template #tileFooter>\n      <div class="tile__price">Price</div>\n   </template>`)',...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var U,J,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`generateTile(data.tileExpandable, \`<template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>To make the tile expandable, fill in the tileExtra slot and set the toggleText prop.</p>
      </div>
  </template>\`)`,...($=(J=g.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:'generateTile(data.tileNested, `<template #tileFooter>\n      <div class="tile__price">Price</div>\n   </template>`)',...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew
  },
  props: Object.keys(argTypes),
  data: () => ({
    data1: data.tileNestedComponentSingle,
    data2: data.tileNestedComponentSingleChildrenA,
    data3: data.tileNestedComponentSingleChildrenB
  }),
  template: \`<SolarisTileNew v-bind="data1" class="lp-grid">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'radio-nested-component-single-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew class="lp-grid" v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'radio-nested-component-single-2'">
      <SolarisTileNew class="lp-grid" v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,le;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew
  },
  props: Object.keys(argTypes),
  data: () => ({
    data1: data.tileNestedComponentMultiple,
    data2: data.tileNestedComponentMultipleChildrenA,
    data3: data.tileNestedComponentMultipleChildrenB
  }),
  template: \`<SolarisTileNew v-bind="data1" class="lp-grid">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'checkbox-nested-component-multiple-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew class="lp-grid" v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'checkbox-nested-component-multiple-2'">
      <SolarisTileNew class="lp-grid" v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,se,ae;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`generateTile(data.tileExpandableWithMoreInfo, \`<template #tileBody>
    <div class="tile-colissimo__content">
      <h3 class="tile-colissimo__title">Colis</h3>
      <span class="tile-colissimo__description">Standard</span>
        <div class="tile-colissimo__infos-prices">
          <span class="tile-colissimo__price">4,90€</span>
          <SolarisButton
            class="tile-colissimo__infos"
            icon="settings-menu-action-vertical"
            type="secondary"
            color="darkgrey"
          />
        </div>
    </div>
   </template>

   <template #tileExtra>
      <section class="tile-colissimo__features">
        <h2 class="tile-colissimo__features-title tile-colissimo__title-common">Caratéristiques</h2>
        <SolarisInput
          class="tile-colissimo__weight-input"
          id="idInput"
          name="nameInput"
          label="Poids"
          :unit='{"label":"kg","description":"kilogramme"}'
          size="small"
          value="0,25"
        />
        <SolarisDropdownSimple
          class="tile-colissimo__size-dropdown"
          id="idDropdown"
          name="nameDropdown"
          label="Dimensions"
          :options='[{"value":"entree-1","label":"Entrée 1"},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
          value="entree-1"
          size="small"
        />
      </section>

      <section class="tile-colissimo__shipping-infos">
        <div class="tile-colissimo__recipient">
            <h2 class="tile-colissimo__recipient-title tile-colissimo__title-common">Destinataires</h2>
            <div class="tile-colissimo__recipient-address">
              <SolarisButton
                type="secondary"
                color="darkgrey"
              >
                Renseigner une adresse
              </SolarisButton>
              <span>ou</span>
              <a href="www.laposte.fr" class="tile-colissimo__link">Accédez à votre carnet de contacts</a>
            </div>
        </div>

        <div class="tile-colissimo__delivery">
          <h2 class="tile-colissimo__delivery-title tile-colissimo__title-common">Livraison</h2>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-1"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            En boîte aux lettres
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation en cas de perte ou d'avarie de 23€/kg</p>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-2"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            Avec signature <span class="tile-colissimo__complement"> (à partir de 2,90 €)</span>
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation jusqu’à 1000 € : R1, R2 ou supplément</p>
        </div>
      </section>

      <section class="tile-colissimo__customs">
        <h2 class="tile-colissimo__customs-title tile-colissimo__title-common">Déclaration en douane</h2>
        <p class="tile-colissimo__customs-description">
          Vers l’Outre-Mer, l’international et l’Europe (hors pays membres de l’Union Européenne), vos envois doivent faire l'objet d’une déclaration en douane, avec obligation de saisie numérique. Vous devrez joindre à votre envoi les justificatifs de déclaration et une facture proforma ou 2 factures commerciales (s’il s’agit d’une vente).
        </p>
        <SolarisButton
          type="secondary"
          color="darkgrey"
        >
          Ajouter des objets
        </SolarisButton>
      </section>

      <section class="tile-colissimo__footer-expandable">
        <SolarisButton
          class="tile-colissimo__delete"
          icon="editing-trash"
          type="secondary"
          color="darkgrey"
        />

        <SolarisButton
          icon="editing-duplicate"
          type="secondary"
          color="darkgrey"
        >
          Dupliquer
        </SolarisButton>
      </section>
  </template>\`, '')`,...(ae=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,re,de;n.parameters={...n.parameters,docs:{...(ne=n.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisDropdownSimple,
    SolarisCheckbox,
    SolarisRadioGroup,
    SolarisSwitch,
    SolarisNotification
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableSingleWithMoreInfo
  }),
  template: \`<SolarisTileNew v-bind="data" class="lp-grid">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template #tileFooter="{ index }">
    <div class="tile-letters__price">
      <span>À partir de
        <span v-if="data.options[index].id === 'registeredLetter-1'">1,49 €</span>
        <span v-else-if="data.options[index].id === 'redLetter-1'">6,60 €</span>
      </span>
    </div>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-single"
            name="name-A-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id1-print-recto-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id2-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadioGroup
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          :options='{
            "legend":"Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25.",
            "optionsList":[
              {"id":"option1-id-single","name":"name-single","value":"Dépôt aujourd’hui","val":"option1-id"},
              {"id":"option2-id-single","name":"name-single","value":"Choisir la date de dépôt","val":"option2-id"}
              ]
            }'
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-single"
            name="name-B-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id3-print-recto-single-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id4-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(de=(re=n.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,pe,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisDropdownSimple,
    SolarisCheckbox,
    SolarisRadioGroup,
    SolarisSwitch,
    SolarisNotification
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableSingleWithMoreInfoOpen
  }),
  template: \`<SolarisTileNew v-bind="data" class="lp-grid">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template #tileFooter="{ index }">
    <div class="tile-letters__price">
      <span>À partir de
        <span v-if="data.options[index].id === 'registeredLetter-2'">1,49 €</span>
        <span v-else-if="data.options[index].id === 'redLetter-2'">6,60 €</span>
      </span>
    </div>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-open"
            name="name-A-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id1-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id2-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadioGroup
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          :options='{
            "legend":"Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25.",
            "optionsList":[
              {"id":"option1-id-open","name":"name-open","value":"Dépôt aujourd’hui","val":"option1-id"},
              {"id":"option2-id-open","name":"name-open","value":"Choisir la date de dépôt","val":"option2-id"}
              ]
            }'
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-open"
            name="name-B-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            icon="action-check-switch"
            id="id3-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            icon="action-check-switch"
            id="id4-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(me=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ve,he;r.parameters={...r.parameters,docs:{...(ue=r.parameters)==null?void 0:ue.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisDropdownSimple,
    SolarisRadioGroup
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableMultipleWithMoreInfo
  }),
  template: \`<SolarisTileNew v-bind="data" class="lp-grid">
  <template v-slot:tileExtra="{ index }">
    <!-- DEMENAGEMENT DEFINITIF -->
    <template v-if="data.options[index].id === 'moving-def'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">
            <SolarisDropdownSimple
                class="tile-reex__dropdown"
                id="idDropdown-moving-def"
                name="nameDropdown"
                label="Veuillez sélectionner la destination de réexpédition de vos couriers et colis."
                labelPosition="outside"
                :options='[{"value":"entree-1","label":"France Métropolitaine et Outre-mer", "checked": true},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
                value="entree-1"
                size="small"
              />

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
                aria-hidden="true"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadioGroup        
            colorStyle="emphasis"
            :options='{
              "legend":"Veuillez sélectionner la durée de réexpédition que vous souhaitez.",
              "optionsList":[
                {"id":"option1-id-multi-A","name":"name-multi-A","value":"6 mois","val":"option3-id"},
                {"id":"option2-id-multi-A","name":"name-multi-A","value":"12 mois","val":"option4-id"}
                ]
              }'
          />
      </section>
    </template>

    <!-- ABONNEMENT MOBILITÉE -->
    <template v-else-if="data.options[index].id === 'mobility-subscription'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">
            <SolarisDropdownSimple
                class="tile-reex__dropdown"
                id="idDropdown-mobility"
                name="nameDropdown"
                label="Veuillez sélectionner la destination de réexpédition de vos couriers et colis."
                labelPosition="outside"
                :options='[{"value":"entree-1","label":"France Métropolitaine et Outre-mer", "checked": true},{"value":"entree-2","label":"Entrée 2"},{"value":"entree-3","label":"Entrée 3"}]'
                value="entree-1"
                size="small"
              />

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadioGroup        
            colorStyle="emphasis"
            :options='{
              "legend":"Veuillez sélectionner la durée de réexpédition que vous souhaitez.",
              "optionsList":[
                {"id":"option4-id-multi-B","name":"name-multi-B","value":"6 mois","val":"option4-id"},
                {"id":"option5-id-multi-B","name":"name-multi-B","value":"12 mois","val":"option5-id"}
                ]
              }'
          />
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(he=(ve=r.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const tt=["AllAvailableElements","Clickable","Editable","SelectableSingle","SelectableMultiple","Expandable","Nested","NestedComponentSingle","NestedComponentMultiple","ExpandableWithMoreInfo","SelectableSingleWithMoreInfo","SelectableSingleWithMoreInfoOpen","SelectableMultipleWithMoreInfo"];export{p as AllAvailableElements,m as Clickable,u as Editable,g as Expandable,f as ExpandableWithMoreInfo,S as Nested,b as NestedComponentMultiple,_ as NestedComponentSingle,h as SelectableMultiple,r as SelectableMultipleWithMoreInfo,v as SelectableSingle,n as SelectableSingleWithMoreInfo,x as SelectableSingleWithMoreInfoOpen,tt as __namedExportsOrder,et as default};
