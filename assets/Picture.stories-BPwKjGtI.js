const s=`{
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
]`,u="Alternative à remplir si l'image n'est pas décorative",o="image/jpg",m="https://via.placeholder.com/200x200",n={alt:u,mimeType:o,url:m},p=[{url:"https://via.placeholder.com/500x200",mimeType:"image/jpeg",device:1280},{url:"https://via.placeholder.com/400x150",mimeType:"image/jpeg",device:992},{url:"https://via.placeholder.com/375x375",mimeType:"image/jpeg",device:640}],d={title:"Atoms/Picture",argTypes:{ariaHidden:{description:"L'attribut aria-hidden ne doit-être utilisé que dans des cas spécifiques. Si l'image est purement décorative, mettre l'attribut alt des images à vide [voir pour plus d'information]( https://www.w3.org/WAI/tutorials/images/decision-tree/)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSource:{description:"Définir la source principale de l'image `<img>`.",table:{type:{summary:"object",detail:s}},required:!0},fetchPriority:{description:"Choisir une priorité élevée (true) ou basse (false) pour le chargement de l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},height:{description:"Définir la hauteur de l'image.",table:{type:{summary:"number"}},required:!0},lazyload:{description:"Activer le lazyloading pour l'image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},otherSources:{description:"Définir une ou plusieurs sources supplémentaires pour l'image `<source>`.",table:{type:{summary:"array",detail:l}}},width:{description:"Définir la largeur de l'image.",table:{type:{summary:"number"}},required:!0}},args:{ariaHidden:!1,defaultSource:n,fetchPriority:!1,height:200,lazyload:!0,otherSources:p,width:500}},e={render:a=>({setup(){return{args:a}},template:`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>`})};var r,i,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>\`
  })
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const c=["Picture"];export{e as Picture,c as __namedExportsOrder,d as default};
