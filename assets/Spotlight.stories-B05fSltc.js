import{S as r}from"./Spotlight-Dv2hX_6r.js";import"./vue.esm-bundler-DbnnIJWB.js";import"./Button-jFHmCyiG.js";import"./Icon-BFYv-dj3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-BRt8ee7f.js";import"./Tooltip-CNCAgM55.js";import"./index-7Yv3mQsR.js";const s=[{title:"Title 1",description:"Description 1 : Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},{title:"Title 2",description:"Description 2 : enean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."},{title:"Title 3",description:"Description 3 : Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint. Sed quibusdam recusandae."},{title:"Title 4",description:"Description 4 : Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. "}],n=`[
  {
    title: string,
    description: string
  }
]`,a=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],h={title:"Molecules/Spotlight",argTypes:{forceShow:{description:"Is the spotlight is visible when the component is mounted",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},placement:{description:"Control doesn't work because Tooltip generated after DOM loading, please use Docs section for testing",table:{type:{summary:"string"},defaultValue:{summary:"top"}},control:{type:"select"},options:a},size:{description:"Choose the size of the spotlight",table:{type:{summary:"boolean"},defaultValue:{summary:"reponsive"}},control:{type:"select"},options:["responsive","compact"]},spotlights:{description:"Define all spotlights with title and description",table:{type:{summary:"array",detail:n}},required:!0}},args:{placement:"top",size:"responsive",spotlights:s,forceShow:!1}},t={render:l=>({components:{SolarisSpotlight:r},setup(){return{args:l}},template:`<div style="height: 750px; display: flex; align-items: center; justify-content: center;">
      <SolarisSpotlight v-bind="args"> 
        <template v-slot:trigger>
          <SolarisButton>Spotlight Trigger</SolarisButton>
        </template>
        <template v-slot:content>
          <div style="padding: 20px;">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
            </div>
          </div>
        </template>
      </SolarisSpotlight>
    </div>`}),args:{placement:"top",size:"responsive",spotlights:s,forceShow:!0,title:"Title"}};var e,i,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSpotlight
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 750px; display: flex; align-items: center; justify-content: center;">
      <SolarisSpotlight v-bind="args"> 
        <template v-slot:trigger>
          <SolarisButton>Spotlight Trigger</SolarisButton>
        </template>
        <template v-slot:content>
          <div style="padding: 20px;">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
            </div>
          </div>
        </template>
      </SolarisSpotlight>
    </div>\`
  }),
  args: {
    placement: 'top',
    size: 'responsive',
    spotlights: spotlights,
    forceShow: true,
    title: 'Title'
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const f=["Spotlight"];export{t as Spotlight,f as __namedExportsOrder,h as default};
