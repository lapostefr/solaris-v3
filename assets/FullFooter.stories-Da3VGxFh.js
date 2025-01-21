import{d as p,l as c,a as P,b as C,t as r,e as J,c as B,p as v,f as n,h as t}from"./texts-DD3YWNds.js";import{S as R,a as T,b as E}from"./FooterCopyright-DYA6QBqJ.js";import{S as N,a as z,b as H,c as V}from"./FooterHeadingsList-C2ptp0WC.js";import{S as _}from"./Row-DZ8a-MQ6.js";import{S as D}from"./FooterBottom-CGf462Jx.js";import{S as O}from"./Picture-CBfxdjno.js";import{r as e}from"./vue.esm-bundler-BHwbD8xO.js";import"./Icon-LmhyBlqB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-pMn-qRVg.js";import"./LogoNew-Dajnl_kr.js";import"./iframe-DPwVOnAS.js";import"../sb-preview/runtime.js";const q=`[
{
url: string;
text: string
}
]`,I=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],M=[{name:"linkedin",label:"Compte Linkedin La Poste",url:"#"},{name:"instagram",label:"Compte Instagram La Poste",url:"#"},{name:"x",label:"Compte X La Poste",url:"#"},{name:"tiktok",label:"Compte Tiktok La Poste",url:"#"},{name:"facebook",label:"Compte Facebook La Poste",url:"#"},{name:"youtube",label:"Compte Youtube La Poste",url:"#"},{name:"threads",label:"Compte Threads La Poste",url:"#"}],s=`[
  {
    label?: string
    url?: string
    target?: '_blank' | '_self'
  }
]`,W=`[
  {
    url?: string
    image: {
      defaultSource: {
        width: number
        height: number
        url: string
        alt?: string
        mimeType: string
      }
    }
  }
]`,X=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],se={title:"Organisms/Footer",argTypes:{externalLinks:{description:"Add pros links at the bottom footer.",table:{type:{summary:"array",detail:s}}},hasStaticLinks:{description:"To use the static links of the footer legacy.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},moreLinks:{description:"When using the legacy footer, add more links at the bottom footer.",table:{type:{summary:"array",detail:q}}},newLinks:{description:"Add links at the bottom footer.",table:{type:{summary:"array",detail:s}}},newPartners:{description:"Add image for partners.",table:{type:{summary:"array",detail:W}}},showBackButton:{description:'Show the "Back to top" button.',table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},activeBack:{description:'*Activate the "Back to top" button. This prop is <span style="color:orange">deprecated</span>, use ShowBackButton. *',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"}},borderTop:{description:'*Show a border at the top of the footer.This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"}}},args:{externalLinks:p,hasStaticLinks:!1,moreLinks:I,newLinks:c,newPartners:[{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}}],showBackButton:!0,activeBack:!1,borderTop:!1}},o={render:g=>({components:{SolarisFullFooter:R,SolarisFooterEngagement:T,SolarisRow:_,SolarisFooterHeadingsList:N,SolarisFooterBottom:D,SolarisPicture:O,SolarisFooterApps:z,SolarisFooterAppLink:H,SolarisFooterSocial:V,SolarisFooterCopyright:E},setup(){const m=e(P),d=e(C),u=e(M),S=e(r.copyright),k=e(J),h=e(X),y=e(c),F=e(B),f=e(v),b=e(r.text),L=e(p),A=e(n.apps),w=e(n.connected),x=e(n.engagements);return{args:g,appLink:m,titleApps:A,apps:d,connected:u,titleConnected:w,engagements:k,titleEngagements:x,headings:h,links:y,logo:F,partner:f,text:b,pros:L,copyright:S}},template:`
    <div style="margin-top: 50px;">
    <SolarisFullFooter v-bind="args">

      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterApps :title="titleApps" :apps="apps" />
        <SolarisFooterAppLink :link="appLink" />
        <SolarisFooterSocial :title="titleConnected" :connected="connected" />
      </SolarisRow>

      <SolarisFooterHeadingsList :headings="headings" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :site-title="args.siteTitle"
          :logo-size="args.logoSize"
          universe="part"
          :newPartners="args.newPartners"
          :moreLinks="args.moreLinks"
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>

    </SolarisFullFooter>
    </div>
  `})};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFullFooter,
      SolarisFooterEngagement,
      SolarisRow,
      SolarisFooterHeadingsList,
      SolarisFooterBottom,
      SolarisPicture,
      SolarisFooterApps,
      SolarisFooterAppLink,
      SolarisFooterSocial,
      SolarisFooterCopyright
    },
    setup() {
      const appLink = ref(allAppsLinkJson);
      const apps = ref(appsArrayJson);
      const connected = ref(connectedJson);
      const copyright = ref(textsJson.copyright);
      const engagements = ref(engagementArray);
      const headings = ref(headingsArray);
      const links = ref(linksJson);
      const logo = ref(logoJson);
      const partner = ref(partnerJson);
      const text = ref(textsJson.text);
      const pros = ref(externalLinksJson);
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
    template: \`
    <div style="margin-top: 50px;">
    <SolarisFullFooter v-bind="args">

      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterApps :title="titleApps" :apps="apps" />
        <SolarisFooterAppLink :link="appLink" />
        <SolarisFooterSocial :title="titleConnected" :connected="connected" />
      </SolarisRow>

      <SolarisFooterHeadingsList :headings="headings" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :site-title="args.siteTitle"
          :logo-size="args.logoSize"
          universe="part"
          :newPartners="args.newPartners"
          :moreLinks="args.moreLinks"
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>

    </SolarisFullFooter>
    </div>
  \`
  })
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const ae=["FullFooter"];export{o as FullFooter,ae as __namedExportsOrder,se as default};
