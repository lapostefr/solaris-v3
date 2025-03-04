import{c as r,t as n,b as s}from"./legend-CaUglS0X.js";import{S as d,E as c}from"./TileNew-CIN80qB4.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-WooC2oza.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-CbFbL-jh.js";import"./Picture-DrwsyF7G.js";import"./iframe-DGW6VW5G.js";import"../sb-preview/runtime.js";import"./Collapse-1esKams1.js";import"./Button-jFHmCyiG.js";import"./Loader-BRt8ee7f.js";import"./v4-CQkTLCs1.js";const E={title:"Organisms/Tile (New)",argTypes:r},e={render:o=>({components:{SolarisTileNew:d},setup(){const a=p("cardClicked");return{args:o,cardClicked:a}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileExtra>
          <SolarisTileNew
            v-bind="{
              options: [
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-A',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-A'
                  },
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-B',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-B'
                }
              ],
              setItemClass: 'lp-col--4',
              radioDefaultValue: 'radioSingle-B',
              type: 'Selectable single'
            }"
          />
        </template>
      </SolarisTileNew>
    </section>`}),args:{gridClass:!0,legend:n,nested:!0,options:s,showMoreWhenSelected:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:c.SelectableMultiple}};var l,t,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        <template #tileExtra>
          <SolarisTileNew
            v-bind="{
              options: [
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-A',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-A'
                  },
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-B',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-B'
                }
              ],
              setItemClass: 'lp-col--4',
              radioDefaultValue: 'radioSingle-B',
              type: 'Selectable single'
            }"
          />
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    gridClass: true,
    legend: tileLegend,
    nested: true,
    options: tileOptionsNested,
    showMoreWhenSelected: true,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    type: ElementType.SelectableMultiple
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const A=["Nested"];export{e as Nested,A as __namedExportsOrder,E as default};
