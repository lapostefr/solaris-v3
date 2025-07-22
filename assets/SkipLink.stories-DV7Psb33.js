import{S as a}from"./SkipLink-BasLldmq.js";import{S as o}from"./Callout-Sfba5x13.js";import"./vue.esm-bundler-BQVOD3cV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-qisKMu5t.js";import"./Icon-CNTEbVSX.js";import"./Loader-DlskW7bR.js";import"./Collapse-CARPdCeu.js";import"./Picture-iFfEkxpL.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./generateId-CVaf2GGW.js";const s=`[
  {
    label: string,
    url: string
  }
]`,l=[{label:"Accéder au contenu",url:"#"},{label:"Explorer le menu",url:"#"},{label:"Effectuer une recherche",url:"#"},{label:"Atteindre le pied de page",url:"#"}],v={title:"Atoms/Skip Link",component:a,parameters:{docs:{description:{component:"The **SkipLink Component** is an essential accessibility component, allowing keyboard users and screen reader users to jump directly to the main content of the page, thus avoiding navigation through repetitive links or menus."}}},argTypes:{ariaLabel:{description:"Accessible label for the SkipLink navigation.",table:{type:{summary:"string"}}},items:{description:"List of avoidance links. The url attribut must be an anchor pointing to the id of an element present on the page (main, menu or search field for example).",table:{type:{summary:"array",detail:s}}}},args:{items:l,ariaLabel:""}},e={render:r=>({components:{SolarisSkipLink:a,SolarisCallout:o},setup(){return{args:r}},template:`<div>
    <SolarisSkipLink v-bind="args" />
        <SolarisCallout 
          style="position: static;max-width: 450px; margin-top: 100px;"
          componentStyle="brand-default"
          description="Utiliser la navigation clavier pour afficher le composant Tab ou Maj+Tab."
          icon="action-information"
          :showBorderLeft="true"
          title="Affichage du Skip Link"
        />
    </div>`})};var i,t,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSkipLink,
      SolarisCallout
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div>
    <SolarisSkipLink v-bind="args" />
        <SolarisCallout 
          style="position: static;max-width: 450px; margin-top: 100px;"
          componentStyle="brand-default"
          description="Utiliser la navigation clavier pour afficher le composant Tab ou Maj+Tab."
          icon="action-information"
          :showBorderLeft="true"
          title="Affichage du Skip Link"
        />
    </div>\`
  })
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const y=["SkipLink"];export{e as SkipLink,y as __namedExportsOrder,v as default};
