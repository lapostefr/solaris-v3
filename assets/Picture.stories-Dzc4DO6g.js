import{S as s}from"./Picture-DrwsyF7G.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=`{
  alt?: string,
  url: string,
  mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
  device?: 320 | 640 | 992 | 1280 | 1440 | 1680
}`,l=`[
  {
    alt?: string,
    url: string,
    mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  }
]`,u="Alternative à remplir si l'image n'est pas décorative",m="image/jpg",n="https://placehold.co/200x200",p={alt:u,mimeType:m,url:n},d=[{url:"https://placehold.co/500x200",mimeType:"image/jpeg",device:1280},{url:"https://placehold.co/400x150",mimeType:"image/jpeg",device:992},{url:"https://placehold.co/375x375",mimeType:"image/jpeg",device:640}],b={title:"Atoms/Picture",argTypes:{ariaHidden:{description:"L'attribut aria-hidden ne doit-être utilisé que dans des cas spécifiques. Si l'image est purement décorative, mettre l'attribut alt des images à vide [voir pour plus d'information]( https://www.w3.org/WAI/tutorials/images/decision-tree/)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSource:{description:"Définir la source principale de l'image `<img>`.",table:{type:{summary:"object",detail:o}},required:!0},fetchPriority:{description:"Choisir une priorité élevée (true) ou basse (false) pour le chargement de l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},height:{description:"Définir la hauteur de l'image.",table:{type:{summary:"number"}},required:!0},lazyload:{description:"Activer le lazyloading pour l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},otherSources:{description:"Définir une ou plusieurs sources supplémentaires pour l'image `<source>`.",table:{type:{summary:"array",detail:l}}},width:{description:"Définir la largeur de l'image.",table:{type:{summary:"number"}},required:!0}},args:{ariaHidden:!1,defaultSource:p,fetchPriority:!1,height:200,lazyload:!0,otherSources:d,width:500}},e={render:a=>({components:{SolarisPicture:s},setup(){return{args:a}},template:`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>`})};var r,t,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const v=["Picture"];export{e as Picture,v as __namedExportsOrder,b as default};
