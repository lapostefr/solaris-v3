import{a as t,L as s}from"./useTips-Bh2BOp5E.js";const l=`[
  {
    url: string,
    label: string,
    rel?: ${t},
    target?: ${s},
    title?: string
  }
]`,o=["supernova","cobalt","pink","blue","green","purple"],a=["h2","h3","h4","h5","h6","p"],e={color:{description:"The color of the tips.",table:{type:{summary:"string"},defaultValue:{summary:"supernova"}},control:{type:"select"},options:o},compact:{description:"Compact size to use in sidebar or mobile.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},description:{description:"Description slot of the tips.",type:{summary:"string"}},icon:{description:"Remove or showing a specific icon.",table:{type:{summary:"string"},defaultValue:{summary:"action-tips"}}},links:{description:"Links of the tips.",table:{type:{summary:"array",detail:l}}},title:{description:"Title of the tips.",type:{summary:"string"}},titleLevel:{description:"The size of the titre.",table:{type:{summary:["h2","h3","h4","h5","h6","p"]},defaultValue:{summary:"h3"}},control:{type:"select"},options:a}},r={...e,isClosable:{description:"Is closable ? showing/hidding curse.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},n={...e,isCollapse:{description:"Collapsible like accordion if is true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},show:{description:"Collapse is open if True.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},p=[{url:"#",label:"Add a link 1"},{url:"###",label:"Add a link 2",target:"_blank"}];export{r as a,n as b,p as l};
