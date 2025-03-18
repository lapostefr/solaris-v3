import{S as s}from"./Picture-DIMOpAs8.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-BIhSTzsT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u=`{
  alt?: string,
  url: string,
  mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
  device?: 320 | 640 | 992 | 1280 | 1440 | 1680
}`,o=`[
  {
    alt?: string,
    url: string,
    mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  }
]`,l="Alternative à remplir si l'image n'est pas décorative",m="image/jpg",p="https://picsum.photos/500/200",n={alt:l,mimeType:m,url:p},d=[{url:"https://picsum.photos/500/500",mimeType:"image/jpeg",device:1280},{url:"https://picsum.photos/500/300",mimeType:"image/jpeg",device:992},{url:"https://picsum.photos/500/200",mimeType:"image/jpeg",device:640}],b={title:"Atoms/Picture",argTypes:{ariaHidden:{description:"L'attribut aria-hidden ne doit-être utilisé que dans des cas spécifiques. Si l'image est purement décorative, mettre l'attribut alt des images à vide [voir pour plus d'information]( https://www.w3.org/WAI/tutorials/images/decision-tree/)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSource:{description:"Définir la source principale de l'image `<img>`.",table:{type:{summary:"object",detail:u}},required:!0},fetchPriority:{description:"Choisir une priorité élevée (true) ou basse (false) pour le chargement de l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{description:"Applique un width et height auto (false applique les valeurs des props width et height).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},height:{description:"Définir la hauteur de l'image.",table:{type:{summary:"number"}},required:!0},lazyload:{description:"Activer le lazyloading pour l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},otherSources:{description:"Définir une ou plusieurs sources supplémentaires pour l'image `<source>`.",table:{type:{summary:"array",detail:o}}},width:{description:"Définir la largeur de l'image.",table:{type:{summary:"number"}},required:!0}},args:{ariaHidden:!1,defaultSource:n,fetchPriority:!1,fullWidth:!0,height:200,lazyload:!0,otherSources:d,width:500}},e={render:a=>({components:{SolarisPicture:s},setup(){return{args:a}},template:`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>`})};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPicture
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>\`
  })
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const v=["Picture"];export{e as Picture,v as __namedExportsOrder,b as default};
