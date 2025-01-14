import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Pagination-Cvz8ZFTE.js";import{r as m,w as u}from"./vue.esm-bundler-BV06ZB-3.js";import"./v4-CQkTLCs1.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Molecules/Pagination",argTypes:{pageParam:{description:"The page parameter.",table:{type:{summary:"string"},defaultValue:{summary:"page"}}},perPage:{description:"Number of items per page.",table:{type:{summary:"number"}},required:!0},total:{description:"Total number of items.",table:{type:{summary:"number"}}},url:{description:"Add an url to the link (works if withLinks is active).",table:{type:{summary:"string"}}},value:{description:"Choose the highlighted link.",table:{type:{summary:"number"}},required:!0},withLinks:{description:"Active the url for each link.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",value:1,withLinks:!1}},e={render:a=>({components:{SolarisPagination:p},setup(){const t=m(a.value),i=l("input");return u(()=>a.value,o=>{t.value=o}),{args:a,currentPage:t,elementChange:i}},template:'<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>'}),args:{pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",value:5,withLinks:!1}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPagination
    },
    setup() {
      const currentPage = ref(args.value);
      const elementChange = action('input');
      watch(() => args.value, val => {
        currentPage.value = val;
      });
      return {
        args,
        currentPage,
        elementChange
      };
    },
    template: '<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>'
  }),
  args: {
    pageParam: "",
    perPage: 5,
    total: 1815,
    url: 'https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2',
    value: 5,
    withLinks: false
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["Pagination"];export{e as Pagination,w as __namedExportsOrder,v as default};
