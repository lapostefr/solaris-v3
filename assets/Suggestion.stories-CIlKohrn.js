import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Input-B2dYoFF6.js";import{r as i,c as h}from"./vue.esm-bundler-BV06ZB-3.js";import{L as y}from"./types-Dd7QR7uO.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip--bRklYKV.js";import"./index-Lw3s2UWX.js";import"./Button-DIKv7yJx.js";import"./Loader-DKFivUin.js";import"./generateId-DPOzJEtM.js";const w=[{label:"Paris",value:1},{label:"Renaison",value:2},{label:"Angoulême",value:3},{label:"Marseille",value:4},{label:"Marennes",value:5},{label:"Martigues",value:6},{label:"Bordeaux",value:7},{label:"Rennes",value:8},{label:"Angers",value:9},{label:"Toulon",value:10},{label:"Toulouse",value:11},{label:"Parigny",value:12},{label:"Parnay",value:13},{label:"Tours",value:14},{label:"Marne-la-Vallée",value:15}],R={title:"Atoms/TextInput/Suggestion",args:{aria:{label:"test"},autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",labelPosition:y.inside,mandatory:!1,max:99,maxlength:30,message:"Voilà le message",min:10,numericOnly:!1,name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,suggestions:w,type:"text"}},o={render:a=>({components:{SolarisInput:f},setup(){const n=i(""),s=i(!1),l=i([...a.suggestions]),c=()=>{l.value=[...a.suggestions],t("input")},m=e=>{n.value=e.label,l.value=[],t("suggestionSelect")(e)},v=e=>{l.value=[],t("closeSuggestions")(e)},p=e=>{s.value||(l.value=[]),t("blur")(e)},d=()=>{s.value=!s.value},S=h(()=>{const e=n.value.toLowerCase();return e?l.value.filter(b=>b.label.toLowerCase().slice(0,3)===e.toLowerCase().slice(0,3)):[]});return{args:a,model:n,preventCloseOnBlur:s,changeElement:c,selectedSuggestion:m,close:v,onBlur:p,toggleSwitch:d,filterSuggestions:S}},template:`
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
    </div>`})};var u,r,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInput
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
}`,...(g=(r=o.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const F=["Suggestion"];export{o as Suggestion,F as __namedExportsOrder,R as default};
