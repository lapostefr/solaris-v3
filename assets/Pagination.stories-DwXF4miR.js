import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as l}from"./Pagination-B8ZmYW4n.js";import{r as m}from"./vue.esm-bundler-BQVOD3cV.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Molecules/Pagination",argTypes:{labelPrefix:{description:"Add a prefix to page number in the aria-label.",table:{type:{summary:"string"}}},pageParam:{description:"The page parameter.",table:{type:{summary:"string"},defaultValue:{summary:"page"}}},perPage:{description:"Number of items per page.",table:{type:{summary:"number"}},required:!0},total:{description:"Total number of items.",table:{type:{summary:"number"}}},url:{description:"Add an url to the link (works if withLinks is active).",table:{type:{summary:"string"}}},modelValue:{description:"Choose the highlighted link.",table:{type:{summary:"number"}},required:!0},withLinks:{description:"Active the url for each link.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={render:n=>({components:{SolarisPagination:l},setup(){const i=m(1),s=o("input");return{args:n,currentPage:i,elementChange:s}},template:'<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange" />'}),args:{labelPrefix:"",pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",withLinks:!1}};var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPagination
    },
    setup() {
      const currentPage = ref(1);
      const elementChange = action('input');
      return {
        args,
        currentPage,
        elementChange
      };
    },
    template: '<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange" />'
  }),
  args: {
    labelPrefix: '',
    pageParam: '',
    perPage: 5,
    total: 1815,
    url: 'https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2',
    withLinks: false
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const h=["Pagination"];export{e as Pagination,h as __namedExportsOrder,b as default};
