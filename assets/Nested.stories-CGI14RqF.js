import{c as r}from"./argsType-CXCW4JM4.js";import{S as n}from"./Tile-DKkPeQUR.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-BTt4q-w2.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";import"./Radio-D90bWRQi.js";import"./Checkbox-1Ng9DjFN.js";import"./generateId-DPOzJEtM.js";import"./v4-CQkTLCs1.js";const c=[{card:{bodyText:"Lorem Ipsum",layout:"horizontal",link:"www.laposte.fr",title:{content:"Tile - Nested A",fontSize:"18px",icon:"package-delivery",isFull:!0,isOnTop:!0,lineHeight:"24px",titleLevel:"h3",weight:"700"},triggerTag:"label"},checked:!1,disabled:!1,id:"radioTestA",name:"radioTestA",value:"radioA"}],C={title:"Organisms/Tile (New)",argTypes:r},e={render:a=>({components:{SolarisTile:n},setup(){const o=s("cardClicked");return{args:a,cardClicked:o}},template:`<section class="demo">
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
    </section>`}),args:{nested:!0,options:c,showMoreWhenSelected:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable multiple"}};var l,i,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTile
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
    options: tileOptions,
    showMoreWhenSelected: true,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    type: 'Selectable multiple'
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const R=["Nested"];export{e as Nested,R as __namedExportsOrder,C as default};
