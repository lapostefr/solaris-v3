import{a as p,b as l,t as o,e as g,l as c,c as m,p as d,d as y,f as n,h as t}from"./texts-B8STWcJn.js";const S="#",k="#",F="#",h="#",x={facebook:S,twitter:k,instagram:F,youtube:h},u=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],E={title:"Organisms/Footer",argTypes:{},args:{}},e=(A,{argTypes:i})=>({props:Object.keys(i),data:()=>({appLink:p,apps:l,connected:x,copyright:o.copyright,engagements:g,headings:u,links:c,logo:m,partner:d,pros:y,text:o.text,titleApps:n.apps,titleConnected:n.connected,titleEngagements:n.engagements}),template:`<div style="margin-top: 300px;">
    <SolarisFullFooter>
      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>
    </SolarisFullFooter>
  </div>`});var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    appLink: allAppsLink,
    apps: appsArray,
    connected: connectedSimple,
    copyright: texts.copyright,
    engagements: engagementArray,
    headings: headingsArray,
    links: links,
    logo: logo,
    partner: partner,
    pros: pros,
    text: texts.text,
    titleApps: title.apps,
    titleConnected: title.connected,
    titleEngagements: title.engagements
  }),
  template: \`<div style="margin-top: 300px;">
    <SolarisFullFooter>
      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>
    </SolarisFullFooter>
  </div>\`
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const b=["SimplifiedFooter"];export{e as SimplifiedFooter,b as __namedExportsOrder,E as default};
