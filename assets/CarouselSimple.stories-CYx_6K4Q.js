import{c as m,d as o}from"./carouselStoryUtils-FypF_IBb.js";import{S as a}from"./Carousel-BaLE_OYn.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";const i=[{title:"titre du premier element",url:"serviceUrl",external:!0,image:{width:50,height:50,defaultSource:{alt:"Mon image 1",url:"https://picsum.photos/id/200/1000/300",mimeType:"image/jpeg"}}},{title:"titre du second element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 2",url:"https://picsum.photos/id/210/1000/300",mimeType:"image/jpeg"}}},{title:"titre du troisième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 3",url:"https://picsum.photos/id/220/1000/300",mimeType:"image/jpeg"}}},{title:"titre du quatrième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 4",url:"https://picsum.photos/id/230/1000/300",mimeType:"image/jpeg"}}},{title:"titre du cinquième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 5",url:"https://picsum.photos/id/240/1000/300",mimeType:"image/jpeg"}}},{title:"titre du sixième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 6",url:"https://picsum.photos/id/250/1000/300",mimeType:"image/jpeg"}}},{title:"titre du septième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 7",url:"https://picsum.photos/id/260/1000/300",mimeType:"image/jpeg"}}},{title:"titre du huitième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 8",url:"https://picsum.photos/id/270/1000/300",mimeType:"image/jpeg"}}}],S={title:"Organisms/Carousel/CarouselSimple",parameters:{docs:{description:{component:m("SolarisCarouselSimple")}}},argTypes:o,args:{controlColor:"supernova",items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",type:"simple",title:"Title - simple carousel",qtyItems:i.length}},e={render:s=>({components:{SolarisCarousel:a},setup(){return{args:s}},template:`
  <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\`Élément \${index + 1} sur \${args.items.length}\`">
        <SolarisCarouselSimple
          v-bind="item"
        />
      </div>
  </SolarisCarousel>
  `}),args:{controlColor:"supernova",items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",type:"simple",title:"Title - simple carousel",qtyItems:i.length}};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
  <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\\\`Élément \\\${index + 1} sur \\\${args.items.length}\\\`">
        <SolarisCarouselSimple
          v-bind="item"
        />
      </div>
  </SolarisCarousel>
  \`
  }),
  args: {
    controlColor: 'supernova',
    items: simple,
    moreLabel: 'Voir plus',
    moreLink: 'beuleuleupLink',
    type: 'simple',
    title: 'Title - simple carousel',
    // |-- Deprecated
    qtyItems: simple.length
    // Deprecated --|
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const v=["Simple"];export{e as Simple,v as __namedExportsOrder,S as default};
