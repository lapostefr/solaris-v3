import{S as E,a as J,b as w}from"./FooterCopyright-DYA6QBqJ.js";import{S as C}from"./Row-DZ8a-MQ6.js";import{S as R}from"./FooterBottom-CGf462Jx.js";import{a as L,b,t as s,e as v,l as B,c as N,p as _,d as O,f as e,h as o}from"./texts-DD3YWNds.js";import{r as t}from"./vue.esm-bundler-BHwbD8xO.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-CBfxdjno.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";import"./LogoNew-Dajnl_kr.js";const q="#",T="#",j="#",z="#",D={facebook:q,twitter:T,instagram:j,youtube:z},G=[{title:"Nos services",links:o},{title:"Nos produits",links:o},{title:"Nos tarifs",links:o},{title:"Rubriques",links:o}],Z={title:"Organisms/Footer",argTypes:{},args:{}},n={render:l=>({components:{SolarisFullFooter:E,SolarisFooterEngagement:J,SolarisRow:C,SolarisFooterBottom:R,SolarisFooterCopyright:w},setup(){const p=t(L),g=t(b),c=t(D),m=t(s.copyright),d=t(v),S=t(G),F=t(B),f=t(N),y=t(_),h=t(s.text),k=t(O),u=t(e.apps),x=t(e.connected),A=t(e.engagements);return{args:l,appLink:p,titleApps:u,apps:g,connected:c,titleConnected:x,engagements:d,titleEngagements:A,headings:S,links:F,logo:f,partner:y,text:h,pros:k,copyright:m}},template:`<div style="margin-top: 300px;">
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
    </div>`})};var r,i,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFullFooter,
      SolarisFooterEngagement,
      SolarisRow,
      SolarisFooterBottom,
      SolarisFooterCopyright
    },
    setup() {
      const appLink = ref(allAppsLink);
      const apps = ref(appsArray);
      const connected = ref(connectedSimple);
      const copyright = ref(texts.copyright);
      const engagements = ref(engagementArray);
      const headings = ref(headingsArray);
      const links = ref(linksJson);
      const logo = ref(logoJson);
      const partner = ref(partnerJson);
      const text = ref(texts.text);
      const pros = ref(prosJson);
      const titleApps = ref(title.apps);
      const titleConnected = ref(title.connected);
      const titleEngagements = ref(title.engagements);
      return {
        args,
        appLink,
        titleApps,
        apps,
        connected,
        titleConnected,
        engagements,
        titleEngagements,
        headings,
        links,
        logo,
        partner,
        text,
        pros,
        copyright
      };
    },
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
  })
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const $=["SimplifiedFooter"];export{n as SimplifiedFooter,$ as __namedExportsOrder,Z as default};
