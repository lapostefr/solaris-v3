import{d as p,l as c,a as C,b as B,t as r,e as J,c as v,p as R,f as n,h as t}from"./texts-DD3YWNds.js";import{a as T}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as E,a as N,b as V,c as z}from"./FooterBottom-CbwxZjwo.js";import{S as H,a as _,b as D,c as O}from"./FooterHeadingsList-C53gLp4t.js";import{S as q}from"./Row-D48iw7CG.js";import{S as I}from"./Picture-DIMOpAs8.js";import{r as e}from"./vue.esm-bundler-BIhSTzsT.js";import"./v4-CQkTLCs1.js";import"./Icon-DZ5u0r7n.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LogoNew-sW4UQnxF.js";import"./index-BaiQJBqJ.js";import"./iframe-D6nVvq4z.js";import"../sb-preview/runtime.js";const M=`[
{
url: string;
text: string
}
]`,W=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],X=[{name:"linkedin",label:"Compte Linkedin La Poste",url:"#"},{name:"instagram",label:"Compte Instagram La Poste",url:"#"},{name:"x",label:"Compte X La Poste",url:"#"},{name:"tiktok",label:"Compte Tiktok La Poste",url:"#"},{name:"facebook",label:"Compte Facebook La Poste",url:"#"},{name:"youtube",label:"Compte Youtube La Poste",url:"#"},{name:"threads",label:"Compte Threads La Poste",url:"#"}],a=`[
  {
    label?: string
    url?: string
    target?: '_blank' | '_self'
  }
]`,Y=`[
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
]`,j=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],le={title:"Organisms/Footer",argTypes:{altLogo:{description:"Specifies the alternative text for the logo.",table:{type:{summary:"string"},category:"FooterBottom props"},defaultValue:{summary:"La Poste, aller à l'accueil"}},externalLinks:{description:"Add pros links at the bottom footer.",table:{type:{summary:"array",detail:a}}},hasStaticLinks:{description:"To use the static links of the footer legacy.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},moreLinks:{description:"When using the legacy footer, add more links at the bottom footer.",table:{type:{summary:"array",detail:M}}},newLinks:{description:"Add links at the bottom footer.",table:{type:{summary:"array",detail:a}}},newPartners:{description:"Add image for partners.",table:{type:{summary:"array",detail:Y}}},showBackButton:{description:'Show the "Back to top" button.',table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},activeBack:{description:'*Activate the "Back to top" button. This prop is <span style="color:orange">deprecated</span>, use ShowBackButton. *',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"}},borderTop:{description:'*Show a border at the top of the footer.This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"}}},args:{altLogo:"La Poste, aller à l'accueil",externalLinks:p,hasStaticLinks:!1,moreLinks:W,newLinks:c,newPartners:[{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}}],showBackButton:!0,activeBack:!1,borderTop:!1}},o={render:g=>({components:{SolarisFullFooter:E,SolarisFooterEngagement:N,SolarisRow:q,SolarisFooterHeadingsList:H,SolarisFooterBottom:V,SolarisPicture:I,SolarisFooterApps:_,SolarisFooterAppLink:D,SolarisFooterSocial:O,SolarisFooterCopyright:z},setup(){const m=e(C),d=e(B),u=e(X),k=e(r.copyright),S=e(J),h=e(j),y=e(c),L=e(v),f=e(R),F=e(r.text),b=e(p),A=e(n.apps),P=e(n.connected),w=e(n.engagements),x=T("logoClicked");return{args:g,appLink:m,titleApps:A,apps:d,connected:u,titleConnected:P,engagements:S,titleEngagements:w,headings:h,links:y,logo:L,partner:f,text:F,pros:b,copyright:k,handleLogoClick:x}},template:`
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
        <SolarisFooterBottom @logo-clicked="handleLogoClick"
          :altLogo="args.altLogo"
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
  `})};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      const handleLogoClick = action('logoClicked');
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
        copyright,
        handleLogoClick
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
        <SolarisFooterBottom @logo-clicked="handleLogoClick"
          :altLogo="args.altLogo"
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const pe=["FullFooter"];export{o as FullFooter,pe as __namedExportsOrder,le as default};
