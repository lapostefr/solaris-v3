import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as n,t as p,a as m}from"./legend-B_5hZP9p.js";import{S as g,T as h,E as x}from"./TileNew-C6n-BcfK.js";import{r as C}from"./vue.esm-bundler-BIhSTzsT.js";import"./v4-CQkTLCs1.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-TF8cwO8s.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-CI6HLWdM.js";import"./Picture-DIMOpAs8.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";import"./Collapse-CVKvXEFZ.js";import"./Button-CGWBbttc.js";import"./Loader-zDVSlyhy.js";const I={title:"Organisms/Tile (New)",argTypes:n},e={render:i=>({components:{SolarisTileNew:g},setup(){const s=t("cardClicked"),d=t("radioChanged"),c=t("checkboxChanged"),r=C();return{args:i,cardClicked:s,radioChanged:d,checkboxChanged:c,checkboxDefault:r}},template:`<section class="demo">
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
    </section>`}),args:{gridClass:!1,legend:p,nested:!1,options:m,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",tileGap:h.s,type:x.SelectableMultiple}};var l,a,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const L=["Horizontal"];export{e as Horizontal,L as __namedExportsOrder,I as default};
