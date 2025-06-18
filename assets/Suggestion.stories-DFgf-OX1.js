import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as b,c as h}from"./Input-RS4yhFRP.js";import{S as y}from"./Switch-DvT8uLpb.js";import{c as w}from"./details-BVBOxkrW.js";import{a as x}from"./argsType-DZmVIovu.js";import{r as i,c as C}from"./vue.esm-bundler-CaiLyLZC.js";import{L as B}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./Icon-CPWlc7Vn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-oSLk5Wwy.js";import"./index-CAhNJgAn.js";import"./generateId-CVaf2GGW.js";import"./Button-DSIzHRrB.js";import"./Loader-DLZ96k5G.js";import"./Message-BhgJ819g.js";const I=[{label:"Paris",value:1},{label:"Renaison",value:2},{label:"Angoulême",value:3},{label:"Marseille",value:4},{label:"Marennes",value:5},{label:"Martigues",value:6},{label:"Bordeaux",value:7},{label:"Rennes",value:8},{label:"Angers",value:9},{label:"Toulon",value:10},{label:"Toulouse",value:11},{label:"Parigny",value:12},{label:"Parnay",value:13},{label:"Tours",value:14},{label:"Marne-la-Vallée",value:15}],k={title:"Atoms/TextInput/Suggestion",argTypes:{...x,suggestions:{description:"Collection of suggestion items that appear based on user input.<br/>*Note: In this storie example, enter the first 3 letters to see how the suggestions match.*",table:{type:{summary:"array",detail:w}}}},args:{aria:{label:"test"},autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",labelPosition:B.inside,mandatory:!1,max:99,maxlength:30,message:"Voilà le message",min:10,numericOnly:!1,name:"name",placeholder:"",readonly:!1,size:b.medium,success:!1,suggestions:I,type:"text"}},o={render:a=>({components:{SolarisInput:h,SolarisSwitch:y},setup(){const n=i(""),t=i(!1),s=i([...a.suggestions]),c=()=>{s.value=[...a.suggestions],l("input")},m=e=>{n.value=e.label,s.value=[],l("suggestionSelect")(e)},p=e=>{s.value=[],l("closeSuggestions")(e)},v=e=>{t.value||(s.value=[]),l("blur")(e)},d=()=>{t.value=!t.value},S=C(()=>{const e=n.value.toLowerCase();return e?s.value.filter(f=>f.label.toLowerCase().slice(0,3)===e.toLowerCase().slice(0,3)):[]});return{args:a,model:n,preventCloseOnBlur:t,changeElement:c,selectedSuggestion:m,close:p,onBlur:v,toggleSwitch:d,filterSuggestions:S}},template:`
    <div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
      <SolarisInput 
          v-model="model" 
          v-bind="args"
          :suggestions="filterSuggestions "
          @input="changeElement"
          @blur="onBlur"
          @suggestionSelect="selectedSuggestion"
          @closeSuggestions="close"
      />
  
      <SolarisSwitch
          style="position: fixed; bottom: 25px; right: 150px;"
          id="switchId"
          label="Force listbox display on blur"
          :value="preventCloseOnBlur"
          @input="toggleSwitch"
      />
    </div>`})};var r,u,g;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInput,
      SolarisSwitch
    },
    setup() {
      const model = ref('');
      const preventCloseOnBlur = ref(false);
      const localSuggestions = ref([...args.suggestions]);
      const changeElement = () => {
        localSuggestions.value = [...args.suggestions];
        action('input');
      };
      const selectedSuggestion = (item: any) => {
        model.value = item.label;
        localSuggestions.value = [];
        action('suggestionSelect')(item);
      };
      const close = (event: any) => {
        localSuggestions.value = [];
        action('closeSuggestions')(event);
      };
      const onBlur = (event: any) => {
        if (!preventCloseOnBlur.value) {
          localSuggestions.value = [];
        }
        action('blur')(event);
      };
      const toggleSwitch = () => {
        preventCloseOnBlur.value = !preventCloseOnBlur.value;
      };
      const filterSuggestions = computed(() => {
        const query = model.value.toLowerCase();
        if (!query) return [];
        return localSuggestions.value.filter((suggestion: any) => suggestion.label.toLowerCase().slice(0, 3) === query.toLowerCase().slice(0, 3));
      });
      return {
        args,
        model,
        preventCloseOnBlur,
        changeElement,
        selectedSuggestion,
        close,
        onBlur,
        toggleSwitch,
        filterSuggestions
      };
    },
    template: \`
    <div style="height: calc(100vh - 2rem); padding: 15vh 3vw;">
      <SolarisInput 
          v-model="model" 
          v-bind="args"
          :suggestions="filterSuggestions "
          @input="changeElement"
          @blur="onBlur"
          @suggestionSelect="selectedSuggestion"
          @closeSuggestions="close"
      />
  
      <SolarisSwitch
          style="position: fixed; bottom: 25px; right: 150px;"
          id="switchId"
          label="Force listbox display on blur"
          :value="preventCloseOnBlur"
          @input="toggleSwitch"
      />
    </div>\`
  })
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const D=["Suggestion"];export{o as Suggestion,D as __namedExportsOrder,k as default};
