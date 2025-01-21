import{c as r}from"./argsType-CXCW4JM4.js";import{S as s}from"./TileNew-jw6Irp74.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as d}from"./Card-C982uuTO.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";import"./Badge-D68ztoNU.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Collapse-B_Mth1Fk.js";const R={title:"Organisms/Tile (New)",argTypes:r},e={render:a=>({components:{SolarisTileNew:s},setup(){const o=n("cardClicked");return{args:a,cardClicked:o}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        class="lp-grid"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileExtra>

          <SolarisTileNew
            class="lp-grid"
            v-bind="{
              options: [
                {
                  card: {
                title: {
                  content: 'Tile title'
                },
                    bodyText: 'The type prop is Selectable single',
              id: 'tileSelectableSingle-1'
              },
              checked: false,
              id: 'innerRadioSingle-A',
              name: 'innerRadioSingle',
              value: 'innerRadioSingle-A'
              },
              {
              card: {
              title: {
              content: 'Tile title'
              },
              bodyText: 'The type prop is Selectable single',
              id: 'tileSelectableSingle-2',
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
    </section>`}),args:{nested:!0,options:[{card:{layout:d.horizontal},checked:!1,disabled:!1,id:"radioTestA",name:"radioTestA",value:"radioA"}],showMoreWhenSelected:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable multiple"}};var l,i,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        class="lp-grid"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileExtra>

          <SolarisTileNew
            class="lp-grid"
            v-bind="{
              options: [
                {
                  card: {
                title: {
                  content: 'Tile title'
                },
                    bodyText: 'The type prop is Selectable single',
              id: 'tileSelectableSingle-1'
              },
              checked: false,
              id: 'innerRadioSingle-A',
              name: 'innerRadioSingle',
              value: 'innerRadioSingle-A'
              },
              {
              card: {
              title: {
              content: 'Tile title'
              },
              bodyText: 'The type prop is Selectable single',
              id: 'tileSelectableSingle-2',
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
    nested: true,
    options: [{
      card: {
        layout: Layout.horizontal
      },
      checked: false,
      disabled: false,
      id: 'radioTestA',
      name: 'radioTestA',
      value: 'radioA'
    }],
    showMoreWhenSelected: true,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    type: 'Selectable multiple'
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const w=["Nested"];export{e as Nested,w as __namedExportsOrder,R as default};
