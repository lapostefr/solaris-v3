import{d as p,l as m,a as T,b as B,t as r,e as C,c as J,p as R,f as n,h as t}from"./texts-B8STWcJn.js";import{S as E,a as X,b as z}from"./FooterHeadingsList-BZaBsdSk.js";import{S as N}from"./Row-BAvzIbQK.js";import{S as V}from"./FooterBottom-BcL4c5Ha.js";import{S as j}from"./Picture-BTt4q-w2.js";import{r as e}from"./vue.esm-bundler-BV06ZB-3.js";import"./Icon-R0HSrbr6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Lw3s2UWX.js";import"./LogoNew-tJgIKI_q.js";import"./iframe-BkXPIAOt.js";import"../sb-preview/runtime.js";const H=`[
{
url: string;
text: string
}
]`,_=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],$=[{name:"linkedin",label:"Compte Linkedin La Poste",url:"#"},{name:"instagram",label:"Compte Instagram La Poste",url:"#"},{name:"x",label:"Compte X La Poste",url:"#"},{name:"tiktok",label:"Compte Tiktok La Poste",url:"#"},{name:"facebook",label:"Compte Facebook La Poste",url:"#"},{name:"youtube",label:"Compte Youtube La Poste",url:"#"},{name:"threads",label:"Compte Threads La Poste",url:"#"}],g=[{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"Nom Partenaire 2 - aller sur site",mimeType:"image/jpeg"}}},{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"Nom Partenaire 3 - aller sur site",mimeType:"image/jpeg"}}},{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"Nom Partenaire 4 - aller sur site",mimeType:"image/jpeg"}}}],s=`[
  {
    label?: string
    url?: string
    target?: '_blank' | '_self'
  }
]`,M=`[
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
]`,D=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],oe={title:"Organisms/Footer",argTypes:{externalLinks:{description:"Add pros links at the bottom footer.",table:{type:{summary:"array",detail:s}}},hasStaticLinks:{description:"To use the static links of the footer legacy.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},moreLinks:{description:"When using the legacy footer, add more links at the bottom footer.",table:{type:{summary:"array",detail:H}}},newLinks:{description:"Add links at the bottom footer.",table:{type:{summary:"array",detail:s}}},newPartners:{description:"Add image for partners.",table:{type:{summary:"array",detail:M}}},showBackButton:{description:'Show the "Back to top" button.',table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},logoSize:{description:"The type of the logo.",table:{type:{summary:["XXSmall","XSmall","Small","Medium","Large"].join(" | ")},category:"FooterBottom props"},defaultValue:{summary:"Large"},control:{type:"select"},options:["XXSmall","XSmall","Small","Medium","Large"]},siteTitle:{description:"Add a universe title next to the logo",table:{type:{summary:"string"},category:"FooterBottom props"}},activeBack:{description:'*Activate the "Back to top" button. This prop is <span style="color:orange">deprecated</span>, use ShowBackButton. *',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"}},borderTop:{description:'*Show a border at the top of the footer.This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"}}},args:{externalLinks:p,hasStaticLinks:!1,moreLinks:_,newLinks:m,newPartners:g,showBackButton:!0,universe:"part",logoSize:"Large",siteTitle:"",activeBack:!1,borderTop:!1}},o={render:c=>({components:{SolarisFullFooter:E,SolarisFooterEngagement:X,SolarisRow:N,SolarisFooterHeadingsList:z,SolarisFooterBottom:V,SolarisPicture:j},setup(){const d=e(T),u=e(B),h=e($),y=e(r.copyright),S=e(C),k=e(D),f=e(m),b=e(J),F=e(R),L=e(g),w=e(r.text),P=e(p),x=e(n.apps),A=e(n.connected),v=e(n.engagements);return{args:c,appLink:d,titleApps:x,apps:u,connected:h,titleConnected:A,engagements:S,titleEngagements:v,headings:k,links:f,logo:b,partner:F,newPartners:L,text:w,pros:P,copyright:y}},template:`
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
      SolarisPicture
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
      const newPartners = ref(newPartnersJson);
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
        newPartners,
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const ne=["FullFooter"];export{o as FullFooter,ne as __namedExportsOrder,oe as default};
