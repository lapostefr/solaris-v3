import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as i,C as s,a as e,b as o,L as d,T as n,S as u}from"./Card-WooC2oza.js";import{c as g,b as C}from"./badgesSource-B-Xfw4Ir.js";import{d as f}from"./imageVerticalDefaultSource-C3--T8en.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-CbFbL-jh.js";import"./Picture-DrwsyF7G.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Collapse-1esKams1.js";const P={title:"Molecules/Card",argTypes:g,args:{alignments:i.left,badges:C,bodyText:"Lorem Ipsum",cardStyle:s.elevated,contentPadding:e.small,containerTag:o.article,expanded:!1,fullClickable:!0,id:"example",imagePadding:e.none,isContainerOnly:!1,formElement:{isAllInputs:!1,isRadio:!1},label:"Label 2",layout:d.vertical,link:" https://www.laposte.fr",picture:{defaultSource:f,width:343,height:192},radius:e.small,showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery",titleLevel:"h3"},titlesOrder:n.titleOnTop}},t={render:c=>({components:{SolarisCard:u},setup(){const m=p("cardClicked");return{args:c,cardClicked:m}},template:`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-3-1 lp-col--md-4-4" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>`}),args:{alignments:i.left,bodyText:"Lorem Ipsum",cardStyle:s.elevated,contentPadding:e.small,containerTag:o.article,expanded:!1,fullClickable:!0,id:"example",imagePadding:e.none,isContainerOnly:!1,formElement:{isAllInputs:!1,isRadio:!1},label:"Label 2",layout:d.vertical,link:" https://www.laposte.fr",showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery"},titlesOrder:n.titleOnTop}};var a,l,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCard
    },
    setup() {
      const cardClicked = action('cardClicked');
      return {
        args,
        cardClicked
      };
    },
    template: \`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-3-1 lp-col--md-4-4" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>\`
  }),
  args: {
    alignments: Alignments.left,
    // badges: badgesSources,
    bodyText: 'Lorem Ipsum',
    cardStyle: CardStyle.elevated,
    contentPadding: CardSizing.small,
    containerTag: ContainerTag.article,
    expanded: false,
    fullClickable: true,
    id: 'example',
    imagePadding: CardSizing.none,
    isContainerOnly: false,
    formElement: {
      isAllInputs: false,
      isRadio: false
    },
    label: 'Label 2',
    layout: Layout.vertical,
    link: " https://www.laposte.fr",
    /* picture: {
      defaultSource,
      width: 343,
      height: 192,
      alt: 'Lorem Ipsum'
    },
    radius: CardSizing.small, */
    showImagesOnMobile: true,
    subtitle: {
      content: 'Card Subtitle',
      titleLevel: 'h4',
      textTransform: 'uppercase'
    },
    title: {
      content: 'Card Title',
      icon: 'package-delivery'
      /* innerTag: 'a',
      isFull: true,
      isOnTop: true,
      link: " https://www.laposte.fr",
      titleLevel: 'h3' */
    },
    titlesOrder: TitlesOrder.titleOnTop
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const F=["Vertical"];export{t as Vertical,F as __namedExportsOrder,P as default};
