import{d as S,m as w,a as z,a1 as C,r as L,l as T,o as n,e as l,F as M,x as B,v as f,t as _,u as b,f as d,y as v,B as i,z as N,b as y,I as V,J as U}from"./vue.esm-bundler-BHwbD8xO.js";import{S as A}from"./Icon-LmhyBlqB.js";import{S as G}from"./Picture-CBfxdjno.js";import{S as $}from"./Radio-CJnrNu4K.js";import{S as q}from"./Checkbox-BHJD1l2a.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j=["tabindex","onClick","onKeydown"],F={class:"tile__check"},K={class:"tile__container"},D={key:0,class:"tile__inputbox"},E={class:"tile__text"},H={key:0,class:"tile__text__title"},J={key:0},P={key:1,class:"tile__text__price"},R={key:0,class:"tile__text__price__value"},W={key:2,class:"tile__text__content"},Q={key:0},X={key:3,class:"tile__text__caption"},Y={key:0},Z={key:1,class:"tile__text__price--end"},x={key:0,class:"tile__text__price__value"},ee={key:0,class:"tile--more"},I=S({__name:"Tile",props:w({backgroundColor:{default:"transparent"},color:{default:"supernova"},disabledList:{},layout:{default:"default"},name:{},orientation:{default:"horizontal"},position:{default:"bottom"},selection:{default:"default"},showImagesOnMobile:{type:Boolean},size:{default:"large"},tiles:{},value:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(k){const r=k,m=z(k,"modelValue"),g=C(),h=L([]),o=(a,s)=>{var e;if(r.selection==="multiple"){const t=((e=r.value)==null?void 0:e.includes(a))??!1;return h.value[s]=t,t}else return r.value===a},p=a=>{var s;return(s=r.disabledList)==null?void 0:s.includes(a)},c=a=>{if(!p(a))if(r.selection==="multiple"){const s=[...r.value??[]];o(a)?m.value=s.filter(e=>e!==a):m.value=[...s,a]}else m.value=a};return T(()=>{r.selection==="multiple"&&(h.value=r.tiles.map(()=>!0))}),(a,s)=>(n(),l("div",{class:f(["tileGroup",`tileGroup--${a.orientation} tileGroup--${a.size}--${a.orientation} tileGroup--${a.layout}`])},[(n(!0),l(M,null,B(a.tiles,(e,t)=>(n(),l("div",{key:e.id,class:f(["tile--wrapper",[{"tile--checked":o(e.id)}]])},[_("div",{class:f(["tile",[`tile--bg-${a.backgroundColor}`,{"tile--disabled":p(e.id)}]]),tabindex:a.selection==="default"?0:-1,onClick:V(u=>c(e.id),["prevent"]),onKeydown:U(V(u=>c(e.id),["prevent"]),["space","enter"])},[b(g).tag&&t!==null&&o(e.id)||e.tag?(n(),l("div",{key:0,class:f(["tile__tag",`tile__tag--${e.tagColor||a.color}`])},[d(a.$slots,"tag",{index:t},()=>[_("span",null,v(e.tag),1)],!0)],2)):i("",!0),_("div",F,[N(A,{name:"action-check",class:"tile__checked-icon",title:o(e.id)?"Option sélectionnée":""},null,8,["title"])]),_("div",K,[a.orientation!=="vertical"&&a.selection!=="default"?(n(),l("div",D,[a.selection==="unique"?(n(),y($,{key:0,id:e.id,modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=u=>m.value=u),name:e.id,aria:{label:e.inputLabel?e.inputLabel:e.id},value:o(e.id)?e.id:null,disabled:p(e.id),type:"quiet",onInput:u=>c(e.id)},null,8,["id","modelValue","name","aria","value","disabled","onInput"])):a.selection==="multiple"?(n(),y(q,{key:1,id:e.id,modelValue:h.value[t],"onUpdate:modelValue":u=>h.value[t]=u,name:a.name,aria:{label:e.id},value:o(e.id,t),disabled:p(e.id),type:"quiet",onInput:u=>c(e.id)},null,8,["id","modelValue","onUpdate:modelValue","name","aria","value","disabled","onInput"])):i("",!0)])):i("",!0),e.image?(n(),y(G,{key:1,class:f(["tile__image",{"tile__image--hide-on-mobile":!a.showImagesOnMobile}]),"other-sources":[],"default-source":{url:e.image,alt:e.imageAlt??"",mimeType:"image/jpeg"},width:e.imageWidth??600,height:e.imageHeight??300},null,8,["class","default-source","width","height"])):i("",!0),_("div",E,[b(g).title&&t!==null&&o(e.id)||e.title?(n(),l("p",H,[d(a.$slots,"title",{index:t},()=>[e.title?(n(),l("span",J,v(e.title),1)):i("",!0)],!0)])):i("",!0),a.orientation==="vertical"||a.orientation==="automatic"||a.orientation==="horizontal"&&a.size==="small"?(n(),l("p",P,[d(a.$slots,"price",{index:t},()=>[e.price?(n(),l("span",R,v(e.price),1)):i("",!0)],!0)])):i("",!0),b(g).content&&t!==null&&o(e.id)||e.content?(n(),l("p",W,[d(a.$slots,"content",{index:t},()=>[e.content?(n(),l("span",Q,v(e.content),1)):i("",!0)],!0)])):i("",!0),b(g).caption&&t!==null&&o(e.id)||e.caption?(n(),l("p",X,[d(a.$slots,"caption",{index:t},()=>[e.caption?(n(),l("span",Y,v(e.caption),1)):i("",!0)],!0)])):i("",!0)]),d(a.$slots,"tile--right",{index:t},void 0,!0)]),a.orientation!=="vertical"&&a.orientation==="horizontal"&&a.size!=="small"||a.orientation==="automatic"?(n(),l("p",Z,[d(a.$slots,"price",{index:t},()=>[e.price?(n(),l("span",x,v(e.price),1)):i("",!0)],!0)])):i("",!0),a.orientation==="vertical"?(n(),l("div",{key:2,class:f(["tile__inputbox",{"tile__inputbox--top":a.position==="top"}])},[a.selection==="unique"?(n(),y($,{key:0,id:e.id,modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=u=>m.value=u),name:e.id,val:e.id,aria:{label:e.inputLabel?e.inputLabel:e.id},value:o(e.id)?e.id:null,disabled:p(e.id),type:"quiet",onInput:u=>c(e.id)},null,8,["id","modelValue","name","val","aria","value","disabled","onInput"])):i("",!0),a.selection==="multiple"?(n(),y(q,{key:1,id:e.id,name:a.name,aria:{label:e.id},value:o(e.id),disabled:p(e.id),type:"quiet",onInput:u=>c(e.id)},null,8,["id","name","aria","value","disabled","onInput"])):i("",!0)],2)):i("",!0)],42,j),b(g).more&&t!==null&&o(e.id)?(n(),l("div",ee,[d(a.$slots,"more",{index:t},void 0,!0)])):i("",!0)],2))),128))],2))}}),se=O(I,[["__scopeId","data-v-24435ef5"]]);I.__docgenInfo={exportName:"default",displayName:"Tile",description:"",tags:{},props:[{name:"backgroundColor",required:!1,type:{name:"union",elements:[{name:'"transparent"'},{name:'"white"'}]},defaultValue:{func:!1,value:"'transparent'"}},{name:"color",required:!1,type:{name:"colorType"},defaultValue:{func:!1,value:"'supernova'"}},{name:"disabledList",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"layout",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"list"'},{name:'"grid"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"name",required:!0,type:{name:"string"}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'},{name:'"automatic"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"selection",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"unique"'},{name:'"multiple"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"showImagesOnMobile",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'large'"}},{name:"tiles",required:!0,type:{name:"Array",elements:[{name:"TileType"}]}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}}],slots:[{name:"tag",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"title",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"price",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"content",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"caption",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"tile--right",scoped:!0,bindings:[{name:"index",title:"binding"}]},{name:"more",scoped:!0,bindings:[{name:"index",title:"binding"}]}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/organisms/Tile/Tile.vue"]};export{se as S};
