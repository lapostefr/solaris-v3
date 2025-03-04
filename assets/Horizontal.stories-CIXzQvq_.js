import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as r,t as p,a as d}from"./legend-CaUglS0X.js";import{S as m,T as c,E as n}from"./TileNew-CIN80qB4.js";import"./v4-CQkTLCs1.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-WooC2oza.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-CbFbL-jh.js";import"./Picture-DrwsyF7G.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Collapse-1esKams1.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";const B={title:"Organisms/Tile (New)",argTypes:r},e={render:s=>({components:{SolarisTileNew:m},setup(){const a=o("cardClicked");return{args:s,cardClicked:a}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter="{ index }">
          <div 
            v-if="index === 1"
            class="slot" 
            style="margin-block: 16px;">
              Slot - tileFooter
          </div>
        </template>
        <template #tileExtra="{ index }">
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>`}),args:{gridClass:!1,legend:p,nested:!1,options:d,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",tileGap:c.s,type:n.SelectableMultiple}};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTileNew
    },
    setup() {
      const cardClicked = action('cardClicked');
      return {
        args,
        cardClicked
      };
    },
    template: \`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter="{ index }">
          <div 
            v-if="index === 1"
            class="slot" 
            style="margin-block: 16px;">
              Slot - tileFooter
          </div>
        </template>
        <template #tileExtra="{ index }">
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    gridClass: false,
    legend: tileLegend,
    nested: false,
    options: tileOptions,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    tileGap: TileGap.s,
    type: ElementType.SelectableMultiple
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const D=["Horizontal"];export{e as Horizontal,D as __namedExportsOrder,B as default};
