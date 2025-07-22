import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as n,t as p,a as m}from"./legend-ChGlggPZ.js";import{S as g,T as h,E as x}from"./TileNew-BwYbJZgG.js";import{r as C}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-DI3Qv4Vu.js";import"./Icon-CNTEbVSX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-CNyb-hIR.js";import"./types-BTVVhIqi.js";import"./Picture-iFfEkxpL.js";import"./iframe-1HDqSOk3.js";import"../sb-preview/runtime.js";import"./Collapse-CARPdCeu.js";import"./Button-qisKMu5t.js";import"./Loader-DlskW7bR.js";const L={title:"Organisms/Tile (New)",argTypes:n},e={render:i=>({components:{SolarisTileNew:g},setup(){const s=t("cardClicked"),r=t("radioChanged"),c=t("checkboxChanged"),d=C();return{args:i,cardClicked:s,radioChanged:r,checkboxChanged:c,checkboxDefault:d}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        v-model:checkbox="checkboxDefault"
        @cardClicked="cardClicked"
        @radioChanged="radioChanged"
        @checkboxChanged="checkboxChanged">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBody</div>
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
    </section>`}),args:{gridClass:!1,legend:p,nested:!1,options:m,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",showSelectionButton:!0,tileGap:h.s,type:x.SelectableMultiple}};var l,o,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTileNew
    },
    setup() {
      const cardClicked = action('cardClicked');
      const radioChanged = action('radioChanged');
      const checkboxChanged = action('checkboxChanged');
      const checkboxDefault = ref();
      return {
        args,
        cardClicked,
        radioChanged,
        checkboxChanged,
        checkboxDefault
      };
    },
    template: \`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        v-model:checkbox="checkboxDefault"
        @cardClicked="cardClicked"
        @radioChanged="radioChanged"
        @checkboxChanged="checkboxChanged">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBody</div>
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
    showSelectionButton: true,
    tileGap: TileGap.s,
    type: ElementType.SelectableMultiple
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const M=["Horizontal"];export{e as Horizontal,M as __namedExportsOrder,L as default};
