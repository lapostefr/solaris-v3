import{c as d}from"./argsType-CXCW4JM4.js";import{S as c}from"./TileNew-jw6Irp74.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as t}from"./Card-C982uuTO.js";import"./vue.esm-bundler-BHwbD8xO.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";import"./Badge-D68ztoNU.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./Collapse-B_Mth1Fk.js";const o=[{card:{expanded:!1,layout:t.vertical,showImagesOnMobile:!0},checked:!1,disabled:!1,id:"radioTestA",name:"radioTestA",toggleText:"Voir plus",value:"radioA"},{card:{expanded:!1,layout:t.vertical,showImagesOnMobile:!0},checked:!0,disabled:!1,id:"radioTestB",name:"radioTestA",toggleText:"Voir plus",value:"radioB"}],h={title:"Organisms/Tile (New)",argTypes:d,args:{nested:!1,options:o,setItemClass:"lp-col--4 lp-col--sm-2-2 lp-col--md-4-4",type:"Selectable multiple"}},e={render:i=>({components:{SolarisTileNew:c},setup(){const r=p("cardClicked");return{args:i,cardClicked:r}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        class="lp-grid"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileBody>
          <div class="slot">Slot - tileBody</div>
        </template>
        <template #tileFooter>
          <div style="margin-top: auto;margin-bottom: auto;" class="slot">Slot - tileFooter</div>
        </template>
        <template #tileExtra>
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>`}),args:{nested:!1,options:o,setItemClass:"lp-col--4 lp-col--sm-2-2 lp-col--md-4-4",type:"Selectable multiple"}};var l,s,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          <div class="slot">Slot - tileBody</div>
        </template>
        <template #tileFooter>
          <div style="margin-top: auto;margin-bottom: auto;" class="slot">Slot - tileFooter</div>
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
    options,
    setItemClass: 'lp-col--4 lp-col--sm-2-2 lp-col--md-4-4',
    type: 'Selectable multiple'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const w=["Vertical"];export{e as Vertical,w as __namedExportsOrder,h as default};
