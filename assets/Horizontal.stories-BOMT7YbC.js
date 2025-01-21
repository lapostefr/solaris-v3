import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as r}from"./argsType-CXCW4JM4.js";import{S as d}from"./TileNew-jw6Irp74.js";import{L as c}from"./Card-C982uuTO.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-D68ztoNU.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Collapse-B_Mth1Fk.js";const C={title:"Organisms/Tile (New)",argTypes:r},e={render:s=>({components:{SolarisTileNew:d},setup(){const o=i("cardClicked");return{args:s,cardClicked:o}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        class="lp-grid"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter>
          <div class="slot" style="margin-block: 16px;">Slot - tileFooter</div>
        </template>
        <template #tileExtra>
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>`}),args:{nested:!1,options:[{card:{expanded:!1},checked:!1,disabled:!1,id:"radioTestA",name:"radioTestA",toggleText:"Voir plus",value:"radioA"},{card:{expanded:!1,layout:c.horizontal},checked:!0,disabled:!1,id:"radioTestB",name:"radioTestA",toggleText:"Voir plus",value:"radioB"}],setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable multiple"}};var l,t,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter>
          <div class="slot" style="margin-block: 16px;">Slot - tileFooter</div>
        </template>
        <template #tileExtra>
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    nested: false,
    options: [{
      card: {
        expanded: false
      },
      checked: false,
      disabled: false,
      id: 'radioTestA',
      name: 'radioTestA',
      toggleText: 'Voir plus',
      value: 'radioA'
    }, {
      card: {
        expanded: false,
        layout: Layout.horizontal
      },
      checked: true,
      disabled: false,
      id: 'radioTestB',
      name: 'radioTestA',
      toggleText: 'Voir plus',
      value: 'radioB'
    }],
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    type: 'Selectable multiple'
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const b=["Horizontal"];export{e as Horizontal,b as __namedExportsOrder,C as default};
