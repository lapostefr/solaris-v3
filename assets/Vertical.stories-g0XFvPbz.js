import{c as r}from"./argsType-CXCW4JM4.js";import{d}from"./imageDefaultSource-CMm1GdPE.js";import{o as c}from"./imageOtherSources-B73Rbm2K.js";import{S as p}from"./Tile-DKkPeQUR.js";import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-BTt4q-w2.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";import"./Radio-D90bWRQi.js";import"./Checkbox-1Ng9DjFN.js";import"./generateId-DPOzJEtM.js";import"./v4-CQkTLCs1.js";const s=[{card:{expanded:!1,fullClickable:!0,layout:"vertical",showImagesOnMobile:!0,title:{content:"Card Title - First"}},checked:!1,disabled:!1,id:"radioTestA",name:"radioTestA",toggleText:"Voir plus",value:"radioA"},{card:{bodyText:"Lorem Ipsum",expanded:!1,fullClickable:!0,layout:"vertical",link:"www.laposte.fr",picture:{defaultSource:d,otherSources:c,width:80,height:80,alt:"Lorem Ipsum"},showImagesOnMobile:!0,title:{content:"Card Title - Second",fontSize:"18px",icon:"package-delivery",isFull:!0,isOnTop:!0,lineHeight:"24px",titleLevel:"h3",weight:"700"},triggerTag:"label"},checked:!0,disabled:!1,id:"radioTestB",name:"radioTestA",toggleText:"Voir plus",value:"radioB"}],O={title:"Organisms/Tile (New)",argTypes:r,args:{nested:!1,options:s,setItemClass:"lp-col--4 lp-col--sm-2-2 lp-col--md-4-4",type:"Selectable multiple"}},e={render:a=>({components:{SolarisTile:p},setup(){const i=m("cardClicked");return{args:a,cardClicked:i}},template:`<section class="demo">
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
    </section>`}),args:{nested:!1,options:s,setItemClass:"lp-col--4 lp-col--sm-2-2 lp-col--md-4-4",type:"Selectable multiple"}};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    options: tileOptions,
    setItemClass: 'lp-col--4 lp-col--sm-2-2 lp-col--md-4-4',
    type: 'Selectable multiple'
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const B=["Vertical"];export{e as Vertical,B as __namedExportsOrder,O as default};
